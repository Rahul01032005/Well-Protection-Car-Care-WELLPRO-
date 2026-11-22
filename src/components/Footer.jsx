import React from 'react';
import { Instagram, Facebook, Youtube, MessageSquare, Shield, Sparkles, Wrench, Paintbrush } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#03050a] border-t border-[#102d60]/60 pt-20 pb-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#38bdf8] shadow-[0_0_15px_rgba(0,180,216,0.35)] flex-shrink-0 bg-white">
                <img
                  src="./assets/images/logo.jpg"
                  alt="WELLPRO Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl tracking-[2px] text-white leading-none">
                  WELL<span className="text-[#38bdf8]">PRO</span>
                </span>
                <span className="text-[10px] uppercase tracking-[2px] text-[#bae6fd] font-bold mt-1">
                  We Protect • We Care
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 font-light leading-relaxed mb-6 max-w-sm">
              An elite automotive protection studio engineering optical perfection, self-healing PPF wraps, and nano-ceramic matrix defense for Indian vehicles.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#071228] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#38bdf8] hover:border-[#38bdf8]/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#071228] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#38bdf8] hover:border-[#38bdf8]/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={businessInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#071228] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#38bdf8] hover:border-[#38bdf8]/50 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href={businessInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="WhatsApp"
              >
                <MessageSquare size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-subheading text-xs uppercase tracking-[2px] font-bold text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#home" className="hover:text-[#38bdf8] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#38bdf8] transition-colors">Services</a></li>
              <li><a href="#car-stage" className="hover:text-[#38bdf8] transition-colors">Indian Cars</a></li>
              <li><a href="#pillars" className="hover:text-[#38bdf8] transition-colors">4 Pillars</a></li>
              <li><a href="#estimator" className="hover:text-[#38bdf8] transition-colors">Estimator</a></li>
              <li><a href="#gallery" className="hover:text-[#38bdf8] transition-colors">Our Work</a></li>
              <li><a href="#contact" className="hover:text-[#38bdf8] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* 4 Pillars of WELLPRO */}
          <div className="lg:col-span-2">
            <h4 className="font-subheading text-xs uppercase tracking-[2px] font-bold text-white mb-5">
              Brand Pillars
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-center gap-2"><span className="text-[#38bdf8]">🛡️</span> PROTECT</li>
              <li className="flex items-center gap-2"><span className="text-[#38bdf8]">✨</span> DETAIL</li>
              <li className="flex items-center gap-2"><span className="text-[#38bdf8]">🔧</span> MAINTAIN</li>
              <li className="flex items-center gap-2"><span className="text-[#38bdf8]">🎨</span> REPAIR</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 text-xs leading-relaxed">
            <h4 className="font-subheading text-xs uppercase tracking-[2px] font-bold text-white mb-5">
              Studio Location
            </h4>
            <p className="text-gray-300 mb-3">
              {businessInfo.contact.address.full}
            </p>
            <p className="text-gray-300 mb-1">
              <strong>Phone:</strong> {businessInfo.contact.phone}
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Email:</strong> {businessInfo.contact.email}
            </p>
            <span className="inline-block px-3 py-1 rounded bg-[#071228] border border-[#00b4d8]/30 text-[#bae6fd] text-[11px]">
              Studio Hours: 9 AM - 7:30 PM
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {currentYear} WELLPRO (Well Protection Car Care). All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#warranty" className="hover:text-gray-400 transition-colors">Warranty Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
