import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BackLink from "@/components/BackLink";
import { apps, featuredApps, getAppsByCategory, type App } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Apps — Yamparala Rahul",
  description:
    "Web apps I am building and have built. A curated, App Store-style index.",
};

function StatusDot({ status }: { status: App["status"] }) {
  const color =
    status === "Live"
      ? "bg-emerald-500"
      : status === "WIP"
        ? "bg-amber-500"
        : status === "Experiment"
          ? "bg-sky-500"
          : "bg-zinc-400";
  return <span className={`inline-block h-1.5 w-1.5 rounded-full ${color}`} />;
}

function OpenPill({ url, small = false }: { url?: string; small?: boolean }) {
  const sizing = small ? "h-7 px-3 text-[11px]" : "h-8 px-4 text-xs";
  if (!url) {
    return (
      <span
        className={`${sizing} inline-flex items-center justify-center rounded-full bg-zinc-200/70 text-zinc-500 font-semibold uppercase tracking-wider`}
      >
        N/A
      </span>
    );
  }
  return (
    <Link
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`${sizing} relative z-10 inline-flex items-center justify-center rounded-full bg-[#0066CC]/10 text-[#0066CC] font-semibold uppercase tracking-wider hover:bg-[#0066CC]/15 active:scale-[0.97] transition`}
    >
      Open
    </Link>
  );
}

function AppRowCard({ app }: { app: App }) {
  return (
    <div className="relative flex items-center gap-3 py-3 transition hover:opacity-95">
      <Link
        href={`/apps/${app.slug}`}
        aria-label={`${app.name} details`}
        className="absolute inset-0 z-0 rounded-2xl"
      />
      <div className="pointer-events-none relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-[14px] ring-1 ring-black/5 bg-[var(--surface-color)]">
        <Image
          src={app.icon}
          alt=""
          fill
          sizes="60px"
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none relative min-w-0 flex-1">
        <p className="truncate text-[15px] font-semibold tracking-[-0.022em] text-[var(--text-primary)]">
          {app.name}
        </p>
        <p className="truncate text-[13px] text-[var(--text-secondary)]">
          {app.tagline}
        </p>
        <div className="mt-0.5 flex items-center gap-1.5 text-[11px] font-medium text-[var(--text-secondary)]">
          <span>{app.category}</span>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1">
            <StatusDot status={app.status} />
            {app.status}
          </span>
        </div>
      </div>
      <OpenPill url={app.url} small />
    </div>
  );
}

function FeaturedCard({ app }: { app: App }) {
  return (
    <div className="group relative aspect-[4/3] sm:aspect-[16/9] w-[88vw] sm:w-[480px] shrink-0 overflow-hidden rounded-[20px] ring-1 ring-black/5 snap-start transition active:scale-[0.99]">
      <Link
        href={`/apps/${app.slug}`}
        aria-label={`${app.name} details`}
        className="absolute inset-0 z-0"
      />
      <Image
        src={app.icon}
        alt=""
        fill
        sizes="(max-width: 640px) 88vw, 480px"
        className="pointer-events-none object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black/65" />
      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
        {app.category}
      </span>
      <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-[22px] font-bold tracking-[-0.022em] text-white">
            {app.name}
          </p>
          <p className="truncate text-[14px] text-white/80">{app.tagline}</p>
        </div>
        <div className="pointer-events-auto">
          <OpenPill url={app.url} />
        </div>
      </div>
    </div>
  );
}

export default function AppsPage() {
  const groups = getAppsByCategory();

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <BackLink href="/" label="Back" className="animate-enter" />

        <header className="flex flex-col gap-2 animate-enter delay-100">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.022em] leading-tight">
            Apps
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl text-balance">
            Web apps I am building and have built. {apps.length} in total.
          </p>
        </header>

        {featuredApps.length > 0 && (
          <section className="flex flex-col gap-3 animate-enter delay-200">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Featured
            </h2>
            <div className="-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div className="flex gap-3 pb-1">
                {featuredApps.map((app) => (
                  <FeaturedCard key={app.slug} app={app} />
                ))}
              </div>
            </div>
          </section>
        )}

        {groups.map((group, index) => (
          <section
            key={group.category}
            className={`flex flex-col gap-1 animate-enter delay-${Math.min((index + 3) * 100, 400)}`}
          >
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] mb-1">
              {group.category}
            </h2>
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-color)] px-4 divide-y divide-[var(--border-color)]">
              {group.items.map((app) => (
                <AppRowCard key={app.slug} app={app} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
