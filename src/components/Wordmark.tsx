import { site } from "@/content/site";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-block whitespace-nowrap font-brand font-extrabold tracking-[-0.045em] ${className}`}>
      {site.name}
      <span className="text-accent">.</span>
    </span>
  );
}
