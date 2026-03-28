import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DogFollowerClient from "../../components/DogFollower/DogFollowerClient";

export const metadata: Metadata = {
  title: "Yamparala Rahul",
  description: "Design Engineer based in India. 5.2 years of experience across healthcare, B2B SaaS, and web3.",
};

const projects = [
  { year: "2024", title: "Deriverse Trading Journal", accent: "Live" },
  { year: "2024", title: "Crpko Graphic Lab", accent: "Internal" },
  { year: "2024", title: "Log & Resources of Rahul", accent: "Live" },
  { year: "2025", title: "YDex", accent: "WIP" },
  { year: "2025", title: "AgentUx", accent: "WIP" },
  { year: "2025", title: "ConceptDJ", accent: "Concept" },
  { year: "2025", title: "OME-sim", accent: "Prototype" },
  { year: "2025", title: "YPM", accent: "Idea" },
  { year: "2025", title: "YouSoft", accent: "Idea" },
  { year: "2025", title: "Proteus", accent: "Idea" },
  { year: "2025", title: "YAsset", accent: "Mini app" },
  { year: "2025", title: "Localhost Status App", accent: "Utility" },
  { year: "2025", title: "App Backgrounds", accent: "Utility" },
];

export default function MiniPage() {
  return (
    <>
    <DogFollowerClient />
    <main className="max-w-xl mx-auto px-4 py-16 pb-32 sm:py-24 sm:pb-40 text-[var(--text-primary)]">
      {/* Bio */}
      <section className="flex flex-col gap-4 mb-16">
        <div className="flex items-center gap-2">
          <Image
            src="/Passport Size Photo.png"
            alt="Yamparala Rahul"
            width={32}
            height={32}
            className="rounded-full object-cover w-8 h-8"
          />
          <span className="text-sm font-semibold">Yamparala Rahul</span>
        </div>
        <p className="text-base leading-relaxed">
          Yamparala Rahul is a Design Engineer based in India with 5.2 years of experience.
          He currently works at Equicom Technologies building products in web3.
        </p>
        <p className="text-base leading-relaxed">
          He joined Equicom Technologies in 2025 after revamping Pubkey&apos;s
          UI on Solana. Before that, he spent 2.4 years at Entytle simplifying B2B SaaS, and 2 years at{" "}
          <Link href="/2-years-at-synclo" className="underline decoration-1 underline-offset-4 hover:text-[var(--accent)] transition-colors">
            Synclo
          </Link>{" "}
          designing healthcare systems. He founded Yamparala.in in 2019.
        </p>
        <p className="text-base leading-relaxed">
          Member of IslandDAO. Contributor at SuperteamIndia. Greed Academy graduate. Certified by Google and IBM.
        </p>
        <p className="text-sm text-[var(--text-secondary)]">
          <span>@yamparalarahul</span>
          {" / "}
          <a href="mailto:rahulvignanwork@gmail.com" className="hover:text-[var(--text-primary)] transition-colors">rahulvignanwork@gmail.com</a>
        </p>
      </section>

      {/* Projects */}
      <section className="grid grid-cols-[48px_1fr_auto] gap-x-2">
        {projects.map((project) => (
          <div key={project.title} className="contents">
            <span className="text-xs font-mono text-[var(--text-secondary)] py-3 border-t border-[var(--border-color)] flex items-center">{project.year}</span>
            <span className="text-sm truncate py-3 border-t border-[var(--border-color)] flex items-center">{project.title}</span>
            <span className="text-xs font-mono text-[var(--text-secondary)] text-right py-3 border-t border-[var(--border-color)] flex items-center justify-end">{project.accent}</span>
          </div>
        ))}
      </section>
    </main>
    </>
  );
}
