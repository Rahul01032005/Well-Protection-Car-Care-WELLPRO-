/**
 * WELL PROTECTION CAR CARE (WELLPRO) - Master Interactive Script
 * High-performance, zero-dependency ES6+ JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initBusinessConfig();
  initHeaderScroll();
  initMobileNavigation();
  initActiveNavHighlighter();
  initBeforeAfterSlider();
  initPackageEstimator();
  initServicesFilter();
  initGalleryFilter();
  initTestimonialSlider();
  initFaqAccordion();
  initForms();
  initBackToTop();
});

/* ==========================================================================
   1. Dynamic Business Config Synchronization
   ========================================================================== */
function initBusinessConfig() {
  if (typeof WellproConfig === 'undefined') return;

  const { contact, brand } = WellproConfig;

  // Header Phone
  const headerPhoneText = document.getElementById('headerPhoneText');
  const headerPhoneLink = document.getElementById('headerPhoneLink');
  if (headerPhoneText && contact.phone) headerPhoneText.textContent = contact.phone;
  if (headerPhoneLink && contact.phoneRaw) headerPhoneLink.href = `tel:${contact.phoneRaw}`;

  // Dock Call
  const dockCallBtn = document.getElementById('dockCallBtn');
  if (dockCallBtn && contact.phoneRaw) dockCallBtn.href = `tel:${contact.phoneRaw}`;

  // WhatsApp Links
  const waUrl = `https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(
    'Hello Well Protection Car Care, I would like to inquire about vehicle protection packages for my car.'
  )}`;

  const heroWhatsAppBtn = document.getElementById('heroWhatsAppBtn');
  if (heroWhatsAppBtn) heroWhatsAppBtn.href = waUrl;

  const floatingWhatsAppLink = document.getElementById('floatingWhatsAppLink');
  if (floatingWhatsAppLink) floatingWhatsAppLink.href = waUrl;

  const dockWhatsAppBtn = document.getElementById('dockWhatsAppBtn');
  if (dockWhatsAppBtn) dockWhatsAppBtn.href = waUrl;

  // Contact Info Section
  const contactPhoneLink = document.getElementById('contactPhoneLink');
  if (contactPhoneLink && contact.phone) {
    contactPhoneLink.textContent = contact.phone;
    contactPhoneLink.href = `tel:${contact.phoneRaw}`;
  }

  const contactWhatsAppLink = document.getElementById('contactWhatsAppLink');
  if (contactWhatsAppLink) {
    contactWhatsAppLink.href = waUrl;
  }

  const contactAddress = document.getElementById('contactAddress');
  if (contactAddress && contact.address) {
    contactAddress.innerHTML = `${contact.address.line1}<br>${contact.address.line2}<br>${contact.address.city}, ${contact.address.state} ${contact.address.pincode}`;
  }

  const contactHoursWeekday = document.getElementById('contactHoursWeekday');
  if (contactHoursWeekday && contact.workingHours) {
    contactHoursWeekday.textContent = contact.workingHours.weekday;
  }

  const contactHoursWeekend = document.getElementById('contactHoursWeekend');
  if (contactHoursWeekend && contact.workingHours) {
    contactHoursWeekend.textContent = contact.workingHours.weekend;
  }

  // Copyright Year
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   2. Sticky Header Scroll Effect
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   3. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNavigation() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');

  if (!menuToggle || !navMenu || !mobileOverlay) return;

  const toggleMenu = () => {
    const isActive = navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active', isActive);
    mobileOverlay.classList.toggle('active', isActive);
    document.body.style.overflow = isActive ? 'hidden' : '';
  };

  const closeMenu = () => {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  menuToggle.addEventListener('click', toggleMenu);
  mobileOverlay.addEventListener('click', closeMenu);

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ==========================================================================
   4. Active Navigation Link Highlighter on Scroll
   ========================================================================== */
function initActiveNavHighlighter() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ==========================================================================
   5. Interactive Before/After Split Screen Slider
   ========================================================================== */
function initBeforeAfterSlider() {
  const sliderContainer = document.getElementById('beforeAfterSlider');
  const afterWrapper = document.getElementById('afterWrapper');
  const afterImg = document.getElementById('afterImg');
  const sliderHandle = document.getElementById('sliderHandle');

  if (!sliderContainer || !afterWrapper || !sliderHandle) return;

  let isDragging = false;

  const updateSliderPosition = (xPos) => {
    const rect = sliderContainer.getBoundingClientRect();
    let offsetX = xPos - rect.left;

    // Constrain within bounds
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percentage = (offsetX / rect.width) * 100;

    afterWrapper.style.width = `${percentage}%`;
    sliderHandle.style.left = `${percentage}%`;

    // Ensure afterImg maintains fixed parent width to prevent image distortion
    if (afterImg) {
      afterImg.style.width = `${rect.width}px`;
    }
  };

  // Sync image width on resize
  const syncImageDimensions = () => {
    const rect = sliderContainer.getBoundingClientRect();
    if (afterImg) {
      afterImg.style.width = `${rect.width}px`;
    }
  };

  window.addEventListener('resize', syncImageDimensions);
  syncImageDimensions();

  // Mouse Events
  sliderContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Events for Mobile
  sliderContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches[0]) updateSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches[0]) updateSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

/* ==========================================================================
   6. Interactive Vehicle Protection & Package Estimator
   ========================================================================== */
const estimatorData = {
  vehicles: {
    sedan: { name: "Executive Sedan", multiplier: 1.0 },
    suv: { name: "Luxury SUV", multiplier: 1.2 },
    exotic: { name: "Supercar / Exotic", multiplier: 1.4 }
  },
  packages: {
    "ppf-full": {
      name: "Full Body Self-Healing PPF",
      scope: "100% Painted Panels + Headlights & Mirrors",
      filmTech: "Hydrophobic Optical TPU (8.5 mil, Self-Healing)",
      warranty: "10-Year Comprehensive Warranty",
      turnaround: "4 - 5 Business Days",
      extras: "Ceramic Top Coat + Glass Rain Shield"
    },
    "ppf-front": {
      name: "Front Track Pack PPF",
      scope: "Hood, Full Bumper, Fenders, Headlights & Mirrors",
      filmTech: "High-Impact TPU (8.5 mil) Edge-Wrapped",
      warranty: "10-Year Comprehensive Warranty",
      turnaround: "2 - 3 Business Days",
      extras: "Full Front Ceramic Coating"
    },
    "ceramic-elite": {
      name: "9H Ceramic & Graphene Matrix",
      scope: "Full Exterior Paintwork, Plastic Trims & Glass",
      filmTech: "Aerospace Nano-Silica + Reduced Graphene Oxide",
      warranty: "7-Year Studio Certified Warranty",
      turnaround: "2 - 3 Business Days",
      extras: "Wheels-Off Ceramic Coating + Interior Guard"
    },
    "concours-detail": {
      name: "Concours Exterior & Interior Revival",
      scope: "3-Stage Machine Correction & Full Cabin Deep Steam",
      filmTech: "100% Paint Leveling + Carnauba-Polymer Sealant",
      warranty: "Showroom Mirror Finish Guarantee",
      turnaround: "1 - 2 Business Days",
      extras: "Engine Bay Detail + Leather Nourishment"
    }
  }
};

let currentVehicleKey = 'sedan';
let currentPackageKey = 'ppf-full';

function initPackageEstimator() {
  const vehicleBtns = document.querySelectorAll('#vehicleSegmentOptions .estimator-option-btn');
  const packageBtns = document.querySelectorAll('#packageTierOptions .estimator-option-btn');

  vehicleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      vehicleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentVehicleKey = btn.dataset.vehicle;
      updateEstimatorDisplay();
    });
  });

  packageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      packageBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPackageKey = btn.dataset.package;
      updateEstimatorDisplay();
    });
  });

  updateEstimatorDisplay();
}

