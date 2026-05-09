import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Award, Cpu } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import AnimatedSection from '../shared/AnimatedSection'

const steps = [
  { num: '01', title: 'Design & Engineering',  desc: 'CAD-based tooling design with DFMEA review and customer approval before any die work begins.' },
  { num: '02', title: 'Progressive Die Making', desc: 'In-house CNC wire EDM, milling, and surface grinding — punch/die clearance held to ±0.005mm.' },
  { num: '03', title: 'Precision Stamping',     desc: 'CRGO/CRNGO silicon steel fed through progressive dies at optimized press speeds with real-time monitoring.' },
  { num: '04', title: 'Quality Control',        desc: 'CMM dimensional checks, surface finish verification, and metallurgical testing on every batch.' },
  { num: '05', title: 'Assembly & Dispatch',    desc: 'Stacks assembled, coated, or bonded per spec — then packed and dispatched on schedule.' },
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

const standards = [
  { code: 'ISO 9001', label: 'Quality Management', desc: 'Certified quality management system covering design, manufacturing, inspection, and dispatch.' },
  { code: 'IEC 60404', label: 'Magnetic Materials', desc: 'International standard for soft magnetic materials — our laminations meet applicable parts for CRGO & CRNGO.' },
  { code: 'ASTM A677', label: 'Non-oriented Steel', desc: 'Full compliance for non-oriented electrical steel used in motor and transformer applications.' },
]

const tabs = ['Our Process', 'Equipment & Specs', 'Quality Standards']

export default function ManufacturingHighlightsSection() {
  const [active, setActive] = useState('Our Process')

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10">
          <SectionHeader
            eyebrow="How We Work"
            title="Manufacturing Highlights"
            subtitle="From design to dispatch — a disciplined process that has earned the trust of 300+ customers."
          />
        </AnimatedSection>

        {/* Tab bar */}
        <div className="flex gap-1 border-b border-slate-200 mb-10 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-3 text-sm font-semibold border-b-2 transition-all -mb-px whitespace-nowrap ${
                active === tab
                  ? 'border-accent text-accent'
                  : 'border-transparent text-slate-500 hover:text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {active === 'Our Process' && (
            <motion.div
              key="process"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {steps.map((step, i) => (
                  <div key={step.num} className="relative bg-surface rounded-2xl p-6 border border-slate-200 hover:border-accent/50 transition-colors group">
                    {i < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-accent/40 z-10" />
                    )}
                    <div className="text-4xl font-black text-accent/20 group-hover:text-accent/40 transition-colors mb-3">{step.num}</div>
                    <h3 className="font-bold text-primary mb-2 text-sm">{step.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {active === 'Equipment & Specs' && (
            <motion.div
              key="specs"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {capabilities.map((cap, i) => (
                  <div key={i} className="bg-surface rounded-xl p-5 border border-slate-100 hover:border-accent/30 transition-colors flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                    <p className="text-sm text-primary font-medium">{cap}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {active === 'Quality Standards' && (
            <motion.div
              key="quality"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {standards.map(s => (
                  <div key={s.code} className="rounded-2xl border border-slate-200 hover:border-accent/40 transition-colors p-8 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-5 transition-colors">
                      <Award size={24} className="text-accent" />
                    </div>
                    <div className="text-xs font-black text-accent tracking-widest uppercase mb-1">{s.code}</div>
                    <h3 className="text-lg font-bold text-primary mb-3">{s.label}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
