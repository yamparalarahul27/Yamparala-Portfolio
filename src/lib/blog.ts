export type BlogEntry = {
  date: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  lastUpdated: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  published: boolean;
  entries?: BlogEntry[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-engineering",
    lastUpdated: "2026-04-01",
    title: "AI Engineering",
    category: "Technical",
    excerpt:
      "A running log of practical engineering notes: keep PRs screen-specific so a blocked change never holds back an unrelated one, and audit every PR for dependency impact before merging.",
    readTime: "6 min read",
    published: true,
    entries: [
      {
        date: "2026-03-24",
        title: "Claude Code on Mobile and the Localhost Problem",
        paragraphs: [
          "I am trying Claude Code on mobile to develop my log app, and it is really great.",
          "There is one minor challenge: how to view localhost on mobile while developing.",
          "Found a solution called Wormkey: https://github.com/max-pantom/worm — will share more about it as I go.",
          "Update: Installed Wormkey, but it requires the machine to be running 24/7 to work. Skipping it for now.",
        ],
      },
      {
        date: "2026-03-24",
        title: "Keep PRs Screen-Specific",
        paragraphs: [
          "A PR can either be merged or canceled. That binary outcome means every PR needs to stand on its own.",
          "When changes span multiple screens, a single dependency issue on one screen can block the entire PR from merging, including unrelated changes on other screens that were perfectly fine.",
          "The rule is simple: keep changes screen-specific. If an asset is updated on the profile screen, raise a PR for the profile screen only. The home screen and market screen get their own separate PRs.",
          "This is not about limiting the number of PRs. It is the opposite. Raise as many PRs as needed. More focused PRs move faster, get reviewed more accurately, and can be merged or canceled independently without collateral damage.",
        ],
        bullets: [
          "One screen per PR, not one PR for all screens.",
          "A blocked change should never hold back an unrelated change.",
          "Functionality dependencies are screen-local, so PRs should be too.",
          "Do not limit yourself by PR count. Limit yourself by scope.",
        ],
      },
      {
        date: "2026-03-25",
        title: "Figma is the Source of Truth",
        paragraphs: [
          "Everyone is saying Figma is dead. I kind of believed it too. But what is happening in the current workspace is the total opposite.",
          "I assumed the source of truth would be a granular PRD, and that everything else would derive from it. In a startup environment, that is not true. PMs use architecture docs as the source of truth and derive features from there. Getting to granular UX and technical detail from that is still broken.",
          "What is actually happening is Figma is becoming the source of truth. It is the place where UI, UX, Dev, and QA all meet.",
        ],
        bullets: [
          "UI: colours and typography are already there.",
          "UX: you can create flows with prototype mode.",
          "Dev: MCP integration works well with Claude and Codex.",
          "QA: they can use Dev Mode to check for UI and UX bugs.",
        ],
      },
      {
        date: "2026-03-25",
        title: "PR Audits and Dependency Checks",
        paragraphs: [
          "Over the last two days, I have been working on minor UI and UX fixes for the Crpko Web Platform and raising PRs.",
          "One point I missed, and now see as a must, is that every PR needs a proper audit before it moves forward.",
          "Before making any change, even something that looks tiny like updating an icon, it is important to check functionality dependencies.",
          "Small UI changes can look isolated, but they can still affect behavior, user flow, or connected parts of the product in ways that are easy to miss.",
        ],
        bullets: [
          "Audit the PR before merging.",
          "Check what functionality depends on the change.",
          "Do not assume a visual update is risk-free.",
          "Treat even icon changes with the same engineering discipline.",
        ],
      },
      {
        date: "2026-03-30",
        title: "Design Engineering and the Rise of Product Thinkers",
        paragraphs: [
          "Design engineering is getting more interesting as I am working on it. As I am getting deep into it, I am feeling less about losing the value of software developers, and seeing the rise of people who truly take control and think in the perspective of product.",
          "Currently, I am more involved in doing minor edits by Claude mobile and major by Claude desktop and Codex.",
        ],
      },
      {
        date: "2026-04-01",
        title: "Tabular Nums for Updating Values",
        paragraphs: [
          "One tip from my make-interfaces-feel-better skill is using `font-variant-numeric: tabular-nums` for values that update.",
          "It makes digits equal width, similar to monospace fonts. Keep in mind that some fonts change the appearance of numerals when this is used.",
        ],
      },
    ],
  },
  {
    slug: "leading-team",
    lastUpdated: "2026-04-03",
    title: "Leading Team",
    category: "Thinking",
    excerpt:
      "For the first time, leading a team of 2 at Crpko — and a major unlock already on day one.",
    readTime: "3 min read",
    published: true,
    entries: [
      {
        date: "2026-03-24",
        title: "A Major Unlock for the Team",
        paragraphs: [
          "For the first time, I am leading a team of 2 at Crpko (Equicomtech).",
          "Today I saw a major unlock for my team. Shaina is a graphic designer, and while working together we found a major issue with how graphics get updated across the web and mobile platforms.",
          "The current flow involved downloading assets, sharing them through Drive organised in folders — boring, manual, and slow. Every update meant repeating the same tedious steps.",
          "I took the initiative to have Shaina build an app specifically for managing graphics. Here is the link: Shainam.vercel.app",
        ],
      },
      {
        date: "2026-03-26",
        title: "The Simplest Animation Solution Comes from a Smoke Break",
        paragraphs: [
          "Yesterday before closing the day, I suggested adding animations for each SVG uploaded in the graphics app.",
          "There are many ways to do it, but which one to pick depends on how effortlessly you can make it happen.",
          "During the discussion, one idea was to build an editor environment inside the app for animations. Too much time and effort.",
          "The real solution came during a smoke break — I do not smoke, but I join others because ideas flow really well at that time.",
          "The idea: create identifiers for SVG elements that need to be animated, and assign a CSS class for each animation type. No editor needed. Clean, simple, and fast to implement.",
        ],
      },
      {
        date: "2026-04-03",
        title: "Hiring for Communication, Not Just Skills",
        paragraphs: [
          "Hiring is very important. More than skills, communication is important. As agents become more powerful — even right now they can design — but what to design and how is still the job of a human, which needs clear communication.",
          "In my last hire, I neglected this and went for only work because it was urgent. But it did not turn out to be much help.",
        ],
      },
    ],
  },
  {
    slug: "why-i-build-in-public",
    lastUpdated: "2025-03-15",
    title: "Why I Build in Public",
    category: "Thinking",
    excerpt:
      "On the value of sharing rough work, learning out loud, and letting the process be visible.",
    readTime: "4 min read",
    published: false,
  },
  {
    slug: "design-engineering-is-a-spectrum",
    lastUpdated: "2025-02-28",
    title: "Design Engineering Is a Spectrum",
    category: "Craft",
    excerpt:
      "Exploring the space between pixel-perfect design and production-grade code and why living in that gap is a superpower.",
    readTime: "5 min read",
    published: false,
  },
  {
    slug: "solana-order-matching-lessons-from-ome-sim",
    lastUpdated: "2025-02-10",
    title: "Solana Order Matching: Lessons from OME-sim",
    category: "Technical",
    excerpt:
      "What I learned building a production-grade Rust order matching engine on Solana for a Superteam bounty.",
    readTime: "7 min read",
    published: false,
  },
  {
    slug: "indexing-product-knowledge",
    lastUpdated: "2026-03-24",
    title: "Indexing Product Knowledge",
    category: "Product",
    excerpt:
      "Early notes on YDex and the problem of retrieving the right context at the right time.",
    readTime: "4 min read",
    published: true,
    entries: [
      {
        date: "2026-03-24",
        title: "Product Knowledge is the Edge",
        paragraphs: [
          "Product knowledge became more important in the AI world as building things became way easier. The edge is only in how fast, how simple, and how lean you can build.",
          "Today I worked on end-to-end positive cases for limit orders and explained them to QA freshers — walking them through how to raise, suggest, and ideate on what can be done best.",
        ],
      },
    ],
  },
  {
    slug: "the-case-for-fewer-features",
    lastUpdated: "2025-01-05",
    title: "The Case for Fewer Features",
    category: "Thinking",
    excerpt:
      "Most products ship too much. A short argument for restraint, focus, and saying no more often.",
    readTime: "3 min read",
    published: false,
  },
];

export const publishedBlogPosts = blogPosts.filter((post) => post.published);

export function getBlogPostBySlug(slug: string) {
  return publishedBlogPosts.find((post) => post.slug === slug);
}
