import React from 'react'
import { ArrowRight } from 'lucide-react'

const industries = [
  {
    name: 'Construction',
    desc: 'From groundwork to rooftop — every hazard covered.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&fit=crop',
    color: 'from-brand-dark/70',
  },
  {
    name: 'Oil & Gas',
    desc: 'Explosion-proof gear for the highest-risk environments.',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80&fit=crop',
    color: 'from-brand-dark/70',
  },
  {
    name: 'Manufacturing',
    desc: 'Line-ready PPE for fast-paced production floors.',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80&fit=crop',
    color: 'from-brand-dark/70',
  },
  {
    name: 'Pharmaceuticals',
    desc: 'Sterile, ISO-compliant protective equipment.',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=600&q=80&fit=crop',
    color: 'from-brand-dark/70',
  },
  {
    name: 'Logistics',
    desc: 'Warehouse-tested gear for high-volume movement.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80&fit=crop',
    color: 'from-brand-dark/70',
  },
  {
    name: 'Mining',
    desc: 'Deep-earth certified protection systems.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop',
    color: 'from-brand-dark/70',
  },
]

export default function Industries() {
  return (
    <section className="relative py-24 overflow-hidden bg-white" id="industries">
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-tag mb-4 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            Industries We Serve
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-5">
            Built for Your{' '}
            <span className="gradient-text-gold">Industry</span>
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            We don't sell generic safety kits. Every solution is curated for your sector's specific regulatory requirements and hazard profiles.
          </p>
        </div>

        {/* Industry cards — image-first grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl cursor-pointer"
              style={{ aspectRatio: i === 0 || i === 5 ? '1/1.1' : '1/0.9' }}
            >
              {/* Image */}
              <img
                src={ind.image}
                alt={ind.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${ind.color} via-brand-dark/25 to-transparent group-hover:opacity-90 transition-opacity duration-300`} />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display font-bold text-xl text-white mb-1">{ind.name}</h3>
                <p className="text-sm text-white/85 leading-relaxed mb-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {ind.desc}
                </p>
                <button className="flex items-center gap-1.5 text-xs font-semibold text-brand-gold opacity-0 group-hover:opacity-100 transition-all duration-300">
                  View Solutions <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
