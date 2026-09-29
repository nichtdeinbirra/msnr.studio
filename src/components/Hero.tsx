import { site } from "@/content/site";
import { Marquee } from "./Marquee";
import { Reveal } from "./Reveal";
import { Shot, hasImage } from "./Shot";
import { ButtonLink, Container } from "./ui";

// Sticker positions around the headline, desktop only.
const stickerStyles = [
  "bg-pink -rotate-6 lg:right-[4%] lg:top-[6%]",
  "bg-bg rotate-3 lg:right-[18%] lg:top-[46%]",
  "bg-lime -rotate-3 lg:right-[2%] lg:top-[72%]",
];

export function Hero() {
  const { hero, contact } = site;
  const withPhoto = hasImage(hero.photo.src);

  return (
    <section aria-labelledby="hero-title" className="grain pt-16 md:pt-20">
      <Marquee />
      <Container className="pb-16 pt-8 md:pb-24 md:pt-10">
        <div className="eyebrow flex justify-between border-b-2 border-ink pb-3 text-ink">
          <span>{site.name}. präsentiert</span>
          <span>Offenbach am Main</span>
        </div>

        <div className="relative mt-10 md:mt-14">
          <Reveal>
            <h1 id="hero-title" className="display text-[clamp(3.75rem,13vw,11.5rem)] leading-[1.14]">
              {hero.lines.map((line) => (
                <span key={line.text} className="relative block">
                  {"highlight" in line && line.highlight ? (
                    <span className="-ml-2 inline-block -rotate-1 bg-lime px-2 leading-[1.02]">{line.text}</span>
                  ) : (
                    line.text
                  )}
                </span>
              ))}
            </h1>
          </Reveal>

          {withPhoto && (
            <Reveal delay={0.15} className="mt-10 w-2/3 max-w-xs lg:absolute lg:right-[8%] lg:top-[2%] lg:mt-0 lg:w-[22%]">
              <Shot
                src={hero.photo.src}
                alt={hero.photo.alt}
                className="aspect-[4/5] w-full rotate-3 border-[6px] border-bg shadow-[6px_6px_0_var(--color-ink)]"
              />
            </Reveal>
          )}

          <ul className="mt-8 flex flex-wrap gap-3 lg:contents">
            {hero.stickers.map((s, i) => (
              <li
                key={s}
                className={`sticker lg:absolute ${stickerStyles[i % stickerStyles.length]} ${withPhoto && i === 0 ? "lg:hidden" : ""}`}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid gap-10 border-t-2 border-ink pt-8 md:mt-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <p className="max-w-lg text-lg leading-relaxed md:text-xl md:leading-relaxed">{hero.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${contact.email}`}>Projekt anfragen</ButtonLink>
              <ButtonLink href="#work" variant="outline">
                Arbeiten ansehen
              </ButtonLink>
            </div>
          </div>
          <dl className="grid grid-cols-3 gap-4 self-end md:col-span-6">
            {hero.details.map((d) => (
              <div key={d.label} className="border-l-2 border-ink pl-3">
                <dt className="eyebrow">{d.label}</dt>
                <dd className="mt-1 font-medium leading-snug">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
