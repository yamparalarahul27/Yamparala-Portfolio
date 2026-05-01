import type { Metadata } from "next";
import VideosLibrary from "../../components/VideosLibrary";
import LandingFooter from "../../components/LandingFooter";
import { indexVideos, rahulProfile } from "../../lib/rahul-index";

export const metadata: Metadata = {
  title: `Videos — ${rahulProfile.name}`,
  description:
    "Builds, product analyses, and lessons — recorded as videos by Yamparala Rahul.",
};

export default function VideosPage() {
  return (
    <>
      <main className="max-w-2xl mx-auto !px-4 !py-12 sm:!py-16 text-[var(--text-primary)] [&_section]:!p-0 [&_section>div]:!p-0 [&_footer]:!p-0">
        <header className="flex flex-col gap-2 mb-8">
          <p className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
            {indexVideos.length} videos
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Videos</h1>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            Things I&apos;ve built, products I&apos;ve studied, and lessons from along the way.
          </p>
        </header>

        <VideosLibrary videos={indexVideos} />
      </main>
      <LandingFooter />
    </>
  );
}
