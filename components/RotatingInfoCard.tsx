"use client";

import { useEffect, useState } from "react";

type RotatingInfoCardItem = {
  title: string;
  description: string;
};

type RotatingInfoCardProps = {
  items: RotatingInfoCardItem[];
};

export function RotatingInfoCard({ items }: RotatingInfoCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (items.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setIsVisible(false);

      window.setTimeout(() => {
        setActiveIndex((current) => (current + 1) % items.length);
        setIsVisible(true);
      }, 350);
    }, 3800);

    return () => window.clearInterval(interval);
  }, [items.length]);

  const showNextCard = () => {
    if (items.length <= 1) {
      return;
    }

    setIsVisible(false);

    window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % items.length);
      setIsVisible(true);
    }, 5);
  };

  const activeItem = items[activeIndex];

  return (
    <button
      type="button"
      onClick={showNextCard}
      onTouchStart={showNextCard}
      className="w-full text-left"
      aria-label="Show next club highlight"
    >
      <article className="flex min-h-[320px] flex-col justify-between rounded-[1.5rem] border border-stone-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,240,232,0.92))] p-8 shadow-[0_10px_35px_rgba(28,25,23,0.06)] sm:min-h-[360px] sm:p-10">
        <div
          className={`space-y-4 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <h3 className="max-w-lg text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
            {activeItem.title}
          </h3>
          <p className="max-w-xl text-base leading-7 text-stone-700 sm:text-lg">
            {activeItem.description}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900/10 dark:bg-white/5 border border-stone-900/10 dark:border-white/10 backdrop-blur-md">
            {items.map((item, index) => (
              <span
                key={item.title}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-5 h-2 bg-[var(--red-primary)] shadow-sm"
                    : "w-2 h-2 bg-stone-400/40 dark:bg-white/20"
                }`}
              />
            ))}
          </div>
          <p className="text-sm font-medium text-stone-500">
            Click to switch
          </p>
        </div>
      </article>
    </button>
  );
}
