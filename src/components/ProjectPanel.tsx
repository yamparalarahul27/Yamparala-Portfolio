"use client";

import { useEffect } from "react";
import Image from "next/image";

export interface ProjectDetails {
  description: string;
  image?: string;
  imageAlt?: string;
  links?: { label: string; href: string }[];
}

interface Project {
  year: string;
  title: string;
  accent: string;
  details?: ProjectDetails;
}

interface ProjectPanelProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectPanel({ project, onClose }: ProjectPanelProps) {
  const open = project !== null;

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <>
      {/* Scrim */}
      <div
        aria-hidden={!open}
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={project?.title ?? "Project details"}
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-[var(--surface-color)] border-l border-[var(--border-color)] shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {project && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)]">
              <span className="text-xs font-mono text-[var(--text-secondary)]">
                {project.year} · {project.accent}
              </span>
              <button
                onClick={onClose}
                aria-label="Close panel"
                className="w-8 h-8 flex items-center justify-center rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

              {project.details ? (
                <>
                  {project.details.image && project.details.imageAlt && (
                    <div className="relative w-full aspect-[16/10] mb-6 rounded-lg overflow-hidden bg-[var(--border-color)]">
                      <Image
                        src={project.details.image}
                        alt={project.details.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <p className="text-sm leading-relaxed text-[var(--text-primary)] whitespace-pre-line">
                    {project.details.description}
                  </p>

                  {project.details.links && project.details.links.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-[var(--border-color)]">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-3">
                        Links
                      </h3>
                      <ul className="flex flex-col gap-2">
                        {project.details.links.map((link) => (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              className="text-sm text-[var(--text-primary)] underline underline-offset-4 decoration-[var(--border-color)] hover:decoration-[var(--text-primary)] transition-colors"
                            >
                              {link.label} ↗
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-sm text-[var(--text-secondary)]">
                  Nothing to show here yet.
                </p>
              )}
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
