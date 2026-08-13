import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Phone } from "lucide-react";
import Link from "next/link";
import { CITIES, SERVICES, BUSINESS } from "@/lib/constants";
import { localBusinessSchema, faqSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";

export const revalidate = 3600;

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return CITIES.map((city) => ({ city: city.slug }));
}

function getCityData(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}

const CITY_INTROS: Record<string, string> = {
  schaumburg:
    "Schaumburg is one of the Chicago area's most vibrant suburbs, with a dense mix of residential neighborhoods, corporate campuses, and busy professionals. Neat Touch Auto Spa brings premium mobile detailing directly to Schaumburg residents — whether you're at home near Woodfield Mall, in a corporate park off I-90, or anywhere else in the village.",
  elgin:
    "Elgin is a diverse and growing suburb on the Fox River, with a rich residential community and active downtown. Neat Touch Auto Spa serves Elgin drivers with professional mobile auto detailing delivered to your home or workplace — no need to drive anywhere.",
  "st-charles":
    "St. Charles is a beautiful Fox Valley community known for its charming downtown and strong residential neighborhoods. Neat Touch Auto Spa serves St. Charles with premium mobile detailing — bringing the full detail experience directly to your property.",
  geneva:
    "Geneva is one of the most picturesque suburbs in the Fox Valley, with tree-lined streets and a thriving community. Neat Touch Auto Spa serves Geneva residents with premium mobile interior detailing performed right in your driveway.",
  batavia:
    "Batavia is a close-knit Fox Valley suburb with a proud community and beautiful residential areas along the Fox River. Neat Touch Auto Spa brings professional mobile detailing directly to Batavia homes and businesses.",
  naperville:
    "Naperville consistently ranks among the best places to live in America, and its residents expect the best. Neat Touch Auto Spa delivers premium mobile auto detailing in Naperville — the quality you expect, at your location.",
  "arlington-heights":
    "Arlington Heights is one of the Northwest suburbs' premier communities, with active neighborhoods and busy commuters. Neat Touch Auto Spa serves Arlington Heights with professional mobile detailing delivered to your home or office.",
  barrington:
    "Barrington is known for its affluent, equestrian character and beautiful estates. Neat Touch Auto Spa brings premium mobile interior detailing to Barrington residents — meticulous care for every vehicle.",
  dundee:
    "The Dundee area — including East and West Dundee along the Fox River — is a welcoming community with dedicated local residents. Neat Touch Auto Spa serves the Dundee area with convenient mobile auto detailing delivered to your door.",
  wheaton:
    "Wheaton is the seat of DuPage County and one of the Chicago area's most established suburbs. Neat Touch Auto Spa brings professional mobile detailing to Wheaton drivers — premium service at your location.",
  "highland-park":
    "Highland Park is a distinguished North Shore suburb known for its beautiful neighborhoods and strong community. Neat Touch Auto Spa serves Highland Park with premium mobile auto detailing — bringing showroom-quality results to your driveway.",
};

