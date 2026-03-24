import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, publishedBlogPosts } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return publishedBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post || !post.entries) {
    notFound();
  }

  return (
    <main className="page-container mt-[132px] text-[var(--text-primary)]">
      <div className="flex-1 flex flex-col gap-[56px] pt-8">
        <section className="flex flex-col gap-6 animate-enter">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors w-fit"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to Blog
          </Link>

          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-secondary)]">
              <span>Last updated {formatDate(post.lastUpdated)}</span>
              <span className="w-8 h-px bg-[var(--border-color)]" />
              <span className="text-[var(--accent)]">{post.category}</span>
              <span className="w-8 h-px bg-[var(--border-color)]" />
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter leading-tight">
              {post.title}
            </h1>

            <p className="text-lg lg:text-xl text-[var(--text-secondary)] text-balance">
              {post.excerpt}
            </p>
          </div>
        </section>

        <article className="brutal-card bg-white animate-enter delay-100">
          <div className="flex flex-col gap-10 max-w-3xl">
            {post.entries.map((entry) => (
              <section
                key={`${entry.date}-${entry.title}`}
                className="flex flex-col gap-4 border-t border-[var(--border-color)] pt-8 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                    Entry {formatDate(entry.date)}
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

                {entry.bullets ? (
                  <ul className="list-disc pl-6 text-base lg:text-lg leading-8 text-[var(--text-secondary)] space-y-2">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
