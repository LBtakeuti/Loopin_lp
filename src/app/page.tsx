import HeroSection from '@/components/HeroSection'
import ServiceOverview from '@/components/ServiceOverview'
import UseCases from '@/components/UseCases'
import Features from '@/components/Features'
import AboutUs from '@/components/AboutUs'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServiceOverview />
      <UseCases />
      <Features />
      <AboutUs />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  )
}