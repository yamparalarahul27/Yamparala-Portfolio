"use client";

import Image from "next/image";
import Peektext from "../../components/Peektext";
import ProjectList from "../../components/ProjectList";
import LandingFooter from "../../components/LandingFooter";
import DogFollowerClient from "../../components/DogFollower/DogFollowerClient";

type Segment =
  | { text: string; image?: undefined }
  | { text: string; image: string; imageAlt: string };

const bioSegments: Segment[] = [
  { text: "Yamparala Rahul is a Design Engineer based in India with " },
  { text: "5.2 years", image: "/portfolio/synclo-work.png", imageAlt: "5.2 years of experience" },
  { text: " of experience. He currently works at " },
  { text: "Equicom Technologies", image: "/portfolio/entytle-work.png", imageAlt: "Equicom Technologies" },
  { text: " building products in web3 and finance." },
  { text: "\n" },
  { text: "He joined Equicom Technologies in 2025 after revamping " },
  { text: "Pubkey's UI on Solana", image: "/portfolio/pubkey-work.png", imageAlt: "Pubkey project" },
  { text: ". Before that, he spent 2.4 years at " },
  { text: "Entytle", image: "/portfolio/entytle-work.png", imageAlt: "Entytle B2B SaaS" },
  { text: " simplifying B2B SaaS, and 2 years at " },
  { text: "Synclo", image: "/portfolio/synclo-work.png", imageAlt: "Synclo healthcare" },
  { text: " designing healthcare systems." },
  { text: "\n" },
  { text: "Member of " },
  { text: "IslandDAO", image: "/portfolio/pubkey-work.png", imageAlt: "IslandDAO" },
  { text: ". Contributor at SuperteamIndia. Greed Academy graduate. Certified by " },
  { text: "Google", image: "/portfolio/badge-gcc.png", imageAlt: "Google UX Design Certificate" },
  { text: " and " },
  { text: "IBM", image: "/portfolio/badge-ibm.png", imageAlt: "IBM Enterprise Design Thinking" },
  { text: "." },
];

const projects = [
  { year: "2025", title: "Collection App", accent: "proteus.hirahul.xyz", image: "/Proteus.png", imageAlt: "Proteus Collection App" },
  { year: "2024", title: "Log App", accent: "log.hirahul.xyz", image: "/images/Ymparalalog.png", imageAlt: "Log App" },
  { year: "2025", title: "AgenticUX App", accent: "Own Private", image: "/AgentUX.png", imageAlt: "AgenticUX App" },
  { year: "2024", title: "Crpko Graphics App", accent: "Work Private" },
  { year: "2025", title: "Asset App", accent: "Own Private" },
  { year: "2024", title: "Deriverse Journal App", accent: "deriverse.hirahul.xyz", image: "/Derivsers.png", imageAlt: "Deriverse Journal" },
  { year: "2025", title: "UI Concept App", accent: "conceptdj.vercel.app" },
  { year: "2025", title: "Y Dex", accent: "learndex.hirahul.xyz" },
  { year: "2025", title: "Order Matching Simulator", accent: "ome-sim.vercel.app" },
  { year: "2025", title: "Background App", accent: "bg.hirahul.xyz" },
];

export default function TestPage() {
  return (
    <>
      <DogFollowerClient />
      <main className="max-w-xl mx-auto !px-4 !py-16 sm:!py-24 text-[var(--text-primary)] [&_section]:!p-0 [&_section>div]:!p-0 [&_footer]:!p-0">
        {/* Bio */}
        <section className="flex flex-col gap-4 mb-16">
          <div className="flex items-center gap-2 pb-1">
            <Image
              src="/Passport Size Photo.png"
              alt="Yamparala Rahul"
              width={40}
              height={40}
              className="object-cover w-10 h-10 rounded-lg"
            />
            <span className="text-sm font-semibold">Yamparala Rahul</span>
          </div>

          <p className="text-base leading-relaxed transition-colors duration-200" data-peektext-container>
            {bioSegments.map((seg, i) => {
              if (seg.text === "\n") return <br key={i} />;
              if (seg.image) {
                return (
                  <Peektext
                    key={i}
                    text={seg.text}
                    image={seg.image}
                    imageAlt={seg.imageAlt}
                  />
                );
              }
              return <span key={i}>{seg.text}</span>;
            })}
          </p>

          <p className="text-sm text-[var(--text-secondary)] pb-4">
            <span>@yamparalarahul</span>
            {" / "}
            <a
              href="mailto:rahulvignanwork@gmail.com"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              rahulvignanwork@gmail.com
            </a>
          </p>
        </section>

        {/* Projects */}
        <ProjectList projects={projects} />
      </main>
      <LandingFooter />
    </>
  );
}
