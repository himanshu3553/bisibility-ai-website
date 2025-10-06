import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import StatsSection from '@/components/StatsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import PricingSection from '@/components/PricingSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </>
  )
}