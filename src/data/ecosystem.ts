export type DeviceStatus = "Available" | "Coming Soon";

export type DeviceId = "pawbasis" | "petble" | "mat";

export type CapabilityId =
  | "safety"
  | "activity"
  | "sleep"
  | "health"
  | "connection";

export type SceneTag = "Outdoor" | "Home" | "Health" | "Connection";

export type DeviceColor = {
  id: string;
  name: string;
  hex: string;
  /** Studio shot for this colorway, when we have one. */
  image?: string;
};

export type EcoDevice = {
  id: DeviceId;
  /** Replace with final retail name when locked. */
  name: string;
  shortName: string;
  scene: string;
  pitch: string;
  abilities: string[];
  capabilityIds: CapabilityId[];
  tags: SceneTag[];
  status: DeviceStatus;
  href: string;
  image?: string;
  tag?: string;
  model?: string;
  views?: { id: string; name: string; image: string }[];
  colors?: DeviceColor[];
};

export type EcoCapability = {
  id: CapabilityId;
  name: string;
  blurb: string;
  deviceIds: DeviceId[];
};

export const ecoNav = [
  { href: "#ecosystem", label: "Overview" },
  { href: "#scenarios", label: "Scenarios" },
  { href: "#why", label: "Pillars" },
  { href: "#products", label: "Products" },
  { href: "#better-together", label: "Ecosystem" },
  { href: "#ai-loop", label: "AI Loop" },
  { href: "#compare", label: "Compare" },
] as const;

export const ecoDevices: EcoDevice[] = [
  {
    id: "petble",
    name: "Petble AI",
    shortName: "Petble AI",
    scene: "Everyday wear + at-home connection",
    pitch:
      "The everyday layer: 15g on-body tracking, activity and wellness, plus at-home connection, family sharing, and companionship when you are not in the room.",
    abilities: [
      "All-day activity",
      "At-home connection",
      "Family sharing",
      "Baseline wellness signals",
      "Lightweight everyday wear",
    ],
    capabilityIds: ["safety", "activity", "health", "connection"],
    tags: ["Home", "Health", "Connection"],
    status: "Available",
    href: "/#contact",
    image: "/images/products/petble-ai-angle.png",
    tag: "15g",
    model: "/models/petble-ai.glb",
    views: [
      { id: "angle", name: "Angle", image: "/images/products/petble-ai-angle.png" },
      { id: "front", name: "Front", image: "/images/products/petble-ai-front.png" },
    ],
  },
  {
    id: "pawbasis",
    name: "PawBasis Smart Tracker",
    shortName: "PawBasis",
    scene: "Outdoor Safety",
    pitch:
      "AL600 outdoor GPS — live location when they leave the yard, Safe Circles, lost-pet alerts, and a trail you can replay.",
    abilities: [
      "Live GPS location",
      "Safe Circles / geofences",
      "Lost-pet alerts",
      "Activity trails",
    ],
    capabilityIds: ["safety", "activity"],
    tags: ["Outdoor"],
    status: "Available",
    href: "/#contact",
    image: "/images/products/petble-clip-angle.png",
    tag: "AL600",
    model: "/models/al600.glb",
    views: [
      { id: "angle", name: "Angle", image: "/images/products/petble-clip-angle.png" },
      { id: "front", name: "Front", image: "/images/products/petble-clip-front.png" },
    ],
  },
  {
    id: "mat",
    name: "Health Monitoring Mat",
    shortName: "Mat",
    scene: "Rest & Sleep",
    pitch:
      "Quiet rest and sleep trends from the place they already lie down — overnight patterns without another gadget on the collar.",
    abilities: [
      "Resting patterns",
      "Sleep trends",
      "Overnight behavior signals",
    ],
    capabilityIds: ["sleep", "health"],
    tags: ["Home", "Health"],
    status: "Coming Soon",
    href: "/#contact",
    image: "/images/products/mat-lavender.png",
    views: [
      {
        id: "front",
        name: "Front",
        image: "/images/products/mat-lavender.png",
      },
    ],
    colors: [
      {
        id: "lavender",
        name: "Lavender",
        hex: "#D2C0D4",
        image: "/images/products/mat-lavender.png",
      },
      {
        id: "cream",
        name: "Cream",
        hex: "#E8D9C4",
        image: "/images/products/mat-cream.png",
      },
      {
        id: "sage",
        name: "Sage",
        hex: "#B0C4AE",
        image: "/images/products/mat-sage.png",
      },
      {
        id: "honey",
        name: "Honey",
        hex: "#E0C07A",
        image: "/images/products/mat-honey.png",
      },
      {
        id: "graphite",
        name: "Graphite",
        hex: "#6F6C76",
        image: "/images/products/mat-graphite.png",
      },
    ],
  },
];

