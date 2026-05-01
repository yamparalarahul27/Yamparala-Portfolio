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
