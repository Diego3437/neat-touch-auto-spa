import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function StickyMobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-gray-800 flex">
      <a
        href={`tel:${BUSINESS.phone}`}
        className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-semibold text-sm border-r border-gray-800 hover:bg-gray-900 transition-colors"
      >
        <Phone size={18} />
        Call Now
      </a>
      <Link
        href="/book"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#C9A84C] text-black font-semibold text-sm hover:bg-[#A07830] transition-colors"
      >
        <Calendar size={18} />
        Book Now
      </Link>
    </div>
  );
}
