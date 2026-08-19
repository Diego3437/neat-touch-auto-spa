import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { Analytics } from "@vercel/analytics/next";
import { BUSINESS, SEO_KEYWORDS } from "@/lib/constants";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.neattouchautospa.com"),
  title: {
    default: `${BUSINESS.name} | Mobile Auto Detailing Chicago Suburbs`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Premium mobile interior auto detailing in the Chicago suburbs. Neat Touch Auto Spa comes to your home or office for interior detailing, deep cleaning, carpet & seat shampoo, leather care, pet hair removal and odor removal — plus optional exterior add-ons.",
  keywords: SEO_KEYWORDS,
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name, url: BUSINESS.url }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  category: "Automotive",
  alternates: {
    canonical: BUSINESS.url,
  },
  verification: {
    google: "BABAG6XGcfmSxy_nB9m0TBfu9Rqh1Ieisevk5es_fIU",
  },
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
    title: `${BUSINESS.name} | Mobile Auto Detailing Chicago Suburbs`,
    description:
      "Professional mobile auto detailing at your home or office in Schaumburg, Elgin, Naperville, Arlington Heights, Wheaton and surrounding Chicago suburbs.",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: BUSINESS.ogImage,
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} mobile auto detailing in the Chicago suburbs`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Mobile Auto Detailing Chicago Suburbs`,
    description:
      "Premium mobile auto detailing serving Schaumburg, Elgin, Naperville, Arlington Heights and nearby Chicago suburbs.",
    images: [BUSINESS.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [localBusinessSchema(), websiteSchema()],
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileBar />
        <Analytics />
      </body>
    </html>
  );
}
