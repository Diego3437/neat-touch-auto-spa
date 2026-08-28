import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Phone, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CITIES, SERVICES, BUSINESS, SERVICE_PAGE_EXCLUDED } from "@/lib/constants";
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
  aurora:
    "Aurora is Illinois' second-largest city, stretching across four counties from the Fox River to the Route 59 corridor. Neat Touch Auto Spa brings mobile interior detailing directly to Aurora homes and workplaces — from the Fox Valley area to historic downtown near the Paramount Theatre.",
  oswego:
    "Oswego is a fast-growing Kendall County community where families put real miles on their vehicles. Neat Touch Auto Spa delivers mobile interior detailing right to your Oswego driveway — one of the areas our customers rate most highly.",
  lombard:
    "Lombard — the 'Lilac Village' — is a busy DuPage County suburb full of commuters and families. Neat Touch Auto Spa brings professional mobile interior detailing to Lombard homes and offices, so your cabin stays clean without a trip to the shop.",
  glenview:
    "Glenview is one of the North Shore's most desirable suburbs, and its drivers expect meticulous care. Neat Touch Auto Spa delivers premium mobile interior detailing throughout Glenview — from The Glen to established neighborhoods near Wagner Farm.",
  deerfield:
    "Deerfield is a distinguished Lake County community with strong neighborhoods and a busy commuter base. Neat Touch Auto Spa brings mobile interior detailing directly to Deerfield driveways and offices — showroom-fresh results without leaving home.",
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
    {
      question: "How much does interior detailing cost in Naperville?",
      answer:
        "Our Full Interior Detail is $220 for sedans and $240 for SUVs and larger vehicles, with the same pricing throughout Naperville and no travel surcharge. If you'd also like the exterior handled, our Interior + Exterior package is $300 for sedans and $320 for SUVs and includes a hand wash, spray wax, tire shine, and exterior windows.",
    },
    {
      question: "Do you detail cars near downtown Naperville and the Riverwalk?",
      answer:
        "Yes — we serve homes and businesses throughout downtown Naperville, the Historic District, and the neighborhoods around the Riverwalk. As long as we can reach a water spigot and a standard outlet, we can detail your vehicle there.",
    },
    {
      question: "Can you remove road salt and winter stains from my carpets in Naperville?",
      answer:
        "Definitely. Salt and slush from Naperville winters get ground deep into carpets and floor mats. Our carpet extraction and seat shampoo services are built to pull that buildup out — not just cover it up. Many Naperville drivers book a deep interior detail every spring for exactly this reason.",
    },
  ],
  aurora: [
    {
      question: "Do you serve all of Aurora, including the Route 59 and Orchard Road areas?",
      answer:
        "Yes — Aurora is one of our core markets and we cover it end to end, from the Fox Valley Mall area and Orchard Road to historic downtown and the far east side near Naperville.",
    },
    {
      question: "How much does interior detailing cost in Aurora?",
      answer:
        "Our Full Interior Detail is $220 for sedans and $240 for SUVs and larger vehicles, with no travel surcharge for Aurora. The Interior + Exterior package (hand wash, spray wax, tire shine, exterior windows) is $300 sedan / $320 SUV.",
    },
    {
      question: "Can you get to my Aurora home the same week?",
      answer:
        "We often have openings within a few days for Aurora. Weekends fill up fastest, so booking 3–5 days ahead is a good idea. Contact us to check current availability.",
    },
    {
      question: "Do you remove pet hair from vehicles in Aurora?",
      answer:
        "Yes. Pet hair removal is one of our most requested add-ons across Aurora. We use specialized tools to lift embedded hair from carpets, seats and cargo areas.",
    },
  ],
  oswego: [
    {
      question: "Do you serve Oswego and nearby Montgomery and Yorkville?",
      answer:
        "Yes — we regularly serve Oswego along with Montgomery, Yorkville, Aurora and Plainfield. Oswego is one of the areas our customers rate most highly.",
    },
    {
      question: "What's the most popular service in Oswego?",
      answer:
        "Full Interior Details for family SUVs are especially popular in Oswego, and pet hair removal is a common add-on. If you're not sure what you need, send us a few photos and we'll recommend honestly.",
    },
    {
      question: "How much does mobile detailing cost in Oswego?",
      answer:
        "Pricing is the same across every area we serve, with no Oswego travel fee: $220 sedan / $240 SUV for a Full Interior Detail, or $300 / $320 for the Interior + Exterior package.",
    },
    {
      question: "What do I need to provide for service in Oswego?",
      answer:
        "Just access to a standard garden-hose spigot for water and a standard 110V outlet near the vehicle. We bring all equipment, products and supplies.",
    },
  ],
  lombard: [
    {
      question: "Do you serve all of Lombard, including near Yorktown and Lilacia Park?",
      answer:
        "Yes — we serve all of Lombard, from neighborhoods near Lilacia Park to the Yorktown Center area and along Roosevelt Road. Homes, condos and offices are all fine as long as we have water and power access.",
    },
    {
      question: "Can you remove winter salt stains from my carpets in Lombard?",
      answer:
        "Absolutely. DuPage winters leave salt and grit deep in carpets and mats. Our carpet extraction and seat shampoo services lift that buildup out rather than just masking it — a popular spring service for Lombard commuters.",
    },
    {
      question: "How much does interior detailing cost in Lombard?",
      answer:
        "A Full Interior Detail is $220 for sedans and $240 for SUVs, with no travel surcharge for Lombard. The Interior + Exterior package is $300 sedan / $320 SUV.",
    },
    {
      question: "Can you detail my car at my Lombard workplace?",
      answer:
        "Yes — many Lombard clients have us detail their vehicle in an office or business parking lot during the workday. We just need access to water and a standard outlet.",
    },
  ],
  glenview: [
    {
      question: "Do you service luxury and imported vehicles in Glenview?",
      answer:
        "Yes — we detail premium and imported vehicles with extra care, using pH-neutral, interior-safe products appropriate for high-end leather, trim and finishes.",
    },
    {
      question: "Do you serve all of Glenview, including The Glen area?",
      answer:
        "Yes, we serve all of Glenview from The Glen Town Center to established neighborhoods near Wagner Farm, plus nearby Northbrook, Wilmette and Morton Grove.",
    },
    {
      question: "How much does interior detailing cost in Glenview?",
      answer:
        "Our Full Interior Detail is $220 sedan / $240 SUV with no Glenview travel surcharge, and the Interior + Exterior package is $300 / $320.",
    },
    {
      question: "Do you offer recurring maintenance details in Glenview?",
      answer:
        "Yes — many Glenview clients book a Maintenance Detail on a monthly or bi-monthly schedule. Contact us to set up a recurring appointment.",
    },
  ],
  deerfield: [
    {
      question: "Do you serve all of Deerfield, including near Deerfield Square?",
      answer:
        "Yes — we serve all of Deerfield, from Deerfield Square to neighborhoods off Waukegan Road and Lake Cook Road, plus nearby Highland Park, Northbrook and Riverwoods.",
    },
    {
      question: "Can you remove road salt and slush stains from my carpets in Deerfield?",
      answer:
        "Definitely. Lake County winters are hard on interiors. Our carpet extraction and seat shampoo services pull salt and slush staining out of carpets and mats — a common spring booking for Deerfield drivers.",
    },
    {
      question: "How much does mobile detailing cost in Deerfield?",
      answer:
        "Pricing is consistent everywhere we serve, with no Deerfield travel fee: $220 sedan / $240 SUV for a Full Interior Detail, or $300 / $320 for Interior + Exterior.",
    },
    {
      question: "Can you come to my Deerfield home or office on weekdays?",
      answer:
        "Yes — we operate Monday through Saturday, 8am–6pm, and weekday appointments in Deerfield are readily available at homes and workplaces alike.",
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

// Optional deep, city-specific SEO content. Only cities present here render the
// extended local section — keeps other city pages lean while letting priority
// markets (e.g. Naperville) rank on rich, unique local copy.
const CITY_SECTIONS: Record<
  string,
  { neighborhoods?: string[]; sections: { title: string; paragraphs: string[] }[] }
> = {
  naperville: {
    neighborhoods: [
      "Downtown Naperville & the Riverwalk",
      "Historic District",
      "North Naperville (Cress Creek, Saybrook, Huntington Estates)",
      "South Naperville (White Eagle, Tall Grass, Ashwood Park)",
      "Stillwater & Country Lakes",
      "West Naperville along the Route 59 corridor",
      "Neighborhoods near Neuqua Valley & Metea Valley",
      "Communities near Naperville North & Naperville Central",
    ],
    sections: [
      {
        title: "Why Naperville Drivers Choose Mobile Interior Detailing",
        paragraphs: [
          "Naperville is consistently ranked one of the best places to live in America — and the driveways here are full of vehicles that reflect that: family SUVs, luxury sedans, EVs, and daily commuters that log serious miles on I-88, Route 59, and Ogden Avenue. Between school pickups near Neuqua Valley and Metea Valley, weekend trips downtown to the Riverwalk, and long corporate commutes, Naperville cars pick up a lot of life inside the cabin.",
          "Neat Touch Auto Spa was built for exactly that. Instead of dropping your car at a shop and waiting, we bring a complete interior detail to your Naperville home or office. You keep your day; we handle the crumbs, spills, pet hair, salt, and odors. When we leave, your interior looks and smells like the day you drove it home.",
        ],
      },
      {
        title: "Interior Detailing Built for Naperville Roads & Seasons",
        paragraphs: [
          "DuPage and Will County winters are hard on interiors. Road salt and slush from Naperville streets get tracked into carpets and floor mats, and by spring most cabins are hiding white salt stains and grit deep in the fibers. Our carpet extraction and seat shampoo services are designed to lift exactly that kind of buildup — not just mask it.",
          "In summer, UV coming through the windshield dries out leather and dashboards. Our Full Interior Detail includes conditioning for leather seats and dressing for trim and plastics, so your Naperville vehicle's interior is protected year-round. Every product we use is pH-neutral and interior-safe — appropriate for everything from a Tesla cabin to a family minivan.",
        ],
      },
      {
        title: "Transparent Naperville Pricing",
        paragraphs: [
          "Our pricing is the same across every suburb we serve — there are no travel surcharges for Naperville. A Full Interior Detail is $220 for sedans and $240 for SUVs and larger vehicles. Want the outside handled too? Our Interior + Exterior package adds a hand wash, spray wax, tire cleaning and shine, and exterior windows for $300 (sedan) or $320 (SUV).",
          "Popular add-ons for Naperville families include pet hair removal and odor treatment. Not sure what your vehicle needs? Send us a few photos and we'll give you an honest recommendation before you book — no upsells on services you don't need.",
        ],
      },
    ],
  },
  aurora: {
    neighborhoods: [
      "Downtown Aurora & the Paramount Theatre area",
      "Fox Valley Mall & the Route 59 corridor",
      "Orchard Road corridor",
      "Far East Side (near Naperville)",
      "Stonebridge & Sans Souci",
      "North Aurora border neighborhoods",
    ],
    sections: [
      {
        title: "Mobile Interior Detailing Across All of Aurora",
        paragraphs: [
          "Aurora is Illinois' second-largest city, spread across four counties, so a shop on one side of town is a long drive from the other. That's exactly why mobile detailing makes sense here — we bring the full interior detail to your driveway or workplace, whether you're near Fox Valley Mall, the Orchard Road corridor, or historic downtown by the Paramount Theatre.",
          "Aurora drivers log serious miles on I-88, Route 59, and Ogden Avenue, and it shows inside the cabin. Our Full Interior Detail resets everything — vacuum, seats, carpets, dash, console, glass, leather conditioning, and a finishing air freshener — without you losing a half-day at a shop.",
        ],
      },
      {
        title: "Transparent Aurora Pricing",
        paragraphs: [
          "Pricing is the same across every area we serve, with no travel surcharge for Aurora: a Full Interior Detail is $220 for sedans and $240 for SUVs and larger vehicles. The Interior + Exterior package adds a hand wash, spray wax, tire cleaning and shine, and exterior windows for $300 (sedan) or $320 (SUV). Pet hair removal and odor treatment are popular add-ons.",
        ],
      },
    ],
  },
  oswego: {
    neighborhoods: [
      "Downtown Oswego",
      "Route 34 corridor",
      "Hunt Club & Prairie Point",
      "Southbury & Ashcroft",
      "Churchill Club",
      "Neighborhoods near Oswego & Oswego East High Schools",
    ],
    sections: [
      {
        title: "Why Oswego Families Book Mobile Detailing",
        paragraphs: [
          "Oswego is one of the fastest-growing communities in the area, and it's also one of our highest-satisfaction markets. Local families put a lot of life inside their vehicles — sports gear, car seats, pets, and daily drives along Route 34 — and our mobile interior detail brings it all back to fresh right in the driveway.",
          "Full Interior Details for family SUVs are especially popular in Oswego, and pet hair removal is one of the most-requested add-ons. If you're not sure what your vehicle needs, send us a few photos first and we'll tell you honestly.",
        ],
      },
      {
        title: "Transparent Oswego Pricing",
        paragraphs: [
          "There's no travel surcharge for Oswego. A Full Interior Detail is $220 for sedans and $240 for SUVs and larger vehicles, and the Interior + Exterior package is $300 (sedan) or $320 (SUV), adding a hand wash, spray wax, tire shine, and exterior windows.",
        ],
      },
    ],
  },
  lombard: {
    neighborhoods: [
      "Near Lilacia Park & downtown Lombard",
      "Yorktown Center area",
      "Roosevelt Road corridor",
      "Glenbard East neighborhoods",
      "Near the Lombard Metra station",
      "Butterfield & Highland Avenue areas",
    ],
    sections: [
      {
        title: "Interior Detailing Built for Lombard Commuters",
        paragraphs: [
          "Lombard sits right in the middle of DuPage County's busiest commuting corridors — Roosevelt Road, Butterfield, and the Metra line into the city. All that daily driving fills interiors with dust, coffee spills, crumbs, and, come winter, road salt tracked in on every trip.",
          "Our Full Interior Detail is built for exactly that: a complete reset of seats, carpets, dash, console, glass, and leather, delivered to your Lombard home or office so you never have to sit in a waiting room.",
        ],
      },
      {
        title: "Transparent Lombard Pricing",
        paragraphs: [
          "No travel surcharge for Lombard. A Full Interior Detail is $220 for sedans and $240 for SUVs and larger vehicles. The Interior + Exterior package — hand wash, spray wax, tire shine, and exterior windows — is $300 (sedan) or $320 (SUV). Carpet extraction is a popular spring add-on for salt-stained mats.",
        ],
      },
    ],
  },
  glenview: {
    neighborhoods: [
      "The Glen Town Center & surrounding neighborhoods",
      "Near Wagner Farm",
      "Glen Oak Acres",
      "Sylvester / Cole Park area",
      "Near Glenbrook South High School",
      "East Glenview near the Metra",
    ],
    sections: [
      {
        title: "Meticulous Interior Detailing for Glenview Vehicles",
        paragraphs: [
          "Glenview is one of the North Shore's most desirable suburbs, and its drivers expect meticulous care — often for luxury and imported vehicles. We treat every interior accordingly, using pH-neutral, interior-safe products on leather, trim, and finishes throughout the cabin.",
          "From The Glen to established neighborhoods near Wagner Farm, we bring the full interior detail to your driveway so your vehicle looks and feels its best without a trip to the shop.",
        ],
      },
      {
        title: "Transparent Glenview Pricing",
        paragraphs: [
          "Pricing is consistent everywhere we serve, with no Glenview travel fee: $220 sedan / $240 SUV for a Full Interior Detail, or $300 / $320 for the Interior + Exterior package. Many Glenview clients also book recurring Maintenance Details on a monthly or bi-monthly schedule.",
        ],
      },
    ],
  },
  deerfield: {
    neighborhoods: [
      "Deerfield Square & downtown",
      "Waukegan Road corridor",
      "Lake Cook Road area",
      "Kings Cove & Coromandel",
      "Near Deerfield High School",
      "Riverwoods border neighborhoods",
    ],
    sections: [
      {
        title: "Interior Detailing for Deerfield Winters and Beyond",
        paragraphs: [
          "Lake County winters are hard on car interiors, and Deerfield is no exception — road salt, slush, and grit get tracked into carpets and floor mats all season long. Our carpet extraction and seat shampoo services are designed to pull that buildup out rather than just mask it.",
          "Beyond winter, our Full Interior Detail keeps leather conditioned and cabins fresh year-round. We bring the whole service to your Deerfield home or office — from Deerfield Square to the neighborhoods off Lake Cook Road.",
        ],
      },
      {
        title: "Transparent Deerfield Pricing",
        paragraphs: [
          "No travel surcharge for Deerfield. A Full Interior Detail is $220 for sedans and $240 for SUVs and larger vehicles, and the Interior + Exterior package is $300 (sedan) or $320 (SUV), adding a hand wash, spray wax, tire shine, and exterior windows.",
        ],
      },
    ],
  },
  geneva: {
    neighborhoods: [
      "Downtown Geneva & Third Street",
      "Along the Fox River",
      "Fisher Farms",
      "Wildwood & Eagle Brook",
      "Mill Creek",
      "Near Geneva Metra station",
    ],
    sections: [
      {
        title: "Mobile Interior Detailing in Geneva",
        paragraphs: [
          "Geneva's tree-lined streets and Fox River setting are beautiful — but pollen, mud, and winter salt still find their way into your cabin. Neat Touch Auto Spa brings the full interior detail right to your Geneva driveway, so you never have to leave home to get showroom-fresh results.",
          "From homes near the Third Street shops to neighborhoods in Mill Creek and along the river, we handle everything from everyday dust to deep-set stains with interior-safe products.",
        ],
      },
      {
        title: "Transparent Geneva Pricing",
        paragraphs: [
          "No travel surcharge for Geneva: a Full Interior Detail is $220 for sedans and $240 for SUVs and larger vehicles, and the Interior + Exterior package is $300 / $320.",
        ],
      },
    ],
  },
  dundee: {
    neighborhoods: [
      "East Dundee & West Dundee downtowns",
      "Along the Fox River",
      "Near Randall Road",
      "Sleepy Hollow border neighborhoods",
      "Carpentersville border areas",
      "Near Dundee-Crown High School",
    ],
    sections: [
      {
        title: "Serving Both East and West Dundee",
        paragraphs: [
          "The Dundee area straddles the Fox River, and we serve both East Dundee and West Dundee along with nearby Carpentersville, Sleepy Hollow, and Algonquin. River-town dust and hard Kane County winters are the most common reasons local drivers book an interior detail.",
          "Our Full Interior Detail brings a complete cabin reset to your Dundee driveway — vacuum, seats, carpets, dash, glass, and leather conditioning — with no need to drive anywhere.",
        ],
      },
      {
        title: "Transparent Dundee Pricing",
        paragraphs: [
          "No travel surcharge for the Dundee area: a Full Interior Detail is $220 for sedans and $240 for SUVs and larger vehicles. The Interior + Exterior package is $300 (sedan) or $320 (SUV).",
        ],
      },
    ],
  },
  schaumburg: {
    neighborhoods: [
      "Near Woodfield Mall",
      "Corporate parks off I-90",
      "Town Square Schaumburg",
      "Weathersfield",
      "Near the Schaumburg Metra station",
      "Hoffman Estates & Roselle borders",
    ],
    sections: [
      {
        title: "Mobile Interior Detailing Across Schaumburg",
        paragraphs: [
          "Schaumburg is one of the Northwest suburbs' busiest hubs, mixing dense neighborhoods with the Woodfield Mall area and corporate campuses off I-90. Between long commutes and family driving, Schaumburg cabins pick up plenty of dust, road salt, and everyday mess.",
          "Neat Touch Auto Spa brings the full interior detail to your Schaumburg home or office — vacuum, seats, carpets, dash, glass, and leather conditioning — so you never have to drop your car off or sit in a waiting room. Many corporate clients have us detail their vehicle right in the office lot during the workday.",
        ],
      },
      {
        title: "Transparent Schaumburg Pricing",
        paragraphs: [
          "No travel surcharge for Schaumburg: a Full Interior Detail is $220 for sedans and $240 for SUVs and larger vehicles, and the Interior + Exterior package is $300 (sedan) or $320 (SUV), adding a hand wash, spray wax, tire shine, and exterior windows.",
        ],
      },
    ],
  },
};

// Real, verified customer testimonials tied to a specific city. Only add a city
// here when there is a genuine review from a customer in that city. Optional
// image shows a real photo of that city's job alongside the quote.
const CITY_TESTIMONIALS: Record<
  string,
  { name: string; text: string; meta: string; image?: string; imageAlt?: string }
> = {
  naperville: {
    name: "A.S.",
    text: "Great work. Punctual, easy to communicate with, and overall great efficient work on both interior and exterior of my vehicle.",
    meta: "Verified Google review · Naperville, IL",
    image: "/gallery/porsche-exterior.jpg",
    imageAlt: "White Porsche Taycan Turbo S detailed on-site in a Naperville, IL driveway",
  },
  geneva: {
    name: "Zach Sweeney",
    text: "Diego was great! Car looks amazing and smells great! Really appreciated him coming all the way to Geneva. Will be using him again on my wife's car. Five out of five, highly recommend.",
    meta: "Verified Google review · Geneva, IL",
  },
};

// Real recent-work video tied to a city. Vertical, muted, autoplay loop.
const CITY_VIDEO: Record<
  string,
  { src: string; poster: string; title: string; blurb: string }
> = {
  schaumburg: {
    src: "/video/mercedes-schaumburg.mp4",
    poster: "/video/mercedes-schaumburg-poster.jpg",
    title: "A Mercedes GLB, Detailed in Schaumburg",
    blurb:
      "Interior and exterior, done on-site at the client's home in Schaumburg — hand wash and finish outside, full interior detail inside. No shop, no drop-off.",
  },
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
  const deepContent = CITY_SECTIONS[city];
  const testimonial = CITY_TESTIMONIALS[city];
  const hasServicePages = !SERVICE_PAGE_EXCLUDED.includes(city);
  const cityVideo = CITY_VIDEO[city];

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

      {/* Deep local SEO content (priority markets only) */}
      {deepContent && (
        <section className="bg-gray-50 section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {deepContent.sections.map((sec) => (
              <div key={sec.title} className="mb-12 last:mb-0">
                <h2
                  className="text-2xl md:text-3xl font-bold text-black mb-4"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {sec.title}
                </h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            {deepContent.neighborhoods && (
              <div className="mt-4 border-t border-gray-200 pt-10">
                <h2
                  className="text-2xl md:text-3xl font-bold text-black mb-6"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {cityData.name} Neighborhoods We Detail
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {deepContent.neighborhoods.map((n) => (
                    <div key={n} className="flex items-start gap-2">
                      <Check size={16} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{n}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm mt-6">
                  Don&apos;t see your neighborhood? We serve all of {cityData.name} ({cityData.zips.join(", ")}) and nearby {cityData.nearby.join(", ")}. Just reach out to confirm your address.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Recent-work video for this city */}
      {cityVideo && (
        <section className="bg-[#0a0a0a] section-padding border-y border-[#C9A84C]/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                  Recent Work in {cityData.name}
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-5"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {cityVideo.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">{cityVideo.blurb}</p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/book"
                    className="bg-[#C9A84C] hover:bg-[#E0C47A] text-black font-semibold px-8 py-3 rounded-sm transition-colors"
                  >
                    Book Your Detail
                  </Link>
                  <Link
                    href="/gallery"
                    className="border-2 border-white/25 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-semibold px-8 py-3 rounded-sm transition-colors"
                  >
                    See More Work
                  </Link>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden border border-[#C9A84C]/25 shadow-2xl shadow-black/50">
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={cityVideo.poster}
                  >
                    <source src={cityVideo.src} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Real local testimonial (with real job photo when available) */}
      {testimonial && (
        <section className="bg-black py-16 border-y border-[#C9A84C]/20">
          {testimonial.image ? (
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#C9A84C]/25">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.imageAlt || `Detailing work in ${cityData.name}, IL`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={20} className="text-[#C9A84C] fill-[#C9A84C]" />
                    ))}
                  </div>
                  <p
                    className="text-xl md:text-2xl text-white leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-playfair, serif)" }}
                  >
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm mt-1">{testimonial.meta}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="text-[#C9A84C] fill-[#C9A84C]" />
                ))}
              </div>
              <p
                className="text-xl md:text-2xl text-white leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="text-white font-semibold">{testimonial.name}</p>
              <p className="text-gray-500 text-sm mt-1">{testimonial.meta}</p>
            </div>
          )}
        </section>
      )}

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
                href={hasServicePages ? `/services/${service.id}/${city}` : "/services"}
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
