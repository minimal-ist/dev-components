import { useInView } from 'react-intersection-observer'
import { useCounterAnimation } from '../../hooks/useCounterAnimation'

export default function AnimatedCounter({ target, suffix = '', label, description, light = false, decimal = false }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const count = useCounterAnimation(target, 2000, inView)

  const displayValue = decimal ? (count / 10).toFixed(1) : count.toLocaleString()

  return (
    <div ref={ref} className="text-center">
      <div className={`text-5xl md:text-6xl font-black tabular-nums ${light ? 'text-white' : 'text-primary'}`}>
        {displayValue}{suffix}
      </div>
      <div className={`mt-2 text-base font-semibold ${light ? 'text-accent' : 'text-accent'}`}>
        {label}
      </div>
      {description && (
        <p className={`mt-1 text-sm ${light ? 'text-slate-400' : 'text-slate-500'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
