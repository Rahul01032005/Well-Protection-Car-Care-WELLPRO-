import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, MessageSquare, Shield, Sparkles, CheckCircle2, RotateCw } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import ThreeScene from './ThreeScene';
import ParticleCanvas from './ParticleCanvas';

export default function Hero({ onOpenBooking }) {
  const [counts, setCounts] = useState({ cars: 0, warranty: 0, cleanroom: 0, score: 0 });

  useEffect(() => {
    let startTime;
    const duration = 2000;

    const animateCounters = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts({
        cars: Math.floor(easeProgress * 500),
        warranty: Math.floor(easeProgress * 10),
        cleanroom: Math.floor(easeProgress * 100),
        score: +(easeProgress * 99.8).toFixed(1),
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    requestAnimationFrame(animateCounters);
  }, []);

  const whatsappUrl = `https://wa.me/${businessInfo.contact.whatsappRaw}?text=${encodeURIComponent(
    'Hello Well Protection Car Care (WELLPRO), I would like to inquire about vehicle protection packages for my vehicle.'
  )}`;

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-16 sm:pt-24 pb-16 overflow-hidden bg-[#03050a]">
      {/* 1. Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Vehicle Detailing Studio Bay"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03050a] via-[#03050a]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03050a] via-[#071228]/85 to-transparent" />
      </div>

      {/* 2. 2D Molecular Particles & Velocity Streams Canvas */}
      <ParticleCanvas />

      {/* 3. Three.js 3D Interactive Turntable Supercar with 360° Drag & Laser Scan */}
      <ThreeScene />

      {/* 4. Hero Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 w-full pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          
          {/* Badges */}
          <div className="flex items-center gap-3 flex-wrap mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#00b4d8]/15 border border-[#00b4d8]/40 backdrop-blur-md shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] animate-ping" />
              <span className="font-subheading text-[11px] sm:text-xs uppercase tracking-[2px] font-bold text-[#bae6fd]">
                WE PROTECT • WE CARE — WELLPRO OFFICIAL
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071228]/80 border border-[#38bdf8]/40 text-[11px] font-mono text-[#7dd3fc] backdrop-blur-md">
              <RotateCw size={12} className="animate-spin text-[#38bdf8]" />
              <span>3D Turntable: Drag to inspect 360°</span>
            </div>
          </div>

          {/* Impactful Headline */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-2xl">
            Preserving Perfection.<br />
            <span className="bg-gradient-to-r from-[#e0f2fe] via-[#38bdf8] to-[#154c8a] bg-clip-text text-transparent">
              Elevating Luxury.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-8 sm:mb-10 max-w-2xl drop-shadow-md">
            Welcome to <strong className="text-white font-semibold">WELLPRO</strong>. We engineer optical perfection and impenetrable surface armor for Indian roads. Specializing in 10H Graphene Coating, 9H Ceramic Shield, Self-Healing PPF, Interior Sanitization, Engine Beautification, and Rodent Defense for <strong>Hyundai, Maruti Suzuki, Mahindra, Tata & Toyota</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4 mb-12 sm:mb-16">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#38bdf8] via-[#154c8a] to-[#0c1f42] hover:from-[#7dd3fc] text-white font-subheading font-bold text-xs sm:text-sm uppercase tracking-[1.5px] px-8 py-4 rounded-xl shadow-xl hover:shadow-[0_0_30px_rgba(0,180,216,0.5)] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Calendar size={16} />
              <span>Book Bay Consultation</span>
            </button>

            <a
              href="#car-stage"
              className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white font-subheading font-semibold text-xs sm:text-sm uppercase tracking-[1.5px] px-7 py-4 rounded-xl border border-white/20 hover:border-[#38bdf8]/60 backdrop-blur-md hover:-translate-y-0.5 transition-all"
            >
              <span>Explore Indian Cars</span>
              <ArrowRight size={16} className="text-[#38bdf8]" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-subheading font-bold text-xs sm:text-sm uppercase tracking-[1.5px] px-7 py-4 rounded-xl shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 transition-all"
            >
              <MessageSquare size={16} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        {/* Live Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-7 rounded-2xl bg-[#071228]/85 backdrop-blur-xl border border-[#00b4d8]/30 shadow-2xl relative overflow-hidden pointer-events-auto">
          <div className="flex flex-col">
            <span className="font-heading font-black text-2xl sm:text-4xl text-white">
              {counts.cars}+
            </span>
            <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-gray-300 mt-1">
              Indian Vehicles Protected
            </span>
          </div>

          <div className="flex flex-col border-l border-white/10 pl-4 sm:pl-6">
            <span className="font-heading font-black text-2xl sm:text-4xl text-[#38bdf8]">
              {counts.warranty}-Yr
            </span>
            <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-gray-300 mt-1">
              Written Studio Warranty
            </span>
          </div>

          <div className="flex flex-col border-l border-white/10 pl-4 sm:pl-6">
            <span className="font-heading font-black text-2xl sm:text-4xl text-white">
              {counts.cleanroom}%
            </span>
            <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-gray-300 mt-1">
              Cleanroom Dust-Free Bays
            </span>
          </div>

          <div className="flex flex-col border-l border-white/10 pl-4 sm:pl-6">
            <span className="font-heading font-black text-2xl sm:text-4xl text-[#38bdf8]">
              {counts.score}%
            </span>
            <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-gray-300 mt-1">
              5-Star Client Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
