"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/my-story", label: "About Me" },
  { href: "/notes", label: "Notes" },
  { href: "/resume", label: "Resume" },
];

const workLinks = [
  { href: "/2-years-at-synclo", label: "2 Years at Synclo" },
  { href: "/password-ux", label: "UX of Password Creation" },
  { href: "/customer-journey-mapping", label: "Customer Journey Mapping" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-color)]/95 backdrop-blur-sm border-b border-[var(--border-color)]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-sm lg:text-base font-bold tracking-tight">Yamparala</span>
          <span className="text-sm lg:text-base font-bold tracking-tight text-[var(--text-primary)]">Rahul</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[var(--text-primary)] ${
                pathname === link.href ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Work Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setWorkOpen(!workOpen)}
              onBlur={() => setTimeout(() => setWorkOpen(false), 150)}
              className={`text-sm font-medium transition-colors hover:text-[var(--text-primary)] ${
                workLinks.some((l) => pathname === l.href) ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
              }`}
            >
              Work
            </button>
            {workOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 max-w-[calc(100vw-2rem)] bg-white border border-[var(--border-color)] shadow-sm">
                {workLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 text-sm transition-colors hover:bg-[var(--bg-color)] ${
                      pathname === link.href ? "font-semibold text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                    }`}
                    onClick={() => setWorkOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://wa.me/918897132717"
            target="_blank"
            rel="noreferrer"
            className="brutal-btn text-sm !py-2 !px-4"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--border-color)] bg-white">
          <div className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-4 text-sm font-medium transition-colors ${
                  pathname === link.href ? "text-[var(--text-primary)] bg-[var(--bg-color)]" : "text-[var(--text-secondary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="py-2 px-4 text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Work
            </div>
            {workLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-4 pl-8 text-sm font-medium transition-colors ${
                  pathname === link.href ? "text-[var(--text-primary)] bg-[var(--bg-color)]" : "text-[var(--text-secondary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/918897132717"
              target="_blank"
              rel="noreferrer"
              className="brutal-btn text-sm mt-2 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
