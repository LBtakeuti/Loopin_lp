import ContactButton from './ContactButton'

export default function PricingPlans() {
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
        {/* タイトル */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            プラン紹介
          </h2>
          <p className="text-gray-600">
            チームでの利用に最適化された充実のプラン
          </p>
        </div>

        {/* プランカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* CTAボタンセクション */}
        <div className="mt-16 flex justify-center">
          <ContactButton />
        </div>
      </div>
    </section>
  )
}