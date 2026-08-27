export const partnershipTypes = [
  {
    id: "distribution",
    title: "Distribution",
    points: [
      "Regional distribution, agency, and retail",
      "Open markets, product line, and basic terms confirmed before a territory is offered",
    ],
  },
  {
    id: "oem",
    title: "OEM",
    points: [
      "Logo, color, packaging, accessories, manuals, and basic software configuration",
      "Customizable range confirmed per SKU with product and supply chain",
    ],
  },
  {
    id: "odm",
    title: "ODM",
    points: [
      "Joint definition of ID, structure, hardware, firmware, app, cloud, and features",
      "From brief to mass production, scoped as a program",
    ],
  },
  {
    id: "strategic",
    title: "Strategic Partnership",
    points: [
      "Operators, insurance, pet clinics, retail, platforms, technology, and data",
      "Structured when both sides have a named use case and a path to support it",
    ],
  },
] as const;

export const capabilities = [
  {
    title: "Consumer product definition",
    via: "HeshNova",
    text: "Category, wearer, and everyday use — what ships, and what stays out of the story.",
  },
  {
    title: "Industrial design & structure",
    via: "HeshNova with Jimi IoT group engineering",
    text: "ID and mechanical design for wearables, clips, vehicle, and home form factors.",
  },
  {
    title: "Hardware & sensor integration",
    via: "Jimi IoT group",
    text: "Boards, RF, power, and sensors integrated for consumer devices.",
  },
  {
    title: "Embedded firmware",
    via: "Jimi IoT group",
    text: "Device firmware, power policy, and field-updatable software.",
  },
  {
    title: "iOS / Android app",
    via: "HeshNova",
    text: "The HeshNova app experience partners can white-label within an agreed OEM/ODM scope.",
  },
  {
    title: "Cloud & device management",
    via: "Jimi IoT group platform",
    text: "Device lifecycle, connectivity, and backend services behind the app.",
  },
  {
    title: "AI algorithms & data insight",
    via: "HeshNova with Jimi IoT group algorithms",
    text: "Baselines and change detection where the product spec includes them — not a medical claim.",
  },
  {
    title: "Connectivity",
    via: "Jimi IoT group",
    text: "GNSS location, cellular, Wi-Fi, and Bluetooth as the SKU requires.",
  },
  {
    title: "Test, certification & quality",
    via: "Jimi IoT group with accredited labs",
    text: "Lab test, certification applications, and quality gates. Live cert lists are per SKU, shared on request — not a blanket public claim.",
  },
  {
    title: "Supply chain & mass production",
    via: "Jimi IoT group manufacturing",
    text: "NPI, tooling, and volume production through group operations.",
  },
  {
    title: "Global localization",
    via: "HeshNova with Jimi IoT group",
    text: "Language, compliance copy, and market-fit review before a region is opened.",
  },
  {
    title: "After-sales & software maintenance",
    via: "HeshNova",
    text: "Partner support plus ongoing app and firmware maintenance for products we put in market.",
  },
] as const;

export const matrixProducts = [
  {
    id: "petble-ai",
    name: "Petble AI",
    form: "15g everyday wearable for a collar",
    audience: "Cats and small dogs — retail, clinics, and pet brands",
    differentiator: "Everyday wear, wellness, and at-home connection — know their normal, notice the change.",
    status: ["Ready for Distribution", "OEM Available"],
    customization: "OEM: logo, color, packaging, accessories, manuals, basic app config — confirmed per run.",
    markets: "Open markets and certification pack confirmed in the fit review.",
    image: "/images/products/petble-ai-angle.png",
  },
  {
    id: "pawbasis",
    name: "PawBasis Smart Tracker",
    form: "Outdoor GPS tracker (AL600)",
    audience: "Pets that leave the yard or walk off-leash",
    differentiator: "Live location, Safe Circles, and lost-pet alerts — outdoor safety in the same HeshNova app.",
    status: ["Ready for Distribution", "OEM Available"],
    customization: "OEM: logo, color, packaging, accessories, manuals, basic app config — confirmed per run.",
    markets: "Open markets and certification pack confirmed in the fit review.",
    image: "/images/products/petble-clip-angle.png",
  },
  {
    id: "people",
    name: "People platform",
    form: "Wearable location and safety devices",
    audience: "Personal safety, family, outdoor, and travel — only within each product’s rules and privacy limits",
    differentiator: "Same live-map stack as Petble, a different wearer. SOS, sharing, and wellness only where the spec includes them.",
    status: ["ODM Platform Available", "Co-development Opportunity"],
    customization: "ODM: ID, structure, hardware, firmware, app, and cloud — jointly defined.",
    markets: "Compliance and certification path set per market. Not offered as an open pet-store SKU.",
    image: null,
  },
  {
    id: "vehicles",
    name: "Vehicle platform",
    form: "Aftermarket location, trip, and dash-cam devices",
    audience: "Family cars and light commercial fleets",
    differentiator: "Location, trips and status, theft alerts, DVR, plus install path and network service.",
    status: ["ODM Platform Available", "Launch Partner Wanted"],
    customization: "ODM from brief to production. Install and network terms scoped in quotation.",
    markets: "Market access and vehicle-related rules confirmed before a launch plan.",
    image: null,
  },
  {
    id: "things",
    name: "Things platform",
    form: "Finders for keys, wallets, bags, and luggage",
    audience: "Everyday carry and travel items",
    differentiator: "Find in one tap, left-behind alerts, sharing, with battery and network/ecosystem fit as the SKU allows.",
    status: ["Coming Soon", "Launch Partner Wanted"],
    customization: "OEM/ODM range opens with the SKU — not a frozen accessory list today.",
    markets: "Ecosystem and radio rules vary by region; confirmed in review.",
    image: null,
  },
  {
    id: "home",
    name: "Home platform",
    form: "Indoor cameras (IPC) and household presence",
    audience: "Homes that want a check-in view — including beside a pet, not instead of Petble AI",
    differentiator: "Remote view, motion and sound alerts, privacy mode, local and cloud storage.",
    status: ["Co-development Opportunity"],
    customization: "Joint ID, firmware, app, and cloud. Privacy mode is part of the definition, not an add-on slogan.",
    markets: "Camera and data rules are market-specific; we do not publish a global cert claim here.",
    image: null,
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Share Your Brief",
    out: "A written intake: partnership type, product interest, market, and what you already know about volume.",
  },
  {
    n: "02",
    title: "Product & Market Fit Review",
    out: "A fit note: open vs closed markets, SKU constraints, and whether OEM, ODM, or distribution is the right door.",
  },
  {
    n: "03",
    title: "Solution and Quotation",
    out: "Scope, configuration, and a commercial quote. Dates are set after supply chain confirms — not as a public SLA.",
  },
  {
    n: "04",
    title: "Sample / Prototype",
    out: "Samples or prototypes as scoped (EVT/DVT where the program needs them).",
  },
  {
    n: "05",
    title: "Validation and Certification",
    out: "Test plan, lab work, and certification filings required for the named markets.",
  },
  {
    n: "06",
    title: "Mass Production and Support",
    out: "NPI, quality gates, shipment, after-sales, and software maintenance.",
  },
] as const;

