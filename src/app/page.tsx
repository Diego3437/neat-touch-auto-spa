import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { ServiceHighlights } from "@/components/sections/ServiceHighlights";
import { MobileSetupSection } from "@/components/sections/MobileSetupSection";
import { BeforeAfterGallery } from "@/components/sections/BeforeAfterGallery";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { RealBeforeAfter } from "@/components/sections/RealBeforeAfter";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { CTASection } from "@/components/sections/CTASection";
import { ExitIntentPopup } from "@/components/sections/ExitIntentPopup";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Mobile Auto Detailing in Naperville & Chicago Suburbs | Neat Touch Auto Spa",
  description:
    "Premium mobile interior auto detailing in Naperville, Aurora, Oswego, Lombard, Glenview, Deerfield and the Chicago suburbs. Interior detailing, deep cleaning, carpet & seat shampoo, leather care, pet hair and odor removal at your home.",
  path: "",
  keywords: [
    "mobile auto detailing Chicago suburbs",
    "car detailing Naperville IL",
    "mobile detailing near me",
    "auto detail Aurora IL",
    "mobile car detailing Naperville IL",
    "interior detailing Chicago suburbs",
  ],
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              name: "Mobile Auto Detailing Chicago Suburbs",
              description:
                "Premium mobile auto detailing for drivers throughout Naperville, Aurora, Oswego, Lombard, Glenview, Deerfield and nearby Chicago suburbs.",
              path: "",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Home", url: "/" }])
          ),
        }}
      />
      <HeroSection />
      <TrustBadges />
      <ServiceHighlights />
      <MobileSetupSection />
      <BeforeAfterGallery />
      <FeaturedWork />
      <RealBeforeAfter />
      <ServiceAreaMap />
      <ReviewsSection dark />
      <CTASection />
      <ExitIntentPopup />
    </>
  );
}
