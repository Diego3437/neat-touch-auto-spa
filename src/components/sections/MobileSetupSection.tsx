import { Droplets, Plug, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";

const SETUP_ITEMS = [
  {
    icon: MapPin,
    title: "We Come to Your Location",
    text: "Home driveway, office lot, townhome, condo or apartment community when mobile service is allowed.",
  },
  {
    icon: Droplets,
    title: "Water Access Required",
    text: "A standard outdoor water spigot or hose hookup helps us perform a proper hand wash and rinse.",
  },
  {
    icon: Plug,
    title: "Power Access Required",
    text: "A regular 110V outlet near the vehicle powers vacuums, extractors and professional detailing tools.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Products",
    text: "We bring detailing chemicals, towels, brushes, protection products and the tools needed for the service.",
  },
];

export function MobileSetupSection() {
  return (
    <section className="bg-[#0a0a0a] section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Mobile Setup
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Detail Shop Quality, Right in Your Driveway
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Neat Touch Auto Spa brings a professional mobile detailing setup to drivers across the Chicago suburbs. You do not need to drop off your vehicle or sit in a waiting room. We arrive by appointment, inspect the vehicle, set up safely and perform the service at your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/book"
                className="bg-[#C9A84C] hover:bg-[#A07830] text-black font-semibold px-7 py-3 text-center transition-colors"
              >
                Schedule Mobile Service
              </Link>
              <Link
                href="/faq"
                className="border border-white/20 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-semibold px-7 py-3 text-center transition-colors"
              >
                Read Mobile FAQ
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SETUP_ITEMS.map((item) => (
              <div key={item.title} className="border border-white/10 bg-white/[0.03] p-6">
                <div className="w-11 h-11 bg-[#C9A84C]/10 flex items-center justify-center mb-5">
                  <item.icon size={20} className="text-[#C9A84C]" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
