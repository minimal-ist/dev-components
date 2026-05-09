import { Car, Bot, Zap, Shield, Plug, Plane, Settings, Train, Cpu, Wrench, Satellite, Activity } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import AnimatedSection, { AnimatedItem } from '../shared/AnimatedSection'
import { industries } from '../../data/industries'

const iconMap = { Car, Bot, Zap, Shield, Plug, Plane, Settings, Train, Cpu, Wrench, Satellite, Activity }

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-14 text-center">
          <SectionHeader
            eyebrow="Industries We Serve"
            title="Built for Demanding Sectors"
            subtitle="Our precision stampings and laminations power critical applications across twelve industries."
            center
          />
        </AnimatedSection>

        <AnimatedSection stagger>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {industries.map(industry => {
              const Icon = iconMap[industry.icon] || Settings
              return (
                <AnimatedItem key={industry.id}>
                  <div className="group flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 hover:border-accent/30 hover:bg-accent-muted transition-all cursor-default">
                    <div className="w-14 h-14 rounded-xl bg-primary group-hover:bg-accent flex items-center justify-center mb-4 transition-colors">
                      <Icon size={24} className="text-accent group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-sm font-bold text-primary group-hover:text-accent-dark transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                </AnimatedItem>
              )
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
