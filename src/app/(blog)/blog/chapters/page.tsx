import type { Metadata } from "next";
import Link from "next/link";
import BackLink from "@/components/BackLink";
import { chapters } from "@/lib/chapters";

export const metadata: Metadata = {
  title: "Chapters — Yamparala Rahul",
  description: "Places that have shaped a life, told one chapter at a time.",
};

export default function ChaptersIndexPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 [&_section]:!p-0 [&_section>div]:!p-0 [&_header]:!p-0">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <BackLink href="/blog" label="Blog" className="animate-enter" />

        <header className="flex flex-col gap-3 animate-enter delay-100">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tighter leading-tight">
            Chapters
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl text-balance">
            Places that have shaped a life, told one chapter at a time.
          </p>
        </header>

        <section className="flex flex-col gap-3">
          {chapters.map((chapter, index) => (
            <Link
              key={chapter.slug}
              href={`/blog/chapters/${chapter.slug}`}
              className={`animate-enter delay-${Math.min((index + 2) * 100, 400)}`}
            >
              <div className="brutal-card bg-[var(--surface-color)] p-3 cursor-pointer">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-secondary)] w-20 shrink-0">
                    Chapter {chapter.number}
                  </span>
                  <span className="w-8 h-px bg-[var(--border-color)] shrink-0" />
                  <h2 className="text-xl font-bold tracking-tight">
                    {chapter.place}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
