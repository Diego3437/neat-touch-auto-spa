import Link from "next/link";
import { Phone, ChevronDown, Star, ShieldCheck, MapPin } from "lucide-react";
import { BUSINESS, STATS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-black overflow-hidden grain">
      {/* Animated gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0d0d] to-black" />
      <div
        className="absolute inset-0 opacity-40 animate-gradient-pan"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(201,168,76,0.15), transparent 45%), radial-gradient(circle at 80% 70%, rgba(201,168,76,0.10), transparent 40%)",
        }}
      />

      {/* Floating gold orbs */}
      <div className="absolute top-1/4 right-[15%] w-80 h-80 md:w-96 md:h-96 rounded-full bg-[#C9A84C] opacity-[0.07] blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 left-[12%] w-56 h-56 md:w-72 md:h-72 rounded-full bg-[#C9A84C] opacity-[0.06] blur-3xl pointer-events-none animate-float-slower" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-28 md:py-32">
        {/* Rating badge */}
        <div
          className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-1.5 mb-7"
          style={{ animationDelay: "0ms" }}
        >
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13} className="fill-[#C9A84C] text-[#C9A84C]" />
            ))}
          </div>
          <span className="text-[#E0C47A] text-xs font-semibold tracking-wide">
            Rated {BUSINESS.rating.value.toFixed(1)} by {BUSINESS.rating.count} happy customers
          </span>
        </div>

        <h1
          className="animate-fade-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-playfair, serif)", animationDelay: "80ms" }}
        >
          Premium Mobile{" "}
          <span className="gold-text-gradient">Interior Detailing</span>
          <br className="hidden sm:block" /> at Your Home
        </h1>

        <p
          className="animate-fade-up text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animationDelay: "160ms" }}
        >
          We bring premium interior detailing directly to your driveway across
          Chicago&apos;s affluent suburbs — no waiting rooms, no drop-offs, just a
          spotless, showroom-fresh interior.
        </p>

        <div
          className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
          style={{ animationDelay: "240ms" }}
        >
          <Link
            href="/book"
            className="shine bg-[#C9A84C] hover:bg-[#E0C47A] text-black font-semibold px-10 py-4 text-lg rounded-sm transition-colors duration-200 w-full sm:w-auto text-center shadow-lg shadow-[#C9A84C]/20"
          >
            Book Now
          </Link>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="group border-2 border-white/30 hover:border-[#C9A84C] hover:bg-white/5 text-white font-semibold px-10 py-4 text-lg rounded-sm transition-all duration-200 w-full sm:w-auto text-center flex items-center justify-center gap-2"
          >
            <Phone size={20} className="group-hover:text-[#C9A84C] transition-colors" />
            Call Now
          </a>
        </div>

        {/* Quick trust row */}
        <div
          className="animate-fade-up flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-gray-500 text-sm mb-12"
          style={{ animationDelay: "320ms" }}
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={15} className="text-[#C9A84C]" /> Satisfaction focused
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={15} className="text-[#C9A84C]" /> Serving 11+ suburbs
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <Star size={15} className="text-[#C9A84C]" /> 100% mobile
          </span>
        </div>

        {/* Stats bar */}
        <div
          className="animate-fade-up grid grid-cols-2 sm:grid-cols-4 gap-px max-w-3xl mx-auto rounded-lg overflow-hidden border border-white/10 glass"
          style={{ animationDelay: "400ms" }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="px-4 py-5 text-center">
              <div className="text-2xl md:text-3xl font-bold gold-text-gradient">
                {stat.value}
              </div>
              <div className="text-gray-400 text-[11px] md:text-xs uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={26} className="text-[#C9A84C] opacity-60" />
      </div>
    </section>
  );
}
