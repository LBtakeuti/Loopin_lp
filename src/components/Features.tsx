'use client'

import { useState } from 'react'

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)
  
  const features = [
    {
      title: '壁打ちチャット（AIファシリテーター）',
      description: '10の議題を軸に、AIが質問とアドバイスを繰り返し、事業構想を深めます。',
      colorClass: 'bg-gradient-blue',
    },
    {
      title: '事業計画エディター（自動整合・チェック付き）',
      description: '入力内容を整合性チェック。フォーマットに沿った事業計画を即生成。',
      colorClass: 'bg-gradient-purple',
    },
    {
      title: 'PL表自動生成（3年分）',
      description: '収益モデルに基づいて3年分のPL表を算出。金融機関向け資料としても活用可能。',
      colorClass: 'bg-gradient-green',
    },
    {
      title: '評価レポート（スコアリング＋バージョン管理）',
      description: '市場規模・競合優位性・実現可能性など多角的にスコアリング。履歴を残し比較可能。',
      colorClass: 'bg-gradient-blue',
    },
    {
      title: '資料出力（PDF／Markdown／HTMLスライド）',
      description: '完成した計画を即アウトプット。会議やピッチにすぐ活用できます。',
      colorClass: 'bg-gradient-purple',
    },
  ]
  
  return (
    <section id="features" className="py-24 section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold mb-6 font-serif border-b border-gray-200 pb-4 inline-block">
            <span className="text-gray-900">Loopinが提供する</span>
            <span className="text-gray-800 block">主要機能</span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 border-b border-gray-200 cursor-pointer transition-all duration-500 ${
                activeFeature === index
                  ? 'bg-gray-50'
                  : 'hover:bg-gray-50/50'
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-2 h-12 ${feature.colorClass} rounded-full ${
                      activeFeature === index ? 'animate-pulse' : ''
                    }`} />
                    <h3 className="text-xl font-bold text-gray-800 font-serif">
                      {feature.title}
                    </h3>
                  </div>
                  <p className={`text-gray-600 leading-relaxed pl-6 transition-all duration-500 ${
                    activeFeature === index
                      ? 'opacity-100 max-h-32'
                      : 'opacity-70 max-h-0 overflow-hidden'
                  }`}>
                    {feature.description}
                  </p>
                </div>
                <div className={`text-3xl text-gray-500 transition-transform duration-300 ${
                  activeFeature === index ? 'rotate-180' : ''
                }`}>
                  ⌄
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}