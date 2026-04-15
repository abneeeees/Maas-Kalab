type ResourceCardProps = {
  imgSrc?: string;
  title: string;
  description: string;
  addr: string;
};

export function ResourceCard({
  imgSrc,
  title,
  addr,
}: ResourceCardProps) {
  return (
    <article className="h-full">
      <a
        href={addr}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl"
      >
        {imgSrc && (
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            src={imgSrc}
            alt={title}
            draggable={false}
          />
        )}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-sm font-semibold leading-snug text-white sm:text-base">
            {title}
          </h3>
        </div>
      </a>
    </article>
  );
}
