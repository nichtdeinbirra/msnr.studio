import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Container } from "./ui";

const cardStyles = ["bg-bg md:-rotate-1", "bg-lime md:rotate-1 md:mt-8", "bg-pink md:-rotate-1"];

export function Process() {
  const { process } = site;
  return (
    <section id="process" aria-labelledby="process-title" className="grain border-y-2 border-ink py-20 md:py-28">
      <Container>
        <h2 id="process-title" className="display text-[clamp(3.5rem,11vw,9rem)]">
          {process.title}
        </h2>

        <ol className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
          {process.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 0.08}
              className={`rounded-3xl border-2 border-ink p-6 shadow-[5px_5px_0_var(--color-ink)] md:p-8 ${cardStyles[i % cardStyles.length]}`}
            >
              <div className="flex items-start justify-between border-b-2 border-dashed border-ink pb-4">
                <span className="display text-7xl">{String(i + 1).padStart(2, "0")}</span>
                <span className="eyebrow text-ink">Schritt {i + 1}</span>
              </div>
              <h3 className="display mt-5 text-3xl">{step.title}</h3>
              <p className="mt-3 leading-relaxed">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
