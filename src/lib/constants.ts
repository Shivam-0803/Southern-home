export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://straightlinefencingla.com";

export const BUSINESS = {
  name: "Straight Line Fencing Of Louisiana",
  tagline: "Fence Contractor Shreveport, Louisiana",
  category: "Fence Contractor",
  phone: "(318) 423-8696",
  phoneHref: "tel:+13184238696",
  smsHref: "sms:+13184238696",
  email: "straightlinefencingla@gmail.com",
  emailHref: "mailto:straightlinefencingla@gmail.com",
  website: "straightlinefencingla.com",
  addressLocality: "Shreveport",
  addressRegion: "LA",
  addressCountry: "US",
  serviceArea: "Shreveport, Louisiana",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Shreveport,+Louisiana&output=embed",
  mapShareUrl: "https://maps.google.com/?q=Shreveport,+Louisiana",
  googlePlaceId: "ChIJ0Ur20_FZJ4YRQ2QZtpkz_kI",
  googleReviewsUrl: "https://maps.app.goo.gl/rkDi8tmw1fujbaGn9",
  facebookUrl: "https://www.facebook.com/StraightLineFencingLouisiana",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "wood-privacy-fencing",
    title: "Wood Privacy",
    description:
      "Classic cedar and pine privacy fencing built board by board for total backyard privacy and a warm, natural look.",
    icon: "wood",
  },
  {
    slug: "vinyl-privacy-fencing",
    title: "Vinyl Privacy",
    description:
      "Low-maintenance vinyl privacy fencing that holds its color and shape through Louisiana heat, humidity, and storms.",
    icon: "vinyl",
  },
  {
    slug: "chain-link-fencing",
    title: "Chain Link",
    description:
      "Durable galvanized chain link for yards, pet enclosures, ball fields, and commercial properties that need to last.",
    icon: "chainlink",
  },
  {
    slug: "aluminum-fencing",
    title: "Aluminum",
    description:
      "Ornamental aluminum fencing for pools and front yards, powder-coated and finished for a clean, upscale edge.",
    icon: "aluminum",
  },
  {
    slug: "custom-entry-gates",
    title: "Gates & Entry Gates",
    description:
      "Custom-fabricated entry and driveway gates, hand-welded and fitted to match your fence line and hardware.",
    icon: "gate",
  },
  {
    slug: "decks-pergolas",
    title: "Decks & Pergolas",
    description:
      "Outdoor decks and pergolas built to extend your living space, framed and finished with the same straight-line precision.",
    icon: "deck",
  },
];

export type WhyChooseItem = {
  title: string;
  description: string;
  icon: string;
};

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    title: "Years of Experience",
    description:
      "A hands-on crew that has built and repaired fences across Shreveport in every material and every kind of Louisiana weather.",
    icon: "history",
  },
  {
    title: "Quality Craftsmanship",
    description:
      "Every post, panel, and gate is set plumb and true — straight lines, solid hardware, and finishes that hold up over time.",
    icon: "hammer",
  },
  {
    title: "Licensed & Insured",
    description:
      "Fully licensed and insured for residential and commercial fencing projects, so your property is protected start to finish.",
    icon: "shield",
  },
  {
    title: "Free Estimates",
    description:
      "We walk your property, talk through materials and layout, and give you a clear, no-pressure estimate at no cost.",
    icon: "clipboard",
  },
  {
    title: "Customer Satisfaction",
    description:
      "We stand behind our work and treat every yard like our own — clear communication from the first call to the final walkthrough.",
    icon: "heart",
  },
  {
    title: "Locally Owned & Operated",
    description:
      "Based in Shreveport and proud to serve our neighbors with fencing built for real Louisiana homes and properties.",
    icon: "mapPin",
  },
];

export type FaqItem = { question: string; answer: string };

