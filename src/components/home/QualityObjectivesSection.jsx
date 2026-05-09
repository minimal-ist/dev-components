import { ShieldCheck, Clock, Star } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import AnimatedSection, { AnimatedItem } from '../shared/AnimatedSection'

const objectives = [
  {
    icon: ShieldCheck,
    title: 'Zero-Defect Manufacturing',
    desc: 'Stringent in-process inspection at every production stage with full batch traceability from raw silicon steel to finished lamination.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'Committed lead times backed by multi-press in-house operations and a disciplined production planning system.',
  },
  {
    icon: Star,
    title: 'Customer-First Standards',
    desc: 'Tailored lamination specs, mill certificates, and third-party test reports provided for every order — domestic or international.',
  },
]

export default function QualityObjectivesSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-14 text-center">
          <SectionHeader
            eyebrow="Quality Objectives"
            title="Our Commitment to Excellence"
            subtitle="Every lamination we ship reflects a promise — the right material, the right dimensions, on time."
            center
          />
        </AnimatedSection>

        <AnimatedSection stagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {objectives.map(({ icon: Icon, title, desc }) => (
              <AnimatedItem key={title}>
                <div className="bg-primary rounded-2xl p-8 h-full flex flex-col group">
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed flex-1">{desc}</p>
                  <div className="mt-6 w-8 h-0.5 bg-accent rounded-full" />
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
