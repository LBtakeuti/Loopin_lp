'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // エラーをログに記録
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 500画像 */}
        <div className="mb-8">
          <Image
            src="/images/500_image.png"
            alt="500 Internal Server Error"
            width={600}
            height={400}
            className="mx-auto"
            priority
          />
        </div>

        {/* エラーメッセージ */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          エラーが発生しました
        </h1>
        <p className="text-gray-600 mb-8">
          申し訳ございません。予期しないエラーが発生しました。
          <br />
          問題が解決しない場合は、お手数ですがお問い合わせください。
        </p>
      </div>
    </div>
  )
}
