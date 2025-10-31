'use client'

import { useState, useEffect } from 'react'
import StartFreeButton from './StartFreeButton'

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
    <section id="cta-section" className="py-12 md:py-24 px-4 md:px-8 lg:px-16 xl:px-32 relative overflow-hidden">
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
          <div className="text-center space-y-6 md:space-y-8">
            {/* アニメーションするテキスト */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-blue bg-300% animate-gradient whitespace-nowrap">
                  革新は、ここから
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-light">
                アイデアを形に、夢を現実に
              </p>
            </div>

            {/* インタラクティブなカード（画面中央） */}
            <div className="relative flex justify-center flex-wrap">
              <StartFreeButton className="text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6" />
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