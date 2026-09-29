import { site } from "@/content/site";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";
import { Container } from "./ui";

export function Contact() {
  const { contact } = site;
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-24 md:py-36">
      <Container>
        <Reveal className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="eyebrow">Kontakt</p>
            <h2 id="contact-title" className="display mt-5 text-[clamp(2.75rem,6vw,4.5rem)]">
              {contact.headline}
            </h2>
            <p className="mt-5 text-lg text-muted">
              {contact.text} Oder direkt an{" "}
              <a href={`mailto:${contact.email}`} className="text-ink underline underline-offset-4">
                {contact.email}
              </a>
              .
            </p>
          </div>
          <div className="mt-10">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