export const ecoCapabilities: EcoCapability[] = [
  {
    id: "safety",
    name: "Safety",
    blurb: "Know where they are — and the moment they leave the frame you set.",
    deviceIds: ["pawbasis", "petble"],
  },
  {
    id: "activity",
    name: "Activity",
    blurb: "Movement through the day, from a walk to a stretch on the sofa.",
    deviceIds: ["pawbasis", "petble"],
  },
  {
    id: "sleep",
    name: "Sleep",
    blurb: "Rest quality and overnight patterns, collected where they actually sleep.",
    deviceIds: ["mat"],
  },
  {
    id: "health",
    name: "Health Changes",
    blurb:
      "A personal baseline, then a nudge when today does not look like their normal. Daily insight — not a diagnosis.",
    deviceIds: ["petble", "mat"],
  },
  {
    id: "connection",
    name: "Companionship",
    blurb:
      "Stay close from anywhere — at-home connection, family sharing, and the quiet sense they are not alone. This layer lives in Petble AI.",
    deviceIds: ["petble"],
  },
];

export const ecoScenarios = [
  {
    id: "wander",
    title: "When they wander",
    kicker: "Outdoor safety",
    text: "The second they slip the yard, you have a live pin, a trail, and a boundary that actually taps you.",
    points: [
      "Live location",
      "Safe Circles",
      "Lost-pet alerts",
      "Replayable trails",
    ],
    deviceIds: ["pawbasis", "petble"] as DeviceId[],
    capabilityIds: ["safety", "activity"] as CapabilityId[],
  },
  {
    id: "change",
    title: "When something changes",
    kicker: "Health & insight",
    text: "Not a single spike — a story of activity, rest, and confirmed signals against their own baseline.",
    points: [
      "Activity trends",
      "Sleep and rest trends",
      "Confirmed signals",
      "Change alerts",
      "Health-change insight",
    ],
    deviceIds: ["petble", "mat", "pawbasis"] as DeviceId[],
    capabilityIds: ["activity", "sleep", "health"] as CapabilityId[],
  },
  {
    id: "away",
    title: "When you’re away",
    kicker: "At-home connection",
    text: "A quiet house is still a connected one — Petble AI keeps at-home presence, family sharing, and companionship in the same profile.",
    points: [
      "At-home connection",
      "Family sharing",
      "Companionship when you are away",
      "Daily status in one app",
    ],
    deviceIds: ["petble", "mat"] as DeviceId[],
    capabilityIds: ["connection", "sleep"] as CapabilityId[],
  },
] as const;

export type DayIcon = "map" | "activity" | "moon" | "home" | "eat" | "run" | "app";

export type EcoDayStep = {
  id: string;
  time: string;
  title: string;
  highlight: string;
  text: string;
  deviceIds: DeviceId[];
  points: string[];
  overlayLabel: string;
  overlayMetric: string;
  timeline: number[];
  image: string;
  video?: string;
  icon: DayIcon;
  closingTitle?: string;
  closing?: string;
};

