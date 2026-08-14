"use client";

import { useTheme } from "@/components/ThemeProvider";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[var(--foreground)]/80 transition-all duration-200 hover:bg-[var(--foreground)]/10 hover:text-[var(--foreground)] active:scale-90"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {!mounted ? (
        <span className="h-3.5 w-3.5 rounded-full bg-current opacity-20" />
      ) : (
        <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="h-3.5 w-3.5" />
      )}
    </button>
  );
}
