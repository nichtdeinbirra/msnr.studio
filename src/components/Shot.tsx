import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * An image from /public, or a dashed placeholder naming the missing file.
 * Runs at build time only (static export), so the fs check is safe.
 */
export function Shot({
  src,
  alt,
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  const exists = existsSync(join(process.cwd(), "public", src));

  if (!exists) {
    return (
      <div
        className={`grid place-items-center overflow-hidden border-2 border-dashed border-line-strong bg-surface p-4 text-center text-sm text-muted ${className}`}
      >
        <span>
          Image missing
          <br />
          <code className="break-all text-xs">public{src}</code>
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export, images are pre-sized
    <img src={src} alt={alt} loading="lazy" className={`object-cover ${className} ${imgClassName}`} />
  );
}
