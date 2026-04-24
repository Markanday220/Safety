import React from 'react'
import { Award, CheckCircle, Globe, TrendingUp } from 'lucide-react'

const certifications = [
  { label: 'ISO 45001', sublabel: 'Occupational Safety' },
  { label: 'CE Mark', sublabel: 'European Certified' },
  { label: 'BIS Certified', sublabel: 'Bureau of Indian Standards' },
  { label: 'ANSI/ISEA', sublabel: 'US Safety Standard' },
]

const tickerItems = [
  '✦ Free Shipping on Orders over ₹2,999',
  '✦ Extra Discount on Bulk Orders — Buy More Save More!',
  '✦ 30 Days Returns Policy',
  '✦ ISO 45001 Certified Products',
  '✦ Same-Day Dispatch Before 3 PM',
  '✦ 24/7 Expert Safety Support',
  '✦ 10,000+ Businesses Trust SafetyPlus',
  '✦ 100% Compliance Guaranteed',
]

export default function Trust() {
  return (
    <>
      <section className="relative py-20 overflow-hidden border-y border-slate-200">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=1920&q=80&fit=crop"
            alt="Workers in safety gear"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/82 to-white/94" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-12">
            <div className="inline-block rounded-2xl bg-white/85 backdrop-blur-xl border border-slate-200 px-5 py-4 md:px-8 md:py-6 shadow-[0_18px_60px_rgba(2,6,23,0.10)]">
              <p className="text-sm text-slate-700 font-semibold tracking-widest uppercase mb-2">
                Trusted by industry leaders
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark">
                Built on a Foundation of <span className="text-brand-dark">Trust &amp; Compliance</span>
              </h2>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {[
              { icon: Award, value: '15+ Years', label: 'Industry Experience', color: 'text-brand-dark' },
              { icon: Globe, value: '28 States', label: 'Pan-India Delivery', color: 'text-brand-dark' },
              { icon: CheckCircle, value: '100%', label: 'Compliance Guaranteed', color: 'text-brand-gold' },
              { icon: TrendingUp, value: '4.9/5', label: 'Customer Rating', color: 'text-brand-dark' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="glass-card p-6 flex items-start gap-4 group hover:-translate-y-1 transition-all duration-300">
                  <div className={`p-2.5 rounded-xl bg-slate-50 border border-slate-200 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-2xl font-display font-bold ${item.color}`}>{item.value}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{item.label}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Certifications */}
          <div className="glass-card p-6">
            <p className="text-xs text-slate-600 tracking-widest uppercase font-medium mb-5 text-center">International Certifications</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="flex flex-col items-center gap-1 p-4 rounded-xl border border-slate-200 bg-white hover:border-brand-gold/30 transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-1">
                    <CheckCircle className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div className="text-sm font-bold text-brand-dark group-hover:text-brand-gold transition-colors">{cert.label}</div>
                  <div className="text-xs text-slate-600 text-center">{cert.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL-BLEED PROMO TICKER STRIP ── */}
      <div
        className="relative w-full overflow-hidden py-4"
        style={{ backgroundColor: '#0B1026' }}
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0B1026, transparent)' }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0B1026, transparent)' }}
        />

        {/* Scrolling content */}
        <div
          className="flex whitespace-nowrap"
          style={{ animation: 'ticker 35s linear infinite' }}
        >
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center text-sm font-bold tracking-wide px-10"
              style={{ color: '#FFFFFF' }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
