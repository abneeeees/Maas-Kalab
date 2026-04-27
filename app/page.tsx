import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { MaasHackCarousel } from "@/components/MaasHackCarousel";
import { MiniMaasupGallery } from "@/components/MiniMaasupGallery";
import { Navbar, type NavItem } from "@/components/Navbar";
import { ResourceGrid } from "@/components/ResourceGrid";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FoodMarquee } from "@/components/TrilingualStrip";

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Meets", href: "#mass-hack" },
  { label: "Members", href: "#members" },
  { label: "Join", href: "#join" },
  { label: "Resources", href: "#resources" },
  { label: "MaasHacks", href: "/maashacks" },
];

const members = [
  { name: "Mallu", description: "President of Maas Kalab"},
  { name: "Mango", description: "Prime Minister Maas Kalab"},
  { name: "echidna tea", description: "Vice President of Maas Kalab"},
  { name: "abneeeees", description: "Mentor of Maas Kalab"},
  { name: "V8", description: "CEO of Maas Kalab"},
  { name: "P4", description: "CEO of Maas Kalab"},
  { name: "LilSuperUser", description: "Maas Explorer"},
  { name: "AK", description: "Maas Man"},
  { name: "Satyam", description: "Duke of Dua"},
  { name: "Prakhar", description: "Maas Khor"},
  { name: "Karan", description: "Opposition ka lead"},
];

const resources = [
  {
    imgSrc: "resources/lucknow_galawati_kebab.webp",
    title: "Lucknow Galawati Kebab",
    description: "placeholder",
    addr: "https://share.google/w4jvHXaaqOXeuy1iP",
  },
  {
    imgSrc: "resources/talib_kabab_corner.webp",
    title: "Talib Kebab Corner",
    description: "placeholder",
    addr: "https://share.google/TZayhAx1eB3KFdZAE",
  },
  {
    imgSrc: "resources/javed_famous_nihari.webp",
    title: "Javed Famous Nahari",
    description: "placeholder",
    addr: "https://share.google/B78PTdeWJRClO3G5E",
  },
  {
    imgSrc: "resources/sab_ke_khatir.webp",
    title: "Sab Ke Khatir",
    description: "placeholder",
    addr: "https://share.google/MNwV8pWgVkaoWnwB8",
  },
  {
    imgSrc: "resources/noora_nihari.webp",
    title: "Noora Nihari",
    description: "placeholder",
    addr: "https://share.google/qSKy2SVXo95wgEKVm",
  },
  {
    imgSrc: "resources/gulrez_kabab_corner.webp",
    title: "Gulrez Kabab Corner",
    description: "placeholder",
    addr: "https://share.google/pQdWHFnzm1GzWbmio",
  },
  {
    imgSrc: "resources/hafiz_ji_parathe_wale.webp",
    title: "Hafiz JI Parathe Wale",
    description: "placeholder",
    addr: "https://share.google/0aaDdAPEPtuRPNXY3",
  },
  {
    imgSrc: "resources/imran_nihari_shop.webp",
    title: "Imran Nihari Shop Turkmangate Delhi",
    description: "placeholder",
    addr: "https://share.google/v9UlFeH1g9ChM4Z2E",
  },
  {
    imgSrc: "resources/sangam_kabab_corner.webp",
    title: "Sangam Kabab Corner",
    description: "placeholder",
    addr: "https://share.google/zb9N2rAmisskdVEko",
  },
  {
    imgSrc: "resources/al_nihar.webp",
    title: "Al Nihar",
    description: "placeholder",
    addr: "https://share.google/ArYso9ylh99Ma8BvX",
  },
  {
    imgSrc: "resources/pul_bangash_wale.webp",
    title: "Pul Bangash Wale",
    description: "placeholder",
    addr: "https://share.google/aJb6xXr61kKSJ9fNx",
  },
];

