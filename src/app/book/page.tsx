import { BookingForm } from "@/components/sections/BookingForm";
import { AlertCircle, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Book a Mobile Detail | Neat Touch Auto Spa",
  description:
    "Book mobile interior auto detailing in the Chicago suburbs. Neat Touch Auto Spa comes to your home or office for interior detailing, deep cleaning, carpet & seat shampoo, pet hair removal and more — plus optional exterior add-ons.",
  path: "/book",
  keywords: [
    "book mobile auto detailing Chicago suburbs",
    "schedule car detailing Naperville",
    "mobile detail appointment near me",
  ],
});

export default function BookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              name: "Book Mobile Auto Detailing",
              description:
                "Schedule a mobile auto detailing appointment with Neat Touch Auto Spa in the Chicago suburbs.",
              path: "/book",
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
              { name: "Book", url: "/book" },
            ])
          ),
        }}
      />
      {/* Hero */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Schedule Your Detail
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Book Your Mobile Detail
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Fill out the form below and we&apos;ll contact you within one business day to confirm your appointment.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#0a0a0a] section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Fast-track: call or text */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#C9A84C]/10 border border-[#C9A84C]/40 rounded-lg px-5 py-4 mb-6">
            <p className="text-white text-sm sm:text-base font-medium text-center sm:text-left">
              Prefer an instant answer? <span className="text-gray-400">Call or text us and we&apos;ll get you scheduled fast.</span>
            </p>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E0C47A] text-black font-semibold px-6 py-3 rounded-sm transition-colors"
            >
              <Phone size={18} />
              {BUSINESS.phone}
            </a>
          </div>

          {/* Water/Power note */}
          <div className="flex items-start gap-3 bg-amber-950/30 border border-amber-900/50 px-5 py-4 mb-8">
            <AlertCircle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-amber-300 text-sm">
              <strong>Important:</strong> Our mobile service requires access to a water spigot (garden hose connection) and a standard 110V electrical outlet at your service location.
            </p>
          </div>

          <BookingForm />
        </div>
      </section>
    </>
  );
}
