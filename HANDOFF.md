# Übergabe

Stand: 29.09.2026.

## msnr.studio (Portfolio-Seite von Kimmo Meissner)

- Code: dieses Repo. Next.js 16, TypeScript, Tailwind 4, Framer Motion. Statischer Export nach `out/`.
- Inhalte: `src/content/` (`site.ts`, `projects.ts`, `capabilities.ts`).
- Wortmarke: `MSNR.` mit blauem Punkt. Farben: `#0A0B10`, `#151724`, `#648BFF`, `#9A86FF`, `#F8F9FF`, `#989EB2`. Schriften: Bricolage Grotesque, Geist, Geist Mono (per next/font, lokal ausgeliefert).
- Projekte: OFFSTG. (Eventplattform, früher Sidestage, Live-App sidestage-app.vercel.app) und Brainer (Obsidian Second Brain, Platzhalter-Visual). Klein darunter: Ponyhof Club Portal und Marketing Tracker.
- Live: https://msnr.studio auf Netlify, Projekt `admirable-semifreddo-29d5f7`, per Netlify Drop hochgeladen. Domain bei Porkbun: A `75.2.60.5`, CNAME `www` auf die Netlify-Adresse.
- Deploy aktuell: `npm run build`, dann den Ordner `out/` bei Netlify hochladen. `out/` darf keine `netlify.toml` enthalten, sonst startet Netlify einen Build und scheitert.

### Offen für msnr.studio (Rechtliches in Deutschland)

1. Impressum (§ 5 DDG): Name, ladungsfähige Anschrift, funktionierende E-Mail, optional Telefon, Kleinunternehmer-Hinweis § 19 UStG oder USt-ID. Aktuell Platzhalter in `src/app/imprint/page.tsx`.
2. Datenschutzerklärung: Verantwortlicher, Hosting bei Netlify (Server-Logs, USA-Übermittlung, Data Privacy Framework prüfen), E-Mail-Kontakt, Betroffenenrechte.
3. AVV/DPA mit Netlify prüfen.
4. Footer-Link auf Deutsch: „Impressum · Datenschutz“.
5. E-Mail-Weiterleitung `hello@msnr.studio` bei Porkbun einrichten.
6. Platzhalter in About entfernen (Wohnort, Sprachen, Werdegang).
7. Ponyhof Club fragen, ob er genannt werden darf.
8. Netlify-Badge „Powered by Netlify“ unter Project configuration → General abschalten.
9. Dieses Repo bei Netlify verbinden (Build `npm run build`, Publish `out`, steht in `netlify.toml`), dann entfällt der manuelle Upload.

Nächster Schritt: Kimmo schickt Anschrift, optional Telefon, Kleinunternehmer ja/nein und Status der E-Mail-Weiterleitung. Dann Impressum und Datenschutz eintragen, neu bauen, `out/` als ZIP liefern.
