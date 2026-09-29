import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Container, SectionHead } from "./ui";

export function About() {
  const { about } = site;
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 md:py-32">
      <Container>
        <SectionHead id="about-title" title={about.title} />

        <ol className="grid gap-4 md:grid-cols-3 md:gap-6">
          {about.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.06} className="rounded-3xl border border-line p-6 md:p-8">
              <p className="display text-5xl text-accent">{i + 1}</p>
              <h3 className="mt-6 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
            </Reveal>
          ))}
        </ol>

        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-sm">
          {about.facts.map((f) => (
            <div key={f.label} className="flex gap-2">
              <dt className="text-muted">{f.label}:</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
