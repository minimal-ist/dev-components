import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../ui/SectionHeader'
import AnimatedSection from '../shared/AnimatedSection'

const applications = [
  {
    title: 'Motor Cores',
    desc: 'Rotor and stator laminations for AC/DC motors in industrial drives and appliances.',
    category: 'Industrial',
    slug: 'motor-stampings',
  },
  {
    title: 'Transformer Cores',
    desc: 'CRGO miter-cut and slit coil laminations for distribution and power transformers.',
    category: 'Energy',
    slug: 'crgo-miter-cut',
  },
  {
    title: 'Contactor Cores',
    desc: 'E-I and U-I core assemblies for contactors, relays, and solenoid actuators.',
    category: 'Industrial',
    slug: 'contactor-cores',
  },
  {
    title: 'EV Drive Motors',
    desc: 'High-precision thin-gauge stampings for electric vehicle traction motors.',
    category: 'Automotive',
    slug: 'motor-stampings',
  },
  {
    title: 'Railway Traction',
    desc: 'Heavy-duty laminations for locomotive traction motors and auxiliary systems.',
    category: 'Industrial',
    slug: 'linear-motor-stampings',
  },
  {
    title: 'Defense Actuators',
    desc: 'Mission-critical precision stampings for defense equipment and aerospace actuators.',
    category: 'Defense',
    slug: 'epoxy-coated-cores',
  },
  {
    title: 'Automotive Alternators',
    desc: 'Stator laminations for passenger car and commercial vehicle alternators.',
    category: 'Automotive',
    slug: 'motor-stampings',
  },
  {
    title: 'Energy Metering',
    desc: 'CT and energy meter cores for accurate power measurement and billing.',
    category: 'Energy',
    slug: 'strip-laminations',
  },
  {
    title: 'Bonded Core Assemblies',
    desc: 'Epoxy-bonded lamination stacks for vibration-sensitive precision equipment.',
    category: 'Industrial',
    slug: 'bonded-special-purpose-cores',
  },
]

const tabs = ['All', 'Automotive', 'Energy', 'Industrial', 'Defense']

export default function ProductApplicationsSection() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? applications : applications.filter(a => a.category === active)

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10">
          <SectionHeader
            eyebrow="Applications"
            title="Customer Products & Applications"
            subtitle="Our laminations go into the motors, transformers, and cores that power the world."
          />
        </AnimatedSection>

        {/* Tab filter */}
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
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((app) => (
                <Link
                  key={app.title}
                  to={`/products/${app.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all"
                >
                  {/* Placeholder image block */}
                  <div className="h-44 bg-primary relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10"
                      style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-accent) 1px, transparent 0)', backgroundSize: '24px 24px' }}
                    />
                    <div className="relative text-center px-4">
                      <div className="w-16 h-16 border-2 border-white/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <div className="w-10 h-10 border-2 border-accent/50 rounded-full" />
                      </div>
                      {/* Replace above with <img src={app.image} /> once assets are provided */}
                    </div>
                    <span className="absolute top-3 right-3 text-xs font-bold bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full">
                      {app.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-primary mb-1 group-hover:text-accent-dark transition-colors">{app.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3">{app.desc}</p>
                    <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold">
                      View Product <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
