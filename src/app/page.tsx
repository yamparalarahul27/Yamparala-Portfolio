import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Deriverse Trading Journal",
      category: "Analytics Dashboard",
      description: "A comprehensive trading journal and analytics platform tailored for Deriverse.",
      image: "/images/Deriverse.png",
      href: "https://deriverse.vercel.app",
      year: "2024",
    },
    {
      id: 2,
      title: "Log & Resources of Rahul",
      category: "Internal Tooling",
      description: "A centralized, high-performance platform for design team resources.",
      image: "/images/Ymparalalog.png",
      href: "https://yamparalalog.vercel.app",
      year: "2024",
    },
    {
      id: 3,
      title: "Meet Mello",
      category: "Interactive Mechanics",
      description: "An interactive, cursor-following virtual pet mechanic prototype built in React.",
      image: "/sprites/mello.webp",
      href: "/mello",
      year: "2024",
      isMello: true,
    },
  ];

  return (
    <main className="page-container text-[var(--text-primary)]">

      {/* Top Header / Navigation */}
      <header className="border-b border-[var(--border-color)] p-6 lg:p-9 flex flex-col md:flex-row items-center justify-between bg-white sticky top-0 z-50 animate-enter">
        <div className="flex items-center gap-6 mb-6 md:mb-0 w-full md:w-auto">
          {/* Portrait */}
          <div className="relative w-16 h-16 shrink-0 structural-border-right border-[var(--border-color)] overflow-hidden hidden md:block">
            <Image
              src="/headshot.png"
              alt="Yamparala Rahul Portrait"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Name & Title */}
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tighter leading-none mb-2">
              Yamparala Rahul
            </h1>
            <p className="text-sm text-[var(--text-secondary)] font-medium">
              UX Engineer @ <a href="https://www.linkedin.com/company/equicom-technologies/" target="_blank" rel="noreferrer" className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors underline decoration-1 underline-offset-4">Equicom Technologies</a>
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="flex gap-4 w-full md:w-auto">
          <a href="https://t.me/yamparalarahul1" className="brutal-btn w-full md:w-auto text-sm py-2 px-4" target="_blank" rel="noreferrer">
            <MessageSquare className="w-4 h-4 mr-2" /> Telegram
          </a>
          <a href="https://wa.me/918897132717" className="brutal-btn w-full" target="_blank" rel="noreferrer">
            <MessageSquare className="w-4 h-4 mr-2" /> WhatsApp
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col gap-3 mt-3">

        <header className="px-9 py-7 structural-border flex justify-between items-center bg-white sticky top-[120px] md:top-[88px] lg:top-[112px] z-40">
          <h2 className="text-xs uppercase tracking-widest font-bold text-[var(--text-secondary)]">Selected Work</h2>
          <span className="text-xs font-mono">{new Date().getFullYear()}</span>
        </header>

        <section className="flex flex-col gap-3">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : "_self"}
              rel={project.href.startsWith("http") ? "noopener noreferrer" : ""}
              className={`brutal-card block animate-enter delay-${(index + 2) * 100}`}
            >
              <div className="flex flex-col lg:flex-row gap-9 lg:gap-[52px] items-start justify-between">

                {/* Text Metadata */}
                <div className="flex-1 lg:max-w-md">
                  <div className="flex items-center gap-5 mb-5 text-xs font-mono text-[var(--text-secondary)]">
                    <span>{project.year}</span>
                    <span className="w-8 h-px bg-[var(--border-color)] mx-2"></span>
                    <span className="text-[var(--accent)] font-semibold">{project.category}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-5 group-hover:text-[var(--bg-color)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[var(--text-secondary)] mb-9 text-balance group-hover:text-white/80 transition-colors">
                    {project.description}
                  </p>

                  <div className="inline-flex items-center text-sm font-bold tracking-wide uppercase">
                    View Project <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Project Visual */}
                <div className={`project-image-wrapper relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-[16/10] ${project.isMello ? 'bg-[#f3f4f6] flex items-center justify-center p-8' : ''}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill={!project.isMello}
                    width={project.isMello ? 128 : undefined}
                    height={project.isMello ? 128 : undefined}
                    className={`project-image ${project.isMello ? 'object-none object-left-top w-32 h-32' : 'object-cover'}`}
                  />
                </div>
              </div>
            </Link>
          ))}
        </section>

        <footer className="p-9 text-xs font-mono text-[var(--text-secondary)] text-center animate-enter delay-400">
          <p>ENGINEERED WITH PRECISION • {new Date().getFullYear()}</p>
        </footer>
      </div>

    </main>
  );
}
