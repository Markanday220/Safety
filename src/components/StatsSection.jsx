import React, { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 10000, suffix: '+', label: 'Businesses Protected', color: 'text-brand-dark' },
  { value: 500, suffix: '+', label: 'Safety Products', color: 'text-brand-dark' },
  { value: 15, suffix: '+', label: 'Years of Excellence', color: 'text-brand-dark' },
  { value: 99, suffix: '.8%', label: 'On-Time Delivery Rate', color: 'text-brand-dark' },
  { value: 0, suffix: ' Compromises', label: 'On Quality Standards', color: 'text-brand-dark' },
  { value: 4, suffix: ' Nations', label: 'UK Coverage', color: 'text-brand-dark' },
]

function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    const step = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [start, target, duration])
  return count
}

function StatCard({ stat, started }) {
  const count = useCounter(stat.value, 2000, started)
  return (
    <div className="w-full glass-card p-2 text-center group hover:-translate-y-2 transition-all duration-300">
      <div className={`w-full text-3xl md:text-3xl font-display font-bold mb-3 ${stat.color}`}>
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-sm text-slate-600 leading-relaxed">{stat.label}</div>
    </div>
  )
}

export default function StatsSection() {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=1920&q=80&fit=crop"
          alt="Industrial workers achievement"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-white/80 to-white/94" />
      </div>

      <div className="absolute inset-0 radial-glow-gold opacity-30 pointer-events-none z-0" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block rounded-2xl bg-white/85 backdrop-blur-xl border border-slate-200 px-5 py-4 md:px-8 md:py-6 shadow-[0_18px_60px_rgba(2,6,23,0.10)]">
            <div className="section-tag mb-3 justify-center text-brand-dark">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              Numbers That Matter
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-dark mb-3">
              A Decade of <span className="text-brand-dark">Proven Results</span>
            </h2>
            <p className="text-slate-700 text-lg max-w-xl mx-auto">
              Behind every number is a workplace made safer and a life protected.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  )
}
