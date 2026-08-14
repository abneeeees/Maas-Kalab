"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type MaasHackDropdownProps = {
  currentHack?: number;
  totalHacks?: number;
};

export default function MaasHackDropdown({
  currentHack = 1,
  totalHacks = 5,
}: MaasHackDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const items = Array.from({ length: totalHacks }, (_, i) => i + 1);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      {/* Selector Button with clear label */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--nav-border)] bg-[var(--nav-bg)] px-3.5 py-1.5 text-xs font-semibold text-[var(--foreground)] shadow-sm backdrop-blur-xl transition-all duration-200 hover:border-[var(--red-primary)] hover:text-[var(--red-primary)] active:scale-95 cursor-pointer"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[var(--red-primary)]">
          Edition
        </span>
        <span className="font-bold">{currentHack}.0</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-[var(--text-muted)] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* DROPDOWN MENU */}
      <div
        className={`absolute right-0 top-full mt-2 w-44 origin-top-right rounded-2xl border border-[var(--nav-border)] bg-[var(--card-surface)] p-2 shadow-2xl backdrop-blur-xl transition-all duration-200 ease-out z-50 ${
          open
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-2 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-[var(--text-muted)] border-b border-[var(--border-subtle)]/50 mb-1">
          Switch Edition
        </div>
        <div className="flex flex-col gap-1">
          {items.map((item) => {
            const isActive = item === currentHack;

            return (
              <Link
                key={item}
                href={`/maashacks/${item}`}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-3 py-1.5 text-xs font-semibold transition-all duration-150 ${
                  isActive
                    ? "bg-[var(--red-primary)] text-white shadow-sm"
                    : "text-[var(--foreground)] hover:bg-[var(--foreground)]/5 hover:text-[var(--red-primary)]"
                }`}
              >
                <span>Maas Hack {item}.0</span>
                {isActive && <span className="text-[0.65rem]">●</span>}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}