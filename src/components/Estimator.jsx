import React, { useState } from 'react';
import { Car, ShieldCheck, Sparkles, Calendar, MessageSquare, CheckCircle2 } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function Estimator({ onOpenBooking }) {
  const [selectedVehicle, setSelectedVehicle] = useState('mid-suv');
  const [selectedPackage, setSelectedPackage] = useState('graphene-10h');

  const vehicleOptions = [
    {
      key: 'hatch-compact',
      label: 'Hatchback & Compact',
      examples: 'Swift, i20, Altroz, Nexon, Brezza, Punch',
      priceMultiplier: 1.0
    },
    {
      key: 'mid-suv',
      label: 'Mid SUV & Executive Sedan',
      examples: 'Creta, Seltos, Thar, XUV700, Verna, City, Scorpio-N',
      priceMultiplier: 1.25
    },
    {
      key: 'full-suv',
      label: 'Full SUV & Flagship Luxury',
      examples: 'Fortuner, Safari, Hycross, Defender, Mercedes, BMW',
      priceMultiplier: 1.55
    },
  ];

  const packageOptions = [
    {
      key: 'graphene-10h',
      name: '10H Graphene Coating',
      basePrice: 19999,
      scope: 'Full Exterior Paintwork, Trims, Headlights & Wheels',
      filmTech: 'Reduced Graphene Oxide (RGO) 10H Matrix',
      warranty: '5 - 7 Years Warranty',
      turnaround: '2 - 3 Days Studio Bay',
      extras: 'Includes Engine Beautification + Glass Rain Repellent'
    },
    {
      key: 'ceramic-9h',
      name: '9H Ceramic Coating',
      basePrice: 14999,
      scope: 'Multi-Stage Paint Correction + 2 Layers 9H Quartz',
      filmTech: 'SiO2 Ceramic Nano-Matrix (9H Hardness)',
      warranty: '3 - 5 Years Warranty',
      turnaround: '2 Days Studio Bay',
      extras: 'Candy Mirror Gloss + Hydrophobic Top Coat'
    },
    {
      key: 'ppf-full',
      name: 'Full Body TPU Self-Healing PPF',
      basePrice: 65000,
      scope: '100% Painted Panels + Bumpers + Headlights & Mirrors',
      filmTech: '200-Micron Hydrophobic Optical TPU',
      warranty: '10-Year Comprehensive Warranty',
      turnaround: '4 - 5 Days Studio Bay',
      extras: 'Edge-Wrapped Precision Templates + Ceramic Top Coat'
    },
    {
      key: 'interior-sanitization',
      name: 'Interior Sanitization & Deep Spa',
      basePrice: 5999,
      scope: 'Cabin Steam Sterilization + AC Flush + Ozone Treatment',
      filmTech: '140°C Dry-Vapor + pH-Neutral Leather Nourishment',
      warranty: 'Hospital-Grade Hygiene Guarantee',
      turnaround: 'Same Day (4 - 6 Hours)',
      extras: 'Matte Non-Greasy Finish + Anti-Bacterial Fogging'
    },
    {
      key: 'engine-rodent',
      name: 'Engine Beautification + Rodent Repellent',
      basePrice: 3999,
      scope: 'Engine Bay Steam Degrease + Wire Harness Bitter Coating',
      filmTech: 'Citrus Degreaser + Satin Anti-Static Dressing + Bitter Shield',
      warranty: '6-Month Protective Shield',
      turnaround: 'Same Day (2 - 3 Hours)',
      extras: 'Prevents Wire Chewing & Expensive Electrical Damage'
    }
  ];

  const currentVehicleObj = vehicleOptions.find(v => v.key === selectedVehicle) || vehicleOptions[1];
  const currentPackageObj = packageOptions.find(p => p.key === selectedPackage) || packageOptions[0];

  const estimatedPrice = Math.round(currentPackageObj.basePrice * currentVehicleObj.priceMultiplier);
  const formattedPrice = `₹${estimatedPrice.toLocaleString('en-IN')}`;

  const waEstimateMessage = `*Vehicle Protection Configuration - WELLPRO*\n\n` +
    `• *Vehicle Segment:* ${currentVehicleObj.label} (${currentVehicleObj.examples})\n` +
    `• *Selected Package:* ${currentPackageObj.name}\n` +
    `• *Estimated Investment:* ${formattedPrice} approx.\n` +
    `• *Protection Scope:* ${currentPackageObj.scope}\n` +
    `• *Warranty:* ${currentPackageObj.warranty}\n` +
    `• *Turnaround:* ${currentPackageObj.turnaround}\n\n` +
    `Please share studio slot availability and confirm this booking.`;

  const waEstimateUrl = `https://wa.me/${businessInfo.contact.whatsappRaw}?text=${encodeURIComponent(waEstimateMessage)}`;

  return (
    <section id="estimator" className="py-24 sm:py-32 bg-gradient-to-b from-[#03050a] via-[#071228] to-[#03050a] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00b4d8]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#38bdf8]" />
            <span className="font-subheading text-xs uppercase tracking-[3px] font-bold text-[#38bdf8]">
              Interactive Configurator
            </span>
            <span className="w-6 h-[2px] bg-[#38bdf8]" />
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            Indian Vehicle Package Estimator
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-[#38bdf8] to-[#154c8a] mx-auto mb-6" />

          <p className="text-gray-300 text-sm sm:text-base font-light">
            Select your Indian vehicle class and required protection tier for an instant investment estimate.
          </p>
        </div>

        {/* Configurator Box */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0a1020] to-[#030814] border border-[#102d60]/60 p-6 sm:p-10 shadow-2xl">
          
          {/* Step 1: Vehicle Segment Selection */}
          <div className="mb-10">
            <span className="font-subheading text-xs uppercase tracking-[2px] font-bold text-[#38bdf8] block mb-4">
              Step 1: Choose Your Indian Vehicle Category
            </span>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {vehicleOptions.map((veh) => (
                <button
                  key={veh.key}
                  onClick={() => setSelectedVehicle(veh.key)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    selectedVehicle === veh.key
                      ? 'bg-gradient-to-b from-[#102d60] to-[#071228] border-[#38bdf8] shadow-[0_0_20px_rgba(0,180,216,0.35)] scale-[1.02]'
                      : 'bg-[#060a14]/80 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading font-bold text-base text-white">
                      {veh.label}
                    </span>
                    <Car size={18} className={selectedVehicle === veh.key ? 'text-[#38bdf8]' : 'text-gray-400'} />
                  </div>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {veh.examples}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Package Selection */}
          <div className="mb-10">
            <span className="font-subheading text-xs uppercase tracking-[2px] font-bold text-[#38bdf8] block mb-4">
              Step 2: Choose Armor & Detailing Service
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {packageOptions.map((pkg) => (
                <button
                  key={pkg.key}
                  onClick={() => setSelectedPackage(pkg.key)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    selectedPackage === pkg.key
                      ? 'bg-gradient-to-b from-[#102d60] to-[#071228] border-[#38bdf8] shadow-[0_0_20px_rgba(0,180,216,0.35)] scale-[1.02]'
                      : 'bg-[#060a14]/80 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-heading font-bold text-base text-white">
                        {pkg.name}
                      </span>
                      {selectedPackage === pkg.key && (
                        <CheckCircle2 size={16} className="text-[#38bdf8] flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-gray-300 font-light mb-3">
                      {pkg.scope}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#38bdf8]">
                    <span>{pkg.warranty}</span>
                    <span className="text-gray-400">{pkg.turnaround}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Configuration Summary & Instant Quote Bar */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#030814] via-[#071228] to-[#0c1f42] border border-[#00b4d8]/40 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="font-subheading text-[11px] uppercase tracking-[2px] font-bold text-[#38bdf8] block mb-1">
                Estimated Studio Investment (Inclusive of Surface Prep & Tax)
              </span>
              <div className="flex items-baseline gap-3">
                <span className="font-heading font-black text-3xl sm:text-5xl text-white">
                  {formattedPrice}
                </span>
                <span className="text-xs text-gray-400 font-light">
                  *Indicative baseline quote
                </span>
              </div>
              <p className="text-xs text-[#bae6fd] mt-1">
                Configured for: <strong>{currentVehicleObj.label}</strong> with <strong>{currentPackageObj.name}</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => onOpenBooking(`${currentPackageObj.name} for ${currentVehicleObj.label}`)}
                className="w-full sm:w-auto bg-gradient-to-r from-[#38bdf8] via-[#154c8a] to-[#0c1f42] hover:from-[#7dd3fc] text-white font-subheading font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] transition-all cursor-pointer"
              >
                <Calendar size={15} />
                <span>Reserve Studio Bay</span>
              </button>

              <a
                href={waEstimateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-subheading font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all"
              >
                <MessageSquare size={15} />
                <span>Confirm on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
