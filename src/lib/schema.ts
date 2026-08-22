import { BUSINESS, CITIES, SERVICES, REVIEWS } from "./constants";

const BUSINESS_ID = `${BUSINESS.url}/#business`;
const WEBSITE_ID = `${BUSINESS.url}/#website`;
const imageUrl = `${BUSINESS.url}${BUSINESS.ogImage}`;
const logoUrl = `${BUSINESS.url}${BUSINESS.logo}`;

/**
 * Rich LocalBusiness / AutoDetailing schema with geo, service area,
 * aggregate rating, reviews and offer catalog. This is the single most
 * important block for local SEO and Google rich results.
 */
export function localBusinessSchema(city?: string) {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoWash", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: BUSINESS.name,
    image: imageUrl,
    logo: logoUrl,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    url: BUSINESS.url,
    priceRange: BUSINESS.priceRange,
    foundingDate: BUSINESS.founded,
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Venmo, Zelle",
    address: {
      "@type": "PostalAddress",
      addressLocality: city || "Schaumburg",
      addressRegion: "IL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: CITIES.map((c) => ({
      "@type": "City",
      name: `${c.name}, IL`,
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.geo.latitude,
        longitude: BUSINESS.geo.longitude,
      },
      geoRadius: BUSINESS.serviceRadiusMiles * 1609,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      ...Object.values(BUSINESS.social).filter((u) => !u.startsWith("[")),
      BUSINESS.thumbtack.url,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    review: REVIEWS.slice(0, 5).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.text,
    })),
    makesOffer: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, description: s.shortDesc },
    })),
    description:
      "Neat Touch Auto Spa provides premium mobile interior auto detailing throughout the Chicago suburbs, including Naperville, Aurora, Oswego, Lombard, Glenview, Deerfield and surrounding areas. We specialize in interior detailing — deep cleaning, carpet and seat shampoo, leather care, pet hair and odor removal — brought directly to your home or office, with optional exterior add-ons.",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: BUSINESS.url,
    name: BUSINESS.name,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: `${BUSINESS.url}/service-areas?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function webPageSchema({
  name,
  description,
  path,
  city,
}: {
  name: string;
  description: string;
  path: string;
  city?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BUSINESS.url}${path}#webpage`,
    url: `${BUSINESS.url}${path}`,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
    },
    inLanguage: "en-US",
    ...(city
      ? {
          contentLocation: {
            "@type": "City",
            name: `${city}, IL`,
          },
        }
      : {}),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Service schema with provider linked to the LocalBusiness entity */
export function serviceSchema(service: {
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BUSINESS.url}/services#${service.name.toLowerCase().replaceAll(" ", "-")}`,
    serviceType: service.name,
    name: service.name,
    description: service.description,
    provider: { "@id": BUSINESS_ID },
    areaServed: CITIES.map((c) => ({ "@type": "City", name: `${c.name}, IL` })),
  };
}

/** Aggregated catalog of all services offered */
export function servicesCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${BUSINESS.url}/services#catalog`,
    name: "Mobile Auto Detailing Services",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.shortDesc,
        provider: { "@id": BUSINESS_ID },
      },
    })),
  };
}

/** Breadcrumb trail — improves SERP appearance and crawl context */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BUSINESS.url}${item.url}`,
    })),
  };
}

export function blogPostingSchema({
  title,
  description,
  slug,
  date,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: imageUrl,
    url: `${BUSINESS.url}/blog/${slug}`,
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BUSINESS.url}/blog/${slug}` },
    author: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
  };
}
