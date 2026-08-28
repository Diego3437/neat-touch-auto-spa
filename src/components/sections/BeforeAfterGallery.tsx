import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const WORK = [
  {
    src: "/gallery/porsche-exterior.jpg",
    label: "Porsche Taycan in Naperville",
    alt: "White Porsche Taycan Turbo S detailed on-site in a Naperville, IL driveway",
  },
  {
    src: "/gallery/porsche-front.jpg",
    label: "Exotic Interior Care",
    alt: "Clean black leather interior and dashboard of a Porsche Taycan",
  },
  {
    src: "/gallery/porsche-backseat.jpg",
    label: "Every Seat, Every Detail",
    alt: "Detailed black leather rear seats and Porsche floor mats in a Porsche Taycan",
  },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {WORK.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 4) * 90}
              className="group relative overflow-hidden rounded-lg border border-gray-800"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-[#C9A84C] text-[10px] font-semibold uppercase tracking-widest block mb-0.5">
                    Interior Detail
                  </span>
                  <p className="text-white text-xs font-medium leading-tight">{item.label}</p>
                </div>
              </div>
            </Reveal>
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
