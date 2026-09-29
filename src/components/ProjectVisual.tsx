import Image from "next/image";
import type { ProjectVisual as Visual } from "@/content/projects";

export function ProjectVisual({ visual, priority }: { visual: Visual; priority?: boolean }) {
  if (visual.kind === "placeholder") {
    return (
      <div className="hatch absolute inset-0 grid place-items-center bg-surface">
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-line-strong bg-bg/60 px-6 py-5 text-center backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="size-5 text-muted" fill="none" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3 15l5-4 4 3 3-2 6 4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <p className="eyebrow">Placeholder</p>
          <p className="text-sm text-ink">{visual.label}</p>
        </div>
      </div>
    );
  }

  if (visual.kind === "brand") {
    return (
      <div className="absolute inset-0 overflow-hidden" style={{ background: visual.background }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.04]">
          {/* eslint-disable-next-line @next/next/no-img-element -- small vector logo */}
          <img src={visual.icon} alt="" className="size-20 sm:size-28 md:size-36" />
          <div className="text-center">
            <p className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl md:text-7xl">{visual.wordmark}</p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em]" style={{ color: visual.accent }}>
              {visual.tagline}
            </p>
          </div>
        </div>
        {visual.note && <Note>{visual.note}</Note>}
      </div>
    );
  }

  return (
    <div className="absolute inset-0" style={{ background: visual.background }}>
      <Image
        src={visual.src}
        alt={visual.alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 66vw, 100vw"
        className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.04]"
      />
      {visual.note && <Note>{visual.note}</Note>}
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow absolute bottom-4 left-4 right-4 w-fit rounded-full border border-line bg-bg/70 px-3 py-1.5 backdrop-blur-sm">
      {children}
    </p>
  );
}