function updateEstimatorDisplay() {
  const vehicle = estimatorData.vehicles[currentVehicleKey];
  const pkg = estimatorData.packages[currentPackageKey];

  if (!vehicle || !pkg) return;

  const pkgNameEl = document.getElementById('calcPackageName');
  const vehNameEl = document.getElementById('calcVehicleName');
  const scopeEl = document.getElementById('calcProtectionScope');
  const techEl = document.getElementById('calcFilmTech');
  const warrantyEl = document.getElementById('calcWarranty');
  const turnaroundEl = document.getElementById('calcTurnaround');
  const extrasEl = document.getElementById('calcExtras');
  const waBtn = document.getElementById('calcWhatsAppBtn');

  if (pkgNameEl) pkgNameEl.textContent = pkg.name;
  if (vehNameEl) vehNameEl.textContent = `Configured for ${vehicle.name}`;
  if (scopeEl) scopeEl.textContent = pkg.scope;
  if (techEl) techEl.textContent = pkg.filmTech;
  if (warrantyEl) warrantyEl.textContent = pkg.warranty;
  if (turnaroundEl) turnaroundEl.textContent = pkg.turnaround;
  if (extrasEl) extrasEl.textContent = pkg.extras;

  if (waBtn) {
    const rawNumber = window.WellproConfig ? window.WellproConfig.contact.whatsappRaw : '919876543210';
    const message = `Hello Well Protection Car Care! I configured a package on your website:\n\n• Vehicle Segment: ${vehicle.name}\n• Desired Package: ${pkg.name}\n• Coverage Scope: ${pkg.scope}\n• Warranty: ${pkg.warranty}\n\nPlease share availability and quote details for my vehicle.`;
    waBtn.href = `https://wa.me/${rawNumber}?text=${encodeURIComponent(message)}`;
  }
}

