"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Item = { src: string; label: string; alt: string };

export function GalleryLightbox({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + items.length) % items.length),
    [items.length]
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  const active = items[index];

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((item, i) => (
          <button
            key={item.src}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="group relative overflow-hidden rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
            aria-label={`Open ${item.label}`}
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                <span className="text-[#C9A84C] text-[10px] font-semibold uppercase tracking-widest block mb-0.5">
                  Detail
                </span>
                <p className="text-white text-xs font-medium leading-tight">{item.label}</p>
              </div>
              <div className="absolute inset-0 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/10 transition-colors" />
            </div>
          </button>
        ))}
      </div>

      {open && active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={close}
        >
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-[#C9A84C] transition-colors"
            onClick={close}
            aria-label="Close"
          >
            <X size={30} />
          </button>
          <button
            className="absolute left-4 sm:left-8 text-white/80 hover:text-[#C9A84C] transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            className="absolute right-4 sm:right-8 text-white/80 hover:text-[#C9A84C] transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>

          <div
            className="relative w-full max-w-3xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
              priority
            />
            <div className="absolute -bottom-9 left-0 right-0 text-center">
              <p className="text-white text-sm font-medium">{active.label}</p>
              <p className="text-gray-400 text-xs mt-0.5">
                {index + 1} / {items.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
