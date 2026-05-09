import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { navLinks, productSubmenu } from '../../data/navigation'

export default function MobileMenu({ isOpen, onClose }) {
  const { pathname } = useLocation()
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-primary z-50 flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="text-white font-bold text-lg">Dev Components</span>
              <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors p-1">
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-6 space-y-1">
              {navLinks.map(link => (
                link.hasSubmenu ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setProductsOpen(v => !v)}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-all font-medium"
                    >
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {productsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 mt-1 space-y-1">
                            <Link
                              to="/products"
                              onClick={onClose}
                              className="block px-4 py-2 rounded-lg text-accent hover:text-white text-sm font-semibold hover:bg-white/5 transition-all"
                            >
                              View All Products →
                            </Link>
                            {productSubmenu.map(item => (
                              <Link
                                key={item.slug}
                                to={item.href}
                                onClick={onClose}
                                className="block px-4 py-2 rounded-lg text-slate-400 hover:text-white text-sm hover:bg-white/5 transition-all"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={onClose}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                      pathname === link.href
                        ? 'text-accent bg-accent/10'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>
            <div className="p-6 border-t border-white/10">
              <Link
                to="/contact"
                onClick={onClose}
                className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
