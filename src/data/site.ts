/** Flip to true when Everyday IoT / platform creative is ready. */
export const showEverydayIot = false;

/** Flip to true when the dedicated App download teaser should show. */
export const showAppTeaser = false;

export type ProductView = {
  id: string;
  name: string;
  image: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  tag?: string;
  price: number;
  compareAt?: number;
  blurb: string;
  href: string;
  model?: string;
  views: ProductView[];
  features: string[];
  specs: Record<string, string>;
};

export const products: Product[] = [
  {
    id: "petble-ai",
    slug: "petble-ai",
    name: "Petble AI",
    tag: "15g",
    price: 79,
    blurb: "A 15g everyday wearable — activity, wellness, and at-home connection.",
    href: "/#pet",
    model: "/models/petble-ai.glb",
    views: [
      { id: "angle", name: "Angle", image: "/images/products/petble-ai-angle.png" },
      { id: "front", name: "Front", image: "/images/products/petble-ai-front.png" },
    ],
    features: [
      "Only 15g — made to wear every day",
      "Know their normal, notice the change",
      "At-home connection and family sharing",
      "Advanced wellness insights in the HeshNova app",
    ],
    specs: {
      Weight: "15 g",
      Finish: "Gloss white",
      BestFor: "Cats and small dogs",
      App: "HeshNova",
    },
  },
  {
    id: "petble-ai-clip",
    slug: "petble-ai-clip",
    name: "PawBasis Smart Tracker",
    tag: "AL600",
    price: 89,
    blurb: "Outdoor GPS — live location, Safe Circles, and lost-pet alerts.",
    href: "/#pet",
    model: "/models/al600.glb",
    views: [
      { id: "angle", name: "Angle", image: "/images/products/petble-clip-angle.png" },
      { id: "front", name: "Front", image: "/images/products/petble-clip-front.png" },
    ],
    features: [
      "Live GPS location beyond the yard",
      "Safe Circles and lost-pet alerts",
      "Replayable activity trails",
      "Pairs with the HeshNova app",
    ],
    specs: {
      Role: "Outdoor GPS (AL600)",
      BestFor: "Walks, yard, and lost-pet alerts",
      App: "HeshNova",
    },
  },
];

export const sellingPoints = [
  {
    title: "Precise GPS tracking",
    text: "Follow live location and draw Safe Circles so you know the moment they wander.",
    icon: "map",
    tint: "bg-peach",
  },
  {
    title: "Smart health monitoring",
    text: "Daily snapshots of activity, sleep, and vitals — plus scratch monitoring.",
    icon: "heart",
    tint: "bg-cream",
  },
  {
    title: "Early wellness pings",
    text: "Get a nudge when patterns shift, so you can check in before it becomes a scare.",
    icon: "bell",
    tint: "bg-mint",
  },
];

export const ambassadors = [
  {
    name: "Lena Hart",
    role: "Canine coach & bestselling trainer",
    quote:
      "I recommend Peble to every dog parent who wants both safety and a real read on their dog’s health. It’s the tracker I actually trust on long off-leash days.",
    image: "/images/avatars/a3.jpg",
  },
  {
    name: "Jonah Hale",
    role: "Broadcast adventurer",
    quote:
      "The moment you lose sight of the pack, you glance at your phone and know exactly where they are. That extra sense of place changes how you walk together.",
    image: "/images/avatars/a2.jpg",
  },
  {
    name: "Amelie Roux",
    role: "TV host & animal welfare advocate",
    quote:
      "Peble is more than a locator. It’s the quiet ally that lets Umi, Nori, and Sage roam — and lets me exhale.",
    image: "/images/avatars/a6.jpg",
  },
  {
    name: "Diego Marín",
    role: "Comedian & pet advocate",
    quote:
      "Looking after the ones you love also means knowing where they are. Peble gives me that calm, every single day.",
    image: "/images/avatars/a4.jpg",
  },
  {
    name: "Priya Sen",
    role: "Wildlife presenter",
    quote:
      "I only put my name on things I would use with my own animals. Peble is reliable, light, and built around their comfort.",
    image: "/images/avatars/a5.jpg",
  },
  {
    name: "Anders & Jo",
    role: "Pet welfare advocates",
    quote:
      "Animals deserve freedom inside a safe frame. With Peble we keep that extra sense of security without clipping their world short.",
    image: "/images/avatars/a1.jpg",
  },
];

