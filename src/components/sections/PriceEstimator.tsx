"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { BUSINESS, PRICING } from "@/lib/constants";

// Same Web3Forms key used by the contact/booking forms — notifies the owner.
const WEB3FORMS_ACCESS_KEY = "56ba689b-6331-4ca9-bb30-70ea8681d8e3";

const num = (s: string) => parseInt(s.replace(/[^0-9]/g, ""), 10) || 0;

const VEHICLE_LABEL: Record<string, string> = { sedan: "Sedan", suv: "SUV / Truck / Minivan" };
const PKG_LABEL: Record<string, string> = {
  interior: "Interior Only",
  combo: "Interior + Exterior",
};

// Base prices pulled from the real pricing table.
const BASE = {
  interior: { sedan: num(PRICING[0].sedanPrice), suv: num(PRICING[0].suvPrice) },
  combo: { sedan: num(PRICING[1].sedanPrice), suv: num(PRICING[1].suvPrice) },
};

// Condition modifiers applied to the base price (owner-adjustable).
const CONDITION = {
  light: { lo: 0, hi: 0.1, label: "Light", desc: "Regular upkeep" },
  moderate: { lo: 0.1, hi: 0.25, label: "Moderate", desc: "Some stains or buildup" },
  heavy: { lo: 0.25, hi: 0.4, label: "Heavy", desc: "Pet hair, heavy stains, neglected" },
} as const;

type Vehicle = "sedan" | "suv";
type Pkg = "interior" | "combo";
type Condition = keyof typeof CONDITION;

const round10 = (n: number) => Math.round(n / 10) * 10;

function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string; sub?: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`flex-1 min-w-[110px] rounded-lg border px-3 py-3 text-center transition-colors ${
                active
                  ? "border-[#C9A84C] bg-[#C9A84C]/10 text-black"
                  : "border-gray-200 bg-white text-gray-600 hover:border-[#C9A84C]/50"
              }`}
            >
              <span className="block text-sm font-semibold leading-tight">{opt.label}</span>
              {opt.sub && <span className="block text-[11px] text-gray-500 mt-0.5">{opt.sub}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function PriceEstimator() {
  const [vehicle, setVehicle] = useState<Vehicle>("sedan");
  const [pkg, setPkg] = useState<Pkg>("interior");
  const [condition, setCondition] = useState<Condition>("light");

  const base = BASE[pkg][vehicle];
  const mod = CONDITION[condition];
  const low = round10(base * (1 + mod.lo));
  const high = round10(base * (1 + mod.hi));
  const estimateText = high > low ? `$${low}–$${high}` : `$${low}`;

  // Notify the owner (fire-and-forget) with the estimate the visitor saw, so it
  // can be matched to the Jobber booking that follows moments later.
  function notifyOwner() {
    try {
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        keepalive: true,
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Estimate ${estimateText} — ${VEHICLE_LABEL[vehicle]} · ${PKG_LABEL[pkg]} · ${CONDITION[condition].label}`,
          from_name: "Neat Touch Price Estimator",
          Estimate: estimateText,
          Vehicle: VEHICLE_LABEL[vehicle],
          Package: PKG_LABEL[pkg],
          Condition: CONDITION[condition].label,
          When: new Date().toLocaleString("en-US"),
          Note: "A visitor clicked Book Now from the price estimator. A Jobber booking may follow within a minute — match them by time.",
          botcheck: "",
        }),
      }).catch(() => {});
    } catch {
      /* never block the booking redirect */
    }
  }

  return (
    <section className="bg-gray-50 section-padding border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Instant Estimate
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-black"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Get Your Price in Seconds
          </h2>
          <p className="text-gray-500 mt-3">
            Answer three quick questions to see an estimated price range before you book.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6">
            <Segmented<Vehicle>
              label="Vehicle type"
              value={vehicle}
              onChange={setVehicle}
              options={[
                { value: "sedan", label: "Sedan" },
                { value: "suv", label: "SUV / Truck", sub: "or Minivan" },
              ]}
            />
            <Segmented<Pkg>
              label="Package"
              value={pkg}
              onChange={setPkg}
              options={[
                { value: "interior", label: "Interior Only" },
                { value: "combo", label: "Interior + Exterior" },
              ]}
            />
            <Segmented<Condition>
              label="Condition"
              value={condition}
              onChange={setCondition}
              options={(Object.keys(CONDITION) as Condition[]).map((k) => ({
                value: k,
                label: CONDITION[k].label,
                sub: CONDITION[k].desc,
              }))}
            />
          </div>

          {/* Result */}
          <div className="mt-8 rounded-xl bg-[#0a0a0a] p-6 text-center">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Estimated price</p>
            <p className="text-4xl md:text-5xl font-bold gold-text-gradient">
              {estimateText}
            </p>
            <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
              This is an estimate. Your final price is confirmed on-site based on your vehicle&apos;s
              actual size and condition — no surprises.
            </p>
            <a
              href={BUSINESS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={notifyOwner}
              className="mt-6 inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E0C47A] text-black font-semibold px-8 py-3.5 rounded-sm transition-colors"
            >
              Book Now
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
