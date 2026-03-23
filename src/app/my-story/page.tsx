"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "../../components/Footer";

export default function MyStoryPage() {
  return (
    <>
      <main className="page-container mt-[132px] text-[var(--text-primary)]">
        <div className="flex-1 flex flex-col gap-[72px] pt-8">
          {/* Back link */}
          <section className="flex flex-col gap-6 animate-enter">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors w-fit"
            >
              <ArrowLeft className="h-3 w-3" />
              Back
            </Link>
          </section>

          {/* Hero */}
          <section className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center animate-enter delay-100">
            <div className="flex-1 flex flex-col gap-5">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
                I am Yamparala Rahul
              </h1>
              <p className="text-lg lg:text-xl text-[var(--text-secondary)] max-w-2xl text-balance">
                A design-centric creative executive living in India.
              </p>
              <p className="text-base text-[var(--text-secondary)] max-w-2xl text-balance">
                I&apos;ve been designing and building products and helping
                businesses for 5+ years.
              </p>
              <p className="text-sm font-mono text-[var(--accent)]">
                I am Protagonist ENFJ-A (16Personalities)
              </p>
            </div>
            <div className="w-full max-w-[280px] lg:max-w-[320px] shrink-0">
              <div className="brutal-card overflow-hidden p-0">
                <Image
                  src="/portfolio/about/animated.gif"
                  alt="Yamparala Rahul animated portrait"
                  width={320}
                  height={320}
                  unoptimized
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* My Design Process */}
          <section className="flex flex-col gap-8 animate-enter delay-200">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter">
              My Design Process
            </h2>
            <div className="flex flex-col gap-6">
              <div className="brutal-card overflow-hidden p-0">
                <Image
                  src="/portfolio/about/design-thinking.png"
                  alt="Design thinking framework"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="brutal-card overflow-hidden p-0">
                <Image
                  src="/portfolio/about/design-process.png"
                  alt="Design process overview"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="flex flex-col gap-8 animate-enter delay-300">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="brutal-card flex flex-col items-center gap-4 p-6">
                <Image
                  src="/portfolio/badge-gcc.png"
                  alt="Google UX Design Certificate badge"
                  width={200}
                  height={200}
                  className="w-full max-w-[200px] h-auto"
                />
                <p className="text-sm font-mono text-center text-[var(--text-secondary)]">
                  Google UX Design Certificate
                </p>
              </div>
              <div className="brutal-card flex flex-col items-center gap-4 p-6">
                <Image
                  src="/portfolio/badge-ibm.png"
                  alt="IBM Enterprise Design Thinking badge"
                  width={200}
                  height={200}
                  className="w-full max-w-[200px] h-auto"
                />
                <p className="text-sm font-mono text-center text-[var(--text-secondary)]">
                  IBM Enterprise Design Thinking
                </p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="flex flex-col gap-8 animate-enter delay-400">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter">
              How it Started and How it is Going
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { year: "2018", src: "/portfolio/about/timeline-2018.png" },
                { year: "2022", src: "/portfolio/about/timeline-2022.png" },
                { year: "2023", src: "/portfolio/about/timeline-2023.png" },
              ].map((item) => (
                <div
                  key={item.year}
                  className="brutal-card flex flex-col gap-3 p-0 overflow-hidden"
                >
                  <Image
                    src={item.src}
                    alt={`Timeline ${item.year}`}
                    width={400}
                    height={500}
                    className="w-full h-auto"
                  />
                  <p className="text-center text-lg font-bold font-mono pb-4">
                    {item.year}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