window.bookConfiguredPackage = function() {
  const vehicle = estimatorData.vehicles[currentVehicleKey];
  const pkg = estimatorData.packages[currentPackageKey];

  openBookingModal(pkg ? pkg.name : '');

  const vehicleInput = document.getElementById('modalVehicle');
  if (vehicleInput && vehicle) {
    vehicleInput.value = `${vehicle.name}`;
  }
};

/* ==========================================================================
   7. Services Filter
   ========================================================================== */
function initServicesFilter() {
  const filterTabs = document.querySelectorAll('.services-filter-nav .filter-tab');
  const serviceCards = document.querySelectorAll('#servicesGrid .service-card');

  if (!filterTabs.length || !serviceCards.length) return;

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      serviceCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   8. Gallery Filter & Lightbox Viewer
   ========================================================================== */
function initGalleryFilter() {
  const galleryTabs = document.querySelectorAll('.gallery-nav .filter-tab');
  const galleryItems = document.querySelectorAll('#galleryGrid .gallery-item');

  if (!galleryTabs.length || !galleryItems.length) return;

  galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      galleryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.dataset.gallery;

      galleryItems.forEach(item => {
        const itemCat = item.dataset.category;
        if (category === 'all' || itemCat === category) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

window.openLightbox = function(imgSrc, caption) {
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');

  if (!lightboxModal || !lightboxImg) return;

  lightboxImg.src = imgSrc;
  lightboxImg.alt = caption || 'Well Protection Car Care Project';
  if (lightboxCaption) lightboxCaption.textContent = caption || '';

  lightboxModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  const lightboxModal = document.getElementById('lightboxModal');
  if (!lightboxModal) return;

  lightboxModal.classList.remove('active');
  document.body.style.overflow = '';
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
    closeBookingModal();
  }
});

/* ==========================================================================
   9. Testimonial Carousel
   ========================================================================== */
function initTestimonialSlider() {
  const track = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  const dotsContainer = document.getElementById('testimonialDots');

  if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

  const slides = track.querySelectorAll('.testimonial-card');
  const dots = dotsContainer.querySelectorAll('.testimonial-dot');
  let currentIndex = 0;
  let autoplayTimer = null;

  const goToSlide = (index) => {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 6000);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) clearInterval(autoplayTimer);
  };

  prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
    startAutoplay();
  });

  nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
    startAutoplay();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
      startAutoplay();
    });
  });

  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);

  // Swipe support for mobile
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goToSlide(currentIndex + 1);
      else goToSlide(currentIndex - 1);
      startAutoplay();
    }
  }, { passive: true });

  startAutoplay();
}

/* ==========================================================================
   10. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('#faqAccordion .faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const content = item.querySelector('.faq-content');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherContent = otherItem.querySelector('.faq-content');
        if (otherContent) otherContent.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = `${content.scrollHeight + 30}px`;
      }
    });
  });
}

/* ==========================================================================
   11. Booking Modal & Form Handlers
   ========================================================================== */
