import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Shot, hasImage } from "./Shot";
import { ButtonLink, Container } from "./ui";

export function Hero() {
  const { hero, contact } = site;
  // Without a photo the intro spans the full width instead of leaving a gap.
  const withPhoto = hasImage(hero.photo.src);
  return (
    <section aria-labelledby="hero-title" className="pb-20 pt-28 md:pb-32 md:pt-40">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
          <Reveal className={withPhoto ? "md:col-span-7" : "md:col-span-10"}>
            <h1 id="hero-title" className="display text-[clamp(3.5rem,9vw,7.5rem)]">
              {hero.greeting}
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-muted md:text-2xl md:leading-relaxed">
              {hero.intro}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="#work">See my work</ButtonLink>
              <a href={`mailto:${contact.email}`} className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline">
                {contact.email}
              </a>
            </div>
          </Reveal>

          {withPhoto && (
            <Reveal delay={0.1} className="md:col-span-5">
              <Shot
                src={hero.photo.src}
                alt={hero.photo.alt}
                className="mx-auto aspect-[4/5] w-full max-w-sm rotate-2 rounded-[2rem] shadow-[0_24px_60px_-20px_rgb(23_23_27/0.35)] md:max-w-none"
              />
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
