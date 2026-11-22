import React, { useState } from 'react';
import { Package, ShoppingBag, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function ProductsAndSupplies({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('retail');

  const retailProducts = [
    {
      name: "WELLPRO Ultra Snow Foam (pH-Neutral)",
      size: "1000ml Concentrate",
      price: "₹899",
      desc: "High-lubricity snow foam that encapsulates grit and dirt without stripping ceramic coating or PPF.",
      tag: "Maintenance Essential",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "10H Graphene Quick Detailer & Booster",
      size: "500ml Spray",
      price: "₹1,299",
      desc: "Infused with reduced graphene oxide to rejuvenate hydrophobic roll-off and intense mirror gloss.",
      tag: "Top-Up Spray",
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "500 GSM Edgeless Plush Microfiber Pack (3x)",
      size: "40x40 cm Edgeless",
      price: "₹649",
      desc: "Laser-cut 70/30 blend microfiber towels guaranteed never to introduce micro-scratches or swirls.",
      tag: "Zero-Scratch Fabric",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Interior Satin Anti-Bacterial Cleaner & Feed",
      size: "500ml Trigger Spray",
      price: "₹799",
      desc: "pH-neutral delicate cleaner for leatherette, Nappa leather, and soft-touch dash without greasy shine.",
      tag: "OEM Matte Cabin",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const tradeMaterials = [
    {
      name: "German Dual-Action Foam Polishing Pads",
      size: "5-inch & 6-inch Discs",
      price: "Bulk Trade Rates",
      desc: "Heavy-cut blue, medium-polish yellow, and ultra-finish black open-cell reticulated German foam.",
      tag: "Workshop Consumables",
      image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Precision Micro-Abrasive Compounding Paste",
      size: "1000g Studio Bottle",
      price: "Wholesale & Retail",
      desc: "Diminishing micro-abrasive compounding paste engineered for rapid swirl removal with zero filler oils.",
      tag: "Body Shop Grade",
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Automotive Precision Heat-Resistant Masking Tape",
      size: "Pack of 10 Rolls (18mm)",
      price: "Trade Supply",
      desc: "Leaves zero gummy residue on rubber trims, plastics, or badges during high-speed machine compounding.",
      tag: "Masking Supplies",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Rotary & DA Polisher Flexible Backing Plates",
      size: "M14 & 5/16 Threads",
      price: "Trade Equipment",
      desc: "Urethane molded backing plates dissipating heat and providing contour flexibility on curved panels.",
      tag: "Detailing Hardware",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const currentList = activeTab === 'retail' ? retailProducts : tradeMaterials;

  return (
    <section className="py-24 sm:py-32 bg-[#03050a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#38bdf8]" />
            <span className="font-subheading text-xs uppercase tracking-[3px] font-bold text-[#38bdf8]">
              Studio Store & Trade Supply
            </span>
            <span className="w-6 h-[2px] bg-[#38bdf8]" />
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            Retail Car Care Products & Detailing Materials
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-[#38bdf8] to-[#154c8a] mx-auto mb-6" />

          <p className="text-gray-300 text-sm sm:text-base font-light">
            Professional car care formulas for car enthusiasts and direct wholesale trade supplies for local detailing workshops and garages.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('retail')}
            className={`font-subheading text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-full transition-all cursor-pointer ${
              activeTab === 'retail'
                ? 'bg-gradient-to-r from-[#38bdf8] to-[#154c8a] text-white shadow-[0_0_20px_rgba(0,180,216,0.4)]'
                : 'bg-[#071228] border border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            Retail Products (Car Enthusiasts)
          </button>
          <button
            onClick={() => setActiveTab('trade')}
            className={`font-subheading text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-full transition-all cursor-pointer ${
              activeTab === 'trade'
                ? 'bg-gradient-to-r from-[#38bdf8] to-[#154c8a] text-white shadow-[0_0_20px_rgba(0,180,216,0.4)]'
                : 'bg-[#071228] border border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            Sale Local Materials (Workshops & Trade)
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentList.map((item, idx) => {
            const waOrderMsg = `Hello WELLPRO! I would like to order "${item.name}" (${item.size}). Price: ${item.price}. Please share availability and dispatch options.`;
            const waOrderUrl = `https://wa.me/${businessInfo.contact.whatsappRaw}?text=${encodeURIComponent(waOrderMsg)}`;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0a1020] border border-[#102d60]/60 p-5 flex flex-col justify-between hover:border-[#38bdf8]/60 transition-all hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="h-44 rounded-xl overflow-hidden mb-4 bg-black relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <span className="absolute top-2.5 right-2.5 bg-[#03050a]/85 border border-[#38bdf8]/50 text-[#bae6fd] text-[9px] uppercase font-bold px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase font-mono text-[#38bdf8] block mb-1">{item.size}</span>
                  <h4 className="font-heading font-bold text-base text-white mb-2 leading-snug">{item.name}</h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">{item.desc}</p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="font-heading font-black text-base text-[#38bdf8]">{item.price}</span>
                  <a
                    href={waOrderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] font-subheading uppercase font-bold shadow-sm transition-all"
                  >
                    <MessageSquare size={12} />
                    <span>Inquire</span>
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
