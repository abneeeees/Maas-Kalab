import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { InfoCard } from "@/components/InfoCard";
import { MaasHackCarousel } from "@/components/MaasHackCarousel";
import { MiniMaasupGallery } from "@/components/MiniMaasupGallery";
import { Navbar } from "@/components/Navbar";
import { ResourceCard } from "@/components/ResourceCard";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FoodMarquee } from "@/components/TrilingualStrip";

const members = [
  { name: "Mallu", description: "President of Maas Kalab" },
  { name: "Sejal", description: "Maas Enthusiast" },
  { name: "exhidna tea", description: "Vice President of Maas Kalab" },
  { name: "abneeeees", description: "Food Inspector of Maas Kalab" },
  { name: "V8", description: "Event Coordinator of Maas Kalab" },
  { name: "LilSuperUser", description: "Maas Enthusiast" },
  { name: "Karan", description: "Maas Enthusiast" },
  { name: "K2", description: "Maas Man" },
];

const resources = [
  {
    imgSrc: "resources/gulrez_kabab_corner.png",
    title: "Gulrez Kabab Corner",
    description: "placeholder",
    addr: "https://share.google/pQdWHFnzm1GzWbmio",
  },
  {
    imgSrc: "resources/hafiz_ji_parathe_wale.png",
    title: "HAFIZ JI PARATHE WALE",
    description: "placeholder",
    addr: "https://share.google/0aaDdAPEPtuRPNXY3",
  },
  {
    imgSrc: "resources/imran_nihari_shop.png",
    title: "Imran Nihari Shop Turkmangate Delhi",
    description: "placeholder",
    addr: "https://share.google/v9UlFeH1g9ChM4Z2E",
  },
  {
    imgSrc: "resources/sangam_kabab_corner.png",
    title: "Sangam Kabab Corner",
    description: "placeholder",
    addr: "https://share.google/zb9N2rAmisskdVEko",
  },
  {
    imgSrc: "resources/talib_kabab_corner.png",
    title: "TALIB KABAB CORNER",
    description: "placeholder",
    addr: "https://share.google/TZayhAx1eB3KFdZAE",
  },
  {
    imgSrc: "resources/al_nihar.png",
    title: "Al Nihar",
    description: "placeholder",
    addr: "https://share.google/5e6EiHaIjbW2qFqDB1",
  },
  {
    imgSrc: "resources/pul_bangash_wale.png",
    title: "Pul Bangash Wale",
    description: "placeholder",
    addr: "https://share.google/aJb6xXr61kKSJ9fNx",
  },
];

const massHackSlides = [
  {
    imgSrc: "maashack/maashack_1.png",
    title: "Maas Hack 1.0",
    description: "placeholder",
    date: "04-10-25",
    href: "/masshacks/1",
  },
  {
    imgSrc: "maashack/maashack_2.png",
    title: "Maas Hack 2.0",
    description: "placeholder",
    date: "28-11-25",
    href: "/masshacks/2",
  },
  {
    imgSrc: "maashack/maashack_3.png",
    title: "Maas Hack 3.0",
    description: "placeholder",
    date: "05-03-26",
    href: "/masshacks/3",
  },
  {
    imgSrc: "maashack/maashack_4.png",
    title: "Maas Hack 4.0",
    description: "placeholder",
    date: "15-04-26",
    href: "/masshacks/4",
  },
];

const miniMeetups = [
  {
    imgSrc: "miniMeetups/briyani.png",
    title: "Briyani shop near Kolez",
    description: "Placeholder",
    date: "5-12-2025",
  },
  {
    imgSrc: "miniMeetups/gulawati_kebab.png",
    title: "Adarsh Ka Laptop",
    description: "placeholder",
    date: "16-02-2026",
  },
  {
    imgSrc: "miniMeetups/humayun_tomb.png",
    title: "Happy B'day",
    description: "placeholder",
    date: "18-03-2026",
  },
  {
    imgSrc: "miniMeetups/post_foss_hack.png",
    title: "Post FOSS Hack",
    description: "placeholder",
    date: "29-03-2026 - 31-03-2026",
  },
  {
    imgSrc: "miniMeetups/Om_ki_briyani.png",
    title: "Om ki Briyani",
    description: "placeholder",
    date: "10-04-2026",
  },
];

const clubHighlights = [
  {
    title: "About Maas Kalab",
    description:
      "Maas Kalab is a community of Maas Khors from Dilli — those who love to eat and cook Maas.",
  },
  {
    title: "Maas Hacks and Meetups",
    description:
      "Maas Hack is our flagship event and we even do some mini events time to time.",
  },
  {
    title: "What we eat?",
    description:
      "Nihari, Biryani, Shwarma, Kebab, Paratha, Kakori Kebab, Gulawati Kebab, Keema etc.",
  },
  {
    title: "Motto",
    description: "'jo Maas khaye wo mera bhai' ~ Karan",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection highlights={clubHighlights} />

        <FoodMarquee />

        <section
          id="mass-hack"
          className="relative overflow-x-hidden px-6 py-20 sm:px-10 lg:px-16"
        >
          <img
            src="/decor/seekh-kababs.png"
            alt=""
            aria-hidden
            className="pointer-events-none absolute right-0 top-[42%] z-0 hidden w-[5rem] translate-x-[12%] rotate-[10deg] select-none opacity-[0.34] drop-shadow-[0_6px_18px_var(--decor-shadow)] sm:block md:right-2 md:w-[5.75rem] lg:top-[38%]"
          />
          <div className="relative z-[1] mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                title="MAAS HACK"
                description="Maas Kalab's flagship program. We meet and Eat (A Lot)"
              />
            </ScrollReveal>
            <MaasHackCarousel slides={massHackSlides} />
          </div>
        </section>

        <section id="mini-meetups" className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                title="Mini Maasups"
                description="Other than Maas Hacks, Maas Kalab hosts some mini meetups too!"
              />
            </ScrollReveal>
            <MiniMaasupGallery meetups={miniMeetups} />
          </div>
        </section>

        <FoodMarquee />

        <section id="members" className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                title="Maas Khors"
                description="All the Maas khors from the Maas kalab"
              />
            </ScrollReveal>
            <StaggerContainer className="grid gap-5 md:grid-cols-4">
              {members.map((member) => (
                <StaggerItem key={member.name}>
                  <div className="flex h-full flex-col items-center justify-center space-y-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-surface)] p-6 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--member-orb-from)] to-[var(--member-orb-to)] text-sm font-bold text-[var(--member-orb-text)]">
                      {member.name}
                    </div>
                    <p className="text-center text-sm text-[var(--text-muted)]">
                      {member.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section id="join" className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <ScrollReveal direction="left">
              <SectionHeading
                title="Become a Maas Khor"
                description="Tap the Join Now button"
              />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid gap-4">
                <InfoCard
                  title="whatsapp/@masskalab"
                  link="https://chat.whatsapp.com/HFMab1ihd6V1loDslSDZk6"
                />
                <InfoCard
                  title="Github/@masskalab"
                  link="https://github.com/abneeeees/Maas-Kalab/"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="resources" className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                title="Resources"
                description="All the Maas Places you can go in dilli"
              />
            </ScrollReveal>
            <StaggerContainer className="grid gap-5 md:grid-cols-3">
              {resources.map((resource) => (
                <StaggerItem key={resource.title}>
                  <ResourceCard
                    imgSrc={resource.imgSrc}
                    title={resource.title}
                    description={resource.description}
                    addr={resource.addr}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
