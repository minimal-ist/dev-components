import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'

const words = ['Engineering', 'Precision.', 'Powering', 'the', 'Future.']

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-accent) 1px, transparent 0)', backgroundSize: '48px 48px' }}
      />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-accent text-xs font-semibold tracking-wider uppercase">ISO Certified Manufacturer Since 1991</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className={`inline-block mr-4 ${word === 'Precision.' || word === 'Future.' ? 'text-accent' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl"
          >
            Manufacturer of high-precision electrical stampings, laminations, and motor cores.
            Serving automotive, aerospace, defense, and industrial sectors across India and globally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all hover:bg-white/5"
            >
              About Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex items-center gap-8"
          >
            {[
              { value: '300+', label: 'Customers' },
              { value: '65K+ MT', label: 'Manufactured' },
              { value: '35+ Yrs', label: 'Experience' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  )
}
