import { featured } from "@/content/projects";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Shot, hasImage } from "./Shot";
import { ButtonLink, Container } from "./ui";

export function Hero() {
  const { hero, contact } = site;
  const withPhoto = hasImage(hero.photo.src);
  const wide = featured.shots.find((s) => s.device === "wide");
  const panel = featured.shots.find((s) => s.src.includes("eventday"));

  return (
    <section aria-labelledby="hero-title" className="overflow-hidden pb-20 pt-32 md:pb-32 md:pt-44">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              {withPhoto && (
                <Shot src={hero.photo.src} alt={hero.photo.alt} className="size-9 rounded-full border border-line-strong" />
              )}
              {hero.greeting}
            </p>
            <h1 id="hero-title" className="display mt-6 text-[clamp(2.75rem,5.5vw,4.5rem)]">
              {hero.headline.start} <span className="text-lime">{hero.headline.highlight}</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">{hero.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${contact.email}`}>Projekt anfragen</ButtonLink>
              <ButtonLink href="#work" variant="outline">
                Arbeiten ansehen
              </ButtonLink>
            </div>

            <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-6">
              {hero.facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-sm text-muted">{f.label}</dt>
                  <dd className="mt-1 font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {wide && panel && (
            <Reveal delay={0.15} className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="relative pb-[38%] pl-[18%] lg:-mr-24">
                <Shot src={wide.src} alt={wide.alt} className="w-full rounded-2xl border border-line shadow-[0_40px_80px_-30px_rgb(0_0_0/0.9)]" />
                <Shot
                  src={panel.src}
                  alt={panel.alt}
                  className="absolute bottom-0 left-0 w-[46%] rounded-2xl border border-line-strong shadow-[0_40px_80px_-20px_rgb(0_0_0/0.95)]"
                />
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
