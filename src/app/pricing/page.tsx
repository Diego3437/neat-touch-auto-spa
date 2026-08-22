import { Check } from "lucide-react";
import { PRICING, ADDONS } from "@/lib/constants";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Pricing | Mobile Auto Detailing | Neat Touch Auto Spa",
  description:
    "Transparent mobile interior auto detailing pricing for the Chicago suburbs. Full interior details from $220 (sedan) and $240 (SUV, truck & minivan). Optional exterior add-ons available on request.",
  path: "/pricing",
  keywords: [
    "mobile auto detailing prices Chicago suburbs",
    "car detailing pricing Naperville",
    "auto detailing packages near me",
    "interior exterior detail price",
  ],
});

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              name: "Mobile Auto Detailing Pricing",
              description:
                "Transparent mobile auto detailing packages and add-on pricing for Chicago suburbs customers.",
              path: "/pricing",
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
              { name: "Pricing", url: "/pricing" },
            ])
          ),
        }}
      />
      {/* Hero */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Transparent Pricing
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Detailing Packages
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Clear, upfront pricing for every service. Final pricing depends on vehicle size and condition — we&apos;ll always confirm before we begin.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Packages"
            title="Choose Your Package"
            subtitle="All services performed at your location. Prices are starting estimates."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {PRICING.map((pkg) => (
              <div
                key={pkg.name}
                className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                  pkg.featured
                    ? "bg-gradient-to-b from-[#161616] to-black border border-[#C9A84C]/60 shadow-[0_25px_60px_-20px_rgba(201,168,76,0.45)] lg:scale-[1.03]"
                    : "bg-white border border-gray-200 hover:border-[#C9A84C]/50 hover:shadow-2xl"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-block gold-gradient text-black text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-[#C9A84C]/40">
                      Most Popular
                    </span>
                  </div>
                )}

                <h2
                  className={`text-xl font-bold mb-5 ${pkg.featured ? "text-white" : "text-black"}`}
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {pkg.name}
                </h2>

                <div className="flex gap-6 mb-6">
                  <div>
                    <p className={`text-xs uppercase tracking-wider mb-1 ${pkg.featured ? "text-gray-400" : "text-gray-500"}`}>
                      Sedan
                    </p>
                    <p className="text-3xl font-bold gold-text-gradient">{pkg.sedanPrice}</p>
                  </div>
                  <div className={`pl-6 border-l ${pkg.featured ? "border-white/15" : "border-gray-200"}`}>
                    <p className={`text-xs uppercase tracking-wider mb-1 ${pkg.featured ? "text-gray-400" : "text-gray-500"}`}>
                      SUV / Truck
                    </p>
                    <p className="text-3xl font-bold gold-text-gradient">{pkg.suvPrice}</p>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-sm ${pkg.featured ? "text-gray-300" : "text-gray-600"}`}
                    >
                      <Check size={15} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="/book"
                  className={`block text-center font-semibold py-3 rounded-lg transition-colors duration-200 ${
                    pkg.featured
                      ? "bg-[#C9A84C] hover:bg-[#E0C47A] text-black shadow-lg shadow-[#C9A84C]/20"
                      : "border-2 border-black hover:bg-black hover:text-white text-black"
                  }`}
                >
                  Book This Package
                </a>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="bg-gray-50 border border-gray-200 p-8">
            <h2
              className="text-2xl font-bold text-black mb-2"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Exterior Add-Ons
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Want a fresh outside too? Add any of these to your interior detail — just ask for a quote when you book.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {ADDONS.map((addon) => (
                <div
                  key={addon.name}
                  className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-3 rounded-lg"
                >
                  <Check size={15} className="text-[#C9A84C] flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-800">{addon.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm italic">
              * Prices are estimates. Final pricing depends on vehicle size, condition, and services selected. Contact us for an exact quote.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Get an Exact Quote"
        subtitle="Not sure which package is right for you? Contact us and we'll recommend the best option for your vehicle."
      />
    </>
  );
}
