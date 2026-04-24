import React, { useState } from 'react'
import { ChevronDown, HelpCircle, Phone, X } from 'lucide-react'

const faqs = [
  {
    q: 'Are all your products genuine and certified?',
    a: 'Absolutely. Every product we sell comes with original manufacturer certification and full compliance documentation. We source directly from ISO-certified manufacturers and conduct independent quality checks before dispatch.',
  },
  {
    q: 'How fast can I receive bulk orders?',
    a: 'For standard bulk orders (up to 200 units), we typically dispatch within 24 hours and deliver within 2–3 business days across India. For enterprise orders above 200 units, a dedicated account manager will coordinate a custom delivery timeline.',
  },
  {
    q: 'Do you offer customisation (logos, branding)?',
    a: "Yes! We offer custom branding on helmets, vests, gloves, and bulk PPE kits. Minimum order quantity applies. Contact our enterprise team for samples and pricing.",
  },
  {
    q: 'What happens if a product is defective?',
    a: 'We offer a 30-day no-questions-asked return policy for all products. For manufacturing defects, we provide free replacement and cover return shipping. Simply contact support@safetyplus.in with photos.',
  },
  {
    q: 'Can you help with site-specific compliance audits?',
    a: "Yes! Our certified safety consultants offer on-site compliance assessment services. We'll identify gaps, recommend the right equipment, and help you build an audit-ready safety program.",
  },
  {
    q: 'Do you provide safety training alongside equipment?',
    a: 'We partner with certified trainers to offer toolbox talks, PPE usage training, and safety officer certification programs. Ask our team for our training calendar.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major payment methods including UPI, net banking, debit/credit cards, and corporate purchase orders. For bulk orders, we also offer 30-day credit terms for verified businesses.',
  },
]

function FAQItem({ item, open, toggle }) {
  return (
    <div className={`glass-card border transition-all duration-300 ${open ? 'border-brand-gold/30' : 'border-slate-200 hover:border-slate-300'}`}>
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={open}
      >
        <span className={`font-semibold text-base transition-colors duration-200 ${open ? 'text-brand-gold' : 'text-brand-dark'}`}>
          {item.q}
        </span>
        <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${open ? 'rotate-180 text-brand-gold' : 'text-slate-500'}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4">
          {item.a}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)
  const [showCallForm, setShowCallForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleCallRequestSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative py-24 overflow-hidden bg-white" id="faq">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white" />
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
      </div>

      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none z-0" />
      <div className="absolute -top-16 right-0 w-[420px] h-[420px] radial-glow-gold opacity-15 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] radial-glow-blue opacity-10 pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-tag mb-4 justify-center">
            <HelpCircle className="w-3.5 h-3.5" />
            FAQs
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-dark mb-4">
            Got Questions?{' '}
            <span className="gradient-text-gold">We've Got Answers</span>
          </h2>
          <p className="text-slate-700 text-lg">
            Everything you need to know before placing your order.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              open={openIdx === i}
              toggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center glass-card p-8">
          <p className="text-slate-600 text-sm mb-3">Still have questions?</p>
          <h3 className="text-xl font-display font-bold text-brand-dark mb-5">
            Our safety experts are available 24/7
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={() => {
                setShowCallForm(true)
                setSubmitted(false)
              }}
              className="btn-gold px-6 py-3"
            >
              📞 Call Us Now
            </button>
            <a href="mailto:support@safetyplus.in" className="btn-ghost px-6 py-3">
              ✉ Email Support
            </a>
          </div>
        </div>
      </div>

      {showCallForm && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center px-4">
          <button
            type="button"
            aria-label="Close call request form"
            className="absolute inset-0 bg-slate-950/35 backdrop-blur-sm"
            onClick={() => setShowCallForm(false)}
          />
          <div className="relative w-full max-w-lg rounded-[2rem] bg-white border border-slate-200 shadow-[0_30px_90px_rgba(15,23,42,0.18)] p-6 md:p-8">
            <button
              type="button"
              onClick={() => setShowCallForm(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-dark hover:bg-slate-50 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 text-brand-gold px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-4">
                <Phone className="w-3.5 h-3.5" />
                Request A Call
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-dark mb-2">
                Talk to a Safety Expert
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Share your details and our team will call you back shortly.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold/10 px-5 py-6 text-center">
                <div className="text-lg font-display font-bold text-brand-dark mb-2">
                  Call request received
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Our team will contact you soon to help with products, pricing, or compliance support.
                </p>
                <button
                  type="button"
                  onClick={() => setShowCallForm(false)}
                  className="btn-gold px-6 py-3"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleCallRequestSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2" htmlFor="call-name">
                    Full Name
                  </label>
                  <input
                    id="call-name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-brand-dark outline-none focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/15"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2" htmlFor="call-phone">
                    Phone Number
                  </label>
                  <input
                    id="call-phone"
                    type="tel"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-brand-dark outline-none focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/15"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2" htmlFor="call-company">
                    Company Name
                  </label>
                  <input
                    id="call-company"
                    type="text"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-brand-dark outline-none focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/15"
                    placeholder="Company or site name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2" htmlFor="call-message">
                    What do you need help with?
                  </label>
                  <textarea
                    id="call-message"
                    rows="4"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-brand-dark outline-none focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/15 resize-none"
                    placeholder="Tell us about your requirement"
                  />
                </div>
                <button type="submit" className="btn-gold w-full justify-center px-6 py-3">
                  Request Callback
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
