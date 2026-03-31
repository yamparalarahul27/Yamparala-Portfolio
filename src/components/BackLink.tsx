"use client";

import Link from "next/link";
import { Undo2 } from "lucide-react";

export default function BackLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors ${className ?? ""}`}
    >
      <Undo2 className="h-4 w-4" />
      {label}
    </Link>
  );
}
