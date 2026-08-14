"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export type ClubHighlight = {
  title: string;
  description: string;
};

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const ROTATE_MS = 5000;

export function ClubHighlights({ highlights }: { highlights: ClubHighlight[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = window.setInterval(
      () => setI((n) => (n + 1) % highlights.length),
      ROTATE_MS,
    );
    return () => window.clearInterval(t);
  }, [highlights.length]);

  const active = highlights[i] ?? highlights[0];

  return (
    <section className="relative px-3 py-4 sm:px-10 sm:py-8 overflow-hidden">
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[var(--border-card)] bg-[var(--card-surface)]/80 p-5 sm:p-8 text-center backdrop-blur-xl shadow-[0_12px_40px_var(--shadow-card-lg)]">
          {/* Subtle Ambient Glow */}
          <div
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-28 rounded-full bg-[var(--red-primary)]/10 blur-2xl"
            aria-hidden
          />

          <div className="relative z-[1] min-h-[4.5rem] sm:min-h-[4.8rem] flex flex-col justify-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <span className="inline-block rounded-full border border-[var(--hero-pill-border)] bg-[var(--hero-pill-bg)] px-3.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--red-primary)] backdrop-blur shadow-sm">
                  {active.title}
                </span>
                <p className="mt-2.5 text-sm sm:text-base font-medium leading-relaxed text-[var(--foreground)]/90">
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="mt-4 flex justify-center items-center gap-2" aria-hidden>
            {highlights.map((_, dotI) => (
              <button
                key={dotI}
                type="button"
                onClick={() => setI(dotI)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  dotI === i
                    ? "h-1.5 w-5 bg-[var(--red-primary)] shadow-[0_0_8px_var(--primary-btn-shadow)]"
                    : "h-1.5 w-1.5 bg-[var(--dot-inactive)] hover:bg-[var(--dot-active)]"
                }`}
                aria-label={`Go to highlight ${dotI + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
