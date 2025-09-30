import Image from 'next/image'

export default function ServiceOverview() {
  const features = [
    {
      title: 'AIとの壁打ち',
      subtitle: 'アイデアを論理的に整理',
      description: 'ビジネスアイデアを持っているが、どこから手を付けていいか分からない。そんな時、Loopinの「AIとの壁打ち」機能が、あなたの思考を整理し、論理的な事業計画へと導きます。10の重要な議題に沿って、AIが適切な質問を投げかけ、あなたのアイデアをブラッシュアップ。XXXXXXXX',
      imagePath: '/images/undraw_personalization_0q05.svg',
    },
    {
      title: '事業計画を自動生成・改善',
      subtitle: 'アイデアをブラッシュアップ',
      description: '壁打ちで整理されたアイデアは、自動的に事業計画書として生成されます。市場分析、競合分析、収益モデルなど、投資家や銀行が求める情報を網羅。さらに、計画の整合性を自動チェックし、改善提案も提供。プロフェッショナルな事業計画書を短時間で作成できます。XXXXXXXX',
      imagePath: '/images/undraw_learning_qt7d.svg',
    },
    {
      title: '評価レポート',
      subtitle: '「進める／戻す」を明確化',
      description: '作成した事業計画を多角的に評価。市場規模、競合優位性、実現可能性、収益性など、様々な観点からスコアリングし、事業の強み・弱みを可視化します。バージョン管理機能により、改善の履歴を追跡し、どのように事業計画が進化したかを確認できます。XXXXXXXX',
      imagePath: '/images/undraw_good-team_zww8.svg',
    },
    {
      title: 'PDFやスライドに即出力',
      subtitle: '素早く共有',
      description: '完成した事業計画は、ワンクリックでPDF、プレゼンテーションスライド、Markdownなど様々な形式で出力可能。投資家へのピッチ、銀行への融資申請、社内プレゼンなど、用途に応じた最適なフォーマットで共有できます。デザインも自動で整えられ、すぐに使える状態で出力されます。XXXXXXXX',
      imagePath: '/images/undraw_drag-and-drop_v4po.svg',
    },
  ]
  
  return (
    <section id="service" className="py-24 section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
            <span className="text-gray-900">新規事業を"循環"で前進させる</span>
            <span className="text-gray-800 block">プラットフォーム</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            新規事業の立ち上げは、アイデア出しから計画化、評価、そして改善の繰り返し。<br />
            Loopinはそのプロセスを"循環"として捉え、AIの力で加速させます。
          </p>
        </div>
        
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* 画像エリア */}
              <div className="lg:w-1/2">
                <div className="relative aspect-video bg-white rounded-2xl overflow-hidden flex items-center justify-center p-8">
                  <Image
                    src={feature.imagePath}
                    alt={feature.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* テキストエリア */}
              <div className="lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-serif">
                  {feature.title}
                </h3>
                <p className="text-xl text-gray-700 mb-6">{feature.subtitle}</p>
                <p className="text-gray-600 leading-relaxed border-b border-gray-200 pb-6">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}