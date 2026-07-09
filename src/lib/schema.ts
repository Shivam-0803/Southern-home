import { BUSINESS, FAQS, SERVICES, SITE_URL } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    alternateName: BUSINESS.dba,
    description:
      "Southern Home Improvements (Straight Line Fencing of Louisiana) is a licensed and insured fence contractor in Shreveport, LA, building wood, vinyl, chain link, and aluminum fencing, custom gates, decks, and pergolas.",
    url: SITE_URL,
    telephone: BUSINESS.phoneHref.replace("tel:", ""),
    email: BUSINESS.email,
    image: `${SITE_URL}/images/hero/wood-privacy-fence-line-blue-sky-shreveport.jpg`,
    logo: `${SITE_URL}/images/brand/straight-line-fencing-logo.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    areaServed: {
      "@type": "City",
      name: BUSINESS.serviceArea,
    },
    sameAs: [BUSINESS.facebookUrl],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fence Contractor",
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      telephone: BUSINESS.phoneHref.replace("tel:", ""),
    },
    areaServed: BUSINESS.serviceArea,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fencing & Outdoor Structure Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };
}
