import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackLink from "@/components/BackLink";
import { getAllAppSlugs, getAppBySlug, type App } from "@/lib/apps";

export function generateStaticParams() {
  return getAllAppSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return {};
  return {
    title: `${app.name} — Apps`,
    description: app.tagline,
  };
}

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

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default async function AppDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) notFound();

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <BackLink href="/apps" label="Apps" className="animate-enter" />

        <header className="flex items-start gap-4 animate-enter delay-100">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[22px] ring-1 ring-black/5 bg-[var(--surface-color)]">
            <Image
              src={app.icon}
              alt=""
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1 flex flex-col gap-2">
            <div className="flex flex-col gap-0.5">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-[-0.022em] leading-tight">
                {app.name}
              </h1>
              <p className="text-[15px] text-[var(--text-secondary)] text-balance">
                {app.tagline}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 text-[12px] font-medium text-[var(--text-secondary)]">
              <span>{app.category}</span>
              <span aria-hidden>·</span>
              <span className="inline-flex items-center gap-1">
                <StatusDot status={app.status} />
                {app.status}
              </span>
              <span aria-hidden>·</span>
              <span>Released {formatDate(app.releasedAt)}</span>
            </div>
            {app.url && (
              <div className="mt-1">
                <Link
                  href={app.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 items-center justify-center rounded-full bg-[#0066CC]/10 px-5 text-xs font-semibold uppercase tracking-wider text-[#0066CC] hover:bg-[#0066CC]/15 active:scale-[0.97] transition"
                >
                  Open ↗
                </Link>
              </div>
            )}
          </div>
        </header>

        {app.screenshots.length > 0 && (
          <section className="flex flex-col gap-3 animate-enter delay-200">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Screenshots
            </h2>
            <div className="-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div className="flex gap-3 pb-1">
                {app.screenshots.map((src, i) => (
                  <div
                    key={`${src}-${i}`}
                    className="relative aspect-[9/19.5] w-[60vw] sm:w-[260px] shrink-0 overflow-hidden rounded-[18px] ring-1 ring-black/5 bg-[var(--surface-color)] snap-start"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 60vw, 260px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="flex flex-col gap-3 animate-enter delay-300">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            About
          </h2>
          <div className="flex flex-col gap-3 text-[15px] leading-7 text-[var(--text-secondary)]">
            {app.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        {app.whatsNew && (
          <section className="flex flex-col gap-3 animate-enter delay-400">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              What&rsquo;s New
            </h2>
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-color)] p-4">
              <p className="text-[12px] font-medium text-[var(--text-secondary)]">
                {app.whatsNew.version} · {formatDate(app.whatsNew.date)}
              </p>
              <ul className="mt-2 list-disc pl-5 text-[15px] leading-7 text-[var(--text-secondary)] space-y-1">
                {app.whatsNew.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="flex flex-col gap-3 animate-enter delay-400">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Information
          </h2>
          <dl className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-color)] divide-y divide-[var(--border-color)]">
            <div className="flex items-center justify-between gap-4 px-4 py-3 text-[14px]">
              <dt className="text-[var(--text-secondary)]">Built with</dt>
              <dd className="text-right font-medium text-[var(--text-primary)]">
                {app.builtWith.join(", ")}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4 px-4 py-3 text-[14px]">
              <dt className="text-[var(--text-secondary)]">Released</dt>
              <dd className="text-right font-medium text-[var(--text-primary)]">
                {formatDate(app.releasedAt)}
              </dd>
            </div>
            {app.url && (
              <div className="flex items-center justify-between gap-4 px-4 py-3 text-[14px]">
                <dt className="text-[var(--text-secondary)]">Live URL</dt>
                <dd className="text-right font-medium">
                  <Link
                    href={app.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0066CC] hover:underline break-all"
                  >
                    {app.url.replace(/^https?:\/\//, "")}
                  </Link>
                </dd>
              </div>
            )}
            {app.sourceUrl && (
              <div className="flex items-center justify-between gap-4 px-4 py-3 text-[14px]">
                <dt className="text-[var(--text-secondary)]">Source</dt>
                <dd className="text-right font-medium">
                  <Link
                    href={app.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0066CC] hover:underline break-all"
                  >
                    {app.sourceUrl.replace(/^https?:\/\//, "")}
                  </Link>
                </dd>
              </div>
            )}
          </dl>
        </section>
      </div>
    </main>
  );
}
