const credits = [
  ["abneeeees", "https://abneeeees.github.io/"],
  ["V8", "https://v8v88v8v88.com"],
  ["Prakhar", "https://github.com/Prakhar1808"],
  ["LilSuperUser", "https://github.com/lilsuperuser"],
];

export function Footer() {
  return (
    <footer className="px-4 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-lg font-bold tracking-tight text-[var(--red-primary)]">Maas Kalab</p>

        <p className="text-xs text-[var(--text-muted)]">
          Made with 🍗 by{" "}
          {credits.map(([name, href], i) => (
            <span key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--foreground)] hover:text-[var(--red-primary)] hover:underline"
              >
                {name}
              </a>
              {i < credits.length - 2 ? ", " : i === credits.length - 2 ? " & " : ""}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
