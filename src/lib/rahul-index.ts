export interface IndexProjectDetails {
  description: string;
  links?: { label: string; href: string }[];
}

export interface IndexProject {
  year: string;
  title: string;
  accent: string;
  details?: IndexProjectDetails;
}

export const rahulProfile = {
  name: "Yamparala Rahul",
  headline:
    "Design Engineer based in India. 5.2 years of experience across healthcare, B2B SaaS, and web3.",
  bio: [
    "Yamparala Rahul is a Design Engineer based in India with 5.2 years of experience. He currently works at Equicom Technologies building products in web3.",
    "He joined Equicom Technologies in 2025 after revamping Pubkey's UI on Solana. Before that, he spent 2.4 years at Entytle simplifying B2B SaaS, and 2 years at Synclo designing healthcare systems. He founded Yamparala.in in 2019.",
    "Member of IslandDAO. Contributor at SuperteamIndia. Greed Academy graduate. Certified by Google and IBM.",
  ],
  handle: "@yamparalarahul",
  email: "rahulvignanwork@gmail.com",
} as const;

export type VideoCategory = "Builds" | "Product Analysis" | "Lessons";

export interface VideoEpisode {
  label: string;
  youtubeId: string;
}

export interface IndexVideo {
  title: string;
  description: string;
  category: VideoCategory;
  year: string;
  accent?: string;
  youtubeId?: string;
  episodes?: VideoEpisode[];
}

export const indexVideos: IndexVideo[] = [
  {
    title: "Deriverse — Analytics Layer",
    description:
      "Built an analytics layer for Deriverse, a Solana DEX, for a Superteam bounty. Won 200 USDC.",
    category: "Builds",
    year: "2024",
    accent: "🏆 200 USDC",
    youtubeId: "odKifzz8NbI",
  },
  {
    title: "Order Matching Engine in Rust",
    description:
      "Order matching engine written in Rust (first time touching the language) using Cursor — logic and architecture mine, with a visual layer for devs to understand the internals.",
    category: "Builds",
    year: "2025",
    accent: "Rust · Cursor",
    youtubeId: "dBYo17Dq6Pg",
  },
  {
    title: "Fintech Dashboard",
    description: "Designing an AI-powered fintech dashboard.",
    category: "Builds",
    year: "2025",
    accent: "Design",
    youtubeId: "-fTaHwBDixY",
  },
  {
    title: "Website with WhatsApp",
    description:
      "A 2-day sprint with two friends — building a way to create a website using WhatsApp alone.",
    category: "Builds",
    year: "2025",
    accent: "2-day sprint",
    youtubeId: "fFFsqD3Rhso",
  },
  {
    title: "Trepa — Landing Page",
    description: "Landing page designed for the Trepa bounty. Won 3rd place — 100 USDC.",
    category: "Builds",
    year: "2024",
    accent: "🥉 100 USDC",
    youtubeId: "ck5hiZ2HH2o",
  },
  {
    title: "Robinhood — UX Tear-down",
    description:
      "A 3-part series on why Robinhood is exceptional in fintech UX — what works, why, and what to steal.",
    category: "Product Analysis",
    year: "2024",
    accent: "3 parts",
    episodes: [
      { label: "Part 1", youtubeId: "6O_q03-c8Bw" },
      { label: "Part 2", youtubeId: "IWB5KPJt6lk" },
      { label: "Part 3", youtubeId: "a3zPmtwnr_8" },
    ],
  },
  {
    title: "7 Finance Mistakes",
    description: "Lessons from my own finance journey — seven mistakes I made and what I learned.",
    category: "Lessons",
    year: "2024",
    accent: "Personal",
    youtubeId: "8-wFapGhgK8",
  },
  {
    title: "What is Staking?",
    description: "An explainer on staking, featuring MagicEden.",
    category: "Lessons",
    year: "2024",
    accent: "Explainer",
    youtubeId: "fAkzDq6mApU",
  },
];

export const videoCategoryOrder: VideoCategory[] = [
  "Builds",
  "Product Analysis",
  "Lessons",
];

export const indexProjects: IndexProject[] = [
  {
    year: "2025",
    title: "AgentUX",
    accent: "WIP",
    details: {
      description:
        "AgentUX is an exploration of the interface patterns that emerge when AI agents become first-class users of software.\n\nIt looks at how UIs can be built so that humans and agents can both navigate, control, and trust the same product — covering affordances, transparency, hand-off moments, and the small details that make agentic flows feel coherent instead of magical.",
      links: [{ label: "Read notes (coming soon)", href: "#" }],
    },
  },
  { year: "2025", title: "Proteus Library", accent: "Idea" },
  { year: "2025", title: "LearnDex", accent: "WIP" },
  { year: "2024", title: "🏆 Deriverse Trading Journal", accent: "Live" },
  { year: "2024", title: "Crpko Graphic Lab", accent: "Internal" },
  { year: "2024", title: "Log & Resources of Rahul", accent: "Live" },
  { year: "2025", title: "ConceptDJ", accent: "Concept" },
  { year: "2025", title: "OME-sim", accent: "Prototype" },
  { year: "2025", title: "YPM", accent: "Idea" },
  { year: "2025", title: "YouSoft", accent: "Idea" },
  { year: "2025", title: "YAsset", accent: "Mini app" },
  { year: "2025", title: "Localhost Status App", accent: "Utility" },
  { year: "2025", title: "App Backgrounds", accent: "Utility" },
];
