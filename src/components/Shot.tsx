import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * An image from /public, or a dashed placeholder naming the missing file.
 * Runs at build time only (static export), so the fs check is safe.
 */
/** True when the file exists under /public. Build time only. */
export const hasImage = (src: string) => existsSync(join(process.cwd(), "public", src));

export function Shot({
  src,
  alt,
  className = "",
  imgClassName = "",
  placeholderClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Extra classes for the placeholder only, e.g. an aspect ratio. */
  placeholderClassName?: string;
}) {
  const exists = hasImage(src);

  if (!exists) {
    return (
      <div
        className={`grid place-items-center overflow-hidden border-2 border-dashed border-line-strong bg-surface p-4 text-center text-sm text-muted ${className} ${placeholderClassName}`}
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
