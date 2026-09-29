import { capabilities } from "@/content/capabilities";
import { Reveal } from "./Reveal";
import { Container, SectionHead } from "./ui";

export function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="py-24 md:py-36">
      <Container>
        <SectionHead
          id="capabilities-title"
          eyebrow="What I've shipped"
          title={
            <>
              From interface <span className="text-muted">to infrastructure, built with AI.</span>
            </>
          }
        />
        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06} className="group bg-bg p-7 transition-colors duration-500 hover:bg-surface md:p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl font-semibold tracking-tight">{group.title}</h3>
                <span className="font-mono text-xs text-muted transition-colors group-hover:text-accent">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-10 space-y-3 text-sm text-muted">
                {group.items.map((item) => (
                  <li key={item} className="border-t border-line pt-3 transition-colors group-hover:text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
