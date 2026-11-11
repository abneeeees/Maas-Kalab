"use client";

import { useCallback, useRef, useState, useEffect } from "react";
import { ResourceCard } from "@/components/ResourceCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const tickingRef = useRef(false);

  const checkScroll = useCallback(() => {
    if (tickingRef.current) return;
    tickingRef.current = true;

    window.requestAnimationFrame(() => {
      const el = scrollRef.current;
      if (el) {
        const nextLeft = el.scrollLeft > 8;
        const nextRight = el.scrollLeft + el.clientWidth < el.scrollWidth - 8;
        setCanLeft((prev) => (prev !== nextLeft ? nextLeft : prev));
        setCanRight((prev) => (prev !== nextRight ? nextRight : prev));
      }
      tickingRef.current = false;
    });
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll, { passive: true });
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
          className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-card)] bg-[var(--card-surface)] text-[var(--red-primary)] shadow-[0_4px_16px_var(--shadow-card)] transition hover:border-[var(--red-primary)] sm:-left-5"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
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
          className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-card)] bg-[var(--card-surface)] text-[var(--red-primary)] shadow-[0_4px_16px_var(--shadow-card)] transition hover:border-[var(--red-primary)] sm:-right-5"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
