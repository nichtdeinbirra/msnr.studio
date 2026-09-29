import { featured, more } from "@/content/projects";
import { Reveal } from "./Reveal";
import { Shot } from "./Shot";
import { ArrowUpRight, Container, SectionHead } from "./ui";

export function Work() {
  const p = featured;
  const wide = p.shots.filter((s) => s.device === "wide");
  const panels = p.shots.filter((s) => s.device === "panel");

  return (
    <section id="work" aria-labelledby="work-title" className="py-20 md:py-32">
      <Container>
        <SectionHead id="work-title" title="What I've built" />

        <article className="rounded-[2rem] bg-surface p-5 md:p-10">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="eyebrow">{p.tagline}</p>
              <h3 className="mt-2 font-brand text-5xl font-extrabold tracking-[-0.045em] md:text-7xl">{p.name}</h3>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{p.summary}</p>
            </div>
            <div className="md:col-span-5 md:text-right">
              <ul className="space-y-1.5 text-sm">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 font-medium text-accent"
                >
                  {p.link.label}
                  <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:mt-14 md:gap-6">
            {wide.map((s) => (
              <Reveal key={s.src}>
                <figure>
                  <Shot src={s.src} alt={s.alt} className="aspect-[3/2] w-full rounded-2xl bg-[#0d0e0c]" />
                  <figcaption className="eyebrow mt-3">{s.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
            <div className="grid items-start gap-4 sm:grid-cols-2 md:gap-6">
              {panels.map((s, i) => (
                <Reveal key={s.src} delay={i * 0.06}>
                  <figure>
                    <Shot src={s.src} alt={s.alt} className="w-full rounded-2xl bg-[#0d0e0c]" placeholderClassName="aspect-square" />
                    <figcaption className="eyebrow mt-3">{s.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </article>

        {more.length > 0 && (
          <div className="mt-16">
            <p className="eyebrow mb-4">Also built</p>
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
