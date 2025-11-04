'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: '機能', href: '/#features' },
      // { label: 'プラン紹介', href: '/#pricing' },
    ],
    company: [
      { label: 'Loopinとは', href: '/#service' },
      { label: '私たちについて', href: '/#about' },
      { label: 'ユーザーの声', href: '/#testimonials' },
    ],
    support: [
      { label: 'お問い合わせ', href: '/contact' },
      { label: 'プライバシーポリシー', href: '/privacy' },
      { label: '利用規約', href: '/terms' },
      { label: '特定商取引法に基づく表記', href: '/tokutei' },
    ],
  }


  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
      {/* メインフッターコンテンツ */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* ロゴとキャッチフレーズ */}
          <div className="lg:col-span-2">
            <Link href="#hero" className="inline-block mb-4">
              <Image
                src="/images/Loopin_logoType_light.png"
                alt="Loopin"
                width={140}
                height={35}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* プロダクトリンク */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">プロダクト</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gradient-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* カンパニーリンク */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">カンパニー</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gradient-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* サポートリンク */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">サポート</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gradient-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* コピーライト */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© {currentYear} Loopin. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-gradient-blue transition-colors duration-200">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="hover:text-gradient-blue transition-colors duration-200">
                利用規約
              </Link>
              <Link href="/tokutei" className="hover:text-gradient-blue transition-colors duration-200">
                特定商取引法に基づく表記
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 装飾的なグラデーション要素 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gradient-blue/5 to-gradient-purple/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gradient-purple/5 to-gradient-blue/5 rounded-full blur-3xl -z-10" />
    </footer>
  )
}