export const evidence = [
  {
    title: "Group technical background",
    text: "HeshNova is the consumer brand. Connected hardware, firmware, cloud, manufacturing, and quality systems draw on the Jimi IoT group. That is group capability — not a claim that every lab or line is a HeshNova-owned asset.",
  },
  {
    title: "What we put in market first",
    text: "Petble AI and PawBasis Smart Tracker are the products we lead with. People, vehicles, things, and home are platform directions for partners — not a second storefront on this site.",
  },
  {
    title: "Markets & certification",
    text: "We do not publish a country count, a blanket CE/FCC badge, or patent totals on this page. Open markets, live certificates, and IP that can be shown are shared in the fit review or under NDA.",
  },
  {
    title: "Proof we will not invent",
    text: "Shipment figures, awards, media logos, and case studies appear here only when we have evidence and permission. Until then, ask — we would rather send a short pack than decorate the site.",
  },
] as const;

export const resources = [
  {
    title: "Company overview",
    access: "Open on this page",
    gated: false,
    href: "/business#about-heshnova",
    text: "Who HeshNova is, what we sell first, and how the Jimi IoT group sits behind the stack.",
  },
  {
    title: "Product lineup",
    access: "Open on this page",
    gated: false,
    href: "/business#matrix",
    text: "Distribution, OEM, and ODM status for each line — no login.",
  },
  {
    title: "FAQ",
    access: "Open",
    gated: false,
    href: "/#faq",
    text: "Product and coverage questions in plain language.",
  },
  {
    title: "Company Profile",
    access: "Work email",
    gated: true,
    href: "/business?resource=profile#inquiry",
    text: "Longer company profile for partner desks.",
  },
  {
    title: "Product Catalog",
    access: "Work email",
    gated: true,
    href: "/business?resource=catalog#inquiry",
    text: "Full catalog PDF for the live SKU set.",
  },
  {
    title: "One-pagers",
    access: "Work email",
    gated: true,
    href: "/business?resource=onepager#inquiry",
    text: "Single-page briefs per product.",
  },
  {
    title: "Specification sheets",
    access: "Work email",
    gated: true,
    href: "/business?resource=specs#inquiry",
    text: "Hardware and radio specs as released for each SKU.",
  },
  {
    title: "Certification list",
    access: "Work email",
    gated: true,
    href: "/business?resource=certs#inquiry",
    text: "Per-SKU certificates — only what is current.",
  },
  {
    title: "App / Platform Overview",
    access: "Work email",
    gated: true,
    href: "/business?resource=platform#inquiry",
    text: "HeshNova app and device-cloud picture for partners.",
  },
  {
    title: "OEM/ODM Capability Deck",
    access: "Work email",
    gated: true,
    href: "/business?resource=oemodm#inquiry",
    text: "Customization range, process, and group manufacturing context.",
  },
  {
    title: "API / Integration Overview",
    access: "Work email",
    gated: true,
    href: "/business?resource=api#inquiry",
    text: "Integration options for platforms and operators.",
  },
] as const;
