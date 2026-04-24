import React, { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Building2 } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Mehta',
    role: 'Safety Manager',
    company: 'Larsen & Toubro',
    avatar: 'RM',
    rating: 5,
    text: "We switched to SafetyPlus after a near-miss incident. The quality difference is night and day. Our accident rate has dropped by 78% in 8 months. These aren't just products — they're life insurance.",
    result: '78% fewer incidents',
    color: '',
    accent: 'text-brand-gold',
    borderColor: 'border-brand-gold/25',
  },
  {
    name: 'Priya Sharma',
    role: 'HSE Director',
    company: 'ONGC',
    avatar: 'PS',
    rating: 5,
    text: "The compliance kits saved us from a ₹45 lakh potential penalty during our last audit. The team at SafetyPlus understood our regulatory environment better than our own consultants.",
    result: '₹45L penalty avoided',
    color: '',
    accent: 'text-brand-dark',
    borderColor: 'border-slate-200',
  },
  {
    name: 'Vikram Singh',
    role: 'Operations Head',
    company: 'Tata Steel',
    avatar: 'VS',
    rating: 5,
    text: "We've been ordering in bulk for 3 plants. Delivery is always on time, quality is consistent, and the after-sales support is exceptional. SafetyPlus is the only vendor we fully trust.",
    result: '3 plants protected',
    color: '',
    accent: 'text-brand-dark',
    borderColor: 'border-slate-200',
  },
  {
    name: 'Anita Patel',
    role: 'Facility Manager',
    company: 'Reliance Industries',
    avatar: 'AP',
    rating: 5,
    text: "The ProGuard helmets have been phenomenal. After 18 months of heavy industrial use, they still look and perform like new. The ROI compared to cheaper alternatives is undeniable.",
    result: '18 months, zero failures',
    color: '',
    accent: 'text-brand-dark',
    borderColor: 'border-slate-200',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive(i => (i + 1) % testimonials.length)

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&fit=crop&crop=top"
          alt="Construction workers team"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/96 via-white/90 to-white/94" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/72 via-white/38 to-white/68" />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent z-10" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] radial-glow-blue opacity-18 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 max-w-4xl mx-auto rounded-[2rem] bg-white/62 backdrop-blur-sm border border-white/60 shadow-[0_24px_80px_rgba(255,255,255,0.28)] px-6 py-8 md:px-10 md:py-10">
          <div className="section-tag mb-4 justify-center">
            <Star className="w-3.5 h-3.5 fill-brand-gold" />
            Social Proof
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-dark mb-4">
            Real Results,{' '}
            <span className="gradient-text-gold">Real Businesses</span>
          </h2>
          <p className="text-brand-dark text-lg font-medium max-w-xl mx-auto">
            Don't take our word for it. Here's what India's leading companies say.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto mb-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`glass-card border ${t.borderColor} p-8 md:p-10 transition-all duration-500 ${i === active ? 'block' : 'hidden'}`}
            >
              <Quote className="w-10 h-10 text-brand-gold/30 mb-6" />
              <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-light italic mb-8">
                "{t.text}"
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-base font-bold ${t.accent}`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-brand-dark">{t.name}</div>
                    <div className="text-sm text-slate-600">{t.role}, {t.company}</div>
                    <div className="flex items-center gap-0.5 mt-1">
                      {Array.from({ length: t.rating }).map((_, ri) => (
                        <Star key={ri} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`px-4 py-2 rounded-xl text-sm font-bold ${t.accent} bg-slate-50 border border-slate-200`}>
                  ✓ {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button onClick={prev} className="p-3 rounded-xl glass border border-slate-200 hover:border-slate-300 hover:bg-white transition-all">
            <ChevronLeft className="w-5 h-5 text-brand-dark" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-brand-gold' : 'w-1.5 bg-slate-300'}`}
              />
            ))}
          </div>
          <button onClick={next} className="p-3 rounded-xl glass border border-slate-200 hover:border-slate-300 hover:bg-white transition-all">
            <ChevronRight className="w-5 h-5 text-brand-dark" />
          </button>
        </div>

        {/* Small cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`glass-card p-4 text-left transition-all duration-300 ${i === active ? 'border-brand-gold/40' : 'opacity-60 hover:opacity-100'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-xs text-slate-600 truncate">{t.company}</span>
              </div>
              <div className="text-sm font-semibold text-brand-dark truncate">{t.name}</div>
              <div className={`text-xs font-medium mt-1 ${t.accent}`}>{t.result}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
