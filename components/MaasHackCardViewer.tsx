"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Maximize2, Minimize2 } from "lucide-react";

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
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleMouseMove = () => {
    setShowThumbnails(true);
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

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        if (cardContainerRef.current?.requestFullscreen) {
          await cardContainerRef.current.requestFullscreen();
        } else {
          setIsFullscreen(true);
        }
        // Lock screen orientation to landscape on mobile devices
        try {
          if (typeof window !== "undefined" && window.screen?.orientation && typeof window.screen.orientation.lock === "function") {
            await window.screen.orientation.lock("landscape");
          }
        } catch {
          // Orientation lock might not be supported or allowed by browser policy
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
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else {
        setIsFullscreen(false);
      }
    }
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
          className={`relative overflow-hidden w-full max-w-full ${
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
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  isActive
                    ? "opacity-100 scale-100 blur-0"
                    : "opacity-0 scale-105 blur-sm pointer-events-none"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.caption || `Maas Hack Photo ${index + 1}`}
                  className={`h-full w-full ${isFullscreen ? "object-contain sm:object-cover" : "object-cover"}`}
                />
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
                className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[var(--red-primary)] hover:border-transparent active:scale-95 cursor-pointer opacity-85 hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[var(--red-primary)] hover:border-transparent active:scale-95 cursor-pointer opacity-85 hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
            </>
          )}

          {/* Low Opacity Image Counter Badge */}
          {images.length > 1 && (
            <div className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-full bg-black/35 px-2 py-0.5 sm:px-2.5 sm:py-0.5 text-[0.65rem] sm:text-[0.7rem] font-medium text-white/80 backdrop-blur-sm border border-white/10 shadow-sm z-20">
              {currentIndex + 1} / {images.length}
            </div>
          )}

          {/* Bottom Frosted Blur Gradient Overlay with Content */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-7 md:p-8 bg-gradient-to-t from-black/95 via-black/60 to-transparent backdrop-blur-[3px] z-10">
            {/* Single Row Hover-Triggered Thumbnail Strip with Pointer Inactivity Auto-Hide */}
            {images.length > 1 && (
              <div
                className={`mb-2.5 sm:mb-3.5 w-full flex justify-center overflow-hidden transition-all duration-500 ease-out ${
                  showThumbnails
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div
                  ref={thumbnailContainerRef}
                  className="w-fit max-w-full mx-auto flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto py-1 px-0.5 scroll-smooth scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex-nowrap"
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
                        className={`relative shrink-0 h-9 w-14 sm:h-14 sm:w-22 overflow-hidden rounded-lg sm:rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "border-[var(--red-primary)] ring-2 ring-[var(--red-primary)]/40 scale-105 shadow-md"
                            : "border-white/20 opacity-60 hover:opacity-100 hover:scale-105"
                        }`}
                        aria-label={`View photo ${index + 1}`}
                      >
                        <img
                          src={image.src}
                          alt={`Photo ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Location & Parallel Date/Fullscreen Row */}
            <div className="flex items-center justify-between gap-2 mb-1 sm:mb-1.5 w-full">
              {locationhref ? (
                <a
                  href={locationhref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/loc min-w-0 flex-1 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base md:text-xl font-bold text-white hover:text-[var(--red-primary)] transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-white shrink-0 transition-transform duration-200 group-hover/loc:scale-110" />
                  <span className="truncate">{location}</span>
                  <span className="hidden sm:inline text-[0.65rem] sm:text-xs text-white/70 opacity-0 transition-opacity duration-200 group-hover/loc:opacity-100">
                    (Open in Maps ↗)
                  </span>
                </a>
              ) : (
                <div className="min-w-0 flex-1 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base md:text-xl font-bold text-white">
                  <MapPin className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-white shrink-0" />
                  <span className="truncate">{location}</span>
                </div>
              )}

              <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
                {date && (
                  <span className="text-[0.65rem] sm:text-xs md:text-sm font-medium text-white/80 whitespace-nowrap">
                    {date}
                  </span>
                )}

                {/* Fullscreen Toggle Button */}
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="flex h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black hover:border-transparent active:scale-95 cursor-pointer"
                  aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                  title={isFullscreen ? "Exit Fullscreen (Esc)" : "Fullscreen"}
                >
                  {isFullscreen ? (
                    <Minimize2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  ) : (
                    <Maximize2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-white/85 max-w-4xl line-clamp-3 sm:line-clamp-none">
              {description}
            </p>

            {/* Image Caption */}
            {currentImage?.caption && (
              <p className="mt-1.5 sm:mt-2 text-[0.7rem] sm:text-sm font-medium italic text-[var(--red-primary)]">
                "{currentImage.caption}"
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
