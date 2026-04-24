import React from 'react'
import { ArrowRight, ShieldCheck, Star } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white" />
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent z-10" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] radial-glow-gold opacity-18 pointer-events-none z-0" />
      <div className="absolute -top-20 right-0 w-[380px] h-[380px] radial-glow-blue opacity-10 pointer-events-none z-0" />

      {/* Floating emojis */}
      <div className="absolute top-16 left-16 text-4xl animate-float opacity-20 hidden lg:block z-10">⛑️</div>
      <div className="absolute top-24 right-20 text-3xl animate-float opacity-20 hidden lg:block z-10" style={{ animationDelay: '-2s' }}>🦺</div>
      <div className="absolute bottom-20 left-24 text-3xl animate-float opacity-15 hidden lg:block z-10" style={{ animationDelay: '-4s' }}>🥽</div>
      <div className="absolute bottom-16 right-16 text-4xl animate-float opacity-15 hidden lg:block z-10" style={{ animationDelay: '-1s' }}>🥊</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Stars */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
          ))}
          <span className="text-slate-600 text-sm ml-2">Rated 4.9/5 by 10,000+ businesses</span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-brand-dark mb-6 leading-tight text-balance">
          Your Workers Can't{' '}
          <span className="gradient-text">Wait</span>{' '}
          for Protection
        </h2>

        <p className="text-xl text-slate-700 leading-relaxed mb-10 max-w-2xl mx-auto">
          Every hour without proper safety equipment is a risk you can't afford to take.
          Join 10,000+ businesses who trust SafetyPlus to protect what matters most.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#products" className="btn-gold text-lg px-10 py-5 animate-pulse-glow group">
            Get Protected Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#solutions" className="btn-ghost text-lg px-10 py-5">
            View All Solutions
          </a>
        </div>

        {/* Micro trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
          {[
            'Free shipping above ₹2,999',
            '30-day no-risk returns',
            'ISO 45001 certified products',
            '24/7 expert support',
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
