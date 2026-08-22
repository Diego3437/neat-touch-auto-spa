import Link from "next/link";
import { Phone, Mail, Clock, MapPin, Award } from "lucide-react";
import { BUSINESS, CITIES } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span
                className="text-white text-xl font-bold block"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                Neat Touch
              </span>
              <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.15em]">
                Auto Spa
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Premium mobile auto detailing serving the Chicago suburbs. We bring the detail shop to your driveway.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
                <Phone size={14} /> {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
                <Mail size={14} /> {BUSINESS.email}
              </a>
              <div className="flex items-center gap-2">
                <Clock size={14} /> {BUSINESS.hours}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} /> Chicago Suburbs, IL
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21.9v-7.9h2.66l.4-3.09h-3.06V8.94c0-.9.25-1.5 1.53-1.5h1.63V4.67c-.28-.04-1.25-.12-2.38-.12-2.36 0-3.97 1.44-3.97 4.08v2.28H7.17v3.09h2.77v7.9h3.56z" />
                </svg>
              </a>
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={BUSINESS.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                  <path d="M16.5 3c.31 2.09 1.62 3.58 3.6 3.79v2.4c-1.2.1-2.3-.29-3.6-1.02v6.62c0 3.38-2.48 5.81-5.7 5.81-3 0-5.3-2.29-5.3-5.2 0-3 2.42-5.2 5.6-5.02v2.63c-.39-.12-.8-.19-1.2-.19-1.42 0-2.4 1.01-2.4 2.48 0 1.5 1 2.52 2.42 2.52 1.5 0 2.48-1.14 2.48-2.9V3h1.5z" />
                </svg>
              </a>
            </div>
            {/* Thumbtack Top Pro */}
            <a
              href={BUSINESS.thumbtack.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-xs text-gray-400 hover:text-[#C9A84C] transition-colors"
            >
              <Award size={13} className="text-[#C9A84C]" />
              <span>Thumbtack Top Pro · {BUSINESS.thumbtack.reviews} five-star reviews</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "About Us", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Reviews", href: "/reviews" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
                { label: "Book Now", href: "/book" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#C9A84C] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: "Full Interior Detail", href: "/services/full-interior/naperville" },
                { label: "Exterior Add-Ons", href: "/services/exterior-addons/naperville" },
                { label: "Interior Deep Cleaning", href: "/services/interior-deep-clean/naperville" },
                { label: "Pet Hair Removal", href: "/services/pet-hair-removal/naperville" },
                { label: "Seat Shampoo", href: "/services/seat-shampoo/naperville" },
                { label: "Carpet Extraction", href: "/services/carpet-extraction/naperville" },
                { label: "Odor Removal", href: "/services/odor-removal/naperville" },
                { label: "Leather Cleaning & Conditioning", href: "/services/leather-care/naperville" },
              ].map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-[#C9A84C] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {CITIES.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/service-areas/${city.slug}`}
                    className="hover:text-[#C9A84C] transition-colors"
                  >
                    {city.name}, IL
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>&copy; {year} {BUSINESS.name}. All rights reserved.</p>
          <p>Mobile Auto Detailing · Chicago Suburbs, Illinois</p>
        </div>
      </div>
    </footer>
  );
}
