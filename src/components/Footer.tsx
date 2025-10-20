'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: '機能', href: '#features' },
      { label: 'プラン紹介', href: '#pricing' },
      { label: 'デモを予約', href: '/contact' },
    ],
    company: [
      { label: 'Loopinとは', href: '#service' },
      { label: '私たちについて', href: '#about' },
      { label: 'ユーザーの声', href: '#testimonials' },
    ],
    support: [
      { label: 'ヘルプセンター', href: '#' },
      { label: 'お問い合わせ', href: '/contact' },
      { label: 'プライバシーポリシー', href: '/privacy' },
      { label: '利用規約', href: '/terms' },
    ],
  }

  const socialLinks = [
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
  ]

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
            {/* ソーシャルリンク */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="group"
                  aria-label={social.label}
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300">
                    <social.icon className="w-5 h-5 text-gray-600 transition-colors duration-300 group-hover:text-gradient-purple" />
                  </div>
                </Link>
              ))}
            </div>
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
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-gradient-blue transition-colors duration-200">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="hover:text-gradient-blue transition-colors duration-200">
                利用規約
              </Link>
              <Link href="#" className="hover:text-gradient-blue transition-colors duration-200">
                Cookie設定
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