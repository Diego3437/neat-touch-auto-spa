import { Star, MapPin, ShieldCheck } from "lucide-react";

const BADGES = [
  {
    icon: Star,
    label: "5-Star Google Reviews",
    sub: "Consistently top-rated across the suburbs",
  },
  {
    icon: MapPin,
    label: "Fully Mobile Service",
    sub: "We come to your home, office, or anywhere",
  },
  {
    icon: ShieldCheck,
    label: "100% Satisfaction Focused",
    sub: "We don't leave until you're thrilled",
  },
];

export function TrustBadges() {
  return (
    <section className="bg-[#111111] border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-800">
          {BADGES.map((badge) => (
            <div
              key={badge.label}
              className="bg-[#111111] flex flex-col md:flex-row items-center md:items-start gap-4 p-6 text-center md:text-left"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#C9A84C]/10 rounded-full flex items-center justify-center">
                <badge.icon size={22} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="text-white font-semibold text-base mb-1">{badge.label}</p>
                <p className="text-gray-500 text-sm">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
