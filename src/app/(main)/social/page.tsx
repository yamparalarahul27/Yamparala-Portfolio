import { ExternalLink } from "lucide-react";
import Footer from "../../../components/Footer";
import BackLink from "../../../components/BackLink";

const follows = [
  {
    handle: "@theshanelevine",
    url: "https://x.com/theshanelevine",
    reason: "Follow this guy to learn how to design with AI.",
  },
];

export default function SocialFollowPage() {
  return (
    <>
      <main className="page-container mt-12 sm:mt-16 lg:mt-[72px] text-[var(--text-primary)]">
        {/* Back button top */}
        <BackLink href="/" label="Back" className="animate-enter mb-4" />

        <div className="flex-1 flex flex-col gap-8 sm:gap-10 lg:gap-[44px] pt-8">
          {/* Header */}
          <section className="flex flex-col gap-6 animate-enter">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tighter leading-tight">
              Social Follow
            </h1>

            {/* Quote */}
            <blockquote className="border-l-2 border-[var(--accent)] pl-4 py-2 text-lg sm:text-xl text-[var(--text-secondary)] italic text-balance">
              &ldquo;You&apos;re the average of the 1k people you follow and interact the most time with&rdquo;
            </blockquote>

            <p className="text-[var(--text-secondary)] text-balance max-w-2xl">
              This is my follow list on X and why I follow them. If it aligns with you, go and follow them &mdash; and we may meet at one conversation.
            </p>

            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Listed as recent following first
            </p>
          </section>

          {/* Follow List */}
          <section className="flex flex-col gap-2 animate-enter delay-200">
            {follows.map((person) => (
              <a
                key={person.handle}
                href={person.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group brutal-card bg-[var(--surface-color)] !p-4 sm:!p-5 block"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1 min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold tracking-tight text-lg">
                        {person.handle}
                      </span>
                      <ExternalLink className="h-3.5 w-3.5 text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm">
                      {person.reason}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </section>
          {/* Back button bottom */}
          <BackLink href="/" label="Back" />
        </div>
      </main>
      <Footer />
    </>
  );
}
