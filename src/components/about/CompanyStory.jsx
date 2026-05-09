import AnimatedSection from '../shared/AnimatedSection'
import { founder } from '../../data/company'

const milestones = [
  { year: '1991', event: 'Founded by Mr. Dhananjaya A in Bangalore with a focus on precision electrical stampings.' },
  { year: '2000', event: 'Expanded to second facility; launched progressive die designing and making services.' },
  { year: '2008', event: 'Achieved ISO certification and began serving international OEM customers.' },
  { year: '2015', event: 'Crossed 100+ active customer milestone; added CRGO miter-cut product line.' },
  { year: '2020', event: 'Third factory commissioned in Kachohalli Industrial Area to meet growing demand.' },
  { year: 'Today', event: '300+ customers, 65,000+ MT manufactured, and three state-of-the-art facilities.' },
]

export default function CompanyStory() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection direction="left">
            <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6 leading-tight">
              Three Decades of
              <span className="block">Manufacturing Excellence</span>
              <span className="block w-12 h-1 bg-accent mt-4 rounded-full" />
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Dev Components Pvt. Ltd. was established in 1991 by {founder.name}, a mechanical engineer from R.V. College of Engineering, Bangalore. What began as a small precision stamping operation has grown into one of Bangalore's most trusted manufacturers of electrical laminations and motor stampings.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Over three decades, we have built deep expertise in CRGO and CRNGO silicon steel processing, progressive die tooling, and core assembly. Our customer roster spans automotive Tier-1 suppliers, transformer OEMs, contactor manufacturers, and defense equipment producers.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Today we operate three manufacturing facilities in Bangalore with a combined capacity serving 300+ customers across India and internationally. Our in-house tooling capability means faster prototyping, tighter tolerances, and full ownership of our quality process.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative pl-6 border-l-2 border-accent/30 space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-accent border-4 border-white shadow" />
                  <div className="text-accent text-xs font-bold uppercase tracking-wider mb-1">{m.year}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{m.event}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
