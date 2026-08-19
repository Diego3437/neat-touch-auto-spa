import { Star, Award } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

function Stars({ size = 14 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} className="text-[#C9A84C] fill-[#C9A84C]" />
      ))}
    </span>
  );
}

/**
 * Compact inline trust pill — for hero trust bars and tight spaces.
 */
export function ThumbtackBadgeInline() {
  const { reviews, url, topPro } = BUSINESS.thumbtack;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:border-[#C9A84C] transition-colors"
    >
      <Stars size={13} />
      <span className="font-semibold">{reviews}+ Five-Star Reviews</span>
      <span className="text-gray-400">on Thumbtack</span>
      {topPro && (
        <span className="inline-flex items-center gap-1 rounded-full bg-[#C9A84C]/15 px-2 py-0.5 text-[11px] font-semibold text-[#C9A84C]">
          <Award size={11} /> Top Pro
        </span>
      )}
    </a>
  );
}

/**
 * Full card — for the Reviews page and other feature spots.
 */
export function ThumbtackBadgeCard() {
  const { reviews, rating, url, topPro } = BUSINESS.thumbtack;
  return (
    <div className="rounded-2xl border border-[#C9A84C]/30 bg-[#0b0b0b] p-8 text-center">
      {topPro && (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C9A84C]/15 px-3 py-1 text-xs font-semibold text-[#C9A84C] mb-4">
          <Award size={13} /> Thumbtack Top Pro
        </span>
      )}
      <div className="flex items-center justify-center gap-2 mb-3">
        <Stars size={22} />
      </div>
      <p className="text-3xl font-bold text-white mb-1">
        {rating.toFixed(1)} · {reviews} Five-Star Reviews
      </p>
      <p className="text-gray-400 text-sm mb-6">
        Rated {rating.toFixed(1)} out of 5 by {reviews} customers on Thumbtack
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-semibold px-8 py-3 rounded-sm transition-colors duration-200"
      >
        See our reviews on Thumbtack
      </a>
    </div>
  );
}
