"use client";

import { useEffect, useRef, useState } from "react";

type MiniMeetup = {
  imgSrc: string;
  title: string;
  date: string;
};

// Tilt + vertical offset for each card in the desktop row
const rowLayouts = [
  { rotate: -5, y: 14 },
  { rotate: -2.5, y: -4 },
  { rotate: 1, y: 4 },
  { rotate: 4, y: -6 },
  { rotate: -3, y: 10 },
];

function getMobileTransform(offset: number) {
  switch (offset) {
    case 0:
      return { rotate: 0, x: 0, y: 0, scale: 1.05, z: 10, opacity: 1 };
    case 1:
      return { rotate: 7, x: 24, y: 8, scale: 0.92, z: 8, opacity: 0.85 };
    case -1:
      return { rotate: -7, x: -24, y: 8, scale: 0.92, z: 8, opacity: 0.85 };
    case 2:
      return { rotate: 14, x: 42, y: 16, scale: 0.84, z: 5, opacity: 0.6 };
    case -2:
      return { rotate: -14, x: -42, y: 16, scale: 0.84, z: 5, opacity: 0.6 };
    default:
      return { rotate: 0, x: 0, y: 30, scale: 0.8, z: 1, opacity: 0 };
  }
}

function signedOffset(i: number, active: number, n: number) {
  let off = (i - active + n) % n;
  if (off > n / 2) off -= n;
  return off;
}

function MaasupFrame({ meetup }: { meetup: MiniMeetup }) {
  return (
    <div className="maasup-frame">
      <img
        src={meetup.imgSrc}
        alt={meetup.title}
        draggable={false}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-sm font-semibold leading-tight text-white">{meetup.title}</h3>
        <p className="mt-1 text-xs text-white/75">{meetup.date}</p>
      </div>
    </div>
  );
}

export function MiniMaasupGallery({ meetups }: { meetups: MiniMeetup[] }) {
  const [active, setActive] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const n = meetups.length;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), {
      threshold: 0.05,
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Auto-cycle only drives the stacked fan (below lg); the desktop row is pure CSS.
  useEffect(() => {
    if (!isInView) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const id = setInterval(() => {
      if (document.hidden || desktop.matches) return;
      setActive((p) => (p + 1) % n);
    }, 3200);
    return () => clearInterval(id);
  }, [isInView, n]);

  return (
    <div ref={containerRef}>
      {/* Phone / tablet: stacked cycling fan */}
      <div className="relative flex h-[26rem] items-center justify-center [--spread:1] sm:h-[28rem] sm:[--spread:2] lg:hidden">
        {meetups.map((meetup, i) => {
          const off = signedOffset(i, active, n);
          if (Math.abs(off) > 2) return null;
          const pos = getMobileTransform(off);
          return (
            <div
              key={meetup.title}
              className="maasup-card-mobile absolute"
              style={{
                transform: `translate3d(calc(${pos.x}% * var(--spread)), ${pos.y}px, 0) rotate(${pos.rotate}deg) scale(${pos.scale})`,
                zIndex: pos.z,
                opacity: pos.opacity,
              }}
              onClick={() => setActive(i)}
            >
              <MaasupFrame meetup={meetup} />
            </div>
          );
        })}
      </div>

      {/* Desktop: every card in one row, sized so the row always fits */}
      <div className="maasup-row hidden py-10 lg:flex" style={{ "--n": n } as React.CSSProperties}>
        {meetups.map((meetup, i) => {
          const layout = rowLayouts[i % rowLayouts.length];
          return (
            <div
              key={meetup.title}
              className="maasup-row-card"
              style={{ "--r": `${layout.rotate}deg`, "--y": `${layout.y}px` } as React.CSSProperties}
            >
              <MaasupFrame meetup={meetup} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
