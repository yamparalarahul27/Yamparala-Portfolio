import Image from "next/image";

const resumes = [
  { id: 1, title: "Resume for AI Startups & Companies", image: "/portfolio/resume/ai.png", href: "/cv?industry=ai" },
  { id: 2, title: "Resume for B2B Startups & Companies", image: "/portfolio/resume/b2b.png", href: "/cv?industry=b2b" },
  { id: 3, title: "Resume for Web3 Startups & Companies", image: "/portfolio/resume/web3.png", href: "/cv?industry=web3" },
];

export default function ResumeSection() {
  return (
    <div id="resume" className="flex flex-col gap-8 sm:gap-12 lg:gap-[56px]">
      {/* Header */}
      <section className="flex flex-col gap-3 animate-enter">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tighter leading-tight">
          Hi, Founder/Builder/Hr.
        </h2>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl text-balance">
          Please download the resume based on what category you are building, each resume is crafted have relevant info.
        </p>
      </section>

      {/* Resume Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 animate-enter">
        {resumes.map((resume) => (
          <div key={resume.id} className="brutal-card bg-[var(--surface-color)] flex flex-col overflow-hidden">
            <div className="relative w-full aspect-[3/4]">
              <Image src={resume.image} alt={resume.title} fill className="object-cover" />
            </div>
            <div className="p-5 flex flex-col gap-4">
              <h3 className="text-lg font-bold tracking-tight">{resume.title}</h3>
              <a href={resume.href} download className="brutal-btn text-center w-full">Download Resume</a>
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
  );
}
