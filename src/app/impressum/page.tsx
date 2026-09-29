import type { Metadata } from "next";
import { Editable } from "@/components/ui";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: "/impressum" },
};

/**
 * Anbieterkennzeichnung nach § 5 DDG. Die Angaben kommen aus
 * `site.legal` in src/content/site.ts.
 */
const rows = [
  { label: "Anbieter", value: site.owner },
  { label: "Anschrift", value: [site.legal.street, site.legal.city] },
  { label: "E-Mail", value: site.contact.email, href: `mailto:${site.contact.email}` },
  { label: "Telefon", value: site.legal.phone },
  { label: "Umsatzsteuer", value: site.legal.vat },
];

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <LegalSection title="Angaben gemäß § 5 DDG">
        <dl className="divide-y divide-line border-y border-line text-ink">
          {rows.map((row) => (
            <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-3">
              <dt className="eyebrow pt-0.5">{row.label}</dt>
              <dd className="sm:col-span-2">
                {Array.isArray(row.value) ? (
                  row.value.map((line) => (
                    <span key={line} className="block">
                      <Editable value={line} />
                    </span>
                  ))
                ) : row.href ? (
                  <a href={row.href}>{row.value}</a>
                ) : (
                  <Editable value={row.value} />
                )}
              </dd>
            </div>
          ))}
        </dl>
      </LegalSection>

      <LegalSection title="Verantwortlich für den Inhalt">
        <p>
          {site.owner}, Anschrift wie oben.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Links">
        <p>
          Diese Seite verlinkt auf externe Websites. Für deren Inhalte sind ausschließlich die jeweiligen
          Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar.
          Sollte mir eine Rechtsverletzung bekannt werden, entferne ich den Link umgehend.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
