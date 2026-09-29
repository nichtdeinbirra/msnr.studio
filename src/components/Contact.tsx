import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { ButtonLink, Container } from "./ui";

export function Contact() {
  const { contact, socials } = site;
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-24 md:py-40">
      {/* chiselled corner, the same cut as in the hero and favicon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-72 rotate-45 border border-line bg-surface md:-right-40 md:-top-40 md:size-[26rem]"
      />
      <Container className="relative">
        <div className="border-t border-line pt-6">
          <p className="eyebrow">Contact</p>
          <Reveal>
            <h2 id="contact-title" className="display mt-10 max-w-[12ch] text-[clamp(3rem,10vw,10rem)]">
              {contact.headline.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-accent">{contact.headline.split(" ").slice(-1)}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:items-end">
            <p className="max-w-md text-lg leading-relaxed text-muted md:col-span-5 md:text-xl">{contact.text}</p>
            <div className="flex flex-wrap items-center gap-3 md:col-span-7 md:justify-end">
              <ButtonLink href={`mailto:${contact.email}`}>{contact.email}</ButtonLink>
              {socials.map((s) => (
                <ButtonLink key={s.href} href={s.href} variant="outline" external>
                  {s.label}
                </ButtonLink>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
