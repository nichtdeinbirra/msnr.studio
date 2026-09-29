import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Container, SectionHead } from "./ui";

export function Process() {
  const { process } = site;
  return (
    <section id="process" aria-labelledby="process-title" className="border-t border-line py-20 md:py-32">
      <Container>
        <SectionHead id="process-title" eyebrow="Ablauf" title={process.title} />

        <ol className="grid gap-4 md:grid-cols-3 md:gap-5">
          {process.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.06} className="rounded-3xl border border-line bg-surface p-6 md:p-8">
              <span className="font-mono text-sm text-lime">0{i + 1}</span>
              <h3 className="mt-8 text-xl font-medium">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
