"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import BackLink from "../../../../components/BackLink";
import { getProject, type Project, type Stage } from "../../../../lib/project-data";
import "./case-study.css";

function CaseStudyViewer({ project }: { project: Project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stages = project.stages;
  const active = stages[activeIndex];

  return (
    <>
      <header className="mb-6 animate-enter delay-100">
        <span className="cs-label">Case Study</span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mt-1">
          {project.title}
        </h1>
        <p className="text-sm text-[var(--text-secondary)] mt-2">
          {project.company} &middot; {project.subtitle} &middot; {project.stageCount} design stages
        </p>
      </header>

      <div className="cs-layout animate-enter delay-200">
        {/* ── Left sidebar (desktop) ── */}
        <nav className="cs-sidebar">
          <ul className="space-y-1">
            {stages.map((stage, i) => (
              <li key={stage.id}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`cs-nav-item ${i === activeIndex ? "cs-nav-active" : ""}`}
                >
                  <span className="cs-nav-dot" />
                  <span>{stage.title}</span>
                </button>
              </li>
            ))}
          </ul>
          {project.fullStudyHref && (
            <a href={project.fullStudyHref} className="cs-nav-link mt-4">
              View full case study
            </a>
          )}
        </nav>

        {/* ── Main content ── */}
        <div className="cs-main">
          {/* ── Mobile stage tabs ── */}
          <div className="cs-mobile-tabs">
            {stages.map((stage, i) => (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`cs-tab ${i === activeIndex ? "cs-tab-active" : ""}`}
              >
                {stage.title}
              </button>
            ))}
          </div>

          {/* ── Stage slider ── */}
          <div className="cs-slider-area">
            <div className="cs-slider-track">
              {stages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`cs-slider-dot ${i === activeIndex ? "cs-slider-dot-active" : ""}`}
                  aria-label={`Stage ${i + 1}`}
                />
              ))}
              <div
                className="cs-slider-progress"
                style={{ width: `${(activeIndex / (stages.length - 1)) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] sm:text-xs text-[var(--text-secondary)] mt-1">
              <span>{stages[0].title}</span>
              <span>{stages[stages.length - 1].title}</span>
            </div>
          </div>

          {/* ── Stage content ── */}
          <div className="cs-stage" key={active.id}>
            <div className="cs-stage-header">
              <span className="cs-label">{active.subtitle}</span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-1">{active.title}</h2>
              <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                {active.description}
              </p>
            </div>

            <div className="cs-stage-body">
              {/* Annotations (left on desktop, below on mobile) */}
              <div className="cs-annotations">
                {active.annotations.map((a, i) => (
                  <div key={i} className="cs-annotation">
                    <span className="cs-annotation-label">{a.label}</span>
                    <span className="cs-annotation-desc">{a.description}</span>
                  </div>
                ))}
              </div>

              {/* Mockup */}
              <div className="cs-mockup">
                <div className="cs-mockup-frame">
                  <Image
                    src={active.image}
                    alt={active.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Stage counter ── */}
          <div className="cs-counter">
            <button
              type="button"
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="cs-counter-btn"
            >
              &larr; Prev
            </button>
            <span className="text-xs text-[var(--text-secondary)]">
              {activeIndex + 1} / {stages.length}
            </span>
            <button
              type="button"
              onClick={() => setActiveIndex(Math.min(stages.length - 1, activeIndex + 1))}
              disabled={activeIndex === stages.length - 1}
              className="cs-counter-btn"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* ── Full case study anchor ── */}
      {project.fullStudyHref && (
        <div id="full-study" className="mt-12 mb-8">
          <hr className="border-[var(--border-color)] mb-6" />
          <p className="text-sm text-[var(--text-secondary)]">
            The full case study with all images and detailed analysis is available on the{" "}
            <a href={project.fullStudyHref} className="text-[var(--accent)] underline underline-offset-2">
              main portfolio page
            </a>.
          </p>
        </div>
      )}
    </>
  );
}

export default function ProjectPage() {
  const params = useParams<{ slug: string }>();
  const project = getProject(params.slug);

  if (!project) {
    return (
      <main className="page-container mt-12 sm:mt-16 lg:mt-[72px] px-3 sm:px-4">
        <BackLink href="/" label="Back" className="mb-4" />
        <h1 className="text-2xl font-bold">Project not found</h1>
        <p className="text-sm text-[var(--text-secondary)] mt-2">
          No case study found for &ldquo;{params.slug}&rdquo;.
        </p>
      </main>
    );
  }

  return (
    <main className="page-container mt-12 sm:mt-16 lg:mt-[72px] px-3 sm:px-4 text-[var(--text-primary)]">
      <BackLink href={project.backHref} label="Back" className="mb-4 animate-enter" />
      <CaseStudyViewer project={project} />
    </main>
  );
}
