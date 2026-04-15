"use client";

import { useEffect, useState } from "react";

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
      return { rotate: 0, x: 0, y: 0, scale: 1.04, z: 10, opacity: 1 };
    case 1:
      return { rotate: 8, x: 28, y: 6, scale: 0.93, z: 8, opacity: 0.85 };
    case -1:
      return { rotate: -8, x: -28, y: 6, scale: 0.93, z: 8, opacity: 0.85 };
    case 2:
      return { rotate: 15, x: 48, y: 14, scale: 0.85, z: 5, opacity: 0.6 };
    case -2:
      return { rotate: -15, x: -48, y: 14, scale: 0.85, z: 5, opacity: 0.6 };
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
  const n = meetups.length;

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % n);
    }, 3000);
    return () => clearInterval(id);
  }, [n]);

  return (
    <>
      {/* Mobile: stacked cycling fan */}
      <div className="relative flex items-center justify-center sm:hidden" style={{ height: "22rem" }}>
        {meetups.map((meetup, i) => {
          const off = signedOffset(i, active, n);
          const pos = getMobileTransform(off);
          return (
            <div
              key={meetup.title}
              className="maasup-card-mobile absolute"
              style={{
                transform: `translateX(${pos.x}%) rotate(${pos.rotate}deg) translateY(${pos.y}px) scale(${pos.scale})`,
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
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-[0.8rem] font-semibold leading-tight text-white">
                    {meetup.title}
                  </h3>
                  <p className="mt-0.5 text-[0.65rem] text-white/65">
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
    </>
  );
}
