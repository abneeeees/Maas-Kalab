"use client";

import Link from "next/link";

interface MaasHackNavigationProps {
    previousHack?: string;
    nextHack?: string;
}

export default function MaasHackNavigation({
    previousHack,
    nextHack,
}: MaasHackNavigationProps) {
    return (
        <>
            <div className="mt-1 flex items-center justify-between gap-4">

            {previousHack ? (
                <Link
                href={`${previousHack}`}
                className="justify-self-start rounded-full border border-[var(--nav-border)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition-all hover:bg-[var(--red-primary)] hover:text-white"
                aria-label={`Go to Maas Hack ${previousHack}`}
                >
                {"‹"}
                </Link>
            ) : (
                <span className="justify-self-start rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-transparent">
                    {/*{}*/}
                </span>
            )}

            {nextHack ? (
                <Link
                href={`${nextHack}`}
                className="justify-self-end rounded-full border border-[var(--nav-border)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition-all hover:bg-[var(--red-primary)] hover:text-white"
                aria-label={`Go to Maas Hack ${nextHack}`}
                >
                {"›"}
                </Link>
            ) : (
                <span className="justify-self-end rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-transparent">
                    {/* {} */}
                </span>
            )}
            </div>
        </>
    )
}
