import { FOOD_ITEMS } from "@/data/data";

export function FoodMarquee() {
  const repeated = [...FOOD_ITEMS, ...FOOD_ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-[var(--marquee-border)] bg-[var(--marquee-bg)] py-2.5 sm:py-3.5">
      <div className="animate-marquee flex w-max items-center gap-6 sm:gap-8 whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[var(--marquee-text)]/90"
          >
            {item}
            <span className="text-[var(--marquee-diamond)]/90 text-[0.65rem] sm:text-xs" aria-hidden>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
