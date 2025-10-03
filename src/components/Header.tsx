'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: 'TOP', href: '#hero' },
    { label: 'Loopinとは', href: '#service' },
    { label: '機能', href: '#features' },
    { label: 'プラン紹介', href: '#pricing' },
    { label: '紹介', href: '#about' },
    { label: 'ユーザーの声', href: '#testimonials' },
    { label: '無料で始める', href: '/contact', isSpecial: true },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <div className="flex-shrink-0">
            <Link href="#hero" className="block">
              <Image
                src="/images/Loopin_logoType_light.png"
                alt="Loopin"
                width={120}
                height={30}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* デスクトップメニュー */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors duration-200 ${
                  item.isSpecial
                    ? item.label === '無料で始める'
                      ? 'bg-gradient-to-r from-gradient-blue to-gradient-purple text-white px-4 py-2 rounded-lg hover:opacity-90'
                      : 'text-gradient-blue font-semibold hover:opacity-80'
                    : 'text-gray-700 hover:text-gradient-blue'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="メニュー"
          >
            <div className="w-6 h-5 relative">
              <span
                className={`absolute left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'top-2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-2 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'top-2 -rotate-45' : 'top-4'
                }`}
              />
            </div>
          </button>
        </div>

        {/* モバイルメニュー */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="py-4 border-t border-gray-200">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block py-2 text-sm transition-colors duration-200 ${
                  item.isSpecial
                    ? 'text-gradient-blue font-semibold'
                    : 'text-gray-700'
                } hover:text-gradient-blue`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}