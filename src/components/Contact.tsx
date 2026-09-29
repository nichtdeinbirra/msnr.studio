import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { ButtonLink, Container } from "./ui";

/** Contact block styled as an admission ticket. */
export function Contact() {
  const { contact, socials, owner } = site;
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 md:py-28">
      <Container>
        <Reveal className="relative rounded-3xl border-2 border-ink bg-lime shadow-[8px_8px_0_var(--color-ink)]">
          {/* Ticket notches */}
          <span aria-hidden="true" className="absolute -left-[18px] top-1/2 size-8 -translate-y-1/2 rounded-full border-2 border-ink bg-bg [clip-path:inset(0_0_0_50%)]" />
          <span aria-hidden="true" className="absolute -right-[18px] top-1/2 size-8 -translate-y-1/2 rounded-full border-2 border-ink bg-bg [clip-path:inset(0_50%_0_0)]" />

          <div className="grid md:grid-cols-12">
            <div className="p-6 md:col-span-9 md:p-12">
              <p className="eyebrow text-ink">Admit one · {owner}</p>
              <h2 id="contact-title" className="display mt-6 text-[clamp(3rem,9vw,7.5rem)]">
                {contact.headline}
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed">{contact.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={`mailto:${contact.email}`}>{contact.email}</ButtonLink>
                {socials.map((s) => (
                  <ButtonLink key={s.href} href={s.href} variant="outline" external>
                    {s.label}
                  </ButtonLink>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 border-t-2 border-dashed border-ink p-6 md:col-span-3 md:flex-col md:items-start md:justify-center md:border-l-2 md:border-t-0 md:p-8">
              <p className="display text-5xl md:text-6xl">
                {site.name}
                <span className="text-accent">.</span>
              </p>
              <p className="eyebrow text-ink">Nr. 0001</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
