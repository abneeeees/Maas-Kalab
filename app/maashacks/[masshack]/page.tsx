// app/maashacks/[masshack]/page.tsx

import { Navbar, type NavItem } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import MaasHackDropdown from "@/components/MaasHackDropdown";
import MaasHackClientPage from "./MaasHackClientPage";
import { massHackData } from "@/data/data";
import Image from "next/image";

const navItems: NavItem[] = [
  { label: "Home", href: "/#" },
  { label: "MaasHacks", href: "/maashacks" },
];

export function generateStaticParams(): { masshack: string }[] {
  return Object.keys(massHackData).map((id) => ({
    masshack: id,
  }));
}

// Next.js passes dynamic route segments via props in Server Components
interface PageProps {
  params: Promise<{ masshack: string }>;
}

export default async function MaasHackPage({ params }: PageProps) {
  const resolvedParams = await params;
  const masshackId = resolvedParams.masshack;
  const data = massHackData[masshackId];
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
              This Maas Hack edition doesn't exist yet.
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const currentHackNum = parseInt(masshackId, 10);

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
      {/* Pass data into the Client Component container so you don't break hook contexts
        like your ScrollReveal or Card components.
      */}
      <MaasHackClientPage 
        data={data} 
        currentHackNum={currentHackNum} 
        totalHacks={totalHacks} 
      />
      <Footer />
    </>
  );
}