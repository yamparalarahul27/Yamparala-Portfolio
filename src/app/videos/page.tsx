import type { Metadata } from "next";
import VideoCard from "../../components/VideoCard";
import LandingFooter from "../../components/LandingFooter";
import {
  indexVideos,
  rahulProfile,
  videoCategoryOrder,
  type VideoCategory,
} from "../../lib/rahul-index";

export const metadata: Metadata = {
  title: `Videos — ${rahulProfile.name}`,
  description:
    "Builds, product analyses, and lessons — recorded as videos by Yamparala Rahul.",
};

export default function VideosPage() {
  const grouped = videoCategoryOrder
    .map((category) => ({
      category,
      videos: indexVideos.filter((v) => v.category === category),
    }))
    .filter((g) => g.videos.length > 0);

  const total = indexVideos.length;

  return (
    <>
      <main className="max-w-2xl mx-auto !px-4 !py-16 sm:!py-24 text-[var(--text-primary)] [&_section]:!p-0 [&_section>div]:!p-0 [&_footer]:!p-0">
        <header className="flex flex-col gap-3 mb-12">
          <p className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
            {total} videos
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Videos</h1>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Things I&apos;ve built, products I&apos;ve studied, and lessons from along the way.
          </p>
        </header>

        {grouped.map(({ category, videos }) => (
          <CategorySection key={category} category={category} videos={videos} />
        ))}
      </main>
      <LandingFooter />
    </>
  );
}

function CategorySection({
  category,
  videos,
}: {
  category: VideoCategory;
  videos: typeof indexVideos;
}) {
  return (
    <section className="flex flex-col gap-8 mb-16">
      <div className="flex items-baseline justify-between gap-3 pb-3 border-b border-[var(--border-color)]">
        <h2 className="text-lg font-semibold">{category}</h2>
        <span className="text-xs font-mono text-[var(--text-secondary)]">
          {videos.length} {videos.length === 1 ? "video" : "videos"}
        </span>
      </div>
      <div className="flex flex-col gap-12">
        {videos.map((video) => (
          <VideoCard key={video.title} video={video} />
        ))}
      </div>
    </section>
  );
}
