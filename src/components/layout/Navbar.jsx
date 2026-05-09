import { useState } from 'react'
import { Link, useMatch } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, ChevronDown, Phone } from 'lucide-react'
import { navLinks, productSubmenu } from '../../data/navigation'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import MobileMenu from './MobileMenu'

function NavLink({ link }) {
  const match = useMatch(link.href === '/' ? '/' : `${link.href}/*`)
  const [hovered, setHovered] = useState(false)

  if (link.hasSubmenu) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <button className={`flex items-center gap-1 px-1 py-1 text-sm font-medium transition-colors ${match ? 'text-accent' : 'text-slate-200 hover:text-white'}`}>
          {link.label}
          <ChevronDown size={14} className={`transition-transform ${hovered ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] bg-primary border border-white/10 rounded-xl shadow-2xl p-4 z-50"
            >
              <Link
                to="/products"
                className="block mb-3 px-3 py-2 rounded-lg bg-accent/10 text-accent hover:text-accent text-sm font-semibold transition-colors"
              >
                View All Products →
              </Link>
              <div className="grid grid-cols-2 gap-1">
                {productSubmenu.map(item => (
                  <Link
                    key={item.slug}
                    to={item.href}
                    className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 text-sm transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <Link
      to={link.href}
      className={`relative px-1 py-1 text-sm font-medium transition-colors group ${match ? 'text-accent' : 'text-slate-200 hover:text-white'}`}
    >
      {link.label}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${match ? 'w-full' : 'w-0 group-hover:w-full'}`} />
    </Link>
  )
}

export default function Navbar() {
  const { scrolled } = useScrollProgress()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? 'bg-primary/95 backdrop-blur-md shadow-lg shadow-black/20 py-3'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-black text-white text-lg">D</div>
            <div>
              <div className="text-white font-bold text-base leading-tight">Dev Components</div>
              <div className="text-accent text-[10px] font-medium tracking-widest uppercase">Pvt. Ltd.</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(link => <NavLink key={link.label} link={link} />)}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919945671218" className="flex items-center gap-2 text-slate-300 hover:text-white text-sm transition-colors">
              <Phone size={14} className="text-accent" />
              +91 99456 71218
            </a>
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Get In Touch
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
