import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import AnimatedSection from '../shared/AnimatedSection'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-accent-dark to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <AnimatedSection direction="left">
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Ready to Partner With Us?
          </h2>
          <p className="text-white/80 mt-2 text-lg">
            Send us your requirements and get a quote within 24 hours.
          </p>
        </AnimatedSection>
        <AnimatedSection direction="right" delay={0.2}>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-accent-dark hover:bg-accent-muted font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
            >
              Get In Touch
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+919945671218"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all"
            >
              <Phone size={16} />
              Call Us Now
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
