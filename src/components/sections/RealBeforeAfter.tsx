import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const TRANSFORMATIONS = [
  { vehicle: "Mercedes-Benz", before: "/gallery/mercedes-before.jpg", after: "/gallery/mercedes-after.jpg" },
  { vehicle: "Tesla Model 3", before: "/gallery/tesla-model-3-black-before.jpg", after: "/gallery/tesla-model-3-black-after.jpg" },
  { vehicle: "Jeep Wagoneer", before: "/gallery/jeep-wagoneer-before.jpg", after: "/gallery/jeep-wagoneer-after.jpg" },
  { vehicle: "Audi", before: "/gallery/audi-before.jpg", after: "/gallery/audi-after.jpg" },
  { vehicle: "Ford Edge", before: "/gallery/ford-edge-before.jpg", after: "/gallery/ford-edge-after.jpg" },
  { vehicle: "Tesla Model 3", before: "/gallery/tesla-model-3-white-before.jpg", after: "/gallery/tesla-model-3-white-after.jpg" },
  { vehicle: "Hyundai Santa Fe", before: "/gallery/hyundai-santa-fe-before.jpg", after: "/gallery/hyundai-santa-fe-after.jpg" },
  { vehicle: "Volvo", before: "/gallery/volvo-before.jpg", after: "/gallery/volvo-after.jpg" },
  { vehicle: "Toyota", before: "/gallery/toyota-before.jpg", after: "/gallery/toyota-after.jpg" },
  { vehicle: "Honda", before: "/gallery/honda-before.jpg", after: "/gallery/honda-after.jpg" },
  { vehicle: "Ford Focus", before: "/gallery/ford-focus-before.jpg", after: "/gallery/ford-focus-after.jpg" },
  { vehicle: "Dodge", before: "/gallery/dodge-before.jpg", after: "/gallery/dodge-after.jpg" },
];

export function RealBeforeAfter() {
  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Before & After"
          title="See The Transformation"
          subtitle="Side-by-side photos from real jobs — no stock photos, no filters. This is what your car looks like after a Neat Touch detail."
        />

        <Reveal className="mb-10 flex justify-center">
          <div className="relative w-full max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden border border-[#C9A84C]/25 shadow-2xl shadow-black/20">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/video/showcase-reel.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRANSFORMATIONS.map((item, i) => (
            <Reveal
              key={item.before}
              delay={(i % 3) * 90}
              className="overflow-hidden rounded-lg border border-gray-200"
            >
              <div className="grid grid-cols-2">
                <div className="relative aspect-square">
                  <Image
                    src={item.before}
                    alt={`${item.vehicle} interior before detailing`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-cover"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white">
                    Before
                  </span>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src={item.after}
                    alt={`${item.vehicle} interior after detailing`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-cover"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-[#C9A84C] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-black">
                    After
                  </span>
                </div>
              </div>
              <p className="px-3 py-2.5 text-sm font-semibold text-black">{item.vehicle}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
