import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";

export type InfoCardProps = {
  imgSrc?: string;
  alt: string;
  description?: string;
  date?: string;
  link?: string;
  hack_name?: string;
};

type MaashackMiniboxProps = {
  infoCardProps: InfoCardProps[];
};

export function MaashackMinibox({ infoCardProps }: MaashackMiniboxProps) {
  return (
    <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2">
      {infoCardProps.map((card, index) => {
        const title = card.hack_name ?? card.alt;

        return (
          <article
            key={`${title}-${index}`}
            style={{
              animationDelay: `${index * 90 + 40}ms`,
            }}
            className="card-rise-up group relative overflow-hidden rounded-3xl border border-[var(--border-card)] bg-[var(--card-surface)] shadow-[0_12px_40px_var(--shadow-card)] transition-all duration-300 hover:border-[var(--red-primary)]/40 hover:shadow-[0_20px_50px_var(--shadow-card-lg)]"
          >
            {card.link ? (
              <Link href={card.link} className="block relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden">
                {/* Background Photo */}
                {card.imgSrc ? (
                  <Image
                    src={card.imgSrc.startsWith("/") ? card.imgSrc : `/${card.imgSrc}`}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-[var(--card-surface)]" />
                )}

                {/* Dark Gradient Scrim for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 transition-opacity duration-300 group-hover:from-black/95" />

                {/* Top Badges Row */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                  {card.date && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-white shadow-sm">
                      <Calendar className="h-3 w-3 text-white" />
                      {card.date}
                    </span>
                  )}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white shadow-sm transition-transform duration-300 group-hover:bg-white group-hover:text-black group-hover:border-transparent">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 z-10">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white transition-colors duration-200">
                    {title}
                  </h2>

                  {card.description && (
                    <div className="mt-2 flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/90">
                      <MapPin className="h-3.5 w-3.5 text-white shrink-0" />
                      <span>{card.description}</span>
                    </div>
                  )}

                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 group-hover:text-white transition-colors">
                    <span>View Recap</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

export default MaashackMinibox;