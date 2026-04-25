import React from 'react'
import { ArrowRight, Play, ChevronDown, Zap, Shield } from 'lucide-react'

const pills = ['ISO 45001 Certified', '10,000+ Businesses', 'Free 2-Day Delivery', 'Expert Consultation']

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col gap-5 justify-center overflow-hidden">

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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4 flex flex-col h-full">
        <div className="max-w-4xl mx-auto text-center flex-1 flex flex-col justify-center">

          {/* Section tag */}
          <div className="inline-flex items-center sm:mt-8 gap-2 self-center px-3 py-1.5 rounded-full glass border border-brand-gold/30 text-brand-gold text-[10px] font-semibold tracking-widest uppercase mb-4">
            <Zap className="w-3 h-3" />
            Trusted by 10,000+ Businesses
          </div>

          {/* Headline */}
          <h1 className="sm:mt-12 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-4 text-brand-dark">
            Your People Deserve{' '}
            <span className=" gradient-text">
              Better Protection
            </span>
          </h1>

          {/* Subheadline */}
          <p className="sm:mt-8 text-sm md:text-base lg:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed mb-6">
            Discover the future of workplace safety at <strong className="text-black">The Health & Safety Event 2026</strong>.
            Join 14,500+ professionals at NEC Birmingham to explore the latest industrial protection innovations. <br />
            <strong className="text-black">Visit us at Stand 2B90</strong>
          </p>

          {/* CTA Buttons */}
          <div className="sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="#solutions" className="btn-gold text-sm px-6 py-3 group">
              <Play className="w-4 h-4" />
              View Solutions
            </a>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {pills.map((pill, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium text-slate-700 border border-slate-200 bg-white/80 backdrop-blur-sm"
              >
                <Shield className="w-2.5 h-2.5 text-brand-gold" />
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Stats row - Compact and at bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-auto mb-10 max-w-4xl mx-auto w-full">
          {[
            { value: '10K+', label: 'Happy Businesses' },
            { value: '500+', label: 'Safety Products' },
            { value: '99.8%', label: 'Certification Rate' },
            { value: '24/7', label: 'Expert Support' },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-3 text-center group hover:border-brand-gold/20 transition-all duration-300">
              <div className="text-xl md:text-2xl font-display font-bold gradient-text-gold mb-0.5 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-[9px] text-slate-600 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
