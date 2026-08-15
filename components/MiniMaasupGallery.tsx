"use client";

import { useEffect, useRef, useState } from "react";

type MiniMeetup = {
  imgSrc: string;
  title: string;
  description: string;
  date: string;
};

const desktopLayouts = [
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

export function MiniMaasupGallery({ meetups }: { meetups: MiniMeetup[] }) {
  const [active, setActive] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const n = meetups.length;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const id = setInterval(() => {
      if (document.hidden) return;
      setActive((p) => (p + 1) % n);
    }, 3200);
    return () => clearInterval(id);
  }, [isInView, n]);

  return (
    <div ref={containerRef}>
      {/* Mobile: stacked cycling fan */}
      <div className="relative flex items-center justify-center sm:hidden" style={{ height: "26rem" }}>
        {meetups.map((meetup, i) => {
          const off = signedOffset(i, active, n);
          if (Math.abs(off) > 2) return null;
          const pos = getMobileTransform(off);
          return (
            <div
              key={meetup.title}
              className="maasup-card-mobile absolute"
              style={{
                transform: `translate3d(${pos.x}%, ${pos.y}px, 0) rotate(${pos.rotate}deg) scale(${pos.scale})`,
                zIndex: pos.z,
                opacity: pos.opacity,
              }}
              onClick={() => setActive(i)}
            >
              <div className="maasup-frame">
                <img
                  src={meetup.imgSrc}
                  alt={meetup.title}
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-sm font-semibold leading-tight text-white">
                    {meetup.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/75">
                    {meetup.date}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop: spread fan */}
      <div className="hidden items-center justify-center py-10 sm:flex">
        <div className="maasup-fan flex items-center">
          {meetups.map((meetup, i) => {
            const layout = desktopLayouts[i % desktopLayouts.length];
            return (
              <div
                key={meetup.title}
                className="maasup-card"
                style={{
                  transform: `rotate(${layout.rotate}deg) translateY(${layout.y}px)`,
                  zIndex: i + 1,
                }}
              >
                <div className="maasup-frame">
                  <img
                    src={meetup.imgSrc}
                    alt={meetup.title}
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="text-[0.8rem] font-semibold leading-tight text-white sm:text-sm">
                      {meetup.title}
                    </h3>
                    <p className="mt-0.5 text-[0.65rem] text-white/65 sm:text-xs">
                      {meetup.date}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
