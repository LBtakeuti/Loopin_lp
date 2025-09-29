export default function CTASection() {
  return (
    <>
      {/* 資料請求セクション */}
      <section id="download" className="py-24 section-padding relative bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold mb-6 font-serif border-b border-gray-200 pb-4 inline-block">
              <span className="text-gray-900">詳しい資料をお送りします</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Loopinの機能詳細や活用事例をまとめた資料をメールでお届けします
            </p>
          </div>
          
          <div className="p-8 border border-gray-200 bg-white">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">会社名</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gradient-blue" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">お名前</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gradient-blue" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">メールアドレス</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gradient-blue" />
              </div>
              <button className="w-full bg-gradient-to-r from-gradient-blue to-gradient-purple text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                資料を請求する
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* お問い合わせセクション */}
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
    </>
  )
}