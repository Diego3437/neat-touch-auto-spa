import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

const WORK = [
  {
    src: "/gallery/merc-exterior.jpg",
    label: "We Come to Your Driveway",
    alt: "White Mercedes GLB detailed on-site in a Chicago suburbs driveway",
  },
  {
    src: "/gallery/merc-front.jpg",
    label: "Premium Interior Care",
    alt: "Detailed cream leather front seats and wood trim in a Mercedes GLB",
  },
  {
    src: "/gallery/merc-backseat.jpg",
    label: "Back Seats Like New",
    alt: "Clean cream leather back seats of a Mercedes GLB detailed by Neat Touch Auto Spa",
  },
  {
    src: "/gallery/ford-front.jpg",
    label: "Front Interior, Deep Cleaned",
    alt: "Ford Edge front seats and dashboard after interior detailing",
  },
  {
    src: "/gallery/ford-backseat.jpg",
    label: "Rear Seats Refreshed",
    alt: "Ford Edge black leather back seats cleaned by Neat Touch Auto Spa",
  },
];

export function BeforeAfterGallery() {
  return (
    <section className="bg-[#0a0a0a] section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Work"
          title="Real Results, Real Vehicles"
          subtitle="A look at recent interior details delivered right in our customers' driveways across the Chicago suburbs."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {WORK.map((item) => (
            <div
              key={item.src}
              className="group relative overflow-hidden rounded-lg border border-gray-800"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[#C9A84C] text-[11px] font-semibold uppercase tracking-widest block mb-1">
                    Interior Detail
                  </span>
                  <p className="text-white text-sm font-medium">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-block border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-semibold px-8 py-3 rounded-sm transition-colors duration-200"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
