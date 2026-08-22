export const BUSINESS = {
  name: "Neat Touch Auto Spa",
  tagline: "Professional Mobile Auto Detailing At Your Home",
  phone: "(464) 249-0177",
  email: "osd.negocios@gmail.com",
  googleReviewLink: "https://g.page/r/CT6a0jZMb9pkEBM/review",
  location: "Schaumburg, IL",
  hours: "Mon–Sat 8:00am–6:00pm, Sun: Closed",
  hoursSchema: "Mo-Sa 08:00-18:00",
  priceRange: "$$",
  url: "https://www.neattouchautospa.com",
  // Approx. center of service area (Schaumburg, IL) — update with exact base if desired
  geo: { latitude: 42.0334, longitude: -88.0834 },
  serviceRadiusMiles: 30,
  // Replace with your real profiles for stronger entity SEO (helps Google connect your brand)
  social: {
    facebook: "https://www.facebook.com/share/1bkgaHPrqH/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/neattouchautospa",
    tiktok: "https://www.tiktok.com/@neat.touch.auto.sp",
  },
  rating: { value: 5.0, count: 18 },
  thumbtack: {
    url: "https://www.thumbtack.com/profile/services/548908778321674240/",
    reviews: 54,
    rating: 5.0,
    topPro: true,
  },
  founded: "2021",
  ogImage: "/opengraph-image",
  logo: "/icon",
};

export const SEO_KEYWORDS = [
  "mobile auto detailing Chicago suburbs",
  "mobile car detailing Chicago suburbs",
  "car detailing near me",
  "auto detailing near me",
  "interior car detailing near me",
  "exterior car detailing near me",
  "mobile detailing Naperville IL",
  "mobile detailing Aurora IL",
  "mobile detailing Oswego IL",
  "mobile detailing Lombard IL",
  "mobile detailing Glenview IL",
  "mobile detailing Deerfield IL",
  "pet hair removal car detailing",
  "seat shampoo car detailing",
  "carpet extraction auto detailing",
  "odor removal car detailing",
  "luxury auto detailing Illinois",
  "SUV detailing Chicago suburbs",
];

// Headline stats used in the hero and trust sections
export const STATS = [
  { value: "100+", label: "Vehicles Detailed" },
  { value: "5.0★", label: "Average Rating" },
  { value: "11+", label: "Suburbs Served" },
  { value: "100%", label: "Mobile Service" },
];

