import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  const updateWidth = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [updateWidth]);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="mb-20 bg-gradient-to-b from-obsidian-900 to-obsidian-850 border border-gold-500/30 rounded-3xl p-5 sm:p-10 shadow-2xl relative overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 mb-2">
          <Sparkles size={16} className="text-gold-400" />
          <span className="font-subheading text-[11px] sm:text-xs uppercase tracking-[2px] font-bold text-gold-400">
            Microscopic Transformation
          </span>
        </div>
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">
          Interactive Paint Correction & Ceramic Transformation
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 font-light">
          Drag or swipe the slider left and right to witness true optical clarity.
        </p>
      </div>

      <div
        ref={containerRef}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          if (e.touches && e.touches[0]) handleMove(e.touches[0].clientX);
        }}
        className="relative w-full h-[320px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-white/10 group"
      >
        {/* Before Image (Background) */}
        <img
          src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80"
          alt="Swirled dull paint before detailing"
          className="absolute inset-0 w-full h-full object-cover filter contrast-110"
        />

        {/* After Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 h-full overflow-hidden border-r-2 border-gold-500 shadow-[2px_0_20px_rgba(212,175,55,0.6)]"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80"
            alt="Flawless liquid gloss ceramic coating finish"
            className="absolute inset-0 h-full object-cover max-w-none"
            style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
          />
        </div>

        {/* Badges */}
        <span className="absolute top-4 right-4 bg-obsidian-950/85 backdrop-blur-md border border-white/20 text-gray-300 font-subheading text-[10px] sm:text-xs uppercase tracking-wider font-bold px-3 py-1.5 rounded-full pointer-events-none shadow-lg">
          Before (Swirls & Hazing)
        </span>

        <span className="absolute top-4 left-4 bg-gold-500/25 backdrop-blur-md border border-gold-500 text-gold-200 font-subheading text-[10px] sm:text-xs uppercase tracking-wider font-bold px-3 py-1.5 rounded-full pointer-events-none shadow-lg">
          After (9H Ceramic Mirror)
        </span>

        {/* Center Drag Handle with Animated Pulse Ring */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gold-500 border-2 border-white shadow-[0_0_25px_rgba(0,0,0,0.9),0_0_18px_#d4af37] flex items-center justify-center text-obsidian-950 pointer-events-none z-20 transition-transform group-hover:scale-110"
          style={{ left: `${sliderPosition}%` }}
        >
          <ChevronsLeftRight size={20} />
          <span className="absolute inset-0 rounded-full border border-gold-300 animate-ping opacity-50" />
        </div>
      </div>
    </div>
  );
}
