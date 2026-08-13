"use client";

import { useState, FormEvent } from "react";
import { CheckCircle } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const WEB3FORMS_ACCESS_KEY = "56ba689b-6331-4ca9-bb30-70ea8681d8e3";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(fd: FormData) {
    const e: Record<string, string> = {};
    if (!fd.get("name")) e.name = "Full name is required.";
    if (!fd.get("phone")) e.phone = "Phone number is required.";
    if (!fd.get("email")) e.email = "Email is required.";
    if (!fd.get("vehicleYear")) e.vehicleYear = "Vehicle year is required.";
    if (!fd.get("vehicleMake")) e.vehicleMake = "Vehicle make is required.";
    if (!fd.get("vehicleModel")) e.vehicleModel = "Vehicle model is required.";
    if (!fd.get("address")) e.address = "Service address is required.";
    return e;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const errs = validate(fd);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setSubmitError("");

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New Booking Request — Neat Touch Auto Spa",
      from_name: "Neat Touch Auto Spa Website",
      botcheck: fd.get("botcheck") || "",
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      vehicle: `${fd.get("vehicleYear") ?? ""} ${fd.get("vehicleMake") ?? ""} ${fd.get("vehicleModel") ?? ""}`.trim(),
      vehicle_size: fd.get("vehicleSize"),
      service_requested: fd.get("service"),
      preferred_time: fd.get("preferredTime"),
      preferred_date: fd.get("preferredDate"),
      service_address: fd.get("address"),
      heard_about_us: fd.get("referral"),
      notes: fd.get("notes"),
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
        setSubmitError(
          "Something went wrong sending your request. Please call or text us at (464) 249-0177."
        );
      }
    } catch {
      setSubmitError(
        "Something went wrong sending your request. Please call or text us at (464) 249-0177."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-4">
        <CheckCircle size={60} className="text-[#C9A84C] mb-6" />
        <h2
          className="text-3xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-playfair, serif)" }}
        >
          Booking Request Received!
        </h2>
        <p className="text-gray-400 max-w-md leading-relaxed">
          Thank you for reaching out. We&apos;ll review your request and contact you within one business day to confirm your appointment.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-[#0a0a0a] border border-gray-700 focus:border-[#C9A84C] text-white px-4 py-3 text-sm outline-none transition-colors placeholder-gray-600";
  const labelClass = "block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5";
  const errClass = "text-red-400 text-xs mt-1";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Contact Info */}
      <div>
        <h3 className="text-white font-semibold text-base mb-4 pb-2 border-b border-gray-800">
          Contact Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className={labelClass}>Full Name *</label>
            <input name="name" type="text" placeholder="Jane Smith" className={inputClass} />
            {errors.name && <p className={errClass}>{errors.name}</p>}
          </div>
          <div>
            <label className={labelClass}>Phone *</label>
            <input name="phone" type="tel" placeholder="(555) 000-0000" className={inputClass} />
            {errors.phone && <p className={errClass}>{errors.phone}</p>}
          </div>
          <div>
            <label className={labelClass}>Email *</label>
            <input name="email" type="email" placeholder="jane@example.com" className={inputClass} />
            {errors.email && <p className={errClass}>{errors.email}</p>}
          </div>
        </div>
      </div>

      {/* Vehicle Info */}
      <div>
        <h3 className="text-white font-semibold text-base mb-4 pb-2 border-b border-gray-800">
          Vehicle Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className={labelClass}>Year *</label>
            <input name="vehicleYear" type="text" placeholder="2021" className={inputClass} />
            {errors.vehicleYear && <p className={errClass}>{errors.vehicleYear}</p>}
          </div>
          <div>
            <label className={labelClass}>Make *</label>
            <input name="vehicleMake" type="text" placeholder="Honda" className={inputClass} />
            {errors.vehicleMake && <p className={errClass}>{errors.vehicleMake}</p>}
          </div>
          <div>
            <label className={labelClass}>Model *</label>
            <input name="vehicleModel" type="text" placeholder="CR-V" className={inputClass} />
            {errors.vehicleModel && <p className={errClass}>{errors.vehicleModel}</p>}
          </div>
        </div>
        <div>
          <label className={labelClass}>Vehicle Size</label>
          <select name="vehicleSize" className={inputClass}>
            <option value="">Select vehicle size</option>
            <option value="sedan">Sedan / Coupe</option>
            <option value="suv">SUV / Crossover</option>
            <option value="truck">Truck</option>
            <option value="minivan">Minivan</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Service */}
      <div>
        <h3 className="text-white font-semibold text-base mb-4 pb-2 border-b border-gray-800">
          Service Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className={labelClass}>Service Requested</label>
            <select name="service" className={inputClass}>
              <option value="">Select a service</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Preferred Time</label>
            <select name="preferredTime" className={inputClass}>
              <option value="">Select preferred time</option>
              <option value="morning">Morning (8am–12pm)</option>
              <option value="afternoon">Afternoon (12pm–6pm)</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className={labelClass}>Preferred Date</label>
          <input name="preferredDate" type="date" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Service Address *</label>
          <input
            name="address"
            type="text"
            placeholder="123 Main St, Schaumburg, IL 60173"
            className={inputClass}
          />
          {errors.address && <p className={errClass}>{errors.address}</p>}
        </div>
      </div>

      {/* Additional */}
      <div>
        <h3 className="text-white font-semibold text-base mb-4 pb-2 border-b border-gray-800">
          Additional Information
        </h3>
        <div className="mb-4">
          <label className={labelClass}>How did you hear about us?</label>
          <select name="referral" className={inputClass}>
            <option value="">Select an option</option>
            <option value="google">Google Search</option>
            <option value="google-maps">Google Maps</option>
            <option value="social">Social Media</option>
            <option value="referral">Friend / Family Referral</option>
            <option value="nextdoor">Nextdoor</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className={labelClass}>Notes / Special Requests</label>
          <textarea
            name="notes"
            rows={4}
            placeholder="Any details about your vehicle condition, special requests, or questions..."
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Photos (optional)</label>
          <p className="text-gray-500 text-sm">
            For the fastest, most accurate quote, text photos of your vehicle to{" "}
            <a href="tel:4642490177" className="text-[#C9A84C] font-semibold hover:underline">
              (464) 249-0177
            </a>
            .
          </p>
        </div>
      </div>

      {/* Honeypot spam protection */}
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
        className="w-full bg-[#C9A84C] hover:bg-[#A07830] disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold py-4 text-lg transition-colors duration-200"
      >
        {submitting ? "Sending…" : "Submit Booking Request"}
      </button>

      {submitError && (
        <p className="text-red-400 text-sm text-center">{submitError}</p>
      )}

      <p className="text-gray-600 text-xs text-center">
        We&apos;ll contact you within one business day to confirm your appointment.
      </p>
    </form>
  );
}
