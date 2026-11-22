import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Send } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: 'Paint Protection Film (PPF)',
    date: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.vehicle) {
      onShowToast('Please fill in your Name, Phone Number, and Vehicle Make & Model.');
      return;
    }

    onShowToast(`Thank you, ${formData.name}! Your consultation request for your ${formData.vehicle} has been received. Our studio master will contact you shortly.`);
    setFormData({
      name: '',
      phone: '',
      email: '',
      vehicle: '',
      service: 'Paint Protection Film (PPF)',
      date: '',
      notes: ''
    });
  };

  const handleWhatsAppSubmit = () => {
    if (!formData.name || !formData.phone || !formData.vehicle) {
      onShowToast('Please provide your Name, Phone Number, and Vehicle before launching WhatsApp.');
      return;
    }

    const text = `*New Studio Consultation Request - Well Protection Car Care*\n\n` +
      `👤 *Client Name:* ${formData.name}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `🚗 *Vehicle:* ${formData.vehicle}\n` +
      `🛡️ *Service:* ${formData.service}\n` +
      (formData.date ? `📅 *Preferred Date:* ${formData.date}\n` : '') +
      (formData.email ? `✉️ *Email:* ${formData.email}\n` : '') +
      (formData.notes ? `📝 *Notes:* ${formData.notes}\n` : '');

    const waUrl = `https://wa.me/${businessInfo.contact.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    onShowToast('Connecting directly to Well Protection Car Care on WhatsApp...');
  };

  return (
    <section id="contact" className="py-28 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-gold-500" />
            <span className="font-subheading text-xs uppercase tracking-[3px] font-bold text-gold-400">
              Direct Access
            </span>
            <span className="w-5 h-[2px] bg-gold-500" />
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            Connect With Our Studio
          </h2>

          <div className="w-16 h-[3px] bg-gold-gradient mx-auto mb-6" />

          <p className="text-gray-400 text-sm sm:text-base font-light">
            Visit our bespoke detailing facility, schedule a private consultation, or message our specialists directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Business Details & Map */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="p-8 rounded-2xl bg-obsidian-900 border border-white/10 flex flex-col gap-6 shadow-xl">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="font-subheading text-xs uppercase tracking-wider text-gold-300 font-semibold block mb-1">
                    Studio Location
                  </span>
                  <p className="text-sm text-gray-200 leading-relaxed font-light">
                    {businessInfo.contact.address.full}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="font-subheading text-xs uppercase tracking-wider text-gold-300 font-semibold block mb-1">
                    Direct Phone Line
                  </span>
                  <a
                    href={`tel:${businessInfo.contact.phoneRaw}`}
                    className="text-sm font-medium text-white hover:text-gold-400 transition-colors"
                  >
                    {businessInfo.contact.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] flex-shrink-0">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <span className="font-subheading text-xs uppercase tracking-wider text-[#25D366] font-semibold block mb-1">
                    Instant WhatsApp
                  </span>
                  <a
                    href={`https://wa.me/${businessInfo.contact.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white hover:text-[#25D366] transition-colors"
                  >
                    Chat Directly with Master Detailer
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="font-subheading text-xs uppercase tracking-wider text-gold-300 font-semibold block mb-1">
                    Operating Hours
                  </span>
                  <p className="text-xs text-gray-200">
                    {businessInfo.contact.workingHours.weekday}
                  </p>
                  <p className="text-xs text-gold-300 mt-0.5">
                    {businessInfo.contact.workingHours.weekend}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="h-64 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <iframe
                src={businessInfo.contact.googleMapsEmbed}
                className="w-full h-full filter invert-[0.92] hue-rotate-180 contrast-125"
                title="Well Protection Car Care Studio Map"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7 bg-obsidian-900 border border-gold-500/40 rounded-2xl p-8 sm:p-12 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-gradient" />

            <div className="mb-8">
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                Schedule Private Consultation
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light">
                Complete your details below or route directly to WhatsApp for rapid response.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase font-subheading font-semibold text-gold-300 tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alexander Stone"
                    className="w-full bg-obsidian-850 border border-white/10 focus:border-gold-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-subheading font-semibold text-gold-300 tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 00000"
                    className="w-full bg-obsidian-850 border border-white/10 focus:border-gold-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase font-subheading font-semibold text-gold-300 tracking-wider mb-2">
                    Vehicle Make & Model *
                  </label>
                  <input
                    type="text"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Porsche 911 / BMW M4"
                    className="w-full bg-obsidian-850 border border-white/10 focus:border-gold-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-subheading font-semibold text-gold-300 tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="client@domain.com"
                    className="w-full bg-obsidian-850 border border-white/10 focus:border-gold-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase font-subheading font-semibold text-gold-300 tracking-wider mb-2">
                    Requested Service *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-obsidian-850 border border-white/10 focus:border-gold-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-white transition-colors"
                  >
                    <option value="Paint Protection Film (PPF)">Paint Protection Film (PPF)</option>
                    <option value="Ceramic & Graphene Coating">Ceramic & Graphene 9H+ Coating</option>
                    <option value="Multi-Stage Paint Correction">Multi-Stage Paint Correction</option>
                    <option value="Interior Deep Cleaning">Interior Deep Cleaning</option>
                    <option value="Bespoke Exterior Detailing">Bespoke Exterior Detailing</option>
                    <option value="Alloy Wheel & Glass Armor">Alloy Wheel & Glass Armor</option>
                    <option value="Complete Vehicle Transformation">Complete Vehicle Transformation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-subheading font-semibold text-gold-300 tracking-wider mb-2">
                    Target Appointment Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-obsidian-850 border border-white/10 focus:border-gold-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-subheading font-semibold text-gold-300 tracking-wider mb-2">
                  Special Notes / Vehicle Condition
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Mention any specific scratch areas, matte wrap requirements, delivery timeline..."
                  className="w-full bg-obsidian-850 border border-white/10 focus:border-gold-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <button
                  type="submit"
                  className="bg-gold-gradient hover:bg-gold-gradient-hover text-obsidian-950 font-subheading font-bold text-xs uppercase tracking-wider py-4 rounded-lg flex items-center justify-center gap-2 shadow-gold-sm hover:shadow-gold-md transition-all"
                >
                  <Send size={15} />
                  <span>Submit Consultation</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-subheading font-bold text-xs uppercase tracking-wider py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_4px_15px_rgba(37,211,102,0.3)]"
                >
                  <MessageSquare size={15} />
                  <span>Book via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

