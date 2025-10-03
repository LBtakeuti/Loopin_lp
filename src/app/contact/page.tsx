import ContactForm from '@/components/ContactForm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20"> {/* ヘッダーの高さ分のパディング */}
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}