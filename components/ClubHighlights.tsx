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
    <section className="relative px-4 py-3 sm:px-10 sm:py-6 overflow-hidden">
      <div className="mx-auto max-w-2xl text-center">
        <div className="min-h-[4.5rem] sm:min-h-[4.8rem] flex flex-col justify-center items-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="flex flex-col items-center"
            >
              <span className="inline-block rounded-full border border-[var(--hero-pill-border)] bg-[var(--hero-pill-bg)] px-3.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--red-primary)] backdrop-blur shadow-sm">
                {active.title}
              </span>
              <p className="mt-2.5 max-w-xl text-sm sm:text-base font-medium leading-relaxed text-[var(--foreground)]/85">
                {active.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sleek Balanced Dots Indicator Dock */}
        <div className="mt-3 flex justify-center items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/35 dark:bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
            {highlights.map((_, dotI) => {
              const isActive = dotI === i;
              return (
                <button
                  key={dotI}
                  type="button"
                  onClick={() => setI(dotI)}
                  className={`transition-all duration-300 cursor-pointer rounded-full ${
                    isActive
                      ? "w-5 h-2 bg-[var(--red-primary)] shadow-[0_0_8px_var(--primary-btn-shadow)]"
                      : "w-2 h-2 bg-[var(--dot-inactive)] hover:bg-[var(--dot-active)] hover:scale-125"
                  }`}
                  aria-label={`Go to highlight ${dotI + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
