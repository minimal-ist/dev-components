import HeroSection from '../components/home/HeroSection'
import WelcomeSection from '../components/home/WelcomeSection'
import QualityObjectivesSection from '../components/home/QualityObjectivesSection'
import ManufacturingHighlightsSection from '../components/home/ManufacturingHighlightsSection'
import ProductApplicationsSection from '../components/home/ProductApplicationsSection'
import ProductsGrid from '../components/home/ProductsGrid'
import PartnersSection from '../components/home/PartnersSection'
import StatsBar from '../components/home/StatsBar'
import IndustriesSection from '../components/home/IndustriesSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import GlobalReachSection from '../components/home/GlobalReachSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import CTASection from '../components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <QualityObjectivesSection />
      <ManufacturingHighlightsSection />
      <ProductApplicationsSection />
      <ProductsGrid />
      <PartnersSection />
      <StatsBar />
      <IndustriesSection />
      <TestimonialsSection />
      <GlobalReachSection />
      <WhyChooseUs />
      <CTASection />
    </>
  )
}
