import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { ButtonLink, Container } from "./ui";

export function Contact() {
  const { contact, socials } = site;
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 md:py-32">
      <Container>
        <Reveal className="rounded-[2rem] bg-ink px-6 py-14 text-bg md:px-14 md:py-20">
          <h2 id="contact-title" className="display max-w-[14ch] text-[clamp(2.75rem,7vw,5.5rem)]">
            {contact.headline}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-bg/70">{contact.text}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href={`mailto:${contact.email}`} className="!bg-bg !text-ink hover:!bg-accent hover:!text-white">
              {contact.email}
            </ButtonLink>
            {socials.map((s) => (
              <ButtonLink key={s.href} href={s.href} variant="outline" external className="!border-bg/30 !text-bg hover:!border-bg">
                {s.label}
              </ButtonLink>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
