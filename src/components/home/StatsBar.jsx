import AnimatedCounter from '../ui/AnimatedCounter'
import { stats } from '../../data/stats'

export default function StatsBar() {
  return (
    <section id="stats" className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(stat => (
            <div key={stat.id}>
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
                decimal={stat.decimal}
                light
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
