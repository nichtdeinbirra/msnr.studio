import type { Metadata } from "next";
import { Editable } from "@/components/ui";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  alternates: { canonical: "/datenschutz" },
};

const stand = "29. September 2026";

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutz">
      <LegalSection title="Verantwortlicher">
        <p className="text-ink">
          {site.owner}
          <br />
          <Editable value={site.legal.street} />
          <br />
          <Editable value={site.legal.city} />
          <br />
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
        </p>
      </LegalSection>

      <LegalSection title="Das Wichtigste in Kürze">
        <p>
          Diese Website setzt keine Cookies, nutzt kein Tracking und keine Analyse-Tools und bindet keine
          Inhalte von Drittanbietern ein. Die Schriften werden von dieser Domain ausgeliefert, beim Aufruf
          wird also keine Verbindung zu Google oder anderen Font-Anbietern aufgebaut. Personenbezogene Daten
          fallen nur beim Hosting (Server-Logs) und an, wenn du mir eine E-Mail schreibst.
        </p>
      </LegalSection>

      <LegalSection title="Hosting und Server-Logs">
        <p>
          Die Website wird bei Netlify, Inc., San Francisco, USA gehostet. Bei jedem Aufruf verarbeitet
          Netlify technisch notwendige Daten: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Referrer
          sowie Browser und Betriebssystem. Das ist nötig, um die Seite auszuliefern und sie vor Angriffen zu
          schützen.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse liegt in einer sicheren
          und zuverlässigen Bereitstellung der Website. Mit Netlify besteht ein Vertrag zur
          Auftragsverarbeitung nach Art. 28 DSGVO.
        </p>
        <p>
          Dabei können Daten in die USA übermittelt werden. Netlify ist nach dem EU-U.S. Data Privacy
          Framework zertifiziert, für die Übermittlung besteht damit ein Angemessenheitsbeschluss der
          EU-Kommission (Art. 45 DSGVO). Mehr dazu in der{" "}
          <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">
            Datenschutzerklärung von Netlify
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Kontakt per E-Mail">
        <p>
          Wenn du mir schreibst, verarbeite ich deine E-Mail-Adresse und den Inhalt der Nachricht, um deine
          Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn es um einen Auftrag
          oder ein mögliches Projekt geht, sonst Art. 6 Abs. 1 lit. f DSGVO. Ich lösche die Nachrichten, wenn
          sie nicht mehr gebraucht werden und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
        </p>
      </LegalSection>

      <LegalSection title="Deine Rechte">
        <p>
          Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17),
          Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen
          Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21). Eine E-Mail an{" "}
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> genügt.
        </p>
        <p>
          Außerdem kannst du dich bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel bei der
          Behörde deines Wohnorts. Für mich zuständig ist der{" "}
          <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener noreferrer">
            Hessische Beauftragte für Datenschutz und Informationsfreiheit
          </a>
          .
        </p>
      </LegalSection>

      <p className="mt-16 text-sm text-muted">Stand: {stand}</p>
    </LegalPage>
  );
}
