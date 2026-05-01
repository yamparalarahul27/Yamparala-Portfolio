"use client";

import { useState } from "react";
import type { IndexVideo, VideoCategory } from "../lib/rahul-index";
import { videoCategoryOrder } from "../lib/rahul-index";
import YouTubePlayer from "./YouTubePlayer";

type Tab = "All" | VideoCategory;

const TABS: Tab[] = ["All", ...videoCategoryOrder];

function getYoutubeId(video: IndexVideo, episodeIndex: number): string {
  if (video.episodes && video.episodes.length > 0) {
    return video.episodes[episodeIndex].youtubeId;
  }
  return video.youtubeId!;
}

export default function VideosLibrary({ videos }: { videos: IndexVideo[] }) {
  const [activeVideo, setActiveVideo] = useState<IndexVideo>(videos[0]);
  const [activeEpisodeIndex, setActiveEpisodeIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [started, setStarted] = useState(false);

  const filtered = activeTab === "All" ? videos : videos.filter((v) => v.category === activeTab);
  const isSeries = !!activeVideo.episodes && activeVideo.episodes.length > 0;
  const activeId = getYoutubeId(activeVideo, activeEpisodeIndex);

  const handleSelectVideo = (video: IndexVideo) => {
    if (video !== activeVideo) {
      setActiveVideo(video);
      setActiveEpisodeIndex(0);
    }
    if (!started) setStarted(true);
  };

  const handleSelectEpisode = (index: number) => {
    setActiveEpisodeIndex(index);
    if (!started) setStarted(true);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Sticky player + now playing */}
      <div className="sticky top-0 z-20 -mx-4 px-4 pt-4 pb-4 bg-[var(--bg-color)]/95 backdrop-blur-sm">
        <YouTubePlayer
          youtubeId={activeId}
          title={activeVideo.title}
          started={started}
          onStart={() => setStarted(true)}
        />

        <div className="mt-4 flex flex-col gap-2">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="text-base font-semibold leading-snug">{activeVideo.title}</h2>
            <span className="text-xs font-mono text-[var(--text-secondary)] shrink-0">
              {activeVideo.year}
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {activeVideo.description}
          </p>
          {activeVideo.accent && (
            <span className="text-xs font-mono text-[var(--text-secondary)]">
              {activeVideo.accent}
            </span>
          )}

          {isSeries && (
            <div
              role="tablist"
              aria-label={`${activeVideo.title} episodes`}
              className="mt-1 flex flex-wrap gap-1 p-1 rounded-lg bg-[var(--surface-color)] border border-[var(--border-color)] w-fit"
            >
              {activeVideo.episodes!.map((ep, i) => (
                <button
                  key={ep.youtubeId}
                  type="button"
                  role="tab"
                  aria-selected={i === activeEpisodeIndex}
                  onClick={() => handleSelectEpisode(i)}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
                    i === activeEpisodeIndex
                      ? "bg-[var(--text-primary)] text-[var(--bg-color)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {ep.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Category tabs */}
      <div
        role="tablist"
        aria-label="Filter videos by category"
        className="flex gap-1 p-1 rounded-lg bg-[var(--surface-color)] border border-[var(--border-color)] overflow-x-auto"
      >
        {TABS.map((tab) => {
          const count = tab === "All" ? videos.length : videos.filter((v) => v.category === tab).length;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={tab === activeTab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                tab === activeTab
                  ? "bg-[var(--text-primary)] text-[var(--bg-color)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {tab}
              <span className="ml-1.5 font-mono opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Video list */}
      <ul className="flex flex-col">
        {filtered.map((video) => {
          const isActive = video === activeVideo;
          const previewId = video.episodes ? video.episodes[0].youtubeId : video.youtubeId!;
          return (
            <li key={video.title}>
              <button
                type="button"
                onClick={() => handleSelectVideo(video)}
                className={`w-full text-left flex gap-3 py-3 border-t border-[var(--border-color)] transition-colors group ${
                  isActive ? "" : "hover:bg-[var(--surface-color)]"
                }`}
              >
                <div className="relative w-28 sm:w-32 aspect-video rounded-md overflow-hidden bg-black shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${previewId}/mqdefault.jpg`}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/55">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white px-2 py-0.5 rounded bg-[var(--accent)]">
                        Now playing
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3
                      className={`text-sm font-medium leading-snug truncate ${
                        isActive ? "text-[var(--text-primary)]" : ""
                      }`}
                    >
                      {video.title}
                    </h3>
                    <span className="text-[10px] font-mono text-[var(--text-secondary)] shrink-0">
                      {video.year}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[var(--text-secondary)]">
                    <span>{video.category}</span>
                    {video.accent && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{video.accent}</span>
                      </>
                    )}
                  </div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
