import type { NextConfig } from "next";

// Cities we removed dedicated pages for (based on real lead data). Both their
// landing and per-service URLs are permanently redirected to /service-areas.
const RETIRED_CITY_SLUGS = [
  "elgin",
  "st-charles",
  "batavia",
  "arlington-heights",
  "barrington",
  "wheaton",
  "highland-park",
];

// Cities with a landing page but no per-service pages: keep the landing live,
// but redirect any /services/:service/[city] URL back to the city landing.
const LANDING_ONLY_CITY_SLUGS = ["schaumburg"];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...RETIRED_CITY_SLUGS.flatMap((slug) => [
        {
          source: `/service-areas/${slug}`,
          destination: "/service-areas",
          permanent: true,
        },
        {
          source: `/services/:service/${slug}`,
          destination: "/service-areas",
          permanent: true,
        },
      ]),
      ...LANDING_ONLY_CITY_SLUGS.map((slug) => ({
        source: `/services/:service/${slug}`,
        destination: `/service-areas/${slug}`,
        permanent: true,
      })),
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    minimumCacheTTL: 60,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/(.*)\\.(jpg|jpeg|png|gif|ico|svg|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
