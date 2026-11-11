import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import {
  MaashackMinibox,
  type InfoCardProps,
} from "@/components/maashack_minibox";
import { massHackSlides } from "@/data/data";

const infoCards: InfoCardProps[] = massHackSlides.map((hack) => ({
  imgSrc: hack.imgSrc,
  alt: hack.title,
  hack_name: hack.title,
  description: hack.description.split(" | ")[0],
  date: hack.date,
  link: hack.href,
}));

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="top-glow relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="relative z-[1] mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
          <div className="heading-rise-up">
            <SectionHeading
              title="Maas Hack"
              description="Our flagship program. We meet and eat (a lot)."
            />
          </div>

          <MaashackMinibox infoCardProps={infoCards} />
        </div>
      </section>

      <Footer />
    </>
  );
}
