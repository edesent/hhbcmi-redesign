"use client";

import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import type { YouTubeVideo } from "@/lib/youtube";

function formatDate(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function VideoGrid({ videos }: { videos: YouTubeVideo[] }) {
  const [active, setActive] = useState<YouTubeVideo | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setActive(video)}
            className="lift-link group cursor-pointer overflow-hidden rounded-lg border border-sky-100 bg-white text-left soft-shadow"
          >
            <div className="relative aspect-video overflow-hidden bg-navy-900">
              {video.thumbnail && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-navy-950/20 transition-colors group-hover:bg-navy-950/40">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-110">
                  <Play className="ml-0.5 h-6 w-6 fill-navy-950 text-navy-950" />
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="line-clamp-2 font-serif text-lg font-semibold text-navy-950 transition-colors group-hover:text-blue-700">
                {video.title}
              </h3>
              <p className="mt-1 text-xs font-semibold text-muted">
                {formatDate(video.published)}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm md:p-10"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video overflow-hidden rounded-lg bg-black shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${active.id}?autoplay=1`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="mt-4 text-white">
              <h3 className="font-serif text-2xl font-semibold">
                {active.title}
              </h3>
              <p className="mt-1 text-sm text-white/60">
                {formatDate(active.published)}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
