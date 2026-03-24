import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main className="page-container mt-[132px] text-[var(--text-primary)]">
      <div className="flex-1 flex flex-col gap-[72px] pt-8">
        {/* Header */}
        <section className="flex flex-col gap-6 animate-enter">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors w-fit"
          >
            <ArrowLeft className="h-3 w-3" />
            Back
          </Link>

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
              Blog
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl text-balance">
              Published writing and active drafts on design engineering, product thinking, and building things that matter.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="flex flex-col gap-3">
          {blogPosts.map((post, index) => {
            const cardClassName = `group brutal-card bg-white p-3 animate-enter delay-${(index + 1) * 100}`;
            const cardContent = (
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 items-start justify-between">
                <div className="flex flex-col gap-3 min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-secondary)]">
                    <span>Last updated {formatDate(post.lastUpdated)}</span>
                    <span className="w-8 h-px bg-[var(--border-color)]" />
                    <span className="text-[var(--accent)] font-semibold">
                      {post.category}
                    </span>
                    <span className="w-8 h-px bg-[var(--border-color)]" />
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold tracking-tight transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-[var(--text-secondary)] text-balance transition-colors">
                    {post.excerpt}
                  </p>

                  <div className="inline-flex items-center text-sm font-bold tracking-wide uppercase">
                    {post.published ? (
                      <>
                        Read Post
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    ) : (
                      "In Draft"
                    )}
                  </div>
                </div>
              </div>
            );

            if (!post.published) {
              return (
                <article key={post.slug} className={`${cardClassName} opacity-80`}>
                  {cardContent}
                </article>
              );
            }

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={cardClassName}
              >
                {cardContent}
              </Link>
            );
          })}
        </section>

        <footer className="p-8 text-xs font-mono text-[var(--text-secondary)] text-center animate-enter delay-400">
          <p>ENGINEERED WITH PRECISION &bull; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </main>
  );
}
