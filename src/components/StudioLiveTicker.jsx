import React from 'react';
import { ShieldCheck, Activity } from 'lucide-react';

export default function StudioLiveTicker() {
  const bayStatus = [
    { bay: "Bay 1", car: "Hyundai Creta", service: "10H Graphene Thermal Curing", status: "Active Curing" },
    { bay: "Bay 2", car: "Maruti Grand Vitara", service: "Interior Steam Sanitization & Ozone", status: "In Progress" },
    { bay: "Bay 3", car: "Mahindra Thar Roxx", service: "Self-Healing TPU PPF Edge Tuck", status: "Wrapping" },
    { bay: "Bay 4", car: "Tata Safari #DARK", service: "3-Stage Optical Swirl Correction", status: "Polishing" },
    { bay: "Bay 5", car: "Toyota Fortuner Legender", service: "Full Body PPF + Rodent Defense", status: "Inspection" },
  ];

  return (
    <div className="bg-[#071228] border-b border-[#102d60]/80 py-2.5 overflow-hidden relative z-30">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        
        {/* Left Label */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping" />
          <span className="text-[11px] font-subheading uppercase font-bold tracking-wider text-[#38bdf8] flex items-center gap-1.5">
            <Activity size={14} />
            <span>Live Studio Telemetry</span>
          </span>
        </div>

        {/* Scrolling Status Track */}
        <div className="overflow-x-auto no-scrollbar flex items-center gap-6 text-xs text-gray-300">
          {bayStatus.map((b, idx) => (
            <div key={idx} className="flex items-center gap-2 flex-shrink-0 bg-[#03050a]/60 px-3 py-1 rounded-full border border-white/5">
              <span className="font-mono text-[#38bdf8] font-bold text-[10px]">{b.bay}:</span>
              <span className="font-semibold text-white">{b.car}</span>
              <span className="text-gray-400">({b.service})</span>
              <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-[#102d60] text-[#bae6fd]">
                {b.status}
              </span>
            </div>
          ))}
        </div>

        {/* Right Info */}
        <div className="hidden xl:flex items-center gap-2 text-xs text-gray-400 flex-shrink-0">
          <ShieldCheck size={14} className="text-[#38bdf8]" />
          <span>Kochi Studio Bays Operating</span>
        </div>

      </div>
    </div>
  );
}
