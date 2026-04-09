"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { blogPosts } from "@/lib/blog";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatDateLong(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function NotesSection() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  return (
    <div id="notes" className="flex flex-col gap-8 sm:gap-12 lg:gap-[56px]">
      {/* Header */}
      <section className="flex flex-col gap-3 animate-enter">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tighter leading-tight">Notes</h2>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl text-balance">
          Published writing and active drafts on design engineering, product thinking, and building things that matter.
        </p>
      </section>

      {/* Posts */}
      <section className="flex flex-col gap-3">
        {blogPosts.map((post, index) => {
          const isExpanded = expandedSlug === post.slug;
          const hasEntries = post.published && post.entries && post.entries.length > 0;

          return (
            <div key={post.slug} className={`animate-enter delay-${(index + 1) * 100}`}>
              <div
                className={`group brutal-card bg-[var(--surface-color)] p-3 ${hasEntries ? "cursor-pointer" : ""} ${!post.published ? "opacity-80" : ""}`}
                onClick={() => {
                  if (hasEntries) setExpandedSlug(isExpanded ? null : post.slug);
                }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-secondary)]">
                      <span>Last updated {formatDate(post.lastUpdated)}</span>
                      <span className="hidden sm:inline-block w-8 h-px bg-[var(--border-color)]" />
                      <span className="text-[var(--accent)] font-semibold">{post.category}</span>
                      <span className="hidden sm:inline-block w-8 h-px bg-[var(--border-color)]" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight transition-colors">{post.title}</h3>
                    <p className="text-[var(--text-secondary)] text-balance transition-colors">{post.excerpt}</p>
                    <div className="inline-flex items-center text-sm font-bold tracking-wide uppercase">
                      {post.published ? (
                        <>
                          {hasEntries ? (isExpanded ? "Collapse" : "Read Post") : "Read Post"}
                          {hasEntries ? (
                            isExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />
                          ) : (
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          )}
                        </>
                      ) : (
                        "In Draft"
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded entries */}
              {isExpanded && post.entries && (
                <div className="brutal-card bg-[var(--surface-color)] mt-2 animate-enter">
                  <div className="flex flex-col gap-10 max-w-3xl">
                    {post.entries.map((entry) => (
                      <section
                        key={`${entry.date}-${entry.title}`}
                        className="flex flex-col gap-4 border-t border-[var(--border-color)] pt-8 first:border-t-0 first:pt-0"
                      >
                        <div className="flex flex-col gap-3">
                          <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                            Entry {formatDateLong(entry.date)}
                          </span>
                          <h4 className="text-2xl lg:text-3xl font-bold tracking-tight">{entry.title}</h4>
                        </div>
                        {entry.paragraphs.map((paragraph) => (
                          <p key={paragraph} className="text-base lg:text-lg leading-8 text-[var(--text-secondary)]">{paragraph}</p>
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
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
