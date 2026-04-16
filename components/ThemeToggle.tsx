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
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[var(--foreground)] transition-all duration-200 hover:bg-[var(--red-primary)] hover:text-white active:scale-90 sm:h-9 sm:w-9"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {!mounted ? (
        <span className="h-4 w-4 rounded-full bg-current opacity-20" />
      ) : (
        <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="h-[1.1rem] w-[1.1rem]" />
      )}
    </button>
  );
}
