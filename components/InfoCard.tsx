type InfoCardProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function InfoCard({ eyebrow, title, description }: InfoCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-stone-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,240,232,0.92))] p-6 shadow-[0_10px_35px_rgba(28,25,23,0.06)]">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">
        {title}
      </h3>
      <p className="mt-3 text-base leading-7 text-stone-700">{description}</p>
    </article>
  );
}
