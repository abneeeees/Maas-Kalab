// app/maashacks/[masshack]/MaasHackClientPage.tsx
"use client";

import MaasHackNavigation from "@/components/maashack_navigation";
import { MaasHackCardViewer } from "@/components/MaasHackCardViewer";
import { ScrollReveal } from "@/components/ScrollReveal";

interface MaasHackClientPageProps {
  data: {
    title: string;
    location: string;
    description: string;
    date: string;
    locationhref: string;
    images: { src: string; caption?: string }[];
  };
  currentHackNum: number;
  totalHacks: number;
}

export default function MaasHackClientPage({ data, currentHackNum, totalHacks }: MaasHackClientPageProps) {
  return (
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
  );
}