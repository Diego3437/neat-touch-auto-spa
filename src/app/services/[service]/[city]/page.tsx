import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, MapPin, Phone } from "lucide-react";
import { BUSINESS, CITIES, SERVICES } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";

export const revalidate = 3600;

interface Props {
  params: Promise<{ service: string; city: string }>;
}

const SERVICE_INTENT_COPY: Record<string, { problem: string; outcome: string; season: string }> = {
  "full-interior": {
    problem: "daily commuting, family errands, coffee spills, crumbs and dust buildup",
    outcome: "a cabin that feels clean, fresh and comfortable again",
    season: "especially after winter salt, spring pollen or a busy summer road trip",
  },
  "full-exterior": {
    problem: "road grime, brake dust, bug residue, water spots and Illinois weather exposure",
    outcome: "glossier paint, cleaner wheels and a protected exterior finish",
    season: "before winter salt season or after long highway driving around the suburbs",
  },
  "interior-deep-clean": {
    problem: "heavy soil, sticky surfaces, stains, odors and neglected interior buildup",
    outcome: "a deeper reset than a standard vacuum-and-wipe service can deliver",
    season: "after winter, after buying a used vehicle or before selling your car",
  },
  "pet-hair-removal": {
    problem: "embedded pet hair trapped in carpets, seat fabric, cargo areas and tight seams",
    outcome: "cleaner upholstery and a vehicle interior that feels easier to maintain",
    season: "after dog park trips, vet visits or frequent rides with pets",
  },
  "seat-shampoo": {
    problem: "cloth seat stains, body oils, food spills and trapped odors",
    outcome: "cleaner, fresher fabric seats with stains treated professionally",
    season: "after spills, family trips, rideshare use or seasonal grime",
  },
  "carpet-extraction": {
    problem: "deep-set dirt, salt stains, mud, food spills and grime in carpets and mats",
    outcome: "cleaner carpets and mats using hot water extraction methods",
    season: "one of the strongest services after Chicago-area winter salt",
  },
  "odor-removal": {
    problem: "smoke, pet, food, mildew and stale interior smells that air fresheners cannot solve",
    outcome: "a cleaner interior with odor sources treated instead of covered up",
    season: "when a vehicle has been closed up, smoked in or exposed to moisture",
  },
  "maintenance-detail": {
    problem: "normal weekly dirt, dust, fingerprints and light exterior contamination",
    outcome: "a consistently clean vehicle without waiting for it to get bad again",
    season: "ideal on a monthly or bi-monthly schedule throughout the year",
  },
  "luxury-vehicle": {
    problem: "sensitive finishes, premium interiors and high-value vehicles that need careful products",
    outcome: "high-end detailing with paint-safe products and careful interior treatment",
    season: "before events, seasonal storage, weekend driving or regular luxury vehicle care",
  },
  "suv-minivan": {
    problem: "larger cabins, third rows, cargo areas, family messes and more surface area",
    outcome: "a thorough detail built for SUVs, minivans and larger family vehicles",
    season: "after sports seasons, road trips, school schedules or winter buildup",
  },
};

function getCity(slug: string) {
  return CITIES.find((city) => city.slug === slug);
}

function getService(slug: string) {
  return SERVICES.find((service) => service.id === slug);
}

function buildFaqs(serviceName: string, cityName: string) {
  return [
    {
      question: `Do you offer ${serviceName.toLowerCase()} in ${cityName}, IL?`,
      answer: `Yes. Neat Touch Auto Spa provides mobile ${serviceName.toLowerCase()} in ${cityName}, IL. We come to your home or office as long as there is access to water and a standard power outlet.`,
    },
    {
      question: `How long does ${serviceName.toLowerCase()} take in ${cityName}?`,
      answer:
        "Timing depends on vehicle size and condition. Most targeted detailing services take 1.5 to 4 hours, while deeper or larger-vehicle jobs can take longer. We confirm the expected time before your appointment.",
    },
    {
      question: `Can you service apartments, condos or offices in ${cityName}?`,
      answer: `Yes, if the property allows mobile service and you can provide water and power access near the vehicle. We regularly serve homes, offices, condos and apartment communities throughout the Chicago suburbs.`,
    },
    {
      question: `How do I book ${serviceName.toLowerCase()} near ${cityName}?`,
      answer:
        "Use the booking form, call us directly, or send a message with your vehicle, location, service requested and preferred date. We confirm appointments within one business day.",
    },
  ];
}

