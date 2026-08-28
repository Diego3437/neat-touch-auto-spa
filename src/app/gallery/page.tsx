import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { CTASection } from "@/components/sections/CTASection";
import { GalleryLightbox } from "@/components/sections/GalleryLightbox";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Detailing Gallery | Neat Touch Auto Spa",
  description:
    "See real interior detailing results from Neat Touch Auto Spa — mobile auto detailing delivered to driveways across the Chicago suburbs.",
  path: "/gallery",
  keywords: ["car detailing before after", "interior detailing photos", "mobile detailing gallery"],
});

const GALLERY_ITEMS = [
  {
    src: "/gallery/porsche-exterior.jpg",
    label: "Porsche Taycan detailed in Naperville",
    alt: "White Porsche Taycan Turbo S detailed on-site in a Naperville, IL driveway",
  },
  {
    src: "/gallery/porsche-front.jpg",
    label: "Exotic interior care",
    alt: "Clean black leather interior and dashboard of a Porsche Taycan",
  },
  {
    src: "/gallery/porsche-backseat.jpg",
    label: "Every seat, every detail",
    alt: "Detailed black leather rear seats and Porsche floor mats in a Porsche Taycan",
  },
  {
    src: "/gallery/merc-exterior.jpg",
    label: "We come to your driveway",
    alt: "White Mercedes GLB detailed on-site in a Chicago suburbs driveway",
  },
  {
    src: "/gallery/merc-front.jpg",
    label: "Premium interior care",
    alt: "Detailed cream leather front seats and wood trim in a Mercedes GLB",
  },
  {
    src: "/gallery/merc-backseat.jpg",
    label: "Back seats like new",
    alt: "Clean cream leather back seats of a Mercedes GLB detailed by Neat Touch Auto Spa",
  },
  {
    src: "/gallery/ford-front.jpg",
    label: "Front interior, deep cleaned",
    alt: "Ford Edge front seats and dashboard after interior detailing",
  },
  {
    src: "/gallery/ford-backseat.jpg",
    label: "Rear seats refreshed",
    alt: "Ford Edge black leather back seats cleaned by Neat Touch Auto Spa",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Our Work
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Detailing Gallery
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real interior details from real vehicles — performed on-site across the Chicago suburbs.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryLightbox items={GALLERY_ITEMS} />

          <p className="text-center text-gray-500 text-sm mt-10">
            More photos added after every detail.{" "}
            <Link href="/book" className="text-[#C9A84C] font-semibold hover:underline">
              Book yours
            </Link>{" "}
            and see the results for yourself.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
