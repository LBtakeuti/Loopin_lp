'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const cycles = [
    {
      title: '思考',
      subtitle: 'Think',
      description: 'アイデアを論理的に整理し、事業構想を深める',
      color: 'from-blue-400 to-blue-600',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-600',
      position: 'top-0 left-1/2 -translate-x-1/2',
      delay: 'delay-100',
    },
    {
      title: '実践',
      subtitle: 'Practice',
      description: '事業計画を形にして、実際に行動に移す',
      color: 'from-purple-400 to-purple-600',
      borderColor: 'border-purple-500',
      textColor: 'text-purple-600',
      position: 'bottom-0 right-0',
      delay: 'delay-200',
    },
    {
      title: '結果',
      subtitle: 'Result',
      description: '成果を評価し、次の改善へつなげる',
      color: 'from-green-400 to-green-600',
      borderColor: 'border-green-500',
      textColor: 'text-green-600',
      position: 'bottom-0 left-0',
      delay: 'delay-300',
    },
  ]

  return (
    <section id="about" className="py-24 section-padding relative bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* タイトル部分 */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              未来を磨く
            </span>
          </h2>
        </div>

        {/* ストーリー部分 */}
        <div className="mb-24">
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-xl text-gray-600 text-center leading-relaxed">
              私たちがLoopinをつくるきっかけになったのは、<br />
              企業リアリティーショー<span className="font-bold text-gray-800 mx-1">「Nontitle」</span>への参加でした。
            </p>

            <p className="text-lg text-gray-500 text-center">
              短期間で新規事業を形にする挑戦の中、質の高い事業案をまとめきれず、<br />
              悔しさと課題感を強く感じました。
            </p>

            <div className="py-12 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-8 py-4 rounded-full shadow-lg">
                  <p className="text-2xl font-bold text-gray-800 text-center">
                    「もっと効率的に、もっと循環的に<br />
                    事業を磨ける仕組みが必要だ」
                  </p>
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-600 text-center">
              ――その気づきが、Loopinの出発点です。
            </p>
          </div>
        </div>

        {/* 循環サイクルのタイトル */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Loopinが実現する循環サイクル
          </h3>
          <p className="text-lg text-gray-600">
            思考・実践・結果の継続的な循環により、事業を磨き続けます
          </p>
        </div>

        {/* 円形配置の循環図 */}
        <div className="relative mx-auto mb-24" style={{ maxWidth: '600px', minHeight: '600px' }}>
          {/* 背景の円 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`absolute w-full h-full rounded-full border-2 border-gray-200 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>

            {/* 中央のロゴ */}
            <div className="absolute flex items-center justify-center">
              <div className="text-center">
                <Image
                  src="/images/Loopin_symbolMarc.png"
                  alt="Loopin Symbol"
                  width={120}
                  height={60}
                  className="mb-2"
                />
                <p className="text-sm text-gray-500">無限の循環</p>
              </div>
            </div>
          </div>

          {/* 円形に配置される要素 */}
          <div className="absolute inset-0">
            {cycles.map((cycle, index) => {
              const angle = (index * 120) - 90; // 上から始まって120度ずつ
              const radius = 220; // 円の半径
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ${cycle.delay} ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                  }}
                >
                  <div className="relative">
                    {/* 背景のグロウ効果 */}
                    <div className={`absolute -inset-4 bg-gradient-to-br ${cycle.color} rounded-full blur-xl opacity-20`}></div>

                    {/* メインの円 */}
                    <div className={`relative w-40 h-40 rounded-full bg-gradient-to-br ${cycle.color} p-1 shadow-2xl hover:scale-110 transition-transform cursor-pointer`}>
                      <div className="w-full h-full rounded-full flex flex-col items-center justify-center p-4" style={{ backgroundColor: '#FFFFFF', opacity: 1 }}>
                        <div className={`text-5xl font-bold ${cycle.textColor} mb-2`}>
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-1">
                          {cycle.title}
                        </h4>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                          {cycle.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* 説明文 */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48">
                      <p className="text-sm text-gray-600 text-center">
                        {cycle.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 循環を示す矢印 */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 600 600">
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3.5, 0 7"
                    fill="#6B7280"
                  />
                </marker>
              </defs>

              {/* 円形の矢印パス - 背景用 */}
              <path
                d="M 300 80 A 220 220 0 0 1 490 420 A 220 220 0 0 1 110 420 A 220 220 0 0 1 300 80"
                fill="none"
                stroke="white"
                strokeWidth="4"
                opacity="0.8"
              />
              {/* 円形の矢印パス - メイン */}
              <path
                d="M 300 80 A 220 220 0 0 1 490 420 A 220 220 0 0 1 110 420 A 220 220 0 0 1 300 80"
                fill="none"
                stroke="#6B7280"
                strokeWidth="2"
                strokeDasharray="10,5"
                markerEnd="url(#arrowhead)"
                opacity="0.5"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 300 300"
                  to="360 300 300"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        </div>

        {/* 最後のメッセージ */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 shadow-xl">
            <p className="text-xl text-gray-600 mb-6">
              私たちは、個人の挑戦が企業を強くし、<br />
              企業の成果が日本全体を豊かにすると信じています。
            </p>
            <p className="text-3xl font-bold bg-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-green bg-clip-text text-transparent">
              Loopinは、その挑戦の循環を支える<br />
              伴走者でありたいと考えています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}