const CITY_FAQS: Record<string, { question: string; answer: string }[]> = {
  schaumburg: [
    {
      question: "Do you service vehicles at the Schaumburg Corporate Center or nearby office parks?",
      answer:
        "Yes — we can detail your vehicle at office parks and corporate locations throughout Schaumburg as long as access to water and a standard power outlet is available. Many clients have us come to their workplace while they work.",
    },
    {
      question: "How far in advance do I need to book in Schaumburg?",
      answer:
        "We typically recommend booking 2–4 days in advance for Schaumburg appointments, though last-minute availability is sometimes possible. Contact us to check availability.",
    },
    {
      question: "Can you detail my car at a Schaumburg apartment complex?",
      answer:
        "Absolutely. As long as your complex allows outside service vehicles and you can provide access to a water spigot and an electrical outlet, we can detail your vehicle at your apartment complex.",
    },
    {
      question: "What's the most popular detailing service in Schaumburg?",
      answer:
        "Our Full Interior Detail is our most popular service throughout the Schaumburg area — a complete interior refresh at a great value, with optional exterior add-ons.",
    },
  ],
  elgin: [
    {
      question: "Do you serve all parts of Elgin, including South Elgin?",
      answer:
        "Yes, we serve all areas of Elgin and surrounding communities including South Elgin. Check with us on your specific address if you're in an outlying area.",
    },
    {
      question: "What do I need to provide for service in Elgin?",
      answer:
        "Just access to a standard garden hose spigot (water) and a standard 110V electrical outlet. We bring all equipment and supplies.",
    },
    {
      question: "Can you remove pet hair from my vehicle in Elgin?",
      answer:
        "Absolutely. Pet hair removal is one of our most requested add-on services throughout Elgin. We use specialized tools to extract embedded hair from all upholstery surfaces.",
    },
    {
      question: "How long does a full detail take in Elgin?",
      answer:
        "A Full Interior Detail typically takes about 1.5–2 hours depending on vehicle size and condition. We'll give you a more precise time estimate when you book.",
    },
  ],
  "st-charles": [
    {
      question: "Do you detail vehicles in the St. Charles downtown area?",
      answer:
        "Yes — if you live or work near downtown St. Charles and have access to water and power, we can detail your vehicle there.",
    },
    {
      question: "Can you detail classic or collector cars in St. Charles?",
      answer:
        "Yes. We take extra care with classic and high-value vehicles, using pH-neutral, interior-safe products throughout the cabin.",
    },
    {
      question: "Do you work in cold weather near St. Charles?",
      answer:
        "We operate year-round, though extreme cold (below 32°F) may affect scheduling. We'll let you know if conditions would impact service quality.",
    },
    {
      question: "How do I pay for my detail in St. Charles?",
      answer:
        "We accept payment by credit card, debit card, cash, Venmo, and Zelle. Payment is collected after the service is complete and you're satisfied.",
    },
  ],
  geneva: [
    {
      question: "Do you service luxury vehicles in Geneva?",
      answer:
        "Yes — we take extra care with high-end vehicles, using premium, pH-neutral, interior-safe products. Many Geneva clients trust us with their vehicles.",
    },
    {
      question: "Can you come to my Geneva home on weekends?",
      answer:
        "Yes. We operate Monday through Saturday, 8am–6pm. Weekend appointments are popular — we recommend booking a few days in advance.",
    },
    {
      question: "What's included in your Full Interior Detail for Geneva customers?",
      answer:
        "Our Full Interior Detail includes vacuuming, dashboard and console wipe-down, interior window cleaning, trim dressing, door jamb cleaning, and an air freshener application.",
    },
    {
      question: "How far is Geneva from your main service area?",
      answer:
        "Geneva is fully within our service area. We regularly serve Geneva and all Fox Valley communities with no additional travel fees.",
    },
  ],
  batavia: [
    {
      question: "Do you serve Batavia and the Fox Valley area?",
      answer:
        "Yes — Batavia is one of our core service areas. We serve all parts of Batavia and surrounding Fox Valley communities.",
    },
    {
      question: "Can you remove road salt stains from my vehicle's interior in Batavia?",
      answer:
        "Absolutely. Salt staining on carpets is a common request from Batavia drivers after winter. Our carpet extraction service is specifically designed to remove salt and deep-set staining.",
    },
    {
      question: "Do you offer gift cards for detailing services in Batavia?",
      answer:
        "Yes — we offer gift cards for any service or dollar amount. Contact us to purchase a gift card for someone in the Batavia area.",
    },
    {
      question: "What's your cancellation policy for Batavia appointments?",
      answer:
        "We ask for at least 24 hours notice for cancellations or rescheduling. Weather-related changes are always accommodated at no charge.",
    },
  ],
  naperville: [
    {
      question: "Do you serve all parts of Naperville including North Naperville?",
      answer:
        "Yes, we serve the entire city of Naperville — North Naperville, South Naperville, Downtown, and all surrounding neighborhoods.",
    },
    {
      question: "Can you detail my Tesla or electric vehicle in Naperville?",
      answer:
        "Yes. We detail all vehicle types including Tesla and other EVs. Our products and techniques are appropriate for the unique surfaces and finishes found on modern electric vehicles.",
    },
    {
      question: "Is your pricing for Naperville different from other suburbs?",
      answer:
        "No — our pricing is consistent throughout our service area. There are no travel surcharges for Naperville.",
    },
    {
      question: "Can I get a detail at my Naperville office or business?",
      answer:
        "Absolutely. Many Naperville business clients have us service their vehicles in office parking lots during the workday. We just need water and power access.",
    },
  ],
  "arlington-heights": [
    {
      question: "Do you serve all parts of Arlington Heights?",
      answer:
        "Yes — we serve all of Arlington Heights from downtown near the train station to residential neighborhoods throughout the village.",
    },
    {
      question: "Can you detail my car if I live in a condo or townhome in Arlington Heights?",
      answer:
        "Yes, as long as we can access a water spigot and standard outlet at or near your location. Many condo and townhome communities have these available.",
    },
    {
      question: "Do you offer recurring maintenance detail packages in Arlington Heights?",
      answer:
        "Yes — many Arlington Heights clients book our Maintenance Detail on a monthly or bi-monthly basis. Contact us about setting up a recurring schedule.",
    },
    {
      question: "How soon can I get an appointment in Arlington Heights?",
      answer:
        "We typically have openings within 3–5 days, though last-minute availability is sometimes possible. Book online or call us to check current scheduling.",
    },
  ],
  barrington: [
    {
      question: "Do you offer services appropriate for luxury and exotic vehicles in Barrington?",
      answer:
        "Absolutely — we treat luxury, exotic and collector vehicles with extra care, using only pH-neutral, interior-safe products on your leather, trim and surfaces.",
    },
    {
      question: "Can you detail large vehicles or trucks in Barrington?",
      answer:
        "Absolutely. We offer SUV, truck, and large vehicle pricing. Our service area includes all of Barrington and the surrounding Barrington area communities.",
    },
    {
      question: "Do you work on weekends in Barrington?",
      answer:
        "Yes, we operate Monday through Saturday. Weekend appointments in Barrington fill up quickly — we recommend booking 3–5 days in advance.",
    },
    {
      question: "What do I need to prepare before your team arrives in Barrington?",
      answer:
        "Simply clear out any personal belongings from your vehicle and ensure we have access to water (garden hose connection) and a standard 110V outlet. We handle everything else.",
    },
  ],
  dundee: [
    {
      question: "Do you serve both East and West Dundee?",
      answer:
        "Yes — we serve both East Dundee and West Dundee, as well as Carpentersville and surrounding communities in the area.",
    },
    {
      question: "How long does a standard detail take in the Dundee area?",
      answer:
        "A Full Interior Detail typically takes about 1.5–2 hours. We work efficiently while never cutting corners on quality.",
    },
    {
      question: "Can you help with winter prep detailing in Dundee?",
      answer:
        "Winter is hard on interiors — road salt, slush and mud get tracked inside. A deep interior detail before and during winter keeps your carpets and mats protected and looking their best. We recommend booking in late fall.",
    },
    {
      question: "Is there a minimum spend for service in the Dundee area?",
      answer:
        "Our core service is a Full Interior Detail, starting at $220. There are no additional travel fees for the Dundee area.",
    },
  ],
  wheaton: [
    {
      question: "Do you serve the College of DuPage area and Wheaton College area?",
      answer:
        "Yes — we serve all parts of Wheaton including areas near both colleges. We can detail vehicles at residential addresses, office locations, or anywhere with water and power access.",
    },
    {
      question: "What's your most popular service in Wheaton?",
      answer:
        "The Full Interior Detail is our most popular service throughout Wheaton — a complete interior refresh, with optional exterior add-ons available.",
    },
    {
      question: "Do you service company fleets in Wheaton?",
      answer:
        "Yes — we can accommodate fleet detailing for businesses in Wheaton. Contact us to discuss scheduling and volume pricing.",
    },
    {
      question: "How do I prepare my vehicle for a detail in Wheaton?",
      answer:
        "Remove personal items from the interior and trunk, and make sure we'll have access to water and a standard electrical outlet near your vehicle. That's it — we take care of the rest.",
    },
  ],
  "highland-park": [
    {
      question: "Do you service luxury and imported vehicles in Highland Park?",
      answer:
        "Yes — we detail premium and imported vehicles with extra care, using pH-neutral, interior-safe products appropriate for high-end interiors.",
    },
    {
      question: "Can you come to my Highland Park home on weekdays?",
      answer:
        "Absolutely. We operate Monday through Saturday, 8am–6pm, and weekday appointments in Highland Park are readily available.",
    },
    {
      question: "Do you cover the North Shore area beyond Highland Park?",
      answer:
        "We primarily serve the communities listed on our service area page. For nearby North Shore communities not listed, please contact us to check availability.",
    },
    {
      question: "How far in advance should I book in Highland Park?",
      answer:
        "We recommend booking 3–5 days in advance, especially for weekend appointments. Same-week availability is often possible for weekdays.",
    },
  ],
};

