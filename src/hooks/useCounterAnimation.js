import { useState, useEffect, useRef } from 'react'

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

export function useCounterAnimation(target, duration = 2000, inView = false) {
  const [count, setCount] = useState(0)
  const startTimeRef = useRef(null)
  const rafRef = useRef(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!inView || hasStarted.current) return
    hasStarted.current = true

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)
      setCount(Math.round(easedProgress * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [inView, target, duration])

  return count
}
