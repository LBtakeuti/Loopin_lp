export default function PricingPlans() {
  const individualPlans = [
    {
      name: 'Free',
      price: 'xxxxxxxx',
      features: ['プロジェクト1件', '機能制限あり'],
      recommended: false,
    },
    {
      name: 'Starter',
      price: 'xxxxxxxx',
      features: ['プロジェクト3件まで', '一部制限あり'],
      recommended: false,
    },
    {
      name: 'Pro',
      price: 'xxxxxxxx',
      features: ['無制限', '全機能利用可能'],
      recommended: true,
    },
  ]
  
  const teamPlans = [
    {
      name: 'Team Mini',
      price: 'xxxxxxxx',
      features: ['5人まで'],
    },
    {
      name: 'Team Standard',
      price: 'xxxxxxxx',
      features: ['10人まで'],
    },
    {
      name: 'Team Plus',
      price: 'xxxxxxxx',
      features: ['20人まで'],
    },
    {
      name: 'Enterprise',
      price: '応相談',
      features: ['21人以上', 'SAML対応など'],
    },
  ]
  
  return (
    <section id="pricing" className="py-24 section-padding relative bg-gradient-to-b from-transparent via-metal-accent/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold mb-6 font-serif border-b border-gray-200 pb-4 inline-block">
            <span className="text-gray-900">利用規模に応じた</span>
            <span className="text-gray-800 block">シンプルなプラン設計</span>
          </h2>
        </div>
        
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-800 mb-8 text-center font-serif border-b border-gray-200 pb-4 inline-block">個人プラン</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {individualPlans.map((plan, index) => (
              <div
                key={index}
                className="p-8 border-2 relative bg-white transition-all duration-300 border-gray-200 hover:border-purple-500 hover:bg-purple-50 hover:shadow-lg hover:shadow-purple-200/50"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-2 font-serif border-b border-gray-200 pb-2">{plan.name}</h4>
                <div className="mb-6">
                  <span className="text-4xl font-bold gradient-text">¥{plan.price}</span>
                  {plan.price !== 'xxxxxxxx' && <span className="text-gray-600 text-lg">/月</span>}
                </div>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-green rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 border border-gray-300 font-semibold transition-all duration-300 bg-white text-gray-700 hover:bg-gray-50">
                  選択する
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-8 text-center font-serif border-b border-gray-200 pb-4 inline-block">チームプラン</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamPlans.map((plan, index) => (
              <div
                key={index}
                className="p-6 border-2 border-gray-200 bg-white hover:border-purple-500 hover:bg-purple-50 hover:shadow-lg hover:shadow-purple-200/50 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-2 font-serif border-b border-gray-200 pb-2">{plan.name}</h4>
                <div className="mb-4">
                  <span className="text-3xl font-bold gradient-text">
                    {plan.price.includes('応相談') ? plan.price : `¥${plan.price}`}
                  </span>
                  {!plan.price.includes('応相談') && <span className="text-gray-600">/月</span>}
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-green rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 font-semibold transition-all duration-300">
                  お問い合わせ
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}