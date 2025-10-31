'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { RainbowButton } from '@/components/ui/rainbow-button'

export default function FloatingStartButton() {
  const [isVisible, setIsVisible] = useState(false)

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
    <div
      className={`fixed bottom-32 right-10 z-50 transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <Link href="/contact">
        <RainbowButton className="transition-all duration-300 px-10 py-5 text-lg md:text-xl whitespace-nowrap">
          Loopinを無料で始める
        </RainbowButton>
      </Link>
    </div>
  )
}
