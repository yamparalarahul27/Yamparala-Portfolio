import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] mt-24">
      {/* CTA Section */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3">
          Still unclear? Let&apos;s know each other!
        </h2>
        <p className="text-[var(--text-secondary)] mb-6 max-w-lg mx-auto">
          Let&apos;s discuss how I can be a good fit with the team and drive growth.
        </p>
        <a
          href="https://wa.me/918897132717"
          target="_blank"
          rel="noreferrer"
          className="brutal-btn"
        >
          Book a Intro call &darr;
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--border-color)]">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-secondary)]">
            &ldquo;Quality means doing it right when no one is looking&rdquo;
          </p>

          <p className="text-xs text-[var(--text-secondary)]">
            Designed by Yamparala Rahul @ India
          </p>

          <div className="flex items-center gap-4">
            {/* Social Links */}
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
      </div>
    </footer>
  );
}
