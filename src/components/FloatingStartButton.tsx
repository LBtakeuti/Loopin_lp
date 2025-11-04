'use client'

import { useState, useEffect } from 'react'
import { ButtonColorful } from '@/components/ui/button-colorful'

export default function FloatingStartButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // ヒーローセクションの位置を取得
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect()
        const heroHeight = heroSection.offsetHeight
        // ヒーローセクションの真ん中（50%の位置）まで スクロールしたら表示
        const heroMiddle = heroRect.top + heroHeight * 0.5
        const passedHeroMiddle = heroMiddle < 0

        // ページ最下部に近づいたかチェック
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight
        const scrollTop = window.scrollY
        const scrollBottom = scrollTop + windowHeight
        const distanceFromBottom = documentHeight - scrollBottom

        // ヒーローセクションを通過していて、かつページ最下部から300px以上離れている場合に表示
        setIsVisible(passedHeroMiddle && distanceFromBottom > 300)
      }
    }

    // スクロールイベントをリスン
    window.addEventListener('scroll', handleScroll)
    // リサイズイベントもリスン
    window.addEventListener('resize', handleScroll)
    // 初期状態をチェック
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <>
      {/* モバイル版 - テキストのみ */}
      <div
        className={`md:hidden fixed bottom-8 right-6 z-50 transition-all duration-500 ${
          isVisible && !isClosed
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <div className="relative">
          {/* クローズボタン */}
          <button
            onClick={() => setIsClosed(true)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs hover:bg-gray-700 transition-colors z-10 shadow-md"
            aria-label="閉じる"
          >
            ×
          </button>
          <a
            href="https://www.loopin.jp/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <ButtonColorful
              label="無料で始める"
              className="transition-all duration-300 px-6 py-3 text-sm shadow-lg"
            />
          </a>
        </div>
      </div>

      {/* デスクトップ版 - 元のボタン */}
      <div
        className={`hidden md:block fixed bottom-32 right-10 z-50 transition-all duration-500 ${
          isVisible && !isClosed
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <div className="relative">
          {/* クローズボタン */}
          <button
            onClick={() => setIsClosed(true)}
            className="absolute -top-3 -right-3 w-7 h-7 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm hover:bg-gray-700 transition-colors z-10 shadow-md"
            aria-label="閉じる"
          >
            ×
          </button>
          <a href="https://www.loopin.jp/signup" target="_blank" rel="noopener noreferrer" className="relative inline-block">
            {/* ブラーエフェクト（背面） */}
            <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 -z-10 h-2/5 w-4/5 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 blur-[1.2rem] transition-all duration-500 opacity-100" />
            <ButtonColorful
              label="Loopinを無料で始める"
              className="transition-all duration-300 px-10 py-5 text-lg md:text-xl whitespace-nowrap"
            />
          </a>
        </div>
      </div>
    </>
  )
}
