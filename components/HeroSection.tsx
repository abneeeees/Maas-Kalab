"use client";

import { motion } from "framer-motion";

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

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-x-hidden px-4 pt-24 pb-10 sm:px-10 sm:pt-28 sm:pb-12 lg:px-16"
    >
      {/* Top Ambient Light Sheen */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[95vw] max-w-5xl h-[380px] rounded-full bg-gradient-to-b from-[var(--red-primary)]/15 via-[var(--amber-accent)]/8 to-transparent blur-3xl opacity-80"
        aria-hidden
      />
      <img
        src="/decor/fried-chicken.webp"
        alt=""
        aria-hidden
        decoding="async"
        className="pointer-events-none absolute left-0 top-[28%] z-0 hidden w-[4.75rem] -translate-x-[15%] -rotate-[12deg] select-none opacity-[0.38] drop-shadow-[0_6px_18px_var(--decor-shadow)] sm:block md:left-2 md:w-[5.5rem] lg:top-[30%]"
      />

      <img
        src="/rooster.webp"
        alt=""
        aria-hidden
        decoding="async"
        className="pointer-events-none absolute right-[2%] top-1/2 z-0 hidden w-52 -translate-y-1/2 opacity-[0.24] lg:block xl:w-64"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-[1] mx-auto my-auto w-full max-w-4xl text-center"
      >
        <motion.p
          variants={fadeUp}
          className="mx-auto mb-4 w-fit rounded-full border border-[var(--hero-pill-border)] bg-[var(--hero-pill-bg)] px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[var(--hero-pill-text)] shadow-sm backdrop-blur"
        >
          A Club For Maas Khors
        </motion.p>

        <div className="mx-auto max-w-5xl space-y-0.5 sm:space-y-1">
          {/* Punjabi (Original Size ~ 3.75rem / 60px) */}
          <motion.p
            variants={titleLine}
            className="hero-script text-3xl font-bold leading-tight tracking-tight text-[var(--hero-faint)] sm:text-5xl lg:text-6xl"
          >
            ਮਾਸ ਕਲਬ
          </motion.p>

          {/* Hindi (Distinctly Larger ~ 4.75rem / 76px) */}
          <motion.p
            variants={titleLine}
            className="hero-script text-4xl font-extrabold leading-tight tracking-tight text-[var(--hero-faint)] sm:text-6xl md:text-7xl lg:text-[4.75rem]"
          >
            मास कलब
          </motion.p>

          {/* English (Largest Core Hero ~ 5.5rem / 88px) */}
          <motion.h1
            variants={titleLine}
            className="my-1 text-5xl font-black leading-none tracking-tight text-[var(--hero-title)] sm:my-2 sm:text-7xl lg:text-[5.5rem]"
          >
            Maas Kalab
          </motion.h1>

          {/* Urdu (Distinctly Larger ~ 4.75rem / 76px) */}
          <motion.p
            variants={titleLine}
            dir="rtl"
            className="hero-script text-4xl font-extrabold leading-tight tracking-tight text-[var(--hero-faint)] sm:text-6xl md:text-7xl lg:text-[4.75rem]"
          >
            ماس کلب
          </motion.p>

          {/* Malayalam (Original Size ~ 3.75rem / 60px) */}
          <motion.p
            variants={titleLine}
            className="hero-script text-3xl font-bold leading-tight tracking-tight text-[var(--hero-faint)] sm:text-5xl lg:text-6xl"
          >
            മാസ് കലബ്
          </motion.p>
        </div>

        {/* Primary CTA */}
        <motion.div
          variants={fadeUp}
          className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://chat.whatsapp.com/HFMab1ihd6V1loDslSDZk6"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/25 bg-[var(--red-primary)] px-8 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_var(--primary-btn-shadow)] transition-all duration-300 hover:scale-105 hover:bg-[var(--primary-btn-hover)] hover:shadow-[0_12px_32px_var(--primary-btn-hover-shadow)] active:scale-95"
          >
            Join The Kalab
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-8 flex items-center justify-center lg:hidden"
        >
          <img
            src="/rooster.webp"
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className="w-16 opacity-[0.38]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
