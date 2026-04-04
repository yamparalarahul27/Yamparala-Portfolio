"use client";

import type { Industry } from "../../lib/cv-data";

const industries: { value: Industry; label: string }[] = [
  { value: "ai", label: "AI" },
  { value: "b2b", label: "B2B" },
  { value: "web3", label: "Web3" },
];

export default function IndustrySelector({
  selected,
  onChange,
}: {
  selected: Industry;
  onChange: (industry: Industry) => void;
}) {
  return (
    <div className="flex items-center border border-[var(--border-color)] bg-[var(--surface-color)]">
      {industries.map((ind) => (
        <button
          key={ind.value}
          type="button"
          onClick={() => onChange(ind.value)}
          className={`px-4 py-2 text-xs font-mono uppercase tracking-[0.15em] transition-colors ${
            selected === ind.value
              ? "bg-[var(--text-primary)] text-[var(--bg-color)]"
              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          } ${ind.value !== "ai" ? "border-l border-[var(--border-color)]" : ""}`}
        >
          {ind.label}
        </button>
      ))}
    </div>
  );
}
