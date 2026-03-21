"use client";

import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, List, Rows2 } from "lucide-react";

const DogFollower = dynamic(
  () => import("../../components/DogFollower/DogFollower"),
  { ssr: false }
);

type PreviewMode = "card" | "list";
type TypographyScale = "compact" | "base" | "large";

type ProjectPreview = {
  accent: string;
  category: string;
  description: string;
  href?: string;
  image?: string;
  title: string;
  year: string;
};

type PreviewControls = {
  spacing: number;
  typeScale: TypographyScale;
};

type ControlledPreviewProps = {
  children: (controls: PreviewControls) => ReactNode;
  defaultSpacing: number;
  defaultTypeScale?: TypographyScale;
  hint: string;
  label: string;
  max?: number;
  min?: number;
  step?: number;
};

const previewProjects: ProjectPreview[] = [
  {
    year: "2024",
    title: "Deriverse Trading Journal",
    category: "Side Quests",
    description:
      "A comprehensive trading journal and analytics platform tailored for Deriverse.",
    image: "/images/Deriverse.png",
    href: "https://deriverse.hirahul.xyz",
    accent: "Live product",
  },
  {
    year: "2024",
    title: "Crpko Graphic Lab",
    category: "Internal Tool",
    description:
      "A focused internal graphics lab for generating, testing, and iterating visual assets faster.",
    accent: "Internal tool",
  },
  {
    year: "2024",
    title: "Log & Resources of Rahul",
    category: "Internal Tooling",
    description:
      "A centralized, high-performance platform for design team resources.",
    image: "/images/Ymparalalog.png",
    href: "https://log.hirahul.xyz",
    accent: "Live product",
  },
];

const tokenSamples = [
  { label: "Canvas", variable: "--bg-color", value: "#F8F9FA" },
  { label: "Primary Text", variable: "--text-primary", value: "#111111" },
  { label: "Secondary Text", variable: "--text-secondary", value: "#6B7280" },
  { label: "Border", variable: "--border-color", value: "#E5E7EB" },
  { label: "Accent", variable: "--accent", value: "#E11D48" },
];

const accentChipClass =
  "inline-flex items-center border border-[var(--border-color)] px-1 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)]";

const controlInputClass =
  "h-10 border border-[var(--border-color)] bg-white px-3 text-sm text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--text-primary)]";

const controlButtonClass =
  "inline-flex h-10 items-center justify-center border px-4 text-xs font-mono uppercase tracking-[0.2em] transition-colors disabled:cursor-not-allowed disabled:border-[var(--border-color)] disabled:text-[var(--text-secondary)]";

const typographyScaleOptions: Array<{
  label: string;
  value: TypographyScale;
}> = [
  { label: "Compact", value: "compact" },
  { label: "Base", value: "base" },
  { label: "Large", value: "large" },
];

const typographyScaleTokens: Record<
  TypographyScale,
  {
    body: string;
    bodyLarge: string;
    button: string;
    cardTitle: string;
    cardTitleList: string;
    display: string;
    footer: string;
    heroName: string;
    label: string;
    micro: string;
    sectionHeading: string;
  }
> = {
  compact: {
    body: "0.95rem",
    bodyLarge: "1rem",
    button: "0.9rem",
    cardTitle: "clamp(1.35rem, 2.8vw, 1.8rem)",
    cardTitleList: "1rem",
    display: "clamp(2.75rem, 7vw, 4.5rem)",
    footer: "0.68rem",
    heroName: "clamp(2.125rem, 4vw, 2.75rem)",
    label: "0.72rem",
    micro: "0.64rem",
    sectionHeading: "1.75rem",
  },
  base: {
    body: "1rem",
    bodyLarge: "1.125rem",
    button: "0.95rem",
    cardTitle: "clamp(1.5rem, 3vw, 2rem)",
    cardTitleList: "1.125rem",
    display: "clamp(3rem, 7vw, 4.75rem)",
    footer: "0.75rem",
    heroName: "clamp(2.25rem, 4vw, 3rem)",
    label: "0.75rem",
    micro: "0.7rem",
    sectionHeading: "1.875rem",
  },
  large: {
    body: "1.05rem",
    bodyLarge: "1.2rem",
    button: "1rem",
    cardTitle: "clamp(1.65rem, 3.4vw, 2.2rem)",
    cardTitleList: "1.2rem",
    display: "clamp(3.35rem, 7vw, 5.25rem)",
    footer: "0.82rem",
    heroName: "clamp(2.5rem, 4vw, 3.25rem)",
    label: "0.82rem",
    micro: "0.76rem",
    sectionHeading: "2rem",
  },
};

