import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "dark" | "outline";
  className?: string;
}

export function Badge({ children, variant = "gold", className = "" }: BadgeProps) {
  const variants = {
    gold: "bg-[#C9A84C] text-black",
    dark: "bg-[#1a1a1a] text-[#C9A84C] border border-[#C9A84C]",
    outline: "bg-transparent text-[#C9A84C] border border-[#C9A84C]",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
