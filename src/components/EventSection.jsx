import React from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const EventSection = () => {
  return (
    <section className="relative w-full max-w-5xl mx-auto mt-20 mb-12 overflow-hidden rounded-xl shadow-xl bg-black border border-yellow-500/20 group">
      {/* Background with texture */}
      <div 
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/safety_bg.png')" }}
      />

      {/* Decorative Caution Stripes */}
      <div className="absolute top-0 left-0 w-full h-4 bg-yellow-400 overflow-hidden flex items-center z-10">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-12 h-8 bg-black -rotate-45 mr-6 transform translate-y-2 shrink-0" />
        ))}
      </div>

      <div className="relative z-20 p-4 pt-12 md:p-6 md:pt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Top Content */}
        <div className="flex flex-col gap-3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-24 md:h-32 rounded-lg overflow-hidden border border-yellow-500/30"
          >
            <img src="/helmets.png" alt="Safety Helmets" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-yellow-400 p-3 md:p-4 rounded shadow-md"
          >
            <h2 className="text-black font-black text-2xl md:text-3xl leading-none">
              REGISTRATIONS OPEN NOW!
            </h2>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2 mt-1">
            <StatItem number="400+" label="SUPPLIERS" />
            <StatItem number="14,500+" label="VISITORS" />
          </div>

          {/* Stand Info */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-2 text-yellow-400 font-bold flex items-center gap-2"
          >
            <div className="w-6 h-px bg-yellow-400/50" />
            <span className="uppercase tracking-[0.2em] text-xs md:text-sm">Visit Us at Stand 2B90</span>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between">
          <div className="text-right text-white">
             <div className="inline-block text-left">
                <span className="block text-sm font-light tracking-widest text-yellow-400">THE</span>
                <h1 className="text-4xl md:text-5xl font-black leading-none tracking-tighter">
                  HEALTH & SAFETY
                </h1>
                <p className="text-lg font-bold tracking-[0.2em] mt-0.5">EVENT</p>
             </div>
             <p className="mt-2 text-sm font-bold border-l-2 border-yellow-400 pl-3 inline-block">
                28-30 APRIL 2026 | <span className="text-yellow-400 uppercase">NEC Birmingham</span>
             </p>
          </div>

          {/* Hexagon Image Container */}
          <div className="relative mt-4 flex justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              className="relative w-32 h-40 md:w-48 md:h-56"
            >
              <div 
                className="absolute inset-0 bg-yellow-400"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              />
              <div 
                className="absolute inset-[3px] bg-black overflow-hidden"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <img src="/exhibition.png" alt="Exhibition" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker/CTA */}
      <motion.a
        href="https://eventdata.uk/Forms/Form.aspx?FormRef=HSE46Visitor&FormMode=VIS&TrackingCode=Popup&hsCtaAttrib=200836762481"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="block w-full bg-yellow-400 hover:bg-yellow-300 py-3 md:py-4 text-black font-black text-lg md:text-xl uppercase tracking-wider transition-colors z-30 relative text-center"
      >
        Click here to register for your free pass
      </motion.a>

      {/* Bottom Decorative Stripes */}
      <div className="relative h-4 bg-black overflow-hidden flex items-center">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-12 h-8 bg-yellow-400 -rotate-45 mr-6 transform translate-y-2 shrink-0 opacity-30" />
        ))}
      </div>
    </section>
  )
}

const StatItem = ({ number, label }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="border-l-4 border-yellow-400 pl-4 py-1"
  >
    <div className="text-yellow-400 text-3xl font-black">{number}</div>
    <div className="text-white text-sm font-bold tracking-wider leading-tight">{label}</div>
  </motion.div>
)

export default EventSection
