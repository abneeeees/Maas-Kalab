"use client";

import Image from "next/image";
import Link from "next/link";

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

    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {infoCardProps.map((card, index) => (
        <article
          key={`${card.hack_name ?? card.alt}-${index}`}
          className="group relative overflow-hidden rounded-[2rem] border-2 border-[var(--nav-border)] shadow-[0_22px_50px_var(--shadow-card)]">

          {card.link && (
            <Link href={card.link}>

          {/* 🔥 FULL IMAGE BACKGROUND */}
          <div className="absolute inset-0">
              {card.imgSrc ? (
                <Image
                  src={card.imgSrc.startsWith("/") ? card.imgSrc : `/${card.imgSrc}`}
                  alt={card.alt}
                  fill
                  className="object-cover blur-xs scale-105 transition-all duration-700 group-hover:blur-none group-hover:scale-110"
                />
              ) : (
                <div className="h-full w-full bg-[var(--nav-bg-scrolled)]" />
              )}

              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.2)_40%,rgba(0,0,0,0.6)_100%)] transition-opacity duration-500 group-hover:opacity-40" />
            </div>

          {/* 🔥 CONTENT LAYER */}
          <div className="relative z-10 flex h-full min-h-[310px] items-center justify-between p-6 sm:p-8 lg:p-10">
            
            {/* TEXT */}
            <div className="transition-all duration-500 group-hover:opacity-0 group-hover:-translate-x-6">
              {card.date && (
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-white">
                  {card.date}
                </p>
              )}
              <h2 className="mt-3 text-4xl font-black uppercase tracking-[0.08em] text-yellow-400">
                {card.hack_name ?? card.alt}
              </h2>
              
              {card.description && (
                <p
                  className="mb-5 text-sm font-bold text-white/80">
                  {card.description}
                </p>
              )}
            </div>  
          </div>
          
        </Link>
        )}
      </article>
      ))}
      </div>
  );
}

export default MaashackMinibox;