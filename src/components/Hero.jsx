import React from 'react'
import { ArrowRight, Play, ChevronDown, Zap, Shield } from 'lucide-react'

const pills = ['ISO 45001 Certified', '10,000+ Businesses', 'Free 2-Day Delivery', 'Expert Consultation']

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden">

      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=90&fit=crop"
          alt="Industrial construction site"
          className="w-full h-full object-cover object-center"
        />
        {/* Light corporate overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-transparent to-white/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag - Stays at top */}
        <div className="pt-8 mb-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-gold/30 text-brand-gold text-xs font-semibold tracking-widest uppercase">
            <Zap className="w-3.5 h-3.5" />
            Trusted by 10,000+ Businesses
          </div>
        </div>

        {/* Middle Content - Centered */}
        <div className="max-w-4xl mx-auto text-center flex-1 flex flex-col justify-center">
          {/* Headline */}
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight mb-8 text-brand-dark">
            Your People Deserve{' '}
            <span className="gradient-text">
              Better Protection
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-12">
            Discover the future of workplace safety at <strong className="text-black">The Health & Safety Event 2026</strong>. 
            Join 14,500+ professionals at NEC Birmingham to explore the latest industrial protection innovations. <br />
            <strong className="text-black">Visit us at Stand 2B90</strong>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#solutions" className="btn-gold text-base px-10 py-5 group">
              <Play className="w-4 h-4" />
              View Solutions
            </a>
          </div>
        </div>

        {/* Bottom Trust Pills */}
        <div className="pb-12 mt-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {pills.map((pill, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-slate-700 border border-slate-200 bg-white/80 backdrop-blur-sm"
              >
                <Shield className="w-3 h-3 text-brand-gold" />
                {pill}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce-slow z-10 pointer-events-none opacity-50">
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  )
}
