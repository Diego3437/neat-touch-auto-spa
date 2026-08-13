import { Metadata } from "next";
import { BUSINESS, SEO_KEYWORDS } from "./constants";

const BASE_URL = "https://www.neattouchautospa.com";

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title: { absolute: title },
    description,
    keywords: [
      ...SEO_KEYWORDS,
      ...keywords,
    ],
    category: "Automotive",
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS.name,
      type: "website",
      images: [
        {
          url: `${BASE_URL}${BUSINESS.ogImage}`,
          width: 1200,
          height: 630,
          alt: BUSINESS.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
