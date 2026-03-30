"use client";

import BGMPlayer from "../BGMPlayer";

export default function WorkModeSection() {
  return (
    <div id="work-mode" className="flex flex-col gap-8 sm:gap-12 lg:gap-[56px]">
      {/* Header */}
      <section className="flex flex-col gap-4 animate-enter">
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter">Work Mode</h2>
        <p className="text-sm font-mono text-[var(--text-secondary)]">Focus space. Play some music and get to work.</p>
      </section>

      {/* Widgets Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-enter">
        <BGMPlayer src="/audio/workmode-bgm.mp3" title="Lofi Work Mode" />
      </section>
    </div>
  );
}
