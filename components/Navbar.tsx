"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import type { ReactNode } from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  navItems: NavItem[];
  rightContent?: ReactNode;
};

export function Navbar({ navItems, rightContent }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 py-2.5 sm:px-4 sm:py-3 pointer-events-none">
      {/* Desktop Navigation */}
      <div className="hidden md:grid mx-auto max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-3 pointer-events-auto">
        <div aria-hidden className="justify-self-start" />
        <nav className="justify-self-center flex items-center gap-1 rounded-full border border-[var(--nav-border)] bg-[var(--nav-bg)] px-2 py-1 shadow-[0_4px_24px_var(--nav-shadow)] backdrop-blur-xl backdrop-saturate-[1.8] transition-all duration-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-[0.8125rem] font-semibold text-[var(--foreground)]/80 whitespace-nowrap transition-all duration-200 hover:bg-[var(--foreground)]/10 hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
        {rightContent ? (
          <div className="justify-self-end shrink-0">{rightContent}</div>
        ) : null}
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden flex-col mx-auto max-w-md pointer-events-auto">
        <div className="flex items-center justify-between rounded-full border border-[var(--nav-border)] bg-[var(--nav-bg)] px-4 py-1.5 shadow-[0_4px_24px_var(--nav-shadow)] backdrop-blur-xl backdrop-saturate-[1.8]">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs font-bold tracking-tight text-[var(--foreground)]"
          >
            Maas Kalab
          </a>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            {rightContent && <div className="shrink-0">{rightContent}</div>}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-7.5 w-7.5 items-center justify-center rounded-full text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)]/10"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav className="mt-2 flex flex-col gap-1 overflow-hidden rounded-2xl border border-[var(--nav-border)] bg-[var(--nav-bg)] p-2.5 shadow-[0_12px_40px_var(--nav-shadow)] backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center rounded-xl px-3.5 py-2.5 text-sm font-semibold text-[var(--foreground)]/90 transition-colors hover:bg-[var(--foreground)]/10 hover:text-[var(--foreground)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
