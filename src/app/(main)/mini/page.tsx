import Image from "next/image";
import Link from "next/link";
import BackLink from "../../../components/BackLink";
import "./mini-wiki.css";

type WorkItem = {
  year: string;
  title: string;
  type: string;
  note: string;
  status: string;
  href?: string;
};

type WritingItem = {
  published: string;
  title: string;
  href: string;
};

type ChannelItem = {
  name: string;
  handle: string;
  subscribers: string;
  description: string;
  href: string;
};

type LogItem = {
  date: string;
  action: string;
  details: string;
};

type SuperteamWin = {
  title: string;
  sponsor: string;
  prize: string;
  type: string;
  href?: string;
};

const careerHighlights = [
  "Founded Yamparala.in in 2019 and began publishing design and product work in public.",
  "Worked at Entytle (2020-2022) on installed-base management and B2B SaaS product UX.",
  "Worked at Synclo (2022-2024) on OPD and healthcare workflows across multiple hospital products.",
  "Joined Equicom Technologies in 2025 and continued building web3 products and internal tooling.",
  "Maintains an active builder profile on Superteam Earn with public submission and win history.",
];

const workItems: WorkItem[] = [
  {
    year: "2024",
    title: "Revamping Opensource Discord Verification (Pubkey)",
    type: "Product design",
    note: "One-month sprint across mobile and web surfaces for a Solana community product.",
    status: "Case study",
  },
  {
    year: "2022-2024",
    title: "Connected OPD Care Platform (Synclo)",
    type: "UI/UX design",
    note: "Two-year healthcare product stream with multiple hospital deployments.",
    status: "Shipped",
  },
  {
    year: "2020-2022",
    title: "Installed Base Management (Entytle)",
    type: "UX design",
    note: "Designed workflows for B2B SaaS service intelligence and retention improvement.",
    status: "Shipped",
  },
  {
    year: "2024",
    title: "Deriverse Trading Journal",
    type: "Side quest",
    note: "Built for a Superteam Earn bounty in the Deriverse ecosystem.",
    status: "Live",
    href: "https://deriverse.hirahul.xyz",
  },
  {
    year: "2024",
    title: "Crpko Graphic Lab",
    type: "Internal tool",
    note: "Design-feedback and handoff workflow utility for Equicom workstreams.",
    status: "Internal",
  },
  {
    year: "2024",
    title: "Log & Resources of Rahul",
    type: "Internal tooling",
    note: "Centralized archive of references, ideas, and product resources.",
    status: "Live",
    href: "https://log.hirahul.xyz",
  },
  {
    year: "2025",
    title: "LearnDex",
    type: "Product (WIP)",
    note: "Structured indexing and retrieval concept for product learning content.",
    status: "WIP",
    href: "https://learndex.hirahul.xyz/",
  },
  {
    year: "2025",
    title: "AgentUX",
    type: "Product (WIP)",
    note: "UX-flow diagnosis concept for founders and developers.",
    status: "WIP",
    href: "https://agentux.hirahul.xyz/",
  },
  {
    year: "2025",
    title: "ConceptDJ",
    type: "Side quest",
    note: "Feature exploration playground for future Deriverse Journal ideas.",
    status: "Concept",
  },
  {
    year: "2025",
    title: "OME-sim",
    type: "Side quest",
    note: "Rust/Solana order-matching engine simulation prototype for bounty work.",
    status: "Prototype",
    href: "https://ome.hirahul.xyz",
  },
  {
    year: "2025",
    title: "YPM",
    type: "Research idea",
    note: "Prediction-market simplification concept.",
    status: "Idea",
  },
  {
    year: "2025",
    title: "YouSoft",
    type: "Research idea",
    note: "Experiment around software discovery in a YouTube-like format.",
    status: "Idea",
  },
  {
    year: "2025",
    title: "Proteus",
    type: "Research idea",
    note: "Cross-chain analytics and personalized dApp portal concept.",
    status: "Idea",
    href: "https://proteus.hirahul.xyz",
  },
  {
    year: "2025",
    title: "YAsset",
    type: "Mini app",
    note: "Asset-versus-liability tracking concept for personal finance.",
    status: "Mini app",
  },
  {
    year: "2025",
    title: "Localhost Status App",
    type: "Internal tooling",
    note: "Utility dashboard to monitor local services during development.",
    status: "Live utility",
    href: "https://localhost.hirahul.xyz",
  },
  {
    year: "2025",
    title: "App Backgrounds",
    type: "Mini app",
    note: "Curated app-background utility for design and product work.",
    status: "Live utility",
    href: "https://bg.hirahul.xyz",
  },
];