export async function generateStaticParams() {
  return SERVICES.flatMap((service) =>
    CITIES.map((city) => ({
      service: service.id,
      city: city.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getService(serviceSlug);
  const city = getCity(citySlug);

  if (!service || !city) return {};

  const title = `${service.name} in ${city.name}, IL | Mobile Auto Detailing`;

  return buildMetadata({
    title,
    description: `${service.name} in ${city.name}, IL from Neat Touch Auto Spa. Mobile auto detailing at your home or office with professional products, water/power access required.`,
    path: `/services/${service.id}/${city.slug}`,
    keywords: [
      `${service.name} ${city.name} IL`,
      `mobile ${service.name.toLowerCase()} ${city.name}`,
      `${service.name.toLowerCase()} near me`,
      `car detailing ${service.name.toLowerCase()} ${city.name}`,
      ...city.nearby.map((nearby) => `${service.name} ${nearby} IL`),
    ],
  });
}

export default async function LongTailServiceCityPage({ params }: Props) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getService(serviceSlug);
  const city = getCity(citySlug);

  if (!service || !city) notFound();

  const intent = SERVICE_INTENT_COPY[service.id] ?? {
    problem: "vehicle dirt, buildup and everyday wear",
    outcome: "a cleaner vehicle with professional mobile detailing results",
    season: "throughout the year in the Chicago suburbs",
  };
  const faqs = buildFaqs(service.name, city.name);
  const path = `/services/${service.id}/${city.slug}`;
  const pageTitle = `${service.name} in ${city.name}, IL`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessSchema(city.name),
      webPageSchema({
        name: pageTitle,
        description: `${service.name} mobile detailing in ${city.name}, IL and nearby ${city.nearby.join(", ")}.`,
        path,
        city: city.name,
      }),
      serviceSchema({
        name: `${service.name} in ${city.name}, IL`,
        description: service.description,
      }),
      breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: service.name, url: `/services#${service.id}` },
        { name: city.name, url: path },
      ]),
      faqSchema(faqs),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Mobile Detailing Service
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            {service.name} in<br />
            <span className="text-[#C9A84C]">{city.name}, IL</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Neat Touch Auto Spa brings professional {service.name.toLowerCase()} directly to your driveway or workplace in {city.name}. We serve {city.county} and nearby {city.nearby.join(", ")} with appointment-based mobile auto detailing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs text-gray-400">
            {city.zips.map((zip) => (
              <span key={zip} className="border border-white/10 bg-white/5 px-3 py-1.5">
                {zip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.18em] mb-3">
                Why Drivers Book This Service
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-black mb-5"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                Built for {city.name} Drivers Dealing With {intent.problem}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                {service.description} This service is a strong fit for drivers in {city.name} who want {intent.outcome}, {intent.season}. Instead of driving to a shop or waiting around, you get professional mobile detailing at your location.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We bring professional products and equipment. You provide access to a water spigot and a standard 110V outlet near the vehicle. That setup lets us perform a proper mobile detail without cutting corners.
              </p>
            </div>

            <div className="bg-[#0a0a0a] text-white p-6 h-fit">
              <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-semibold mb-4">
                <MapPin size={16} />
                Service Area
              </div>
              <h3 className="font-semibold text-lg mb-3">{city.name} and Nearby</h3>
              <ul className="space-y-2 text-sm text-gray-400 mb-6">
                {city.nearby.map((nearby) => (
                  <li key={nearby}>{nearby}, IL</li>
                ))}
              </ul>
              <Link
                href="/book"
                className="block bg-[#C9A84C] hover:bg-[#A07830] text-black text-center font-semibold px-5 py-3 transition-colors"
              >
                Book This Service
              </Link>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="mt-3 flex items-center justify-center gap-2 border border-white/20 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-semibold px-5 py-3 transition-colors"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.18em] mb-3">
                What's Included
              </p>
              <h2
                className="text-3xl font-bold text-black mb-6"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                {service.name} Checklist
              </h2>
              <ul className="space-y-3">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.18em] mb-3">
                Local FAQ
              </p>
              <h2
                className="text-3xl font-bold text-black mb-6"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                Questions About {service.name} in {city.name}
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="bg-white border border-gray-200 p-5">
                    <h3 className="font-semibold text-black mb-2">{faq.question}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Ready in {city.name}?
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Book {service.name} at Your Home or Office
          </h2>
          <p className="text-gray-400 mb-8">
            Tell us your vehicle, location and preferred date. We will confirm availability and pricing before your appointment.
          </p>
          <Link
            href="/book"
            className="inline-block bg-[#C9A84C] hover:bg-[#A07830] text-black font-semibold px-10 py-4 transition-colors"
          >
            Request Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
