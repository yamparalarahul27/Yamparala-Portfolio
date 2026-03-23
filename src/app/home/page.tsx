"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <main className="text-[var(--text-primary)]">

        {/* ─── Hero Section ─── */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden animate-enter">
          {/* Background Image */}
          <Image
            src="/portfolio/hero.png"
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center text-center gap-6 px-4 py-16 max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight text-white">
              UX Designer for Finance Web3 &amp; B2B Experience.
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-xl">
              2 Years of B2B and 3 Years of Web3 Finance Experience.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
              <a
                href="https://wa.me/918897132717"
                target="_blank"
                rel="noreferrer"
                className="brutal-btn bg-white text-[var(--text-primary)] border-white w-full sm:w-auto"
              >
                Onboard Now
              </a>
              <Link
                href="/resume"
                className="brutal-btn border-white text-white hover:text-[var(--text-primary)] w-full sm:w-auto"
              >
                Resume
              </Link>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-4 mt-6">
              <Image src="/portfolio/badge-gcc.png" alt="GCC badge" width={40} height={40} />
              <Image src="/portfolio/badge-ibm.png" alt="IBM badge" width={40} height={40} />
              <Image src="/portfolio/badge-greed.png" alt="Greed badge" width={40} height={40} />
            </div>
          </div>
        </section>

        {/* ─── About Section ─── */}
        <section className="page-container py-16 lg:py-24 animate-enter delay-100">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Yamparala Rahul is an India-based Senior Designer.
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Specialising in application User Experience design
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              With 5 years of design work experience.
            </p>
            <p className="text-base text-[var(--text-secondary)]">
              Experiences Designed for: <span className="text-[var(--text-primary)] font-semibold">Web 3 Finance, Healthcare and B2B SaaS</span>
            </p>
            <p className="text-base text-[var(--text-secondary)]">
              Trusted by <span className="text-[var(--text-primary)] font-semibold">12+ executives</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link href="/resume" className="brutal-btn w-full sm:w-auto">
                Download Resume
              </Link>
              <Link href="/my-story" className="brutal-btn w-full sm:w-auto">
                Design Process
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Work Section: Pubkey ─── */}
        <section className="page-container py-12 lg:py-20 animate-enter delay-200">
          <div className="brutal-card max-w-5xl mx-auto flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Image src="/portfolio/pubkey-logo.png" alt="Pubkey logo" width={48} height={48} className="shrink-0" />
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                  Revamping Opensource Discord Verification
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  Product Design | 1 Month | Mobile &amp; Web | First full fledge Solana Project
                </p>
              </div>
            </div>

            {/* Work Image */}
            <div className="project-image-wrapper relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src="/portfolio/pubkey-work.png"
                alt="Pubkey project work"
                fill
                className="project-image object-cover"
              />
            </div>

            {/* Testimonial */}
            <div className="flex flex-col sm:flex-row items-start gap-4 border-l-4 border-[var(--text-primary)] pl-4">
              <Image
                src="/portfolio/beeman.png"
                alt="Beeman avatar"
                width={48}
                height={48}
                className="rounded-full shrink-0"
              />
              <div>
                <p className="font-semibold text-sm">Beeman</p>
                <div className="mt-2 flex flex-col gap-2 text-sm text-[var(--text-secondary)] italic">
                  <p>&ldquo;This is awesome!&rdquo;</p>
                  <p>&ldquo;This all looks amazing!&rdquo;</p>
                  <p>&ldquo;I love these cards! Looks super clean!&rdquo;</p>
                  <p>&ldquo;Very clean way to do the Wizard!&rdquo;</p>
                </div>
              </div>
            </div>

            {/* Yellow Notice */}
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 text-sm px-4 py-3">
              In-progress of Documenting work for public view. please visit later
            </div>
          </div>
        </section>

        {/* ─── Work Section: Synclo ─── */}
        <section className="page-container py-12 lg:py-20 animate-enter delay-300">
          <div className="brutal-card max-w-5xl mx-auto flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Image src="/portfolio/synclo-logo.png" alt="Synclo logo" width={48} height={48} className="shrink-0" />
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                  Building connected OPD Care at Singapore Based
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  UI Design | 2 Years | 4 End to End Products | 1 Multi-speciality Hospital Onboarded | Web2
                </p>
              </div>
            </div>

            {/* Work Image */}
            <div className="project-image-wrapper relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src="/portfolio/synclo-work.png"
                alt="Synclo project work"
                fill
                className="project-image object-cover"
              />
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vinay Kumar */}
              <div className="flex flex-col gap-3 border-l-4 border-[var(--text-primary)] pl-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/portfolio/vinay.png"
                    alt="Vinay Kumar avatar"
                    width={40}
                    height={40}
                    className="rounded-full shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-sm">Vinay Kumar</p>
                    <p className="text-xs text-[var(--text-secondary)]">Ex Sr. SE @ Detrix</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] italic">
                  &ldquo;He&apos;s been fantastic. His designs are creative, user-friendly, and well-documented. He simplifies complexity and communicates clearly across teams&mdash;always delivering high-quality work.&rdquo;
                </p>
              </div>

              {/* Akhil Ravilla */}
              <div className="flex flex-col gap-3 border-l-4 border-[var(--text-primary)] pl-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/portfolio/akhil.png"
                    alt="Akhil Ravilla avatar"
                    width={40}
                    height={40}
                    className="rounded-full shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-sm">Akhil Ravilla</p>
                    <p className="text-xs text-[var(--text-secondary)]">Ex SE2 @ Detrix</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] italic">
                  &ldquo;He consistently delivered intuitive, user-friendly designs that enhanced our product experience. He&apos;s a communicative team player, open to feedback, and dedicated to his craft&mdash;a strong asset to any UX team.&rdquo;
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex">
              <Link href="/2-years-at-synclo" className="brutal-btn">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Work Section: Entytle ─── */}
        <section className="page-container py-12 lg:py-20 animate-enter delay-400">
          <div className="brutal-card max-w-5xl mx-auto flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Image src="/portfolio/entytle-logo.png" alt="Entytle logo" width={48} height={48} className="shrink-0" />
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                  Previously simplified Installed Base Management at US Based
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  UX Design Role | 2.4 Years | 3 End to End Products | 7% Increase in retention | Web2
                </p>
              </div>
            </div>

            {/* Work Image */}
            <div className="project-image-wrapper relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src="/portfolio/entytle-work.png"
                alt="Entytle project work"
                fill
                className="project-image object-cover"
              />
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Sushana Taunk */}
              <div className="flex items-center gap-3 border-l-4 border-[var(--text-primary)] pl-4">
                <Image
                  src="/portfolio/sushana.png"
                  alt="Sushana Taunk avatar"
                  width={40}
                  height={40}
                  className="rounded-full shrink-0"
                />
                <div>
                  <p className="font-semibold text-sm">Sushana Taunk</p>
                  <p className="text-xs text-[var(--text-secondary)]">Sr. PM @ Entytle</p>
                </div>
              </div>

              {/* Pooja Dalvi */}
              <div className="flex items-center gap-3 border-l-4 border-[var(--text-primary)] pl-4">
                <Image
                  src="/portfolio/pooja.png"
                  alt="Pooja Dalvi avatar"
                  width={40}
                  height={40}
                  className="rounded-full shrink-0"
                />
                <div>
                  <p className="font-semibold text-sm">Pooja Dalvi</p>
                  <p className="text-xs text-[var(--text-secondary)]">Sr. PM @ Entytle</p>
                </div>
              </div>

              {/* Riyona Mukherjee */}
              <div className="flex items-center gap-3 border-l-4 border-[var(--text-primary)] pl-4">
                <Image
                  src="/portfolio/riyona.png"
                  alt="Riyona Mukherjee avatar"
                  width={40}
                  height={40}
                  className="rounded-full shrink-0"
                />
                <div>
                  <p className="font-semibold text-sm">Riyona Mukherjee</p>
                  <p className="text-xs text-[var(--text-secondary)]">Product Analyst @ Entytle</p>
                </div>
              </div>
            </div>

            {/* Red Notice */}
            <div className="bg-red-100 border border-red-400 text-red-800 text-sm px-4 py-3">
              Sadly Due to NDA, Can&apos;t share anything till request is approved.
            </div>
          </div>
        </section>

        {/* ─── Footer ─── */}
        <Footer />
      </main>
    </>
  );
}
