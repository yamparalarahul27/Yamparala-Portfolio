import Link from "next/link";
import BackLink from "../../../components/BackLink";

type RouteNode = {
  path: string;
  label: string;
  group: string;
  linked: boolean; // reachable via navigation from another page
  dynamic?: { slugs: string[]; buildPath: (slug: string) => string };
  children?: RouteNode[];
};

const siteTree: RouteNode[] = [
  {
    path: "/",
    label: "Landing",
    group: "(landing)",
    linked: true,
  },
  {
    path: "/mini",
    label: "Mini — Wiki / Portfolio",
    group: "(main)",
    linked: true,
  },
  {
    path: "/cv",
    label: "CV — Industry Resume",
    group: "(main)",
    linked: true,
  },
  {
    path: "/social",
    label: "Social Channels",
    group: "(main)",
    linked: true,
  },
  {
    path: "/family-values",
    label: "Family Values",
    group: "(main)",
    linked: true,
  },
  {
    path: "/projects/[slug]",
    label: "Projects — Case Studies",
    group: "(main)",
    linked: true,
    dynamic: {
      slugs: ["password-ux", "pubkey"],
      buildPath: (slug) => `/projects/${slug}`,
    },
  },
  {
    path: "/feedback/[slug]",
    label: "Feedback — UX Audits",
    group: "(main)",
    linked: false,
    dynamic: {
      slugs: ["sanctum"],
      buildPath: (slug) => `/feedback/${slug}`,
    },
  },
  {
    path: "/blog",
    label: "Blog — Index",
    group: "(blog)",
    linked: false,
  },
  {
    path: "/blog/[slug]",
    label: "Blog — Posts",
    group: "(blog)",
    linked: false,
    dynamic: {
      slugs: [
        "ai-engineering",
        "leading-team",
        "why-i-build-in-public",
        "design-engineering-is-a-spectrum",
        "solana-order-matching-lessons-from-ome-sim",
        "indexing-product-knowledge",
        "the-case-for-fewer-features",
      ],
      buildPath: (slug) => `/blog/${slug}`,
    },
  },
  {
    path: "/test",
    label: "Test / Playground",
    group: "root",
    linked: false,
  },
  {
    path: "/sitemap",
    label: "Sitemap (this page)",
    group: "(main)",
    linked: false,
  },
];

function RouteCard({ node }: { node: RouteNode }) {
  return (
    <div className="flex flex-col gap-2">
      {/* Main route */}
      <div className="flex items-start gap-3 p-3 border border-[var(--border-color)] rounded-md bg-[var(--surface-color)]">
        <span
          className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
            node.linked ? "bg-emerald-500" : "bg-[var(--text-secondary)] opacity-40"
          }`}
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={node.dynamic ? node.dynamic.buildPath(node.dynamic.slugs[0]) : node.path}
              className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
            >
              {node.label}
            </Link>
            <code className="text-[0.65rem] px-1.5 py-0.5 rounded bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-secondary)]">
              {node.path}
            </code>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="text-[0.625rem] font-medium tracking-wider uppercase text-[var(--text-secondary)]">
              {node.group}
            </span>
            {!node.linked && (
              <span className="text-[0.625rem] font-semibold tracking-wider uppercase text-[var(--accent)]">
                unlinked
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Dynamic children */}
      {node.dynamic && (
        <div className="ml-5 pl-4 border-l-2 border-[var(--border-color)] flex flex-col gap-1.5">
          {node.dynamic.slugs.map((slug) => {
            const href = node.dynamic!.buildPath(slug);
            return (
              <Link
                key={slug}
                href={href}
                className="group flex items-center gap-2 py-1 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-color)] group-hover:bg-[var(--accent)] transition-colors" />
                <code className="text-xs">{href}</code>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function SitemapPage() {
  const linked = siteTree.filter((n) => n.linked);
  const unlinked = siteTree.filter((n) => !n.linked);
  const totalRoutes =
    siteTree.length +
    siteTree.reduce((acc, n) => acc + (n.dynamic?.slugs.length ?? 0), 0);

  return (
    <main className="page-container mt-12 sm:mt-16 lg:mt-[72px] px-3 sm:px-4 text-[var(--text-primary)]">
      <BackLink href="/" label="Back" className="mb-4 animate-enter" />

      <header className="mb-8 animate-enter delay-100">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Sitemap</h1>
        <p className="text-sm text-[var(--text-secondary)] mt-2">
          {totalRoutes} total routes &middot;{" "}
          <span className="inline-flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> linked
          </span>{" "}
          &middot;{" "}
          <span className="inline-flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[var(--text-secondary)] opacity-40 inline-block" />{" "}
            unlinked
          </span>
        </p>
      </header>

      {/* ── Tree diagram (ASCII / visual) ── */}
      <section className="mb-8 animate-enter delay-200">
        <pre className="text-xs sm:text-sm font-mono text-[var(--text-secondary)] leading-relaxed overflow-x-auto p-4 border border-[var(--border-color)] rounded-md bg-[var(--surface-color)]">
{`hirahul.xyz
├── /                          Landing
├── /mini                      Wiki / Portfolio
├── /cv                        Industry Resume
├── /social                    Social Channels
├── /family-values             Family Values
│
├── /projects
│   ├── /projects/password-ux  Case Study: Password UX
│   └── /projects/pubkey       Case Study: PubKey
│
├── /feedback
│   └── /feedback/sanctum      UX Audit: Sanctum
│
├── /blog
│   ├── /blog/ai-engineering
│   ├── /blog/leading-team
│   ├── /blog/why-i-build-in-public
│   ├── /blog/design-engineering-is-a-spectrum
│   ├── /blog/solana-order-matching-lessons-from-ome-sim
│   ├── /blog/indexing-product-knowledge
│   └── /blog/the-case-for-fewer-features
│
├── /test                      Playground
└── /sitemap                   This page`}
        </pre>
      </section>

      {/* ── Linked routes ── */}
      <section className="mb-8 animate-enter delay-300">
        <h2 className="text-lg font-bold tracking-tight mb-3">
          Linked Routes
          <span className="text-sm font-normal text-[var(--text-secondary)] ml-2">
            Reachable via navigation
          </span>
        </h2>
        <div className="flex flex-col gap-3">
          {linked.map((node) => (
            <RouteCard key={node.path} node={node} />
          ))}
        </div>
      </section>

      {/* ── Unlinked routes ── */}
      <section className="mb-12 animate-enter delay-400">
        <h2 className="text-lg font-bold tracking-tight mb-3">
          Unlinked Routes
          <span className="text-sm font-normal text-[var(--text-secondary)] ml-2">
            Direct URL access only
          </span>
        </h2>
        <div className="flex flex-col gap-3">
          {unlinked.map((node) => (
            <RouteCard key={node.path} node={node} />
          ))}
        </div>
      </section>
    </main>
  );
}
