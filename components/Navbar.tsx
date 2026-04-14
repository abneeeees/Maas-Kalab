const navItems = [
  { label: "Home", href: "#home" },
  { label: "Mass Hack", href: "#mass-hack" },
  { label: "Members", href: "#members" },
  { label: "How To Join", href: "#join" },
  { label: "Resources", href: "#resources" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-6 py-4 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/60 bg-white/75 px-5 py-3 shadow-[0_16px_50px_rgba(28,25,23,0.12)] backdrop-blur">
        <a
          href="#home"
          className="text-lg font-semibold tracking-[0.18em] text-stone-950 uppercase"
        >
          Maas Kalab
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-700 transition hover:text-stone-950"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
