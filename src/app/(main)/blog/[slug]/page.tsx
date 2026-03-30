import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getBlogPostBySlug } from "@/lib/blog";

export const dynamic = "force-dynamic";

function formatDateLong(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const t = await getTranslations("blog");

  return {
    title: `${post.title} — ${t("metaSuffix")}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const t = await getTranslations("blog");

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <header className="flex flex-col gap-4 animate-enter">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-secondary)]">
            <span>
              {t("lastUpdated")} {formatDateLong(post.lastUpdated)}
            </span>
            <span className="w-8 h-px bg-[var(--border-color)]" />
            <span className="text-[var(--accent)] font-semibold">
              {post.category}
            </span>
            <span className="w-8 h-px bg-[var(--border-color)]" />
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] text-balance">
            {post.excerpt}
          </p>
        </header>

        {/* Entries */}
        {post.entries && post.entries.length > 0 && (
          <div className="flex flex-col gap-10">
            {post.entries.map((entry, index) => (
              <section
                key={`${entry.date}-${entry.title}`}
                className={`flex flex-col gap-4 border-t border-[var(--border-color)] pt-8 animate-enter delay-${(index + 1) * 100}`}
              >
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                    {t("entry")} {formatDateLong(entry.date)}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                    {entry.title}
                  </h2>
                </div>
                {entry.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base lg:text-lg leading-8 text-[var(--text-secondary)]"
                  >
                    {paragraph}
                  </p>
                ))}
                {entry.bullets && (
                  <ul className="list-disc pl-6 text-base lg:text-lg leading-8 text-[var(--text-secondary)] space-y-2">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
