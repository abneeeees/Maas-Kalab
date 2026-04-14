export function Footer() {
  return (
    <footer className="px-6 pb-10 pt-4 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-[2.1rem] bg-stone-950 px-8 py-8 text-stone-200 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Maas Kalab - A Kalab for Maas Khors</p>
          <p className="text-sm text-stone-300">
            Made with ❤️ for Maas by{" "}
            <a
              href="https://abneeeees.github.io/"
              className="underline decoration-stone-600 underline-offset-4 transition hover:decoration-stone-400"
            >
              abneeeees
            </a>
          </p>
        </div>

        <p className="text-sm text-stone-400">
          <a href="#home" className="hover:underline decoration-stone-600 underline-offset-4 transition hover:decoration-stone-400">
            Home
          </a>
          {" • "}
          <a href="#mass-hack" className="hover:underline">
            Mass Hack
          </a>
          {" • "}
          <a href="#members" className="hover:underline">
            Members
          </a>
          {" • "}
          <a href="#resources" className="hover:underline">
            Resources
          </a>
        </p>

        <div>
          {" "}
          <a
            href="https://chat.whatsapp.com/HFMab1ihd6V1loDslSDZk6"
            className="rounded-full bg-stone-700 px-4 py-1 text-sm font-semibold text-stone-50 transition hover:bg-stone-600"
            >
            Join the Kalab
          </a>
        </div>
      </div>
    </footer>
  );
}
