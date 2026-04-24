import React, { useState, useEffect, useContext } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { CartContext } from '../context/CartContext'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#why-us' },
  { label: 'Contact', href: '#footer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { cartItems, setCartOpen } = useContext(CartContext)

  const totalQty = cartItems.reduce((acc, i) => acc + i.qty, 0)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-2xl border-b border-slate-200 shadow-[0_8px_30px_rgba(2,6,23,0.08)]'
          : 'bg-white/60 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/safetyplus-logo.png"
              alt="Safety Plus"
              className="h-9 md:h-10 w-auto object-contain"
              draggable="false"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-700 hover:text-brand-dark font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Row */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 transition-all duration-200"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-5 h-5 text-brand-dark" />
              {totalQty > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-brand-gold text-brand-dark text-xs font-bold flex items-center justify-center">
                  {totalQty}
                </span>
              )}
            </button>
            <a
              href="#products"
              className="btn-gold text-sm px-5 py-2.5"
            >
              Shop Now
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 rounded-lg border border-slate-200 bg-white"
            >
              <ShoppingCart className="w-5 h-5 text-brand-dark" />
              {totalQty > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-gold text-brand-dark text-xs font-bold flex items-center justify-center">
                  {totalQty}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg border border-slate-200 bg-white transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5 text-brand-dark" /> : <Menu className="w-5 h-5 text-brand-dark" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-2xl border-t border-slate-200 px-4 py-4 space-y-2">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 px-4 rounded-xl text-slate-700 hover:text-brand-dark hover:bg-slate-50 text-sm font-medium transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#products"
            onClick={() => setMobileOpen(false)}
            className="btn-gold w-full justify-center mt-2"
          >
            Shop Now
          </a>
        </div>
      </div>
    </header>
  )
}