function clampSpacing(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max));
}

function getTypographyStyles(scale: TypographyScale) {
  return typographyScaleTokens[scale];
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  description: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-mono uppercase tracking-[0.24em] text-[var(--accent)]">
        {eyebrow}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-[var(--text-primary)]">
        {title}
      </h2>
      <p className="max-w-2xl text-sm md:text-base text-[var(--text-secondary)] text-balance">
        {description}
      </p>
    </div>
  );
}

function Surface({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`border border-[var(--border-color)] bg-white p-6 md:p-8 ${className}`}
    >
      {children}
    </section>
  );
}

function AccentChip({
  label,
  style,
}: {
  label: string;
  style?: CSSProperties;
}) {
  return (
    <span className={accentChipClass} style={style}>
      {label}
    </span>
  );
}

function ControlledPreview({
  children,
  defaultSpacing,
  defaultTypeScale = "base",
  hint,
  label,
  min = 8,
  max = 72,
  step = 4,
}: ControlledPreviewProps) {
  const [draftSpacing, setDraftSpacing] = useState(defaultSpacing);
  const [appliedSpacing, setAppliedSpacing] = useState(defaultSpacing);
  const [draftTypeScale, setDraftTypeScale] =
    useState<TypographyScale>(defaultTypeScale);
  const [appliedTypeScale, setAppliedTypeScale] =
    useState<TypographyScale>(defaultTypeScale);
  const isDirty =
    draftSpacing !== appliedSpacing || draftTypeScale !== appliedTypeScale;
  const isDefault =
    draftSpacing === defaultSpacing &&
    appliedSpacing === defaultSpacing &&
    draftTypeScale === defaultTypeScale &&
    appliedTypeScale === defaultTypeScale;
  const previewSpacing = draftSpacing;
  const previewTypeScale = draftTypeScale;

  const handleDraftChange = (rawValue: string) => {
    if (rawValue === "") {
      return;
    }

    const nextValue = Number(rawValue);
    if (Number.isNaN(nextValue)) {
      return;
    }

    setDraftSpacing(clampSpacing(nextValue, min, max));
  };

  const applySpacing = () => {
    setAppliedSpacing(draftSpacing);
    setAppliedTypeScale(draftTypeScale);
  };

  const resetSpacing = () => {
    setDraftSpacing(defaultSpacing);
    setAppliedSpacing(defaultSpacing);
    setDraftTypeScale(defaultTypeScale);
    setAppliedTypeScale(defaultTypeScale);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 border border-[var(--border-color)] bg-[var(--bg-color)] p-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                {label}
              </span>
              <span className={accentChipClass}>Preview {previewSpacing}px</span>
              <span className={accentChipClass}>
                Preview Type{" "}
                {
                  typographyScaleOptions.find(
                    (option) => option.value === previewTypeScale
                  )?.label
                }
              </span>
              <span className={accentChipClass}>Applied {appliedSpacing}px</span>
              <span className={accentChipClass}>
                Applied Type{" "}
                {
                  typographyScaleOptions.find(
                    (option) => option.value === appliedTypeScale
                  )?.label
                }
              </span>
            </div>
            <p className="max-w-2xl text-sm text-[var(--text-secondary)]">
              {hint}
            </p>
            {isDirty ? (
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--accent)]">
                Live preview enabled. Apply keeps this value for the section.
              </p>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap items-end gap-3">
          <label className="flex min-w-[220px] flex-1 flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Spacing
            </span>
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={draftSpacing}
              aria-label={`${label} spacing`}
              onChange={(event) => handleDraftChange(event.target.value)}
              className="w-full accent-[var(--accent)]"
            />
          </label>

          <label className="flex w-24 flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              PX
            </span>
            <input
              type="number"
              min={min}
              max={max}
              step={step}
              value={draftSpacing}
              aria-label={`${label} spacing value`}
              onChange={(event) => handleDraftChange(event.target.value)}
              className={controlInputClass}
            />
          </label>

          <label className="flex w-36 flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Type
            </span>
            <select
              value={draftTypeScale}
              aria-label={`${label} typography size`}
              onChange={(event) =>
                setDraftTypeScale(event.target.value as TypographyScale)
              }
              className={controlInputClass}
            >
              {typographyScaleOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={applySpacing}
            disabled={!isDirty}
            className={`${controlButtonClass} border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-color)] enabled:hover:bg-transparent enabled:hover:text-[var(--text-primary)]`}
          >
            Apply
          </button>

          <button
            type="button"
            onClick={resetSpacing}
            disabled={isDefault}
            className={`${controlButtonClass} border-[var(--text-primary)] bg-transparent text-[var(--text-primary)] enabled:hover:bg-[var(--text-primary)] enabled:hover:text-[var(--bg-color)]`}
          >
            Reset
          </button>
        </div>
      </div>

      {children({ spacing: previewSpacing, typeScale: previewTypeScale })}
    </div>
  );
}

function ProjectPreviewContent({
  mode,
  project,
  spacing,
  typeScale,
}: {
  mode: PreviewMode;
  project: ProjectPreview;
  spacing: number;
  typeScale: TypographyScale;
}) {
  const typeStyles = getTypographyStyles(typeScale);
  const layoutGap = mode === "card" ? spacing : Math.max(16, Math.round(spacing / 2));
  const textGap = Math.max(12, Math.round(spacing / 2.5));
  const titleGap = Math.max(12, Math.round(spacing / 3));
  const placeholderGap = Math.max(10, Math.round(spacing / 3.5));

  return (
    <div
      className={`flex items-start justify-between ${
        mode === "card" ? "flex-col lg:flex-row" : ""
      }`}
      style={{ gap: layoutGap }}
    >
      <div
        className={`flex flex-col ${
          mode === "card" ? "flex-1 lg:max-w-md" : "min-w-0 flex-1"
        }`}
        style={{ gap: textGap }}
      >
        <div
          className="flex items-center gap-3 font-mono text-[var(--text-secondary)]"
          style={{ fontSize: typeStyles.label }}
        >
          <span>{project.year}</span>
          <span className="w-8 h-px bg-[var(--border-color)]"></span>
          <span className="font-semibold text-[var(--accent)]">
            {project.category}
          </span>
        </div>

        <div className="flex flex-wrap items-center" style={{ gap: titleGap }}>
          <h3
            className={`font-bold tracking-tight transition-colors ${
              mode === "card" ? "text-2xl lg:text-3xl" : "text-xl"
            }`}
            style={{
              fontSize:
                mode === "card" ? typeStyles.cardTitle : typeStyles.cardTitleList,
            }}
          >
            {project.title}
          </h3>
          <AccentChip label={project.accent} style={{ fontSize: typeStyles.micro }} />
        </div>

        <p
          className="text-[var(--text-secondary)] text-balance transition-colors"
          style={{ fontSize: typeStyles.body }}
        >
          {project.description}
        </p>

        <div
          className="inline-flex items-center font-bold tracking-wide uppercase"
          style={{ fontSize: typeStyles.button }}
        >
          {project.href ? "View Project" : "In Progress"}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>

      {mode === "card" ? (
        <div className="project-image-wrapper relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f3f4f6_100%)]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="project-image object-cover"
            />
          ) : (
            <div
              className="flex h-full w-full flex-col justify-between"
              style={{ padding: Math.max(24, spacing), gap: placeholderGap }}
            >
              <div
                className="flex items-center justify-between font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)]"
                style={{ fontSize: typeStyles.label }}
              >
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <div className="grid" style={{ gap: placeholderGap }}>
                <div className="h-3 w-24 bg-[var(--border-color)]"></div>
                <div className="h-3 w-40 bg-[var(--text-primary)]"></div>
                <div className="h-3 w-32 bg-[var(--border-color)]"></div>
              </div>
              <div
                className="text-left font-bold tracking-tight text-[var(--text-primary)]"
                style={{ fontSize: typeStyles.cardTitle }}
              >
                {project.title}
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

function ProjectPreviewCard({
  mode,
  project,
  spacing,
  typeScale,
}: {
  mode: PreviewMode;
  project: ProjectPreview;
  spacing: number;
  typeScale: TypographyScale;
}) {
  const cardPadding =
    mode === "card" ? Math.max(24, spacing) : Math.max(12, Math.round(spacing / 2.25));
  const className = "group brutal-card bg-white block";

  if (project.href) {
    return (
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={{ padding: cardPadding }}
      >
        <ProjectPreviewContent
          mode={mode}
          project={project}
          spacing={spacing}
          typeScale={typeScale}
        />
      </Link>
    );
  }

  return (
    <article className={className} style={{ padding: cardPadding }}>
      <ProjectPreviewContent
        mode={mode}
        project={project}
        spacing={spacing}
        typeScale={typeScale}
      />
    </article>
  );
}

export default function DesignSystemClient() {
  const [previewMode, setPreviewMode] = useState<PreviewMode>("card");
  const [dogEnabled, setDogEnabled] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <main className="page-container mt-[132px] text-[var(--text-primary)]">
        <div className="flex flex-col gap-[72px] pb-12">
          <section className="flex flex-col gap-8 animate-enter">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
              >
                Back to Home
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <span className={accentChipClass}>Live Reference for /</span>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
              <div className="flex flex-col gap-5">
                <span className="text-sm font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                  Design System
                </span>
                <h1 className="max-w-4xl text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl">
                  A live catalog of the UI elements powering the homepage.
                </h1>
                <p className="max-w-2xl text-lg text-[var(--text-secondary)] text-balance">
                  Every block below reuses the same visual language already on{" "}
                  <span className="font-semibold text-[var(--text-primary)]">/</span>:
                  brutal cards, rose accents, mono metadata, grayscale imagery,
                  segmented view toggles, and the Mello interaction. Each
                  component preview now includes spacing controls with explicit
                  apply and reset actions.
                </p>
              </div>

              <Surface className="flex flex-col justify-between gap-8">
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                    Principles
                  </span>
                  <p className="text-lg font-medium leading-relaxed text-[var(--text-primary)]">
                    The system is compact by design: a small set of reusable
                    primitives, strong typography, hard-edged surfaces, and one
                    accent color that handles emphasis.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="border border-[var(--border-color)] p-4">
                    <p className="text-xs font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                      Tone
                    </p>
                    <p className="mt-3 text-sm text-[var(--text-primary)]">
                      Editorial, direct, lightly brutalist.
                    </p>
                  </div>
                  <div className="border border-[var(--border-color)] p-4">
                    <p className="text-xs font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                      Motion
                    </p>
                    <p className="mt-3 text-sm text-[var(--text-primary)]">
                      Entrance fades, grayscale reveals, cursor companion.
                    </p>
                  </div>
                </div>
              </Surface>
            </div>
          </section>

          <Surface className="animate-enter delay-100 flex flex-col gap-8">
            <SectionIntro
              eyebrow="01"
              title="Core Tokens"
              description="These are the visual constants already driving the portfolio: a pale canvas, hard contrast, soft border gray, and a rose accent for hierarchy."
            />

            <ControlledPreview
              label="Token Grid"
              hint="Adjust spacing and typography scale for the token swatches, then apply or reset the layout."
              defaultSpacing={16}
              min={8}
              max={40}
            >
              {({ spacing, typeScale }) => {
                const typeStyles = getTypographyStyles(typeScale);

                return (
                  <div
                    className="grid sm:grid-cols-2 xl:grid-cols-5"
                    style={{ gap: spacing }}
                  >
                    {tokenSamples.map((token) => (
                      <div
                        key={token.variable}
                        className="flex flex-col border border-[var(--border-color)] p-4"
                        style={{ gap: Math.max(8, Math.round(spacing / 3)) }}
                      >
                        <div
                          className="h-24 w-full border border-[var(--border-color)]"
                          style={{ backgroundColor: `var(${token.variable})` }}
                        />
                        <div
                          className="flex flex-col"
                          style={{ gap: Math.max(4, Math.round(spacing / 8)) }}
                        >
                          <span
                            className="font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)]"
                            style={{ fontSize: typeStyles.label }}
                          >
                            {token.label}
                          </span>
                          <span
                            className="font-semibold text-[var(--text-primary)]"
                            style={{ fontSize: typeStyles.body }}
                          >
                            {token.value}
                          </span>
                          <span
                            className="text-[var(--text-secondary)]"
                            style={{ fontSize: typeStyles.label }}
                          >
                            var({token.variable})
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }}
            </ControlledPreview>
          </Surface>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <Surface className="animate-enter delay-200 flex flex-col gap-8">
              <SectionIntro
                eyebrow="02"
                title="Typography"
                description="Geist Sans handles the editorial voice, while mono labels create structure for metadata and section framing."
              />

            <ControlledPreview
              label="Type Stack"
              hint="Use spacing and typography controls to tune the rhythm and text scale between typography specimens."
              defaultSpacing={24}
              min={12}
              max={56}
            >
                {({ spacing, typeScale }) => {
                  const typeStyles = getTypographyStyles(typeScale);

                  return (
                  <div className="flex flex-col" style={{ gap: spacing }}>
                    <div className="border border-[var(--border-color)] p-5">
                      <p
                        className="font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)]"
                        style={{ fontSize: typeStyles.label }}
                      >
                        Display
                      </p>
                      <h1
                        className="text-5xl font-bold tracking-tighter md:text-6xl"
                        style={{
                          fontSize: typeStyles.display,
                          marginTop: Math.max(12, Math.round(spacing / 2)),
                        }}
                      >
                        Yamparala Rahul
                      </h1>
                    </div>

                    <div
                      className="grid lg:grid-cols-2"
                      style={{ gap: Math.max(16, Math.round(spacing / 1.5)) }}
                    >
                      <div className="border border-[var(--border-color)] p-5">
                        <p
                          className="font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)]"
                          style={{ fontSize: typeStyles.label }}
                        >
                          Section Heading
                        </p>
                        <h2
                          className="text-3xl font-bold tracking-tighter"
                          style={{
                            fontSize: typeStyles.sectionHeading,
                            marginTop: Math.max(12, Math.round(spacing / 2)),
                          }}
                        >
                          Project Showcase
                        </h2>
                      </div>
                      <div className="border border-[var(--border-color)] p-5">
                        <p
                          className="font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)]"
                          style={{ fontSize: typeStyles.label }}
                        >
                          Body Copy
                        </p>
                        <p
                          className="text-base leading-relaxed text-[var(--text-secondary)]"
                          style={{
                            fontSize: typeStyles.body,
                            marginTop: Math.max(12, Math.round(spacing / 2)),
                          }}
                        >
                          This system prefers calm body copy, wide breathing
                          room, and a few precise accent moments instead of
                          visual noise.
                        </p>
                      </div>
                    </div>

                    <div className="border border-[var(--border-color)] p-5">
                      <p
                        className="font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)]"
                        style={{ fontSize: typeStyles.label }}
                      >
                        Mono Metadata
                      </p>
                      <div
                        className="mt-4 flex flex-wrap items-center font-mono text-[var(--text-secondary)]"
                        style={{
                          fontSize: typeStyles.label,
                          gap: Math.max(12, Math.round(spacing / 2.5)),
                        }}
                      >
                        <span>2025</span>
                        <span className="h-px w-8 bg-[var(--border-color)]"></span>
                        <span className="font-semibold text-[var(--accent)]">
                          Products WIP
                        </span>
                      </div>
                    </div>
                  </div>
                );
                }}
              </ControlledPreview>
            </Surface>

            <Surface className="animate-enter delay-300 flex flex-col gap-8">
              <SectionIntro
                eyebrow="03"
                title="Buttons, Links, and Tags"
                description="Primary actions use the same brutal button shell, while tags and inline links keep the supporting hierarchy sharp and compact."
              />

            <ControlledPreview
              label="Action Cluster"
              hint="Adjust spacing and typography size for the button row, inline link specimen, and chip cluster."
              defaultSpacing={24}
              min={12}
              max={56}
            >
                {({ spacing, typeScale }) => {
                  const typeStyles = getTypographyStyles(typeScale);

                  return (
                  <div className="flex flex-col" style={{ gap: spacing }}>
                    <div
                      className="flex flex-wrap"
                      style={{ gap: Math.max(12, Math.round(spacing / 2.5)) }}
                    >
                      <button
                        type="button"
                        className="brutal-btn"
                        style={{ fontSize: typeStyles.button }}
                      >
                        Default Button
                      </button>
                      <button
                        type="button"
                        className="brutal-btn bg-[var(--text-primary)] text-[var(--bg-color)] border-[var(--text-primary)] hover:bg-transparent hover:text-[var(--text-primary)]"
                        style={{ fontSize: typeStyles.button }}
                      >
                        Active Button
                      </button>
                    </div>

                    <div className="border border-[var(--border-color)] p-5">
                      <p
                        className="font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)]"
                        style={{ fontSize: typeStyles.label }}
                      >
                        Inline Link
                      </p>
                      <p
                        className="text-sm text-[var(--text-secondary)]"
                        style={{
                          fontSize: typeStyles.body,
                          marginTop: Math.max(12, Math.round(spacing / 2)),
                        }}
                      >
                        Design Engineer @{" "}
                        <a
                          href="https://www.linkedin.com/company/equicom-technologies/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[var(--text-primary)] underline decoration-1 underline-offset-4 transition-colors hover:text-[var(--accent)]"
                        >
                          Equicom Technologies
                        </a>
                      </p>
                    </div>

                    <div
                      className="flex flex-wrap"
                      style={{ gap: Math.max(12, Math.round(spacing / 2.5)) }}
                    >
                      <AccentChip label="Live product" style={{ fontSize: typeStyles.micro }} />
                      <AccentChip label="Internal tool" style={{ fontSize: typeStyles.micro }} />
                      <AccentChip label="WIP" style={{ fontSize: typeStyles.micro }} />
                      <AccentChip label="Idea" style={{ fontSize: typeStyles.micro }} />
                    </div>
                  </div>
                );
                }}
              </ControlledPreview>
            </Surface>
          </div>

          <Surface className="animate-enter delay-400 flex flex-col gap-8">
            <SectionIntro
              eyebrow="04"
              title="Hero Composition"
              description="This mirrors the homepage intro module: portrait, title stack, supporting copy, and a compact CTA row with an interactive stateful button."
            />

            <ControlledPreview
              label="Hero Module"
              hint="Adjust spacing and typography for the hero stack, action row, note cards, and preview panel."
              defaultSpacing={32}
              min={16}
              max={72}
            >
              {({ spacing, typeScale }) => {
                const typeStyles = getTypographyStyles(typeScale);

                return (
                <div
                  className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)]"
                  style={{ gap: spacing }}
                >
                  <div
                    className="border border-[var(--border-color)]"
                    style={{ padding: Math.max(24, spacing) }}
                  >
                    <div
                      className="flex flex-col items-center text-center"
                      style={{ gap: spacing }}
                    >
                      <div
                        className="flex flex-col items-center"
                        style={{ gap: Math.max(12, Math.round(spacing / 2.5)) }}
                      >
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden">
                          <Image
                            src="/Passport Size Photo.png"
                            alt="Yamparala Rahul Portrait"
                            fill
                            className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                          />
                        </div>

                        <div>
                          <h1
                            className="text-4xl font-bold tracking-tighter lg:text-5xl"
                            style={{ fontSize: typeStyles.heroName }}
                          >
                            Yamparala Rahul
                          </h1>
                          <p
                            className="text-sm font-medium text-[var(--text-secondary)]"
                            style={{
                              fontSize: typeStyles.body,
                              marginTop: Math.max(12, Math.round(spacing / 2.5)),
                            }}
                          >
                            Design Engineer @{" "}
                            <a
                              href="https://www.linkedin.com/company/equicom-technologies/"
                              target="_blank"
                              rel="noreferrer"
                              className="text-[var(--text-primary)] underline decoration-1 underline-offset-4 transition-colors hover:text-[var(--accent)]"
                            >
                              Equicom Technologies
                            </a>
                          </p>
                        </div>
                      </div>

                      <p
                        className="max-w-2xl text-center text-lg text-[var(--text-secondary)] text-balance"
                        style={{ fontSize: typeStyles.bodyLarge }}
                      >
                        This is a placeholder paragraph for the hero section.
                        Replace this with a compelling introduction or tagline
                        that captures the essence of your work.
                      </p>

                      <div
                        className="flex flex-wrap justify-center"
                        style={{ gap: Math.max(12, Math.round(spacing / 2.5)) }}
                      >
                        <a
                          href="https://t.me/yamparalarahul1"
                          target="_blank"
                          rel="noreferrer"
                          className="brutal-btn"
                          style={{ fontSize: typeStyles.button }}
                        >
                          Telegram
                        </a>
                        <a
                          href="https://wa.me/918897132717"
                          target="_blank"
                          rel="noreferrer"
                          className="brutal-btn"
                          style={{ fontSize: typeStyles.button }}
                        >
                          WhatsApp
                        </a>
                        <button
                          type="button"
                          onClick={() => setDogEnabled((enabled) => !enabled)}
                          className={`brutal-btn ${
                            dogEnabled
                              ? "bg-[var(--text-primary)] text-[var(--bg-color)] border-[var(--text-primary)] hover:bg-transparent hover:text-[var(--text-primary)]"
                              : ""
                          }`}
                          style={{ fontSize: typeStyles.button }}
                        >
                          {dogEnabled ? "Dismiss Mello" : "Meet Mello"}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className="grid"
                    style={{ gap: Math.max(16, Math.round(spacing / 2)) }}
                  >
                    <div className="border border-[var(--border-color)] p-5">
                      <p
                        className="font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)]"
                        style={{ fontSize: typeStyles.label }}
                      >
                        Composition Notes
                      </p>
                      <p
                        className="text-sm leading-relaxed text-[var(--text-secondary)]"
                        style={{
                          fontSize: typeStyles.body,
                          marginTop: Math.max(12, Math.round(spacing / 2.5)),
                        }}
                      >
                        The hero centers one grayscale portrait, one direct
                        title, one calm supporting paragraph, and a CTA row that
                        stays compact on desktop and wraps naturally on smaller
                        screens.
                      </p>
                    </div>

                    <div className="border border-[var(--border-color)] p-5">
                      <p
                        className="font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)]"
                        style={{ fontSize: typeStyles.label }}
                      >
                        Motion Notes
                      </p>
                      <p
                        className="text-sm leading-relaxed text-[var(--text-secondary)]"
                        style={{
                          fontSize: typeStyles.body,
                          marginTop: Math.max(12, Math.round(spacing / 2.5)),
                        }}
                      >
                        Mello only renders once enabled and skips touch devices
                        or reduced-motion environments, which keeps the
                        interaction playful without becoming noisy.
                      </p>
                    </div>
                  </div>
                </div>
              );
              }}
            </ControlledPreview>
          </Surface>

          <Surface className="animate-enter delay-400 flex flex-col gap-8">
            <SectionIntro
              eyebrow="05"
              title="Project Showcase Primitives"
              description="The homepage project list is built from a single card language that flexes between card and list views. Use the control to inspect both states."
            />

            <ControlledPreview
              label="Project List"
              hint="Adjust spacing and typography for the project toolbar, card stack, and card interiors."
              defaultSpacing={32}
              min={12}
              max={72}
            >
              {({ spacing, typeScale }) => {
                const typeStyles = getTypographyStyles(typeScale);

                return (
                <div className="flex flex-col" style={{ gap: spacing }}>
                  <div
                    className="flex flex-wrap items-center justify-between border border-[var(--border-color)] p-4"
                    style={{ gap: Math.max(12, Math.round(spacing / 2.5)) }}
                  >
                    <div
                      className="flex items-center"
                      style={{ gap: Math.max(12, Math.round(spacing / 2.5)) }}
                    >
                      <span
                        className="font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)]"
                        style={{ fontSize: typeStyles.label }}
                      >
                        Projects
                      </span>
                      <span
                        className="text-[var(--text-secondary)]"
                        style={{ fontSize: typeStyles.body }}
                      >
                        Live preview of the homepage module
                      </span>
                    </div>

                    <div
                      className="flex items-center"
                      style={{ gap: Math.max(12, Math.round(spacing / 3)) }}
                    >
                      <span
                        className="font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)]"
                        style={{ fontSize: typeStyles.label }}
                      >
                        View
                      </span>
                      <div className="flex items-center border border-[var(--border-color)] bg-white">
                        <button
                          type="button"
                          onClick={() => setPreviewMode("card")}
                          aria-label="View as cards"
                          className={`inline-flex items-center justify-center p-3 transition-colors ${
                            previewMode === "card"
                              ? "bg-[var(--text-primary)] text-[var(--bg-color)]"
                              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                          }`}
                        >
                          <Rows2 className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setPreviewMode("list")}
                          aria-label="View as list"
                          className={`inline-flex items-center justify-center border-l border-[var(--border-color)] p-3 transition-colors ${
                            previewMode === "list"
                              ? "bg-[var(--text-primary)] text-[var(--bg-color)]"
                              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                          }`}
                        >
                          <List className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex flex-col"
                    style={{
                      gap:
                        previewMode === "card"
                          ? spacing
                          : Math.max(12, Math.round(spacing / 2.5)),
                    }}
                  >
                    {previewProjects.map((project) => (
                      <ProjectPreviewCard
                        key={`${previewMode}-${project.title}`}
                        mode={previewMode}
                        project={project}
                        spacing={spacing}
                        typeScale={typeScale}
                      />
                    ))}
                  </div>
                </div>
              );
              }}
            </ControlledPreview>
          </Surface>

          <Surface className="animate-enter delay-400 flex flex-col gap-8">
            <SectionIntro
              eyebrow="06"
              title="Footer Voice"
              description="Even the footer follows the same rules: mono typography, restrained contrast, and a concise closing line."
            />

            <ControlledPreview
              label="Footer Module"
              hint="Use spacing and typography controls to adjust the footer padding and voice scale."
              defaultSpacing={32}
              min={16}
              max={72}
            >
              {({ spacing, typeScale }) => {
                const typeStyles = getTypographyStyles(typeScale);

                return (
                  <footer
                    className="border border-[var(--border-color)] text-center font-mono text-[var(--text-secondary)]"
                    style={{ fontSize: typeStyles.footer, padding: spacing }}
                  >
                    <p>ENGINEERED WITH PRECISION • {currentYear}</p>
                  </footer>
                );
              }}
            </ControlledPreview>
          </Surface>
        </div>
      </main>
      {dogEnabled && <DogFollower />}
    </>
  );
}
