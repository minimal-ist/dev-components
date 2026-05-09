import { Package, ShieldCheck, Truck, Globe } from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import AnimatedSection, { AnimatedItem } from '../components/shared/AnimatedSection'
import SectionHeader from '../components/ui/SectionHeader'
import CTASection from '../components/home/CTASection'

const regions = [
  { name: 'South Asia',    countries: 'India, Sri Lanka, Bangladesh',           note: 'Primary market' },
  { name: 'Southeast Asia',countries: 'Malaysia, Singapore, Thailand, Vietnam', note: 'Growing presence' },
  { name: 'Middle East',   countries: 'UAE, Saudi Arabia, Oman',                note: 'Transformer & industrial' },
  { name: 'Europe',        countries: 'Germany, Italy, UK',                     note: 'Automotive & industrial' },
  { name: 'Americas',      countries: 'USA, Brazil',                            note: 'Specialty applications' },
  { name: 'Africa',        countries: 'Kenya, Nigeria, South Africa',           note: 'Power infrastructure' },
]

const capabilities = [
  { icon: Package,    title: 'Export Packaging',      desc: 'Laminations are packed in moisture-resistant VCI film and wooden crates per ISPM-15, suitable for sea and air freight.' },
  { icon: ShieldCheck,title: 'Compliance & Standards', desc: 'Products comply with IEC 60404, IS 648, ASTM A677, and customer-specific international standards. Mill certificates and test reports provided.' },
  { icon: Truck,      title: 'Logistics Support',      desc: 'We work with established freight forwarders for FCL and LCL sea shipments, airfreight, and door-to-port delivery worldwide.' },
]

export default function OverseasPage() {
  return (
    <>
      <PageHero
        title="International Operations"
        subtitle="Supplying precision electrical stampings and laminations to customers across Asia, the Middle East, Europe, and beyond."
        breadcrumbs={[{ label: 'Overseas' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14 text-center">
            <SectionHeader
              eyebrow="Global Reach"
              title="Where We Export"
              subtitle="Dev Components serves customers across six global regions, with established freight routes and compliance documentation for smooth international trade."
              center
            />
          </AnimatedSection>

          <AnimatedSection stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {regions.map((r, i) => (
                <AnimatedItem key={i}>
                  <div className="bg-surface rounded-2xl p-6 border border-slate-200 hover:border-accent/50 transition-colors group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 group-hover:bg-accent flex items-center justify-center transition-colors">
                        <Globe size={15} className="text-accent group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-bold text-primary">{r.name}</h3>
                    </div>
                    <p className="text-slate-600 text-sm mb-2">{r.countries}</p>
                    <span className="text-xs font-semibold text-accent bg-accent-muted px-2 py-0.5 rounded-full">{r.note}</span>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14 text-center">
            <SectionHeader eyebrow="Export Capabilities" title="How We Ship Globally" light center />
          </AnimatedSection>
          <AnimatedSection stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {capabilities.map(({ icon: Icon, title, desc }) => (
                <AnimatedItem key={title}>
                  <div className="bg-white/10 border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-colors text-center">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                      <Icon size={26} className="text-accent" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  )
}
