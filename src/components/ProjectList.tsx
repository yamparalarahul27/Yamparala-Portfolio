"use client";

import { useState, useCallback, useRef } from "react";

interface Project {
  year: string;
  title: string;
  accent: string;
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [shakingIndex, setShakingIndex] = useState<number | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  const handleClick = useCallback((index: number) => {
    setShakingIndex(index);
    setTimeout(() => setShakingIndex(null), 300);

    setToastVisible(true);
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToastVisible(false), 2500);
  }, []);

  return (
    <>
      <section className="grid grid-cols-[48px_1fr_auto] gap-x-2">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`contents cursor-pointer${shakingIndex === i ? " [&>*]:animate-shake" : ""}`}
            onClick={() => handleClick(i)}
          >
            <span className="text-xs font-mono text-[var(--text-secondary)] py-3 border-t border-[var(--border-color)] flex items-center">
              {project.year}
            </span>
            <span className="text-sm truncate py-3 border-t border-[var(--border-color)] flex items-center">
              {project.title}
            </span>
            <span className="text-xs font-mono text-[var(--text-secondary)] text-right py-3 border-t border-[var(--border-color)] flex items-center justify-end">
              {project.accent}
            </span>
          </div>
        ))}
      </section>

      {/* Toast */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-lg bg-[var(--text-primary)] text-[var(--bg-color)] text-sm font-medium shadow-lg transition-all duration-300 pointer-events-none ${
          toastVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        👋 nothing to show here yet
      </div>
    </>
  );
}
