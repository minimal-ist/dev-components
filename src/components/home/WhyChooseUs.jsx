import { CheckCircle2 } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import AnimatedSection from '../shared/AnimatedSection'

const reasons = [
  {
    title: 'ISO Certified Quality',
    desc: 'Stringent quality management systems with full traceability from raw material to finished product.',
  },
  {
    title: '35+ Years of Expertise',
    desc: 'Deep domain knowledge in lamination metallurgy, tooling design, and process optimization.',
  },
  {
    title: 'In-House Die Making',
    desc: 'Full tooling design and manufacture in-house — faster lead times and tighter control over quality.',
  },
  {
    title: 'High-Volume Capability',
    desc: 'Multi-press operations enabling large order volumes without compromising on dimensional accuracy.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Precision You Can Rely On"
              subtitle="Dev Components combines decades of manufacturing expertise with modern tooling technology to deliver consistent, high-quality stampings on time."
            />
            <ul className="mt-10 space-y-6">
              {reasons.map((r, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={22} />
                  <div>
                    <h4 className="font-bold text-primary mb-1">{r.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent/30 rounded-2xl" />
              <div className="relative bg-primary rounded-2xl overflow-hidden p-10 flex flex-col justify-between min-h-80">
                <div className="absolute inset-0 opacity-5"
                  style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-accent) 1px, transparent 0)', backgroundSize: '32px 32px' }}
                />
                <div className="relative">
                  <p className="text-4xl font-black text-white mb-1">300<span className="text-accent">+</span></p>
                  <p className="text-slate-400 text-sm">Customers trust us for mission-critical stampings</p>
                </div>
                <div className="relative mt-8 grid grid-cols-2 gap-6">
                  {[
                    { v: '1991', l: 'Founded' },
                    { v: 'ISO', l: 'Certified' },
                    { v: '3', l: 'Factories' },
                    { v: '10+', l: 'Product Lines' },
                  ].map((s, i) => (
                    <div key={i}>
                      <div className="text-2xl font-black text-accent">{s.v}</div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
