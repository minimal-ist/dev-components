import { Target, Eye, Star } from 'lucide-react'
import AnimatedSection, { AnimatedItem } from '../shared/AnimatedSection'
import { mission, vision, values } from '../../data/company'

const cards = [
  { icon: Target, title: 'Mission', body: mission, bg: 'bg-primary' },
  { icon: Eye,    title: 'Vision',  body: vision,  bg: 'bg-primary' },
  { icon: Star,   title: 'Values',  body: values,  bg: 'bg-accent' },
]

export default function MissionVisionValues() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection stagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map(({ icon: Icon, title, body, bg }) => (
              <AnimatedItem key={title}>
                <div className={`${bg} rounded-2xl p-8 h-full`}>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-4">{title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm">{body}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
