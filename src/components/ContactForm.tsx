'use client'

import { useState } from 'react'
import ContactButton from './ContactButton'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    inquiryType: '',
    companyName: '',
    position: '',
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    message: '',
    agreement: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // フォーム送信処理
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-24 section-padding relative bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 font-bold mb-4">CONTACT</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">お問い合わせ</h2>
          <p className="text-gray-600">
            お気軽にお問い合わせください。<br />
            以下の入力をお願いいたします。
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
          {/* お問い合わせの種類 */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              お問い合わせの種類
            </label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gradient-purple focus:border-transparent"
              required
            >
              <option value="">選択してください</option>
              <option value="product">製品について</option>
              <option value="pricing">料金について</option>
              <option value="demo">デモのご依頼</option>
              <option value="partnership">パートナーシップ</option>
              <option value="other">その他</option>
            </select>
          </div>

          {/* 会社名 */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              会社名
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gradient-purple focus:border-transparent"
              required
            />
          </div>

          {/* 役職（任意） */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              役職（任意）
            </label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gradient-purple focus:border-transparent"
            />
          </div>

          {/* 姓・名 */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                姓
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gradient-purple focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                名
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gradient-purple focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* メールアドレス */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="会社のメールアドレスを入力"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gradient-purple focus:border-transparent"
              required
            />
          </div>

          {/* 電話番号 */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              電話番号
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gradient-purple focus:border-transparent"
              required
            />
          </div>

          {/* お問い合わせの内容（任意） */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              お問い合わせの内容（任意）
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gradient-purple focus:border-transparent resize-none"
            />
          </div>

          {/* 個人情報の取り扱い */}
          <div className="mb-8">
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                className="mt-1"
                required
              />
              <span className="text-sm text-gray-600">
                <a href="/privacy" className="text-gradient-purple hover:underline">個人情報の取り扱い</a>について同意する
              </span>
            </label>
          </div>

          {/* 送信ボタン */}
          <div className="text-center">
            <ContactButton type="submit">送信</ContactButton>
          </div>
        </form>
      </div>
    </section>
  )
}