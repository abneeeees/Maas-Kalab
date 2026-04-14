type ResourceCardProps = {
  imgSrc?: string;
  title: string;
  description: string;
  addr: string; 
};

export function ResourceCard({imgSrc, title, description, addr }: ResourceCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-[0_14px_40px_rgba(28,25,23,0.08)]">
      <img className="rounded-[1.1rem] w-auto h-auto shadow-[0_14px_40px_rgba(28,25,23,0.18)]" src={imgSrc} alt={title} />
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">
      {title}
      </h3>
      <p className="mt-3 text-base leading-7 text-stone-700">{description}</p>
      <a
      href={addr}
      className="mt-6 inline-flex text-sm font-semibold text-stone-950 underline decoration-stone-300 underline-offset-4"
      >
      </a>
    </article>
  );
}
