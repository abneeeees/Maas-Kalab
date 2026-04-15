"use client";

import { useCallback, useRef, useState, useEffect } from "react";
import { ResourceCard } from "@/components/ResourceCard";

type Resource = {
  imgSrc: string;
  title: string;
  description: string;
  addr: string;
};

export function ResourceGrid({ resources }: { resources: Resource[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canRight, setCanRight] = useState(false);
  const [canLeft, setCanLeft] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  const scroll = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {canLeft && (
        <button
          type="button"
          onClick={() => scroll(-1)}
          className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-card)] bg-[var(--card-surface)] text-lg text-[var(--red-primary)] shadow-[0_4px_16px_var(--shadow-card)] transition hover:border-[var(--red-primary)] sm:-left-5"
          aria-label="Scroll left"
        >
          ‹
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="resource-scroll flex gap-4 overflow-x-auto pb-2 sm:gap-5"
      >
        {resources.map((r) => (
          <div
            key={r.title}
            className="w-[min(86%,20rem)] shrink-0 sm:w-[calc(33.333%-14px)]"
          >
            <ResourceCard
              imgSrc={r.imgSrc}
              title={r.title}
              description={r.description}
              addr={r.addr}
            />
          </div>
        ))}
      </div>

      {canRight && (
        <button
          type="button"
          onClick={() => scroll(1)}
          className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-card)] bg-[var(--card-surface)] text-lg text-[var(--red-primary)] shadow-[0_4px_16px_var(--shadow-card)] transition hover:border-[var(--red-primary)] sm:-right-5"
          aria-label="Scroll right"
        >
          ›
        </button>
      )}
    </div>
  );
}
