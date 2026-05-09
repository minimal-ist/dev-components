import { motion } from 'framer-motion'

const variants = {
  primary:   'bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/25',
  secondary: 'bg-transparent border-2 border-white text-white hover:bg-white/10',
  ghost:     'border border-accent text-accent hover:bg-accent hover:text-white',
  dark:      'bg-primary text-white hover:bg-white/10 border border-white/20',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({ children, variant = 'primary', size = 'md', className = '', as: Tag = 'button', ...props }) {
  return (
    <motion.div whileTap={{ scale: 0.97 }} className="inline-block">
      <Tag
        className={`inline-flex items-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  )
}
