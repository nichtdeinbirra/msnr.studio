import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { ButtonLink, Container } from "./ui";

export function Contact() {
  const { contact, socials } = site;
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-24 md:py-36">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Kontakt</p>
          <h2 id="contact-title" className="display mt-5 text-[clamp(2.75rem,6vw,4.5rem)]">
            {contact.headline}
          </h2>
          <p className="mt-5 text-lg text-muted">{contact.text}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href={`mailto:${contact.email}`}>{contact.email}</ButtonLink>
            {socials.map((s) => (
              <ButtonLink key={s.href} href={s.href} variant="outline" external>
                {s.label}
              </ButtonLink>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
