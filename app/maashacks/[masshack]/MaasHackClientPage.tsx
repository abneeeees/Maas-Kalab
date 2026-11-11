"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import MaasHackNavigation from "@/components/maashack_navigation";
import { MaasHackCardViewer } from "@/components/MaasHackCardViewer";

interface MaasHackClientPageProps {
  data: {
    title: string;
    location: string;
    description: string;
    date: string;
    locationhref: string;
    images: { src: string; caption?: string }[];
  };
  currentHackNum: number;
  totalHacks: number;
}

export default function MaasHackClientPage({ data, currentHackNum, totalHacks }: MaasHackClientPageProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="top-glow relative overflow-x-hidden flex-1 px-3 sm:px-6 pt-16 sm:pt-20 md:pt-22 pb-14 sm:pb-18 w-full max-w-full">
      <div className="relative z-[1] mx-auto max-w-6xl xl:max-w-[1440px] w-full min-w-0">
        {/* Header with Clickable Number */}
        <div className="heading-rise-up relative z-30 mb-8 sm:mb-10 md:mb-12 text-center">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl flex items-center justify-center flex-wrap gap-2.5">
              <span>Maas Hack</span>
              <span className="relative inline-block" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 text-[var(--red-primary)] transition-all duration-200 hover:opacity-90 cursor-pointer underline decoration-[var(--red-primary)]/40 underline-offset-8"
                  aria-label="Switch Edition"
                >
                  <span>{currentHackNum}.0</span>
                  <ChevronDown
                    className={`h-6 w-6 sm:h-8 sm:w-8 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Popup Menu */}
                {dropdownOpen && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-28 rounded-2xl border border-[var(--border-card)] bg-[var(--card-surface)] p-1.5 shadow-[0_12px_32px_var(--shadow-card-lg)] z-50 animate-in fade-in zoom-in-95 duration-150"
                  >
                    <div className="flex flex-col gap-1 text-sm font-bold">
                      {Array.from({ length: totalHacks }, (_, i) => i + 1).map((num) => {
                        const isActive = num === currentHackNum;
                        return (
                          <Link
                            key={num}
                            href={`/maashacks/${num}`}
                            onClick={() => setDropdownOpen(false)}
                            className={`flex items-center justify-center rounded-xl py-1.5 text-xs sm:text-sm font-bold transition-all ${
                              isActive
                                ? "bg-[var(--red-primary)] text-white shadow-sm"
                                : "text-[var(--foreground)] hover:bg-[var(--foreground)]/10 hover:text-[var(--red-primary)]"
                            }`}
                          >
                            <span>{num}.0</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </span>
            </h1>
          </div>
        </div>

        {/* Image Card Viewer */}
        <MaasHackCardViewer
          images={data.images}
          location={data.location}
          locationhref={data.locationhref}
          description={data.description}
          date={data.date}
          edition={currentHackNum}
          autoPlayInterval={5000}
        />

        {/* Previous / next edition */}
        <div className="mt-8 sm:mt-10">
          <MaasHackNavigation current={currentHackNum} total={totalHacks} />
        </div>
      </div>
    </main>
  );
}