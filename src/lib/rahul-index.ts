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

  // Builds
  {
    title: "Testing MagicPatterns",
    description: "Hands-on test drive of MagicPatterns and what it can/can't do for design.",
    category: "Builds",
    year: "2024",
    accent: "Tool review",
    youtubeId: "ODUJtKBwiVk",
  },
  {
    title: "KridaFans — Football Fantasy",
    description:
      "Designing a football fantasy product end-to-end — payment option flow and a simple navigation pattern.",
    category: "Builds",
    year: "2024",
    accent: "2 parts",
    episodes: [
      { label: "Payment", youtubeId: "o50piSFVyt0" },
      { label: "Navigation", youtubeId: "VWQu6j72frQ" },
    ],
  },
  {
    title: "Paywall — Mobile Screens",
    description: "Designing paywall screens for mobile.",
    category: "Builds",
    year: "2024",
    accent: "Mobile",
    youtubeId: "nR8DkS0lUfQ",
  },
  {
    title: "Synclo — Doctor App Demo",
    description: "Demo walkthrough of Synclo's app for doctors.",
    category: "Builds",
    year: "2023",
    accent: "Healthcare",
    youtubeId: "1NQ1LtteJfA",
  },
  {
    title: "Content SaaS App",
    description: "Designing a content-focused SaaS app.",
    category: "Builds",
    year: "2024",
    accent: "SaaS",
    youtubeId: "kFh19csD95Q",
  },
  {
    title: "MidShift",
    description: "MidShift product design walkthrough.",
    category: "Builds",
    year: "2024",
    accent: "Product",
    youtubeId: "x089E15lVzM",
  },
  {
    title: "Yo-Yo Test App",
    description: "Designing a Yo-Yo test app.",
    category: "Builds",
    year: "2024",
    accent: "Mobile",
    youtubeId: "6pJhMrwxX5c",
  },
  {
    title: "Freight App",
    description: "Designing a freight app.",
    category: "Builds",
    year: "2024",
    accent: "Logistics",
    youtubeId: "y_ZLxMBatwI",
  },
  {
    title: "Anime Page Design",
    description: "Designing an anime-themed page.",
    category: "Builds",
    year: "2024",
    accent: "Visual",
    youtubeId: "tU4fcU63is8",
  },
  {
    title: "Checkout Screen Design",
    description: "Designing a checkout flow — two-part walkthrough.",
    category: "Builds",
    year: "2024",
    accent: "2 parts",
    episodes: [
      { label: "Part 1", youtubeId: "wNN-U3OlCkk" },
      { label: "Part 2", youtubeId: "XfK_pzY8Odk" },
    ],
  },
  {
    title: "Stunning Globe Card Design",
    description: "Designing a striking globe card UI.",
    category: "Builds",
    year: "2024",
    accent: "Visual",
    youtubeId: "pUC9UxiKZj8",
  },
  {
    title: "CryptoPool App",
    description: "Designing CryptoPool, a crypto pooling app.",
    category: "Builds",
    year: "2024",
    accent: "Web3",
    youtubeId: "S79uKH_-z-s",
  },

  // Product Analysis
  {
    title: "Password Creation — B2B Study",
    description:
      "A deep study on how password creation impacts B2B products — friction, security, and trust.",
    category: "Product Analysis",
    year: "2023",
    accent: "Study",
    youtubeId: "U1cWdVD_GWk",
  },
  {
    title: "Healthcare Product — User Journey",
    description: "Mapping the product user journey of a healthcare product.",
    category: "Product Analysis",
    year: "2023",
    accent: "Healthcare",
    youtubeId: "0gLdmk16ou0",
  },
  {
    title: "Family Wallet — Study",
    description: "A study on the family wallet product space.",
    category: "Product Analysis",
    year: "2024",
    accent: "Fintech",
    youtubeId: "eUlojMVdp9A",
  },
  {
    title: "BMW — Panoramic iDrive",
    description: "Explaining the innovation behind BMW's Panoramic iDrive.",
    category: "Product Analysis",
    year: "2024",
    accent: "Automotive",
    youtubeId: "nR8DkS0lUfQ",
  },
  {
    title: "NothingOS — Design Series",
    description: "A six-part series on how NothingOS was designed.",
    category: "Product Analysis",
    year: "2024",
    accent: "6 parts",
    episodes: [
      { label: "Part 1", youtubeId: "5ltbMlB6Ql0" },
      { label: "Part 2", youtubeId: "kImn2jIaD5s" },
      { label: "Part 3", youtubeId: "oRDjnQbPb-4" },
      { label: "Part 4", youtubeId: "CeKTkw24-7M" },
      { label: "Part 5", youtubeId: "VBodNMjLv8Y" },
      { label: "Part 6", youtubeId: "vmFHImA7fD0" },
    ],
  },
  {
    title: "Huly — Craftful Design",
    description: "Breaking down what makes Huly's design feel craftful.",
    category: "Product Analysis",
    year: "2024",
    accent: "Tear-down",
    youtubeId: "mYsuk7JYmYY",
  },
  {
    title: "Ethan Chng — Portfolio Review",
    description: "Reviewing Ethan Chng's portfolio.",
    category: "Product Analysis",
    year: "2024",
    accent: "Portfolio",
    youtubeId: "QPidv60WNaQ",
  },
  {
    title: "Vipin Ragi — Portfolio Review",
    description: "Reviewing Vipin Ragi's portfolio.",
    category: "Product Analysis",
    year: "2024",
    accent: "Portfolio",
    youtubeId: "bwbIrvaVMYQ",
  },

  // Lessons
  {
    title: "Customer Churn",
    description: "What customer churn really means and how to think about it.",
    category: "Lessons",
    year: "2024",
    accent: "Concept",
    youtubeId: "FiJ0e56O3Uw",
  },
  {
    title: "CASTLE Framework",
    description: "A walkthrough of the CASTLE framework.",
    category: "Lessons",
    year: "2024",
    accent: "Framework",
    youtubeId: "7vwEtKudcDQ",
  },
  {
    title: "Design Job Market 2024",
    description: "The state of the design job market in 2024.",
    category: "Lessons",
    year: "2024",
    accent: "Career",
    youtubeId: "Zx_tBKtNcpk",
  },
  {
    title: "Portfolio Framework",
    description: "A framework for building a strong design portfolio.",
    category: "Lessons",
    year: "2024",
    accent: "Career",
    youtubeId: "IwjrOVYixec",
  },
  {
    title: "Salary for Designers",
    description: "Talking honestly about designer salaries.",
    category: "Lessons",
    year: "2024",
    accent: "Career",
    youtubeId: "9YqIHzO8PaY",
  },
  {
    title: "Design Framework",
    description: "A framework I use when approaching design problems.",
    category: "Lessons",
    year: "2024",
    accent: "Framework",
    youtubeId: "p8nY0DdT4_8",
  },
  {
    title: "Design Process",
    description: "How I run my design process.",
    category: "Lessons",
    year: "2024",
    accent: "Process",
    youtubeId: "U02lM2dALok",
  },
  {
    title: "Choosing the Right Chart",
    description: "Picking the right chart for your data.",
    category: "Lessons",
    year: "2024",
    accent: "Data viz",
    youtubeId: "-4OWeeuDEVs",
  },
  {
    title: "Elevation Explained",
    description: "What elevation in UI design actually means.",
    category: "Lessons",
    year: "2024",
    accent: "UI",
    youtubeId: "mKO7v_ZSN4A",
  },
  {
    title: "Design Systems — Typography & Colour",
    description: "Building the typography and colour foundation of a design system.",
    category: "Lessons",
    year: "2024",
    accent: "Design system",
    youtubeId: "zg7cloXQlvA",
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
