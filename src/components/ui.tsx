import { isPlaceholder } from "@/content/site";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={`size-4 ${className}`} fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={`size-4 ${className}`} fill="none">
      <path d="M5 11l6-6M6 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
};

export function ButtonLink({ href, children, variant = "solid", external, className = "" }: ButtonProps) {
  const base =
    "group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium transition-colors duration-300";
  const styles =
    variant === "solid"
      ? "bg-ink text-bg hover:bg-accent"
      : "border border-line-strong text-ink hover:border-ink";
  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external ? (
        <ArrowUpRight className="transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      ) : (
        <Arrow className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
      )}
    </a>
  );
}

export function SectionHead({
  eyebrow,
  title,
  aside,
  id,
}: {
  eyebrow: string;
  title: React.ReactNode;
  aside?: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="mb-12 grid gap-6 border-t border-line pt-6 md:mb-16 md:grid-cols-12">
      <p className="eyebrow md:col-span-3">{eyebrow}</p>
      <h2 id={id} className="display text-[clamp(2.5rem,6vw,5.5rem)] md:col-span-7">
        {title}
      </h2>
      {aside && <div className="text-sm text-muted md:col-span-2 md:text-right">{aside}</div>}
    </div>
  );
}

/** Renders placeholder text ("[...]") so it stands out until it is replaced. */
export function Editable({ value }: { value: string }) {
  if (!isPlaceholder(value)) return <>{value}</>;
  return (
    <span className="rounded-md border border-dashed border-line-strong px-1.5 py-0.5 text-muted" title="Placeholder, edit in src/content/site.ts">
      {value}
    </span>
  );
}

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1440px] px-5 md:px-10 ${className}`}>{children}</div>;
}
