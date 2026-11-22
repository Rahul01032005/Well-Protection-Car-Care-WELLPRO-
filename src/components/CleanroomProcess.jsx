import React, { useState } from 'react';
import { Shield, Sparkles, CheckCircle, Flame, Eye, Award } from 'lucide-react';

export default function CleanroomProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "22-Point Decontamination Bath",
      icon: Sparkles,
      desc: "pH-neutral snow foam immersion followed by chemical iron fallout removal, tar dissolving, and ultra-fine clay bar exfoliation to strip all road contamination.",
      techSpec: "Grit-Guard 2-Bucket System & Deionized Reverse Osmosis Water",
      time: "3 - 4 Hours"
    },
    {
      num: "02",
      title: "Digital Micron Paint Depth Mapping",
      icon: Eye,
      desc: "Ultrasound thickness measurements taken across all steel, aluminum, and composite panels to verify safe clear-coat margins before any rotary machine touches paint.",
      techSpec: "Precision Digital Ultrasound Gauge (Accuracy to ±0.1 µm)",
      time: "1 Hour"
    },
    {
      num: "03",
      title: "Multi-Stage Optical Paint Leveling",
      icon: Sparkles,
      desc: "Jeweled micro-abrasive compounding eliminating 85% to 95% of wash swirls, buffer trails, and acid etching under 5000K high-CRI sunlight inspection arrays.",
      techSpec: "German Dual-Action Random Orbital Polishers & Microfiber Cutting Discs",
      time: "1 - 2 Days"
    },
    {
      num: "04",
      title: "Cleanroom Installation (PPF / 10H Graphene)",
      icon: Shield,
      desc: "Conducted inside our climate-controlled, positive-pressure cleanroom bay. Eliminates dust particles for microscopic bonding of self-healing TPU or Graphene.",
      techSpec: "ISO Cleanroom Bay with Micro-Air HEPA Filtration & Zero Air Turbulence",
      time: "1 - 3 Days"
    },
    {
      num: "05",
      title: "Infrared Thermal Heat Curing",
      icon: Flame,
      desc: "Shortwave infrared baking lamps accelerate molecular cross-linking between ceramic/graphene SiO2 matrix and factory clear coat for rock-solid diamond hardness.",
      techSpec: "Shortwave IR Lamps at 65°C Controlled Surface Thermal Cycle",
      time: "12 Hours"
    },
    {
      num: "06",
      title: "10-Year Warranty & Studio Handover",
      icon: Award,
      desc: "Comprehensive quality control audit, digital warranty certificate registration with chassis number tracking, and complimentary initial maintenance kit.",
      techSpec: "Official QR-Coded Studio Warranty Certificate & Hydrophobic Inspection",
      time: "Final Handover"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#060a14] relative overflow-hidden border-t border-b border-[#102d60]/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#38bdf8]" />
            <span className="font-subheading text-xs uppercase tracking-[3px] font-bold text-[#38bdf8]">
              Cleanroom Protocol
            </span>
            <span className="w-6 h-[2px] bg-[#38bdf8]" />
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            The 6-Stage Master Studio Process
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-[#38bdf8] to-[#154c8a] mx-auto mb-6" />

          <p className="text-gray-300 text-sm sm:text-base font-light">
            Every vehicle at WELLPRO undergoes an uncompromising protocol within our dust-free cleanroom bays. Click each stage to inspect our engineering precision.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {steps.map((st, i) => {
            const Icon = st.icon;
            const isSelected = activeStep === i;
            return (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#102d60] to-[#071228] border-[#38bdf8] shadow-[0_0_20px_rgba(0,180,216,0.35)] scale-105'
                    : 'bg-[#03050a]/80 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#38bdf8]' : 'text-gray-500'}`}>
                    {st.num}
                  </span>
                  <Icon size={16} className={isSelected ? 'text-[#38bdf8]' : 'text-gray-400'} />
                </div>
                <h4 className="font-heading font-bold text-xs text-white leading-tight">
                  {st.title.split(' ')[0]} {st.title.split(' ')[1] || ''}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive Display Box */}
        <div className="rounded-3xl bg-gradient-to-r from-[#030814] via-[#071228] to-[#0a1020] border border-[#00b4d8]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#38bdf8]/15 border border-[#38bdf8]/40 text-[#bae6fd] text-xs font-mono font-bold mb-4">
                STAGE {steps[activeStep].num} OF 06
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-4xl text-white mb-4">
                {steps[activeStep].title}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                {steps[activeStep].desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-3.5 rounded-xl bg-[#03050a]/70 border border-white/10">
                  <span className="text-[10px] uppercase font-subheading text-gray-400 block mb-0.5">Technology & Equipment</span>
                  <span className="text-xs font-semibold text-[#38bdf8]">{steps[activeStep].techSpec}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#03050a]/70 border border-white/10">
                  <span className="text-[10px] uppercase font-subheading text-gray-400 block mb-0.5">Studio Curing / Execution Time</span>
                  <span className="text-xs font-semibold text-white">{steps[activeStep].time}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#071228] border-2 border-[#38bdf8] shadow-[0_0_40px_rgba(0,180,216,0.4)] flex flex-col items-center justify-center text-center p-4">
                <span className="text-4xl sm:text-5xl font-heading font-black text-white">{steps[activeStep].num}</span>
                <span className="text-[10px] font-subheading uppercase tracking-widest text-[#38bdf8] font-bold mt-1">Certified Bay</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
