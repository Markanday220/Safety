import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ onEnquiryClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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

          {/* CTA Row */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onEnquiryClick}
              className="btn-gold text-sm px-5 py-2.5"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-3">
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
          <button
            onClick={() => {
              setMobileOpen(false)
              onEnquiryClick()
            }}
            className="btn-gold w-full justify-center mt-2"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </header>
  )
}