// Priority markets — chosen from real Thumbtack lead & conversion data, not
// guesswork. Each city carries a unique `localNote` so its service pages read
// differently from every other city's (avoids duplicate/doorway content).
export const CITIES = [
  {
    name: "Naperville",
    slug: "naperville",
    county: "DuPage and Will County",
    nearby: ["Aurora", "Lisle", "Warrenville", "Bolingbrook"],
    zips: ["60540", "60563", "60564", "60565"],
    localNote:
      "In Naperville we detail everything from condos near downtown and the Riverwalk to family homes in Ashwood Park and White Eagle — where winter road salt and sand tracked in from the Riverwalk are common complaints in the carpets and mats.",
    localFaq: {
      question: "Do you serve the whole Naperville area?",
      answer:
        "Yes — we regularly serve central Naperville and the areas near the Riverwalk and downtown, plus nearby Aurora, Lisle, Warrenville and Bolingbrook.",
    },
  },
  {
    name: "Aurora",
    slug: "aurora",
    county: "Kane, DuPage, Kendall and Will County",
    nearby: ["Naperville", "Montgomery", "North Aurora", "Oswego"],
    zips: ["60502", "60503", "60504", "60505", "60506"],
    localNote:
      "In Aurora we cover both the Fox Valley Mall area and the newer residential neighborhoods out in the 60504 zone that have grown fast in recent years — from historic downtown near the Paramount Theatre to the Naperville and Oswego borders.",
    localFaq: {
      question: "Do you serve all of Aurora?",
      answer:
        "We serve the full span of Aurora, from the Naperville–Aurora side to the Oswego and Montgomery borders.",
    },
  },
  {
    name: "Oswego",
    slug: "oswego",
    county: "Kendall County",
    nearby: ["Aurora", "Montgomery", "Yorkville", "Plainfield"],
    zips: ["60543"],
    localNote:
      "Oswego is one of our highest booking-rate areas — local families in the newer subdivisions often book a full interior detail before a family event or before selling the vehicle, right in the driveway near downtown Oswego and the Route 34 corridor.",
    localFaq: {
      question: "Do you serve the whole Oswego area?",
      answer:
        "Oswego is one of our highest booking-rate areas — most quote requests turn into a confirmed appointment. We serve all of Oswego plus nearby Yorkville, Montgomery and Aurora.",
    },
  },
  {
    name: "Lombard",
    slug: "lombard",
    county: "DuPage County",
    nearby: ["Villa Park", "Glen Ellyn", "Addison", "Downers Grove"],
    zips: ["60148"],
    localNote:
      "In Lombard we detail a lot of residential neighborhoods near Lombard Common Park and the Metra line, where many clients prefer to book a weekend detail at home instead of driving to a shop — it's one of the areas we get the most quote requests from.",
    localFaq: {
      question: "Do you serve the whole Lombard area?",
      answer:
        "Lombard is one of the areas we get the most quote requests from — we usually confirm a time within one business day. We serve all of Lombard plus nearby Villa Park, Glen Ellyn and Elmhurst.",
    },
  },
  {
    name: "Glenview",
    slug: "glenview",
    county: "Cook County",
    nearby: ["Northbrook", "Wilmette", "Golf", "Morton Grove"],
    zips: ["60025", "60026"],
    localNote:
      "In Glenview and the north end of the North Shore, the typical vehicle is a family SUV and the most-requested work is upholstery cleaning and pet hair removal — we bring it all to your driveway near The Glen and Wagner Farm.",
    localFaq: {
      question: "Do you serve the whole Glenview area?",
      answer:
        "We're expanding across Glenview and the North Shore — book ahead to lock in the best time. We also serve nearby Northbrook, Wilmette and Niles.",
    },
  },
  {
    name: "Deerfield",
    slug: "deerfield",
    county: "Lake County",
    nearby: ["Highland Park", "Northbrook", "Riverwoods", "Bannockburn"],
    zips: ["60015"],
    localNote:
      "In Deerfield we detail a lot of homes set back from the center, where booking a detail at home saves the drive to Highland Park or Northbrook — and winter salt and slush off Lake Cook Road are hard on carpets and floor mats.",
    localFaq: {
      question: "Do you serve the whole Deerfield area?",
      answer:
        "Deerfield and the Highland Park area are among the northernmost areas we serve regularly, along with nearby Northbrook and Bannockburn.",
    },
  },
  {
    name: "Geneva",
    slug: "geneva",
    county: "Kane County",
    nearby: ["Batavia", "St. Charles", "North Aurora", "West Chicago"],
    zips: ["60134"],
    localNote:
      "Geneva's tree-lined streets near Third Street and the Fox River look great, but pollen, mud and winter salt still find their way into your cabin — that's where we come in.",
    localFaq: {
      question: "Do you serve the whole Geneva area?",
      answer:
        "Yes — we serve all of Geneva, from the Third Street shops to the Fox River neighborhoods, plus nearby Batavia, St. Charles and North Aurora.",
    },
  },
  {
    name: "Dundee",
    slug: "dundee",
    county: "Kane County",
    nearby: ["East Dundee", "West Dundee", "Carpentersville", "Algonquin"],
    zips: ["60118"],
    localNote:
      "We serve both East and West Dundee — many homes have garages opening right onto Route 31, where street dust and road salt build up fast in the carpet. We handle it right in your driveway along the Fox River.",
    localFaq: {
      question: "Do you serve the whole Dundee area?",
      answer:
        "We cover East Dundee, West Dundee and the areas near Carpentersville and Algonquin.",
    },
  },
];

