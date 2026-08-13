import Link from "next/link";
import { Sofa, Car, Sparkles, Dog, Wind, Star, Armchair, RefreshCw, Truck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sofa,
  Car,
  Sparkles,
  Dog,
  Wind,
  Star,
  Armchair,
  RefreshCw,
  Truck,
};

const HIGHLIGHTS = [
  {
    icon: "Sofa",
    title: "Full Interior Detail",
    desc: "Vacuum, deep surface clean, interior windows, trim and air freshener — spotless inside.",
  },
  {
    icon: "Sparkles",
    title: "Interior Deep Cleaning",
    desc: "Heavy-duty cleaning for neglected interiors — steam, extraction, and stain treatment.",
  },
  {
    icon: "Wind",
    title: "Carpet & Seat Shampoo",
    desc: "Hot-water extraction lifts deep-set dirt and stains from carpets and fabric seats.",
  },
  {
    icon: "Star",
    title: "Leather Cleaning & Conditioning",
    desc: "Gentle cleaning and conditioning to protect and revive your leather surfaces.",
  },
  {
    icon: "Dog",
    title: "Pet Hair Removal",
    desc: "Specialized tools to extract every embedded strand from seats, carpets, and crevices.",
  },
  {
    icon: "Wind",
    title: "Odor Removal & Ozone",
    desc: "Ozone treatment combined with deep cleaning permanently eliminates odors at the source.",
  },
];

export function ServiceHighlights() {
  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Premium Detailing Services"
          subtitle="Every service is performed by professionals using industry-grade products and equipment — delivered directly to your location."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || Car;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group relative h-full border border-gray-100 hover:border-[#C9A84C]/60 p-8 rounded-lg bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A84C]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-12 h-12 bg-[#C9A84C]/10 group-hover:bg-[#C9A84C] rounded-lg flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon size={22} className="text-[#C9A84C] group-hover:text-black transition-colors duration-300" />
                  </div>
                  <h3 className="text-black font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="border-2 border-black hover:border-[#C9A84C] hover:text-[#C9A84C] text-black font-semibold px-8 py-3 transition-colors duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
