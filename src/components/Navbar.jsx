import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Indian Cars', href: '#car-stage' },
    { name: '4 Pillars', href: '#pillars' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Our Work', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#03050a]/95 backdrop-blur-md border-b border-[#102d60]/60 shadow-2xl py-3'
          : 'bg-[#03050a]/70 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        
        {/* Official Brand Logo with only WELLPRO as requested */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group cursor-pointer flex-shrink-0"
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#38bdf8] shadow-[0_0_15px_rgba(0,180,216,0.35)] group-hover:border-[#7dd3fc] transition-all duration-300 flex-shrink-0 bg-white">
            <img
              src="./assets/images/logo.jpg"
              alt="WELLPRO Logo"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span className="font-heading font-black text-2xl sm:text-[26px] tracking-[2px] text-white leading-none">
            WELL<span className="text-[#38bdf8]">PRO</span>
          </span>
        </a>

        {/* Desktop Navigation Links - Perfectly Centered & Aligned */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs uppercase font-subheading font-semibold tracking-[1.3px] text-gray-300 hover:text-[#38bdf8] transition-colors relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#38bdf8] after:to-[#154c8a] after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Elements - All vertically aligned to h-10 */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
          <a
            href={`tel:${businessInfo.contact.phoneRaw}`}
            className="hidden xl:inline-flex items-center gap-2 h-10 text-xs font-semibold text-[#bae6fd] bg-[#071228]/90 hover:bg-[#0c1f42] border border-[#00b4d8]/40 px-3.5 rounded-lg transition-colors shadow-sm"
          >
            <Phone size={14} className="text-[#38bdf8]" />
            <span>{businessInfo.contact.phone}</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center justify-center gap-2 h-10 bg-gradient-to-r from-[#38bdf8] via-[#154c8a] to-[#0c1f42] hover:from-[#7dd3fc] text-white font-subheading font-bold text-xs uppercase tracking-[1.3px] px-4 sm:px-5 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] hover:-translate-y-0.5 transition-all"
          >
            <Calendar size={14} />
            <span>Book Consultation</span>
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden h-10 w-10 inline-flex items-center justify-center text-gray-300 hover:text-[#38bdf8] border border-white/10 rounded-lg bg-[#071228]/80 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/90 backdrop-blur-md z-40 p-6 flex flex-col justify-between"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#38bdf8] bg-white flex-shrink-0">
                  <img
                    src="./assets/images/logo.jpg"
                    alt="WELLPRO Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-heading font-black text-2xl tracking-[2px] text-white">
                  WELL<span className="text-[#38bdf8]">PRO</span>
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="h-10 w-10 inline-flex items-center justify-center text-gray-400 hover:text-white border border-white/10 rounded-lg"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm uppercase font-subheading font-medium tracking-[1.5px] text-gray-200 hover:text-[#38bdf8] py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
            <a
              href={`tel:${businessInfo.contact.phoneRaw}`}
              className="flex items-center justify-center gap-2 text-xs font-semibold text-[#bae6fd] bg-[#071228] border border-[#00b4d8]/40 py-3 rounded-lg"
            >
              <Phone size={14} className="text-[#38bdf8]" />
              <span>{businessInfo.contact.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-gradient-to-r from-[#38bdf8] via-[#154c8a] to-[#0c1f42] text-white font-subheading font-bold text-xs uppercase tracking-[1.5px] py-3.5 rounded-lg shadow-lg"
            >
              Book Private Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
