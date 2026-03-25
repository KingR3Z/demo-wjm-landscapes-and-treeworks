export const client = {
  // Business Details
  name: "WJM Landscapes and Treeworks",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Torquay.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07549 302937",
  email: "",
  website: "",

  // Location
  address: "Torquay",
  city: "Torquay",
  county: "",
  postcode: "",
  basedIn: "Torquay",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "4",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Chris B", rating: 5, text: "The service I had from WJM Garden Services was first rate. They turned up on time, both to quote (others didn’t even bother to do that) and do the actual work. …  ", date: "5 years ago" },
    { name: "Antoinette Wakely", rating: 5, text: "Will Merson, the owner of this company is incompetent, when asked to rectify mistakes he becomes aggressive in a violent nature!!! DO NOT USE THIS COMPANY. ", date: "2 years ago" },
    { name: "carole chick", rating: 5, text: "Very reliable good communications very neat and tidy highly recommendedPositive…  ", date: "5 years ago" },
    { name: "John Atyeo", rating: 5, text: "Top bloke discarded hood job not too expensive ", date: "3 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "WJM Landscapes and Treeworks | Landscaper in Torquay",
    description: "Professional landscaper in Torquay. 5.0-star rated on Google. Call for a free quote.",
  },
};
