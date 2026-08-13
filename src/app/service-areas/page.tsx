import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { CITIES } from "@/lib/constants";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Service Areas | Mobile Auto Detailing Chicago Suburbs | Neat Touch Auto Spa",
  description:
    "Mobile auto detailing service areas across the Chicago suburbs, including Schaumburg, Elgin, St. Charles, Geneva, Naperville, Arlington Heights, Barrington, Dundee, Wheaton and Highland Park.",
  path: "/service-areas",
  keywords: [
    "mobile auto detailing service areas Chicago suburbs",
    "car detailing Schaumburg Elgin Naperville",
    "mobile detailing Arlington Heights Wheaton",
  ],
});

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              name: "Mobile Auto Detailing Service Areas",
              description:
                "Neat Touch Auto Spa provides mobile auto detailing throughout the Chicago suburbs with city-specific service pages for local search.",
              path: "/service-areas",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Service Areas", url: "/service-areas" },
            ])
          ),
        }}
      />
      {/* Hero */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Where We Serve
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Chicago Suburbs<br />Service Areas
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We bring premium mobile auto detailing to communities throughout the Chicago metropolitan suburbs. Select your city to learn more.
          </p>
        </div>
      </section>

      {/* City Grid */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="group border border-gray-200 hover:border-[#C9A84C] p-6 transition-all duration-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#C9A84C]/10 group-hover:bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <MapPin size={18} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <h2 className="text-black font-semibold text-lg group-hover:text-[#C9A84C] transition-colors">
                        {city.name}
                      </h2>
                      <p className="text-gray-500 text-sm">Illinois</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-gray-300 group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all mt-1"
                  />
                </div>
                <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                  Mobile auto detailing in {city.name}, IL, serving {city.county} plus nearby {city.nearby.slice(0, 2).join(" and ")}.
                </p>
                <p className="text-gray-400 text-xs mt-3">
                  ZIP codes: {city.zips.join(", ")}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 border border-gray-200 p-8 text-center">
            <p className="text-gray-700 font-medium mb-2">Don&apos;t see your city?</p>
            <p className="text-gray-500 text-sm mb-4">
              We serve many areas beyond our listed cities. Contact us to check availability in your location.
            </p>
            <Link
              href="/contact"
              className="bg-[#C9A84C] hover:bg-[#A07830] text-black font-semibold px-6 py-2.5 text-sm transition-colors duration-200 inline-block"
            >
              Check My Area
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
