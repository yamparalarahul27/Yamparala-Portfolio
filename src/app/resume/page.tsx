import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

const resumes = [
  {
    id: 1,
    title: "Resume for AI Startups & Companies",
    image: "/portfolio/resume/ai.png",
    href: "#",
  },
  {
    id: 2,
    title: "Resume for B2B Startups & Companies",
    image: "/portfolio/resume/b2b.png",
    href: "#",
  },
  {
    id: 3,
    title: "Resume for Web3 Startups & Companies",
    image: "/portfolio/resume/web3.png",
    href: "#",
  },
];

export default function ResumePage() {
  return (
    <>
      <main className="page-container mt-[132px] text-[var(--text-primary)]">
        <div className="flex-1 flex flex-col gap-[72px] pt-8">
          {/* Header */}
          <section className="flex flex-col gap-6 animate-enter">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors w-fit"
            >
              &larr; Back
            </Link>

            <div className="flex flex-col gap-3">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
                Hi, Founder/Builder/Hr.
              </h1>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl text-balance">
                Please download the resume based on what category you are
                building, each resume is crafted have relevant info.
              </p>
            </div>
          </section>

          {/* Resume Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-enter">
            {resumes.map((resume) => (
              <div
                key={resume.id}
                className="brutal-card bg-white flex flex-col overflow-hidden"
              >
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={resume.image}
                    alt={resume.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col gap-4">
                  <h2 className="text-lg font-bold tracking-tight">
                    {resume.title}
                  </h2>

                  <a
                    href={resume.href}
                    download
                    className="brutal-btn text-center w-full"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            ))}
          </section>

          {/* Closing */}
          <section className="text-center animate-enter">
            <p className="text-xl font-semibold tracking-tight text-[var(--text-secondary)]">
              Thank you, Looking forward to hear from you.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
