import React from 'react';
import { Shield, Sparkles, Activity, Award } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Shield,
      title: "Aerospace Chemistries",
      desc: "Imported optical grade TPU films and 9H+ certified silica quartz nano formulations."
    },
    {
      icon: Sparkles,
      title: "Master Hand Craft",
      desc: "Seamless edge-wrapped installations without disassembly risks or blade contact."
    },
    {
      icon: Activity,
      title: "Microscopic Precision",
      desc: "Digital paint thickness mapping prior to any rotary or dual-action machine polishing."
    },
    {
      icon: Award,
      title: "Official Warranties",
      desc: "Written warranty certifications and dedicated bi-annual inspection programs."
    }
  ];

  return (
    <section id="about" className="py-28 bg-obsidian-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-gold-500" />
              <span className="font-subheading text-xs uppercase tracking-[3px] font-bold text-gold-400">
                Excellence In Every Micron
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              The Art & Science of Superior Vehicle Protection
            </h2>

            <div className="w-16 h-[3px] bg-gold-gradient mb-8" />

            <p className="text-gray-300 text-base leading-relaxed mb-6 font-light">
              Founded with an uncompromising passion for automotive aesthetics, <strong className="text-white font-semibold">Well Protection Car Care</strong> is an elite vehicle protection studio dedicated to preserving the value, finish, and road presence of high-end automobiles.
            </p>

            <p className="text-gray-300 text-base leading-relaxed mb-8 font-light">
              Our facility operates under hospital-grade cleanroom standards, housing dedicated climate-controlled, dust-free installation bays. Every vehicle entrusted to us undergoes rigorous paint depth digital gauge analysis, decontamination baths, and master-level hand craftsmanship.
            </p>

            {/* Quote Box */}
            <div className="p-6 rounded-r-lg bg-gradient-to-r from-gold-500/15 to-transparent border-l-4 border-gold-500 mb-10">
              <p className="italic text-gold-100 text-base font-normal">
                "We do not merely detail vehicles; we sculpt lasting preservation so that every curve reflects true automotive grandeur."
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, i) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="font-subheading font-semibold text-sm text-white mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Studio Visuals */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
                alt="Well Protection Car Care Bay"
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80" />
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:left-6 bg-obsidian-850/95 backdrop-blur-md border border-gold-500/40 rounded-xl p-6 shadow-2xl flex items-center gap-5 max-w-xs">
              <span className="font-heading font-bold text-4xl text-gold-400 leading-none">
                10+
              </span>
              <div className="flex flex-col">
                <span className="font-subheading font-bold text-xs uppercase tracking-wider text-white">
                  Years of Mastery
                </span>
                <span className="text-[11px] text-gray-400 leading-tight mt-0.5">
                  High-End Vehicle Preservation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

