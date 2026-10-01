# Übergabe

Stand: 01.10.2026.

## msnr.studio (Portfolio-Seite von Kimmo Meissner)

- Code: dieses Repo. Next.js 16, TypeScript, Tailwind 4, Framer Motion. Statischer Export nach `out/`.
- Inhalte: `src/content/` (`site.ts`, `projects.ts`, `capabilities.ts`).
- Wortmarke: `MSNR.` mit blauem Punkt. Farben: `#0A0B10`, `#151724`, `#648BFF`, `#9A86FF`, `#F8F9FF`, `#989EB2`. Schriften: Bricolage Grotesque, Geist, Geist Mono (per next/font, lokal ausgeliefert).
- Projekte: OFFSTG. (Eventplattform, früher Sidestage, Live-App sidestage-app.vercel.app). Brainer wurde entfernt. Klein darunter: Ponyhof Club Portal und Marketing Tracker.
- Live: https://msnr.studio auf Netlify, Projekt `admirable-semifreddo-29d5f7`, per Netlify Drop hochgeladen. Domain bei Porkbun: A `75.2.60.5`, CNAME `www` auf die Netlify-Adresse.
- Deploy aktuell: `npm run build`, dann den Ordner `out/` bei Netlify hochladen. `out/` darf keine `netlify.toml` enthalten, sonst startet Netlify einen Build und scheitert.

### Erledigt

- Impressum (`src/app/impressum/page.tsx`) und Datenschutzerklärung (`src/app/datenschutz/page.tsx`) sind ausgefüllt, Daten in `src/content/site.ts` (`legal`). Footer verlinkt beide.

### Offen für msnr.studio

1. AVV/DPA mit Netlify prüfen.
2. E-Mail-Weiterleitung `hello@msnr.studio` bei Porkbun einrichten.
3. Ponyhof Club fragen, ob er genannt werden darf.
4. Netlify-Badge „Powered by Netlify“ unter Project configuration → General abschalten.
5. Dieses Repo bei Netlify verbinden (Build `npm run build`, Publish `out`, steht in `netlify.toml`), dann entfällt der manuelle Upload.

### Deploy (neu)

- Live-Seite ist `site/index.html` (eine statische Datei, enthält Impressum, Datenschutz und Konzeptseite eingebettet). `netlify.toml` veröffentlicht `site/` ohne Build. Die Next.js-Quellen unter `src/` sind nicht mehr live.
- Änderungen: `site/index.html` bearbeiten, committen, nach `main` pushen. Netlify muss dafür einmalig mit dem GitHub-Repo verbunden sein.
