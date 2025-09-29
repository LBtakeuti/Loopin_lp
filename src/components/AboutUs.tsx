export default function AboutUs() {
  const philosophies = [
    {
      title: '個人の中での循環',
      description: '学びと成長の試行錯誤',
      icon: '◯',
    },
    {
      title: '企業の中での循環',
      description: '新規事業を繰り返し磨く仕組み',
      icon: '◉',
    },
    {
      title: '日本全体での循環',
      description: '挑戦の積み重ねが社会を豊かにする',
      icon: '◎',
    },
  ]
  
  return (
    <section id="about" className="py-24 section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold mb-6 font-serif border-b border-gray-200 pb-4 inline-block">
            <span className="text-gray-900">試行錯誤を循環させ、</span>
            <span className="text-gray-800 block">未来を磨く</span>
          </h2>
        </div>
        
        <div className="p-8 md:p-12 border border-gray-200 bg-white mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              私たちがLoopinをつくるきっかけになったのは、企業リアリティーショー<span className="text-gray-800 font-bold">「Nontitle」</span>への参加でした。
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              短期間で新規事業を形にする挑戦の中、質の高い事業案をまとめきれず、悔しさと課題感を強く感じました。
            </p>
            <p className="text-gray-800 text-xl font-bold mb-8">
              「もっと効率的に、もっと循環的に事業を磨ける仕組みが必要だ」
              <span className="block text-gray-600 text-base font-normal mt-2">
                ――その気づきが、Loopinの出発点です。
              </span>
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif border-b border-gray-200 pb-4">
              Loopinという名前に込めた3つの循環思想
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {philosophies.map((philosophy, index) => (
                <div key={index} className="p-6 border border-gray-200 bg-white">
                  <div className="text-4xl text-gradient-purple mb-4 text-center">{philosophy.icon}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2 text-center font-serif border-b border-gray-200 pb-2">
                    {philosophy.title}
                  </h4>
                  <p className="text-sm text-gray-600 text-center">
                    {philosophy.description}
                  </p>
                </div>
              ))}
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              私たちは、個人の挑戦が企業を強くし、企業の成果が日本全体を豊かにすると信じています。
            </p>
            <p className="text-gray-800 text-xl font-bold">
              Loopinは、その挑戦の循環を支える伴走者でありたいと考えています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}