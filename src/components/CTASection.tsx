export default function CTASection() {
  return (
    <section id="contact" className="py-24 section-padding relative">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-gradient-blue via-gradient-purple to-gradient-green animate-gradient" />
          <div className="absolute inset-0 bg-metal-dark/80" />

          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-serif">
              <span className="text-white">
                あなたの挑戦を"循環"させる
              </span>
              <span className="block text-white mt-2">
                第一歩を、今すぐ
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="metal-button px-8 py-4 rounded-2xl text-white font-semibold text-lg shadow-2xl hover:shadow-gradient-blue/20 hover:scale-105 transform transition-all duration-300">
                <span className="relative z-10">無料で始める</span>
              </button>
              <button className="glass-panel px-8 py-4 rounded-2xl text-white font-semibold text-lg shadow-xl hover:shadow-gradient-purple/20 hover:scale-105 transform transition-all duration-300 hover:bg-white/10 border border-white/20">
                お問い合わせ
              </button>
            </div>

            <p className="text-gray-300 mt-8 text-sm">
              クレジットカード不要・今すぐ利用開始
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}