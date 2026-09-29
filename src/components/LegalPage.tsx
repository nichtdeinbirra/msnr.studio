import Link from "next/link";
import { Container } from "@/components/ui";
import { site } from "@/content/site";

/** Shared layout for Impressum and Datenschutz. Both are in German. */
export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Container className="pb-24 pt-28 md:pb-32 md:pt-36">
      <div lang="de" className="grid gap-12 border-t border-line pt-6 md:grid-cols-12 md:gap-6">
        <p className="eyebrow md:col-span-3">Rechtliches</p>
        <div className="md:col-span-7">
          <h1 className="display text-[clamp(3rem,8vw,6.5rem)]">{title}</h1>
          {children}
          <Link href="/" className="mt-16 inline-block text-sm text-muted transition-colors hover:text-ink">
            ← Zurück zu {site.name}.
          </Link>
        </div>
      </div>
    </Container>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mt-14 text-xl font-medium">{title}</h2>
      <div className="mt-6 space-y-4 leading-relaxed text-muted [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-4">
        {children}
      </div>
    </section>
  );
}