const DEFAULT_FAQS = [
  {
    question: "Do I need to provide anything for the service?",
    answer:
      "Yes — we require access to a standard water spigot (garden hose connection) and a standard 110V electrical outlet near your vehicle. We bring all equipment, products, and supplies.",
  },
  {
    question: "How long does a full detail take?",
    answer:
      "A Full Interior Detail typically takes about 1.5–2 hours depending on vehicle size and condition. We'll give you a more accurate estimate when you book.",
  },
  {
    question: "What areas of the suburbs do you serve?",
    answer:
      "We serve Schaumburg, Elgin, St. Charles, Geneva, Batavia, Naperville, Arlington Heights, Barrington, Dundee, Wheaton, Highland Park, and surrounding communities.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online through our booking page, call us directly, or send us an email. We'll confirm your appointment within one business day.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityData = getCityData(city);
  if (!cityData) return {};

  return buildMetadata({
    title: `Mobile Auto Detailing in ${cityData.name}, IL | Neat Touch Auto Spa`,
    description: `Premium mobile interior auto detailing in ${cityData.name}, IL. We come to your home or office for interior detailing, deep cleaning, carpet & seat shampoo, leather care, pet hair and odor removal — plus optional exterior add-ons.`,
    path: `/service-areas/${city}`,
    keywords: [
      `mobile auto detailing ${cityData.name} IL`,
      `mobile car detailing ${cityData.name} IL`,
      `car detailing ${cityData.name} IL`,
      `auto detail ${cityData.name} Illinois`,
      `interior detailing ${cityData.name}`,
      `mobile interior detailing ${cityData.name}`,
      `pet hair removal car detailing ${cityData.name}`,
      `${cityData.name} mobile detailing near me`,
      ...cityData.nearby.map((nearby) => `mobile auto detailing ${nearby} IL`),
    ],
  });
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const cityData = getCityData(city);
  if (!cityData) notFound();

  const intro = CITY_INTROS[city] || `Neat Touch Auto Spa provides premium mobile auto detailing in ${cityData.name}, IL. We bring professional detailing services directly to your home or office throughout ${cityData.name} and surrounding areas.`;
  const faqs = CITY_FAQS[city] || DEFAULT_FAQS;

  const schemaLD = {
    ...localBusinessSchema(cityData.name),
    address: {
      "@type": "PostalAddress",
      addressLocality: cityData.name,
      addressRegion: "IL",
      addressCountry: "US",
    },
  };

  const faqLD = faqSchema(faqs);
  const pageLD = webPageSchema({
    name: `Mobile Auto Detailing in ${cityData.name}, IL`,
    description: `Professional mobile auto detailing in ${cityData.name}, IL and nearby ${cityData.nearby.join(", ")}.`,
    path: `/service-areas/${city}`,
    city: cityData.name,
  });
  const breadcrumbLD = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
    { name: cityData.name, url: `/service-areas/${city}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [schemaLD, pageLD, breadcrumbLD, faqLD],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Mobile Auto Detailing
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Mobile Auto Detailing in<br />
            <span className="text-[#C9A84C]">{cityData.name}, IL</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {intro}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs text-gray-400">
            <span className="border border-white/10 bg-white/5 px-3 py-1.5">
              {cityData.county}
            </span>
            {cityData.zips.map((zip) => (
              <span key={zip} className="border border-white/10 bg-white/5 px-3 py-1.5">
                {zip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO content */}
      <section className="bg-[#0b0b0b] py-14 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.18em] mb-3">
                Local Mobile Detailers
              </p>
              <h2
                className="text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                Detail Shop Results Without Leaving {cityData.name}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Searching for mobile auto detailing near {cityData.name}? Neat Touch Auto Spa brings interior detailing, exterior hand washing, carpet extraction, seat shampoo, pet hair removal and odor treatment directly to your driveway or workplace. We regularly serve {cityData.name} and nearby {cityData.nearby.join(", ")} with appointment-based mobile service.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-3">Nearby areas covered</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {cityData.nearby.map((nearby) => (
                  <li key={nearby}>Mobile detailing near {nearby}, IL</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services offered */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              What We Offer in {cityData.name}
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-black"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Detailing Services in {cityData.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}/${city}`}
                className="border border-gray-200 hover:border-[#C9A84C] p-6 transition-colors duration-200"
              >
                <h3 className="text-black font-semibold text-base mb-2">{service.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{service.shortDesc}</p>
                <ul className="space-y-1">
                  {service.included.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-500">
                      <Check size={12} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-block text-[#C9A84C] text-xs font-semibold mt-4">
                  {service.name} in {cityData.name} &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="text-[#C9A84C] hover:underline text-sm font-medium">
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Questions
            </p>
            <h2
              className="text-3xl font-bold text-black"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Frequently Asked Questions — {cityData.name}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white border border-gray-200 p-6">
                <h3 className="text-black font-semibold text-base mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black border-y border-[#C9A84C]/20 section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Book in {cityData.name}
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Ready for a Spotless Vehicle in {cityData.name}?
          </h2>
          <p className="text-gray-400 mb-10">
            Book your mobile detail today. We come to you in {cityData.name} and throughout the Chicago suburbs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-[#C9A84C] hover:bg-[#A07830] text-black font-semibold px-10 py-4 text-lg transition-colors duration-200"
            >
              Book Now
            </Link>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="border-2 border-white hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-semibold px-10 py-4 text-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
