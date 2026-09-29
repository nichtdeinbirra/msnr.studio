import { site } from "@/content/site";

/** Running ticker like the top strip of a club flyer. Pauses for reduced motion. */
export function Marquee() {
  // Two identical halves, so translating by -50% loops seamlessly.
  const items = [...site.marquee, ...site.marquee];
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-lime py-2.5" aria-hidden="true">
      <div className="animate-marquee flex w-max">
        {[0, 1].map((half) => (
          <ul key={half} className="flex shrink-0">
            {items.map((item, i) => (
              <li key={i} className="flex items-center font-mono text-sm font-medium uppercase tracking-wide">
                <span className="px-5">{item}</span>
                <span>★</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
