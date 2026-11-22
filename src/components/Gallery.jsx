import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import BeforeAfter from './BeforeAfter';
import { galleryData } from '../data/gallery';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'ppf', label: 'PPF Installs' },
    { key: 'ceramic', label: 'Ceramic Coating' },
    { key: 'interior', label: 'Interior Detailing' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-28 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-gold-500" />
            <span className="font-subheading text-xs uppercase tracking-[3px] font-bold text-gold-400">
              Visual Proof
            </span>
            <span className="w-5 h-[2px] bg-gold-500" />
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            Our Transformations & Portfolio
          </h2>

          <div className="w-16 h-[3px] bg-gold-gradient mx-auto mb-6" />

          <p className="text-gray-400 text-sm sm:text-base font-light">
            Slide to see the difference between weathered, swirled factory paint and our high-gloss ceramic mirror finish.
          </p>
        </div>

        {/* Interactive Before & After Slider */}
        <BeforeAfter />

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`font-subheading text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeFilter === f.key
                  ? 'bg-gold-gradient text-obsidian-950 shadow-gold-sm'
                  : 'bg-obsidian-900 border border-white/10 text-gray-400 hover:text-white hover:border-gold-500/40'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setLightboxItem(project)}
              className="group relative h-72 rounded-2xl overflow-hidden border border-white/10 bg-obsidian-900 cursor-pointer shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Zoom Icon Button */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-obsidian-950/80 border border-gold-500/50 flex items-center justify-center text-gold-300 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                <Maximize2 size={16} />
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <span className="font-subheading text-[10px] uppercase tracking-[1.5px] font-bold text-gold-400 mb-1">
                  {project.tag}
                </span>
                <h4 className="font-heading font-bold text-lg text-white">
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 backdrop-blur-md"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute -top-12 right-0 sm:-right-8 text-gray-400 hover:text-white p-2"
              aria-label="Close image modal"
            >
              <X size={28} />
            </button>

            <img
              src={lightboxItem.image}
              alt={lightboxItem.title}
              className="w-full max-h-[75vh] object-contain rounded-xl border border-gold-500/40 shadow-2xl"
            />

            <div className="text-center mt-4">
              <span className="font-subheading text-xs uppercase tracking-[2px] font-semibold text-gold-400 block mb-1">
                {lightboxItem.tag}
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                {lightboxItem.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1 max-w-md mx-auto">
                {lightboxItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

