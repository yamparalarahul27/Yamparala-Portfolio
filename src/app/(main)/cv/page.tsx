import type { Metadata } from "next";
import CVPage from "../../../components/cv/CVPage";
import BackLink from "../../../components/BackLink";

export const metadata: Metadata = {
  title: "Resume — Yamparala Rahul",
  description: "Dynamic, industry-tailored resume. Select AI, B2B, or Web3 to customize and download as a one-page PDF.",
};

export default function CVRoute() {
  return (
    <main className="page-container mt-12 sm:mt-16 lg:mt-[72px] px-3 sm:px-4 text-[var(--text-primary)]">
      <BackLink href="/" label="Back" className="animate-enter mb-6" />
      <div className="animate-enter delay-100">
        <CVPage />
      </div>

    </main>
  );
}
