import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  gold?: boolean;
}

export function Card({ children, className = "", dark = false, gold = false }: CardProps) {
  const base = "rounded-none transition-all duration-300";
  const theme = gold
    ? "bg-[#1a1a1a] border border-[#C9A84C] hover:border-[#E0C47A] hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]"
    : dark
    ? "bg-[#111111] border border-gray-800 hover:border-gray-600"
    : "bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md";

  return <div className={`${base} ${theme} ${className}`}>{children}</div>;
}
