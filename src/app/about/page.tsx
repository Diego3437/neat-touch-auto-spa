import type { Metadata } from "next";
import { Heart, Award, Users, MapPin } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { CITIES } from "@/lib/constants";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About Us | Neat Touch Auto Spa",
  description:
    "Learn about Neat Touch Auto Spa — a premium mobile auto detailing company serving the Chicago suburbs. Our mission, values, and commitment to your vehicle.",
};

const VALUES = [
  {
    icon: Award,
    title: "Quality Without Compromise",
    desc: "We use professional-grade products and equipment on every job — the same tools trusted by high-end detailing studios, delivered to your driveway.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    desc: "Every vehicle we touch gets our full attention. We treat your car the way we'd treat our own — with respect, precision, and pride in the result.",
  },
  {
    icon: Users,
    title: "True Convenience",
    desc: "We built our business around your schedule. You shouldn't have to rearrange your day to get your car detailed. We come to you, on your terms.",
  },
  {
    icon: MapPin,
    title: "Community Roots",
    desc: "We're a local, suburban business — not a franchise. We're invested in the communities we serve and the relationships we build with our customers.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Our Story
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            About Neat Touch Auto Spa
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A premium mobile auto detailing company built on the belief that every driver deserves a clean, beautiful vehicle — without the inconvenience of dropping it off somewhere.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
            <h2
              className="text-3xl font-bold text-black"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              How We Started
            </h2>
            <p>
              Neat Touch Auto Spa was born from a simple frustration: getting a truly professional car detail should not require an appointment weeks away, a car drop-off, and half a lost day waiting in a shop.
            </p>
            <p>
              We set out to change that for drivers throughout the Chicago suburbs. We built a fully mobile operation — professional-grade equipment, premium products, and trained detailers who come directly to your home, office, or anywhere your vehicle happens to be.
            </p>
            <p>
              Since day one, our focus has been on delivering the quality of a high-end detail studio with the convenience of a service that fits around your life. Not the other way around.
            </p>

            <h2
              className="text-3xl font-bold text-black pt-6"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Our Mission
            </h2>
            <p>
              To bring the luxury auto detailing experience directly to every driver in the Chicago suburbs — making it accessible, convenient, and consistently exceptional. We believe your vehicle deserves professional care, and you deserve to not have to go out of your way to get it.
            </p>

            <h2
              className="text-3xl font-bold text-black pt-6"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              The Mobile Difference
            </h2>
            <p>
              Our mobile setup is not a compromise — it&apos;s an upgrade. We arrive with everything needed: professional pressure washers, extraction machines, premium detailing products, and all the tools required for a complete, thorough job. You don&apos;t need to provide anything other than access to water and a standard electrical outlet.
            </p>
            <p>
              No crowded parking lots. No waiting areas. No risk of door dings from other vehicles. Just a professional detail performed in the comfort of your own driveway.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0a0a0a] section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              What We Stand For
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-[#111111] border border-gray-800 hover:border-[#C9A84C]/40 p-8 transition-colors duration-200">
                <div className="w-12 h-12 bg-[#C9A84C]/10 flex items-center justify-center mb-5">
                  <v.icon size={22} className="text-[#C9A84C]" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-white section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Where We Work
          </p>
          <h2
            className="text-3xl font-bold text-black mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Proudly Serving the Chicago Suburbs
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We operate throughout the Chicago metropolitan suburbs. Our service area includes:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {CITIES.map((city) => (
              <span
                key={city.slug}
                className="border border-[#C9A84C]/40 text-gray-700 text-sm px-4 py-2"
              >
                {city.name}, IL
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Placeholder */}
      <section className="bg-[#0a0a0a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Our Team at Work", "Professional Equipment", "Serving the Suburbs"].map((label) => (
              <div
                key={label}
                className="h-56 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-end p-4"
              >
                <span className="text-gray-400 text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Experience the Difference?"
        subtitle="Book your first mobile detail and see why Chicago suburbs drivers choose Neat Touch."
      />
    </>
  );
}
