'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function FeaturesWithImages() {
  const features = [
    {
      number: '1',
      title: '壁打ちチャット（AIファシリテーター）',
      description: '10の議題を軸に、AIが質問とアドバイスを繰り返し、事業構想を深めます。市場分析、競合調査、ビジネスモデルの検証など、起業に必要な観点から多角的にアイデアをブラッシュアップ。経験豊富な起業家のメンタリングのように、的確なフィードバックを提供します。',
    },
    {
      number: '2',
      title: '事業計画エディター（自動整合・チェック付き）',
      description: '入力内容を整合性チェック。フォーマットに沿った事業計画を即生成。数値の妥当性、論理的な矛盾、必要項目の抜け漏れを自動で検出し、プロフェッショナルな事業計画書を効率的に作成できます。投資家向けの説得力ある資料作成をサポートします。',
    },
    {
      number: '3',
      title: 'PL表自動生成（3年分）',
      description: '収益モデルに基づいて3年分のPL表を算出。金融機関向け資料としても活用可能。売上予測、原価計算、販管費の見積もりを自動化し、複数のシナリオ分析も簡単に実行。資金調達に必要な財務諸表を迅速に準備できます。',
    },
    {
      number: '4',
      title: '評価レポート（スコアリング＋バージョン管理）',
      description: '市場規模・競合優位性・実現可能性など多角的にスコアリング。履歴を残し比較可能。投資判断に重要な指標を定量化し、事業の成長性とリスクを客観的に評価。改善点が明確になり、より強固な事業計画への進化を支援します。',
    },
    {
      number: '5',
      title: '資料出力（PDF／Markdown／HTMLスライド）',
      description: '完成した計画を即アウトプット。会議やピッチにすぐ活用できます。投資家向けのエグゼクティブサマリー、詳細な事業計画書、プレゼン資料など、用途に応じた最適なフォーマットで出力。デザイン性の高い資料で説得力を向上させます。',
    },
  ]
  
  return (
    <section className="py-24 section-padding relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">
            <span className="text-gray-900">Loopinが提供する主要機能</span>
          </h2>
        </div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-8">
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-full text-white font-bold text-xl"
                    style={{
                      background: index === 0 ? 'linear-gradient(135deg, #8a63d2 0%, #8a63d2 100%)' :  // 紫
                                  index === 1 ? 'linear-gradient(135deg, #8a63d2 0%, #6388d2 100%)' :  // 紫→青
                                  index === 2 ? 'linear-gradient(135deg, #6388d2 0%, #6388d2 100%)' :  // 青
                                  index === 3 ? 'linear-gradient(135deg, #6388d2 0%, #63d2af 100%)' :  // 青→緑
                                  'linear-gradient(135deg, #63d2af 0%, #63d2af 100%)'                   // 緑
                    }}
                  >
                    {feature.number}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1 bottom-1 w-1 bg-gradient-to-b from-gradient-blue via-gradient-purple to-gradient-green rounded-full"></div>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>

              {index < features.length - 1 && (
                <div className="mt-8 border-b border-gray-200"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}