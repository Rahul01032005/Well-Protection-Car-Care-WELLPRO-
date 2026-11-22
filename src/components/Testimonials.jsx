import React, { useState } from 'react';
import { Quote, Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-28 bg-obsidian-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-gold-500" />
            <span className="font-subheading text-xs uppercase tracking-[3px] font-bold text-gold-400">
              Client Acclaim
            </span>
            <span className="w-5 h-[2px] bg-gold-500" />
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            What Luxury Car Owners Say
          </h2>

          <div className="w-16 h-[3px] bg-gold-gradient mx-auto mb-6" />

          <p className="text-gray-400 text-sm sm:text-base font-light">
            Read genuine impressions from supercar, luxury sedan, and SUV collectors who trust Well Protection Car Care.
          </p>
        </div>

        {/* Testimonial Showcase Card */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 sm:p-14 rounded-3xl bg-obsidian-850 border border-gold-500/40 shadow-2xl relative flex flex-col items-center text-center">
            {/* Quote Icon */}
            <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6">
              <Quote size={28} />
            </div>

            {/* 5 Gold Stars */}
            <div className="flex items-center gap-1.5 mb-6 text-gold-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="font-sans text-gray-200 text-base sm:text-lg sm:leading-relaxed font-light italic mb-8 max-w-2xl">
              "{current.quote}"
            </p>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              <span className="font-heading font-bold text-lg text-white">
                {current.name}
              </span>
              <span className="font-subheading text-xs uppercase tracking-wider text-gold-300 font-semibold mt-1">
                {current.vehicle}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium mt-2">
                <CheckCircle size={13} />
                Verified Luxury Vehicle Client
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-full bg-obsidian-900 border border-white/10 hover:border-gold-500/50 hover:bg-gold-500 hover:text-obsidian-950 text-gray-300 flex items-center justify-center transition-all"
                aria-label="Previous review"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx ? 'w-8 bg-gold-500' : 'w-2 bg-white/20'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-full bg-obsidian-900 border border-white/10 hover:border-gold-500/50 hover:bg-gold-500 hover:text-obsidian-950 text-gray-300 flex items-center justify-center transition-all"
                aria-label="Next review"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