export const FAQS: FaqItem[] = [
  {
    question: "What areas around Shreveport, LA do you serve?",
    answer:
      "Straight Line Fencing Of Louisiana is based in Shreveport, Louisiana and serves the greater Shreveport area for residential and commercial fencing projects.",
  },
  {
    question: "What types of fences do you install?",
    answer:
      "We install wood privacy fencing, vinyl privacy fencing, chain link, and ornamental aluminum fencing, along with custom entry gates, decks, and pergolas.",
  },
  {
    question: "Do you offer free estimates on fence installations?",
    answer:
      "Yes. We provide free, no-pressure estimates for every project. We'll walk your property, discuss materials and layout, and give you clear pricing before any work begins.",
  },
  {
    question: "Are you a licensed and insured fence contractor?",
    answer:
      "Yes, we are a licensed and insured fence contractor serving Shreveport, LA, covering both residential and commercial fencing work.",
  },
  {
    question: "How long does a typical fence installation take?",
    answer:
      "Most residential fence installations are completed within a few days, depending on the length of the fence line, the material chosen, and current weather conditions. We'll give you a project timeline as part of your estimate.",
  },
  {
    question: "Do I need a permit to install a fence in Shreveport, LA?",
    answer:
      "Permit and setback requirements can vary by neighborhood, parish, and HOA. As part of your project, we can help you understand what applies to your property and handle the details of your installation.",
  },
  {
    question: "Which fence material is best for privacy?",
    answer:
      "Wood and vinyl privacy fencing are the most popular choices for full backyard privacy. Wood offers a classic, natural look, while vinyl requires less long-term maintenance. We can help you compare both during your free estimate.",
  },
  {
    question: "Can you build a fence around a pool?",
    answer:
      "Yes. Ornamental aluminum fencing is a popular choice for pool areas because it's durable, low-maintenance, and gives an open, upscale look while still enclosing the space.",
  },
  {
    question: "Do you build custom gates to match an existing fence?",
    answer:
      "Yes. We hand-fabricate entry and driveway gates to match your existing fence line, material, and hardware for a seamless finish.",
  },
  {
    question: "Do you also build decks and pergolas?",
    answer:
      "Yes. In addition to fencing, we build decks and pergolas designed to extend your outdoor living space with the same attention to detail we bring to every fence line.",
  },
];

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "wood-privacy-fence-backyard",
    src: "/images/gallery/wood-privacy-fence-backyard-01.jpg",
    alt: "Freshly built cedar wood privacy fence along a Shreveport, LA backyard",
    category: "Wood Privacy",
  },
  {
    id: "wood-privacy-fence-crew-install",
    src: "/images/gallery/wood-privacy-fence-crew-install-01.jpg",
    alt: "Straight Line Fencing crew installing a wood privacy fence panel",
    category: "Wood Privacy",
  },
  {
    id: "estate-fence-installation-wide",
    src: "/images/gallery/estate-fence-installation-wide-01.jpg",
    alt: "Wide estate-style fence installation across a large Louisiana property",
    category: "Fence Installation",
  },
  {
    id: "aluminum-fence-spray-finish",
    src: "/images/gallery/aluminum-fence-spray-finish-01.jpg",
    alt: "Fence contractor spray-finishing a black ornamental aluminum fence",
    category: "Aluminum",
  },
  {
    id: "custom-gate-welding-fabrication",
    src: "/images/gallery/custom-gate-welding-fabrication-01.jpg",
    alt: "Custom entry gate being hand-welded and fabricated",
    category: "Gates",
  },
  {
    id: "chain-link-fence-ballfield-night-01",
    src: "/images/gallery/chain-link-fence-ballfield-night-01.jpg",
    alt: "Galvanized chain link fence installed along a ball field at night",
    category: "Chain Link",
  },
  {
    id: "chain-link-fence-ballfield-night-02",
    src: "/images/gallery/chain-link-fence-ballfield-night-02.jpg",
    alt: "Chain link fence with yellow cap rail along a sports field",
    category: "Chain Link",
  },
  {
    id: "fence-installation-in-progress",
    src: "/images/gallery/fence-installation-in-progress-01.jpg",
    alt: "Fence installation in progress with equipment trailer on site",
    category: "Fence Installation",
  },
];

export const TESTIMONIAL_PLATFORMS = [
  {
    name: "Google Reviews",
    description:
      "See what customers across Shreveport are saying about our fence installations on Google.",
    href: BUSINESS.googleReviewsUrl,
    icon: "google",
  },
  {
    name: "Facebook Reviews",
    description:
      "Follow our latest projects and read customer feedback on Facebook.",
    href: BUSINESS.facebookUrl,
    icon: "facebook",
  },
];
