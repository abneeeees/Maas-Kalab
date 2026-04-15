export function Footer() {
  return (
    <footer className="mt-8 px-6 pb-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[var(--footer-border)] shadow-[0_-8px_50px_var(--footer-glow)]">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[var(--footer-accent)] to-transparent" />

        <div className="bg-[var(--footer-bg)] px-8 py-10 sm:px-10 sm:py-9">
          <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="min-w-0">
              <p className="text-xl font-bold tracking-tight text-[var(--footer-text)]">
                Maas Kalab
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--footer-muted)]">
                Powered with 🍗 by{" "}
                <a
                  href="https://abneeeees.github.io/"
                  className="font-medium text-[var(--footer-link)] underline decoration-[var(--footer-accent-border)] underline-offset-4 transition-colors hover:text-[var(--footer-link-hover)] hover:decoration-[var(--footer-accent)]"
                >
                  abneeeees
                </a>
                {" & "}
                <a
                  href="https://v8v88v8v88.com"
                  className="font-medium text-[var(--footer-link)] underline decoration-[var(--footer-accent-border)] underline-offset-4 transition-colors hover:text-[var(--footer-link-hover)] hover:decoration-[var(--footer-accent)]"
                >
                  V8
                </a>
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
              <nav className="flex flex-wrap gap-x-5 gap-y-1.5 text-[0.82rem] text-[var(--footer-muted)]">
                {[
                  ["Home", "#home"],
                  ["Meets", "#mass-hack"],
                  ["Members", "#members"],
                  ["Resources", "#resources"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="transition-colors hover:text-[var(--footer-link-hover)]"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <a
                href="https://chat.whatsapp.com/HFMab1ihd6V1loDslSDZk6"
                className="shrink-0 rounded-full bg-[var(--footer-cta-bg)] px-5 py-2 text-sm font-semibold text-[var(--footer-cta-text)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_var(--footer-cta-glow)]"
              >
                Join the Kalab
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
