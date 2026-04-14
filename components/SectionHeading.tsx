type SectionHeadingProps = {
  title: string;
  description: string;
};

export function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-stone-700 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
