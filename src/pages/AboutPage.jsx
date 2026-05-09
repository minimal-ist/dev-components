import PageHero from '../components/shared/PageHero'
import CompanyStory from '../components/about/CompanyStory'
import MissionVisionValues from '../components/about/MissionVisionValues'
import StatsBar from '../components/home/StatsBar'
import CTASection from '../components/home/CTASection'

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Dev Components"
        subtitle="Three decades of precision manufacturing excellence — rooted in Bangalore, serving industries worldwide."
        breadcrumbs={[{ label: 'About Us' }]}
      />
      <CompanyStory />
      <MissionVisionValues />
      <StatsBar />
      <CTASection />
    </>
  )
}