export const ecoDay: EcoDayStep[] = [
  {
    id: "dawn",
    time: "Dawn",
    title: "Rest, already recorded",
    highlight: "recorded",
    text: "Overnight rest becomes part of the story before the day even begins.",
    deviceIds: ["mat", "petble"],
    points: ["Sleep & rest trends", "Passive monitoring", "Baseline wellness"],
    overlayLabel: "Dawn",
    overlayMetric: "Mat · overnight",
    timeline: [0, 6, 10, 14, 18],
    image: "/images/lifestyle/cat-sleep.png",
    video: "/videos/rest.mp4",
    icon: "moon",
  },
  {
    id: "day",
    time: "Day",
    title: "Movement, in the background",
    highlight: "background",
    text: "Petble AI follows everyday activity and learns what a normal day looks like for your pet.",
    deviceIds: ["petble"],
    points: ["All-day activity", "Everyday wear", "Activity trends"],
    overlayLabel: "Day",
    overlayMetric: "Petble AI · active",
    timeline: [22, 32, 41, 48, 55],
    image: "/images/lifestyle/cat-looking-up.jpg",
    video: "/videos/petble-ai-eating.mp4",
    icon: "run",
  },
  {
    id: "out",
    time: "Out",
    title: "When they wander",
    highlight: "wander",
    text: "A live pin, safe boundaries, and alerts help you react the moment they go too far.",
    deviceIds: ["pawbasis", "petble"],
    points: [
      "Live location",
      "Safe Circles",
      "Lost-pet alerts",
      "Replayable trails",
    ],
    overlayLabel: "Out",
    overlayMetric: "PawBasis · live",
    timeline: [38, 48, 58, 66, 72],
    image: "/images/lifestyle/dog-grass.jpg",
    video: "/videos/petble-ai-running.mp4",
    icon: "map",
  },
  {
    id: "alone",
    time: "Alone",
    title: "When you’re away",
    highlight: "away",
    text: "A quiet house is still a connected one — stay close through at-home connection and household sharing.",
    deviceIds: ["petble"],
    points: [
      "At-home connection",
      "Family sharing",
      "Companionship",
      "Daily status",
    ],
    overlayLabel: "Alone",
    overlayMetric: "Petble AI · home",
    timeline: [52, 60, 68, 74],
    image: "/images/lifestyle/cat-at-home.png",
    video: "/videos/cat-at-home.mp4",
    icon: "home",
  },
  {
    id: "night",
    time: "Evening",
    title: "When something changes",
    highlight: "changes",
    text: "Activity, rest, and daily signals come together against their normal baseline — so meaningful changes are easier to notice.",
    deviceIds: ["petble", "mat"],
    points: [
      "Activity trends",
      "Sleep & rest trends",
      "Change alerts",
      "Health-change insight",
    ],
    overlayLabel: "Evening",
    overlayMetric: "One pet file",
    timeline: [72, 80, 88, 94],
    image: "/images/lifestyle/cat-sleep.png",
    video: "/videos/cat-sleep.mp4",
    icon: "app",
    closingTitle: "One story in the app",
    closing:
      "Different moments. Different signals. One continuous pet profile.",
  },
];

export const ecoPillars = [
  {
    id: "safety",
    title: "Safety",
    text: "Location, boundaries, and alerts so wandering is a known event — not a guess.",
    deviceIds: ["pawbasis", "petble"] as DeviceId[],
  },
  {
    id: "health",
    title: "Health",
    text: "Rest, activity, and quiet signals that describe their week — for everyday care, not a clinic claim.",
    deviceIds: ["petble", "mat"] as DeviceId[],
  },
  {
    id: "insights",
    title: "AI Insights",
    text: "A baseline unique to them, then a notice when today drifts from that normal.",
    deviceIds: ["petble", "mat", "pawbasis"] as DeviceId[],
  },
  {
    id: "companionship",
    title: "Companionship",
    text: "At-home connection and household sharing live in Petble AI — not a separate companion box.",
    deviceIds: ["petble"] as DeviceId[],
  },
];

