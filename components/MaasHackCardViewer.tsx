"use client";

import { useEffect, useState } from "react";

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
};

export function MaasHackCardViewer({
  images,
  location,
  description,
  date,
  locationhref,
  autoPlayInterval = 200,
}: MaasHackCardViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

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

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPaused, autoPlayInterval, images.length]);

  const currentImage = images[currentIndex];

  return (
    <div
      className="relative mx-auto w-full max-w-4xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Card */}
      <div className="relative overflow-hidden rounded-3xl border border-[var(--nav-border)] bg-[var(--nav-bg-scrolled)] shadow-[0_8px_40px_var(--nav-shadow)] backdrop-blur-xl">
        {/* Image Container */}
        <div
          className="relative aspect-[16/10] overflow-hidden sm:aspect-[2/1] cursor-pointer"
          onClick={goToNext}
        >
          {images.map((image, index) => {
            const isActive = index === currentIndex;
            const isNext = index === (currentIndex + 1) % images.length;
            const isPrev = index === (currentIndex - 1 + images.length) % images.length;

            return (
              <div
                key={image.src}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  isActive
                    ? "opacity-100 scale-100 blur-0"
                    : isNext
                    ? "opacity-0 scale-110 blur-sm"
                    : isPrev
                    ? "opacity-0 scale-90 blur-sm"
                    : "opacity-0 scale-100 blur-md"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.caption || `Maas Hack ${currentIndex + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--nav-bg-scrolled)] via-transparent to-transparent" />

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--nav-border)] bg-[var(--nav-bg-scrolled)]/80 text-2xl font-semibold text-[var(--foreground)] opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[var(--red-primary)] hover:text-white group-hover:opacity-100 sm:left-6 sm:h-14 sm:w-14"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--nav-border)] bg-[var(--nav-bg-scrolled)]/80 text-2xl font-semibold text-[var(--foreground)] opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[var(--red-primary)] hover:text-white group-hover:opacity-100 sm:right-6 sm:h-14 sm:w-14"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image Counter */}
          <div className="absolute right-4 top-4 rounded-full bg-[var(--nav-bg-scrolled)]/90 px-3 py-1.5 text-xs font-bold text-[var(--foreground)] backdrop-blur-md border border-[var(--nav-border)]">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Date Badge */}
          {date && (
            <div className="absolute left-4 top-4 rounded-full bg-[var(--red-primary)] px-4 py-1.5 text-xs font-bold text-white shadow-lg">
              {date}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="relative px-6 py-5 sm:px-8 sm:py-6">
          {/* Location */}
          <a href={locationhref}>
            <div className="mb-3 flex items-center gap-2">
              <svg
                className="h-5 w-5 text-[var(--red-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
                <span className="text-lg font-bold text-[var(--foreground)]">
                  {location}
                </span>
            </div>
          </a>

          {/* Description */}
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            {description}
          </p>

          {/* Image Caption (if available) */}
          {currentImage.caption && (
            <p className="mt-3 text-xs font-medium italic text-[var(--red-primary)]">
              {currentImage.caption}
            </p>
          )}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-6 flex justify-center gap-2 sm:gap-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            onClick={() => goToIndex(index)}
            className={`group relative h-16 w-24 overflow-hidden rounded-xl border-2 transition-all duration-300 sm:h-20 sm:w-32 ${
              index === currentIndex
                ? "scale-110 border-[var(--red-primary)] shadow-[0_4px_20px_rgba(127,29,29,0.3)]"
                : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
            }`}
          >
            <img
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {index === currentIndex && (
              <div className="absolute inset-0 bg-[var(--red-primary)]/20" />
            )}
          </button>
        ))}
      </div>

      {/* Progress Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-[var(--red-primary)]"
                : "w-2.5 bg-[var(--dot-inactive)] hover:bg-[var(--dot-active)]"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
