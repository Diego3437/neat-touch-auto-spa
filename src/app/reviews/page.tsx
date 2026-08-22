import type { Metadata } from "next";
import { Star, ExternalLink } from "lucide-react";
import Link from "next/link";
import { REVIEWS, BUSINESS } from "@/lib/constants";
import { CTASection } from "@/components/sections/CTASection";
import { ThumbtackBadgeCard } from "@/components/ui/ThumbtackBadge";
import { Award } from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Customer Reviews | Neat Touch Auto Spa",
  description:
    "Read reviews from real customers of Neat Touch Auto Spa — a Thumbtack Top Pro with 54 five-star reviews. 5-star mobile auto detailing across the Chicago suburbs: Naperville, Aurora, Oswego & more.",
};

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="text-[#C9A84C] fill-[#C9A84C]" />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const avg = BUSINESS.rating.value.toFixed(1);

  return (
    <>
      {/* Hero */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Customer Reviews
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            What Our Customers Say
          </h1>

          {/* Average Rating Display */}
          <div className="inline-flex flex-col items-center gap-2 bg-[#111111] border border-[#C9A84C]/40 px-10 py-6 mt-4">
            <span className="text-5xl font-bold text-[#C9A84C]">{avg}</span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="text-[#C9A84C] fill-[#C9A84C]" />
              ))}
            </div>
            <span className="text-gray-400 text-sm">Average Rating · {BUSINESS.rating.count} Google Reviews</span>
          </div>

          {/* Thumbtack Top Pro trust line */}
          <div className="mt-6">
            <a
              href={BUSINESS.thumbtack.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white hover:border-[#C9A84C] transition-colors"
            >
              <span className="inline-flex items-center gap-1 rounded-full bg-[#C9A84C]/15 px-2 py-0.5 text-[11px] font-semibold text-[#C9A84C]">
                <Award size={11} /> Top Pro
              </span>
              <span className="font-semibold">{BUSINESS.thumbtack.reviews} Five-Star Reviews</span>
              <span className="text-gray-400">on Thumbtack</span>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="border border-gray-200 hover:border-[#C9A84C]/50 p-6 transition-colors duration-200"
              >
                <StarRow count={review.rating} />
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-sm text-black">{review.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{review.meta}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Thumbtack social proof */}
          <div className="mb-6">
            <ThumbtackBadgeCard />
          </div>

          {/* Google CTA */}
          <div className="bg-[#0a0a0a] border border-[#C9A84C]/30 p-8 text-center">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-wider mb-3">
              Google Reviews
            </p>
            <h2
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Read & Leave a Google Review
            </h2>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              We&apos;d love to hear about your experience. Your review helps other Chicago suburbs drivers find us.
            </p>
            <a
              href={BUSINESS.googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#A07830] text-black font-semibold px-8 py-3 transition-colors duration-200"
            >
              View on Google
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
