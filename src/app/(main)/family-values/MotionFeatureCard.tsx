"use client";

import { useState } from "react";
import styles from "./family-values.module.css";

type MotionFeatureCardProps = {
  caption: string;
  kind: "simplicity" | "fluidity" | "delight";
};

const speedOptions = [
  { label: "1x", value: 1 },
  { label: "0.5x", value: 0.5 },
];

export function MotionFeatureCard({ caption, kind }: MotionFeatureCardProps) {
  const [speed, setSpeed] = useState(1);
  const duration = `${Math.round(3200 / speed)}ms`;

  return (
    <figure className={styles.mediaBlock}>
      <div className={styles.mediaControls}>
        <button
          type="button"
          aria-label="Toggle animation speed"
          className={styles.speedToggle}
          onClick={() => setSpeed((current) => (current === 1 ? 0.5 : 1))}
        >
          {speedOptions.map((option) => (
            <span key={option.label} data-active={speed === option.value}>
              {option.label}
            </span>
          ))}
        </button>
      </div>

      <div className={styles.phoneShell} data-kind={kind}>
        <div className={styles.phoneFrame}>
          <div
            className={styles.phoneScreen}
            style={{ "--demo-duration": duration } as React.CSSProperties}
          >
            <div className={styles.demoGlow} />
            <div className={styles.demoStack}>
              <div className={`${styles.demoTray} ${styles.trayA}`} />
              <div className={`${styles.demoTray} ${styles.trayB}`} />
              <div className={`${styles.demoTray} ${styles.trayC}`} />
            </div>
            <div className={styles.demoFooter}>
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function FormattingFeatureCard() {
  const [mode, setMode] = useState<"editorial" | "concise" | "annotated">(
    "editorial",
  );

  return (
    <figure className={styles.formatBlock}>
      <div className={styles.formatControls}>
        {[
          { id: "editorial", label: "Editorial" },
          { id: "concise", label: "Concise" },
          { id: "annotated", label: "Annotated" },
        ].map((item) => (
          <button
            key={item.id}
            type="button"
            data-active={mode === item.id}
            onClick={() => setMode(item.id as typeof mode)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className={styles.formatCanvas} data-mode={mode}>
        <p>
          <strong>Formatted Text Demo:</strong> this block keeps hierarchy clear
          with <em>emphasis</em>, <mark>highlighted labels</mark>, and inline{" "}
          <code>monospace tokens</code>.
        </p>
        <blockquote>
          Great formatting should improve scanning speed and reduce cognitive
          load.
        </blockquote>
        <p>
          Every mode keeps the same content but changes weight, spacing, and
          annotation density.
        </p>
      </div>

      <figcaption>
        Text formatting modes mimic the article-style readability system from
        the reference.
      </figcaption>
    </figure>
  );
}
