import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageSquare, Send } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function BookingModal({ isOpen, onClose, preselectedService, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: 'Paint Protection Film (PPF)',
    date: '',
    notes: ''
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.vehicle) {
      onShowToast('Please provide your Name, Phone Number, and Vehicle Make & Model.');
      return;
    }

    onShowToast(`Reservation confirmed for ${formData.name} (${formData.vehicle} - ${formData.service}). Studio manager will call to confirm.`);
    onClose();
  };

  const handleWhatsApp = () => {
    if (!formData.name || !formData.phone || !formData.vehicle) {
      onShowToast('Please complete Name, Phone, and Vehicle before launching WhatsApp.');
      return;
    }

    const text = `*Private Studio Session Reservation - Well Protection Car Care*\n\n` +
      `👤 *Client Name:* ${formData.name}\n` +
      `📱 *Contact:* ${formData.phone}\n` +
      `🏎️ *Vehicle:* ${formData.vehicle}\n` +
      `🛡️ *Service Package:* ${formData.service}\n` +
      (formData.date ? `📅 *Target Date:* ${formData.date}\n` : '') +
      (formData.notes ? `📝 *Special Instructions:* ${formData.notes}\n` : '');

    const waUrl = `https://wa.me/${businessInfo.contact.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    onClose();
    onShowToast('Connecting directly to Well Protection Car Care on WhatsApp...');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-obsidian-900 border border-gold-500/50 rounded-2xl p-7 sm:p-9 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-gradient" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-1"
          aria-label="Close booking modal"
        >
          <X size={22} />
        </button>

        <div className="mb-6">
          <span className="font-subheading text-[10px] uppercase tracking-[2px] font-bold text-gold-400">
            Private Studio Slot
          </span>
          <h3 className="font-heading font-bold text-2xl text-white mt-1">
            Reserve Your Studio Session
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Confirm your vehicle specifications. Our chief technician will inspect your vehicle's paint profile.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-[11px] uppercase font-subheading font-semibold text-gold-300 tracking-wider mb-1">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g. John Wick"
              className="w-full bg-obsidian-850 border border-white/10 focus:border-gold-500 focus:outline-none rounded px-3.5 py-2.5 text-xs text-white placeholder-gray-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[11px] uppercase font-subheading font-semibold text-gold-300 tracking-wider mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 98765 00000"
                className="w-full bg-obsidian-850 border border-white/10 focus:border-gold-500 focus:outline-none rounded px-3.5 py-2.5 text-xs text-white placeholder-gray-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase font-subheading font-semibold text-gold-300 tracking-wider mb-1">
                Car Make & Model *
              </label>
              <input
                type="text"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                required
                placeholder="e.g. Porsche 911 GT3"
                className="w-full bg-obsidian-850 border border-white/10 focus:border-gold-500 focus:outline-none rounded px-3.5 py-2.5 text-xs text-white placeholder-gray-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[11px] uppercase font-subheading font-semibold text-gold-300 tracking-wider mb-1">
                Protection Service *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-obsidian-850 border border-white/10 focus:border-gold-500 focus:outline-none rounded px-3 py-2.5 text-xs text-white transition-colors"
              >
                <option value="Paint Protection Film (PPF)">Paint Protection Film (PPF)</option>
                <option value="Ceramic & Graphene Coating">Ceramic & Graphene Coating</option>
                <option value="Multi-Stage Paint Correction">Multi-Stage Paint Correction</option>
                <option value="Interior Deep Cleaning">Interior Deep Cleaning</option>
                <option value="Bespoke Exterior Detailing">Bespoke Exterior Detailing</option>
                <option value="Alloy Wheel & Glass Armor">Alloy Wheel & Glass Armor</option>
                <option value="Complete Vehicle Transformation">Complete Vehicle Transformation</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] uppercase font-subheading font-semibold text-gold-300 tracking-wider mb-1">
                Target Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-obsidian-850 border border-white/10 focus:border-gold-500 focus:outline-none rounded px-3 py-2.5 text-xs text-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase font-subheading font-semibold text-gold-300 tracking-wider mb-1">
              Special Instructions
            </label>
            <textarea
              name="notes"
              rows="2"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any details about delivery or specific protection needs..."
              className="w-full bg-obsidian-850 border border-white/10 focus:border-gold-500 focus:outline-none rounded px-3.5 py-2 text-xs text-white placeholder-gray-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            <button
              type="submit"
              className="bg-gold-gradient hover:bg-gold-gradient-hover text-obsidian-950 font-subheading font-bold text-xs uppercase tracking-wider py-3 rounded flex items-center justify-center gap-1.5 shadow-gold-sm transition-all"
            >
              <Calendar size={14} />
              <span>Confirm Slot</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-subheading font-bold text-xs uppercase tracking-wider py-3 rounded flex items-center justify-center gap-1.5 transition-all shadow-[0_4px_12px_rgba(37,211,102,0.3)]"
            >
              <MessageSquare size={14} />
              <span>Send to WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

