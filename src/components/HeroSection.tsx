'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AuroraBackground } from '@/components/ui/aurora-background'

export default function HeroSection() {
  return (
    <AuroraBackground className="relative min-h-[80vh] md:min-h-screen" showRadialGradient={false}>
      <div className="relative z-10 py-12 md:py-20 px-4 md:px-8 lg:px-16 xl:px-32 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center min-h-[50vh] md:min-h-[70vh]">
          {/* 左側：テキストコンテンツ */}
          <motion.div
            initial={{ opacity: 0.0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-center flex flex-col items-center w-full"
          >
            <div className="mb-6 md:mb-8">
              <Image
                src="/images/Loopin_logoType_light.png"
                alt="Loopin Logo"
                width={280}
                height={70}
                className="drop-shadow-2xl w-48 sm:w-56 md:w-64 lg:w-72 h-auto"
                priority
              />
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight font-serif">
              <span className="text-gray-800">
                その事業進めませんか？
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-3 md:mb-4 leading-relaxed max-w-xl">
              小さな試行錯誤が積み重なり、<br className="sm:hidden" />やがて大きな成長を生む。
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed max-w-xl">
              Loopinは、新規事業を推進するための<br className="sm:hidden" />"挑戦の循環"を支援する<br className="sm:hidden" />プラットフォームです。
            </p>

            <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-xl">
              個人の発想から、企業の挑戦、<br className="sm:hidden" />そして社会全体の進化へ。<br />
              挑戦の循環を、<br className="sm:hidden" />あなたの組織から始めましょう。
            </p>
          </motion.div>

          {/* 右側：画像（デスクトップのみ表示） */}
          <motion.div
            initial={{ opacity: 0.0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="hidden lg:block relative -mr-[15rem]"
          >
            <div className="relative">
              <Image
                src="/images/loopinimege5.png"
                alt="Loopin Dashboard"
                width={832}
                height={600}
                className="drop-shadow-2xl rounded-lg"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* モバイル用画像 */}
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="lg:hidden mt-8"
        >
          <div className="relative w-full max-w-md mx-auto">
            <Image
              src="/images/loopinimege5.png"
              alt="Loopin Dashboard"
              width={832}
              height={600}
              className="drop-shadow-2xl rounded-lg w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>

      <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center p-2">
          <div className="w-1 h-3 bg-gray-600 rounded-full animate-pulse" />
        </div>
      </div>
    </AuroraBackground>
  )
}
