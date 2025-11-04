import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | Loopin',
  description: 'Loopinの特定商取引法に基づく表記',
}

export default function TokuteiPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          特定商取引法に基づく表記
        </h1>

        <div className="space-y-8 text-gray-700">
          {/* 販売事業者名 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">販売事業者名</h2>
            <p>LandBridge株式会社</p>
          </section>

          {/* 運営責任者 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">運営責任者</h2>
            <p>三森　一輝</p>
          </section>

          {/* 所在地 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">所在地</h2>
            <p>埼玉県越谷市川柳町401</p>
          </section>

          {/* 連絡先 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">連絡先</h2>
            <p className="mb-2">電話番号：090-3221-6638</p>
            <p className="mb-2">メールアドレス：info@landbridge.co.jp</p>
            <p>受付時間：平日10:00〜18:00（土日祝を除く）</p>
          </section>

          {/* 販売価格 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">販売価格</h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">クレジット消費について</h3>
            <p className="mb-2">本サービスでは、各機能の利用時に以下のクレジットを消費します：</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>メッセージ送信（AIとのチャット）：15クレジット/回</li>
              <li>AIチェック：30クレジット/回</li>
              <li>P/L表生成：50クレジット/回</li>
              <li>評価レポート：100クレジット/回</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-6">個人プラン</h3>

            <div className="border-l-4 border-gradient-blue pl-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Free（フリープラン）</h4>
              <ul className="space-y-1 text-sm">
                <li>月額料金：0円</li>
                <li>参加可能人数：1名</li>
                <li>月間付与クレジット：1,000クレジット</li>
                <li>内訳：メッセージ送信600、AIチェック200、P/L変更生成100、評価レポート生成100</li>
                <li>利用可能機能：プロジェクト数1件、MD出力可</li>
              </ul>
            </div>

            <div className="border-l-4 border-gradient-blue pl-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Starter（スタータープラン）</h4>
              <ul className="space-y-1 text-sm">
                <li>月額料金：1,980円（税込）</li>
                <li>参加可能人数：1名</li>
                <li>月間付与クレジット：3,000クレジット</li>
                <li>内訳：メッセージ送信1,800、AIチェック600、P/L変更生成400、評価レポート生成200</li>
                <li>利用可能機能：プロジェクト数5件、AIチェック、MD出力</li>
              </ul>
            </div>

            <div className="border-l-4 border-gradient-blue pl-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Pro（プロプラン）</h4>
              <ul className="space-y-1 text-sm">
                <li>月額料金：4,980円（税込）</li>
                <li>参加可能人数：1名</li>
                <li>月間付与クレジット：8,000クレジット</li>
                <li>内訳：メッセージ送信4,500、AIチェック1,800、P/L変更生成1,000、評価レポート生成700</li>
                <li>利用可能機能：プロジェクト数無制限、全機能利用可（AI代替入力、AIチェック、MD出力、HTML出力、P/L裏）</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-6">法人プラン</h3>

            <div className="border-l-4 border-gradient-purple pl-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Team Mini（チームミニプラン）</h4>
              <ul className="space-y-1 text-sm">
                <li>月額料金：23,800円（税込）</li>
                <li>参加可能人数：5名まで</li>
                <li>月間付与クレジット：8,000クレジット/人</li>
                <li>内訳（1人あたり）：メッセージ送信4,500、AIチェック1,800、P/L変更生成1,000、評価レポート生成700</li>
                <li>利用可能機能：プロジェクト数無制限、全機能利用可</li>
              </ul>
            </div>

            <div className="border-l-4 border-gradient-purple pl-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Team Standard（チームスタンダードプラン）</h4>
              <ul className="space-y-1 text-sm">
                <li>月額料金：44,800円（税込）</li>
                <li>参加可能人数：10名まで</li>
                <li>月間付与クレジット：10,000クレジット/人</li>
                <li>内訳（1人あたり）：メッセージ送信5,500、AIチェック2,200、P/L変更生成1,400、評価レポート生成900</li>
                <li>利用可能機能：プロジェクト数無制限、全機能利用可</li>
              </ul>
            </div>

            <div className="border-l-4 border-gradient-purple pl-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Team Plus（チームプラスプラン）</h4>
              <ul className="space-y-1 text-sm">
                <li>月額料金：84,800円（税込）</li>
                <li>参加可能人数：20名まで</li>
                <li>月間付与クレジット：12,000クレジット/人</li>
                <li>内訳（1人あたり）：メッセージ送信6,500、AIチェック2,700、P/L変更生成1,500、評価レポート生成1,300</li>
                <li>利用可能機能：プロジェクト数無制限、全機能利用可</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              ※全て税込価格です<br />
              ※クレジットは毎月リセットされ、翌月への繰り越しはできません<br />
              ※法人プランのクレジットは参加メンバー1人あたりの付与数です
            </p>
          </section>

          {/* 料金以外の必要費用 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">料金以外の必要費用</h2>
            <p>インターネット接続料金（お客様負担）</p>
          </section>

          {/* 支払方法 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">支払方法</h2>
            <p className="mb-2">クレジットカード決済（Visa、Mastercard、American Express、JCB対応）</p>
            <p className="text-sm text-gray-600">※決済代行：Stripe, Inc.</p>
          </section>

          {/* 支払時期 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">支払時期</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>初回：サービス申込時に決済</li>
              <li>2回目以降：毎月の契約更新日に自動決済</li>
            </ul>
          </section>

          {/* サービス提供時期 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">サービス提供時期</h2>
            <p>決済完了後、即時ご利用いただけます。</p>
          </section>

          {/* 返金・キャンセルポリシー */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">返金・キャンセルポリシー</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>サービス開始後の返金は、原則として受け付けておりません</li>
              <li>月の途中で解約された場合も、日割り計算による返金は行いません</li>
              <li>解約手続き後、次回更新日以降はサービスが停止されます</li>
            </ul>
          </section>

          {/* 解約方法 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">解約方法</h2>
            <p className="mb-2">以下のいずれかの方法で解約いただけます：</p>
            <div className="ml-4 space-y-3">
              <div>
                <h4 className="font-semibold mb-1">管理画面から解約</h4>
                <p className="text-sm">本サービス内からも解約が可能です。</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">メールでのご連絡</h4>
                <p className="text-sm">info@landbridge.co.jp まで「解約希望」の旨をご連絡ください</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">※解約は次回更新日の前日までに行ってください</p>
          </section>

          {/* その他 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">その他</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>本サービスの利用には、別途利用規約へのご同意が必要です</li>
              <li>サービス内容は予告なく変更する場合があります</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
