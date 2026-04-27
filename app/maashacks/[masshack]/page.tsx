"use client";

import { Navbar, type NavItem } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import MaasHackDropdown from "@/components/MaasHackDropdown";
import MaasHackNavigation from "@/components/maashack_navigation";
import { MaasHackCardViewer } from "@/components/MaasHackCardViewer";
import { useParams } from "next/navigation";
import { ScrollReveal } from "@/components/ScrollReveal";

const navItems: NavItem[] = [
  { label: "Home", href: "/#" },
  { label: "MaasHacks", href: "/maashacks" },
];

// Mass hack data for each edition
const massHackData: Record<
  string,
  {
    title: string;
    location: string;
    description: string;
    date: string;
    locationhref: string;
    images: { src: string; caption?: string }[];
  }
> = {
  "1": {
    title: "Maas Hack 1.0",
    location: "Jama Masjid, Delhi",
    description:
    "The inaugural of Maas Hacks! We explored the legendary lanes of Jama Masjid, indulging in authentic Chicken Korma and crispy Chicken Fry. The aromatic spices and traditional cooking methods made this an unforgettable culinary journey through Old Delhi's heritage.",
    date: "04 Oct 2025",
    locationhref: "https://maps.app.goo.gl/ffj4ZwSTzKrhMQxU7",
    images: [
      { src: "/maashack_page/one/maashack_1.webp", caption: ""},
      { src: "/maashack_page/one/ashwani.webp", caption: ""},
      { src: "/maashack_page/one/chicken_fry.webp", caption: ""},
      { src: "/maashack_page/one/jama_masjid.webp", caption: ""},
    ],
  },
  "2": {
    title: "Maas Hack 2.0",
    location: "Shaheen Bagh, Delhi",
    description:
      "Maas Hack 2.0 took us to Shaheen Bagh where we savored delicious Chicken Mandi, flavorful Chicken Rolls, and succulent Seekh Kababs. The perfect blend of aromatic rice and tender meat made this meetup truly special.",
    date: "28 Nov 2025",
    locationhref: "https://maps.app.goo.gl/eDWUVSp9DUSPJSSM9",
    images: [
      { src: "/maashack_page/two/maashack_2.webp", caption: ""},
      { src: "/maashack_page/two/three_gng.webp", caption: ""},
      { src: "/maashack_page/two/mandi.webp", caption: ""},
      { src: "/maashack_page/two/gng_again.webp", caption: ""},
      { src: "/maashack_page/two/chai.webp", caption: ""},
      { src: "/maashack_page/two/car.webp", caption: ""},
    ],
  },
  "3": {
    title: "Maas Hack 3.0",
    location: "Shaheen Bagh, Delhi",
    description:
      "Round two at Shaheen Bagh! This time we had an even grander feast with Seekh Kababs, Nihari, Fish Fry, Shwarma, and the legendary Gulawati Kebab rolls. A true celebration of meat lovers' paradise.",
    date: "05 Mar 2026",
    locationhref: "https://maps.app.goo.gl/eDWUVSp9DUSPJSSM9",
    images: [
      { src: "/maashack_page/three/maashack_3.webp", caption: "" },
      { src: "/maashack_page/three/tea.webp", caption: "" },
      { src: "/maashack_page/three/gng_at_nihari.webp", caption: "" },
      { src: "/maashack_page/three/seekh_kebab.webp", caption: "" },
      { src: "/maashack_page/three/mas.webp", caption: "" },
      { src: "/maashack_page/three/fish_fry.webp", caption: "" },
      { src: "/maashack_page/three/shwarma.webp", caption: "" },
      { src: "/maashack_page/three/nihari.webp", caption: "" },
      { src: "/maashack_page/three/nihari_on_plate.webp", caption: "" }
    ],
  },
  "4": {
    title: "Maas Hack 4.0",
    location: "Zakir Nagar, Delhi",
    description:
      "Maas Hack 4.0 brought us to Zakir Nagar for an authentic Lucknowi experience. We enjoyed Galawati Buff Kebabs, Buff Keema, Varghi Parathas, and both roasted and fried chicken. The melt-in-your-mouth kebabs were pure magic.",
    date: "15 Apr 2026",
    locationhref: "https://maps.app.goo.gl/sjg7RxFvmjQFcMNi9",
    images: [
      { src: "/maashack_page/four/maashack_4.webp", caption: "" },
      { src: "/maashack_page/four/afsar.webp", caption: "" },
      { src: "/maashack_page/four/crowd.webp", caption: "" },
      { src: "/maashack_page/four/cutw_uncle.webp", caption: "" },
      { src: "/maashack_page/four/dogi.webp", caption: "" },
      { src: "/maashack_page/four/drinking_and_shi.webp", caption: "" },
      { src: "/maashack_page/four/fruit.webp", caption: "" },
      { src: "/maashack_page/four/zkn.webp", caption: "" },
      { src: "/maashack_page/four/mosque.webp", caption: "" },
      { src: "/maashack_page/four/peak_on_plate.webp", caption: "" },
      { src: "/maashack_page/four/peak.webp", caption: "" },
      { src: "/maashack_page/four/roasted_again.webp", caption: "" },
      { src: "/maashack_page/four/roasted.webp", caption: "" },
      { src: "/maashack_page/four/sweety.webp", caption: "" },
      { src: "/maashack_page/four/we_ate.webp", caption: "" }
    ],
  },
};

