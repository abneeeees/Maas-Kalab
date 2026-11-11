"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Maximize2, Minimize2, RotateCw } from "lucide-react";

type MaasHackImage = {
  src: string;
  caption?: string;
};

type MaasHackCardViewerProps = {
  images: MaasHackImage[];
  location: string;
  description: string;
  date?: string;
  locationhref?: string;
  autoPlayInterval?: number;
  edition?: number;
};

export function MaasHackCardViewer({
  images,
  location,
  description,
  date,
  locationhref,
  autoPlayInterval = 5000,
  edition,
}: MaasHackCardViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [thumbsMounted, setThumbsMounted] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleMouseMove = () => {
    setShowThumbnails(true);
    setThumbsMounted(true);
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setShowThumbnails(false);
    }, 2200);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setShowThumbnails(false);
  };

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToIndex = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const [isLandscape, setIsLandscape] = useState(false);

  const toggleFullscreen = async () => {
    if (!isFullscreen) {
      try {
        if (cardContainerRef.current?.requestFullscreen) {
          await cardContainerRef.current.requestFullscreen();
        } else {
          setIsFullscreen(true);
        }
      } catch {
        setIsFullscreen(true);
      }
    } else {
      try {
        if (typeof window !== "undefined" && window.screen?.orientation && typeof window.screen.orientation.unlock === "function") {
          window.screen.orientation.unlock();
        }
      } catch {}
      setIsLandscape(false);
      if (document.fullscreenElement && document.exitFullscreen) {
        await document.exitFullscreen();
      } else {
        setIsFullscreen(false);
      }
    }
  };

  // Always points at the latest toggleFullscreen, for the keyboard listener below
  const toggleFullscreenRef = useRef(toggleFullscreen);
  toggleFullscreenRef.current = toggleFullscreen;

  // Double click / double tap anywhere on the photo toggles fullscreen (like a video player)
  const lastTapRef = useRef(0);
  const handleFrameClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button, a")) return;
    const now = Date.now();
    if (now - lastTapRef.current < 320) {
      lastTapRef.current = 0;
      toggleFullscreen();
    } else {
      lastTapRef.current = now;
    }
  };

  const toggleRotation = async () => {
    try {
      if (typeof window !== "undefined" && window.screen?.orientation && typeof window.screen.orientation.lock === "function") {
        if (!isLandscape) {
          await window.screen.orientation.lock("landscape");
          setIsLandscape(true);
        } else {
          await window.screen.orientation.lock("portrait");
          setIsLandscape(false);
        }
        return;
      }
    } catch {}
    setIsLandscape((prev) => !prev);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isNowFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isNowFullscreen);
      if (!isNowFullscreen) {
        try {
          if (typeof window !== "undefined" && window.screen?.orientation && typeof window.screen.orientation.unlock === "function") {
            window.screen.orientation.unlock();
          }
        } catch {}
        setIsLandscape(false);
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Keyboard navigation for Left / Right arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
        handleMouseMove();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
        handleMouseMove();
      } else if (e.key.toLowerCase() === "f" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        toggleFullscreenRef.current();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length]);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPaused, autoPlayInterval, images.length]);

  // Safely auto-scroll active thumbnail inside its isolated container ONLY (never shifts page)
  useEffect(() => {
    const container = thumbnailContainerRef.current;
    const activeThumb = thumbnailRefs.current[currentIndex];
    if (container && activeThumb) {
      const containerWidth = container.offsetWidth;
      const thumbLeft = activeThumb.offsetLeft;
      const thumbWidth = activeThumb.offsetWidth;
      const targetScroll = thumbLeft - containerWidth / 2 + thumbWidth / 2;
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  // Photos are mounted only once they are the current one or a neighbour, so a hack
  // with 15 photos does not download and decode all of them up front.
  const [mounted, setMounted] = useState(() => new Set([0, 1, images.length - 1]));
  useEffect(() => {
    setMounted((prev) => {
      const next = new Set(prev);
      const n = images.length;
      [currentIndex, (currentIndex + 1) % n, (currentIndex - 1 + n) % n].forEach((i) => next.add(i));
      return next.size === prev.size ? prev : next;
    });
  }, [currentIndex, images.length]);

  const currentImage = images[currentIndex] ?? images[0];

  return (
    <div
      ref={cardContainerRef}
      className={`group relative mx-auto w-full transition-all duration-300 ${
        isFullscreen
          ? "fixed inset-0 z-[9999] h-screen w-screen bg-black p-0 m-0 overflow-hidden"
          : ""
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsPaused(true);
        handleMouseMove();
      }}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Card Frame */}
      <div
        className={`relative overflow-hidden transition-all duration-300 ${
          isFullscreen
            ? "h-screen w-screen rounded-none border-none shadow-none bg-black"
            : "viewer-box-expand rounded-2xl sm:rounded-3xl border border-[var(--border-card)] shadow-[0_16px_50px_var(--shadow-card-lg)]"
        }`}
      >
        {/* Responsive Image Frame with Aspect Ratio */}
        <div
          onClick={handleFrameClick}
          className={`relative touch-manipulation select-none overflow-hidden w-full max-w-full ${
            isFullscreen
              ? "h-screen w-screen"
              : "h-[62vh] min-h-[350px] max-h-[520px] sm:h-auto sm:aspect-[16/10] md:aspect-[16/9.2] lg:aspect-[16/8.8] xl:aspect-[16/8.5] sm:min-h-[560px] md:min-h-[660px] lg:min-h-[740px] sm:max-h-[88vh]"
          }`}
        >
          {images.map((image, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={image.src}
                className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                  isActive ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                {mounted.has(index) && (
                  <img
                    src={image.src}
                    alt={image.caption || `Maas Hack Photo ${index + 1}`}
                    decoding="async"
                    className={`h-full w-full ${isFullscreen ? "object-contain sm:object-cover" : "object-cover"}`}
                  />
                )}
              </div>
            );
          })}

          {/* Subtle Top Gradient for Header Badges */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-20 bg-gradient-to-b from-black/50 to-transparent" />

          {/* Visible Side Navigation Arrows (when multi-image) */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={goToPrev}
                className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white shadow-xl transition-all duration-300 hover:bg-[var(--red-primary)] hover:border-transparent cursor-pointer opacity-85 hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white shadow-xl transition-all duration-300 hover:bg-[var(--red-primary)] hover:border-transparent cursor-pointer opacity-85 hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
            </>
          )}

          {/* Low Opacity Image Counter Badge */}
          {images.length > 1 && (
            <div className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-full bg-black/35 px-2 py-0.5 sm:px-2.5 sm:py-0.5 text-[0.65rem] sm:text-[0.7rem] font-medium text-white/80 border border-white/10 shadow-sm z-20">
              {currentIndex + 1} / {images.length}
            </div>
          )}

          {/* Bottom overlay: caption + controls */}
          <div className="viewer-bottom-overlay absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-3 pt-10 sm:p-5 sm:pt-14">
            {/* Image Caption */}
            {currentImage?.caption && (
              <p className="text-xs font-medium italic text-white/90 sm:text-sm">
                "{currentImage.caption}"
              </p>
            )}

            {/* Bottom control row: location left, thumbnails middle, date + fullscreen right */}
            <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:grid-cols-[minmax(max-content,1fr)_minmax(0,auto)_minmax(max-content,1fr)] sm:gap-5">
              {/* Location, bottom-left */}
              <div className="flex min-w-0 items-center">
                {locationhref ? (
                  <a
                    href={locationhref}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open in Maps"
                    className="viewer-loc-text inline-flex min-w-0 max-w-full items-center gap-1.5 text-sm font-bold sm:gap-2 sm:text-base text-white underline-offset-4 hover:underline"
                  >
                    <MapPin className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                    <span className="truncate">{location}</span>
                  </a>
                ) : (
                  <div className="viewer-loc-text inline-flex min-w-0 max-w-full items-center gap-1.5 text-sm font-bold sm:gap-2 sm:text-base text-white">
                    <MapPin className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                    <span className="truncate">{location}</span>
                  </div>
                )}
              </div>

              {images.length > 1 && thumbsMounted ? (
                <div
                  className={`order-first col-span-2 flex min-w-0 justify-center transition-opacity duration-300 sm:order-none sm:col-span-1 sm:max-w-[11rem] md:max-w-[17rem] lg:max-w-[32rem] xl:max-w-[46rem] 2xl:max-w-[56rem] ${
                    showThumbnails ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                <div
                  ref={thumbnailContainerRef}
                  className="flex w-fit max-w-full items-center gap-1.5 sm:gap-2.5 overflow-x-auto py-0.5 px-0.5 scroll-smooth scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex-nowrap"
                >
                  {images.map((image, index) => {
                    const isActive = index === currentIndex;
                    return (
                      <button
                        key={image.src}
                        ref={(el) => {
                          thumbnailRefs.current[index] = el;
                        }}
                        type="button"
                        onClick={() => goToIndex(index)}
                        className={`viewer-thumb-btn relative shrink-0 h-10 w-16 sm:h-14 sm:w-22 overflow-hidden rounded-lg sm:rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "border-[var(--red-primary)] ring-2 ring-[var(--red-primary)]/40 scale-105 shadow-md"
                            : "border-white/20 opacity-60 hover:opacity-100"
                        }`}
                        aria-label={`View photo ${index + 1}`}
                      >
                        <img
                          src={image.src}
                          alt={`Photo ${index + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
                </div>
              ) : (
                <div className="hidden sm:block" />
              )}

              <div className="flex items-center justify-end gap-2 sm:gap-3">
                {date && (
                  <span className="whitespace-nowrap text-[0.7rem] font-medium text-white/80 sm:text-sm">
                    {date}
                  </span>
                )}

                {/* Rotate Orientation Toggle (Visible in Fullscreen) */}
                {isFullscreen && (
                  <button
                    type="button"
                    onClick={toggleRotation}
                    className="viewer-ctrl-btn flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-black/50 text-white transition-colors hover:border-transparent hover:bg-white hover:text-black sm:h-9 sm:w-9"
                    aria-label="Rotate screen orientation"
                    title={isLandscape ? "Rotate to Portrait" : "Rotate to Landscape"}
                  >
                    <RotateCw
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isLandscape ? "rotate-90 text-[var(--red-primary)]" : ""
                      }`}
                    />
                  </button>
                )}

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="viewer-ctrl-btn flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-black/50 text-white transition-colors hover:border-transparent hover:bg-white hover:text-black sm:h-9 sm:w-9"
                  aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                  title={isFullscreen ? "Exit fullscreen (F)" : "Fullscreen (F)"}
                >
                  {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description: plain text under the viewer */}
      {!isFullscreen && (
        <p className="mt-5 px-1 text-base leading-relaxed text-[var(--foreground)]/85 sm:mt-6 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
