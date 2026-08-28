import Link from "next/link";
import { Check } from "lucide-react";

export function FeaturedWork() {
  return (
    <section className="bg-[#0a0a0a] section-padding border-y border-[#C9A84C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Recent Work
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              A Porsche Taycan, Detailed in Naperville
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              No shop, no drop-off. This Porsche Taycan Turbo S got the full treatment right
              at the client&apos;s home in Naperville, IL — interior and exterior — leather
              cleaned and conditioned, carpets and mats detailed, glass and trim finished.
              We bring the same care to every vehicle, from daily drivers to exotics.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Complete interior detail on-site",
                "Leather cleaning & conditioning",
                "Trim, glass & console detailed",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                  <Check size={16} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book"
                className="bg-[#C9A84C] hover:bg-[#E0C47A] text-black font-semibold px-8 py-3 rounded-sm transition-colors"
              >
                Book Your Detail
              </Link>
              <Link
                href="/gallery"
                className="border-2 border-white/25 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-semibold px-8 py-3 rounded-sm transition-colors"
              >
                See More Work
              </Link>
            </div>
          </div>

          {/* Vertical video */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden border border-[#C9A84C]/25 shadow-2xl shadow-black/50">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/video/porsche-taycan-poster.jpg"
              >
                <source src="/video/porsche-taycan.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
