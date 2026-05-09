import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Badge from '../ui/Badge'

export default function ProductCard({ product, compact = false }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-accent/30 transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className="relative h-48 bg-primary overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-32 h-32 border-4 border-white rounded-full" />
          <div className="absolute w-20 h-20 border-4 border-accent rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        <div className="absolute top-4 right-4">
          <Badge variant="orange">{product.category}</Badge>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent-dark transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
          {product.shortDesc}
        </p>
        {!compact && product.specs.length > 0 && (
          <ul className="mb-4 space-y-1">
            {product.specs.slice(0, 2).map((spec, i) => (
              <li key={i} className="text-xs text-slate-400 flex items-start gap-1.5">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {spec}
              </li>
            ))}
          </ul>
        )}
        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center gap-1.5 text-accent hover:text-accent-dark font-semibold text-sm transition-colors group/link"
        >
          Learn More
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}
