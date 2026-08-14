import Link from "next/link";

type SectionHeadingProps = {
  title: string;
  tag?: string;
  description?: string;
  value?: number;
  href?: string;
};

export function SectionHeading({ title, tag, description, value, href }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl mx-auto text-center">
      {tag && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hero-pill-border)] bg-[var(--hero-pill-bg)] px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--hero-pill-text)] shadow-sm backdrop-blur-sm">
          {tag}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-4xl">
        {href ? (
          <Link
            href={href}
            className="group inline-flex items-center justify-center gap-2 transition-colors hover:text-[var(--red-primary)]"
          >
            <span>{title}</span>
            {value ? <span className="text-[var(--red-primary)]">{value}.0</span> : null}
            <svg
              className="h-5 w-5 text-[var(--red-primary)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </Link>
        ) : (
          <>
            {title} {value ? <span className="text-[var(--red-primary)]">{value}.0</span> : null}
          </>
        )}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-7 text-[var(--text-muted)] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
