import React, { useState } from 'react';
import { Shield, Sparkles, Clock, CheckCircle2, ChevronLeft, ChevronRight, Calendar, MessageSquare, ArrowUpRight } from 'lucide-react';
import { indianCars } from '../data/indianCars';
import { businessInfo } from '../data/businessInfo';

export default function CarShowcaseTransition({ onOpenBooking }) {
  const [activeCarIndex, setActiveCarIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('All');

  const brands = ['All', 'Hyundai', 'Maruti Suzuki', 'Mahindra', 'Tata', 'Toyota'];

  const filteredCars = selectedBrand === 'All'
    ? indianCars
    : indianCars.filter(c => c.brand === selectedBrand);

  const currentCar = filteredCars[activeCarIndex] || filteredCars[0] || indianCars[0];

  const handleCarSwitch = (index) => {
    if (index === activeCarIndex || isAnimating) return;
    setIsAnimating(true);
    setActiveCarIndex(index);
    setTimeout(() => setIsAnimating(false), 550);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    setActiveCarIndex(0);
  };

  const waCarMessage = `Hello Well Protection Car Care (WELLPRO)! I am interested in the ${currentCar.name} (${currentCar.category}). Recommended Program: ${currentCar.recommendedProgram}. Estimated: ${currentCar.priceRange}. Please share bay availability and consultation slot.`;

  return (
    <section id="car-stage" className="py-24 sm:py-32 bg-gradient-to-b from-[#03050a] via-[#071228] to-[#03050a] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00b4d8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#38bdf8]" />
            <span className="font-subheading text-xs uppercase tracking-[3px] font-bold text-[#38bdf8]">
              Indian Vehicle Transformation Stage
            </span>
            <span className="w-6 h-[2px] bg-[#38bdf8]" />
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            Hyundai, Maruti & Indian Fleet Armor Presets
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-[#38bdf8] to-[#154c8a] mx-auto mb-6" />

          <p className="text-gray-300 text-sm sm:text-base font-light">
            Engineered specifically for Indian driving terrains, high heat, monsoons, and highway stone chips. Select a vehicle to inspect its tailored protection package and smooth laser scan transition.
          </p>
        </div>

        {/* Brand Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-6">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => handleBrandChange(brand)}
              className={`font-subheading text-[11px] sm:text-xs uppercase tracking-wider font-semibold px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                selectedBrand === brand
                  ? 'bg-[#38bdf8] text-[#03050a] font-bold shadow-[0_0_15px_rgba(56,189,248,0.5)]'
                  : 'bg-[#071228] border border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Vehicle Selector Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {filteredCars.map((car, idx) => (
            <button
              key={car.id}
              onClick={() => handleCarSwitch(idx)}
              className={`font-subheading text-[11px] sm:text-xs uppercase tracking-wider font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeCarIndex === idx
                  ? 'bg-gradient-to-r from-[#38bdf8] via-[#154c8a] to-[#0c1f42] text-white shadow-[0_0_20px_rgba(0,180,216,0.4)] scale-105 border border-[#38bdf8]/60'
                  : 'bg-[#060a14]/80 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {car.name}
            </button>
          ))}
        </div>

        {/* Showcase Transformation Stage Box */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0a1020] to-[#030814] border border-[#102d60]/60 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Animated Vehicle Image with Laser Scan Sweep */}
            <div className="lg:col-span-7 relative">
              <div className="relative h-[300px] sm:h-[440px] rounded-2xl overflow-hidden border border-white/10 bg-[#03050a] shadow-2xl group">
                <img
                  key={currentCar.id}
                  src={currentCar.image}
                  alt={currentCar.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isAnimating ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
                  }`}
                />

                {/* Laser Inspection Scan Sweep Transition */}
                <div
                  key={`scan-${currentCar.id}`}
                  className="absolute inset-y-0 w-28 bg-gradient-to-r from-transparent via-[#38bdf8]/45 to-transparent pointer-events-none transform -skew-x-12 animate-[carScan_1.8s_ease-out_forwards]"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#03050a]/85 backdrop-blur-md border border-[#38bdf8]/60 rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />
                  <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-wider font-bold text-[#bae6fd]">
                    {currentCar.category}
                  </span>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => handleCarSwitch((activeCarIndex - 1 + filteredCars.length) % filteredCars.length)}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#071228]/85 hover:bg-[#154c8a] border border-white/20 text-white flex items-center justify-center transition-all shadow-xl hover:scale-110 cursor-pointer"
                  aria-label="Previous Indian vehicle"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={() => handleCarSwitch((activeCarIndex + 1) % filteredCars.length)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#071228]/85 hover:bg-[#154c8a] border border-white/20 text-white flex items-center justify-center transition-all shadow-xl hover:scale-110 cursor-pointer"
                  aria-label="Next Indian vehicle"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Vehicle Indicator Dots */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {filteredCars.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleCarSwitch(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeCarIndex === i ? 'w-8 bg-[#38bdf8]' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Select vehicle ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Preservation Blueprint & Action Spec */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-subheading text-[11px] uppercase tracking-[2px] font-bold text-[#38bdf8] block mb-1">
                  Custom Studio Preservation Blueprint
                </span>
                
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">
                  {currentCar.name}
                </h3>
                
                <p className="text-sm text-[#bae6fd] font-semibold mb-6 flex items-center gap-2">
                  <Shield size={16} className="text-[#38bdf8] flex-shrink-0" />
                  <span>{currentCar.recommendedProgram}</span>
                </p>

                {/* Studio Meta Data */}
                <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-[#03050a]/80 border border-white/10 mb-6">
                  <div>
                    <span className="text-[10px] uppercase font-subheading text-gray-400 tracking-wider block">Duration</span>
                    <span className="text-xs font-semibold text-white mt-0.5 block">{currentCar.cureTime}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-subheading text-gray-400 tracking-wider block">Warranty</span>
                    <span className="text-xs font-semibold text-[#38bdf8] mt-0.5 block">{currentCar.warranty}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-subheading text-gray-400 tracking-wider block">Estimated</span>
                    <span className="text-xs font-semibold text-[#a7f3d0] mt-0.5 block">{currentCar.priceRange}</span>
                  </div>
                </div>

                {/* Bullet Highlights */}
                <div className="flex flex-col gap-2.5 mb-8">
                  {currentCar.specHighlights.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300 font-light">
                      <CheckCircle2 size={15} className="text-[#38bdf8] flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking(`${currentCar.recommendedProgram} (${currentCar.name})`)}
                  className="flex-1 bg-gradient-to-r from-[#38bdf8] via-[#154c8a] to-[#0c1f42] hover:from-[#7dd3fc] text-white font-subheading font-bold text-xs uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] transition-all cursor-pointer"
                >
                  <Calendar size={15} />
                  <span>Book This Spec</span>
                </button>

                <a
                  href={`https://wa.me/${businessInfo.contact.whatsappRaw}?text=${encodeURIComponent(waCarMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-subheading font-bold text-xs uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all"
                >
                  <MessageSquare size={15} />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
