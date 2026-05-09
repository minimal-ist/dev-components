import { products } from './products.js'

export const productSubmenu = products.map(p => ({
  name: p.name,
  slug: p.slug,
  href: `/products/${p.slug}`,
}))

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products', hasSubmenu: true },
  { label: 'About Us', href: '/about' },
  { label: 'Operation', href: '/operation' },
  { label: 'Overseas', href: '/overseas' },
  { label: 'Contact Us', href: '/contact' },
]
