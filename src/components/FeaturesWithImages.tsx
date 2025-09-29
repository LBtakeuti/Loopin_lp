'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function FeaturesWithImages() {
  const [activeFeature, setActiveFeature] = useState(0)
  
  const features = [
    {
      title: '壁打ちチャット（AIファシリテーター）',
      description: '10の議題を軸に、AIが質問とアドバイスを繰り返し、事業構想を深めます。',
      colorClass: 'bg-gradient-blue',
      imagePath: '/images/features/feature-1-screen.jpg',
      iconPath: '/images/features/feature-1.svg',
    },
    {
      title: '事業計画エディター（自動整合・チェック付き）',
      description: '入力内容を整合性チェック。フォーマットに沿った事業計画を即生成。',
      colorClass: 'bg-gradient-purple',
      imagePath: '/images/features/feature-2-screen.jpg',
      iconPath: '/images/features/feature-2.svg',
    },
    {
      title: 'PL表自動生成（3年分）',
      description: '収益モデルに基づいて3年分のPL表を算出。金融機関向け資料としても活用可能。',
      colorClass: 'bg-gradient-green',
      imagePath: '/images/features/feature-3-screen.jpg',
      iconPath: '/images/features/feature-3.svg',
    },
    {
      title: '評価レポート（スコアリング＋バージョン管理）',
      description: '市場規模・競合優位性・実現可能性など多角的にスコアリング。履歴を残し比較可能。',
      colorClass: 'bg-gradient-blue',
      imagePath: '/images/features/feature-4-screen.jpg',
      iconPath: '/images/features/feature-4.svg',
    },
    {
      title: '資料出力（PDF／Markdown／HTMLスライド）',
      description: '完成した計画を即アウトプット。会議やピッチにすぐ活用できます。',
      colorClass: 'bg-gradient-purple',
      imagePath: '/images/features/feature-5-screen.jpg',
      iconPath: '/images/features/feature-5.svg',
    },
  ]
  
  return (
    <section className="py-24 section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold mb-6 border-b border-gray-200 pb-4 inline-block">
            <span className="text-gray-900">Loopinが提供する</span>
            <span className="text-gray-800 block">主要機能</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 border-b border-gray-200 cursor-pointer transition-all duration-500 ${
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
                      {/* アイコン画像を追加する場合はコメントを外してください */}
                      {/* <div className="w-12 h-12 relative">
                        <Image
                          src={feature.iconPath}
                          alt={feature.title}
                          width={48}
                          height={48}
                        />
                      </div> */}
                      <h3 className="text-xl font-bold text-gray-800">
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
                  <div className={`text-2xl text-gray-600 transition-transform duration-300 ${
                    activeFeature === index ? 'rotate-180' : ''
                  }`}>
                    ⌄
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-8 border border-gray-200 bg-white flex items-center justify-center min-h-[400px]">
            {/* 機能のスクリーンショットを追加する場合はコメントを外してください */}
            {/* <div className="relative w-full h-full">
              <Image
                src={features[activeFeature].imagePath}
                alt={features[activeFeature].title}
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div> */}
            
            {/* 画像がない場合のプレースホルダー */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-gradient-blue via-gradient-purple to-gradient-green rounded-2xl opacity-20" />
              <p className="text-gray-500">機能画像エリア</p>
              <p className="text-gray-600 text-sm mt-2">
                {features[activeFeature].imagePath}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}