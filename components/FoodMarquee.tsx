import { FOOD_ITEMS } from "@/data/data";

export function FoodMarquee() {
  return (
    <div className="overflow-hidden border-y border-[var(--marquee-border)] bg-[var(--marquee-bg)] py-3">
      <div className="marquee flex w-max">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--marquee-text)] sm:text-sm"
          >
            {FOOD_ITEMS.map((item) => (
              <li key={item} className="flex items-center whitespace-nowrap">
                {item}
                <span className="mx-6 text-[0.6rem] text-[var(--marquee-diamond)] sm:mx-8" aria-hidden>
                  ◆
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
