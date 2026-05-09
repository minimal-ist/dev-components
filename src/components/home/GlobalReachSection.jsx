import { Link } from 'react-router-dom'
import { ArrowRight, Globe } from 'lucide-react'
import AnimatedSection, { AnimatedItem } from '../shared/AnimatedSection'

const regions = [
  { name: 'South Asia',     countries: 'India, Sri Lanka, Bangladesh' },
  { name: 'Southeast Asia', countries: 'Malaysia, Singapore, Thailand, Vietnam' },
  { name: 'Middle East',    countries: 'UAE, Saudi Arabia, Oman' },
  { name: 'Europe',         countries: 'Germany, Italy, UK' },
  { name: 'Americas',       countries: 'USA, Brazil' },
  { name: 'Africa',         countries: 'Kenya, Nigeria, South Africa' },
]

export default function GlobalReachSection() {
  return (
    <section className="py-20 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <AnimatedSection direction="left">
            <div className="flex items-center gap-3 mb-6">
              <Globe size={20} className="text-accent" />
              <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase">Global Reach</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">
              Contribute to Conserve
              <span className="block text-accent">Electrical Energy</span>
              &amp; Preserve Future
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8 text-lg">
              Our precision laminations power energy-efficient motors and transformers across 30+ countries — helping industries worldwide reduce electrical losses and advance sustainable manufacturing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/overseas"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-accent/30"
              >
                Our Global Operations
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:bg-white/5"
              >
                Get In Touch
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              {regions.map((region, i) => (
                <AnimatedItem key={i}>
                  <div className="bg-white/10 border border-white/10 rounded-xl p-4 hover:border-accent/30 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-white font-semibold text-sm">{region.name}</span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed pl-3.5">{region.countries}</p>
                  </div>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
