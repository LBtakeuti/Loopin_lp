import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404画像 */}
        <div className="mb-8">
          <Image
            src="/images/404_image.png"
            alt="404 Not Found"
            width={600}
            height={400}
            className="mx-auto"
            priority
          />
        </div>

        {/* エラーメッセージ */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ページが見つかりません
        </h1>
        <p className="text-gray-600 mb-8">
          お探しのページは存在しないか、移動した可能性があります。
          <br />
          URLをご確認いただくか、トップページからお探しください。
        </p>
      </div>
    </div>
  )
}
