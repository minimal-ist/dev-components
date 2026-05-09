import { motion } from 'framer-motion'
import AnimatedSection from '../shared/AnimatedSection'
import { mission, vision, founder, established } from '../../data/company'

export default function WelcomeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <AnimatedSection direction="left">
            <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Welcome to Dev Components
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-primary leading-tight mb-6">
              Precision Stamping &amp; Lamination
              <span className="block">Experts Since {established}</span>
              <span className="block w-12 h-1 bg-accent mt-4 rounded-full" />
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Dev Components Pvt. Ltd. is one of Bangalore's most trusted manufacturers of electrical laminations, motor stampings, and transformer cores. Founded by {founder.name}, we have spent over three decades perfecting every aspect of silicon steel processing.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              {mission}
            </p>
            <p className="text-slate-500 leading-relaxed italic text-sm border-l-4 border-accent pl-4">
              "{vision}"
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative w-72 h-72"
              >
                {/* Outer accent ring */}
                <div className="absolute inset-0 rounded-full border-4 border-accent/30 animate-pulse" />
                {/* Mid ring */}
                <div className="absolute inset-4 rounded-full border-2 border-primary/20" />
                {/* Inner card */}
                <div className="absolute inset-8 rounded-full bg-primary flex flex-col items-center justify-center text-center p-4 shadow-2xl">
                  <div className="text-accent text-xs font-bold tracking-widest uppercase mb-1">Est.</div>
                  <div className="text-white text-4xl font-black">{established}</div>
                  <div className="w-8 h-0.5 bg-accent my-2 rounded-full" />
                  <div className="text-slate-300 text-xs font-semibold leading-tight">ISO Certified<br />Manufacturer</div>
                  <div className="mt-3 text-accent text-xs font-bold">300+ Customers</div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
