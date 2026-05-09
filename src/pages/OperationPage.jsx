import { MapPin } from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import AnimatedSection, { AnimatedItem } from '../components/shared/AnimatedSection'
import SectionHeader from '../components/ui/SectionHeader'
import CTASection from '../components/home/CTASection'
import { contact } from '../data/company'

const steps = [
  { num: '01', title: 'Design & Engineering',  desc: 'Customer requirements are reviewed and a tooling design is developed using CAD. DFMEA and die layout are approved before tooling begins.' },
  { num: '02', title: 'Progressive Die Making', desc: 'Dies are manufactured in-house using CNC wire EDM, CNC milling, and surface grinding — with punch/die clearance held to ±0.005mm.' },
  { num: '03', title: 'Precision Stamping',     desc: 'CRGO / CRNGO silicon steel is fed through progressive dies at optimized press speeds. Real-time monitoring ensures consistent dimensional quality.' },
  { num: '04', title: 'Quality Control',        desc: 'Each batch undergoes CMM dimensional inspection, surface finish checks, and metallurgical verification. Full batch traceability is maintained.' },
  { num: '05', title: 'Assembly & Dispatch',    desc: 'Stacks are assembled, coated, or bonded per customer spec, then packed for safe transport and dispatched on schedule.' },
]

const factories = [
  contact.addresses.factory1,
  contact.addresses.factory2,
  contact.addresses.factory3,
]

const capabilities = [
  'Progressive stamping up to 800 SPM',
  'Press capacity: 25T to 250T',
  'Material width: up to 400mm',
  'Lamination thickness: 0.23mm–0.65mm',
  'Dimensional tolerance: ±0.03mm',
  'CNC wire EDM in-house',
  'CMM inspection available',
  'ISO quality management system',
]

export default function OperationPage() {
  return (
    <>
      <PageHero
        title="Our Operations"
        subtitle="From raw silicon steel to finished lamination core — everything happens under one roof."
        breadcrumbs={[{ label: 'Operation' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14">
            <SectionHeader
              eyebrow="How We Work"
              title="Manufacturing Process"
              subtitle="A disciplined five-step process ensures every lamination meets specification."
            />
          </AnimatedSection>
          <AnimatedSection stagger>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {steps.map((step, i) => (
                <AnimatedItem key={step.num}>
                  <div className="relative bg-surface rounded-2xl p-6 h-full border border-slate-200 hover:border-accent/50 transition-colors group">
                    {i < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-accent/40 z-10" />
                    )}
                    <div className="text-4xl font-black text-accent/20 group-hover:text-accent/40 transition-colors mb-3">{step.num}</div>
                    <h3 className="font-bold text-primary mb-2 text-sm">{step.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionHeader eyebrow="Where We Operate" title="Our Facilities" light />
          </AnimatedSection>
          <AnimatedSection stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {factories.map((f, i) => (
                <AnimatedItem key={i}>
                  <div className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                        <MapPin size={16} className="text-accent" />
                      </div>
                      <span className="text-accent text-sm font-semibold">{f.label}</span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{f.street}, {f.area}, {f.city}</p>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <SectionHeader eyebrow="What We Can Do" title="Equipment & Capabilities" />
          </AnimatedSection>
          <AnimatedSection stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map((cap, i) => (
                <AnimatedItem key={i}>
                  <div className="bg-white rounded-xl p-5 border border-slate-100 hover:border-accent/30 transition-colors flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    <p className="text-sm text-slate-700 font-medium">{cap}</p>
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
