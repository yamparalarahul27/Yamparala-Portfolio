"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement,
        options: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onStateChange?: (event: { data: number }) => void;
            onReady?: (event: { target: YTPlayerInstance }) => void;
          };
        }
      ) => YTPlayerInstance;
      PlayerState: { ENDED: number; PLAYING: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YTPlayerInstance {
  destroy: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  playVideo: () => void;
  loadVideoById: (videoId: string) => void;
}

let apiReadyPromise: Promise<void> | null = null;

function loadYouTubeAPI(): Promise<void> {
  if (apiReadyPromise) return apiReadyPromise;
  apiReadyPromise = new Promise((resolve) => {
    if (typeof window === "undefined") return;
    if (window.YT?.Player) {
      resolve();
      return;
    }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;
    document.head.appendChild(tag);
  });
  return apiReadyPromise;
}

export default function YouTubePlayer({
  youtubeId,
  title,
}: {
  youtubeId: string;
  title: string;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayerInstance | null>(null);
  const idRef = useRef(youtubeId);

  const [started, setStarted] = useState(false);
  const [endedAtId, setEndedAtId] = useState<string | null>(null);
  const ended = endedAtId === youtubeId;

  useEffect(() => {
    idRef.current = youtubeId;
    if (playerRef.current?.loadVideoById) {
      playerRef.current.loadVideoById(youtubeId);
    }
  }, [youtubeId]);

  useEffect(() => {
    if (!started) return;
    let cancelled = false;

    loadYouTubeAPI().then(() => {
      if (cancelled || !mountRef.current || playerRef.current || !window.YT) return;
      playerRef.current = new window.YT.Player(mountRef.current, {
        videoId: idRef.current,
        playerVars: {
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          autoplay: 1,
        },
        events: {
          onStateChange: (event) => {
            if (!window.YT) return;
            if (event.data === window.YT.PlayerState.ENDED) {
              setEndedAtId(idRef.current);
            } else if (event.data === window.YT.PlayerState.PLAYING) {
              setEndedAtId(null);
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [started]);

  const handleReplay = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0, true);
      playerRef.current.playVideo();
      setEndedAtId(null);
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black border border-[var(--border-color)]">
      {!started ? (
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="absolute inset-0 w-full h-full flex items-center justify-center group"
          aria-label={`Play ${title}`}
        >
          <span
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg)`,
            }}
          />
          <span className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
          <span className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white/95 text-black shadow-lg group-hover:scale-110 transition-transform">
            <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor" aria-hidden="true">
              <path d="M2 1.732v18.536a1 1 0 0 0 1.5.866l16.062-9.268a1 1 0 0 0 0-1.732L3.5.866A1 1 0 0 0 2 1.732Z" />
            </svg>
          </span>
        </button>
      ) : (
        <>
          <div className="absolute inset-0 w-full h-full">
            <div ref={mountRef} className="w-full h-full" />
          </div>
          {ended && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-black/85 backdrop-blur-sm text-white">
              <p className="text-sm text-white/60">Video ended</p>
              <button
                type="button"
                onClick={handleReplay}
                className="px-5 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                ↻ Replay
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
