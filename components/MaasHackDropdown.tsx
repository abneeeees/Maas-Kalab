"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MaasHackDropdownProps = {
  currentHack?: number;
  totalHacks?: number;
};

export default function MaasHackDropdown({
  currentHack = 1,
  totalHacks = 4,
}: MaasHackDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const autoCloseTimeout = useRef<NodeJS.Timeout | null>(null);

  const items = Array.from({ length: totalHacks }, (_, i) => i + 1);

  const isValidCurrent = items.includes(currentHack);

  // 🟢 Open instantly on hover
  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    if (autoCloseTimeout.current) clearTimeout(autoCloseTimeout.current);

    setOpen(true);

    // ⏱️ Auto close after 3s
    autoCloseTimeout.current = setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  // 🔴 Delay close on leave (so user can move cursor)
  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
      if (autoCloseTimeout.current) clearTimeout(autoCloseTimeout.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* BUTTON */}
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--nav-border)] 
        bg-[var(--nav-bg-scrolled)] text-sm font-semibold text-[var(--foreground)] 
        shadow-[0_2px_16px_var(--nav-shadow)] backdrop-blur-xl backdrop-saturate-[1.8]
        transition-all duration-300 sm:h-12 sm:w-12 sm:text-base
        hover:border-[var(--red-primary)] hover:text-[var(--red-primary)]"
      >
        {currentHack}.0
      </button>

      {/* DROPDOWN */}
      <div
        className={`absolute top-14 z-20 w-17 origin-top transform rounded-2xl border border-[var(--nav-border)] 
        bg-[var(--nav-bg-scrolled)] px-3 py-3 shadow-[0_14px_30px_var(--nav-shadow)] 
        backdrop-blur-xl backdrop-saturate-[1.8]
        transition-all duration-200 ease-out
        ${
          open
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-1.5 text-base font-semibold text-[var(--foreground)] sm:text-lg">
          {items.map((item) => {
            const isActive = isValidCurrent && item === currentHack;

            return (
              <Link
                key={item}
                href={`/maashacks/${item}`}
                className={`w-full rounded-[0.8rem] px-2 py-1 text-center transition-all duration-200
                ${
                  isActive
                    ? "bg-[var(--red-primary)] text-white"
                    : "hover:bg-[var(--red-primary)] hover:text-white hover:scale-105"
                }`}
              >
                {item}.0
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}