window.openBookingModal = function(preselectedService = '') {
  const modal = document.getElementById('bookingModalOverlay');
  if (!modal) return;

  if (preselectedService) {
    const serviceSelect = document.getElementById('modalServiceSelect');
    if (serviceSelect) {
      for (let option of serviceSelect.options) {
        if (option.value.toLowerCase().includes(preselectedService.toLowerCase()) || 
            preselectedService.toLowerCase().includes(option.value.toLowerCase())) {
          option.selected = true;
          break;
        }
      }
    }
  }

  // Set today as min date
  const dateInput = document.getElementById('modalPreferredDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeBookingModal = function() {
  const modal = document.getElementById('bookingModalOverlay');
  if (!modal) return;

  modal.classList.remove('active');
  document.body.style.overflow = '';
};

window.bookSpecificService = function(serviceName) {
  openBookingModal(serviceName);
};

/* Form Submission (Standard) */
function initForms() {
  const contactForm = document.getElementById('contactEnquiryForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formFullName').value.trim();
      const phone = document.getElementById('formPhone').value.trim();
      const car = document.getElementById('formCarModel').value.trim();
      const service = document.getElementById('formService').value;

      if (!name || !phone || !car || !service) {
        showToast('Please fill in all required fields marked with *');
        return;
      }

      showToast(`Thank you, ${name}! Your consultation request for your ${car} has been confirmed. Our team will contact you shortly.`);
      contactForm.reset();
    });
  }
}

/* Submit Form directly via WhatsApp */
window.submitFormToWhatsApp = function() {
  const name = document.getElementById('formFullName')?.value.trim();
  const phone = document.getElementById('formPhone')?.value.trim();
  const email = document.getElementById('formEmail')?.value.trim();
  const car = document.getElementById('formCarModel')?.value.trim();
  const service = document.getElementById('formService')?.value;
  const date = document.getElementById('formDate')?.value;
  const messageNotes = document.getElementById('formMessage')?.value.trim();

  if (!name || !phone || !car || !service) {
    showToast('Please complete Name, Phone, Vehicle, and Service to proceed to WhatsApp');
    return;
  }

  const rawNumber = window.WellproConfig ? window.WellproConfig.contact.whatsappRaw : '919876543210';

  const text = `*New Studio Consultation Request - Well Protection Car Care*\n\n` +
    `👤 *Client Name:* ${name}\n` +
    `📱 *Phone:* ${phone}\n` +
    `🚗 *Vehicle:* ${car}\n` +
    `🛡️ *Service:* ${service}\n` +
    (date ? `📅 *Preferred Date:* ${date}\n` : '') +
    (email ? `✉️ *Email:* ${email}\n` : '') +
    (messageNotes ? `📝 *Notes:* ${messageNotes}\n` : '');

  const waUrl = `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
  showToast('Connecting directly to Well Protection Car Care on WhatsApp...');
};

/* Modal Form Handler */
window.handleModalBookingSubmit = function(event) {
  event.preventDefault();
  const name = document.getElementById('modalFullName')?.value.trim();
  const vehicle = document.getElementById('modalVehicle')?.value.trim();
  const service = document.getElementById('modalServiceSelect')?.value;

  showToast(`Booking received for ${name} (${vehicle} - ${service}). Our studio manager will confirm your slot.`);
  closeBookingModal();
  document.getElementById('modalBookingForm')?.reset();
};

window.handleModalWhatsAppDirect = function() {
  const name = document.getElementById('modalFullName')?.value.trim();
  const phone = document.getElementById('modalPhone')?.value.trim();
  const vehicle = document.getElementById('modalVehicle')?.value.trim();
  const service = document.getElementById('modalServiceSelect')?.value;
  const date = document.getElementById('modalPreferredDate')?.value;
  const notes = document.getElementById('modalNotes')?.value.trim();

  if (!name || !phone || !vehicle || !service) {
    showToast('Please provide your Name, Phone, Vehicle, and Service');
    return;
  }

  const rawNumber = window.WellproConfig ? window.WellproConfig.contact.whatsappRaw : '919876543210';

  const text = `*Private Studio Session Reservation - Well Protection Car Care*\n\n` +
    `👤 *Client Name:* ${name}\n` +
    `📱 *Contact:* ${phone}\n` +
    `🏎️ *Vehicle:* ${vehicle}\n` +
    `🛡️ *Service Package:* ${service}\n` +
    (date ? `📅 *Target Date:* ${date}\n` : '') +
    (notes ? `📝 *Special Instructions:* ${notes}\n` : '');

  const waUrl = `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
  closeBookingModal();
  document.getElementById('modalBookingForm')?.reset();
};

/* ==========================================================================
   12. Toast Notification System
   ========================================================================== */
function showToast(message) {
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMessage');

  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}
window.showToast = showToast;

/* ==========================================================================
   13. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

