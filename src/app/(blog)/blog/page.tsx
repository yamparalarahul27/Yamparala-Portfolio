import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { publishedBlogPosts } from "@/lib/blog";
import { chapters } from "@/lib/chapters";
import BackLink from "@/components/BackLink";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateMetadata() {
  const t = await getTranslations("blog");
  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
  };
}

export default async function BlogPage() {
  const t = await getTranslations("blog");

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 [&_section]:!p-0 [&_section>div]:!p-0 [&_header]:!p-0">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        {/* Back button top */}
        <BackLink href="/" label={t("back")} className="animate-enter" />

        <header className="flex flex-col gap-3 animate-enter">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tighter leading-tight">
            {t("pageTitle")}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl text-balance">
            {t("pageDescription")}
          </p>
        </header>

        <section className="flex flex-col gap-3 animate-enter delay-100">
          <Link href="/blog/chapters">
            <div className="group brutal-card bg-[var(--surface-color)] p-3 cursor-pointer">
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-secondary)]">
                  <span className="text-[var(--accent)] font-semibold">
                    Chapters
                  </span>
                  <span className="w-8 h-px bg-[var(--border-color)]" />
                  <span>{chapters.length} places</span>
                </div>
                <h2 className="text-xl font-bold tracking-tight transition-colors">
                  A life in chapters
                </h2>
                <p className="text-[var(--text-secondary)] text-balance transition-colors">
                  Places that have shaped a life, told one chapter at a time —
                  from {chapters[0].place} to {chapters[chapters.length - 1].place}.
                </p>
                <span className="inline-flex items-center text-sm font-bold tracking-wide uppercase">
                  Open Chapters →
                </span>
              </div>
            </div>
          </Link>
        </section>

        <section className="flex flex-col gap-3">
          {publishedBlogPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`animate-enter delay-${(index + 1) * 100}`}
            >
              <div className="group brutal-card bg-[var(--surface-color)] p-3 cursor-pointer">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-secondary)]">
                    <span>
                      {t("lastUpdated")} {formatDate(post.lastUpdated)}
                    </span>
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
                  <span className="inline-flex items-center text-sm font-bold tracking-wide uppercase">
                    {t("readPost")} →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

      </div>
    </main>
  );
}
