"use client";

import { useEffect, useState } from "react";
import { X, Sparkles, CheckCircle } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "56ba689b-6331-4ca9-bb30-70ea8681d8e3";

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("exitPopupDismissed")) return;

    const timer = setTimeout(() => setVisible(true), 8000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) setVisible(true);
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  function dismiss() {
    localStorage.setItem("exitPopupDismissed", "true");
    setVisible(false);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Quote Request (popup) — Neat Touch Auto Spa",
          from_name: "Neat Touch Auto Spa Website",
          botcheck: fd.get("botcheck") || "",
          email: fd.get("email"),
          phone: fd.get("phone"),
          source: "Exit-intent quote popup",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        localStorage.setItem("exitPopupDismissed", "true");
      } else {
        setError("Something went wrong. Please call or text (464) 249-0177.");
      }
    } catch {
      setError("Something went wrong. Please call or text (464) 249-0177.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={dismiss} />

      <div className="relative z-10 bg-[#111111] border border-[#C9A84C] rounded-2xl max-w-md w-full p-8">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {sent ? (
          <div className="text-center py-4">
            <CheckCircle size={48} className="text-[#C9A84C] mx-auto mb-4" />
            <h2
              className="text-white text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              You&apos;re all set!
            </h2>
            <p className="text-gray-400 text-sm">
              We&apos;ll reach out shortly with your free quote. Prefer to talk now? Call or text{" "}
              <span className="text-[#C9A84C] font-semibold">(464) 249-0177</span>.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles size={26} className="text-[#C9A84C]" />
              </div>
              <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-2">
                No Pressure
              </p>
              <h2
                className="text-white text-2xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                Not Ready to Book?
                <br />
                Get a Free Quote
              </h2>
              <p className="text-gray-500 text-sm mt-3">
                Leave your email and we&apos;ll reach out with a personalized quote for your
                interior detail — no obligation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full bg-[#0a0a0a] border border-gray-700 focus:border-[#C9A84C] text-white px-4 py-3 text-sm outline-none transition-colors placeholder-gray-600 rounded-lg"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone (optional)"
                className="w-full bg-[#0a0a0a] border border-gray-700 focus:border-[#C9A84C] text-white px-4 py-3 text-sm outline-none transition-colors placeholder-gray-600 rounded-lg"
              />
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={submitting}
                className="bg-[#C9A84C] hover:bg-[#E0C47A] disabled:opacity-60 text-black font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                {submitting ? "Sending…" : "Get My Free Quote"}
              </button>
              {error && <p className="text-red-400 text-xs text-center">{error}</p>}
              <button
                type="button"
                onClick={dismiss}
                className="text-gray-600 hover:text-gray-400 text-xs underline transition-colors"
              >
                No thanks
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
