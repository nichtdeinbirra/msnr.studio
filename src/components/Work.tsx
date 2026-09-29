import { concepts, featured, more } from "@/content/projects";
import { Reveal } from "./Reveal";
import { Shot } from "./Shot";
import { ArrowUpRight, Container, SectionHead } from "./ui";

export function Work() {
  const p = featured;

  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-line py-20 md:py-32">
      <Container>
        <SectionHead id="work-title" eyebrow="Arbeiten" title="Woran ich gerade baue" />

        <article className="rounded-[2rem] border border-line bg-surface p-5 md:p-10">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-brand text-4xl font-extrabold tracking-[-0.045em] md:text-5xl">{p.name}</h3>
                {p.status && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-lime">
                    <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
                    {p.status}
                  </span>
                )}
              </div>
              <p className="mt-2 text-muted">{p.tagline}</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed">{p.summary}</p>
            </div>
            <ul className="space-y-3 self-end md:col-span-5">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3 border-b border-line pb-3 text-muted">
                  <span className="text-lime" aria-hidden="true">
                    ✓
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
            {p.shots.map((s, i) => (
              <Reveal key={s.src} delay={i * 0.06} className={s.device === "wide" ? "md:col-span-2" : ""}>
                <figure>
                  <Shot
                    src={s.src}
                    alt={s.alt}
                    className="w-full rounded-2xl border border-line"
                    placeholderClassName="aspect-[4/3]"
                  />
                  <figcaption className="eyebrow mt-3">{s.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </article>

        {concepts.length > 0 && (
          <div className="mt-14">
            <p className="eyebrow mb-4">Konzepte</p>
            <div className="grid gap-4 md:gap-5">
              {concepts.map((c) => (
                <Reveal key={c.slug}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener"
                    className="group grid gap-6 rounded-[2rem] border border-line bg-surface p-5 transition-colors hover:border-line-strong md:grid-cols-12 md:items-center md:p-8"
                  >
                    <div className="md:col-span-5">
                      <span className="rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-muted">Konzept</span>
                      <h3 className="mt-4 text-3xl font-medium tracking-tight">{c.name}</h3>
                      <p className="mt-1 text-muted">{c.tagline}</p>
                      <p className="mt-5 leading-relaxed">{c.summary}</p>
                      <span className="mt-6 inline-flex items-center gap-2 font-medium text-lime">
                        Konzept ansehen
                        <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                    <div className="relative md:col-span-7">
                      <Shot src={c.shots.desktop} alt={c.shots.alt} className="w-full rounded-2xl border border-line" />
                      <Shot
                        src={c.shots.phone}
                        alt=""
                        className="absolute -bottom-3 right-4 w-[24%] rounded-xl border border-line-strong shadow-[0_24px_48px_-16px_rgb(0_0_0/0.9)]"
                      />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {more.length > 0 && (
          <div className="mt-14">
            <p className="eyebrow mb-4">Außerdem gebaut</p>
            <ul className="divide-y divide-line border-y border-line">
              {more.map((m) => (
                <li key={m.slug} className="grid gap-1 py-5 md:grid-cols-12 md:gap-6">
                  <h3 className="font-medium md:col-span-4">{m.name}</h3>
                  <p className="text-muted md:col-span-8">{m.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
}
