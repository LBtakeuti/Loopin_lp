import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <section className="py-24 section-padding">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">プライバシーポリシー</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-8">
                当社は、法人顧客との契約に基づき発行されたアカウントを通じて取得する担当者情報を、以下の方針に従って取り扱います。
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">1. アクセス解析ツールについて</h2>
                  <p className="text-gray-600 mb-4">
                    当社は、利用者の本サービスにおける利用状況を把握し、改善に役立てるため、以下の外部サービスを利用しています。
                  </p>

                  <div className="space-y-4 ml-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Google Analytics</h3>
                      <p className="text-gray-600">
                        本サービスではGoogle Analyticsを利用し、Cookieを使用して匿名のトラフィックデータを収集しています。収集されたデータはGoogle社のプライバシーポリシーに基づいて管理されます。利用者は、Google アナリティクスのオプトアウトアドオンを利用することで、データ収集を拒否できます。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Google Search Console</h3>
                      <p className="text-gray-600">
                        本サービスの検索パフォーマンスを把握するためにGoogle Search Consoleを利用しています。これにより検索キーワードや表示状況などの情報がGoogle社を通じて収集される場合があります。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Microsoft Clarity</h3>
                      <p className="text-gray-600">
                        本サービスでは、ユーザーの操作行動（クリック、スクロールなど）を記録・可視化するMicrosoft Clarityを利用しています。収集されたデータは匿名化され、Microsoft社のプライバシーポリシーに基づいて管理されます。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Cookieの利用について</h3>
                      <p className="text-gray-600">
                        本サービスでは、上記のアクセス解析ツールによりCookieを通じて利用者の情報を収集する場合があります。利用者はブラウザの設定によりCookieの受け入れを拒否することができますが、その場合、本サービスの一部機能が利用できない可能性があります。
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">2. 取得する情報</h2>
                  <p className="text-gray-600 mb-4">
                    当社は、法人顧客またはその担当者に関して、以下の情報を取得する場合があります。
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>会社名、部署名、役職名、氏名、メールアドレス、電話番号</li>
                    <li>アカウント情報（ログインID、パスワード）</li>
                    <li>利用履歴（ログイン状況、操作ログなど）</li>
                    <li>問い合わせ内容および対応履歴</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">3. 個人情報の利用目的</h2>
                  <p className="text-gray-600 mb-3">取得した情報は、以下の目的で利用します。</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>契約に基づく本サービスの提供およびアカウント管理</li>
                    <li>サポート・メンテナンス等の顧客対応</li>
                    <li>サービス改善および品質向上のための分析</li>
                    <li>新機能・サービスの案内および各種通知</li>
                    <li>不正アクセス防止、セキュリティ強化、法令遵守のための監査・記録</li>
                    <li>契約履行に必要な連絡・請求・支払処理</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">4. 個人情報の管理および安全対策</h2>
                  <p className="text-gray-600 mb-4">
                    当社は、個人情報保護法その他関連法令に従い、取得した情報を適正に管理し、不正アクセス、紛失、破壊、改ざん、漏洩等を防止するために、以下の措置を講じます。
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>アクセス制御、通信の暗号化（SSL/TLS）</li>
                    <li>社員および委託先への教育・監督</li>
                    <li>システム監査・ログ監視の実施</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">5. 第三者提供</h2>
                  <p className="text-gray-600 mb-4">
                    当社は、次のいずれかに該当する場合を除き、個人情報を第三者に提供いたしません。
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>本人の同意がある場合</li>
                    <li>法令に基づく場合</li>
                    <li>人の生命・身体・財産の保護に必要であり、本人の同意を得ることが困難な場合</li>
                    <li>業務委託に伴い、利用目的の達成に必要な範囲で委託先に提供する場合</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">6. 外部委託</h2>
                  <p className="text-gray-600 leading-relaxed">
                    当社は、サービス運用や保守、サポート業務等の遂行に必要な範囲で、業務を外部業者に委託する場合があります。その際は、個人情報保護に関する契約を締結し、適切な監督を行います。
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">7. 開示・訂正・削除・利用停止等の請求</h2>
                  <p className="text-gray-600 leading-relaxed">
                    法人顧客またはその担当者から、自己に関する個人情報の開示・訂正・削除・利用停止の請求があった場合、当社は法令に基づき速やかに対応します。
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">8. お問い合わせ窓口</h2>
                  <div className="text-gray-600 space-y-2">
                    <p className="mb-2">個人情報の取扱いに関するお問い合わせは、以下の窓口までご連絡ください。</p>
                    <p>LandBridge株式会社</p>
                    <p>E-mail: <a href="mailto:info@landbridge.co.jp" className="text-gradient-purple hover:underline">info@landbridge.co.jp</a></p>
                    <p className="text-sm">
                      （受付時間：平日8時〜17時、回答までに5営業日程度いただく場合があります）
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">9. 改定</h2>
                  <p className="text-gray-600 leading-relaxed">
                    当社は、法令の改正やサービス内容の変更等により、本ポリシーを改定することがあります。重要な変更がある場合は、法人顧客に通知のうえ、本サービス上で公表します。
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">10. 法令遵守</h2>
                  <p className="text-gray-600 leading-relaxed">
                    当社は、個人情報保護法および関連するガイドライン・規範を遵守し、適正かつ公正な取扱いを継続的に実施します。
                  </p>
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