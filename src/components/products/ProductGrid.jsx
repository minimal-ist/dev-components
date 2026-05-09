import { useState } from 'react'
import ProductCard from './ProductCard'
import AnimatedSection, { AnimatedItem } from '../shared/AnimatedSection'
import { products } from '../../data/products'

const categories = ['All', ...new Set(products.map(p => p.category))]

export default function ProductGrid() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
              active === cat
                ? 'bg-accent border-accent text-white shadow-lg shadow-accent/25'
                : 'bg-white border-slate-200 text-slate-600 hover:border-accent/50 hover:text-accent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <AnimatedSection stagger>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(product => (
            <AnimatedItem key={product.id}>
              <ProductCard product={product} />
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}
