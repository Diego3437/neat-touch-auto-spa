import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${
          light ? "text-white" : "text-black"
        }`}
        style={{ fontFamily: "var(--font-playfair, serif)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""} ${
            light ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
