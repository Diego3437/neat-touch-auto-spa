import Link from "next/link";
import { Check } from "lucide-react";
import { CITIES, SERVICES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { servicesCatalogSchema, breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/schema";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Auto Detailing Services | Neat Touch Auto Spa",
  description:
    "Full interior detailing, deep cleaning, carpet & seat shampoo, leather care, pet hair removal, odor removal & more — plus optional exterior add-ons. Mobile detailing delivered to your Chicago suburb home.",
  path: "/services",
  keywords: ["car detailing services", "interior detailing", "mobile interior detailing", "pet hair removal"],
});

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@graph": [
                webPageSchema({
                  name: "Mobile Auto Detailing Services",
                  description:
                    "Interior detailing, deep cleaning, carpet extraction, seat shampoo, leather cleaning & conditioning, pet hair removal, odor removal and maintenance — plus optional exterior add-ons.",
                  path: "/services",
                }),
                servicesCatalogSchema(),
                ...SERVICES.map((service) =>
                  serviceSchema({
                    name: service.name,
                    description: service.description,
                  })
                ),
                breadcrumbSchema([
                  { name: "Home", url: "/" },
                  { name: "Services", url: "/services" },
                ]),
              ],
            }
          ),
        }}
      />
      {/* Hero */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            What We Offer
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Our Detailing Services
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional mobile detailing services performed at your location throughout the Chicago suburbs. Every service uses premium products and professional-grade equipment.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="border border-gray-200 hover:border-[#C9A84C] p-8 transition-colors duration-200 group"
              >
                <div className="mb-4">
                  <span className="inline-block bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-semibold uppercase tracking-wider px-3 py-1">
                    Service
                  </span>
                </div>
                <h2
                  className="text-2xl font-bold text-black mb-3 group-hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {service.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div>
                  <p className="text-black font-semibold text-sm uppercase tracking-wider mb-3">
                    What&apos;s Included:
                  </p>
                  <ul className="space-y-2">
                    {service.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check size={14} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-black font-semibold text-xs uppercase tracking-wider mb-3">
                    Popular local pages:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {CITIES.slice(0, 5).map((city) => (
                      <Link
                        key={city.slug}
                        href={`/services/${service.id}/${city.slug}`}
                        className="text-xs border border-gray-200 hover:border-[#C9A84C] text-gray-600 hover:text-[#C9A84C] px-2.5 py-1.5 transition-colors"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Book a Service?"
        subtitle="Choose your service and we'll come to your location anywhere in the Chicago suburbs."
      />
    </>
  );
}
