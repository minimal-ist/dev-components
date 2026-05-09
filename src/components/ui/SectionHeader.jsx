export default function SectionHeader({ eyebrow, title, subtitle, light = false, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? 'text-white' : 'text-primary'}`}>
        {title}
        <span className="block w-12 h-1 bg-accent mt-4 rounded-full" style={center ? { margin: '1rem auto 0' } : {}} />
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed max-w-2xl ${light ? 'text-slate-300' : 'text-slate-600'} ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
