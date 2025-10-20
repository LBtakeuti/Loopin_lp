import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// フォームデータの型定義
interface ContactFormData {
  inquiryType: string
  companyName: string
  position: string
  lastName: string
  firstName: string
  email: string
  phone: string
  message: string
  agreement: boolean
}

// Supabaseクライアントの初期化（サーバーサイド用）
const getSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase environment variables are not set')
    return null
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}

// お問い合わせの種類のラベルマップ
const inquiryTypeLabels: Record<string, string> = {
  product: '製品について',
  pricing: '料金について',
  demo: 'デモのご依頼',
  partnership: 'パートナーシップ',
  other: 'その他',
}

export async function POST(request: NextRequest) {
  try {
    // リクエストボディを取得
    const body: ContactFormData = await request.json()
    console.log('Received contact form submission:', {
      email: body.email,
      inquiryType: body.inquiryType
    })

    // Supabaseクライアントを取得
    const supabase = getSupabaseClient()

    // Supabaseにデータを保存
    if (supabase) {
      const { error: supabaseError } = await supabase
        .from('contacts')
        .insert([
          {
            inquiry_type: body.inquiryType,
            company_name: body.companyName,
            position: body.position || null,
            last_name: body.lastName,
            first_name: body.firstName,
            email: body.email,
            phone: body.phone,
            message: body.message || null,
          }
        ])

      if (supabaseError) {
        console.error('Supabase insert error:', supabaseError)
        // Supabaseへの保存に失敗してもSlack通知は試みる
      } else {
        console.log('Successfully saved to Supabase')
      }
    } else {
      console.warn('Supabase client is not available, skipping database save')
    }

    // 環境変数からSlack Webhook URLを取得
    const webhookUrl = process.env.SLACK_WEBHOOK_URL

    if (!webhookUrl) {
      console.error('SLACK_WEBHOOK_URL is not defined in environment variables')
      console.error('Available env vars:', Object.keys(process.env).filter(k => k.includes('SLACK')))
      return NextResponse.json(
        { error: 'Server configuration error: Slack webhook URL not configured' },
        { status: 500 }
      )
    }

    console.log('Slack webhook URL is configured, preparing message...')

    // Slackメッセージのフォーマット
    const slackMessage = {
      text: '🔔 新しいお問い合わせが届きました',
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '🔔 新しいお問い合わせ',
            emoji: true,
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*お問い合わせの種類:*\n${inquiryTypeLabels[body.inquiryType] || body.inquiryType}`,
            },
            {
              type: 'mrkdwn',
              text: `*会社名:*\n${body.companyName}`,
            },
          ],
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*お名前:*\n${body.lastName} ${body.firstName}`,
            },
            {
              type: 'mrkdwn',
              text: `*役職:*\n${body.position || '未記入'}`,
            },
          ],
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*メールアドレス:*\n${body.email}`,
            },
            {
              type: 'mrkdwn',
              text: `*電話番号:*\n${body.phone}`,
            },
          ],
        },
      ],
    }

    // お問い合わせ内容がある場合は追加
    if (body.message) {
      slackMessage.blocks.push({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*お問い合わせ内容:*\n${body.message}`,
        },
      })
    }

    // 区切り線を追加
    slackMessage.blocks.push({
      type: 'divider',
    })

    // タイムスタンプを追加
    slackMessage.blocks.push({
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: `受信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}`,
        },
      ],
    })

    // Slackにメッセージを送信
    console.log('Sending message to Slack...')
    const slackResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage),
    })

    if (!slackResponse.ok) {
      const errorText = await slackResponse.text()
      console.error('Failed to send message to Slack:', {
        status: slackResponse.status,
        statusText: slackResponse.statusText,
        error: errorText
      })
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      )
    }

    console.log('Successfully sent notification to Slack')

    // 成功レスポンス
    return NextResponse.json(
      { message: 'お問い合わせを受け付けました' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      })
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
