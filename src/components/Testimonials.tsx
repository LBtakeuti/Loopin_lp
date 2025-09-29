export default function Testimonials() {
  const testimonials = [
    {
      quote: '社内コンペの資料作成が2週間から3日に短縮',
      author: 'IT企業 新規事業部',
      role: 'プロダクトマネージャー',
      gradient: 'from-gradient-blue to-gradient-purple',
    },
    {
      quote: '投資家への説明が数値根拠込みで一貫性を持てた',
      author: 'スタートアップ',
      role: 'CEO',
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
                <p className="text-xl text-gray-800 mb-6 leading-relaxed border-b border-gray-200 pb-4">
                  {testimonial.quote}
                </p>
                <div className="pt-4">
                  <p className="text-gray-800 font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
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