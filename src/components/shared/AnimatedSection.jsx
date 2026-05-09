import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const directionVariants = {
  up:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 },  visible: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
}

export default function AnimatedSection({ children, direction = 'up', delay = 0, className = '', stagger = false }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const variants = directionVariants[direction]

  const containerVariants = stagger
    ? { visible: { transition: { staggerChildren: 0.1 } } }
    : {}

  return (
    <motion.div
      ref={ref}
      variants={{ ...variants, ...containerVariants }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedItem({ children, direction = 'up', className = '' }) {
  const variants = directionVariants[direction]
  return (
    <motion.div variants={variants} transition={{ duration: 0.5, ease: 'easeOut' }} className={className}>
      {children}
    </motion.div>
  )
}
