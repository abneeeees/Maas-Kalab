type SectionHeadingProps = {
  title: string;
  description?: string;
  value?: number;
};

export function SectionHeading({ title, description, value }: SectionHeadingProps) {
    if (value) {
      return (
      <div className="mb-8 max-w-3xl mx-auto text-center">
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--red-dark)] sm:text-4xl">
          {title} - {value}.0
        </h2>
        <p className="mt-4 text-base leading-7 text-[var(--text-muted)] sm:text-lg">
          {description}
        </p>
      </div>      
      )
    } else {
      return (
        <div className="mb-8 max-w-3xl mx-auto text-center">
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--red-dark)] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-[var(--text-muted)] sm:text-lg">
          {description}
        </p>
      </div>
    );
  }
}
