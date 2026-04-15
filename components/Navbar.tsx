"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Meets", href: "#mass-hack" },
  { label: "Members", href: "#members" },
  { label: "Join", href: "#join" },
  { label: "Resources", href: "#resources" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex justify-center px-2 py-2 sm:px-4 sm:py-4">
      <nav
        className={`flex items-center gap-0 rounded-full px-1 py-0.5 transition-all duration-500 sm:gap-0.5 sm:px-1.5 sm:py-1 ${
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
    </header>
  );
}
