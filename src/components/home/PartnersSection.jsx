import AnimatedSection, { AnimatedItem } from '../shared/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'

const partners = [
  { name: 'Salzer Electronics', note: 'Contactor Cores' },
  { name: 'Trafomec India', note: 'Transformer Cores' },
  { name: 'SaveWatt', note: 'Energy Solutions' },
  { name: 'Prismatic Engineering', note: 'Motor Stampings' },
  { name: 'Partner Co.', note: 'Your Logo Here' },
  { name: 'Partner Co.', note: 'Your Logo Here' },
]

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 text-center">
          <SectionHeader
            eyebrow="Our Customers"
            title="Trusted by Industry Leaders"
            subtitle="Serving production managers, engineers, and procurement teams across India's leading manufacturers."
            center
          />
        </AnimatedSection>

        <AnimatedSection stagger>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, i) => (
              <AnimatedItem key={i}>
                {/* Replace content with <img src={partner.logo} alt={partner.name} /> once logo assets are provided */}
                <div className="flex flex-col items-center justify-center h-24 rounded-xl border border-slate-200 hover:border-accent/40 hover:shadow-md transition-all p-4 group">
                  <span className="text-slate-700 text-xs font-bold text-center leading-tight group-hover:text-primary transition-colors">{partner.name}</span>
                  <span className="text-slate-400 text-[10px] mt-1 text-center">{partner.note}</span>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>

        <p className="text-center text-slate-400 text-xs mt-6">
          Logo assets will be placed here — replace placeholder cards with customer logo images.
        </p>
      </div>
    </section>
  )
}
