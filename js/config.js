/**
 * WELLPRO (Well Protection Car Care) - Official Business Configuration
 * Easily update business contact details, social links, and working hours here.
 */

const WellproConfig = {
  brand: {
    name: "WELLPRO",
    fullName: "Well Protection Car Care",
    shortName: "WELLPRO",
    tagline: "We Protect • We Care",
    subtitle: "Master Automotive Protection & Detailing Studio",
    logo: "./assets/images/logo.jpg"
  },
  contact: {
    phone: "+91 98765 43210",
    phoneRaw: "+919876543210",
    whatsapp: "+91 98765 43210",
    whatsappRaw: "919876543210",
    email: "contact@wellprotectioncarcare.com",
    address: {
      line1: "Well Protection Car Care Studio",
      line2: "Automotive Luxury Hub, Sector 14",
      city: "Kochi",
      state: "Kerala, India",
      pincode: "682001",
      full: "Well Protection Car Care Studio, Automotive Luxury Hub, Premium Car Boulevard, Kochi, Kerala"
    },
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Automotive%20Detailing%20Studio&t=&z=13&ie=UTF8&iwloc=&output=embed",
    workingHours: {
      weekday: "Monday - Saturday: 9:00 AM - 7:30 PM",
      weekend: "Sunday: By Exclusive Appointment Only"
    }
  },
  social: {
    instagram: "https://instagram.com/wellprotectioncarcare",
    facebook: "https://facebook.com/wellprotectioncarcare",
    youtube: "https://youtube.com/@wellprotectioncarcare",
    whatsapp: "https://wa.me/919876543210"
  },
  services: [
    {
      id: "graphene",
      name: "Graphene Coating (10H)",
      badge: "10H Thermal Armor",
      tagline: "High thermal dispersion reduced graphene oxide formulation resisting water spots and high heat",
      priceRange: "Starting from ₹19,999",
      durability: "5 - 7 Years Warranty",
      turnaround: "2 - 3 Days"
    },
    {
      id: "ceramic",
      name: "Ceramic Coating (9H)",
      badge: "Liquid Quartz Crystal",
      tagline: "9H diamond hardness molecular quartz coating with deep candy reflections",
      priceRange: "Starting from ₹14,999",
      durability: "3 - 5 Years Warranty",
      turnaround: "2 Days"
    },
    {
      id: "ppf",
      name: "Paint Protection Film (PPF)",
      badge: "Self-Healing Armor",
      tagline: "Self-healing 200-micron TPU film shield against stone chips & highway abrasions",
      priceRange: "Starting from ₹65,000",
      durability: "Up to 10 Years Warranty",
      turnaround: "3 - 5 Business Days"
    },
    {
      id: "interior-sanitization",
      name: "Interior Sanitization",
      badge: "Hospital-Grade Hygiene",
      tagline: "140°C dry-vapor steam extraction, ozone sterilization, and leather feeding",
      priceRange: "Starting from ₹5,999",
      durability: "Factory-Fresh Matte Feel",
      turnaround: "4 - 6 Hours"
    },
    {
      id: "engine-beautification",
      name: "Engine Beautification",
      badge: "Showroom Precision",
      tagline: "Precision steam degreasing with non-greasy anti-static protective dressing",
      priceRange: "Starting from ₹2,999",
      durability: "Long-Lasting Satin Luster",
      turnaround: "2 - 3 Hours"
    },
    {
      id: "rodent-repellent",
      name: "Rodent Repellent",
      badge: "Wire Harness Protection",
      tagline: "Specialized dual-action defense against rodent infestation and wire damage",
      priceRange: "Starting from ₹2,499",
      durability: "6-Month Protective Shield",
      turnaround: "2 Hours"
    },
    {
      id: "retail-products",
      name: "Retail Car Care Products",
      badge: "Professional Store",
      tagline: "High-grade shampoos, ceramic boosters, and plush microfibers for retail sale",
      priceRange: "Direct Retail Pricing",
      durability: "Studio Tested",
      turnaround: "Walk-in / Instant Dispatch"
    },
    {
      id: "sale-materials",
      name: "Sale Car Care Local Materials",
      badge: "Studio & Trade Supply",
      tagline: "Distribution of detailing pads, compounding pastes, and equipment for local workshops",
      priceRange: "Wholesale & Retail",
      durability: "Professional Grade",
      turnaround: "In-Stock / Immediate Dispatch"
    }
  ],
  indianCars: [
    "Mahindra Thar / Roxx 4x4",
    "Toyota Fortuner Legender",
    "Tata Safari #DARK Edition",
    "Mahindra XUV700 AdrenoX",
    "Hyundai Creta / Verna",
    "Toyota Innova Hycross"
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = WellproConfig;
}