const superteamWins: SuperteamWin[] = [
  {
    title: "Deriverse Trading Journal",
    sponsor: "Deriverse",
    prize: "$500",
    type: "Bounty",
    href: "https://deriverse.hirahul.xyz",
  },
  {
    title: "OME-sim: Order Matching Engine",
    sponsor: "Superteam",
    prize: "$350",
    type: "Bounty",
    href: "https://ome.hirahul.xyz",
  },
  {
    title: "Stablecoin Payments Research",
    sponsor: "Superteam",
    prize: "$250",
    type: "Content",
  },
  {
    title: "Prediction Markets Typology",
    sponsor: "Superteam",
    prize: "$200",
    type: "Content",
  },
  {
    title: "RWAs on Solana Deep Dive",
    sponsor: "Superteam",
    prize: "$200",
    type: "Content",
  },
  {
    title: "Carrot DeFi UX Concept",
    sponsor: "Superteam",
    prize: "$200",
    type: "Design",
  },
  {
    title: "Proteus Cross-Chain Portal",
    sponsor: "Superteam",
    prize: "$200",
    type: "Design",
    href: "https://proteus.hirahul.xyz",
  },
  {
    title: "Pubkey Discord Verification Redesign",
    sponsor: "Pubkey",
    prize: "$250",
    type: "Design",
  },
  {
    title: "App Backgrounds Utility",
    sponsor: "Superteam",
    prize: "$180",
    type: "Bounty",
    href: "https://bg.hirahul.xyz",
  },
  {
    title: "AgentUX Flow Diagnosis Tool",
    sponsor: "Superteam",
    prize: "$200",
    type: "Design",
    href: "https://agentux.hirahul.xyz/",
  },
];

const writings: WritingItem[] = [
  {
    published: "October 27, 2025",
    title: "How Stablecoins Are Transforming Digital Payments for Merchants",
    href: "https://medium.com/@yamparala/how-stablecoins-are-transforming-digital-payments-for-merchants-fbae63090129",
  },
  {
    published: "October 14, 2025",
    title: "Carrot: Making DeFi Simple and Personal Finance with 2 Clicks",
    href: "https://medium.com/@yamparala/carrot-making-defi-simple-and-personal-finance-with-2-clicks-796d99b9ac72",
  },
  {
    published: "September 15, 2025",
    title: "Inside Prediction Markets: A Technical Typology",
    href: "https://medium.com/@yamparala/inside-prediction-markets-a-technical-typology-f1eb70ac8ca7",
  },
  {
    published: "July 6, 2025",
    title: "The State of RWAs on Solana - A Deep Dive",
    href: "https://medium.com/@yamparala/the-state-of-rwas-on-solana-a-deep-dive-5b2e96a3fd2f",
  },
];

const channels: ChannelItem[] = [
  {
    name: "Yamparala Rahul",
    handle: "@yamparalarahul",
    subscribers: "432 subscribers",
    description: "Web3 Designer + Love making Videos",
    href: "https://www.youtube.com/@yamparalarahul",
  },
  {
    name: "Yamparala Academy",
    handle: "@yamparalaacademy",
    subscribers: "48 subscribers",
    description: "Learning and exploration channel focused on practical new-world skills.",
    href: "https://www.youtube.com/@yamparalaacademy",
  },
  {
    name: "Yamparala Media",
    handle: "@yamparalamedia",
    subscribers: "58 subscribers",
    description: "Story channel on AI, building in public, and visibility brand experiments.",
    href: "https://www.youtube.com/@yamparalamedia",
  },
];

const maintenanceWorkflow = [
  "Ingest: add public source links (articles, profiles, portfolio pages) and merge new facts.",
  "Query: use the existing profile sections as the base layer for updates and additions.",
  "Lint: verify claims, refresh stale numbers, and flag missing references before publishing.",
];

