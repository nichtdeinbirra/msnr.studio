import { featured, more } from "@/content/projects";
import { ProjectBento } from "./ProjectBento";
import { Reveal } from "./Reveal";
import { Container, SectionHead } from "./ui";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="py-24 md:py-36">
      <Container>
        <SectionHead
          id="work-title"
          eyebrow="Selected Work"
          title={
            <>
              Products I design <span className="text-muted">and build myself.</span>
            </>
          }
          aside={<span className="font-mono">({String(featured.length).padStart(2, "0")})</span>}
        />

        <div className="space-y-3 md:space-y-4">
          {featured.map((project, i) => (
            <ProjectBento key={project.slug} project={project} flip={i % 2 === 1} index={i} />
          ))}
        </div>

        {more.length > 0 && (
          <div className="mt-20 md:mt-28">
            <p className="eyebrow mb-6">Also built</p>
            <ul className="border-t border-line">
              {more.map((p, i) => (
                <Reveal as="li" key={p.slug} delay={i * 0.05} className="border-b border-line">
                  <div className="grid gap-2 py-6 transition-colors md:grid-cols-12 md:items-baseline md:gap-6">
                    <h3 className="display text-2xl md:col-span-4 md:text-3xl">{p.name}</h3>
                    <p className="eyebrow md:col-span-2">{p.category}</p>
                    <p className="text-sm leading-relaxed text-muted md:col-span-4">{p.summary}</p>
                    <p className="font-mono text-xs text-muted md:col-span-2 md:text-right">{p.stack.join(" · ")}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
}
