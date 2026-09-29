import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Container, Editable } from "./ui";

export function About() {
  const { about } = site;
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 md:py-36">
      <Container>
        <div className="grid gap-12 border-t border-line pt-6 md:grid-cols-12 md:gap-6">
          <p className="eyebrow md:col-span-3">About</p>

          <div className="md:col-span-9">
            <Reveal>
              <h2 id="about-title" className="display max-w-[16ch] text-[clamp(2.25rem,5vw,4.75rem)] leading-[0.98]">
                {about.statement}
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-9 lg:gap-6">
              <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-5">
                {about.paragraphs.map((p, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <p>
                      <Editable value={p} />
                    </p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-6">
                <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line">
                  {about.facts.map((f) => (
                    <div key={f.label} className="bg-bg p-5 md:p-6">
                      <dt className="eyebrow mb-3">{f.label}</dt>
                      <dd className="text-sm leading-snug">
                        <Editable value={f.value} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
