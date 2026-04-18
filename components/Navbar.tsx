"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  navItems: NavItem[];
  rightContent?: ReactNode;
};

export function Navbar({ navItems, rightContent }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);11

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-2 py-2 sm:px-4 sm:py-4">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-start gap-2 sm:gap-3">
        <div aria-hidden className="justify-self-start" />
        <nav
          className={`justify-self-center flex items-center gap-0 rounded-full px-1 py-0.5 transition-all duration-500 sm:gap-0.5 sm:px-1.5 sm:py-1 ${
            scrolled
              ? "border border-[var(--nav-border)] bg-[var(--nav-bg-scrolled)] shadow-[0_2px_16px_var(--nav-shadow)] backdrop-blur-xl backdrop-saturate-[1.8]"
              : "border border-transparent bg-transparent shadow-none backdrop-blur-none"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-2 py-1 text-[0.65rem] font-semibold text-[var(--foreground)] transition-all hover:bg-[var(--red-primary)] hover:text-white sm:px-4 sm:py-2 sm:text-sm"
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
    </header>
  );
}
