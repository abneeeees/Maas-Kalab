"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Maas Hack", href: "/#mass-hack" },
  { label: "Meets", href: "/#mini-meetups" },
  { label: "Places", href: "/#places" },
  { label: "Members", href: "/#members" },
  { label: "Rules", href: "/#rules" },
];

const JOIN = { label: "Join", href: "/#join" };

const BAR =
  "border border-[var(--nav-border)] bg-[var(--nav-bg)] shadow-[0_2px_12px_var(--nav-shadow)]";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-4">
      {/* Desktop */}
      <nav className={`pointer-events-auto mx-auto hidden w-fit items-center gap-1 rounded-full p-1 md:flex ${BAR}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-3.5 py-1.5 text-[0.8125rem] font-semibold text-[var(--foreground)]/75 transition-colors hover:bg-[var(--red-primary)]/10 hover:text-[var(--red-primary)]"
          >
            {item.label}
          </a>
        ))}
        <ThemeToggle />
        <a
          href={JOIN.href}
          className="ml-1 rounded-full bg-[var(--red-primary)] px-4 py-1.5 text-[0.8125rem] font-semibold text-white transition-colors hover:bg-[var(--primary-btn-hover)]"
        >
          {JOIN.label}
        </a>
      </nav>

      {/* Mobile */}
      <div className="pointer-events-auto mx-auto flex max-w-md flex-col md:hidden">
        <div className={`flex items-center justify-between rounded-full px-4 py-1.5 ${BAR}`}>
          <a
            href="/#home"
            onClick={() => setOpen(false)}
            className="text-sm font-bold text-[var(--red-primary)]"
          >
            Maas Kalab
          </a>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((p) => !p)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)]/10"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className={`mt-2 flex flex-col gap-1 rounded-2xl p-2 ${BAR}`}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3.5 py-2.5 text-sm font-semibold text-[var(--foreground)]/90 transition-colors hover:bg-[var(--red-primary)]/10 hover:text-[var(--red-primary)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={JOIN.href}
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-[var(--red-primary)] px-3.5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-btn-hover)]"
            >
              {JOIN.label}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
