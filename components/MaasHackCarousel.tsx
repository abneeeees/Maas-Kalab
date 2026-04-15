"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export type MaasHackSlide = {
  imgSrc: string;
  title: string;
  description: string;
  date: string;
  href: string;
};

type Props = {
  slides: MaasHackSlide[];
};

const VISIBLE = 3;
const CYCLE_MS = 4500;
const ANIM_MS = 600;

export function MaasHackCarousel({ slides }: Props) {
  const n = slides.length;
  const [front, setFront] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const pointerRef = useRef<{ x: number; y: number; t: number } | null>(null);

  const advance = useCallback(() => {
    if (leaving) return;
    setLeaving(true);
    setTimeout(() => {
      setFront((p) => (p + 1) % n);
      setLeaving(false);
    }, ANIM_MS);
  }, [leaving, n]);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, CYCLE_MS);
  }, [advance]);

  useEffect(() => {
    timerRef.current = setInterval(advance, CYCLE_MS);
    return () => clearInterval(timerRef.current);
  }, [advance]);

  const handleTap = () => {
    advance();
    resetTimer();
  };

  const jumpTo = (i: number) => {
    if (i === front || leaving) return;
    setFront(i);
    resetTimer();
  };

  const onPointerDown = (e: React.PointerEvent) => {
    pointerRef.current = { x: e.clientX, y: e.clientY, t: Date.now() };
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!pointerRef.current) return;
    const dx = e.clientX - pointerRef.current.x;
    const dy = Math.abs(e.clientY - pointerRef.current.y);
    const dt = Date.now() - pointerRef.current.t;
    pointerRef.current = null;

    if (Math.abs(dx) > 40 && Math.abs(dx) > dy) {
      advance();
      resetTimer();
    } else if (dt < 300 && Math.abs(dx) < 10) {
      handleTap();
    }
  };

  const activeDot = leaving ? (front + 1) % n : front;

  return (
    <div className="relative mx-auto w-full max-w-3xl px-2 sm:px-0">
      <div
        className="relative mx-auto"
        style={{ aspectRatio: "16 / 10" }}
      >
        {slides.map((slide, i) => {
          const isFront = i === front;
          const rawPos = ((i - front + n) % n);
          const stackPos = leaving
            ? isFront ? -1 : ((i - front - 1 + n) % n)
            : rawPos;

          if (stackPos > VISIBLE && stackPos !== -1) return null;

          let transform: string;
          let opacity: number;
          let zIndex: number;

          if (stackPos === -1) {
            transform = "translateX(-108%) rotate(-8deg) scale(0.88)";
            opacity = 0;
            zIndex = n + 1;
          } else {
            const yOff = stackPos * 14;
            const scl = 1 - stackPos * 0.04;
            transform = `scale(${scl}) translateY(${yOff}px)`;
            opacity = stackPos >= VISIBLE ? 0 : 1 - stackPos * 0.18;
            zIndex = n - stackPos;
          }

          return (
            <div
              key={slide.href}
              className="masshack-deck-card absolute inset-0"
              style={{ transform, opacity, zIndex }}
              onPointerDown={isFront ? onPointerDown : undefined}
              onPointerUp={isFront ? onPointerUp : undefined}
            >
              <div className="masshack-frame relative h-full w-full overflow-hidden">
                <img
                  src={slide.imgSrc}
                  alt={slide.title}
                  draggable={false}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                  <div className="min-w-0">
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-white/60">
                      Flagship
                    </p>
                    <h3 className="mt-0.5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {slide.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/70 sm:text-sm">
                      {slide.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1.5">
                    <span className="rounded-full bg-white/15 px-3 py-0.5 text-[0.65rem] font-medium text-white/80 backdrop-blur-sm">
                      {slide.date}
                    </span>
                    <Link
                      href={slide.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-white/90 transition-[gap] hover:gap-2 sm:text-sm"
                    >
                      View recap
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.href}
            type="button"
            onClick={() => jumpTo(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === activeDot
                ? "w-7 bg-[var(--red-primary)]"
                : "w-2 bg-[var(--carousel-dot-inactive)] hover:bg-[var(--carousel-dot-inactive-hover)]"
            }`}
            aria-label={`Go to ${s.title}`}
          />
        ))}
      </div>
    </div>
  );
}
