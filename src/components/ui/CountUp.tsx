"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a numeric value from 0 to its target when scrolled into view.
 * Accepts strings like "100+", "5.0★", "100%" — preserves prefix/suffix and decimals.
 */
export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState<string>(value);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    setDisplay(`${prefix}${(0).toFixed(decimals)}${suffix}`);

    let started = false;
    const duration = 1400;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        const current = (target * eased).toFixed(decimals);
        setDisplay(`${prefix}${current}${suffix}`);
        if (p < 1) requestAnimationFrame(tick);
        else setDisplay(value);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            run();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
