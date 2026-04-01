"use client";

import { useEffect, useState } from "react";

export default function LandingFooter() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visits", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setVisits(data.count))
      .catch(() => {});
  }, []);

  return (
    <footer className="max-w-xl !px-4 py-6 flex items-center gap-2 flex-wrap">
      <span className="text-xs text-[var(--text-secondary)] px-3 py-1.5 rounded-full bg-black/[0.05] dark:bg-white/[0.05]">
        {visits !== null ? `${visits} visits so far.` : "..."}
      </span>
      <span className="text-xs text-[var(--text-secondary)] px-3 py-1.5 rounded-full bg-black/[0.05] dark:bg-white/[0.05]">
        v0.01
      </span>
      <span className="text-xs text-[var(--text-secondary)] px-3 py-1.5 rounded-full bg-black/[0.05] dark:bg-white/[0.05]">
        Bangalore
      </span>
    </footer>
  );
}
