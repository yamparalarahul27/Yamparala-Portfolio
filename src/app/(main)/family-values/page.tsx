import type { Metadata } from "next";
import Link from "next/link";
import { FormattingFeatureCard, MotionFeatureCard } from "./MotionFeatureCard";
import styles from "./family-values.module.css";

export const metadata: Metadata = {
  title: "Family Values Style Page",
  description:
    "An editorial article page inspired by Benji's Family Values structure, with interactive speed and formatting demos.",
};

const sections = [
  { id: "principles", label: "What Makes This Family-Style Page" },
  { id: "simplicity", label: "Simplicity" },
  { id: "fluidity", label: "Fluidity" },
  { id: "delight", label: "Delight" },
  { id: "building", label: "Building The Experience" },
  { id: "notes", label: "Notes" },
];

function HeadingBreak({ title, id }: { title: string; id: string }) {
  return (
    <div id={id} className={styles.headingBreak}>
      <div className={styles.hr}>
        <hr />
      </div>
      <div className={styles.headingTitle}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default function FamilyValuesPage() {
  return (
    <div className={styles.page}>
      <aside className={styles.aside}>
        <Link className={styles.backButton} href="/">
          ← Index
        </Link>
        <nav aria-label="Table of contents">
          <h2>On this page</h2>
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className={styles.main}>
        <article className={styles.article}>
          <header>
            <h1>Family Values (Structure Demo)</h1>
            <time dateTime="2026-04-04">4 April, 2026</time>
          </header>

          <p>
            This page mirrors the reference structure and interaction style so
            you can drop in your own final copy later.
          </p>
          <p>
            Content is intentionally lightweight, but the same core features are
            included: article hierarchy, speed controls, transition demos, and
            text formatting behavior.
          </p>
          <p>
            The goal is to preserve a calm, long-form reading flow while still
            letting users feel motion and polish.
          </p>

          <HeadingBreak
            id="principles"
            title="What Makes This Family-Style Page"
          />

          <p>
            We keep three clear principles in this build: <strong>simplicity</strong>,{" "}
            <strong>fluidity</strong>, and <strong>delight</strong>.
          </p>
          <p>
            Simplicity keeps interfaces understandable. Fluidity helps users
            keep context between actions. Delight adds memorable moments without
            slowing down core tasks.
          </p>

          <h2 id="simplicity">Simplicity</h2>
          <p>
            Complex interfaces can overwhelm people when everything appears at
            once. This version uses compact blocks that reveal behavior
            progressively.
          </p>
          <MotionFeatureCard
            kind="simplicity"
            caption="Feature demo: speed toggle controls the motion timing (1x and 0.5x)."
          />

          <h2 id="fluidity">Fluidity</h2>
          <p>
            Motion should explain transitions, not distract from them. This
            section preserves continuity between states so users feel where they
            came from and where they are going.
          </p>
          <MotionFeatureCard
            kind="fluidity"
            caption="Feature demo: directional flow suggests movement through connected screens."
          />

          <FormattingFeatureCard />

          <h2 id="delight">Delight</h2>
          <p>
            Delight works best when selective. Instead of over-animating every
            interaction, this layout adds subtle visual highlights around key
            moments.
          </p>
          <MotionFeatureCard
            kind="delight"
            caption="Feature demo: small visual pulses provide personality while keeping the interface fast."
          />

          <HeadingBreak id="building" title="Building The Experience" />

          <p>
            This implementation is built with a server-rendered route and
            lightweight client-side feature cards. That keeps initial rendering
            quick and interactive controls simple.
          </p>
          <p>
            The formatting area includes emphasis, marks, blockquotes, and
            inline code to model the rich reading texture from the reference.
          </p>
          <p>
            You can now replace placeholders with your real story or visual
            media in the same structure.
          </p>

          <HeadingBreak id="notes" title="Notes" />
          <p>
            This is an original implementation inspired by structure and
            interaction style, not a direct copy of assets or text.
          </p>
          <p>
            If you want, I can next wire in your actual content sections and
            convert the demo blocks to real MP4/WebM media.
          </p>
        </article>
      </main>
    </div>
  );
}
