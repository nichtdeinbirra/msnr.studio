import Link from "next/link";
import { site } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="overflow-hidden border-t border-line">
      <div className="mx-auto max-w-[1440px] px-5 pt-16 md:px-10 md:pt-24">
        <Wordmark className="block text-[18.5vw] leading-[0.8] md:text-[17.5vw] 2xl:text-[15rem]" />
        <div className="mt-10 flex flex-col gap-4 border-t border-line py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. · {site.owner}
          </p>
          <ul className="flex gap-6">
            {site.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/imprint" className="transition-colors hover:text-ink">
                Imprint & Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
