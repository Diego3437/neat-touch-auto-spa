"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, Clock, MapPin, AlertCircle, CheckCircle } from "lucide-react";
import { BUSINESS, CITIES } from "@/lib/constants";

const WEB3FORMS_ACCESS_KEY = "56ba689b-6331-4ca9-bb30-70ea8681d8e3";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSubmitting(true);
    setSubmitError("");
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New Contact Message — Neat Touch Auto Spa",
      from_name: "Neat Touch Auto Spa Website",
      botcheck: fd.get("botcheck") || "",
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      message: fd.get("message"),
    };
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setSubmitError("Something went wrong. Please call or text (464) 249-0177.");
      }
    } catch {
      setSubmitError("Something went wrong. Please call or text (464) 249-0177.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full bg-[#0a0a0a] border border-gray-700 focus:border-[#C9A84C] text-white px-4 py-3 text-sm outline-none transition-colors placeholder-gray-600";
  const labelClass = "block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5";

  return (
    <>
      {/* Hero */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Get in Touch
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or ready to book? We&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-black text-white p-8 h-full">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  Contact Information
                </h2>

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Phone</p>
                      <a href={`tel:${BUSINESS.phone}`} className="text-white hover:text-[#C9A84C] transition-colors font-medium">
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Email</p>
                      <a href={`mailto:${BUSINESS.email}`} className="text-white hover:text-[#C9A84C] transition-colors font-medium">
                        {BUSINESS.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Hours</p>
                      <p className="text-white text-sm">Mon–Sat: 8:00am–6:00pm</p>
                      <p className="text-gray-500 text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Service Area</p>
                      <p className="text-white text-sm">Chicago Suburbs, IL</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-800 pt-6">
                  <div className="flex items-start gap-2 text-amber-400 text-sm">
                    <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>Note:</strong> We require access to water (garden hose) and a standard 110V electrical outlet at your service location.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">Cities We Serve</p>
                  <div className="flex flex-wrap gap-1.5">
                    {CITIES.map((city) => (
                      <span key={city.slug} className="text-xs text-gray-500 bg-gray-900 px-2 py-1">
                        {city.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                  <CheckCircle size={60} className="text-[#C9A84C] mb-6" />
                  <h2
                    className="text-2xl font-bold text-black mb-3"
                    style={{ fontFamily: "var(--font-playfair, serif)" }}
                  >
                    Message Received!
                  </h2>
                  <p className="text-gray-600 max-w-md">
                    Thank you for contacting us. We&apos;ll respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2
                    className="text-2xl font-bold text-black mb-6"
                    style={{ fontFamily: "var(--font-playfair, serif)" }}
                  >
                    Send Us a Message
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Name *</label>
                      <input name="name" type="text" required placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input name="phone" type="tel" placeholder="(555) 000-0000" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input name="email" type="email" required placeholder="your@email.com" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help you? Tell us about your vehicle and what service you're interested in."
                      className={inputClass}
                    />
                  </div>
                  {/* Honeypot */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#C9A84C] hover:bg-[#A07830] disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold py-3 px-8 transition-colors duration-200"
                  >
                    {submitting ? "Sending…" : "Send Message"}
                  </button>
                  {submitError && <p className="text-red-500 text-sm">{submitError}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
