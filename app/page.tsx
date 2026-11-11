import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { MaasHackCarousel } from "@/components/MaasHackCarousel";
import { MiniMaasupGallery } from "@/components/MiniMaasupGallery";
import { Navbar } from "@/components/Navbar";
import { ResourceGrid } from "@/components/ResourceGrid";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FoodMarquee } from "@/components/FoodMarquee";
import { massHackData, massHackSlides, members, miniMeetups, resources } from "@/data/data";
import { FileSpreadsheet } from "lucide-react";

const SECTION = "px-4 py-16 sm:px-10 sm:py-20 lg:px-16";
const WHATSAPP = "https://chat.whatsapp.com/HFMab1ihd6V1loDslSDZk6";

const counts = [
  [Object.keys(massHackData).length, "Maas Hacks"],
  [miniMeetups.length, "Mini Maasups"],
  [members.length, "Maas Khors"],
  [resources.length, "Places"],
] as const;

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        <FoodMarquee />

        <section id="about" className={SECTION}>
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-2xl font-semibold leading-snug tracking-tight text-[var(--foreground)] sm:text-3xl">
              Maas Kalab is a community of Maas Khors from Dilli. We find the good
              places, we show up hungry, and we eat.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
              {counts.map(([n, label]) => (
                <div key={label}>
                  <dd className="text-4xl font-black tracking-tight text-[var(--red-primary)]">{n}</dd>
                  <dt className="mt-1 text-sm font-medium text-[var(--text-muted)]">{label}</dt>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </section>

        <section id="mass-hack" className={`overflow-x-hidden ${SECTION}`}>
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                title="Maas Hack"
                href="/maashacks"
                description="Our flagship program. We meet and eat (a lot)."
              />
            </ScrollReveal>
            <MaasHackCarousel slides={massHackSlides} />
          </div>
        </section>

        <section id="mini-meetups" className={`overflow-x-hidden ${SECTION}`}>
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                title="Mini Maasups"
                description="Other than Maas Hacks, we do smaller meetups too."
              />
            </ScrollReveal>
            <MiniMaasupGallery meetups={miniMeetups} />
          </div>
        </section>

        <section id="places" className={SECTION}>
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeading
                title="Maas Places"
                description="Spots in Dilli we have eaten at and would go back to."
              />
            </ScrollReveal>
            <ResourceGrid resources={resources} />
            <div className="mt-8 flex justify-center">
              <a
                href="https://docs.google.com/spreadsheets/d/1GeCXD8GQCnx1cBT6fXPd1DhWHaVJo9CQ0CgixotU3fY/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--red-primary)] underline-offset-4 hover:underline"
              >
                <FileSpreadsheet className="h-4 w-4" aria-hidden />
                Full list on Google Sheets ↗
              </a>
            </div>
          </div>
        </section>

        <section id="members" className={SECTION}>
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <SectionHeading title="Maas Khors" description="The people of the kalab." />
            </ScrollReveal>
            <ul className="grid grid-cols-2 gap-x-8 sm:grid-cols-3 lg:grid-cols-4">
              {members.map((member) => (
                <li key={member.name} className="border-t border-[var(--border-subtle)] py-4">
                  <p className="text-lg font-bold tracking-tight text-[var(--foreground)]">
                    {member.name}
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--text-muted)]">{member.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="join"
          className="border-y border-[var(--marquee-border)] bg-[var(--marquee-bg)] px-4 py-20 text-center text-[var(--marquee-text)] sm:px-10 sm:py-24"
        >
          <ScrollReveal className="mx-auto max-w-3xl">
            <blockquote>
              <p className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                &ldquo;Jo maas khaye wo mera bhai&rdquo;
              </p>
              <footer className="mt-3 text-sm opacity-75">~ Karan</footer>
            </blockquote>
            <h2 className="mt-10 text-xl font-semibold">Become a Maas Khor</h2>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3 text-sm font-bold text-[var(--marquee-bg)] transition-opacity hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Join on WhatsApp
            </a>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
