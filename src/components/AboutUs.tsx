'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    // 循環アニメーション: 各要素を順番に強調（7.5秒で1周、各要素は2.5秒）
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const cycles = [
    {
      title: '思考',
      subtitle: 'Think',
      description: 'アイデアを論理的に整理し、事業構想を深める',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      delay: 'delay-100',
    },
    {
      title: '実践',
      subtitle: 'Practice',
      description: '事業計画を形にして、実際に行動に移す',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      delay: 'delay-200',
    },
    {
      title: '結果',
      subtitle: 'Result',
      description: '成果を評価し、次の改善へつなげる',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      borderColor: 'border-green-200',
      delay: 'delay-300',
    },
  ]

  return (
    <section id="about" className="py-12 md:py-24 px-4 md:px-8 lg:px-16 xl:px-32 relative bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 循環サイクルのタイトル */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Loopinが実現する循環サイクル
          </h3>
          <p className="text-base sm:text-lg text-gray-600">
            思考・実践・結果の継続的な循環により、事業を磨き続けます
          </p>
        </div>

        {/* 循環図とメッセージを横並びに配置 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* 円形配置の循環図 */}
          <div className="relative flex-shrink-0 w-full max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px]" style={{ aspectRatio: '1/1' }}>
            {/* 循環を示す矢印を背景に配置 */}
            <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 600 600">
              <defs>
                {/* 矢印マーカー - より大きく目立つように */}
                <marker
                  id="arrowhead-blue"
                  markerWidth="12"
                  markerHeight="12"
                  refX="11"
                  refY="6"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 12 6, 0 12"
                    fill="#3B82F6"
                  />
                </marker>

                <marker
                  id="arrowhead-purple"
                  markerWidth="12"
                  markerHeight="12"
                  refX="11"
                  refY="6"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 12 6, 0 12"
                    fill="#8B5CF6"
                  />
                </marker>

                <marker
                  id="arrowhead-green"
                  markerWidth="12"
                  markerHeight="12"
                  refX="11"
                  refY="6"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 12 6, 0 12"
                    fill="#10B981"
                  />
                </marker>

                {/* グラデーション定義 */}
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="1" />
                </linearGradient>

                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
                </linearGradient>

                <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* ベースの円形パス（薄いグレー） */}
              <path
                d="M 300 120 A 180 180 0 0 1 450 390 A 180 180 0 0 1 150 390 A 180 180 0 0 1 300 120"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="2"
                opacity="0.3"
              />

              {/* 思考 → 実践 (青) */}
              <path
                d="M 300 120 A 180 180 0 0 1 450 390"
                fill="none"
                stroke="url(#blueGradient)"
                strokeWidth="3"
                strokeDasharray="400"
                strokeDashoffset="400"
                markerEnd="url(#arrowhead-blue)"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="400;0;0;0;0;0;400;400"
                  dur="7.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0.3;0.3;0.3;0.3;0"
                  dur="7.5s"
                  repeatCount="indefinite"
                />
              </path>

              {/* 実践 → 結果 (紫) */}
              <path
                d="M 450 390 A 180 180 0 0 1 150 390"
                fill="none"
                stroke="url(#purpleGradient)"
                strokeWidth="3"
                strokeDasharray="400"
                strokeDashoffset="400"
                markerEnd="url(#arrowhead-purple)"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="400;400;400;0;0;0;400;400"
                  dur="7.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;0;0.3;1;1;0.3;0.3;0"
                  dur="7.5s"
                  repeatCount="indefinite"
                />
              </path>

              {/* 結果 → 思考 (緑) */}
              <path
                d="M 150 390 A 180 180 0 0 1 300 120"
                fill="none"
                stroke="url(#greenGradient)"
                strokeWidth="3"
                strokeDasharray="400"
                strokeDashoffset="400"
                markerEnd="url(#arrowhead-green)"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="400;400;400;400;400;0;0;400"
                  dur="7.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;0;0;0;0.3;1;1;0"
                  dur="7.5s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>

          {/* 中央のロゴ */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Image
                src="/images/Loopin_symbolMarc.png"
                alt="Loopin Symbol"
                width={100}
                height={50}
                className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto"
              />
            </div>
          </div>

          {/* 円形に配置される要素 */}
          <div className="absolute inset-0">
            {cycles.map((cycle, index) => {
              const angle = (index * 120) - 90; // 上から始まって120度ずつ
              // レスポンシブな半径: モバイル130px, sm 150px, md 180px, lg 220px
              const baseRadius = typeof window !== 'undefined'
                ? window.innerWidth < 640 ? 130
                  : window.innerWidth < 768 ? 150
                  : window.innerWidth < 1024 ? 180
                  : 220
                : 220;
              const radius = baseRadius;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              const isActive = activeIndex === index;

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
                    {/* パルスエフェクト（アクティブ時） */}
                    {isActive && (
                      <div className={`absolute inset-0 rounded-full ${cycle.bgColor} opacity-75 animate-ping`}></div>
                    )}

                    {/* グロウエフェクト（アクティブ時） */}
                    {isActive && (
                      <div className={`absolute -inset-1 sm:-inset-2 rounded-full bg-gradient-to-r ${cycle.borderColor.replace('border-', 'from-')} to-transparent blur-md opacity-60`}></div>
                    )}

                    {/* メインの円 */}
                    <div className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full ${cycle.bgColor} border-2 ${cycle.borderColor}
                      transition-all duration-500 cursor-pointer
                      ${isActive ? 'scale-110 shadow-2xl' : 'hover:scale-105 shadow-md'}`}>
                      <div className="w-full h-full rounded-full flex flex-col items-center justify-center p-2 sm:p-3 md:p-4">
                        <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${cycle.textColor} mb-0.5 sm:mb-1 transition-transform duration-500 ${isActive ? 'scale-110' : ''}`}>
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h4 className={`text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-0.5 transition-all duration-500 ${isActive ? 'scale-105' : ''}`}>
                          {cycle.title}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide">
                          {cycle.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* 説明文 */}
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 sm:mt-3 md:mt-4 w-32 sm:w-40 md:w-48 transition-all duration-500 ${isActive ? 'opacity-100 scale-105' : 'opacity-70'}`}>
                      <p className="text-xs sm:text-sm text-gray-600 text-center">
                        {cycle.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>

          {/* 最後のメッセージ */}
          <div className="flex-1 flex items-center mt-8 lg:mt-0">
            <div className="w-full space-y-6 md:space-y-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed pb-4 md:pb-6 border-b-2 border-gray-200">
                私たちは、個人の挑戦が企業を強くし、<br />
                企業の成果が日本全体を豊かにすると信じています。
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-relaxed pb-4 md:pb-6 border-b-4 border-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-green" style={{ borderImage: 'linear-gradient(to right, #3b82f6, #8b5cf6, #10b981) 1' }}>
                Loopinは、その挑戦の循環を支える<br />
                伴走者でありたいと考えています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}