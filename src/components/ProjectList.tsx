"use client";

import { useState, useCallback, useRef } from "react";
import Peektext from "./Peektext";
import ProjectPanel, { type ProjectDetails } from "./ProjectPanel";

interface Project {
  year: string;
  title: string;
  accent: string;
  image?: string;
  imageAlt?: string;
  details?: ProjectDetails;
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [shakingIndex, setShakingIndex] = useState<number | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const toastTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  const handleClick = useCallback((index: number) => {
    const project = projects[index];

    if (project.details) {
      setActiveProject(project);
      return;
    }

    setShakingIndex(index);
    setTimeout(() => setShakingIndex(null), 300);

    setToastVisible(true);
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToastVisible(false), 2500);
  }, [projects]);

  return (
    <>
      <section className="grid grid-cols-[48px_1fr_auto] gap-x-2" data-peektext-container>
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
              {project.image && project.imageAlt ? (
                <Peektext
                  text={project.title}
                  image={project.image}
                  imageAlt={project.imageAlt}
                  hideUnderline
                />
              ) : (
                project.title
              )}
            </span>
            <span className="text-xs font-mono text-[var(--text-secondary)] text-right py-3 border-t border-[var(--border-color)] flex items-center justify-end">
              {project.accent.includes(".") && !project.accent.includes("Private") ? (
                <a
                  href={`https://${project.accent}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.accent}
                </a>
              ) : (
                project.accent
              )}
            </span>
          </div>
        ))}
      </section>

      {/* Toast */}
      <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none px-3">
        <div
          className={`w-fit max-w-[calc(100vw-24px)] px-5 py-3 rounded-lg bg-[#111111] text-white text-sm font-medium shadow-lg transition-all duration-300 text-center ${
            toastVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          👋 nothing to show here yet
        </div>
      </div>

      <ProjectPanel project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
