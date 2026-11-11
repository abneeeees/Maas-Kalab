import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const LINK =
  "group inline-flex items-center gap-2 py-2 text-sm font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--red-primary)] sm:text-base";

/** Links to the previous / next Maas Hack edition, shown at the end of a hack page. */
export default function MaasHackNavigation({ current, total }: { current: number; total: number }) {
  const prev = current > 1 ? current - 1 : null;
  const next = current < total ? current + 1 : null;

  return (
    <nav
      aria-label="Other Maas Hacks"
      className="flex items-center justify-between gap-4 border-t border-[var(--border-subtle)] px-1 pt-4"
    >
      {prev ? (
        <Link href={`/maashacks/${prev}`} className={LINK}>
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Maas Hack {prev}.0
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={`/maashacks/${next}`} className={LINK}>
          Maas Hack {next}.0
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
