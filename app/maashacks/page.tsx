import { Footer } from "@/components/Footer";
import { Navbar, type NavItem } from "@/components/Navbar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  MaashackMinibox,
  type InfoCardProps,
} from "@/components/maashack_minibox";

const navItems: NavItem[] = [
  { label: "Home", href: "/#" },
  { label: "Maas Hack", href: "/maashacks" },
];

const infoCards: InfoCardProps[] = [
  {
    imgSrc: "/maashack_page/one/maashack_1.png",
    alt: "hack 1",
    description: "Jama masjid",
    date: "04-10-25",
    link: "/maashacks/1",
    hack_name: "Maas Hack 1.0",
  },
  {
    imgSrc: "/maashack_page/two/maashack_2.png",
    alt: "hack 2",
    description: "Shaheen Bagh",
    date: "28-11-25",
    link: "/maashacks/2",
    hack_name: "Maas Hack 2.0",
  },
  {
    imgSrc: "/maashack_page/three/maashack_3.png",
    alt: "hack 3",
    description: "Shaheen Bagh",
    date: "05-03-26",
    link: "/maashacks/3",
    hack_name: "Maas Hack 3.0",
  },
  {
    imgSrc: "/maashack_page/four/maashack_4.png",
    alt: "hack 4",
    description: "Zakhir Nagar",
    date: "15-04-26",
    link: "/maashacks/4",
    hack_name: "Maas Hack 4.0",
  },
];

export default function Home() {
  return (
    <>
      <Navbar navItems={navItems} />

      <section>
        <div className="relative z-\[1]\ mx-auto max-w-6xl px-6 py-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <SectionHeading
              title="MAAS HACK"
              description="Maas Kalab's flagship program. We meet and Eat (A Lot)"
            />
          </ScrollReveal>

          <MaashackMinibox infoCardProps={infoCards} />
        </div>
      </section>

      <Footer />
    </>
  );
}
