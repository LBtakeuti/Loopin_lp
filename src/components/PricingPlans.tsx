'use client'

import { useState } from 'react'
import ContactButton from './ContactButton'
import StartFreeButton from './StartFreeButton'

export default function PricingPlans() {
  const [activeTab, setActiveTab] = useState<'individual' | 'business'>('individual')

  const individualPlans = [
    {
      name: 'Free',
      price: '0',
      features: [
        'プロジェクト数：3件まで',
        'クレジット：500/月',
        '基本機能のみ',
        'コミュニティサポート'
      ],
    },
    {
      name: 'Starter',
      price: '980',
      features: [
        'プロジェクト数：10件まで',
        'クレジット：3,000/月',
        '全機能利用可能',
        'メールサポート'
      ],
    },
    {
      name: 'Pro',
      price: '2,980',
      features: [
        'プロジェクト数：無制限',
        'クレジット：10,000/月',
        '優先サポート',
        '高度な分析機能'
      ],
    },
  ]

  const businessPlans = [
    {
      name: 'Team Mini',
      price: '9,800',
      features: [
        '最大5人',
        'プロジェクト数：無制限',
        'クレジット：5,000/人・月',
        '基本のメンバー管理'
      ],
    },
    {
      name: 'Team Standard',
      price: '19,800',
      features: [
        '最大10人',
        'プロジェクト数：無制限',
        'クレジット：6,000/人・月',
        '管理者ダッシュボード'
      ],
    },
    {
      name: 'Team Plus',
      price: '34,800',
      features: [
        '最大20人',
        'プロジェクト数：無制限',
        'クレジット：7,500/人・月',
        '優先サポート'
      ],
    },
    {
      name: 'Enterprise',
      price: '応相談',
      features: [
        '21人以上',
        'カスタムクレジット設定',
        'SSO/SAML・監査ログ・SLA',
        'クレジット繰越・移管ポリシー'
      ],
    },
  ]

  const currentPlans = activeTab === 'individual' ? individualPlans : businessPlans

  return (
    <section id="pricing" className="py-12 md:py-24 px-4 md:px-8 lg:px-16 xl:px-32 relative bg-gradient-to-b from-transparent via-metal-accent/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            プラン紹介
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            あなたに最適なプランを選択してください
          </p>
        </div>

        {/* タブ切り替え */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-all duration-300 ${
                activeTab === 'individual'
                  ? 'bg-white text-gradient-blue shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              個人プラン
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-all duration-300 ${
                activeTab === 'business'
                  ? 'bg-white text-gradient-blue shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              法人プラン
            </button>
          </div>
        </div>

        {/* プランカード */}
        <div className={`grid grid-cols-1 ${activeTab === 'individual' ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'} gap-6 mb-12 md:mb-16`}>
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className="p-5 border-2 border-gray-200 bg-white rounded-lg hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300"
            >
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 font-serif border-b border-gray-200 pb-2">
                {plan.name}
              </h4>
              <div className="mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {plan.price === '応相談' ? plan.price : `¥${plan.price}`}
                </span>
                {plan.price !== '応相談' && plan.price !== '0' && (
                  <span className="text-gray-600 text-sm">/月</span>
                )}
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gradient-green rounded-full mt-1.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTAボタンセクション */}
        <div className="mt-12 md:mt-16 flex justify-center gap-4">
          <ContactButton className="px-8 py-3 text-base" />
          <StartFreeButton className="px-8 py-3 text-base" />
        </div>
      </div>
    </section>
  )
}
