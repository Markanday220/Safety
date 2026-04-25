import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { Building2, ShieldCheck, Truck, Trophy, Zap, Globe, HardHat, Clock } from 'lucide-react'

const stats = [
  { 
    value: 10000, 
    suffix: '+', 
    label: 'Businesses Protected', 
    icon: Building2,
    desc: 'Trusted by leaders in construction and manufacturing.',
    grid: 'md:col-span-1 md:row-span-1'
  },
  { 
    value: 99, 
    suffix: '.8%', 
    label: 'On-Time Delivery', 
    icon: Truck,
    desc: 'Precision logistics for projects.',
    grid: 'md:col-span-1 md:row-span-1'
  },
  { 
    value: 500, 
    suffix: '+', 
    label: 'Premium Products', 
    icon: ShieldCheck,
    desc: 'Global standards compliance.',
    grid: 'md:col-span-1 md:row-span-1'
  },
  { 
    value: 15, 
    suffix: '+', 
    label: 'Years of Excellence', 
    icon: Trophy,
    desc: 'Defining industrial safety since 2011.',
    grid: 'md:col-span-1 md:row-span-1'
  },
  { 
    value: 0, 
    suffix: ' Compromises', 
    label: 'Quality Standards', 
    icon: Zap,
    desc: 'Zero tolerance for failure.',
    grid: 'md:col-span-1 md:row-span-1'
  },
  { 
    value: 4, 
    suffix: ' Nations', 
    label: 'Full UK Coverage', 
    icon: Globe,
    desc: 'Strategic distribution across the UK.',
    grid: 'md:col-span-1 md:row-span-1'
  }
]

function Counter({ value, suffix, started }) {
  const [displayValue, setDisplayValue] = useState(0)
  
  useEffect(() => {
    if (!started) return
    let start = 0
    const end = value
    const duration = 2000
    const increment = Math.max(end / (duration / 16), 0.1)
    
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setDisplayValue(end)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(start))
      }
    }, 16)
    
    return () => clearInterval(timer)
  }, [value, started])

  return (
    <span className="font-display font-bold">
      {displayValue.toLocaleString()}{suffix}
    </span>
  )
}

function StatCard({ stat, started, index }) {
  const Icon = stat.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 lg:p-8 hover:bg-white/10 transition-all duration-500 flex flex-col h-full min-h-[180px] md:min-h-0 ${stat.grid}`}
    >
      <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-brand-gold/10 rounded-full blur-3xl group-hover:bg-brand-gold/20 transition-all duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-auto">
          <div className="mb-6 inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-white/10 border border-white/10 text-brand-gold group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
          </div>
        </div>
        
        <div className="mt-4">
          <div className="text-3xl lg:text-5xl mb-1 text-white leading-none">
            <Counter value={stat.value} suffix={stat.suffix} started={started} />
          </div>
          <div className="text-sm lg:text-base font-bold text-brand-gold mb-1 tracking-tight">
            {stat.label}
          </div>
          <div className="text-[10px] lg:text-xs text-white/40 leading-relaxed max-w-[200px]">
            {stat.desc}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function StatsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section className="relative py-24 bg-[#0B1026] overflow-hidden" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1920&q=90&fit=crop"
          alt="Modern industrial construction"
          className="w-full h-full object-cover object-center opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1026] via-transparent to-[#0B1026]" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-brand-gold mb-6"
          >
            <div className="h-px w-8 bg-brand-gold" />
            <span className="text-sm font-bold tracking-[0.3em] uppercase">Enterprise Trust</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6"
          >
            A Decade of <span className="text-brand-gold italic">Uncompromising</span> Standards.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl text-white/60 leading-relaxed max-w-2xl"
          >
            Behind every statistic is a workforce made safer and a project secured. 
            We don't just supply equipment; we deliver the confidence to build the future.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} started={isInView} />
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0B1026] overflow-hidden bg-slate-800">
                  <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <div className="text-white font-bold">14,500+ Professionals</div>
              <div className="text-white/40 text-sm">Trust us for their daily safety needs</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <Clock className="w-4 h-4 text-brand-gold" />
            <span>Last audit: 12 days ago — 100% Pass</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