export const testimonials = [
  {
    name: "Charlie’s owner",
    product: "",
    image: "/images/lifestyle/dog-water.jpg",
    text: "Charlie lives for the shoreline. Because Peble is fully waterproof and clipped tight to his harness, I can let him swim without that knot in my stomach. Live GPS is rock-solid.",
  },
  {
    name: "Oscar’s owner",
    product: "",
    image: "/images/lifestyle/cat-looking-up.jpg",
    text: "Oscar disappears for a day or two — that’s just who he is. Evening porch searches are over. I open the app, see his trail, and stop asking the neighbors.",
  },
  {
    name: "Caspar’s owner",
    product: "",
    image: "/images/lifestyle/dog-paddle.jpg",
    text: "Paddleboard mornings, ridge hikes, the lot. I can follow every move in real time, even on the water. Battery lasts for ages. He explores. I stay sane.",
  },
  {
    name: "Muro’s owner",
    product: "",
    image: "/images/lifestyle/cat-lying.jpg",
    text: "First-time tracker, zero drama. The collar sits right, charges fast, and watching him cover 14 km in a day was a genuine plot twist.",
  },
  {
    name: "Dingo’s owner",
    product: "",
    image: "/images/lifestyle/dog-grass.jpg",
    text: "Safe Circle is the feature I didn’t know I needed. The second he slips the yard, my phone taps me. Instant peace of mind.",
  },
  {
    name: "Minki’s owner",
    product: "",
    image: "/images/lifestyle/cat-with-collar.jpg",
    text: "Roads, creeks, forest — she treats it all like a playground. I always know where she is, and how her day’s looking.",
  },
];

export const faqs = [
  {
    q: "How does Peble actually locate them?",
    a: "The tracker reads GPS, GLONASS, and Galileo, then sends a location over LTE — the same kind of cellular network your phone uses. A SIM is built in, so you get a live pin worldwide where coverage exists, not a Bluetooth bubble that dies at the park gate.",
  },
  {
    q: "Why is there a subscription?",
    a: "The hardware is one purchase. The plan covers the SIM, network partners in 175+ countries, live tracking, health insights, and cloud history. Pick a 1, 2, or 5-year plan after checkout. Cancel whenever you like.",
  },
  {
    q: "How is this different from an AirTag?",
    a: "AirTags lean on nearby phones. If your pet isn’t close to someone else’s device, the trail goes cold. Peble talks to satellites and cellular towers, so the map updates even when you’re on the other side of the world.",
  },
  {
    q: "How long does the battery last?",
    a: "It depends on the model and how often you live-track. Pulse Cat Mini is built for up to 7 days, Pulse Dog up to 2 weeks, and Pulse Dog XL up to 6 weeks with Power Saving Zones switched on.",
  },
  {
    q: "What’s the range?",
    a: "Unlimited, as long as there’s cellular coverage. Peble works with 500+ network partners across 175+ countries — including AT&T, Verizon, and T-Mobile in the US.",
  },
  {
    q: "How do I get started?",
    a: "Order a tracker, download the app, and choose a plan. When the box arrives, clip it to a collar or use the integrated cat collar, activate in the app, and you’re live.",
  },
  {
    q: "Does Peble diagnose illness?",
    a: "No. Peble watches behavior and vitals and flags changes over time. It is not a medical device. Always take health questions to a veterinarian.",
  },
];

export const plans = [
  { name: "1-Year", monthly: 9, billed: 108, cadence: "billed annually" },
  { name: "2-Year", monthly: 6, billed: 144, cadence: "billed every 2 years", popular: true },
  { name: "5-Year", monthly: 5, billed: 300, cadence: "billed every 5 years" },
];
