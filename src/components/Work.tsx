import { featured, more } from "@/content/projects";
import { Reveal } from "./Reveal";
import { Shot } from "./Shot";
import { Container } from "./ui";

// Slight tilts so the screenshots read like flyers pinned to a wall.
const tilts = ["md:-rotate-1", "md:rotate-2", "md:-rotate-2"];

export function Work() {
  const p = featured;

  return (
    <section id="work" aria-labelledby="work-title" className="py-20 md:py-28">
      <Container>
        <h2 id="work-title" className="display text-[clamp(3.5rem,11vw,9rem)]">
          Line-up
        </h2>

        <article className="mt-8 overflow-hidden rounded-3xl border-2 border-ink bg-ink text-bg shadow-[8px_8px_0_var(--color-pink)] md:mt-12">
          <div className="grid gap-8 p-6 md:grid-cols-12 md:p-10">
            <div className="md:col-span-7">
              <span className="sticker border-bg bg-lime text-ink shadow-none">Headliner</span>
              <h3 className="mt-5 font-brand text-6xl font-extrabold tracking-[-0.045em] md:text-8xl">{p.name}</h3>
              <p className="mt-2 font-mono text-sm uppercase tracking-wide text-lime">{p.tagline}</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-bg/80">{p.summary}</p>
            </div>
            <div className="flex flex-col justify-end gap-6 md:col-span-5">
              <ul className="space-y-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3 border-b border-bg/15 pb-2">
                    <span className="text-lime">★</span>
                    {h}
                  </li>
                ))}
              </ul>
              {p.status && (
                <span className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-lime px-4 py-2 font-mono text-sm uppercase tracking-wide text-lime">
                  <span className="size-2 rounded-full bg-lime" aria-hidden="true" />
                  {p.status}
                </span>
              )}
            </div>
          </div>

          <div className="grid gap-6 px-6 pb-8 md:grid-cols-12 md:gap-0 md:px-10 md:pb-14">
            {p.shots.map((s, i) => (
              <Reveal
                key={s.src}
                delay={i * 0.08}
                className={
                  s.device === "wide"
                    ? `md:col-span-12 ${tilts[0]}`
                    : `md:col-span-5 ${i === 1 ? "md:col-start-2 md:-mt-10" : "md:col-start-7 md:-mt-24"} ${tilts[i % tilts.length]}`
                }
              >
                <figure>
                  <Shot
                    src={s.src}
                    alt={s.alt}
                    className="w-full rounded-xl border-[5px] border-bg bg-[#0d0e0c] shadow-[0_18px_40px_-12px_rgb(0_0_0/0.6)]"
                    placeholderClassName="aspect-[4/3]"
                  />
                  <figcaption className="mt-3 font-mono text-xs uppercase tracking-wide text-bg/60">{s.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </article>

        {more.length > 0 && (
          <div className="mt-16 md:mt-20">
            <span className="sticker bg-pink">Support</span>
            <ul className="mt-6 border-t-2 border-ink">
              {more.map((m) => (
                <li key={m.slug} className="grid gap-2 border-b-2 border-ink py-5 md:grid-cols-12 md:items-baseline md:gap-6">
                  <h3 className="display text-4xl md:col-span-7 md:text-5xl">{m.name}</h3>
                  <p className="text-muted md:col-span-5">{m.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
}
