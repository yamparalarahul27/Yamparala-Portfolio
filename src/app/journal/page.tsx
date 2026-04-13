"use client";

import { useState, useEffect } from "react";
import BackLink from "@/components/BackLink";
import { journalEntries } from "@/lib/journal";

const PASSCODE = "personalonlyforseshu";
const STORAGE_KEY = "journal-unlocked";

function formatDateLong(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function JournalPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "true") {
      setUnlocked(true);
    }
    setHydrated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSCODE) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!hydrated) return null;

  if (!unlocked) {
    return (
      <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 [&_section]:!p-0 [&_section>div]:!p-0">
        <div className="max-w-md mx-auto flex flex-col gap-8">
          <BackLink href="/" label="Back" className="animate-enter" />

          <section className="flex flex-col gap-6 animate-enter">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter leading-tight">
                Journal
              </h1>
              <p className="text-base text-[var(--text-secondary)]">
                This page is passcode protected.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="password"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setError(false);
                }}
                placeholder="Enter passcode"
                autoFocus
                className="w-full px-3 py-2 bg-[var(--surface-color)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
              {error && (
                <p className="text-sm text-[var(--accent)]">
                  Incorrect passcode. Try again.
                </p>
              )}
              <button
                type="submit"
                className="brutal-btn self-start"
              >
                Unlock
              </button>
            </form>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 [&_section]:!p-0 [&_section>div]:!p-0">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        {/* Back button top */}
        <BackLink href="/" label="Back" className="animate-enter" />

        {/* Entries */}
        <div className="flex flex-col gap-10">
          {journalEntries.map((entry, index) => (
            <section
              key={entry.date}
              className={`flex flex-col gap-4 border-t border-[var(--border-color)] pt-8 first:border-t-0 first:pt-0 animate-enter delay-${(index + 1) * 100}`}
            >
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                {formatDateLong(entry.date)}
              </span>
              {entry.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base lg:text-lg leading-8 text-[var(--text-secondary)]"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Back button bottom */}
        <BackLink href="/" label="Back" />
      </div>
    </main>
  );
}
