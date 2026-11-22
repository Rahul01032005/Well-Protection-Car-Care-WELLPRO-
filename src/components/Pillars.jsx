import React from 'react';
import { Shield, Sparkles, Wrench, Paintbrush, ArrowUpRight } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function Pillars({ onOpenBooking }) {
  const iconMap = {
    Shield: Shield,
    Sparkles: Sparkles,
    Wrench: Wrench,
    SprayCan: Paintbrush
  };

  return (
    <section id="pillars" className="py-20 sm:py-28 bg-obsidian-900 border-y border-navy-800/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Brand Core Header with Motto */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-ice-400" />
            <span className="font-subheading text-xs uppercase tracking-[3px] font-bold text-ice-400">
              Official Brand Foundation
            </span>
            <span className="w-5 h-[2px] bg-ice-400" />
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-3">
            We Protect • We Care
          </h2>

          <p className="text-ice-300 font-subheading text-sm uppercase tracking-[2px] font-semibold mb-5">
            The Four Pillars of Well Protection Car Care
          </p>

          <div className="w-16 h-[3px] bg-gradient-to-r from-ice-400 to-navy-500 mx-auto mb-6" />

          <p className="text-gray-300 text-sm sm:text-base font-light">
            Engineered around our registered seal of quality, every vehicle is safeguarded through our comprehensive lifecycle workflow.
          </p>
        </div>

        {/* 4 Pillars Grid matching the Logo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessInfo.pillars.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || Shield;
            return (
              <div
                key={pillar.id}
                className="group p-7 rounded-3xl bg-gradient-to-b from-navy-950/80 to-obsidian-950 border border-navy-600/30 hover:border-ice-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-md relative flex flex-col justify-between"
              >
                <div>
                  {/* Emblem Icon Circle */}
                  <div className="w-14 h-14 rounded-2xl bg-navy-800/80 border border-ice-400/40 flex items-center justify-center text-ice-300 group-hover:bg-ice-500 group-hover:text-obsidian-950 transition-all duration-300 mb-6 shadow-md">
                    <IconComponent size={26} />
                  </div>

                  {/* Title & Tagline */}
                  <span className="text-[10px] uppercase font-subheading font-bold tracking-[2px] text-ice-400 block mb-1">
                    Pillar
                  </span>
                  <h3 className="font-heading font-black text-2xl text-white group-hover:text-ice-200 transition-colors mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-semibold text-ice-200/90 mb-3 leading-snug">
                    {pillar.tagline}
                  </p>

                  <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <button
                  onClick={() => onOpenBooking(`Pillar: ${pillar.title}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-subheading uppercase font-bold tracking-wider text-ice-300 hover:text-white pt-4 border-t border-white/5 transition-colors"
                >
                  <span>Explore Inclusions</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
