export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Loopinの壁打ち機能で、漠然としていた「AIを活用した業務効率化サービス」のアイデアが、ターゲット市場、収益モデル、差別化要因まで明確になりました。社内コンペの資料作成が2週間から3日に短縮され、経営陣からの評価も「これまでで最も説得力のある提案」と高評価をいただきました。',
      author: '株式会社テックイノベーション',
      role: '新規事業部 プロダクトマネージャー',
      company: 'IT企業（従業員500名）',
      gradient: 'from-gradient-blue to-gradient-purple',
    },
    {
      quote: 'シード資金調達の際、Loopinで作成した事業計画書とPL表が投資家から「極めて論理的で現実的」と評価されました。特に3年分の財務予測が自動生成され、複数のシナリオ分析もできたため、投資家の質問にも数値根拠を持って即座に回答できました。結果的に目標額の1.5倍の資金調達に成功しました。',
      author: '株式会社グリーンテック',
      role: 'CEO / 創業者',
      company: 'スタートアップ（創業2年目）',
      gradient: 'from-gradient-purple to-gradient-green',
    },
  ]
  
  return (
    <section id="testimonials" className="py-24 section-padding relative bg-gradient-to-b from-transparent via-metal-accent/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold mb-6 font-serif border-b border-gray-200 pb-4 inline-block">
            <span className="text-gray-900">お客様の声</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Loopinを活用いただいた企業様の成果
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-300 relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="text-6xl text-gradient-purple/20 mb-4">"</div>
                <p className="text-base text-gray-700 mb-6 leading-relaxed border-b border-gray-200 pb-6 min-h-[150px]">
                  {testimonial.quote}
                </p>
                <div className="pt-4">
                  <p className="text-gray-800 font-bold text-lg">{testimonial.author}</p>
                  <p className="text-gray-700 text-sm font-medium">{testimonial.role}</p>
                  {testimonial.company && (
                    <p className="text-gray-500 text-xs mt-1">{testimonial.company}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            ※ 想定事例に基づく効果イメージです
          </p>
        </div>
      </div>
    </section>
  )
}