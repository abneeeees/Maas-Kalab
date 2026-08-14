"use client";

import { Footer } from "@/components/Footer";
import { Navbar, type NavItem } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import {
  MaashackMinibox,
  type InfoCardProps,
} from "@/components/maashack_minibox";

const navItems: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Maas Hack", href: "/#mass-hack" },
  { label: "Meets", href: "/#mini-meetups" },
  { label: "Members", href: "/#members" },
  { label: "Resources", href: "/#resources" },
  { label: "Join", href: "/#join" },
];

const infoCards: InfoCardProps[] = [
  {
    imgSrc: "/maashack_page/one/maashack_1.webp",
    alt: "hack 1",
    description: "Jama masjid",
    date: "04-10-25",
    link: "/maashacks/1",
    hack_name: "Maas Hack 1.0",
  },
  {
    imgSrc: "/maashack_page/two/maashack_2.webp",
    alt: "hack 2",
    description: "Shaheen Bagh",
    date: "28-11-25",
    link: "/maashacks/2",
    hack_name: "Maas Hack 2.0",
  },
  {
    imgSrc: "/maashack_page/three/maashack_3.webp",
    alt: "hack 3",
    description: "Shaheen Bagh",
    date: "05-03-26",
    link: "/maashacks/3",
    hack_name: "Maas Hack 3.0",
  },
  {
    imgSrc: "/maashack_page/four/maashack_4.webp",
    alt: "hack 4",
    description: "Zakhir Nagar",
    date: "15-04-26",
    link: "/maashacks/4",
    hack_name: "Maas Hack 4.0",
  },
  {
    imgSrc: "/miniMeetups/post_istifa.png",
    alt: "hack 5",
    description: "Shaheen Bagh",
    date: "27-07-26",
    link: "/maashacks/5",
    hack_name: "Maas Hack 5.0",
  },
];

export default function Home() {
  return (
    <>
      <Navbar navItems={navItems} />

      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
        {/* Top Ambient Light Sheen */}
        <div
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[95vw] max-w-5xl h-[380px] rounded-full bg-gradient-to-b from-[var(--red-primary)]/15 via-[var(--amber-accent)]/8 to-transparent blur-3xl opacity-80"
          aria-hidden
        />
        <div className="relative z-[1] mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
          <div className="heading-rise-up">
            <SectionHeading
              title="Maas Hack"
              description="Maas Kalab's flagship program. We meet and Eat (A Lot)"
            />
          </div>

          <MaashackMinibox infoCardProps={infoCards} />
        </div>
      </section>

      <Footer />
    </>
  );
}
