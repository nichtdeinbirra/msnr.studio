import Link from "next/link";
import { site } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-ink bg-ink text-bg">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-5 py-10 text-sm text-bg/70 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="flex items-center gap-3">
          <Wordmark className="text-lg text-bg" />
          <span>
            © {year} {site.owner}
          </span>
        </p>
        <ul className="flex gap-6">
          {site.socials.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-bg">
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <Link href="/impressum" className="transition-colors hover:text-bg">
              Impressum
            </Link>
          </li>
          <li>
            <Link href="/datenschutz" className="transition-colors hover:text-bg">
              Datenschutz
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
