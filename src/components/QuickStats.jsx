import React from 'react'
import { motion } from 'framer-motion'

export default function QuickStats() {
  return (
    <div className="bg-slate-50 py-12 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '10K+', label: 'Happy Businesses' },
            { value: '500+', label: 'Safety Products' },
            { value: '99.8%', label: 'Certification Rate' },
            { value: '24/7', label: 'Expert Support' },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text-gold mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
