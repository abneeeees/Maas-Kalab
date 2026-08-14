export function Footer() {
  return (
    <footer className="relative overflow-hidden mt-8 sm:mt-20 px-3 sm:px-8 pb-8 sm:pb-14">
      {/* Bottom Ambient Light Sheen */}
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[95vw] max-w-5xl h-[380px] rounded-full bg-gradient-to-t from-[var(--red-primary)]/20 via-[var(--amber-accent)]/10 to-transparent blur-3xl opacity-85"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto max-w-6xl rounded-2xl sm:rounded-[2.5rem] border border-[var(--footer-card-border)] bg-[var(--footer-card-bg)] py-7 px-5 sm:py-12 sm:px-12 backdrop-blur-md shadow-[0_12px_45px_var(--shadow-card)] transition-all duration-300 hover:border-[var(--red-primary)]/55">
        <div className="flex flex-col items-center justify-between gap-5 sm:gap-7 lg:flex-row text-center lg:text-left">
          {/* Left Column: Brand & Credits */}
          <div className="flex flex-col items-center lg:items-start gap-1.5 sm:gap-2">
            <div className="flex items-center gap-2.5">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[var(--foreground)]">
                Maas Kalab
              </span>
              <a
                href="https://chat.whatsapp.com/HFMab1ihd6V1loDslSDZk6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] transition-colors hover:text-[#25D366]"
                aria-label="WhatsApp Community"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5 sm:h-5 sm:w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>

            <p className="text-[0.72rem] sm:text-xs text-[var(--text-muted)]">
              Powered with 🍗 by{" "}
              <a
                href="https://abneeeees.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--foreground)] transition-colors hover:text-[var(--red-primary)] hover:underline"
              >
                abneeeees
              </a>
              {", "}
              <a
                href="https://v8v88v8v88.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--foreground)] transition-colors hover:text-[var(--red-primary)] hover:underline"
              >
                V8
              </a>
              {", "}
              <a
                href="https://github.com/Prakhar1808"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--foreground)] transition-colors hover:text-[var(--red-primary)] hover:underline"
              >
                Prakhar
              </a>
              {" & "}
              <a
                href="https://github.com/lilsuperuser"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--foreground)] transition-colors hover:text-[var(--red-primary)] hover:underline"
              >
                LilSuperUser
              </a>
            </p>
          </div>

          {/* Center Column: Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 sm:gap-5 text-xs sm:text-sm font-medium text-[var(--text-muted)]">
            {[
              ["Home", "/#home"],
              ["Maas Hack", "/#mass-hack"],
              ["Meets", "/#mini-meetups"],
              ["Members", "/#members"],
              ["Resources", "/#resources"],
              ["Join", "/#join"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="transition-colors hover:text-[var(--foreground)] py-0.5"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right Column: CTA Button */}
          <div className="flex items-center">
            <a
              href="https://chat.whatsapp.com/HFMab1ihd6V1loDslSDZk6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[var(--red-primary)] px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-[0_4px_20px_var(--primary-btn-shadow)] transition-all duration-300 hover:scale-105 hover:bg-[var(--primary-btn-hover)] hover:shadow-[0_6px_25px_var(--primary-btn-hover-shadow)] active:scale-95"
            >
              Join the Kalab
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
