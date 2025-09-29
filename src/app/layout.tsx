import type { Metadata } from 'next'
import { Noto_Serif_JP } from 'next/font/google'
import Header from '@/components/Header'
import './globals.css'

const notoSerifJP = Noto_Serif_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif-jp',
})

export const metadata: Metadata = {
  title: 'Loopin - 循環の中で、事業は磨かれる',
  description: '小さな試行錯誤が積み重なり、やがて大きな成長を生む。Loopinは、新規事業を推進するための"挑戦の循環"を支援するプラットフォームです。',
  keywords: '新規事業,事業計画,スタートアップ,ビジネスプラン,AI,循環',
  openGraph: {
    title: 'Loopin - 循環の中で、事業は磨かれる',
    description: '新規事業を推進するための"挑戦の循環"を支援するプラットフォーム',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJP.variable} bg-white min-h-screen antialiased font-sf`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}