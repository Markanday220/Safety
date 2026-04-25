import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, ShieldCheck, Phone, Mail, User } from 'lucide-react'

const EnquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
        >
          {/* Header */}
          <div className="relative bg-brand-dark p-6 text-white overflow-hidden" style={{ background: '#0B1026' }}>
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full -mr-10 -mt-10 blur-2xl" />
             
             <button 
               onClick={onClose}
               className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
             >
               <X className="w-5 h-5 text-white" />
             </button>

             <div className="flex items-center gap-3 mb-2">
               <div className="p-2 rounded-lg bg-brand-gold/20">
                 <ShieldCheck className="w-6 h-6 text-brand-gold" style={{ color: '#D10F1A' }} />
               </div>
               <h2 className="text-2xl font-bold">Enquire Now</h2>
             </div>
             <p className="text-slate-400 text-sm">Fill out the form below and our safety experts will contact you shortly.</p>
          </div>

          {/* Form Body */}
          <form className="p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                 <div className="relative">
                   <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                   <input 
                     type="text" 
                     placeholder="John Doe"
                     className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all outline-none text-slate-700"
                   />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                 <div className="relative">
                   <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                   <input 
                     type="tel" 
                     placeholder="+44 000 0000"
                     className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all outline-none text-slate-700"
                   />
                 </div>
               </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all outline-none text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Requirement details</label>
              <textarea 
                rows="4"
                placeholder="Tell us about your safety equipment needs..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all outline-none text-slate-700 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 rounded-xl bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-lg shadow-lg shadow-brand-gold/20 transition-all flex items-center justify-center gap-2 group"
              style={{ background: '#D10F1A' }}
            >
              Send Enquiry
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest">
              Trusted by 5,000+ UK Companies
            </p>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default EnquiryModal
