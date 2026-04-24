import React from 'react'
import { Clock, Headphones, Truck, BadgeCheck, RefreshCw, Users } from 'lucide-react'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'ISO 45001 Certified',
    desc: 'Every product leaves our warehouse with full certification documentation. Zero compromises on compliance.',
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
    border: 'border-brand-gold/20',
  },
  {
    icon: Truck,
    title: 'Same-Day Dispatch',
    desc: 'Order before 3 PM and your equipment ships today. Most metro deliveries within 24 hours.',
    color: 'text-brand-dark',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
  },
  {
    icon: Headphones,
    title: '24/7 Safety Experts',
    desc: 'Our team of certified safety consultants is available round-the-clock for product guidance and compliance queries.',
    color: 'text-brand-dark',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
  },
  {
    icon: RefreshCw,
    title: '30-Day Easy Returns',
    desc: "Not satisfied? Full refund, no questions asked within 30 days. That's how confident we are.",
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
    border: 'border-brand-gold/20',
  },
  {
    icon: Users,
    title: '15+ Years in Industry',
    desc: "We've been protecting workers since 2009. Our experience shows in the quality of every product we sell.",
    color: 'text-brand-dark',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
  },
  {
    icon: Clock,
    title: 'Bulk Order Specialists',
    desc: 'Custom pricing, dedicated account managers, and priority fulfillment for orders above 50 units.',
    color: 'text-brand-dark',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
  },
]

export default function WhyUs() {
  return (
    <section className="relative py-24 overflow-hidden" id="why-us">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&q=80&fit=crop"
          alt="Safety equipment showroom"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/96 via-white/89 to-white/94" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/72 via-white/35 to-white/68" />
      </div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] radial-glow-gold opacity-20 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto rounded-[2rem] bg-white/60 backdrop-blur-sm border border-white/60 shadow-[0_24px_80px_rgba(255,255,255,0.28)] px-6 py-8 md:px-10 md:py-10">
          <div className="section-tag mb-4 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            Why SafetyPlus
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-5">
            The Difference Is in the{' '}
            <span className="gradient-text">Details</span>
          </h2>
          <p className="text-brand-dark text-lg font-medium max-w-2xl mx-auto">
            Anyone can sell safety gear. We deliver the complete protection experience
            — from product quality to post-purchase support.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <div key={i} className={`glass-card border ${r.border} p-7 group hover:-translate-y-2 transition-all duration-300`}>
                <div className={`w-12 h-12 rounded-2xl ${r.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${r.color}`} />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-dark mb-3">{r.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Authority bar */}
        <div className="mt-14 glass-card p-6">
          <div className="flex flex-wrap items-stretch justify-center gap-8 text-center">
            {[
              { value: '10,000+', label: 'Satisfied Businesses', color: 'text-black' },
              { value: '500+', label: 'Safety Products', color: 'text-black' },
              { value: '15+', label: 'Years of Excellence', color: 'text-black' },
              { value: '99.8%', label: 'On-Time Delivery', color: 'text-black' },
              { value: '4.9/5', label: 'Average Rating', color: 'text-black' },
            ].map((s, i) => (
              <div key={i} className="min-w-[100px] flex-1 flex flex-col justify-center">
                <div className={`text-2xl md:text-3xl font-display font-bold ${s.color}`}>{s.value}</div>
                <div className="text-xs text-slate-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
