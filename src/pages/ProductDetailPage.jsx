import { useParams, Link, Navigate } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '../data/products'
import PageHero from '../components/shared/PageHero'
import ProductCard from '../components/products/ProductCard'
import AnimatedSection, { AnimatedItem } from '../components/shared/AnimatedSection'
import CTASection from '../components/home/CTASection'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) return <Navigate to="/products" replace />

  const related = getRelatedProducts(product)

  return (
    <>
      <PageHero
        title={product.name}
        subtitle={product.shortDesc}
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: product.name },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-accent/20 rounded-2xl" />
                <div className="relative bg-primary rounded-2xl h-80 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-accent) 1px, transparent 0)', backgroundSize: '32px 32px' }}
                  />
                  <div className="relative text-center">
                    <div className="w-24 h-24 border-4 border-accent/40 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-14 h-14 border-4 border-accent rounded-full" />
                    </div>
                    <p className="text-slate-400 text-sm">{product.category}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <p className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-3">{product.category}</p>
              <h2 className="text-3xl font-black text-primary mb-5">{product.name}</h2>
              <p className="text-slate-600 leading-relaxed mb-8">{product.fullDesc}</p>

              <h3 className="text-lg font-bold text-primary mb-4">Specifications</h3>
              <ul className="space-y-3 mb-8">
                {product.specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-slate-600 text-sm">{spec}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/contact?subject=${encodeURIComponent(`Quote request: ${product.name}`)}`}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-accent/25"
              >
                Request a Quote
                <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-2xl font-black text-primary mb-8">Related Products</h2>
            </AnimatedSection>
            <AnimatedSection stagger>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map(p => (
                  <AnimatedItem key={p.id}>
                    <ProductCard product={p} compact />
                  </AnimatedItem>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
