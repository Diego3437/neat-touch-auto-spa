import { MetadataRoute } from "next";
import { BUSINESS, CITIES, SERVICES } from "@/lib/constants";
import { BLOG_POSTS } from "@/data/blog-posts";

const BASE_URL = "https://www.neattouchautospa.com";
const LAST_MODIFIED = new Date("2026-08-08");
const SITE_IMAGE = `${BASE_URL}${BUSINESS.ogImage}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/services`, priority: 0.9 },
    { url: `${BASE_URL}/pricing`, priority: 0.9 },
    { url: `${BASE_URL}/book`, priority: 0.9 },
    { url: `${BASE_URL}/service-areas`, priority: 0.8 },
    { url: `${BASE_URL}/about`, priority: 0.7 },
    { url: `${BASE_URL}/gallery`, priority: 0.7 },
    { url: `${BASE_URL}/reviews`, priority: 0.7 },
    { url: `${BASE_URL}/contact`, priority: 0.7 },
    { url: `${BASE_URL}/blog`, priority: 0.7 },
    { url: `${BASE_URL}/faq`, priority: 0.7 },
  ].map((page) => ({
    url: page.url,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: page.priority,
    images: [SITE_IMAGE],
  }));

  const cityPages = CITIES.map((city) => ({
    url: `${BASE_URL}/service-areas/${city.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    images: [SITE_IMAGE],
  }));

  const serviceCityPages = SERVICES.flatMap((service) =>
    CITIES.map((city) => ({
      url: `${BASE_URL}/services/${service.id}/${city.slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.75,
      images: [SITE_IMAGE],
    }))
  );

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
    images: [SITE_IMAGE],
  }));

  return [...staticPages, ...cityPages, ...serviceCityPages, ...blogPages];
}
