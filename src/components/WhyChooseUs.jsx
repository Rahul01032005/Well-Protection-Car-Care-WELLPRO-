import React from 'react';
import { Award, Wind, ShieldCheck, Activity, FileText, Truck } from 'lucide-react';
import { whyUsData } from '../data/whyUs';

const iconMap = {
  Award,
  Wind,
  ShieldCheck,
  Activity,
  FileText,
  Truck
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-28 bg-obsidian-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-gold-500" />
            <span className="font-subheading text-xs uppercase tracking-[3px] font-bold text-gold-400">
              The Wellpro Distinction
            </span>
            <span className="w-5 h-[2px] bg-gold-500" />
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            Why Discerning Owners Choose Us
          </h2>

          <div className="w-16 h-[3px] bg-gold-gradient mx-auto mb-6" />

          <p className="text-gray-400 text-sm sm:text-base font-light">
            We combine cutting-edge materials science, cleanroom installation environments, and unwavering devotion to detail.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUsData.map((item) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group p-8 rounded-2xl bg-obsidian-850 border border-white/10 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-dark relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-all duration-300 mb-6">
                  <IconComponent size={26} />
                </div>

                <h3 className="font-heading font-bold text-lg text-white group-hover:text-gold-200 transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

