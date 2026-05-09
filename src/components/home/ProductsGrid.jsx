import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import ProductCard from '../products/ProductCard'
import AnimatedSection, { AnimatedItem } from '../shared/AnimatedSection'
import { products } from '../../data/products'

export default function ProductsGrid() {
  const featured = products.slice(0, 6)

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <AnimatedSection>
            <SectionHeader
              eyebrow="What We Make"
              title="Our Product Range"
              subtitle="From raw stampings to fully assembled cores — precision engineered for demanding applications."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold whitespace-nowrap transition-colors group"
            >
              View All Products
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>

        <AnimatedSection stagger direction="up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map(product => (
              <AnimatedItem key={product.id}>
                <ProductCard product={product} />
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-primary hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl transition-all"
          >
            View All 10 Products
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
