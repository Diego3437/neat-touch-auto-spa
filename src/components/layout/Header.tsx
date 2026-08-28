"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-[#C9A84C]/20 shadow-lg shadow-black/30"
          : "bg-black border-b border-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span
              className="flex items-center justify-center w-9 h-9 rounded-md bg-gradient-to-br from-[#E0C47A] to-[#C9A84C] text-black font-black text-sm leading-none tracking-tight shadow-sm shadow-[#C9A84C]/30 group-hover:scale-105 transition-transform"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
              aria-hidden="true"
            >
              NT
            </span>
            <div className="flex flex-col leading-none">
              <span
                className="text-white text-lg font-bold tracking-tight"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                Neat Touch
              </span>
              <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.15em]">
                Auto Spa
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="underline-grow text-gray-300 hover:text-[#C9A84C] text-sm font-medium transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 text-gray-300 hover:text-[#C9A84C] text-sm transition-colors"
            >
              <Phone size={14} />
              {BUSINESS.phone}
            </a>
            <Link
              href="/book"
              className="shine bg-[#C9A84C] hover:bg-[#E0C47A] text-black text-sm font-semibold px-5 py-2 rounded-sm transition-colors duration-200"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#C9A84C] py-2 text-base font-medium transition-colors border-b border-gray-900"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="bg-white text-black text-center font-semibold py-3"
              >
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/book"
                className="bg-[#C9A84C] text-black text-center font-semibold py-3"
                onClick={() => setMobileOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
