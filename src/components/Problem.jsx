import React from 'react'
import { AlertTriangle, XCircle, FileWarning, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Workers Are Getting Hurt',
    body: 'Every 15 seconds, a worker dies from a work-related accident. Substandard equipment is the #1 cause of preventable workplace injuries in India.',
    stat: '1 death every 15s',
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
    border: 'border-brand-gold/20',
  },
  {
    icon: XCircle,
    title: 'Low-Quality Gear That Fails',
    body: 'Cheap helmets crack. Thin gloves tear. Budget harnesses snap. When equipment fails, businesses face lawsuits, shutdowns, and irreversible reputation damage.',
    stat: '67% gear fails early',
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
    border: 'border-brand-gold/20',
  },
  {
    icon: FileWarning,
    title: 'Compliance Nightmares',
    body: "Regulatory violations carry fines up to ₹2 Crore. Most businesses don't realize they're non-compliant until an inspector arrives — or worse, after an accident.",
    stat: '₹2Cr in penalties',
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
    border: 'border-brand-gold/20',
  },
  {
    icon: TrendingDown,
    title: 'Productivity Loss & Morale',
    body: "Unsafe workplaces breed fear. When your team doesn't feel protected, output drops, absenteeism rises, and your best workers leave for safer employers.",
    stat: '40% drop in output',
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
    border: 'border-brand-gold/20',
  },
]

export default function Problem() {
  return (
    <section className="relative py-24 overflow-hidden" id="problem">
      {/* Clean light background */}
      <div className="absolute inset-0 z-0 bg-white" />

      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-brand-gold/40 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mb-4 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span className="text-brand-gold">The Reality</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-5 text-balance">
            The Cost of{' '}
            <span className="text-brand-gold">Ignoring</span>{' '}
            Safety
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-lg leading-relaxed">
            Every day businesses cut corners on safety. Every day those decisions end in tragedy,
            litigation, and lost revenue. The question is: when will yours?
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className={`glass-card p-8 group hover:-translate-y-2 transition-all duration-300 border ${p.border}`}
              >
                <div className="flex items-start gap-5">
                  <div className={`p-3 rounded-2xl ${p.bg} flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${p.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-brand-dark mb-2">{p.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm mb-4">{p.body}</p>
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${p.bg} ${p.color}`}>
                      ⚠ {p.stat}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA nudge */}
        <div className="mt-14 text-center">
          <p className="text-slate-600 text-sm mb-4">
            Don't let your business become another statistic.
          </p>
          <a href="#solutions" className="btn-gold">
            See Our Solutions →
          </a>
        </div>
      </div>
    </section>
  )
}
