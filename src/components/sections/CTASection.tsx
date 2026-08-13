import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = "Ready for a Spotless Vehicle?",
  subtitle = "Book your mobile detail today. We come to you — anywhere in the Chicago suburbs.",
}: CTASectionProps) {
  return (
    <section className="bg-black border-y border-[#C9A84C]/20 section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          Mobile Detailing — Chicago Suburbs
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-playfair, serif)" }}
        >
          {title}
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="bg-[#C9A84C] hover:bg-[#A07830] text-black font-semibold px-10 py-4 text-lg transition-colors duration-200"
          >
            Book Your Detail
          </Link>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="border-2 border-white hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-semibold px-10 py-4 text-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
