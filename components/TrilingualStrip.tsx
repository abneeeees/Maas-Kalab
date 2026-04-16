const FOOD_ITEMS = [
  "Nihari",
  "Nalli Nihari",
  "Biryani",
  "Mutton Biryani",
  "Chicken Biryani",
  "Kebab",
  "Shawarma",
  "Paratha",
  "Mughlai Paratha",
  "Korma",
  "Mutton Korma",
  "Laal Maas",
  "Paya",
  "Kaleji Fry",
  "Bheja Fry",
  "Bade Ka Keema",
  "Bade Ka Kebab",
  "Mutton Qorma",
  "Mutton Stew",
  "Raan Roast",
  "Kakori Kebab",
  "Gulawati Kebab",
  "Keema",
  "Keema Naan",
  "Haleem",
  "Tandoori",
  "Seekh Kebab",
  "Boti Kebab",
  "Shami Kebab",
  "Galouti Kebab",
  "Rumali Roti",
  "Sheermal",
  "Khameeri Roti",
];

export function FoodMarquee() {
  const repeated = [...FOOD_ITEMS, ...FOOD_ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-[var(--marquee-border)] bg-[var(--marquee-bg)] py-4">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 text-sm font-semibold uppercase tracking-[0.2em] text-white/90"
          >
            {item}
            <span className="text-white/30" aria-hidden>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
