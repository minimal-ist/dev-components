import { Quote } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import AnimatedSection, { AnimatedItem } from '../shared/AnimatedSection'
import { testimonials } from '../../data/testimonials'

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-14 text-center">
          <SectionHeader
            eyebrow="Customer Testimonials"
            title="What Our Clients Say"
            subtitle="Trusted by production managers, engineers, and procurement teams across India's leading manufacturers."
            light
            center
          />
        </AnimatedSection>

        <AnimatedSection stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map(t => (
              <AnimatedItem key={t.id}>
                <div className="bg-white/10 border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-colors group">
                  <Quote size={32} className="text-accent mb-5 opacity-80" />
                  <p className="text-slate-300 leading-relaxed mb-6 text-base">{t.quote}</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-slate-400 text-xs">{t.title} · {t.company}</div>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
