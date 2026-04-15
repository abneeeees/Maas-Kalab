export function Footer() {
  return (
    <footer className="px-6 pb-10 pt-4 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-[2rem] border border-[var(--border-card)] bg-[var(--footer-bg)] px-8 py-8 shadow-[0_24px_60px_var(--shadow-card)] sm:flex-row sm:items-center sm:justify-between sm:py-7">
        <div className="min-w-0">
          <p className="text-lg font-bold text-[var(--footer-text)]">
            Maas Kalab
          </p>
          <p className="mt-1 text-sm text-[var(--footer-muted)]">
            Made with ❤️ for Maas by{" "}
            <a
              href="https://abneeeees.github.io/"
              className="underline decoration-[var(--footer-accent-border)] underline-offset-4 transition hover:text-[var(--footer-link-hover)] hover:decoration-[var(--red-primary)]"
            >
              abneeeees
            </a>
            {" & "}
            <a
              href="https://v8v88v8v88.com"
              className="underline decoration-[var(--footer-accent-border)] underline-offset-4 transition hover:text-[var(--footer-link-hover)] hover:decoration-[var(--red-primary)]"
            >
              V8
            </a>
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-[var(--footer-muted)]">
          {[
            ["Home", "#home"],
            ["Maas Hack", "#mass-hack"],
            ["Members", "#members"],
            ["Resources", "#resources"],
          ].map(([label, href], idx) => (
            <span key={href} className="flex items-center gap-3">
              {idx > 0 && <span aria-hidden>·</span>}
              <a
                href={href}
                className="underline-offset-4 transition hover:text-[var(--footer-link-hover)] hover:underline"
              >
                {label}
              </a>
            </span>
          ))}
        </nav>

        <a
          href="https://chat.whatsapp.com/HFMab1ihd6V1loDslSDZk6"
          className="shrink-0 rounded-full bg-[var(--red-primary)] px-5 py-2 text-sm font-semibold text-white shadow-[0_6px_20px_var(--primary-btn-shadow)] transition hover:shadow-[0_8px_28px_var(--primary-btn-hover-shadow)] hover:brightness-110"
        >
          Join the Kalab
        </a>
      </div>
    </footer>
  );
}
