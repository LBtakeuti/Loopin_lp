'use client'

import Image from 'next/image'
import Link from 'next/link'
import ContactButton from '@/components/ContactButton'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // エラーをログに記録
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 500画像 */}
        <div className="mb-8">
          <Image
            src="/images/500_image.png"
            alt="500 Internal Server Error"
            width={600}
            height={400}
            className="mx-auto"
            priority
          />
        </div>

        {/* エラーメッセージ */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          エラーが発生しました
        </h1>
        <p className="text-gray-600 mb-8">
          申し訳ございません。予期しないエラーが発生しました。
          <br />
          問題が解決しない場合は、お手数ですがお問い合わせください。
        </p>

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="inline-block px-8 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-gradient-blue to-gradient-purple hover:opacity-90 transform transition-all duration-300 hover:scale-105 shadow-lg"
          >
            もう一度試す
          </button>
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-lg font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 transform transition-all duration-300 hover:scale-105"
          >
            トップページへ
          </Link>
          <ContactButton className="bg-white border border-gray-300 text-gray-900 hover:bg-gray-50">
            お問い合わせ
          </ContactButton>
        </div>
      </div>
    </div>
  )
}
