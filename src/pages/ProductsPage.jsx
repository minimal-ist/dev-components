import PageHero from '../components/shared/PageHero'
import ProductGrid from '../components/products/ProductGrid'

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="High-precision electrical stampings and laminations across ten specialized product categories."
        breadcrumbs={[{ label: 'Products' }]}
      />
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid />
        </div>
      </section>
    </>
  )
}
