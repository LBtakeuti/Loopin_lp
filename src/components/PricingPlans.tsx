'use client'

import { useState } from 'react'

export default function PricingPlans() {
  const [activeTab, setActiveTab] = useState('team')
  const individualPlans = [
    {
      name: 'Free',
      price: '0',
      features: [
        'PL生成：不可',
        '評価レポート：月1回まで',
        '資料出力：Markdownのみ'
      ],
      recommended: false,
    },
    {
      name: 'Starter',
      price: '980',
      features: [
        '評価レポート：月3回まで',
        '資料出力：Markdown／PDF',
        'HTMLスライド：不可'
      ],
      recommended: false,
    },
    {
      name: 'Pro',
      price: '2,980',
      features: [
        '機能制限なし（全機能）',
        '資料出力：全形式対応',
        'Markdown／PDF／HTMLスライド'
      ],
      recommended: true,
    },
  ]

  const teamPlans = [
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
  
  return (
    <section id="pricing" className="py-24 section-padding relative bg-gradient-to-b from-transparent via-metal-accent/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* タブメニュー（左上配置） */}
        <div className="mb-8">
          <div className="flex gap-4 inline-flex">
            <button
              onClick={() => setActiveTab('team')}
              className={`px-6 py-3 font-bold rounded-md transition-all duration-300 bg-white ${
                activeTab === 'team'
                  ? ''
                  : 'opacity-50 hover:opacity-75'
              }`}
            >
              <span className={`${
                activeTab === 'team'
                  ? 'bg-gradient-to-r from-gradient-purple via-gradient-blue to-gradient-green bg-clip-text text-transparent'
                  : 'text-gray-400'
              }`}>
                法人プラン
              </span>
            </button>
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-6 py-3 font-bold rounded-md transition-all duration-300 bg-white ${
                activeTab === 'individual'
                  ? ''
                  : 'opacity-50 hover:opacity-75'
              }`}
            >
              <span className={`${
                activeTab === 'individual'
                  ? 'bg-gradient-to-r from-gradient-purple via-gradient-blue to-gradient-green bg-clip-text text-transparent'
                  : 'text-gray-400'
              }`}>
                個人プラン
              </span>
            </button>
          </div>
        </div>

        {/* タブコンテンツ */}
        <div className="relative mb-16" style={{ minHeight: '400px' }}>
          {/* 個人プラン */}
          <div className={`${activeTab === 'individual' ? 'block' : 'hidden'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                個人向け料金プラン
              </h2>
              <p className="text-gray-600">
                個人起業家やフリーランスの方に最適なプラン
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {individualPlans.map((plan, index) => (
                <div
                  key={index}
                  className="p-6 border-2 relative bg-white transition-all duration-300 border-gray-200 hover:border-purple-500 hover:bg-purple-50 hover:shadow-lg hover:shadow-purple-200/50"
                >
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-serif border-b border-gray-200 pb-2">{plan.name}</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-green rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 法人プラン */}
          <div className={`${activeTab === 'team' ? 'block' : 'hidden'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                法人向け料金プラン
              </h2>
              <p className="text-gray-600">
                チームでの利用に最適化された充実のプラン
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamPlans.map((plan, index) => (
                <div
                  key={index}
                  className="p-5 border-2 border-gray-200 bg-white hover:border-purple-500 hover:bg-purple-50 hover:shadow-lg hover:shadow-purple-200/50 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-gray-800 mb-3 font-serif border-b border-gray-200 pb-2">{plan.name}</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-green rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTAボタンセクション */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="relative bg-gradient-to-br from-gradient-purple via-gradient-blue to-gradient-green text-white px-12 py-4 font-bold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95">
            無料で始める
          </button>

          <button className="relative bg-white border-2 border-gray-300 text-gray-700 px-12 py-4 font-bold text-lg shadow-sm transform transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 active:scale-95">
            お問い合わせ
          </button>
        </div>
      </div>
    </section>
  )
}