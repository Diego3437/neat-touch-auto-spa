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
  rating: { value: 5.0, count: 17 },
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
  "mobile detailing Schaumburg IL",
  "mobile detailing Elgin IL",
  "mobile detailing Naperville IL",
  "mobile detailing Arlington Heights IL",
  "mobile detailing Wheaton IL",
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

export const CITIES = [
  {
    name: "Schaumburg",
    slug: "schaumburg",
    county: "Cook and DuPage County",
    nearby: ["Hoffman Estates", "Roselle", "Rolling Meadows", "Elk Grove Village"],
    zips: ["60173", "60193", "60194", "60195"],
  },
  {
    name: "Elgin",
    slug: "elgin",
    county: "Kane and Cook County",
    nearby: ["South Elgin", "Bartlett", "Streamwood", "Carpentersville"],
    zips: ["60120", "60123", "60124"],
  },
  {
    name: "St. Charles",
    slug: "st-charles",
    county: "Kane County",
    nearby: ["Geneva", "Wayne", "Campton Hills", "South Elgin"],
    zips: ["60174", "60175"],
  },
  {
    name: "Geneva",
    slug: "geneva",
    county: "Kane County",
    nearby: ["Batavia", "St. Charles", "North Aurora", "West Chicago"],
    zips: ["60134"],
  },
  {
    name: "Batavia",
    slug: "batavia",
    county: "Kane and DuPage County",
    nearby: ["Geneva", "North Aurora", "Aurora", "Warrenville"],
    zips: ["60510"],
  },
  {
    name: "Naperville",
    slug: "naperville",
    county: "DuPage and Will County",
    nearby: ["Aurora", "Lisle", "Warrenville", "Bolingbrook"],
    zips: ["60540", "60563", "60564", "60565"],
  },
  {
    name: "Arlington Heights",
    slug: "arlington-heights",
    county: "Cook County",
    nearby: ["Mount Prospect", "Rolling Meadows", "Palatine", "Prospect Heights"],
    zips: ["60004", "60005"],
  },
  {
    name: "Barrington",
    slug: "barrington",
    county: "Cook and Lake County",
    nearby: ["South Barrington", "Lake Zurich", "Inverness", "Hoffman Estates"],
    zips: ["60010"],
  },
  {
    name: "Dundee",
    slug: "dundee",
    county: "Kane County",
    nearby: ["East Dundee", "West Dundee", "Carpentersville", "Algonquin"],
    zips: ["60118"],
  },
  {
    name: "Wheaton",
    slug: "wheaton",
    county: "DuPage County",
    nearby: ["Glen Ellyn", "Winfield", "Carol Stream", "Lisle"],
    zips: ["60187", "60189"],
  },
  {
    name: "Highland Park",
    slug: "highland-park",
    county: "Lake County",
    nearby: ["Deerfield", "Lake Forest", "Glencoe", "Northbrook"],
    zips: ["60035"],
  },
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
