export type Industry = "ai" | "b2b" | "web3";

interface Bullet {
  text: string;
  relevance: Record<Industry, number>;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: Bullet[];
  relevance: Record<Industry, number>;
}

interface Skill {
  category: string;
  items: string[];
  relevance: Record<Industry, number>;
}

interface Education {
  institution: string;
  degree: string;
  year: string;
}

interface Certification {
  name: string;
  issuer: string;
}

interface Community {
  name: string;
  role: string;
  relevance: Record<Industry, number>;
}

export interface CVData {
  name: string;
  title: Record<Industry, string>;
  contact: {
    email: string;
    phone: string;
    website: string;
    linkedin: string;
  };
  summary: Record<Industry, string>;
  experience: Experience[];
  skills: Skill[];
  education: Education[];
  certifications: Certification[];
  community: Community[];
}

export const cvData: CVData = {
  name: "Yamparala Rahul",
  title: {
    ai: "Design Engineer — AI & Product",
    b2b: "Design Engineer — B2B SaaS & Enterprise",
    web3: "Design Engineer — Web3 & DeFi",
  },
  contact: {
    email: "rahulvignanwork@gmail.com",
    phone: "+91 8897132717",
    website: "hirahul.xyz",
    linkedin: "linkedin.com/in/yamparalarahul",
  },
  summary: {
    ai: "Design Engineer with 5.2 years of experience building user-centric products across healthcare, B2B SaaS, and web3. Currently building AI-powered UX tools like AgentUX and LearnDex. Passionate about applying AI to simplify complex product experiences and improve developer-designer workflows.",
    b2b: "Design Engineer with 5.2 years of experience building user-centric products across healthcare, B2B SaaS, and web3. Spent 2.4 years simplifying complex B2B workflows at Entytle, improving user retention by 7%. Skilled at translating enterprise complexity into clean, usable interfaces.",
    web3: "Design Engineer with 5.2 years of experience building user-centric products across healthcare, B2B SaaS, and web3. Currently at Equicom Technologies building web3 products. Previously revamped Pubkey's Discord verification UI on Solana. Active contributor at SuperteamIndia and member of IslandDAO.",
  },
  experience: [
    {
      company: "Equicom Technologies",
      role: "Design Engineer",
      period: "2025 – Present",
      location: "Bangalore, India",
      bullets: [
        { text: "Building web3 products including DeFi interfaces and blockchain tooling", relevance: { ai: 5, b2b: 4, web3: 10 } },
        { text: "Developing internal tools like Crpko Graphic Lab for design-developer handoff", relevance: { ai: 6, b2b: 8, web3: 6 } },
        { text: "Leading frontend architecture decisions using Next.js and React", relevance: { ai: 8, b2b: 8, web3: 8 } },
      ],
      relevance: { ai: 6, b2b: 6, web3: 10 },
    },
    {
      company: "Pubkey",
      role: "Design Engineer (Contract)",
      period: "2024",
      location: "Remote",
      bullets: [
        { text: "Revamped open-source Discord verification UI on Solana in a 1-month sprint", relevance: { ai: 4, b2b: 5, web3: 10 } },
        { text: "Delivered end-to-end mobile and web designs for the verification flow", relevance: { ai: 5, b2b: 6, web3: 8 } },
      ],
      relevance: { ai: 4, b2b: 5, web3: 10 },
    },
    {
      company: "Entytle",
      role: "UX Designer",
      period: "2022 – 2024",
      location: "Remote (US-based)",
      bullets: [
        { text: "Designed 3 end-to-end B2B SaaS products for installed base management", relevance: { ai: 6, b2b: 10, web3: 4 } },
        { text: "Achieved 7% increase in user retention through UX improvements", relevance: { ai: 7, b2b: 10, web3: 5 } },
        { text: "Simplified complex enterprise data workflows into intuitive interfaces", relevance: { ai: 8, b2b: 10, web3: 4 } },
      ],
      relevance: { ai: 6, b2b: 10, web3: 4 },
    },
    {
      company: "Synclo",
      role: "UI Designer",
      period: "2020 – 2022",
      location: "Singapore (Remote)",
      bullets: [
        { text: "Built 4 end-to-end healthcare products for connected OPD care", relevance: { ai: 7, b2b: 8, web3: 3 } },
        { text: "Onboarded 3 multi-speciality hospitals onto the platform", relevance: { ai: 5, b2b: 9, web3: 3 } },
        { text: "Designed patient-facing and doctor-facing interfaces for clinical workflows", relevance: { ai: 7, b2b: 8, web3: 3 } },
      ],
      relevance: { ai: 6, b2b: 8, web3: 3 },
    },
    {
      company: "Yamparala.in",
      role: "Founder",
      period: "2019 – Present",
      location: "India",
      bullets: [
        { text: "Founded personal design studio handling freelance and side projects", relevance: { ai: 5, b2b: 5, web3: 5 } },
        { text: "Building side projects: AgentUX (AI UX tool), LearnDex, Deriverse Trading Journal", relevance: { ai: 9, b2b: 6, web3: 8 } },
        { text: "Won Superteam bounty with Deriverse Trading Journal on Solana", relevance: { ai: 4, b2b: 4, web3: 10 } },
      ],
      relevance: { ai: 7, b2b: 5, web3: 7 },
    },
  ],
  skills: [
    { category: "Design", items: ["UI/UX Design", "Design Systems", "Prototyping", "User Research", "Figma"], relevance: { ai: 8, b2b: 10, web3: 8 } },
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"], relevance: { ai: 9, b2b: 9, web3: 9 } },
    { category: "AI & Tools", items: ["AI-assisted workflows", "Claude", "Prompt Engineering", "AgentUX"], relevance: { ai: 10, b2b: 6, web3: 5 } },
    { category: "Web3", items: ["Solana", "DeFi interfaces", "Blockchain tooling", "dApp design"], relevance: { ai: 4, b2b: 3, web3: 10 } },
    { category: "General", items: ["Git", "Agile/Scrum", "Cross-functional collaboration", "Product thinking"], relevance: { ai: 7, b2b: 9, web3: 7 } },
  ],
  education: [
    { institution: "Vignan University", degree: "B.Tech", year: "2019" },
  ],
  certifications: [
    { name: "Google UX Design Certificate", issuer: "Google" },
    { name: "Enterprise Design Thinking", issuer: "IBM" },
  ],
  community: [
    { name: "IslandDAO", role: "Member", relevance: { ai: 5, b2b: 4, web3: 10 } },
    { name: "SuperteamIndia", role: "Contributor", relevance: { ai: 5, b2b: 4, web3: 10 } },
    { name: "Greed Academy", role: "Graduate", relevance: { ai: 5, b2b: 5, web3: 8 } },
  ],
};

export interface OrderedCV {
  name: string;
  title: string;
  contact: CVData["contact"];
  summary: string;
  experience: Experience[];
  skills: Skill[];
  education: Education[];
  certifications: Certification[];
  community: Community[];
}

export function getOrderedCV(data: CVData, industry: Industry): OrderedCV {
  const sortByRelevance = <T extends { relevance: Record<Industry, number> }>(items: T[]): T[] =>
    [...items].sort((a, b) => b.relevance[industry] - a.relevance[industry]);

  const experience = sortByRelevance(data.experience).map((exp) => ({
    ...exp,
    bullets: [...exp.bullets].sort((a, b) => b.relevance[industry] - a.relevance[industry]),
  }));

  return {
    name: data.name,
    title: data.title[industry],
    contact: data.contact,
    summary: data.summary[industry],
    experience,
    skills: sortByRelevance(data.skills),
    education: data.education,
    certifications: data.certifications,
    community: sortByRelevance(data.community),
  };
}