export const ecoTogether = [
  {
    title: "One pet profile",
    text: "Every device writes to the same animal — not a folder per gadget.",
  },
  {
    title: "One household share",
    text: "Family members see the same map, the same alerts, the same evening recap.",
  },
  {
    title: "Signals that complete each other",
    text: "Outdoor GPS from PawBasis, overnight rest from the mat, and at-home connection from Petble AI fill different gaps in one day.",
  },
  {
    title: "Outdoor and at-home, continuously",
    text: "Leaving the yard and napping on the sofa live in the same timeline.",
  },
  {
    title: "Power, connection, and alerts in one place",
    text: "Battery, link status, and notices are managed together in the HeshNova app.",
  },
];

export const ecoLoop = [
  {
    n: "01",
    title: "Collect",
    text: "Location, activity, rest, and at-home connection — from Petble AI, PawBasis, and the monitoring mat.",
  },
  {
    n: "02",
    title: "Baseline",
    text: "The model learns their rhythm: how they move, rest, and occupy a normal day.",
  },
  {
    n: "03",
    title: "Trends",
    text: "Days become a week. A week becomes a picture you can actually read.",
  },
  {
    n: "04",
    title: "Notice",
    text: "When today is not their normal, the change is flagged — not every small spike.",
  },
  {
    n: "05",
    title: "Guide",
    text: "Plain-language next steps for the household: look closer, rest more, or talk to your vet.",
  },
  {
    n: "06",
    title: "Share",
    text: "The same story is available to everyone you trust in the home.",
  },
];

export type FitAnswers = {
  pet: "dog" | "cat" | "";
  size: "small" | "medium" | "large" | "";
  scene: "outdoor" | "home" | "sleep" | "companion" | "daily" | "";
  location: "yes" | "no" | "";
  health: "yes" | "no" | "";
  remote: "yes" | "no" | "";
};

export const emptyFit: FitAnswers = {
  pet: "",
  size: "",
  scene: "",
  location: "",
  health: "",
  remote: "",
};

export function recommendDevices(a: FitAnswers): {
  primary: DeviceId;
  alts: DeviceId[];
  reason: string;
} {
  if (a.scene === "outdoor" || a.location === "yes") {
    return {
      primary: "pawbasis",
      alts: ["petble"],
      reason:
        "You asked for outdoor safety or live location. PawBasis (AL600) leads on GPS and Safe Circles; Petble AI adds everyday wear, wellness, and at-home connection.",
    };
  }
  if (a.scene === "sleep") {
    return {
      primary: "mat",
      alts: ["petble"],
      reason:
        "Rest and overnight patterns point to the monitoring mat. Petble AI is the everyday wearable that still feeds the same health timeline.",
    };
  }
  if (a.scene === "companion" || a.remote === "yes" || a.scene === "home") {
    return {
      primary: "petble",
      alts: ["mat"],
      reason:
        "At-home connection, family sharing, and companionship live in Petble AI. Add the mat if overnight rest is the next gap.",
    };
  }
  if (a.scene === "daily" && a.location === "no") {
    return {
      primary: "petble",
      alts: ["mat"],
      reason:
        "Lightweight daily tracking is Petble AI. The mat sits beside it for sleep when you want overnight rest as well.",
    };
  }
  if (a.health === "yes") {
    return {
      primary: "petble",
      alts: ["mat"],
      reason:
        "Health trends start with Petble AI. Add the mat when overnight rest is the gap you care about.",
    };
  }
  return {
    primary: "petble",
    alts: ["pawbasis"],
    reason:
      "Petble AI is the everyday layer — wear, wellness, and at-home connection in the HeshNova app. Add PawBasis if outdoor GPS becomes the next need.",
  };
}

export function deviceById(id: DeviceId) {
  return ecoDevices.find((d) => d.id === id)!;
}

export function capabilityById(id: CapabilityId) {
  return ecoCapabilities.find((c) => c.id === id)!;
}
