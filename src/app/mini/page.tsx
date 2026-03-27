import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yamparala Rahul",
  description: "Design Engineer based in India. 5.2 years of experience across healthcare, B2B SaaS, and web3.",
};

const timeline = [
  { date: "Jul 2025", text: "Joined Equicom Technologies as Design Engineer. Building products in web3." },
  { date: "May 2025", text: "Joined Pubkey as Product Designer. Revamped the UI for their Solana Discord verification product. Project closed June 2025." },
  { date: "Feb 2023", text: "Joined Entytle as UX Designer. US-based B2B SaaS. 2.4 years, 3 end-to-end products, 7% increase in retention." },
  { date: "Dec 2020", text: "Joined Detrix.io / Synclo as UX Designer. Singapore-based healthcare startup. 2 years, 4 end-to-end products, 3 multi-speciality hospitals onboarded." },
  { date: "Jan 2019", text: "Founded Yamparala.in. Head of Design, freelance work and portfolio audits. Closed in 2020." },
];

export default function MiniPage() {
  return (
    <main className="max-w-xl mx-auto px-4 py-16 sm:py-24 text-[var(--text-primary)]">
      {/* Bio */}
      <section className="flex flex-col gap-4 mb-16">
        <p className="text-base leading-relaxed">
          Yamparala Rahul is a Design Engineer based in India with 5.2 years of experience.
          He currently works at{" "}
          <a href="https://www.linkedin.com/company/equicom-technologies/" target="_blank" rel="noreferrer" className="underline decoration-1 underline-offset-4 hover:text-[var(--accent)] transition-colors">
            Equicom Technologies
          </a>{" "}
          building products in web3.
        </p>
        <p className="text-base leading-relaxed">
          Previously, he designed healthcare systems at Synclo (Singapore),
          simplified installed base management at Entytle (US),
          and revamped Pubkey&apos;s UI. He is a member of{" "}
          <a href="https://www.islanddao.xyz" target="_blank" rel="noreferrer" className="underline decoration-1 underline-offset-4 hover:text-[var(--accent)] transition-colors">
            IslandDAO
          </a>
          , contributor at{" "}
          <a href="https://superteam.fun" target="_blank" rel="noreferrer" className="underline decoration-1 underline-offset-4 hover:text-[var(--accent)] transition-colors">
            SuperteamIndia
          </a>
          , and a{" "}
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

      {/* Timeline */}
      <section className="flex flex-col">
        {timeline.map((entry) => (
          <div key={entry.date} className="flex gap-6 py-4 border-t border-[var(--border-color)]">
            <span className="text-sm font-mono text-[var(--text-secondary)] shrink-0 w-20">
              {entry.date}
            </span>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {entry.text}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
