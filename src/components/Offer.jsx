import React, { useState, useEffect } from 'react'
import { Timer, Tag, ArrowRight, Flame, Gift } from 'lucide-react'

const bundles = [
  {
    title: 'Starter Protection Bundle',
    subtitle: 'Perfect for small teams (up to 5 workers)',
    items: ['5× ProGuard Elite Helmets', '5× NitriMax Pro Gloves', '5× SafeBreath N95 PRO', '1× First Aid Kit'],
    price: 4999,
    originalPrice: 7499,
    savings: 2500,
    badge: 'Most Popular',
    color: '',
    borderColor: 'border-brand-gold/30',
    accentColor: 'text-brand-gold',
  },
  {
    title: 'Pro Site Safety Bundle',
    subtitle: 'Full coverage for 10-person sites',
    items: ['10× ProGuard Elite Helmets', '10× Full-Body Harnesses', '10× NitriMax Pro Gloves', '5× VisionShield MAX', '2× Comprehensive First Aid Kits'],
    price: 18999,
    originalPrice: 29999,
    savings: 11000,
    badge: 'Best Value',
    color: '',
    borderColor: 'border-slate-200',
    accentColor: 'text-brand-dark',
  },
  {
    title: 'Enterprise Safety Suite',
    subtitle: 'Multi-site compliance for 50+ workers',
    items: ['50× ProGuard Elite Helmets', '50× Full-Body Harnesses', '50× NitriMax Pro Gloves', 'Custom PPE Kit', 'Dedicated Account Manager', 'Annual Compliance Review'],
    price: 79999,
    originalPrice: 149999,
    savings: 70000,
    badge: 'Enterprise',
    color: '',
    borderColor: 'border-slate-200',
    accentColor: 'text-brand-dark',
  },
]

function useCountdown(targetHours = 23) {
  const [time, setTime] = useState({ h: targetHours, m: 59, s: 59 })
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev
        s--
        if (s < 0) { s = 59; m-- }
        if (m < 0) { m = 59; h-- }
        if (h < 0) { h = targetHours; m = 59; s = 59 }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [targetHours])
  return time
}

export default function Offer() {
  const time = useCountdown(23)
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80&fit=crop"
          alt="Industrial workers team"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/96 via-white/88 to-white/94" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/76 via-white/34 to-white/66" />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent z-10" />
      <div className="absolute inset-0 radial-glow-gold opacity-25 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-5 max-w-4xl mx-auto rounded-[2rem] bg-white/62 backdrop-blur-sm border border-white/60 shadow-[0_24px_80px_rgba(255,255,255,0.28)] px-6 py-8 md:px-10 md:py-10">
          <div className="section-tag mb-4 justify-center">
            <Flame className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-brand-gold">Limited Time Offer</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-4">
            Bundle & Save{' '}
            <span className="gradient-text-gold">Up to 47%</span>
          </h2>
        </div>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-4 mb-14 rounded-[1.75rem] bg-white/54 backdrop-blur-sm border border-white/60 shadow-[0_18px_60px_rgba(255,255,255,0.22)] px-6 py-5 max-w-fit mx-auto">
          <p className="text-brand-dark font-medium text-sm">Offer expires in:</p>
          <div className="flex items-center gap-2">
            {[
              { val: pad(time.h), label: 'HRS' },
              { val: pad(time.m), label: 'MIN' },
              { val: pad(time.s), label: 'SEC' },
            ].map((unit, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center">
                  <div className="glass-card px-4 py-2 min-w-[52px] text-center">
                    <span className="font-mono text-2xl font-bold text-brand-gold">{unit.val}</span>
                  </div>
                  <span className="text-xs text-slate-500 mt-1 tracking-wider">{unit.label}</span>
                </div>
                {i < 2 && <span className="text-brand-gold text-xl font-bold mb-4">:</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bundle cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {bundles.map((bundle, i) => (
            <div
              key={i}
              className={`glass-card border ${bundle.borderColor} p-7 relative group hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="absolute -top-3 left-6">
                <span className={`text-xs font-bold px-4 py-1.5 rounded-full bg-white border ${bundle.borderColor} ${bundle.accentColor}`}>
                  {bundle.badge}
                </span>
              </div>
              <div className="mt-3">
                <h3 className="font-display font-bold text-xl text-brand-dark mb-1">{bundle.title}</h3>
                <p className="text-sm text-slate-600 mb-5">{bundle.subtitle}</p>
                <ul className="space-y-2 mb-6">
                  {bundle.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className={`mt-0.5 ${bundle.accentColor}`}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-slate-200 pt-5 mb-5">
                  <div className="flex items-end gap-3">
                    <span className={`text-3xl font-display font-bold ${bundle.accentColor}`}>
                      ₹{bundle.price.toLocaleString()}
                    </span>
                    <span className="text-slate-400 line-through text-sm mb-1">₹{bundle.originalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Gift className="w-3.5 h-3.5 text-brand-gold" />
                    <span className="text-xs text-brand-gold font-semibold">You save ₹{bundle.savings.toLocaleString()}</span>
                  </div>
                </div>
                <button className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${bundle.borderColor} ${bundle.accentColor} hover:bg-slate-50`}>
                  <Tag className="w-4 h-4" />
                  Get This Bundle
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-500">
          * Prices include GST. Free shipping on all bundle orders. Custom configurations available.
        </p>
      </div>
    </section>
  )
}
