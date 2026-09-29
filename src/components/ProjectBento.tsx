import type { Project } from "@/content/projects";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./ui";

const card = "relative overflow-hidden rounded-3xl border border-line bg-surface";

export function ProjectBento({ project, flip = false, index }: { project: Project; flip?: boolean; index: number }) {
  const visualCol = flip ? "lg:col-start-5" : "lg:col-start-1";
  const sideCol = flip ? "lg:col-start-1" : "lg:col-start-9";

  return (
    <article aria-labelledby={`${project.slug}-title`} className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
      {/* Visual */}
      <Reveal className={`md:col-span-2 lg:col-span-8 lg:row-span-2 lg:row-start-1 ${visualCol}`}>
        <div className={`${card} group aspect-[4/5] transition-colors duration-500 hover:border-line-strong sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[560px]`}>
          <ProjectVisual visual={project.visual} priority={index === 0} />
        </div>
      </Reveal>

      {/* Title card */}
      <Reveal delay={0.08} className={`lg:col-span-4 lg:row-start-1 ${sideCol}`}>
        <div className={`${card} flex h-full flex-col justify-between gap-10 p-7 md:p-8`}>
          <div className="flex items-start justify-between gap-4">
            <p className="eyebrow">{project.category}</p>
            <p className="eyebrow">{project.year}</p>
          </div>
          <div>
            <h3 id={`${project.slug}-title`} className="display text-[clamp(2.75rem,5vw,4.5rem)]">
              {project.name}
            </h3>
            <p className="mt-5 leading-relaxed text-muted">{project.summary}</p>
            {project.link && (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-out-expo group-hover/link:bg-[length:100%_1px]">
                  {project.link.label}
                </span>
                <ArrowUpRight className="text-accent transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>
      </Reveal>

      {/* Details card */}
      <Reveal delay={0.16} className={`lg:col-span-4 lg:row-start-2 ${sideCol}`}>
        <div className={`${card} flex h-full flex-col gap-8 p-7 md:p-8`}>
          <ul className="space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed">
                <span aria-hidden="true" className="mt-[0.55em] size-1.5 shrink-0 rotate-45 bg-accent" />
                {h}
              </li>
            ))}
          </ul>
          <dl className="mt-auto grid grid-cols-2 gap-x-4 gap-y-4 border-t border-line pt-6 text-sm">
            <div>
              <dt className="eyebrow mb-1">Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Status</dt>
              <dd>{project.status}</dd>
            </div>
            <div className="col-span-2">
              <dt className="sr-only">Stack</dt>
              <dd className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span key={s} className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.7rem] text-muted">
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </Reveal>
    </article>
  );
}
