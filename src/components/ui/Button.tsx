import React from "react";
import Link from "next/link";

type ButtonVariant = "gold" | "outline" | "white" | "dark";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  gold: "bg-[#C9A84C] hover:bg-[#A07830] text-black font-semibold transition-colors duration-200",
  outline:
    "border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black font-semibold transition-colors duration-200",
  white: "bg-white hover:bg-gray-100 text-black font-semibold transition-colors duration-200",
  dark: "bg-black hover:bg-gray-900 text-white font-semibold border border-gray-700 transition-colors duration-200",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "gold",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-none ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
