export const PLACEHOLDER_IMAGE = "/placeholder.svg";

export type AppCategory =
  | "DeFi Triangle"
  | "Crpko"
  | "Yamparala"
  | "Private"
  | "Community";

export type AppStatus = "Live" | "WIP" | "Private" | "Experiment";

export type App = {
  slug: string;
  name: string;
  tagline: string;
  category: AppCategory;
  status: AppStatus;
  url?: string;
  sourceUrl?: string;
  icon: string;
  screenshots: string[];
  about: string[];
  builtWith: string[];
  releasedAt: string;
  whatsNew?: { version: string; date: string; bullets: string[] };
  featured?: boolean;
};

export const apps: App[] = [
  {
    slug: "defi-triangle-website",
    name: "DeFi Triangle Website",
    tagline: "Core website for the DeFi Triangle ecosystem.",
    category: "DeFi Triangle",
    status: "Live",
    url: "https://defitriangle.xyz/",
    icon: PLACEHOLDER_IMAGE,
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    about: [
      "The marketing surface for DeFi Triangle — explains the protocol, products, and how the three corners of the triangle work together.",
    ],
    builtWith: ["Next.js", "Tailwind", "Framer Motion"],
    releasedAt: "2025-09-01",
    featured: true,
  },
  {
    slug: "defi-triangle-dapp",
    name: "DeFi Triangle Dapp",
    tagline: "Main DeFi product app and interaction layer.",
    category: "DeFi Triangle",
    status: "Live",
    url: "https://app.defitriangle.xyz/",
    icon: PLACEHOLDER_IMAGE,
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    about: [
      "The wallet-connected dapp where users actually interact with DeFi Triangle — swaps, positions, and the live trading surface.",
    ],
    builtWith: ["Next.js", "wagmi", "Tailwind"],
    releasedAt: "2025-10-15",
    featured: true,
  },
  {
    slug: "defi-triangle-learn",
    name: "DeFi Triangle Learn",
    tagline: "Lessons and learning surface for DeFi Triangle.",
    category: "DeFi Triangle",
    status: "WIP",
    url: "https://learndex.hirahul.xyz/lessons",
    icon: PLACEHOLDER_IMAGE,
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    about: [
      "Merging the existing LearnDex lessons into a dedicated domain inside the DeFi Triangle ecosystem.",
    ],
    builtWith: ["Next.js", "MDX"],
    releasedAt: "2026-02-01",
  },
  {
    slug: "crpko-graphics-app",
    name: "Crpko Graphics App",
    tagline: "Unified graphics workflow for Crpko.",
    category: "Crpko",
    status: "Live",
    url: "https://graphics.crpkotech.com",
    icon: PLACEHOLDER_IMAGE,
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    about: [
      "Replaced the manual Drive-and-folders graphics flow with a single app that handles upload, organisation, and animation hooks for SVG assets.",
    ],
    builtWith: ["Next.js", "Tailwind", "Vercel Blob"],
    releasedAt: "2026-03-26",
    featured: true,
  },
  {
    slug: "figma-design-script",
    name: "Figma Design Script",
    tagline: "Automation for Figma scripts and consistent layer naming.",
    category: "Crpko",
    status: "WIP",
    icon: PLACEHOLDER_IMAGE,
    screenshots: [PLACEHOLDER_IMAGE],
    about: [
      "An internal Figma plugin and script set that enforces layer-naming conventions across the design system.",
    ],
    builtWith: ["Figma Plugin API", "TypeScript"],
    releasedAt: "2026-04-01",
  },
  {
    slug: "yamparala-log",
    name: "Yamparala Log",
    tagline: "Personal log for links, notes, and references.",
    category: "Yamparala",
    status: "Live",
    url: "https://log.hirahul.xyz",
    icon: PLACEHOLDER_IMAGE,
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    about: [
      "A lightweight personal knowledge log — capture, tag, and revisit links and notes without the friction of a heavy notes app.",
    ],
    builtWith: ["Next.js", "Tailwind"],
    releasedAt: "2025-11-10",
  },
  {
    slug: "yamparala-catalog",
    name: "Yamparala Catalog",
    tagline: "Designer catalogue inside AgentUX.",
    category: "Yamparala",
    status: "Live",
    url: "https://agentux.hirahul.xyz/designer/catalogue",
    icon: PLACEHOLDER_IMAGE,
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    about: [
      "Catalogue surface that lives inside AgentUX — the canonical place for browsing collected design references.",
    ],
    builtWith: ["Next.js", "Tailwind"],
    releasedAt: "2026-01-20",
  },
  {
    slug: "proteus",
    name: "Proteus",
    tagline: "Component and UI utility product.",
    category: "Yamparala",
    status: "Live",
    url: "https://proteus.hirahul.xyz",
    icon: PLACEHOLDER_IMAGE,
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    about: [
      "A small library of reusable UI components and utilities used across the Yamparala portfolio surfaces.",
    ],
    builtWith: ["React", "Tailwind"],
    releasedAt: "2025-12-01",
  },
  {
    slug: "background",
    name: "Background",
    tagline: "Background generation utility.",
    category: "Yamparala",
    status: "Live",
    url: "https://bg.hirahul.xyz",
    icon: PLACEHOLDER_IMAGE,
    screenshots: [PLACEHOLDER_IMAGE],
    about: [
      "A focused tool for generating backgrounds — gradients, patterns, and subtle textures — for product and design work.",
    ],
    builtWith: ["Next.js", "Canvas API"],
    releasedAt: "2025-10-05",
  },
  {
    slug: "telegram-finance",
    name: "Telegram + Finance",
    tagline: "Personal finance ledger via Telegram.",
    category: "Private",
    status: "Private",
    icon: PLACEHOLDER_IMAGE,
    screenshots: [PLACEHOLDER_IMAGE],
    about: [
      "Personal finance ledger that uses Telegram as the operating channel — type a message, log an entry.",
    ],
    builtWith: ["Telegram Bot API", "Postgres"],
    releasedAt: "2026-02-14",
  },
  {
    slug: "family-gallery",
    name: "Family Gallery",
    tagline: "Private family memory archive.",
    category: "Private",
    status: "Private",
    icon: PLACEHOLDER_IMAGE,
    screenshots: [PLACEHOLDER_IMAGE],
    about: [
      "A private gallery for family photos and memories. Access is closed; this is the placeholder entry.",
    ],
    builtWith: ["Next.js", "Object storage"],
    releasedAt: "2026-03-01",
  },
  {
    slug: "deriverse",
    name: "Deriverse",
    tagline: "Trading analytics dashboard prototype.",
    category: "Community",
    status: "Live",
    url: "https://deriverse.vercel.app",
    icon: PLACEHOLDER_IMAGE,
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    about: [
      "Submission for the Deriverse Superteam bounty — a trading analytics dashboard with journal and portfolio analysis. Placed 2nd.",
    ],
    builtWith: ["Next.js", "Recharts", "Tailwind"],
    releasedAt: "2025-08-12",
  },
  {
    slug: "conceptdj-playground",
    name: "ConceptDJ Playground",
    tagline: "Interactive playground for concept exploration.",
    category: "Community",
    status: "Live",
    url: "https://conceptdj.vercel.app/playground",
    icon: PLACEHOLDER_IMAGE,
    screenshots: [PLACEHOLDER_IMAGE],
    about: [
      "An open playground for sketching out interaction concepts — fast iteration over polished output.",
    ],
    builtWith: ["React", "Web Audio API"],
    releasedAt: "2025-07-20",
  },
  {
    slug: "ome",
    name: "OME",
    tagline: "Order matching simulator.",
    category: "Community",
    status: "Live",
    url: "https://ome-sim.vercel.app",
    icon: PLACEHOLDER_IMAGE,
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    about: [
      "A visual order matching engine simulator — built originally for a Superteam Solana bounty exploration.",
    ],
    builtWith: ["Next.js", "Rust (engine)"],
    releasedAt: "2025-02-10",
  },
  {
    slug: "saturn-canvas",
    name: "Saturn Canvas",
    tagline: "Creative canvas and interaction experiment.",
    category: "Community",
    status: "Experiment",
    url: "https://saturn7.vercel.app",
    icon: PLACEHOLDER_IMAGE,
    screenshots: [PLACEHOLDER_IMAGE],
    about: [
      "A canvas experiment exploring scroll-driven, gravity-like interactions. One-shot prototype.",
    ],
    builtWith: ["Canvas API", "TypeScript"],
    releasedAt: "2025-06-01",
  },
];

export const featuredApps = apps.filter((app) => app.featured);

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAllAppSlugs(): string[] {
  return apps.map((app) => app.slug);
}

export function getAppsByCategory(): { category: AppCategory; items: App[] }[] {
  const order: AppCategory[] = [
    "DeFi Triangle",
    "Crpko",
    "Yamparala",
    "Community",
    "Private",
  ];
  return order
    .map((category) => ({
      category,
      items: apps.filter((app) => app.category === category),
    }))
    .filter((group) => group.items.length > 0);
}