const massHackSlides = [
  {
    imgSrc: "maashack_page/one/maashack_1.webp",
    title: "Maas Hack 1.0",
    description: "Jama masjid | Chicken Korma, Chicken fry",
    date: "04-10-25",
    href: "/maashacks/1",
  },
  {
    imgSrc: "maashack_page/two/maashack_2.webp",
    title: "Maas Hack 2.0",
    description: "Shaheen Bagh | Chicken Mandi, Chicken roll, Seekh Kabab",
    date: "28-11-25",
    href: "/maashacks/2",
  },
  {
    imgSrc: "maashack_page/three/maashack_3.webp",
    title: "Maas Hack 3.0",
    description: "Shaheen Bagh | Seekh Kabab, Nihari, Fish Fry, Shwarma, Gulawati Kebab ka roll",
    date: "05-03-26",
    href: "/maashacks/3",
  },
  {
    imgSrc: "maashack_page/four/maashack_4.webp",
    title: "Maas Hack 4.0",
    description: "Zakhir Nagar | Lucknowi Galawati Buff Kebab, Buff keema, Varghi Paratha, Roasted and Fried Chicken",
    date: "15-04-26",
    href: "/maashacks/4",
  },
];

const miniMeetups = [
  {
    imgSrc: "miniMeetups/briyani.webp",
    title: "Briyani shop near Kolez",
    description: "Placeholder",
    date: "5-12-2025",
  },
  {
    imgSrc: "miniMeetups/gulawati_kebab.webp",
    title: "Adarsh Ka Laptop",
    description: "placeholder",
    date: "16-02-2026",
  },
  {
    imgSrc: "miniMeetups/humayun_tomb.webp",
    title: "Happy B'day",
    description: "placeholder",
    date: "18-03-2026",
  },
  {
    imgSrc: "miniMeetups/post_foss_hack.webp",
    title: "Post FOSS Hack",
    description: "placeholder",
    date: "29-03-2026 - 31-03-2026",
  },
  {
    imgSrc: "miniMeetups/Om_ki_briyani.webp",
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
      <Navbar navItems={navItems} />
      <main className="flex-1">
        <HeroSection highlights={clubHighlights} />

        <FoodMarquee />

        <section
          id="mass-hack"
          className="relative overflow-x-hidden px-6 py-16 sm:px-10 lg:px-16"
        >
          <img
            src="/decor/seekh-kababs.webp"
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

        <section id="mini-meetups" className="px-6 py-16 sm:px-10 lg:px-16">
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

        <section id="members" className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                title="Maas Khors"
                description="All the Maas khors from the Maas kalab"
              />
            </ScrollReveal>
            <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2 sm:gap-x-4">
              {members.map((member, i) => (
                <span key={member.name} className="group relative">
                  <span
                    className="maas-khor-name cursor-default font-semibold tracking-tight text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--red-primary)]"
                    style={{ fontSize: `clamp(1.1rem, ${1.4 + (i % 3) * 0.35}rem, 2.2rem)` }}
                    >
                    {member.name}
                  </span>
                  <span className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--foreground)] px-2.5 py-0.5 text-[0.6rem] font-medium text-[var(--background)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {member.description}
                  </span>
                  {i < members.length - 1 && (
                    <span className="ml-3 text-[var(--dot-inactive)] sm:ml-4" aria-hidden>.</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="join" className="px-6 py-12 sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <ScrollReveal>
              <SectionHeading
                title="Become a Maas Khor"
                description="Join the fam on WhatsApp"
              />
            </ScrollReveal>
            <ScrollReveal>
              <a
                href="https://chat.whatsapp.com/HFMab1ihd6V1loDslSDZk6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,211,102,0.45)] active:scale-95"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Join @masskalab
              </a>
            </ScrollReveal>
          </div>
        </section>

        <section id="resources" className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                title="Resources"
                description="All the Maas Places you can go in dilli"
              />
            </ScrollReveal>
            <ResourceGrid resources={resources} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
