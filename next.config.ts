import type { NextConfig } from "next";

// Cities we removed dedicated pages for (based on real lead data). Their old
// URLs are permanently redirected to the general service-areas page so no link
// equity is lost and there are no 404s.
const RETIRED_CITY_SLUGS = [
  "schaumburg",
  "elgin",
  "st-charles",
  "batavia",
  "arlington-heights",
  "barrington",
  "wheaton",
  "highland-park",
];

const nextConfig: NextConfig = {
  async redirects() {
    return RETIRED_CITY_SLUGS.flatMap((slug) => [
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
    ]);
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
