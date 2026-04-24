import React from 'react'
import { HardHat, HandMetal, Eye, Zap, Wind, ShieldCheck, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: HardHat,
    title: 'Head Protection',
    benefit: 'Absorb impact before it reaches your most vital asset.',
    detail: 'ISI-marked helmets, bump caps, and hard hats for every hazard zone.',
    color: 'text-brand-gold',
    bg: '',
  },
  {
    icon: HandMetal,
    title: 'Hand & Arm Safety',
    benefit: 'Keep hands protected from cuts, chemicals, and heat.',
    detail: 'Industrial gloves, cut-resistant sleeves, and chemical-resistant PPE.',
    color: 'text-brand-dark',
    bg: '',
  },
  {
    icon: Eye,
    title: 'Eye & Face Protection',
    benefit: 'Zero compromises where vision is mission-critical.',
    detail: 'Safety goggles, face shields, and welding helmets with anti-fog coating.',
    color: 'text-brand-dark',
    bg: '',
  },
  {
    icon: Wind,
    title: 'Respiratory Protection',
    benefit: 'Breathe clean in the most hazardous environments.',
    detail: 'N95, FFP2/FFP3 respirators, gas masks, and PAPR systems.',
    color: 'text-brand-dark',
    bg: '',
  },
  {
    icon: Zap,
    title: 'Fall Protection Systems',
    benefit: 'Prevent the most fatal type of workplace accident.',
    detail: 'Full-body harnesses, lanyards, self-retracting lifelines, and anchors.',
    color: 'text-brand-dark',
    bg: '',
  },
  {
    icon: ShieldCheck,
    title: 'Full PPE Compliance Kits',
    benefit: 'Stay 100% audit-ready with site-specific bundles.',
    detail: 'Custom compliance kits tailored to construction, oil & gas, pharma, and more.',
    color: 'text-brand-gold',
    bg: '',
  },
]

export default function Solutions() {
  return (
    <section className="relative py-24 overflow-hidden bg-white" id="solutions">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="section-tag mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            Our Solutions
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-5 leading-tight">
            Protection for Every{' '}
            <span className="gradient-text-gold">Hazard Zone</span>
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            Whether you run a construction site, chemical plant, or logistics warehouse —
            we have certified solutions built for your specific risks.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((sol, i) => {
            const Icon = sol.icon
            return (
              <a
                key={i}
                href="https://www.safetyplus.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="group no-underline"
              >
                <div className={`glass-card gradient-border p-7 group-hover:-translate-y-2 transition-all duration-300 bg-white hover:-translate-y-2`}>
                  <div className="mb-5">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 ${sol.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-brand-dark mb-2">{sol.title}</h3>
                    <p className={`text-sm font-semibold ${sol.color} mb-3`}>{sol.benefit}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{sol.detail}</p>
                  </div>
                  <div className={`flex items-center gap-2 text-sm font-medium ${sol.color} hover:gap-3 transition-all duration-200`}>
                    Explore Range <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
