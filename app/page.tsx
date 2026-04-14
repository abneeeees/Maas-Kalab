import { Footer } from "@/components/Footer";
import { InfoCard } from "@/components/InfoCard";
import { Navbar } from "@/components/Navbar";
import { ResourceCard } from "@/components/ResourceCard";
import { RotatingInfoCard } from "@/components/RotatingInfoCard";
import { SectionHeading } from "@/components/SectionHeading";

const members = [
  {
    name: "Mallu",
    description:
      "President of Maas Kalab",
  },
  {
    name: "-",
    description:
      "Prime Minister of Maas Kalab",
  },
  {
    name: "exhidna tea",
    description:
      "Vice President of Maas Kalab",
  },
  {
    name: "abneeeees",
    description:
      "Food Inspector of Maas Kalab",
  },
  {
    name: "V8",
    description:
      "Event Coordinator of Maas Kalab",
  },
];

const resources = [
  {
    imgSrc: "shaheen_bagh_res.png",
    title: "Shaheen Bagh",
    description:
      "A place in New Delhi known for its vibrant street food scene, especially non-vegetarian delicacies.",
    addr: "#"
  },
  {
    title: "Zakhir Nagar",
    description:
      "A neighborhood in Hyderabad famous for its biryani and other non-vegetarian dishes, making it a must-visit for food lovers.",
    addr: "#"
  },
  {
    title: "Jama Masjid",
    description:
      "One of the largest mosques in India, located in Old Delhi, surrounded by bustling markets and renowned for its delicious non-vegetarian street food offerings.",
    addr: "#"
    },
  {
    title: "Connought ",
    description:
      "A popular area in New Delhi with a variety of restaurants and street food vendors, offering a range of non-vegetarian dishes that attract food enthusiasts.",
    addr: "#"
  },
];

const miniMeetups = [
  {
    title: "Late Night Kebab Run",
    description:
      "A chill meetup idea for a small group to explore one famous food lane together.",
  },
  {
    title: "Sunday Breakfast Scene",
    description:
      "Use this for early-morning gatherings focused on nihari, paya, or local breakfast specials.",
  },
  {
    title: "Quick Review Meetup",
    description:
      "A small-format hangout where members try one spot and drop fast ratings and notes.",
  },
];

const clubHighlights = [
  {
    eyebrow: "Club Mood",
    title: "Food, people, stories",
    description: "Use this spot for a quick intro to the vibe of Maas Kalab.",
  },
  {
    eyebrow: "What Happens",
    title: "Meetups and food hunts",
    description:
      "Perfect for listing your tastings, cookouts, or monthly events.",
  },
  {
    eyebrow: "Who It Is For",
    title: "Open to curious members",
    description:
      "Add your own rules, city chapters, or membership criteria later.",
  },
  {
    eyebrow: "Why Join",
    title: "A simple base to build on",
    description:
      "This layout is intentionally lightweight so you can expand it easily.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section
          id="home"
          className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="w-fit rounded-full border border-white/40 bg-white/70 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-stone-700 backdrop-blur">
                A Kalab For MAAS Khors
              </p>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl">
                  Maas Kalab
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
                  Maas Kalab is a community for people who love to cook and eat delicious food (non-veg obv).
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://chat.whatsapp.com/HFMab1ihd6V1loDslSDZk6  "
                  className="rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-stone-50 transition hover:bg-stone-800"
                >
                  Join The Kalab
                </a>
                <a
                  href="#resources"
                  className="rounded-full border border-stone-300 bg-stone-100 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-stone-500"
                >
                  View Resources
                </a>
              </div>
            </div>

            <RotatingInfoCard items={clubHighlights} />
          </div>
        </section>

        <section
          id="mass-hack"
          className="px-6 py-20 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-6xl rounded-[2.1rem] border border-stone-200 bg-white/80 p-8 shadow-[0_20px_80px_rgba(28,25,23,0.08)] backdrop-blur sm:p-10">
            <SectionHeading
              title="MAAS HACK"
              description="Treat this like your flagship program. It can become a hack-style event, a community food challenge, or any signature Maas Kalab initiative."
            />
            <div className="grid gap-4 md:grid-cols-3">
              <InfoCard
                eyebrow="Jama Masjid"
                title="Maas Hack 1.0"
                description="placeholder"
              />
              <InfoCard
                eyebrow="Shaheen Bagh"
                title="Maas Hack 2.0"
                description="placeholder"
              />
              <InfoCard
                eyebrow="Shaheen Bagh"
                title="Maas Hack 3.0"
                description="placeholder"
              />
              <InfoCard
                eyebrow="Zakhir Nagar"
                title="Maas Hack 4.0"
                description="placeholder"
              />
            </div>
          </div>
        </section>

        <section
          id="mini-meetups"
          className="px-6 py-20 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              title="Smaller club scenes between the big Maas Hacks"
              description="This section is for compact hangouts, casual food runs, and low-key member meetups that happen more often."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {miniMeetups.map((meetup) => (
                <InfoCard
                  key={meetup.title}
                  eyebrow="Mini Meetup"
                  title={meetup.title}
                  description={meetup.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="members"
          className="px-6 py-20 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              title="Maas Khors"
              description="All the Maas khors from the Maas kalab"
            />
            <div className="grid gap-5 md:grid-cols-3">
              {members.map((member) => {
          const baseSize = 64;
          const size = baseSize + Math.max(0, member.name.length - 4) * 8;
          return (
            <div key={member.name} className="flex flex-col items-center space-y-4">
              <div
                className="flex items-center justify-center rounded-full bg-stone-200 text-lg font-semibold text-stone-950"
                style={{ width: size, height: size }}
              >
                {member.name}
              </div>
              <p className="text-center text-sm text-stone-700">
                {member.description}
              </p>
            </div>
          );
              })}
            </div>
          </div>
        </section>

        <section
          id="join"
          className="px-6 py-20 sm:px-10 lg:px-16"
        >
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading
                title="Keep the joining flow simple"
                description="This section can point visitors to Instagram, a WhatsApp group, a form, or a short About Us story."
              />
            </div>
            <div className="grid gap-4">
              <InfoCard
                eyebrow="Instagram"
                title="@maaskalab"
                description="Replace this with your real handle and add a proper social link later."
              />
              <InfoCard
                eyebrow="Join Steps"
                title="Follow, message, attend"
                description="A clean placeholder flow: follow the page, send a message, and join the next meetup."
              />
            </div>
          </div>
        </section>

        <section
          id="resources"
          className="px-6 py-20 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              title="Resources"
              description="All the Maas Places you can go in dilli"
            />
            <div className="grid gap-5 md:grid-cols-3">
              {resources.map((resource) => (
                <ResourceCard
                  key={resource.title}
                  imgSrc={resource.imgSrc}
                  title={resource.title}
                  description={resource.description}
                  addr={resource.addr}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
