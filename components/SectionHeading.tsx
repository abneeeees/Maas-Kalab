import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type SectionHeadingProps = {
  title: string;
  description?: string;
  href?: string;
};

export function SectionHeading({ title, description, href }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-4xl">
        {href ? (
          <Link
            href={href}
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-[var(--red-primary)]"
          >
            {title}
            <ArrowUpRight
              className="h-6 w-6 text-[var(--red-primary)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className="mt-3 text-base text-[var(--text-muted)] sm:text-lg">{description}</p>
      )}
    </div>
  );
}
