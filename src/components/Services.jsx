import React, { useState } from 'react';
import { Check, Calendar, MessageSquare, ArrowUpRight, Sparkles, Shield, Wrench, Package } from 'lucide-react';
import { servicesData } from '../data/services';
import { businessInfo } from '../data/businessInfo';

export default function Services({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Services' },
    { key: 'coating', label: '10H Graphene & Ceramic' },
    { key: 'ppf', label: 'Paint Protection Film (PPF)' },
    { key: 'interior', label: 'Interior Sanitization' },
    { key: 'engine', label: 'Engine Beautification' },
    { key: 'specialized', label: 'Rodent Repellent' },
    { key: 'correction', label: 'Paint Correction' },
    { key: 'retail', label: 'Retail Products' },
    { key: 'wholesale', label: 'Trade Materials' },
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#03050a] relative overflow-hidden">
      {/* Ambient background cyan & navy glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00b4d8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#154c8a]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#38bdf8]" />
            <span className="font-subheading text-xs uppercase tracking-[3px] font-bold text-[#38bdf8]">
              Verified Studio Services
            </span>
            <span className="w-6 h-[2px] bg-[#38bdf8]" />
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            Master Vehicle Care & Protection Suite
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-[#38bdf8] to-[#154c8a] mx-auto mb-6" />

          <p className="text-gray-300 text-sm sm:text-base font-light">
            Custom engineered packages for popular Indian vehicles including <strong>Hyundai, Maruti Suzuki, Mahindra, Tata, and Toyota</strong>. Cleanroom precision and verified nanotechnology.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`font-subheading text-[11px] sm:text-xs uppercase tracking-wider font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-[#38bdf8] via-[#154c8a] to-[#0c1f42] text-white shadow-[0_0_20px_rgba(0,180,216,0.4)] scale-105 border border-[#38bdf8]/60'
                  : 'bg-[#060a14]/90 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid with 3D Tilt Card Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const waQuery = `https://wa.me/${businessInfo.contact.whatsappRaw}?text=${encodeURIComponent(
              `Hello Well Protection Car Care (WELLPRO)! I would like to inquire about "${service.title}" (${service.featuredCar}). Please share pricing and bay availability.`
            )}`;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0a1020] to-[#030814] border border-[#102d60]/50 hover:border-[#38bdf8]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,180,216,0.25)] flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-black">
                    <img
                      src={service.image}
                      alt={`${service.title} - ${service.featuredCar}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020] via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <span className="absolute top-4 right-4 bg-[#03050a]/85 backdrop-blur-md border border-[#38bdf8]/60 text-[#bae6fd] text-[10px] font-subheading font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                      {service.badge}
                    </span>

                    {/* Featured Vehicle Pill */}
                    <div className="absolute bottom-3 left-4 right-4 bg-[#071228]/85 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 flex items-center justify-between text-[11px] text-[#bae6fd]">
                      <span className="font-semibold truncate">🚗 {service.featuredCar}</span>
                      <span className="text-[#38bdf8] font-bold flex-shrink-0 ml-2">{service.startingPrice}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-3 pb-3 border-b border-white/5">
                      <span className="font-subheading text-[11px] text-[#38bdf8] font-bold uppercase tracking-wider">
                        {service.warranty}
                      </span>
                      <span className="text-[11px] text-gray-300">
                        ⏱️ {service.duration}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-[#bae6fd] transition-colors mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2.5 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 font-light">
                          <Check size={14} className="text-[#38bdf8] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => onOpenBooking(`${service.title} (${service.featuredCar})`)}
                    className="flex-1 bg-gradient-to-r from-[#38bdf8] via-[#154c8a] to-[#0c1f42] hover:from-[#7dd3fc] text-white font-subheading font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_15px_rgba(0,180,216,0.3)] transition-all cursor-pointer"
                  >
                    <Calendar size={14} />
                    <span>Book Service</span>
                  </button>

                  <a
                    href={waQuery}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center transition-colors shadow-md hover:scale-105 flex-shrink-0"
                    aria-label={`Enquire on WhatsApp about ${service.title}`}
                  >
                    <MessageSquare size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