// Cities we previously had dedicated pages for but removed based on lead data.
// Their old URLs are 301-redirected to /service-areas (see next.config).
export const RETIRED_CITY_SLUGS = [
  "schaumburg",
  "elgin",
  "st-charles",
  "batavia",
  "arlington-heights",
  "barrington",
  "wheaton",
  "highland-park",
];

export const SERVICES = [
  {
    id: "full-interior",
    name: "Full Interior Detail",
    icon: "Sofa",
    shortDesc: "Complete interior restoration — vacuuming, wipe-down, windows, and more.",
    description:
      "Our Full Interior Detail covers every surface inside your vehicle. We vacuum all carpets and upholstery, wipe down all hard surfaces, clean windows from the inside, dress all trim and plastics, and leave your cabin smelling fresh.",
    included: [
      "Full vacuum (seats, carpets, mats, trunk)",
      "Dashboard & console wipe-down",
      "Interior window cleaning",
      "Vinyl/plastic trim dressing",
      "Door jamb cleaning",
      "Air freshener application",
    ],
  },
  {
    id: "exterior-addons",
    name: "Exterior Add-Ons",
    icon: "Car",
    shortDesc: "Optional exterior touch-ups to finish off your interior detail.",
    description:
      "Want a fresh outside too? Add a hand-washed exterior to any interior detail. Available as optional add-ons — just ask for a quote when you book.",
    included: [
      "Hand wash & hand dry",
      "Spray wax",
      "Tire cleaning",
      "Tire shine",
      "Exterior window cleaning",
    ],
  },
  {
    id: "interior-deep-clean",
    name: "Interior Deep Cleaning",
    icon: "Sparkles",
    shortDesc: "Heavy-duty cleaning for neglected interiors with stains and buildup.",
    description:
      "For vehicles that need more than a standard detail, our Interior Deep Cleaning uses professional-grade tools and products to tackle heavy soiling, stains, and years of buildup.",
    included: [
      "Heavy-duty vacuuming",
      "Steam cleaning of hard surfaces",
      "Stain treatment on upholstery",
      "Carpet extraction",
      "Degreasing of high-touch areas",
      "Interior window cleaning",
    ],
  },
  {
    id: "pet-hair-removal",
    name: "Pet Hair Removal",
    icon: "Dog",
    shortDesc: "Specialized tools to remove stubborn pet hair from every surface.",
    description:
      "Pet hair embeds deep into upholstery and carpets. We use specialized rubber brushes, air tools, and industrial vacuums to extract every strand — even from tight seams and crevices.",
    included: [
      "Rubber brush agitation",
      "High-powered vacuum extraction",
      "Seat seam cleaning",
      "Trunk & cargo area treatment",
      "Lint roll finishing pass",
    ],
  },
  {
    id: "seat-shampoo",
    name: "Seat Shampoo",
    icon: "Armchair",
    shortDesc: "Deep shampoo for cloth and fabric seats to remove stains and odors.",
    description:
      "Our Seat Shampoo service uses hot water extraction to lift dirt, oils, and stains from fabric upholstery. Seats are thoroughly shampooed, agitated, and extracted until clean.",
    included: [
      "Pre-spray stain treatment",
      "Hot water extraction shampoo",
      "Agitation brushing",
      "Rinse extraction",
      "Drying process",
    ],
  },
  {
    id: "carpet-extraction",
    name: "Carpet Extraction",
    icon: "Wind",
    shortDesc: "Hot water extraction for carpets — removes deep-set dirt and stains.",
    description:
      "We extract years of deep-set grime from your vehicle's carpeting using commercial-grade hot water extraction equipment, leaving carpets clean, refreshed, and nearly dry.",
    included: [
      "Pre-treatment spray",
      "Agitation brushing",
      "Hot water extraction",
      "Stain spot treatment",
      "Accelerated drying",
    ],
  },
  {
    id: "odor-removal",
    name: "Odor Removal",
    icon: "Wind",
    shortDesc: "Ozone treatment and deep cleaning to eliminate stubborn odors.",
    description:
      "We combine deep interior cleaning with ozone treatment to permanently eliminate odors — smoke, pets, food, and more — rather than just masking them.",
    included: [
      "Full interior cleaning",
      "Odor source identification",
      "Enzyme treatment",
      "Ozone generator treatment",
      "Air freshener finish",
    ],
  },
  {
    id: "maintenance-detail",
    name: "Maintenance Detail",
    icon: "RefreshCw",
    shortDesc: "Regular upkeep detail to keep your vehicle looking its best year-round.",
    description:
      "Our Maintenance Detail is perfect for clients on a regular schedule. A thorough but efficient detail to maintain the clean, protected finish from your last full detail.",
    included: [
      "Hand wash & dry",
      "Vacuum interior",
      "Quick wipe-down of surfaces",
      "Window cleaning (in & out)",
      "Tire dressing",
      "Air freshener",
    ],
  },
  {
    id: "leather-care",
    name: "Leather Cleaning & Conditioning",
    icon: "Star",
    shortDesc: "Gentle cleaning and conditioning to protect and revive leather.",
    description:
      "We safely clean your leather seats and surfaces, then condition them to restore suppleness and help protect against drying, cracking and fading.",
    included: [
      "pH-balanced leather cleaning",
      "Seam & stitching detailing",
      "Leather conditioning",
      "Protective finish",
    ],
  },
];

