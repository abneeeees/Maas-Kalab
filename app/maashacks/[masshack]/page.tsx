import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import MaasHackClientPage from "./MaasHackClientPage";
import { massHackData } from "@/data/data";

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
        <Navbar />
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
      <Navbar />
      <MaasHackClientPage 
        data={data} 
        currentHackNum={currentHackNum} 
        totalHacks={totalHacks} 
      />
      <Footer />
    </>
  );
}