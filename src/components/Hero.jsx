import React from 'react'
import { ArrowRight, Play, ChevronDown, Zap, Shield } from 'lucide-react'

const pills = ['ISO 45001 Certified', '10,000+ Businesses', 'Free 2-Day Delivery', 'Expert Consultation']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Section tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-gold/30 text-brand-gold text-xs font-semibold tracking-widest uppercase mb-8">
            <Zap className="w-3.5 h-3.5" />
            Trusted by 10,000+ Businesses
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-6 text-brand-dark">
            Your People Deserve{' '}
            <span className="gradient-text">
              Better Protection
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed mb-10">
            Premium industrial safety equipment that meets global standards.
            Stop compromising on the lives that build your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#products" className="btn-gold text-base px-8 py-4 group">
              Shop Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#solutions" className="btn-ghost text-base px-8 py-4 group">
              <Play className="w-4 h-4" />
              View Solutions
            </a>
          </div>

          {/* Trust pills */}
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

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto">
          {[
            { value: '10K+', label: 'Happy Businesses' },
            { value: '500+', label: 'Safety Products' },
            { value: '99.8%', label: 'Certification Rate' },
            { value: '24/7', label: 'Expert Support' },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-5 text-center group hover:border-brand-gold/20 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text-gold mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce-slow z-10">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  )
}
