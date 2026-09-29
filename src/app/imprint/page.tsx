import type { Metadata } from "next";
import Link from "next/link";
import { Container, Editable } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Imprint & Privacy",
  robots: { index: false },
};

/**
 * Legal page. German law (§ 5 DDG) requires name, postal address and a way
 * of contact. Replace every [placeholder] before going live.
 */
const imprint = [
  { label: "Responsible", value: site.owner },
  { label: "Address", value: "[Street and number, postcode, city]" },
  { label: "Email", value: site.contact.email },
  { label: "VAT", value: "[VAT ID, or: Small business under § 19 UStG]" },
];

export default function ImprintPage() {
  return (
    <Container className="pb-24 pt-32 md:pb-36 md:pt-44">
      <div className="grid gap-12 border-t border-line pt-6 md:grid-cols-12 md:gap-6">
        <p className="eyebrow md:col-span-3">Legal</p>
        <div className="md:col-span-7">
          <h1 className="display text-[clamp(2.75rem,7vw,6rem)]">Imprint & Privacy</h1>

          <h2 className="mt-16 font-display text-2xl font-semibold tracking-tight">Imprint</h2>
          <dl className="mt-6 divide-y divide-line border-y border-line">
            {imprint.map((row) => (
              <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-3">
                <dt className="eyebrow pt-0.5">{row.label}</dt>
                <dd className="sm:col-span-2">
                  <Editable value={row.value} />
                </dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-16 font-display text-2xl font-semibold tracking-tight">Privacy</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>
              This site sets no cookies and uses no analytics. Fonts are served from this domain, so no data
              is sent to font providers.
            </p>
            <p>
              <Editable value="[Hosting provider, the server logs it keeps, and your rights under the GDPR. Use a generator or legal advice for the final text.]" />
            </p>
          </div>

          <Link href="/" className="mt-16 inline-block text-sm text-muted transition-colors hover:text-ink">
            ← Back to {site.name}.
          </Link>
        </div>
      </div>
    </Container>
  );
}
