/**
 * Projects shown in "Work".
 *
 * Screenshots go in /public/work/<slug>/. Until a file exists, the site
 * shows a dashed placeholder with the file name, so it is clear what is
 * missing. Only use real screenshots of the product, never mock-ups.
 */

export type Shot = {
  /** Path under /public. */
  src: string;
  alt: string;
  /** Short caption under the image. */
  caption: string;
  /** "wide" spans the full width, "panel" shots sit side by side. */
  device: "wide" | "panel";
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  highlights: string[];
  /** Short status badge, e.g. "Bald live". No public link until it launches. */
  status?: string;
  shots: Shot[];
};

export const featured: Project = {
  slug: "offstg",
  name: "OFFSTG.",
  tagline: "Eventplanung für Clubnächte",
  summary:
    "Clubteams planen ihre Nächte oft über Tabellen, WhatsApp-Gruppen und Zettel. OFFSTG. bringt alles in eine App: Event planen, Tickets verkaufen, Gäste an der Tür einchecken und danach sehen, was hängen geblieben ist.",
  highlights: ["QR-Check-in an der Tür, auch offline", "Ticket-Vorverkauf mit Stripe", "Gewinn und Marge nach jeder Nacht"],
  status: "Bald live",
  shots: [
    {
      src: "/work/offstg/dashboard.png",
      alt: "OFFSTG. Dashboard mit Ticketzahlen, anstehenden Events und Budget",
      caption: "Dashboard · Beispieldaten",
      device: "wide",
    },
    {
      src: "/work/offstg/overview.png",
      alt: "OFFSTG. Übersicht mit Kennzahlen und anstehenden Events",
      caption: "Übersicht · Beispieldaten",
      device: "panel",
    },
    {
      src: "/work/offstg/eventday.png",
      alt: "OFFSTG. Eventtag-Modus mit Gästezahl, Ablauf und Ticket-Scanner",
      caption: "Eventtag-Modus an der Tür · Beispieldaten",
      device: "panel",
    },
  ],
};

export const more: { slug: string; name: string; summary: string }[] = [
  {
    slug: "ponyhof-portal",
    name: "Ponyhof Club Portal",
    summary: "Events, Tickets und Gutscheine für den Ponyhof Club Frankfurt.",
  },
  {
    slug: "ponyhof-tracker",
    name: "Ponyhof Marketing Tracker",
    summary: "Kampagnen, Content-Kalender und Instagram-Posts für das Marketing-Team des Clubs.",
  },
];
