import Image from 'next/image'

export default function UseCases() {
  const cases = [
    {
      title: '投資家へのピッチ',
      description: '数値根拠付きの事業計画をそのままプレゼン資料に。',
      gradient: 'from-gradient-blue to-gradient-purple',
      icon: '/images/プレゼンテーションのピクトグラム.svg',
    },
    {
      title: '銀行融資用の事業計画',
      description: '信頼性のあるPL表と計画書で、融資審査をスムーズに。',
      gradient: 'from-gradient-purple to-gradient-green',
      icon: '/images/おこづかいアイコン1.svg',
    },
    {
      title: '社内コンペ・稟議資料',
      description: '計画の完成度をスコアで示し、説得力ある提案を。',
      gradient: 'from-gradient-green to-gradient-blue',
      icon: '/images/授業のフリー素材.svg',
    },
    {
      title: '新規事業部のアイデア精査',
      description: '多数のアイデアを効率的に整理し、次の一手を見極める。',
      gradient: 'from-gradient-blue via-gradient-purple to-gradient-green',
      icon: '/images/アイディアアイコン.svg',
    },
  ]
  
  return (
    <section className="py-24 section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
            <span className="text-gray-900">多様なシーンで</span>
            <span className="text-gray-800 block">"使える"アウトプットを</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="group flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <Image
                  src={useCase.icon}
                  alt={useCase.title}
                  width={48}
                  height={48}
                  className="opacity-80"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed pb-6 border-b border-gray-200">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}