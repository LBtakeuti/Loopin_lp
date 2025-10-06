import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <section className="py-24 section-padding">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">利用規約</h1>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">第1条（目的）</h2>
                  <p className="text-gray-600 leading-relaxed">
                    本規約は、当社が法人顧客に提供するWebアプリケーションサービス（以下「本サービス」）の利用条件を定めるものです。
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">第2条（アカウントの発行と管理）</h2>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>当社は、契約に基づき法人顧客に対し、本サービスを利用するためのアカウントを発行します。</li>
                    <li>法人顧客は、自社の管理責任においてアカウントを利用・管理し、第三者への譲渡・貸与・不正利用を防止するものとします。</li>
                    <li>発行されたアカウントの利用による一切の行為は、法人顧客の責任に帰属します。</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">第3条（禁止事項）</h2>
                  <p className="text-gray-600 mb-3">法人顧客は、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>法令、公序良俗に反する行為</li>
                    <li>第三者または当社の知的財産権を侵害する行為</li>
                    <li>本サービスを逆コンパイル、逆アセンブル、リバースエンジニアリングする行為</li>
                    <li>契約に基づく利用範囲を超えた使用</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">第4条（知的財産権）</h2>
                  <p className="text-gray-600 leading-relaxed">
                    本サービスに関する著作権、商標権、その他一切の知的財産権は当社に帰属します。
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">第5条（免責事項）</h2>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>当社は、法人顧客の利用環境や運用状況に起因する障害については責任を負いません。</li>
                    <li>本サービスの利用に関連して法人顧客に生じた間接的・付随的損害について、当社は一切責任を負わないものとします。ただし、当社の故意または重過失による場合はこの限りではありません。</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">第6条（利用停止・解除）</h2>
                  <p className="text-gray-600 leading-relaxed">
                    法人顧客が本規約に違反した場合、当社は事前通知なく当該アカウントの利用を停止または削除できるものとします。
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">第7条（準拠法・管轄）</h2>
                  <p className="text-gray-600 leading-relaxed">
                    本規約は日本法に準拠し、当社本店所在地を管轄する地方裁判所を専属的合意管轄とします。
                  </p>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">アクセス解析ツールの利用</h2>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>当社は、本サービスの利便性向上、利用状況の把握、機能改善を目的として、Google LLCが提供する「Google Analytics」「Google Search Console」およびMicrosoft Corporationが提供する「Microsoft Clarity」等の解析ツールを利用する場合があります。</li>
                    <li>利用者は、本サービスを利用することで、これらのツールによるデータ収集・利用について承諾したものとみなします。</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}