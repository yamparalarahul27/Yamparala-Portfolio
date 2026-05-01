"use client";

import { useState } from "react";
import type { IndexVideo } from "../lib/rahul-index";
import YouTubePlayer from "./YouTubePlayer";

export default function VideoCard({ video }: { video: IndexVideo }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const isSeries = !!video.episodes && video.episodes.length > 0;
  const activeId = isSeries
    ? video.episodes![activeIndex].youtubeId
    : video.youtubeId!;

  return (
    <article className="flex flex-col gap-3">
      <YouTubePlayer youtubeId={activeId} title={video.title} />

      {isSeries && (
        <div
          role="tablist"
          aria-label={`${video.title} parts`}
          className="flex gap-1 p-1 rounded-lg bg-[var(--surface-color)] border border-[var(--border-color)] w-fit"
        >
          {video.episodes!.map((ep, i) => (
            <button
              key={ep.youtubeId}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              onClick={() => setActiveIndex(i)}
              className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
                i === activeIndex
                  ? "bg-[var(--text-primary)] text-[var(--bg-color)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {ep.label}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-sm font-semibold leading-snug">{video.title}</h3>
          <span className="text-xs font-mono text-[var(--text-secondary)] shrink-0">
            {video.year}
          </span>
        </div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          {video.description}
        </p>
        {video.accent && (
          <span className="text-xs font-mono text-[var(--text-secondary)]">
            {video.accent}
          </span>
        )}
      </div>
    </article>
  );
}
