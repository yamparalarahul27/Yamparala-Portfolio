import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-[var(--border-color)] mt-24 bg-[var(--surface-color)]">
      {/* CTA Section */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16 text-center flex flex-col items-center gap-3">
        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
          {t("heading")}
        </h2>
        <p className="text-[var(--text-secondary)] max-w-lg">
          {t("description")}
        </p>
        <a
          href="https://wa.me/918897132717"
          target="_blank"
          rel="noreferrer"
          className="brutal-btn"
        >
          {t("cta")}
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--border-color)]">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8 flex flex-col gap-6 lg:gap-6">
          {/* Top row: links */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-[var(--text-secondary)]">
              {t("designedBy")}
            </p>

            <div className="flex items-center gap-4">
              <a href="https://t.me/yamparalarahul1" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-xs font-medium">
                Telegram
              </a>
              <a href="https://x.com/yamparalarahul" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-xs font-medium">
                X
              </a>
              <a href="https://www.linkedin.com/in/yamparalarahul/" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-xs font-medium">
                LinkedIn
              </a>
            </div>

            <a
              href="mailto:rahulvignanwork@gmail.com"
              className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              rahulvignanwork@gmail.com
            </a>
          </div>

          {/* Bottom row: quote left, badges right */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--text-secondary)]">
              {t("quote")}
            </p>
            <div className="flex items-center gap-3">
              <Image src="/portfolio/badge-gcc.png" alt="Google UX Design Certificate" width={64} height={64} className="w-16 h-16" />
              <Image src="/portfolio/badge-ibm.png" alt="IBM Enterprise Design Thinking" width={64} height={64} className="w-16 h-16" />
              <Image src="/portfolio/badge-greed.png" alt="Greed badge" width={64} height={64} className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
