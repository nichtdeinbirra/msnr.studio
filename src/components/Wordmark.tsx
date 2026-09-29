import { site } from "@/content/site";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`display inline-block whitespace-nowrap ${className}`}>
      {site.name}
      <span className="text-accent">.</span>
    </span>
  );
}
