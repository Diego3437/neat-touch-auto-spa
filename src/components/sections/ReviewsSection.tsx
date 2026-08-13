import Link from "next/link";
import { Star } from "lucide-react";
import { REVIEWS, BUSINESS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-[#C9A84C] fill-[#C9A84C]" />
      ))}
    </div>
  );
}

interface ReviewsProps {
  limit?: number;
  dark?: boolean;
}

export function ReviewsSection({ limit = 4, dark = false }: ReviewsProps) {
  const displayed = REVIEWS.slice(0, limit);
  const bg = dark ? "bg-[#0a0a0a]" : "bg-gray-50";
  const cardBg = dark ? "bg-[#111111] border-gray-800" : "bg-white border-gray-200";
  const namColor = dark ? "text-white" : "text-black";
  const textColor = dark ? "text-gray-400" : "text-gray-600";
  const metaColor = dark ? "text-gray-600" : "text-gray-400";

  return (
    <section className={`${bg} section-padding`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Reviews"
          title="What Our Customers Say"
          subtitle="Real reviews from real customers across the Chicago suburbs."
          light={dark}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {displayed.map((review) => (
            <div
              key={review.name}
              className={`border ${cardBg} p-6 hover:border-[#C9A84C]/40 transition-colors duration-200`}
            >
              <StarRating count={review.rating} />
              <p className={`mt-4 text-sm leading-relaxed ${textColor}`}>&ldquo;{review.text}&rdquo;</p>
              <div className="mt-4 pt-4 border-t border-gray-100/10">
                <p className={`font-semibold text-sm ${namColor}`}>{review.name}</p>
                <p className={`text-xs mt-0.5 ${metaColor}`}>{review.meta}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={BUSINESS.googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A84C] hover:bg-[#A07830] text-black font-semibold px-8 py-3 transition-colors duration-200"
          >
            Read Google Reviews
          </a>
          {limit < REVIEWS.length && (
            <Link
              href="/reviews"
              className="border-2 border-gray-700 hover:border-[#C9A84C] text-gray-300 hover:text-[#C9A84C] font-semibold px-8 py-3 transition-colors duration-200"
            >
              View All Reviews
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
