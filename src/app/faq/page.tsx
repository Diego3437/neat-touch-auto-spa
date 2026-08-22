import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS, CITIES } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

export const revalidate = 3600;

const FAQS = [
  {
    question: "Do you need water and power for mobile auto detailing?",
    answer:
      "Yes. Neat Touch Auto Spa requires access to a standard water spigot or garden hose hookup and a standard 110V electrical outlet near the vehicle. We bring the detailing tools, products, towels, brushes, vacuums and cleaning equipment.",
  },
  {
    question: "What Chicago suburbs do you serve?",
    answer:
      "We serve Naperville, Aurora, Oswego, Lombard, Glenview, Deerfield, Geneva, Dundee and many surrounding Chicago suburbs. If your city is nearby, contact us to check availability.",
  },
  {
    question: "Can you detail my car at an apartment, condo or office?",
    answer:
      "Yes, as long as the property allows mobile service and you can provide nearby water and power access. We regularly work at homes, offices, townhomes, condos and apartment communities throughout the Chicago suburbs.",
  },
  {
    question: "How long does a mobile detail take?",
    answer:
      "Most standard details take 2 to 5 hours depending on vehicle size, condition and service selected. Deep cleaning, pet hair removal, carpet extraction, odor treatment and large SUVs or minivans may take longer.",
  },
  {
    question: "Do you work during Chicago winter?",
    answer:
      "We operate year-round when weather conditions allow quality work. Extreme cold, freezing temperatures, heavy snow or unsafe conditions may require rescheduling. Winter interior detailing is especially useful for salt stains and dirty carpets inside your vehicle.",
  },
  {
    question: "What is the difference between auto detailing and a regular car wash?",
    answer:
      "A car wash is usually a quick exterior clean. Auto detailing is much more thorough. At Neat Touch Auto Spa we specialize in interior detailing — deep interior cleaning, stain treatment, carpet and seat shampoo, leather care, and pet hair and odor removal — with optional exterior add-ons like a hand wash, spray wax and tire shine.",
  },
  {
    question: "Do you remove pet hair from cars?",
    answer:
      "Yes. Pet hair removal is one of our high-intent services. We use specialized brushes, agitation methods and vacuum extraction to remove embedded hair from seats, carpets, cargo areas and tight seams.",
  },
  {
    question: "Do you offer carpet extraction and seat shampoo?",
    answer:
      "Yes. Carpet extraction and seat shampoo are available for vehicles with stains, salt buildup, food spills, odors or heavy interior soil. These services are especially popular after winter and family road trips.",
  },
  {
    question: "How do I prepare before your mobile detailing appointment?",
    answer:
      "Remove personal belongings from the cabin, trunk and cargo areas. Make sure the vehicle is parked where we can work safely around it and where water and a standard outlet are accessible.",
  },
  {
    question: "How do I book a mobile detail?",
    answer:
      "You can book online, call us, or send a message with your name, vehicle, location, requested service and preferred date. We confirm appointments within one business day.",
  },
];

export const metadata = buildMetadata({
  title: "Mobile Auto Detailing FAQ | Chicago Suburbs | Neat Touch Auto Spa",
  description:
    "Frequently asked questions about mobile auto detailing in the Chicago suburbs, including water and power requirements, service areas, timing, winter detailing, pet hair removal and carpet extraction.",
  path: "/faq",
  keywords: [
    "mobile auto detailing FAQ Chicago suburbs",
    "does mobile detailing need water and power",
    "mobile car detailing apartment Chicago suburbs",
    "winter car detailing Chicago suburbs",
  ],
});

export default function FAQPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      webPageSchema({
        name: "Mobile Auto Detailing FAQ",
        description:
          "Answers to common questions about Neat Touch Auto Spa mobile auto detailing services in the Chicago suburbs.",
        path: "/faq",
      }),
      breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "FAQ", url: "/faq" },
      ]),
      faqSchema(FAQS),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bg-black py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Questions
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Mobile Auto Detailing FAQ
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Answers for Chicago suburbs drivers before booking mobile detailing at home, work, apartments or condos.
          </p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.question} className="border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-black mb-3">{faq.question}</h2>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 border border-gray-200 p-8">
            <h2
              className="text-2xl font-bold text-black mb-4"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Cities We Serve
            </h2>
            <p className="text-gray-600 mb-5">
              We provide mobile auto detailing across the Chicago suburbs, including:
            </p>
            <div className="flex flex-wrap gap-2">
              {CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={`/service-areas/${city.slug}`}
                  className="border border-[#C9A84C]/40 hover:bg-[#C9A84C] hover:text-black text-gray-700 text-sm px-3 py-2 transition-colors"
                >
                  {city.name}, IL
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Still Have a Question?
          </h2>
          <p className="text-gray-400 mb-8">
            Call or book online and we will help you choose the right detail for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-[#C9A84C] hover:bg-[#A07830] text-black font-semibold px-8 py-3 transition-colors"
            >
              Book Online
            </Link>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="border border-white/30 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-semibold px-8 py-3 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
