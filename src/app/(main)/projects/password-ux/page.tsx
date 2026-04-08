"use client";

import { useState } from "react";
import Image from "next/image";
import BackLink from "../../../../components/BackLink";
import "./case-study.css";

type Annotation = {
  label: string;
  description: string;
};

type Stage = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  annotations: Annotation[];
};

const stages: Stage[] = [
  {
    id: "problem",
    title: "The Problem",
    subtitle: "Existing password field",
    description:
      "On-exit validation threw errors only after the user left the field. No password visibility toggle clarity. No strength feedback until submission. 7 monthly forgot-password support requests costing 660 minutes/year.",
    image: "/portfolio/password-ux/pwdux_05_Password_Present.png",
    annotations: [
      { label: "On-exit validation", description: "Errors appear too late — after the user leaves the field" },
      { label: "No visibility toggle", description: "Users can't verify what they've typed without ambiguous eye icon" },
      { label: "No strength meter", description: "Zero feedback on password strength before submission" },
    ],
  },
  {
    id: "research",
    title: "Research",
    subtitle: "Audit & analysis",
    description:
      "Audited 20+ B2B enterprise forms across SaaS products, studying validation patterns, copy, layout, and error handling. Mixpanel data revealed the forgot-password funnel frequency.",
    image: "/portfolio/password-ux/pwdux_04_c55daa_7b131e3b98a2469392fc974846bc3883~mv2.png",
    annotations: [
      { label: "20+ form audit", description: "Studied validation, copy, layout across enterprise SaaS" },
      { label: "Mixpanel analytics", description: "Data-driven analysis of forgot-password funnel events" },
      { label: "WCAG standards", description: "Accessibility requirements mapped to form interactions" },
    ],
  },
  {
    id: "requirements",
    title: "Requirements",
    subtitle: "Show them upfront",
    description:
      "Instead of punishing users with errors after they leave the field, the redesign surfaces every requirement before the user types. Requirements are visible, explicit, and update in real time.",
    image: "/portfolio/password-ux/pwdux_14_Password_Horizontal.png",
    annotations: [
      { label: "Live validation", description: "Requirements check off in real time as the user types" },
      { label: "UX copy tuned", description: "'Strong password should contain' — tested multiple label variations" },
      { label: "Explicit over implicit", description: "Each rule is a visible line item, not hidden behind progressive disclosure" },
    ],
  },
  {
    id: "icons",
    title: "Icon States",
    subtitle: "Met vs unmet requirements",
    description:
      "Choosing the right icon pair for 'not yet met' and 'met' states. Icons had to be universally understood, colorblind-safe, and work at 14px. Error states shift from neutral guidance to clear, non-punishing feedback.",
    image: "/portfolio/password-ux/pwdux_22_Choosen.png",
    annotations: [
      { label: "Met state", description: "Green checkmark — universally understood completion signal" },
      { label: "Unmet state", description: "Neutral dot — no punishment, just guidance" },
      { label: "Error state", description: "Red X on submit — clear but non-punishing feedback" },
    ],
  },
  {
    id: "showhide",
    title: "Show / Hide",
    subtitle: "The eye icon dilemma",
    description:
      "The eye icon carries ambiguity: does it mean 'password is visible' or 'click to make visible'? Replaced with a simple 'Show password' checkbox — clear, accessible, and natively supported by screen readers.",
    image: "/portfolio/password-ux/pwdux_32_Checkbox.png",
    annotations: [
      { label: "Checkbox approach", description: "Label removes all ambiguity about toggle state" },
      { label: "Accessibility", description: "Native screen reader and keyboard navigation support" },
      { label: "Secure default", description: "Unchecked by default — passwords start hidden" },
    ],
  },
  {
    id: "strength",
    title: "Strength Meter",
    subtitle: "How strong is strong enough?",
    description:
      "A progress bar gives users a quick, visual sense of strength without abstract labels. Three clear states: Weak (red), Medium (yellow), Strong (green) with incremental fill.",
    image: "/portfolio/password-ux/pwdux_44_Strong.png",
    annotations: [
      { label: "Progress bar", description: "Visual strength without requiring users to interpret labels" },
      { label: "Color-coded", description: "Red → Yellow → Green — universally understood spectrum" },
      { label: "Incremental", description: "Bar fills progressively as requirements are met" },
    ],
  },
  {
    id: "shipped",
    title: "Shipped",
    subtitle: "Final product",
    description:
      "The redesigned password flow shipped as part of Entytle's onboarding overhaul. Live validation replaced on-exit validation. Checkbox replaced the eye icon. Strength indicator gave users confidence before submission.",
    image: "/portfolio/password-ux/pwdux_37_Done.png",
    annotations: [
      { label: "Live validation", description: "Real-time feedback reduced error encounters" },
      { label: "Checkbox toggle", description: "Eliminated eye-icon ambiguity entirely" },
      { label: "Strength meter", description: "Users gain confidence before hitting submit" },
      { label: "Support impact", description: "Reduced monthly forgot-password support load" },
    ],
  },
];

export default function PasswordUxCaseStudy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = stages[activeIndex];

  return (
    <main className="page-container mt-12 sm:mt-16 lg:mt-[72px] px-3 sm:px-4 text-[var(--text-primary)]">
      <BackLink href="/mini" label="Back" className="mb-4 animate-enter" />

      {/* Header */}
      <header className="mb-6 animate-enter delay-100">
        <span className="cs-label">Case Study</span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mt-1">
          Product Experience of Password Creation
        </h1>
        <p className="text-sm text-[var(--text-secondary)] mt-2">
          Entytle &middot; Onboarding Redesign &middot; 7 design stages
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
          <a href="#full-study" className="cs-nav-link mt-4">
            View full case study
          </a>
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
              <span>Problem</span>
              <span>Shipped</span>
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
      <div id="full-study" className="mt-12 mb-8">
        <hr className="border-[var(--border-color)] mb-6" />
        <p className="text-sm text-[var(--text-secondary)]">
          The full case study with all images and detailed analysis is available on the{" "}
          <a href="/mini#password-ux" className="text-[var(--accent)] underline underline-offset-2">
            main portfolio page
          </a>.
        </p>
      </div>
    </main>
  );
}
