"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, List, Rows2 } from "lucide-react";

const DogFollower = dynamic(
  () => import("../components/DogFollower/DogFollower"),
  { ssr: false }
);

export default function Home() {
  const [dogEnabled, setDogEnabled] = useState(false);
  const [viewMode, setViewMode] = useState<"card" | "list">("card");

  const projects = [
    {
      id: 1,
      year: "2024",
      title: "Deriverse Trading Journal",
      category: "Side Quests",
      description: "A project built for a Superteam bounty on Earn, focused on the Deriverse ecosystem.",
      image: "/images/Deriverse.png",
      href: "https://deriverse.hirahul.xyz",
      accent: "Live product",
    },
    {
      id: 2,
      year: "2024",
      title: "Crpko Graphic Lab",
      category: "Internal Tool",
      description: "An internal Equicom tool designed to make graphics creation, feedback, and developer handoff easier and more efficient.",
      accent: "Internal tool",
    },
    {
      id: 3,
      year: "2024",
      title: "Log & Resources of Rahul",
      category: "Internal Tooling",
      description: "A project built to collect interesting references, ideas, and useful resources in one place.",
      image: "/images/Ymparalalog.png",
      href: "https://log.hirahul.xyz",
      accent: "Live product",
    },
    {
      id: 4,
      year: "2025",
      title: "YDex",
      category: "Products WIP",
      description: "A work-in-progress product direction exploring a faster, structured way to index and retrieve product knowledge.",
      href: "https://dex.hirahul.xyz",
      accent: "WIP",
    },
    {
      id: 5,
      year: "2025",
      title: "AgentUx",
      category: "Products WIP",
      description: "A project to help developers and founders identify and fix UX flow issues in their apps.",
      accent: "WIP",
    },
    {
      id: 6,
      year: "2025",
      title: "ConceptDJ",
      category: "Side Quests",
      description: "A UI playground for exploring future features planned for Deriverse Journal.",
      accent: "Concept build",
    },
    {
      id: 7,
      year: "2025",
      title: "OME-sim",
      category: "Side Quests",
      description: "A project built for a Superteam bounty on Earn to simulate and develop a production-grade Rust Solana order matching engine program.",
      href: "https://ome.hirahul.xyz",
      accent: "Prototype",
    },
    {
      id: 8,
      year: "2025",
      title: "YPM",
      category: "Ideas",
      description: "A project to better understand prediction markets and make them simpler to use.",
      accent: "Idea",
    },
    {
      id: 9,
      year: "2025",
      title: "YouSoft",
      category: "Ideas",
      description: "A project exploring how to make a YouTube-style experience for software.",
      accent: "Idea",
    },
    {
      id: 10,
      year: "2025",
      title: "Proteus",
      category: "Ideas",
      description: "A project to bring together cross-chain analytics and a personalized dApp portal.",
      href: "https://proteus.hirahul.xyz",
      accent: "Idea",
    },
    {
      id: 11,
      year: "2025",
      title: "YAsset",
      category: "Mini Apps",
      description: "A project to make assets versus liabilities more measurable for personal finance.",
      accent: "Mini app",
    },
    {
      id: 12,
      year: "2025",
      title: "Localhost Status App",
      category: "Internal Tooling",
      description: "A lightweight status dashboard for checking whether local apps and services are running during development.",
      href: "https://localhost.hirahul.xyz",
      accent: "Live utility",
    },
    {
      id: 13,
      year: "2025",
      title: "App Backgrounds",
      category: "Mini Apps",
      description: "A small utility for browsing and collecting polished app backgrounds for product and design work.",
      href: "https://bg.hirahul.xyz",
      accent: "Live utility",
    },
  ];

  return (
    <>
      <main className="page-container mt-[72px] text-[var(--text-primary)]">

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col gap-[72px] pt-8">

          {/* Hero Section */}
          <section className="flex flex-col items-center text-center gap-8 animate-enter">
            <div className="flex flex-col items-center gap-3">
              {/* Portrait */}
              <div className="relative w-20 h-20 shrink-0 overflow-hidden">
                <Image
                  src="/Passport Size Photo.png"
                  alt="Yamparala Rahul Portrait"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
                  Yamparala Rahul
                </h1>
                <p className="text-sm text-[var(--text-secondary)] font-medium mt-3">
                  Design Engineer @ <a href="https://www.linkedin.com/company/equicom-technologies/" target="_blank" rel="noreferrer" className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors underline decoration-1 underline-offset-4">Equicom Technologies</a>
                </p>
              </div>
            </div>

            <p className="text-lg text-[var(--text-secondary)] max-w-2xl text-balance text-center">
              This is a placeholder paragraph for the hero section. Replace this with a compelling introduction or tagline that captures the essence of your work.
            </p>

            {/* Contact CTA */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="https://t.me/yamparalarahul1" className="brutal-btn w-full sm:w-auto" target="_blank" rel="noreferrer">
                Telegram
              </a>
              <a href="https://wa.me/918897132717" className="brutal-btn w-full sm:w-auto" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <button
                type="button"
                onClick={() => setDogEnabled((enabled) => !enabled)}
                className={`brutal-btn w-full sm:w-auto ${dogEnabled ? "bg-[var(--text-primary)] text-[var(--bg-color)] border-[var(--text-primary)] hover:bg-transparent hover:text-[var(--text-primary)]" : ""}`}
              >
                {dogEnabled ? "Dismiss Mello" : "Meet Mello"}
              </button>
            </div>
          </section>

          <section className="flex flex-col gap-8">
            <div className="flex flex-col items-start justify-between gap-3 p-3 sm:flex-row sm:items-center sm:gap-8 animate-enter delay-200">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                  Projects
                </span>
              </div>
              <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-start">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  View
                </span>
                <div className="flex items-center border border-[var(--border-color)] bg-white">
                  <button
                    type="button"
                    onClick={() => setViewMode("card")}
                    aria-label="View as cards"
                    className={`inline-flex items-center justify-center p-3 transition-colors ${viewMode === "card" ? "bg-[var(--text-primary)] text-[var(--bg-color)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}
                  >
                    <Rows2 className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("list")}
                    aria-label="View as list"
                    className={`inline-flex items-center justify-center border-l border-[var(--border-color)] p-3 transition-colors ${viewMode === "list" ? "bg-[var(--text-primary)] text-[var(--bg-color)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className={`flex ${viewMode === "card" ? "flex-col gap-8" : "flex-col gap-3"}`}>
              {projects.map((project, index) => {
                const cardClassName = `group brutal-card bg-white block animate-enter delay-${(index + 2) * 100} ${viewMode === "list" ? "p-3" : ""}`;
                const cardContent = (
                  <div className={`flex items-start justify-between ${viewMode === "card" ? "flex-col gap-8 lg:flex-row lg:gap-[60px]" : "flex-col gap-4 sm:flex-row sm:gap-8"}`}>
                    <div className={`flex flex-col ${viewMode === "card" ? "flex-1 gap-3 lg:max-w-md" : "min-w-0 flex-1 gap-3"}`}>
                      <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-secondary)]">
                        <span>{project.year}</span>
                        <span className="w-8 h-px bg-[var(--border-color)]"></span>
                        <span className="text-[var(--accent)] font-semibold">{project.category}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className={`${viewMode === "card" ? "text-2xl lg:text-3xl" : "text-xl"} font-bold tracking-tight transition-colors`}>
                          {project.title}
                        </h3>
                        <span className="inline-flex items-center border border-[var(--border-color)] px-1 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                          {project.accent}
                        </span>
                      </div>

                      <p className="text-[var(--text-secondary)] text-balance transition-colors">
                        {project.description}
                      </p>

                      <div className="inline-flex items-center text-sm font-bold tracking-wide uppercase">
                        {project.href ? "View Project" : "In Progress"}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>

                    {viewMode === "card" ? (
                      <div className="project-image-wrapper relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f3f4f6_100%)]">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="project-image object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full flex-col justify-between p-8">
                            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                              <span>{project.category}</span>
                              <span>{project.year}</span>
                            </div>
                            <div className="space-y-3">
                              <div className="h-3 w-24 bg-[var(--border-color)]"></div>
                              <div className="h-3 w-40 bg-[var(--text-primary)]"></div>
                              <div className="h-3 w-32 bg-[var(--border-color)]"></div>
                            </div>
                            <div className="text-left text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                              {project.title}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>
                );

                return (
                  project.href ? (
                    <Link
                      key={project.id}
                      href={project.href}
                      target={project.href.startsWith("http") ? "_blank" : "_self"}
                      rel={project.href.startsWith("http") ? "noopener noreferrer" : ""}
                      className={cardClassName}
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    <article key={project.id} className={cardClassName}>
                      {cardContent}
                    </article>
                  )
                );
              })}
            </div>
          </section>

          <footer className="p-8 text-xs font-mono text-[var(--text-secondary)] text-center animate-enter delay-400">
            <p>ENGINEERED WITH PRECISION • {new Date().getFullYear()}</p>
          </footer>
        </div>
      </main>
      {dogEnabled && <DogFollower />}
    </>
  );
}
