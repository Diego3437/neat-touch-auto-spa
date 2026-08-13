import Link from "next/link";
import { MapPin } from "lucide-react";
import { CITIES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ServiceAreaMap() {
  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Service Area"
          title="We Come to You"
          subtitle="Neat Touch Auto Spa serves communities throughout the Chicago suburbs. If you don't see your city, contact us — we may still be able to help."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/service-areas/${city.slug}`}
              className="group flex items-center gap-2 border border-gray-200 hover:border-[#C9A84C] px-4 py-3 transition-all duration-200 hover:shadow-sm"
            >
              <MapPin
                size={14}
                className="text-[#C9A84C] flex-shrink-0 group-hover:scale-110 transition-transform"
              />
              <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">
                {city.name}, IL
              </span>
            </Link>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Also serving surrounding suburbs not listed above. &nbsp;
          <Link href="/contact" className="text-[#C9A84C] hover:underline">
            Contact us
          </Link>{" "}
          to check availability.
        </p>
      </div>
    </section>
  );
}