const profileLog: LogItem[] = [
  {
    date: "2026-04-06",
    action: "Initial wiki-style profile compile",
    details: "Structured career, works, writing, social, on-chain, and references sections.",
  },
  {
    date: "2026-04-06",
    action: "Workflow model update",
    details: "Adopted persistent wiki maintenance pattern inspired by the LLM Wiki resource.",
  },
];

const references = [
  "https://www.hirahul.xyz",
  "https://superteam.fun/earn/t/yamparalarahul",
  "https://medium.com/feed/@yamparala",
  "https://www.youtube.com/@yamparalarahul",
  "https://www.youtube.com/@yamparalaacademy",
  "https://www.youtube.com/@yamparalamedia",
  "https://x.com/yamparalarahul1",
  "https://www.linkedin.com/in/yamparalarahul/",
  "https://www.tensor.trade/item/2HGzCZTxZiMDTrqzbGwud2a7aUY9JKsyXXyJ6Nk5xpcp",
  "https://gist.github.com/farzaa/c35ac0cfbeb957788650e36aabea836d",
  "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f",
];

export default function MiniPortfolio() {
  return (
    <>
      <main className="page-container mt-12 sm:mt-16 lg:mt-[72px] px-3 sm:px-4 text-[var(--text-primary)] [&_section]:!p-0 [&_section>div]:!p-0 [&_p]:text-pretty [&_h1]:text-balance [&_h2]:text-balance [&_h3]:text-balance">
        <BackLink href="/" label="Back" className="mb-4" />

        <article className="wiki-article">
          <header className="wiki-header">
            <h1 className="text-balance font-serif text-2xl sm:text-3xl lg:text-4xl">Yamparala Rahul</h1>
            <p className="mt-1 text-sm wiki-muted">
              Wikipedia-style mini profile page - Last verified on April 6, 2026
            </p>
          </header>

          <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-0">
            <div className="order-2 lg:order-1 px-3 py-4 sm:px-6 sm:py-6 lg:border-r wiki-border min-w-0">
              <p className="text-pretty leading-7">
                <strong>Yamparala Rahul</strong> is an India-based design engineer focused on web3
                products, product UX, and technical writing. Public profiles link him to Solana
                ecosystem work, Superteam bounties, and independent product experiments under the
                Yamparala / hirahul identity.
              </p>

              <nav className="mt-4 sm:mt-6 wiki-card p-2 sm:p-3 text-sm">
                <p className="mb-2 font-semibold">Contents</p>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-1">
                  <li><a href="#career" className="wiki-link">Career overview</a></li>
                  <li><a href="#work" className="wiki-link">Projects and work log</a></li>
                  <li><a href="#wins" className="wiki-link">Superteam Earn wins</a></li>
                  <li><a href="#writing" className="wiki-link">Articles and research writing</a></li>
                  <li><a href="#media" className="wiki-link">Social and media channels</a></li>
                  <li><a href="#onchain" className="wiki-link">On-chain collectible</a></li>
                  <li><a href="#references" className="wiki-link">References</a></li>
                  <li><a href="#maintenance" className="wiki-link">Maintenance model and log</a></li>
                </ol>
              </nav>

              <div className="mt-4 sm:mt-6 space-y-5 sm:space-y-6">
                <section id="career">
                  <h2 className="wiki-section-title">Career overview</h2>
                  <ul className="mt-3 list-disc space-y-2 pl-4 sm:pl-6 leading-7">
                    {careerHighlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section id="work">
                  <h2 className="wiki-section-title">Projects and work log</h2>
                  <p className="mt-3 text-sm wiki-muted">
                    Compiled from existing portfolio entries and linked public pages.
                  </p>
                  <div className="mt-3 space-y-2 sm:hidden">
                    {workItems.map((item) => (
                      <article key={`mobile-${item.year}-${item.title}`} className="wiki-card p-2.5">
                        <p className="text-xs wiki-muted">
                          {item.year} - {item.status}
                        </p>
                        <p className="mt-1 font-semibold">
                          {item.href ? (
                            <Link href={item.href} target="_blank" rel="noreferrer" className="wiki-link">
                              {item.title}
                            </Link>
                          ) : (
                            item.title
                          )}
                        </p>
                        <p className="mt-1 text-xs uppercase wiki-muted">{item.type}</p>
                        <p className="mt-2 text-sm leading-6">{item.note}</p>
                      </article>
                    ))}
                  </div>

                  <div className="mt-3 hidden overflow-x-auto sm:block">
                    <table className="wiki-table">
                      <thead>
                        <tr>
                          <th>Year</th>
                          <th>Work</th>
                          <th>Type</th>
                          <th>Status</th>
                          <th>Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {workItems.map((item) => (
                          <tr key={`${item.year}-${item.title}`} className="align-top">
                            <td>{item.year}</td>
                            <td>
                              {item.href ? (
                                <Link href={item.href} target="_blank" rel="noreferrer" className="wiki-link">
                                  {item.title}
                                </Link>
                              ) : (
                                item.title
                              )}
                            </td>
                            <td>{item.type}</td>
                            <td>{item.status}</td>
                            <td>{item.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="wins">
                  <h2 className="wiki-section-title">Superteam Earn wins</h2>
                  <p className="mt-3 text-sm wiki-muted">
                    10 wins from 45 submissions on{" "}
                    <Link href="https://earn.superteam.fun/t/yamparalarahul" target="_blank" rel="noreferrer" className="wiki-link">
                      Superteam Earn
                    </Link>
                    . Total earnings: <strong>$2,530</strong>.
                  </p>

                  {/* Mobile cards */}
                  <div className="mt-3 space-y-2 sm:hidden">
                    {superteamWins.map((win) => (
                      <article key={win.title} className="wiki-card p-2.5">
                        <p className="font-semibold">
                          {win.href ? (
                            <Link href={win.href} target="_blank" rel="noreferrer" className="wiki-link">
                              {win.title}
                            </Link>
                          ) : (
                            win.title
                          )}
                        </p>
                        <p className="mt-1 text-xs wiki-muted">
                          {win.sponsor} &middot; {win.type} &middot; {win.prize}
                        </p>
                      </article>
                    ))}
                  </div>

                  {/* Desktop table */}
                  <div className="mt-3 hidden overflow-x-auto sm:block">
                    <table className="wiki-table">
                      <thead>
                        <tr>
                          <th>Win</th>
                          <th>Sponsor</th>
                          <th>Type</th>
                          <th>Prize</th>
                        </tr>
                      </thead>
                      <tbody>
                        {superteamWins.map((win) => (
                          <tr key={win.title} className="align-top">
                            <td>
                              {win.href ? (
                                <Link href={win.href} target="_blank" rel="noreferrer" className="wiki-link">
                                  {win.title}
                                </Link>
                              ) : (
                                win.title
                              )}
                            </td>
                            <td>{win.sponsor}</td>
                            <td>{win.type}</td>
                            <td>{win.prize}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="writing">
                  <h2 className="wiki-section-title">Articles and research writing</h2>
                  <ul className="mt-3 list-disc space-y-2 pl-4 sm:pl-6 leading-7">
                    {writings.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} target="_blank" rel="noreferrer" className="wiki-link">
                          {item.title}
                        </Link>{" "}
                        <span className="wiki-muted">({item.published})</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="media">
                  <h2 className="wiki-section-title">Social and media channels</h2>
                  <p className="text-pretty mt-3 text-sm leading-6">
                    Social links:
                    {" "}
                    <Link href="https://x.com/yamparalarahul1" target="_blank" rel="noreferrer" className="wiki-link">
                      X (@yamparalarahul1)
                    </Link>
                    {" "}
                    and
                    {" "}
                    <Link href="https://www.linkedin.com/in/yamparalarahul/" target="_blank" rel="noreferrer" className="wiki-link">
                      LinkedIn (/in/yamparalarahul)
                    </Link>.
                  </p>
                  <div className="mt-3 space-y-2 sm:space-y-3">
                    {channels.map((channel) => (
                      <div key={channel.href} className="wiki-card p-2.5 sm:p-3">
                        <p className="font-semibold">
                          <Link href={channel.href} target="_blank" rel="noreferrer" className="wiki-link">
                            {channel.name}
                          </Link>
                        </p>
                        <p className="text-sm wiki-muted">
                          {channel.handle} - {channel.subscribers}
                        </p>
                        <p className="mt-1 text-sm">{channel.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="onchain">
                  <h2 className="wiki-section-title">On-chain collectible</h2>
                  <p className="text-pretty mt-3 leading-7">
                    Listed first NFT reference:
                    {" "}
                    <Link
                      href="https://www.tensor.trade/item/2HGzCZTxZiMDTrqzbGwud2a7aUY9JKsyXXyJ6Nk5xpcp"
                      target="_blank"
                      rel="noreferrer"
                      className="wiki-link"
                    >
                      PERK #3224 - IslandDAO PERKS (Tensor)
                    </Link>.
                  </p>
                </section>

                <section id="references">
                  <h2 className="wiki-section-title">References</h2>
                  <ol className="mt-3 list-decimal space-y-2 pl-4 sm:pl-6 text-sm leading-6">
                    {references.map((url) => (
                      <li key={url} className="break-all">
                        <Link href={url} target="_blank" rel="noreferrer" className="wiki-link">
                          {url}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </section>

                <section id="maintenance">
                  <h2 className="wiki-section-title">Maintenance model and log</h2>
                  <p className="text-pretty mt-3 text-sm leading-6 wiki-muted">
                    This profile is maintained as a compounding wiki artifact, not a one-off static bio.
                  </p>

                  <h3 className="mt-4 text-lg font-semibold">Workflow</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-4 sm:pl-6 text-sm leading-6">
                    {maintenanceWorkflow.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <h3 className="mt-4 text-lg font-semibold">Change log</h3>
                  <ul className="mt-2 space-y-2 text-sm leading-6">
                    {profileLog.map((entry) => (
                      <li key={`${entry.date}-${entry.action}`} className="wiki-card px-2.5 py-2 sm:px-3">
                        <p className="font-semibold">{entry.date} - {entry.action}</p>
                        <p>{entry.details}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            <aside className="order-1 lg:order-2 border-b lg:border-b-0 wiki-border wiki-surface px-3 py-4 sm:px-6 sm:py-6 lg:border-t-0 lg:px-5 min-w-0">
              <div className="lg:sticky lg:top-24">
                <table className="wiki-infobox">
                  <tbody>
                    <tr>
                      <th className="wiki-infobox-header" colSpan={2}>
                        Yamparala Rahul
                      </th>
                    </tr>
                    <tr>
                      <td className="wiki-infobox-cell text-center" colSpan={2}>
                        <div className="mx-auto mb-2 size-24 overflow-hidden rounded-sm wiki-border border">
                          <Image
                            src="/Passport Size Photo.png"
                            alt="Yamparala Rahul portrait"
                            width={96}
                            height={96}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <p className="text-xs wiki-muted">Design Engineer - India</p>
                      </td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label w-[40%]">Occupation</th>
                      <td className="wiki-infobox-cell break-words">Design Engineer, Product Builder, Writer</td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label">Based in</th>
                      <td className="wiki-infobox-cell break-words">India</td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label">Active since</th>
                      <td className="wiki-infobox-cell break-words">2019</td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label">Superteam</th>
                      <td className="wiki-infobox-cell break-words">$2,530 earned - 45 submissions - 10 wins</td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label">Superteam profile</th>
                      <td className="wiki-infobox-cell break-all">
                        <Link href="https://earn.superteam.fun/t/yamparalarahul" target="_blank" rel="noreferrer" className="wiki-link">
                          earn.superteam.fun/t/yamparalarahul
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label">Status</th>
                      <td className="wiki-infobox-cell break-words">Open for full-time opportunities</td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label">X</th>
                      <td className="wiki-infobox-cell break-words">
                        <Link href="https://x.com/yamparalarahul1" target="_blank" rel="noreferrer" className="wiki-link">
                          @yamparalarahul1
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label">LinkedIn</th>
                      <td className="wiki-infobox-cell break-words">
                        <Link href="https://www.linkedin.com/in/yamparalarahul/" target="_blank" rel="noreferrer" className="wiki-link">
                          /in/yamparalarahul
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label">Medium</th>
                      <td className="wiki-infobox-cell break-words">
                        <Link href="https://medium.com/@yamparala" target="_blank" rel="noreferrer" className="wiki-link">
                          @yamparala
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label !border-b-0">Website</th>
                      <td className="wiki-infobox-cell !border-b-0 break-words">
                        <Link href="https://www.hirahul.xyz" target="_blank" rel="noreferrer" className="wiki-link">
                          hirahul.xyz
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </>
  );
}
