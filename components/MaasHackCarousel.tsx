"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

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

const CYCLE_MS = 4500;

function getSignedOffset(i: number, front: number, n: number) {
  let off = (i - front + n) % n;
  if (off > n / 2) off -= n;
  return off;
}

export function MaasHackCarousel({ slides }: Props) {
  const n = slides.length;
  const [front, setFront] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [swipingDir, setSwipingDir] = useState<"left" | "right" | null>(null);

  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const touchStartRef = useRef<{ x: number; y: number; t: number } | null>(null);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const triggerAdvance = useCallback(() => {
    if (swipingDir) return;
    setSwipingDir("left");
    setTimeout(() => {
      setFront((p) => (p + 1) % n);
      setSwipingDir(null);
    }, 280);
  }, [swipingDir, n]);

  const triggerPrev = useCallback(() => {
    if (swipingDir) return;
    setSwipingDir("right");
    setTimeout(() => {
      setFront((p) => (p - 1 + n) % n);
      setSwipingDir(null);
    }, 280);
  }, [swipingDir, n]);

  const advance = useCallback(() => {
    setFront((p) => (p + 1) % n);
  }, [n]);

  const goToPrev = useCallback(() => {
    setFront((p) => (p - 1 + n) % n);
  }, [n]);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    if (!isHovered && isDesktop) {
      timerRef.current = setInterval(advance, CYCLE_MS);
    }
  }, [advance, isHovered, isDesktop]);

  useEffect(() => {
    if (!isHovered && isDesktop) {
      timerRef.current = setInterval(advance, CYCLE_MS);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [advance, isHovered, isDesktop]);

  // Keyboard navigation for Left / Right arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === "ArrowLeft") {
        goToPrev();
        resetTimer();
      } else if (e.key === "ArrowRight") {
        advance();
        resetTimer();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [advance, goToPrev, resetTimer]);

  const jumpTo = (i: number) => {
    setFront(i);
    resetTimer();
  };

  // Lightweight touch drag handlers on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (swipingDir) return;
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY, t: Date.now() };
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current || swipingDir) return;
    const touch = e.touches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = Math.abs(touch.clientY - touchStartRef.current.y);
    if (Math.abs(dx) > dy) {
      setDragOffset(dx);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || swipingDir) return;
    const dx = dragOffset;
    touchStartRef.current = null;
    setIsDragging(false);
    setDragOffset(0);

    const threshold = 40;
    if (dx < -threshold) {
      triggerAdvance();
    } else if (dx > threshold) {
      triggerPrev();
    }
  };

  return (
    <div
      className="relative mx-auto w-full max-w-3xl md:max-w-4xl lg:max-w-5xl px-2 sm:px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "1200px" }}
    >
      {/* Desktop Minimal Prev Button */}
      <button
        type="button"
        onClick={() => {
          goToPrev();
          resetTimer();
        }}
        className="hidden md:flex absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-30 h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/90 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black hover:border-white cursor-pointer active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
      </button>

      {/* Desktop Minimal Next Button */}
      <button
        type="button"
        onClick={() => {
          advance();
          resetTimer();
        }}
        className="hidden md:flex absolute -right-4 lg:-right-10 top-1/2 -translate-y-1/2 z-30 h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/90 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black hover:border-white cursor-pointer active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
      </button>

      <div className="relative mx-auto aspect-[16/12] sm:aspect-[16/10] md:aspect-[16/9.5] lg:aspect-[16/9] max-w-3xl lg:max-w-4xl">
        {isDesktop ? (
          // Desktop Coverflow Layout with Subtle 3D Perspective
          slides.map((slide, i) => {
            const isFront = i === front;
            const offset = getSignedOffset(i, front, n);

            let transform: string;
            let opacity: number;
            let zIndex: number;
            let filter = "none";

            if (offset === 0) {
              transform = "translateX(0%) scale(1) rotateY(0deg)";
              opacity = 1;
              zIndex = 20;
            } else if (offset === 1) {
              transform = "translateX(42%) scale(0.85) rotateY(-6deg)";
              opacity = 0.65;
              zIndex = 10;
              filter = "brightness(0.65)";
            } else if (offset === -1) {
              transform = "translateX(-42%) scale(0.85) rotateY(6deg)";
              opacity = 0.65;
              zIndex = 10;
              filter = "brightness(0.65)";
            } else {
              transform = `translateX(${offset > 0 ? 75 : -75}%) scale(0.7)`;
              opacity = 0;
              zIndex = 1;
            }

            return (
              <div
                key={slide.href}
                className="masshack-deck-card absolute inset-0 transition-all duration-500 ease-out"
                style={{ transform, opacity, zIndex, filter }}
                onClick={() => {
                  if (offset !== 0) jumpTo(i);
                }}
              >
                <div className="masshack-frame relative h-full w-full overflow-hidden rounded-2xl md:rounded-3xl border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                  <img
                    src={slide.imgSrc}
                    alt={slide.title}
                    draggable={false}
                    loading={isFront ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 ${
                      isFront ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {isFront && (
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-4 sm:p-6 md:p-8">
                      <div className="min-w-0">
                        <h3 className="text-lg font-extrabold tracking-tight text-white sm:text-2xl md:text-3xl">
                          {slide.title}
                        </h3>
                        <p className="mt-1 text-xs text-white/80 sm:text-sm md:text-base line-clamp-1">
                          {slide.description}
                        </p>
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-2">
                        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.68rem] font-medium text-white/90 backdrop-blur-md sm:text-xs">
                          {slide.date}
                        </span>
                        <Link
                          href={slide.href}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95 sm:text-sm"
                        >
                          View recap
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          // Mobile Smooth Symmetric Docking Deck Layout
          slides.map((slide, i) => {
            const pos = (i - front + n) % n;
            if (pos > 2) return null;

            let transform = `translateY(${pos * 12}px) scale(${1 - pos * 0.05})`;
            let opacity = pos === 0 ? 1 : pos === 1 ? 0.8 : 0.55;
            let zIndex = 20 - pos;

            if (pos === 0) {
              if (swipingDir === "left") {
                transform = "translateX(-110%) rotate(-8deg)";
                opacity = 0;
              } else if (swipingDir === "right") {
                transform = "translateX(110%) rotate(8deg)";
                opacity = 0;
              } else if (isDragging) {
                transform = `translateX(${dragOffset}px) rotate(${dragOffset * 0.04}deg)`;
              }
            } else if (pos === 1) {
              if (swipingDir === "left" || swipingDir === "right") {
                transform = "translateY(0px) scale(1)";
                opacity = 1;
                zIndex = 19;
              }
            } else if (pos === 2) {
              if (swipingDir === "left" || swipingDir === "right") {
                transform = "translateY(12px) scale(0.95)";
                opacity = 0.8;
                zIndex = 10;
              }
            }

            return (
              <div
                key={slide.href}
                onTouchStart={pos === 0 ? handleTouchStart : undefined}
                onTouchMove={pos === 0 ? handleTouchMove : undefined}
                onTouchEnd={pos === 0 ? handleTouchEnd : undefined}
                onTouchCancel={pos === 0 ? handleTouchEnd : undefined}
                style={{
                  transform,
                  opacity,
                  zIndex,
                  transition: isDragging && pos === 0
                    ? "none"
                    : "transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.28s ease",
                }}
                className={`absolute inset-0 will-change-transform select-none ${
                  pos === 0 ? "touch-pan-y" : "pointer-events-none"
                }`}
              >
                <div className="masshack-frame relative h-full w-full overflow-hidden rounded-2xl border border-white/20 shadow-[0_14px_45px_rgba(0,0,0,0.5)]">
                  <img
                    src={slide.imgSrc}
                    alt={slide.title}
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-280 ${
                      pos === 0 || swipingDir ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Content Overlay */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4 sm:p-6 transition-opacity duration-280 ${
                      pos === 0 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-extrabold tracking-tight text-white sm:text-2xl">
                        {slide.title}
                      </h3>
                      <p className="mt-1 text-xs text-white/80 sm:text-sm line-clamp-1">
                        {slide.description}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-2">
                      <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[0.65rem] font-medium text-white/90 backdrop-blur-md">
                        {slide.date}
                      </span>
                      <Link
                        href={slide.href}
                        className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md shadow-lg transition-all active:scale-95"
                      >
                        <span>View recap</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Minimal Dots Indicator */}
      <div className="mt-8 flex justify-center items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.href}
            type="button"
            onClick={() => jumpTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              i === front
                ? "w-8 bg-[var(--red-primary)] shadow-[0_0_12px_var(--primary-btn-shadow)]"
                : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to ${s.title}`}
          />
        ))}
      </div>
    </div>
  );
}


