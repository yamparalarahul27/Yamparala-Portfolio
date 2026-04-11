"use client";

import { useState, useEffect, useRef } from "react";

function GearIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export default function Settings() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [dotsEnabled, setDotsEnabled] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = document.documentElement.getAttribute("data-theme") as "light" | "dark" | null;
    setTheme(saved || "light");

    const savedDots = localStorage.getItem("dots-enabled");
    if (savedDots === "false") {
      setDotsEnabled(false);
      window.dispatchEvent(new CustomEvent("dots-toggle", { detail: false }));
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  function toggleDots() {
    const next = !dotsEnabled;
    setDotsEnabled(next);
    localStorage.setItem("dots-enabled", String(next));
    window.dispatchEvent(new CustomEvent("dots-toggle", { detail: next }));
  }

  return (
    <div ref={dropdownRef} className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--surface-color)] text-[var(--text-primary)] hover:border-[var(--text-secondary)] transition-colors"
        aria-label="Settings"
      >
        <GearIcon className={`transition-transform duration-300 ${open ? "rotate-90" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 w-56 rounded-lg border border-[var(--border-color)] bg-[var(--surface-color)] shadow-lg overflow-hidden">
          <div className="px-3 py-2 border-b border-[var(--border-color)]">
            <span className="text-xs font-semibold tracking-wide uppercase text-[var(--text-secondary)]">Settings</span>
          </div>

          <div className="p-2 space-y-1">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-[var(--border-color)] transition-colors text-sm text-[var(--text-primary)]"
            >
              <span className="flex items-center gap-2">
                {theme === "light" ? <SunIcon /> : <MoonIcon />}
                Theme
              </span>
              <span className="text-xs text-[var(--text-secondary)]">
                {theme === "light" ? "Light" : "Dark"}
              </span>
            </button>

            {/* Dot animation toggle */}
            <button
              onClick={toggleDots}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-[var(--border-color)] transition-colors text-sm text-[var(--text-primary)]"
            >
              <span>Dot Animation</span>
              <div className={`w-8 h-[18px] rounded-full relative transition-colors ${dotsEnabled ? "bg-[var(--accent)]" : "bg-[var(--border-color)]"}`}>
                <div className={`absolute top-[2px] w-[14px] h-[14px] rounded-full bg-white shadow-sm transition-transform ${dotsEnabled ? "left-[16px]" : "left-[2px]"}`} />
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