// Interior detailing priced by vehicle size. Everything below is included at every size.
const INTERIOR_INCLUDES = [
  "Full interior vacuum — seats, carpets, mats & trunk",
  "Deep clean of dashboard, console & door panels",
  "Carpet & upholstery shampoo",
  "Leather cleaning & conditioning",
  "Interior window cleaning",
  "Stain & spot treatment",
  "Air freshener",
];

export const PRICING = [
  {
    name: "Interior Detail",
    sedanPrice: "$220",
    suvPrice: "$240",
    includes: INTERIOR_INCLUDES,
  },
  {
    name: "Interior + Exterior",
    sedanPrice: "$300",
    suvPrice: "$320",
    includes: [
      ...INTERIOR_INCLUDES,
      "Exterior hand wash & dry",
      "Spray wax",
      "Tire cleaning & shine",
      "Exterior windows",
    ],
    featured: true,
  },
];

// Optional exterior add-ons — available on request. Ask for a quote when booking.
export const ADDONS = [
  { name: "Hand Wash & Dry" },
  { name: "Spray Wax" },
  { name: "Tire Cleaning & Shine" },
  { name: "Exterior Windows" },
];

// Real Google reviews. Add more from your Google Business Profile as you collect them.
export const REVIEWS = [
  {
    name: "Zach Sweeney",
    meta: "Verified Google review · Geneva, IL",
    rating: 5,
    text: "Diego was great! Car looks amazing and smells great! Really appreciated him coming all the way to Geneva. Will be using him again on my wife's car. Five out of five, highly recommend.",
  },
  {
    name: "Maude Annor",
    meta: "Verified Google review",
    rating: 5,
    text: "I had an excellent experience with Diego at Neat Touch Auto Spa. From start to finish, he was extremely friendly, professional, and easy to work with. He offers a 24-hour follow-up option — if anything isn't to your liking after the service, he'll come back and make it right. My vehicle looked amazing when he was done, and the attention to detail was clear. I would highly recommend Neat Touch Auto Spa and Diego specifically to anyone looking for reliable, high-quality detailing service.",
  },
  {
    name: "Isaac Bradford",
    meta: "Verified Google review",
    rating: 5,
    text: "I recently had my vehicle detailed by Neat Touch Auto Spa, and I couldn't be more impressed.",
  },
  {
    name: "Shilpa Reddy",
    meta: "Verified Google review",
    rating: 5,
    text: "Diego did a great job! Will hire him again.",
  },
];

export const TRUST_BADGES = [
  { label: "5-Star Google Reviews", icon: "Star" },
  { label: "Fully Mobile Service", icon: "MapPin" },
  { label: "100% Satisfaction Focused", icon: "ShieldCheck" },
];