export default function MaasHackPage() {
  const params = useParams();
  const masshackId = params.masshack as string;
  const data = massHackData[masshackId];

  const currentHackNum = parseInt(masshackId, 10);
  const totalHacks = Object.keys(massHackData).length;

  if (!data) {
    return (
      <>
        <Navbar navItems={navItems} />
        <main className="flex min-h-screen flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[var(--foreground)]">
              Maas Hack Not Found
            </h1>
            <p className="mt-4 text-[var(--text-muted)]">
              This Maas Hack edition doesn&apos;t exist yet.
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar
        navItems={navItems}
        rightContent={
          <div className="flex items-center gap-3">
            <MaasHackDropdown currentHack={currentHackNum} totalHacks={totalHacks} />
          </div>
        }
      />

      <main className="flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <ScrollReveal>
              <h1 className="bg-gradient-to-r from-[var(--red-primary)] to-[var(--amber-accent)] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                {data.title}
              </h1>
              <p className="mt-3 text-sm font-medium text-[var(--red-primary)] sm:text-base">
                {data.date}
              </p>
            </ScrollReveal>
          </div>

          {/* Image Card Viewer */}
          <MaasHackCardViewer
            images={data.images}
            location={data.location}
            locationhref={data.locationhref}
            description={data.description}
            date={data.date}
            autoPlayInterval={4000}
          />

          {/* Navigation Buttons */}
          <MaasHackNavigation
            previousHack={currentHackNum > 1 ? `/maashacks/${currentHackNum - 1}` : undefined}
            nextHack={currentHackNum < totalHacks ? `/maashacks/${currentHackNum + 1}` : undefined}
          />

          {/* Additional Info Section */}
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-[var(--border-card)] bg-[var(--card-surface)] p-6 shadow-[0_4px_20px_var(--shadow-card-lg)]">
            <h2 className="mb-4 text-center text-xl font-bold text-[var(--foreground)]">
              About This Maas Hack
            </h2>
            <div className="space-y-3 text-sm text-[var(--text-muted)]">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-[var(--red-primary)]">📍</span>
                <div>
                  <span className="font-semibold text-[var(--foreground)]">Location:</span>{" "}
                  {data.location}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-[var(--red-primary)]">📅</span>
                <div>
                  <span className="font-semibold text-[var(--foreground)]">Date:</span>{" "}
                  {data.date}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-[var(--red-primary)]">🍗</span>
                <div>
                  <span className="font-semibold text-[var(--foreground)]">Edition:</span>{" "}
                  #{currentHackNum}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
