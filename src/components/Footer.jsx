import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react'

const footerLinks = {
  Products: ['Safety Helmets', 'Gloves & Hand Protection', 'Respiratory PPE', 'Fall Protection', 'Eye & Face Protection', 'Full PPE Kits'],
  Solutions: ['Construction Sites', 'Oil & Gas', 'Pharmaceuticals', 'Logistics & Warehousing', 'Mining', 'Manufacturing'],
  Company: ['About Us', 'Certifications', 'Blog & Resources', 'Careers', 'Press Kit', 'Partners'],
  Support: ['Order Tracking', 'Returns & Refunds', 'Bulk Orders', 'Safety Consultation', 'Compliance Audits', 'Contact Us'],
}

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 pt-20 pb-8" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top section */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <img
                src="/safetyplus-logo.png"
                alt="Safety Plus"
                className="h-9 w-auto object-contain"
                draggable="false"
              />
            </a>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              UK's most trusted premium safety equipment provider. Protecting workforces since 2009.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-brand-gold mb-5">{category}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-600 hover:text-brand-dark transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="glass-card p-6 mb-10">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-brand-gold" />
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-0.5">Call Us</div>
                <div className="text-sm font-semibold text-brand-dark">Phone : 0121 555 8446</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                <Mail className="w-4 h-4 text-brand-dark" />
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-0.5">Email Us</div>
                <div className="text-sm font-semibold text-brand-dark">support@safetyplus.in</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-brand-dark" />
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-0.5">Head Office</div>
                <div className="text-sm font-semibold text-brand-dark">Unit 82B, Rolfe Street, Smethwick, Birmingham, B66 2AX</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SafetyPlus India Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 border border-white/30 bg-white/15 shadow-sm hover:shadow-md hover:bg-white/20 transition-all duration-300 ml-4">
              <a
                href="https://fabulousmedia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="FabulousMedia"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
                  alt="FabulousMedia"
                  className="h-3 w-auto"
                  loading="lazy"
                  width="80"
                  height="12"
                />
              </a>
              <div className="h-3 w-px bg-white/30 transition-colors duration-300"></div>
              <a
                href="https://gocommercially.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="GoCommercially"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
                  alt="GoCommercially"
                  className="h-3 w-auto"
                  loading="lazy"
                  width="80"
                  height="12"
                />
              </a>
            </div>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
                <a key={link} href="#" className="text-xs text-slate-500 hover:text-brand-dark transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
