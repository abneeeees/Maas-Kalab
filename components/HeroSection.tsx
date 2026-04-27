"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
};

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const titleLine = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE },
  },
};

export type HeroHighlight = {
  title: string;
  description: string;
};

const ROTATE_MS = 5200;

export function HeroSection({ highlights }: { highlights: HeroHighlight[] }) {
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
    <section
      id="home"
      className="relative overflow-x-hidden px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <img
        src="/decor/fried-chicken.webp"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 top-[22%] z-0 hidden w-[4.75rem] -translate-x-[15%] -rotate-[12deg] select-none opacity-[0.38] drop-shadow-[0_6px_18px_var(--decor-shadow)] sm:block md:left-2 md:w-[5.5rem] lg:top-[26%]"
      />

      <img
        src="/rooster.webp"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[2%] top-1/2 z-0 hidden w-52 -translate-y-1/2 opacity-[0.24] lg:block xl:w-64"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-[1] mx-auto max-w-4xl text-center"
      >
        <motion.p
          variants={fadeUp}
          className="mx-auto mb-6 w-fit rounded-full border border-[var(--hero-pill-border)] bg-[var(--hero-pill-bg)] px-5 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[var(--red-primary)] backdrop-blur"
        >
          A Club For Maas Khors
        </motion.p>

        <div className="mx-auto max-w-5xl space-y-0">
          <motion.p
            variants={titleLine}
            dir="rtl"
            className="hero-script text-4xl font-bold leading-[1.15] tracking-tight text-[var(--hero-faint)] sm:text-6xl lg:text-7xl"
          >
            ਮਾਸ ਕਾਲਾਬ
          </motion.p>
          <motion.p
            variants={titleLine}
            className="hero-script text-4xl font-bold leading-[1.15] tracking-tight text-[var(--hero-faint)] sm:text-6xl lg:text-7xl"
          >
            मास कलाब
          </motion.p>
          <motion.h1
            variants={titleLine}
            className="text-5xl font-bold leading-[1.1] tracking-tight text-[var(--hero-title)] sm:text-7xl lg:text-8xl"
          >
            Maas Kalab
          </motion.h1>
          <motion.p
            variants={titleLine}
            dir="rtl"
            className="hero-script text-4xl font-bold leading-[1.15] tracking-tight text-[var(--hero-faint)] sm:text-6xl lg:text-7xl"
          >
            ماس کلب
          </motion.p>
          <motion.p
            variants={titleLine}
            className="hero-script text-4xl font-bold leading-[1.15] tracking-tight text-[var(--hero-faint)] sm:text-6xl lg:text-7xl"
          >
            മാസ് കലബ്
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-8 max-w-xl sm:mt-10"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="relative min-h-[6.5rem] sm:min-h-[7.25rem]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="absolute inset-x-0 top-0"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent-soft)]">
                  {active.title}
                </p>
                <p className="mt-2.5 text-base leading-relaxed text-[var(--text-muted)] sm:text-[1.05rem] sm:leading-[1.65]">
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-5 flex justify-center gap-2" aria-hidden>
            {highlights.map((_, dotI) => (
              <span
                key={dotI}
                className={`rounded-full transition-all duration-300 ${
                  dotI === i
                    ? "h-1.5 w-4 bg-[var(--dot-active)]"
                    : "h-1.5 w-1.5 bg-[var(--dot-inactive)]"
                }`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://chat.whatsapp.com/HFMab1ihd6V1loDslSDZk6"
            className="rounded-full bg-[var(--red-primary)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_var(--primary-btn-shadow)] transition hover:bg-[var(--primary-btn-hover)] hover:shadow-[0_12px_32px_var(--primary-btn-hover-shadow)]"
          >
            Join The Kalab
          </a>
          <a
            href="#resources"
            className="rounded-full border border-[var(--btn-secondary-border)] bg-[var(--btn-secondary-bg)] px-7 py-3.5 text-sm font-semibold text-[var(--btn-secondary-text)] transition hover:border-[var(--btn-secondary-hover-border)] hover:bg-[var(--btn-secondary-hover-bg)]"
          >
            View Resources
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-12 flex items-center justify-center lg:hidden"
        >
          <img
            src="/rooster.webp"
            alt=""
            aria-hidden
            className="w-20 opacity-[0.45]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
