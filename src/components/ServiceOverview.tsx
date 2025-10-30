import Image from 'next/image'
import ContactButton from './ContactButton'

export default function ServiceOverview() {
  const problemsAndSolutions = [
    {
      problem: {
        title: '事業の進め方が分からない',
        description: 'スタートアップ創業者のAさん「新規事業のアイデアはあるが、何から始めればいいか分からない。市場調査？競合分析？どの順番で進めるべき？」',
      },
      solution: {
        title: '必要なステップを自動ガイド',
        description: 'AIとの対話を通じて、10の重要な議題を順番に整理。市場分析、競合調査、ビジネスモデルの検証まで、必要なステップを漏れなくガイドします。',
      },
    },
    {
      problem: {
        title: '外部支援のコストが高い',
        description: 'ベンチャー企業のBさん「コンサルタントに依頼すると数百万円。事業計画書作成ツールも月額費用が高く、複数のツールを使い分ける必要がある...」',
      },
      solution: {
        title: '1/10のコストで全機能利用',
        description: '月額定額で、AIコンサルティングから事業計画書作成、評価レポートまで全て利用可能。外部コンサルの1/10のコストで、プロフェッショナルなサポートを実現。',
      },
    },
    {
      problem: {
        title: '書類作成に膨大な時間',
        description: '新規事業担当のCさん「投資家向けの資料、銀行の融資申請書、社内プレゼン資料...。それぞれフォーマットが違い、作成だけで何週間もかかってしまう」',
      },
      solution: {
        title: '複数フォーマットを数分で自動生成',
        description: '一度入力すれば、用途に応じた複数フォーマットで自動出力。エグゼクティブサマリー、詳細計画書、プレゼン資料、3年分のPL表まで、数分で完成。',
      },
    },
  ]

  const features = [
    {
      title: 'AIとの壁打ち',
      subtitle: 'アイデアを論理的に整理',
      description: 'ビジネスアイデアを持っているが、どこから手を付けていいか分からない。そんな時、Loopinの「AIとの壁打ち」機能が、あなたの思考を整理し、論理的な事業計画へと導きます。10の議題を軸に、AIが質問とアドバイスを繰り返し、事業構想を深めます。市場分析、競合調査、ビジネスモデルの検証など、起業に必要な観点から多角的にアイデアをブラッシュアップ。経験豊富な起業家のメンタリングのように、的確なフィードバックを提供します。',
      imagePath: '/images/Loopin.ai.png',
    },
    {
      title: '事業計画を自動生成・改善',
      subtitle: 'アイデアをブラッシュアップ',
      description: '壁打ちで整理されたアイデアは、自動的に事業計画書として生成されます。市場分析、競合分析、収益モデルなど、投資家や銀行が求める情報を網羅。入力内容の整合性チェック、数値の妥当性、論理的な矛盾、必要項目の抜け漏れを自動で検出し、改善提案も提供。フォーマットに沿ったプロフェッショナルな事業計画書を効率的に作成でき、投資家向けの説得力ある資料作成をサポートします。',
      imagePath: '/images/undraw_learning_qt7d.svg',
    },
    {
      title: '評価レポート',
      subtitle: '「進める／戻す」を明確化',
      description: '作成した事業計画を多角的に評価。市場規模・競合優位性・実現可能性など様々な観点からスコアリングし、事業の強み・弱みを可視化します。投資判断に重要な指標を定量化し、事業の成長性とリスクを客観的に評価。バージョン管理機能により改善の履歴を残し比較可能。改善点が明確になり、より強固な事業計画への進化を支援します。',
      imagePath: '/images/undraw_good-team_zww8.svg',
    },
    {
      title: 'PL表やPDFを出力',
      subtitle: '素早く共有',
      description: '完成した計画を即アウトプット。会議やピッチにすぐ活用できます。投資家向けのエグゼクティブサマリー、詳細な事業計画書、プレゼン資料など、用途に応じた最適なフォーマットで出力。３年分のPL表（損益計算書）も自動生成され、収益性の見通しを明確に提示できます。デザイン性の高い資料で説得力を向上させます。',
      imagePath: '/images/undraw_drag-and-drop_v4po.svg',
    },
  ]
  
  return (
    <section id="service" className="py-24 section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-[72px] py-6 md:py-8 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-serif">
            <span className="text-gray-900">Loopinとは</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            「Loopin」は、AIとの対話によって事業計画を構築・改善できるサービスです。<br className="hidden sm:block" />
            発想を整理し、事業計画書・P/L表・評価レポートを自動生成。<br className="hidden sm:block" />
            試行錯誤をスムーズに循環させることで、チームの挑戦を加速させます。
          </p>
        </div>

        {/* 課題・解決セクション */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-8 md:mb-12 px-4">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 font-serif text-gray-900">
                Loopinがあなたの課題を解決します
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                新規事業の立ち上げには、多くの障壁があります。<br className="hidden sm:block" />
                Loopinなら、これらの課題をスマートに解決できます。
              </p>
            </div>

            {/* 資料出力の画像 */}
            <div className="flex-shrink-0 w-full lg:w-auto" style={{ maxWidth: '500px' }}>
              <Image
                src="/images/image 8.png"
                alt="資料出力イメージ"
                width={500}
                height={250}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12 px-4">
            {problemsAndSolutions.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col space-y-4 md:space-y-6 pb-12 md:pb-0 ${
                  index < problemsAndSolutions.length - 1
                    ? 'border-b-2 md:border-b-0 border-gray-300'
                    : ''
                }`}
              >
                {/* 課題 */}
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-700 mb-2 md:mb-3 pb-2 border-b-2 border-gray-700">
                    {item.problem.title}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2 md:mt-3">
                    {item.problem.description}
                  </p>
                </div>

                {/* 矢印 */}
                <div className="flex justify-center py-2">
                  <div className="text-3xl md:text-3xl text-gradient-blue">↓</div>
                </div>

                {/* 解決 */}
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gradient-blue mb-2 md:mb-3 pb-2 border-b-2 border-gradient-blue">
                    {item.solution.title}
                  </h4>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2 md:mt-3">
                    {item.solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* お問い合わせボタン */}
        <div className="flex justify-center -mt-8 md:-mt-12 mb-16 md:mb-20">
          <ContactButton className="text-base sm:text-lg px-8 sm:px-10 md:px-12 py-4 sm:py-5" />
        </div>

        {/* サービス概要セクション */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 font-serif text-gray-900 flex items-center justify-center gap-2 sm:gap-3 px-4">
            <Image
              src="/images/Loopin_logoType_light.png"
              alt="Loopin"
              width={180}
              height={48}
              className="inline-block w-32 sm:w-40 md:w-44 lg:w-48 h-auto"
            />
            <span className="whitespace-nowrap">で出来ること</span>
          </h3>
        </div>

        <div className="space-y-12 md:space-y-20 px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 md:gap-12 items-center`}
            >
              {/* 画像エリア */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video flex items-center justify-center">
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
              <div className="w-full lg:w-1/2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-serif">
                  {feature.title}
                </h3>
                <p className="text-lg sm:text-xl text-gray-700 mb-4 md:mb-6">{feature.subtitle}</p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed border-b border-gray-200 pb-4 md:pb-6">
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