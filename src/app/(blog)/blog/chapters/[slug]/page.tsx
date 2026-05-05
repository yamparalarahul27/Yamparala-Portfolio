import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackLink from "@/components/BackLink";
import {
  chapters,
  getAllChapterSlugs,
  getChapterBySlug,
} from "@/lib/chapters";

export function generateStaticParams() {
  return getAllChapterSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) return {};
  return {
    title: `Chapter ${chapter.number} · ${chapter.place}`,
    description:
      chapter.subtitle ?? `Chapter ${chapter.number} of a life — ${chapter.place}.`,
  };
}

export default async function ChapterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) notFound();

  const index = chapters.findIndex((c) => c.slug === chapter.slug);
  const prev = index > 0 ? chapters[index - 1] : undefined;
  const next = index < chapters.length - 1 ? chapters[index + 1] : undefined;
  const hasContent = (chapter.paragraphs?.length ?? 0) > 0;

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 [&_section]:!p-0 [&_section>div]:!p-0">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <BackLink href="/blog/chapters" label="Chapters" className="animate-enter" />

        <header className="flex flex-col gap-3 animate-enter delay-100">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-secondary)]">
            Chapter {chapter.number}
            {chapter.yearRange ? ` · ${chapter.yearRange}` : ""}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
            {chapter.place}
          </h1>
          {chapter.subtitle && (
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl text-balance">
              {chapter.subtitle}
            </p>
          )}
        </header>

        <section className="flex flex-col gap-4 animate-enter delay-200">
          {hasContent ? (
            chapter.paragraphs!.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base lg:text-lg leading-8 text-[var(--text-secondary)]"
              >
                {paragraph}
              </p>
            ))
          ) : (
            <div className="brutal-card bg-[var(--surface-color)] p-6">
              <p className="text-base text-[var(--text-secondary)] italic">
                This chapter has not been written yet.
              </p>
            </div>
          )}
        </section>

        {(prev || next) && (
          <nav className="flex items-center justify-between gap-3 border-t border-[var(--border-color)] pt-6 animate-enter delay-300">
            <div className="min-w-0">
              {prev && (
                <a
                  href={`/blog/chapters/${prev.slug}`}
                  className="group flex flex-col gap-0.5"
                >
                  <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                    ← Chapter {prev.number}
                  </span>
                  <span className="text-base font-bold tracking-tight">
                    {prev.place}
                  </span>
                </a>
              )}
            </div>
            <div className="min-w-0 text-right">
              {next && (
                <a
                  href={`/blog/chapters/${next.slug}`}
                  className="group flex flex-col gap-0.5"
                >
                  <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                    Chapter {next.number} →
                  </span>
                  <span className="text-base font-bold tracking-tight">
                    {next.place}
                  </span>
                </a>
              )}
            </div>
          </nav>
        )}
      </div>
    </main>
  );
}
