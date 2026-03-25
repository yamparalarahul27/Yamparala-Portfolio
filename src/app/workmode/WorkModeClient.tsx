"use client";

import BGMPlayer from "@/components/BGMPlayer";

export default function WorkModeClient() {
  return (
    <main className="page-container mt-20 sm:mt-24 lg:mt-[132px] text-[var(--text-primary)]">
      <div className="flex-1 flex flex-col gap-8 sm:gap-12 lg:gap-[56px] pt-8">
        {/* Header */}
        <section className="flex flex-col gap-4 animate-enter">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter">
            Work Mode
          </h1>
          <p className="text-sm font-mono text-[var(--text-secondary)]">
            Focus space. Play some music and get to work.
          </p>
        </section>

        {/* Widgets Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-enter delay-100">
          <BGMPlayer
            src="/audio/workmode-bgm.mp3"
            title="Lofi Work Mode"
          />
        </section>
      </div>
    </main>
  );
}
