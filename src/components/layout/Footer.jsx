import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube, Twitter } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { contact } from '../../data/company'
import { products } from '../../data/products'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-black text-white text-lg">D</div>
              <div>
                <div className="text-white font-bold text-base leading-tight">Dev Components</div>
                <div className="text-accent text-[10px] font-medium tracking-widest uppercase">Pvt. Ltd.</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Manufacturer of high-precision electrical stampings and laminations since 1991. ISO certified, serving 300+ customers across India and globally.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Youtube, href: '#' },
                { Icon: Twitter, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent flex items-center justify-center transition-all group">
                  <Icon size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm hover:text-accent hover:translate-x-1 transition-all inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Products</h3>
            <ul className="space-y-2.5">
              {products.slice(0, 7).map(p => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`} className="text-sm hover:text-accent hover:translate-x-1 transition-all inline-block">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone size={16} className="text-accent mt-0.5 shrink-0" />
                <a href={`tel:${contact.phone}`} className="text-sm hover:text-accent transition-colors">{contact.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-accent mt-0.5 shrink-0" />
                <a href={`mailto:${contact.email}`} className="text-sm hover:text-accent transition-colors">{contact.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <p className="text-sm">
                  {contact.addresses.main.street},<br />
                  {contact.addresses.main.area},<br />
                  {contact.addresses.main.city}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Dev Components Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-accent transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
