"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MaasHackNavigationProps {
  previousHack?: string;
  nextHack?: string;
}

export default function MaasHackNavigation({
  previousHack,
  nextHack,
}: MaasHackNavigationProps) {
  return (
    <div className="flex items-center justify-between gap-4 w-full max-w-4xl mx-auto px-1">
      {previousHack ? (
        <Link
          href={previousHack}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--card-surface)] px-4 py-2 text-xs font-semibold text-[var(--foreground)] shadow-sm transition-all duration-200 hover:border-[var(--red-primary)] hover:text-[var(--red-primary)] hover:scale-105 active:scale-95 sm:text-sm sm:px-5 sm:py-2.5"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </Link>
      ) : (
        <div />
      )}

      {nextHack ? (
        <Link
          href={nextHack}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--card-surface)] px-4 py-2 text-xs font-semibold text-[var(--foreground)] shadow-sm transition-all duration-200 hover:border-[var(--red-primary)] hover:text-[var(--red-primary)] hover:scale-105 active:scale-95 sm:text-sm sm:px-5 sm:py-2.5 ml-auto"
        >
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
