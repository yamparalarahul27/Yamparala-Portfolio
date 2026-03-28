import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const DogFollower = dynamic(
  () => import("../../components/DogFollower/DogFollower"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Yamparala Rahul",
  description: "Design Engineer based in India. 5.2 years of experience across healthcare, B2B SaaS, and web3.",
};

const projects = [
  { year: "2024", title: "Deriverse Trading Journal", accent: "Live", href: "https://deriverse.hirahul.xyz" },
  { year: "2024", title: "Crpko Graphic Lab", accent: "Internal" },
  { year: "2024", title: "Log & Resources of Rahul", accent: "Live", href: "https://log.hirahul.xyz" },
  { year: "2025", title: "YDex", accent: "WIP", href: "https://learndex.hirahul.xyz/lessons" },
  { year: "2025", title: "AgentUx", accent: "WIP" },
  { year: "2025", title: "ConceptDJ", accent: "Concept" },
  { year: "2025", title: "OME-sim", accent: "Prototype", href: "https://ome.hirahul.xyz" },
  { year: "2025", title: "YPM", accent: "Idea" },
  { year: "2025", title: "YouSoft", accent: "Idea" },
  { year: "2025", title: "Proteus", accent: "Idea", href: "https://proteus.hirahul.xyz" },
  { year: "2025", title: "YAsset", accent: "Mini app" },
  { year: "2025", title: "Localhost Status App", accent: "Utility", href: "https://localhost.hirahul.xyz" },
  { year: "2025", title: "App Backgrounds", accent: "Utility", href: "https://bg.hirahul.xyz" },
];

export default function MiniPage() {
  return (
    <>
    <DogFollower />
    <main className="max-w-xl mx-auto px-4 py-16 sm:py-24 text-[var(--text-primary)]">
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
          He currently works at{" "}
          <a href="https://www.linkedin.com/company/equicom-technologies/" target="_blank" rel="noreferrer" className="underline decoration-1 underline-offset-4 hover:text-[var(--accent)] transition-colors">
            Equicom Technologies
          </a>{" "}
          building products in web3.
        </p>
        <p className="text-base leading-relaxed">
          He joined Equicom Technologies in 2025 after revamping{" "}
          <a href="https://pubkey.app" target="_blank" rel="noreferrer" className="underline decoration-1 underline-offset-4 hover:text-[var(--accent)] transition-colors">
            Pubkey
          </a>&apos;s
          UI on Solana. Before that, he spent 2.4 years at{" "}
          <a href="https://www.entytle.com" target="_blank" rel="noreferrer" className="underline decoration-1 underline-offset-4 hover:text-[var(--accent)] transition-colors">
            Entytle
          </a>{" "}
          simplifying B2B SaaS, and 2 years at{" "}
          <Link href="/2-years-at-synclo" className="underline decoration-1 underline-offset-4 hover:text-[var(--accent)] transition-colors">
            Synclo
          </Link>{" "}
          designing healthcare systems. He founded Yamparala.in in 2019.
        </p>
        <p className="text-base leading-relaxed">
          Member of{" "}
          <a href="https://www.islanddao.xyz" target="_blank" rel="noreferrer" className="underline decoration-1 underline-offset-4 hover:text-[var(--accent)] transition-colors">
            IslandDAO
          </a>
          . Contributor at{" "}
          <a href="https://superteam.fun" target="_blank" rel="noreferrer" className="underline decoration-1 underline-offset-4 hover:text-[var(--accent)] transition-colors">
            SuperteamIndia
          </a>
          .{" "}
          <a href="https://greed.academy" target="_blank" rel="noreferrer" className="underline decoration-1 underline-offset-4 hover:text-[var(--accent)] transition-colors">
            Greed Academy
          </a>{" "}
          graduate. Certified by Google and IBM.
        </p>
        <p className="text-sm text-[var(--text-secondary)]">
          <a href="https://x.com/yamparalarahul" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors">@yamparalarahul</a>
          {" / "}
          <a href="mailto:rahulvignanwork@gmail.com" className="hover:text-[var(--text-primary)] transition-colors">rahulvignanwork@gmail.com</a>
        </p>
      </section>

      {/* Projects */}
      <section className="grid grid-cols-[48px_1fr_auto] gap-x-2">
        {projects.map((project) => {
          const cells = (
            <>
              <span className="text-xs font-mono text-[var(--text-secondary)] py-3 border-t border-[var(--border-color)] flex items-center">{project.year}</span>
              <span className="text-sm truncate py-3 border-t border-[var(--border-color)] flex items-center">{project.title}</span>
              <span className="text-xs font-mono text-[var(--text-secondary)] text-right py-3 border-t border-[var(--border-color)] flex items-center justify-end">{project.accent}</span>
            </>
          );

          return project.href ? (
            <a key={project.title} href={project.href} target="_blank" rel="noreferrer" className="contents hover:text-[var(--accent)] transition-colors">
              {cells}
            </a>
          ) : (
            <div key={project.title} className="contents">
              {cells}
            </div>
          );
        })}
      </section>
    </main>
    </>
  );
}
