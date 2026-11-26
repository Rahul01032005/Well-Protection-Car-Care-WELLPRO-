import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Toast from './components/Toast';
import { MessageSquare, Phone, Calendar } from 'lucide-react';
import { businessInfo } from './data/businessInfo';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const handleOpenBooking = (service = '') => {
    setPreselectedService(service);
    setBookingModalOpen(true);
  };

  const handleShowToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 4500);
  };

  const floatingWhatsAppUrl = `https://wa.me/${businessInfo.contact.whatsappRaw}?text=${encodeURIComponent(
    'Hello WELLPRO, I would like to inquire about studio services for my car.'
  )}`;

  return (
    <div className="min-h-screen bg-[#03050a] text-white font-sans selection:bg-[#00b4d8] selection:text-[#03050a] pb-16 sm:pb-0">

      {/* Sticky Brand Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Master Sections */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <Pillars onOpenBooking={handleOpenBooking} />
        <Services onOpenBooking={handleOpenBooking} />
        <BeforeAfter />
        <Gallery />
        <Testimonials />
        <Contact onShowToast={handleShowToast} />
      </main>

      {/* Studio Mega Footer */}
      <Footer />

      {/* Booking Drawer Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedService={preselectedService}
        onShowToast={handleShowToast}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} visible={toastVisible} />

      {/* Floating WhatsApp Action Pill */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3">
        <div className="bg-[#071228]/95 backdrop-blur-md border border-[#00b4d8]/40 rounded-lg px-3 py-1.5 text-xs text-white shadow-xl pointer-events-none">
          Chat with Studio Master
        </div>
        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform"
          aria-label="Direct WhatsApp Chat"
        >
          <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-60" />
          <MessageSquare size={28} />
        </a>
      </div>

      {/* Mobile Sticky Bottom Dock */}
      <div className="fixed bottom-0 left-0 w-full z-40 grid grid-cols-3 gap-2 p-2 bg-[#03050a]/95 backdrop-blur-md border-t border-[#102d60]/60 sm:hidden">
        <a
          href={`tel:${businessInfo.contact.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 py-3 rounded-lg bg-[#071228] border border-white/10 text-xs font-semibold text-white uppercase tracking-wider"
        >
          <Phone size={14} className="text-[#38bdf8]" />
          <span>Call</span>
        </a>

        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 rounded-lg bg-[#25D366] text-xs font-bold text-white uppercase tracking-wider shadow-sm"
        >
          <MessageSquare size={14} />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex items-center justify-center gap-1.5 py-3 rounded-lg bg-gradient-to-r from-[#38bdf8] via-[#154c8a] to-[#0c1f42] text-xs font-bold text-white uppercase tracking-wider shadow-sm cursor-pointer"
        >
          <Calendar size={14} />
          <span>Book</span>
        </button>
      </div>
    </div>
  );
}
