'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HeroSectionWithImage() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景画像を追加する場合はコメントを外してください */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-background.jpg"
          alt="Loopin Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div> */}
      
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-blue/10 via-gradient-purple/10 to-gradient-green/10 animate-gradient" />
      <div className="absolute inset-0 bg-metal-texture opacity-90" />
      
      <div className={`relative z-10 text-center section-padding py-20 max-w-6xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* ロゴ画像を追加する場合はコメントを外してください */}
        {/* <div className="mb-8 flex justify-center">
          <Image
            src="/images/hero/logo.png"
            alt="Loopin Logo"
            width={300}
            height={75}
            className="drop-shadow-2xl"
          />
        </div> */}
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="gradient-text">Loopin</span>
          <span className="text-white block mt-4 text-3xl md:text-5xl lg:text-6xl">
            循環の中で、事業は磨かれる。
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
          小さな試行錯誤が積み重なり、やがて大きな成長を生む。
        </p>
        
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
          Loopinは、新規事業を推進するための"挑戦の循環"を支援するプラットフォームです。
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
          個人の発想から、企業の挑戦、そして社会全体の進化へ。<br />
          挑戦の循環を、あなたの組織から始めましょう。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="metal-button px-8 py-4 rounded-2xl text-white font-semibold text-lg shadow-2xl hover:shadow-gradient-blue/20 hover:scale-105 transform transition-all duration-300">
            <span className="relative z-10">無料で始める</span>
          </button>
          <button className="glass-panel px-8 py-4 rounded-2xl text-white font-semibold text-lg shadow-xl hover:shadow-gradient-purple/20 hover:scale-105 transform transition-all duration-300 hover:bg-white/10">
            資料を請求する
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}