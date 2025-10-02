'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CTASection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('cta-section')?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const floatingElements = [
    { delay: 0, duration: 20, size: 300, opacity: 0.1 },
    { delay: 5, duration: 25, size: 400, opacity: 0.08 },
    { delay: 10, duration: 30, size: 350, opacity: 0.12 },
  ]

  return (
    <section id="cta-section" className="py-24 section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* 動的な背景 */}
        <div className="absolute inset-0 -z-10">
          {/* アニメーションする円形グラデーション */}
          {floatingElements.map((elem, index) => (
            <div
              key={index}
              className="absolute rounded-full blur-3xl animate-float"
              style={{
                width: `${elem.size}px`,
                height: `${elem.size}px`,
                background: `radial-gradient(circle, rgba(138, 99, 210, ${elem.opacity}), transparent)`,
                animationDelay: `${elem.delay}s`,
                animationDuration: `${elem.duration}s`,
                left: `${20 + index * 30}%`,
                top: `${10 + index * 20}%`,
              }}
            />
          ))}

          {/* マウス追従グラデーション */}
          <div
            className="absolute rounded-full blur-2xl transition-all duration-300 pointer-events-none"
            style={{
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(99, 138, 210, 0.3), transparent)',
              transform: `translate(${mousePosition.x - 100}px, ${mousePosition.y - 100}px)`,
              opacity: isHovered ? 1 : 0,
            }}
          />
        </div>

        <div className="relative">
          {/* メインコンテンツ */}
          <div className="text-center space-y-8">
            {/* アニメーションするテキスト */}
            <div className="space-y-2">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-blue bg-300% animate-gradient">
                  革新は、ここから
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light">
                アイデアを形に、夢を現実に
              </p>
            </div>

            {/* インタラクティブなカード（画面中央） */}
            <div className="relative inline-block">
              <div
                className="relative inline-block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative group">
                  {/* 背景のパルスエフェクト */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gradient-purple via-gradient-blue to-gradient-green opacity-75 blur-xl group-hover:opacity-100 animate-pulse" />

                  {/* メインボタン */}
                  <button className="relative bg-gradient-to-br from-gradient-purple via-gradient-blue to-gradient-green text-white px-12 py-6 rounded-3xl font-bold text-xl shadow-2xl transform transition-all duration-500 hover:scale-110 active:scale-95">
                    <span className="flex items-center gap-3">
                      今すぐ無料で始める
                      <svg
                        className="w-6 h-6 animate-bounce-x"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>

                    {/* ホバー時のシャイニーエフェクト */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </button>
                </div>
              </div>

              {/* ノートパソコンの画像（ボタンの右側） */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 hidden lg:block">
                <div className="relative w-72 h-44 transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/image 10.png"
                    alt="Loopin on Laptop"
                    width={288}
                    height={176}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.05);
          }
          50% {
            transform: translateY(10px) translateX(-10px) scale(0.95);
          }
          75% {
            transform: translateY(-10px) translateX(5px) scale(1.02);
          }
        }

        @keyframes bounce-x {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes count {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-bounce-x {
          animation: bounce-x 1s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 6s ease infinite;
          background-size: 300% 300%;
        }

        .animate-count {
          animation: count 2s ease-out;
        }

        .bg-300\% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  )
}