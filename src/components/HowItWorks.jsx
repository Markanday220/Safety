import React from 'react'
import { ClipboardCheck, Package, Truck, BadgeCheck } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: ClipboardCheck,
    title: 'Tell Us Your Hazards',
    desc: 'Our safety consultants assess your site-specific risks, workforce size, and compliance requirements — free of charge.',
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
    border: 'border-brand-gold/20',
  },
  {
    step: '02',
    icon: Package,
    title: 'We Build Your Kit',
    desc: 'We curate the perfect combination of certified PPE matched precisely to your hazard zones, industry standards, and budget.',
    color: 'text-brand-dark',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
  },
  {
    step: '03',
    icon: Truck,
    title: 'Fast, Safe Delivery',
    desc: 'All orders are dispatched same day and delivered within 24–48 hours pan-India, with real-time tracking.',
    color: 'text-brand-dark',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
  },
  {
    step: '04',
    icon: BadgeCheck,
    title: 'Stay Audit-Ready',
    desc: 'We provide full certification documentation and ongoing compliance support so you\'re always ready for inspections.',
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
    border: 'border-brand-gold/20',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 overflow-hidden" id="how-it-works">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&q=80&fit=crop&crop=bottom"
          alt="Safety process"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-dark/40 to-brand-dark/95" />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] radial-glow-blue opacity-20 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 max-w-4xl mx-auto px-6 py-8 md:px-10 md:py-10">
          <div className="mb-4 flex items-center justify-center gap-2 text-brand-gold text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            How It Works
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-5">
            Protected in{' '}
            <span className="text-brand-gold">4 Simple Steps</span>
          </h2>
          <p className="text-white/60 text-lg font-medium max-w-xl mx-auto">
            From first consultation to full compliance — we handle every step so you can focus on running your business.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-gold/20 via-brand-gold/40 to-brand-gold/20 z-0" />

          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className={`glass-card border ${s.border} p-7 h-full relative group hover:-translate-y-2 transition-all duration-300 z-10`}>
                {/* Step number */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl ${s.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${s.color}`} />
                  </div>
                  <span className={`font-mono text-3xl font-bold ${s.color} opacity-20`}>{s.step}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-dark mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a href="#products" className="btn-gold text-base px-10 py-4">
            Start Your Protection Journey →
          </a>
        </div>
      </div>
    </section>
  )
}
