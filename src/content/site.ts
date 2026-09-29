/**
 * Site-wide content. Edit here, not in the components.
 *
 * Values wrapped in [brackets] are placeholders for details that still need
 * to be filled in. Components render them in a muted, dashed style so they
 * are easy to spot before launch.
 */

export const site = {
  name: "MSNR",
  domain: "msnr.studio",
  positioning: "Apps und Websites für Clubs, Events und Nightlife",
  owner: "Kimmo Meissner",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://msnr.studio",

  /** Running text at the top of the page. */
  marquee: ["Bald am Start: OFFSTG.", "Apps für Clubs & Events", "Made in Offenbach", "Jetzt Projekt anfragen"],

  hero: {
    /** Headline lines; the line marked `highlight` gets the lime marker. */
    lines: [
      { text: "Kimmo baut" },
      { text: "Apps für", highlight: true },
      { text: "Nächte," },
      { text: "die laufen." },
    ],
    intro:
      "Ich baue Web-Apps und Websites für Clubs, Veranstalter und Events. Von der ersten Idee bis live, und du sprichst die ganze Zeit direkt mit mir.",
    stickers: ["Made in Offenbach", "Ohne Agentur", "Direkt mit mir"],
    /** Flyer-style details under the headline. */
    details: [
      { label: "Was", value: "Web-Apps & Websites" },
      { label: "Für", value: "Clubs, Events, Nightlife" },
      { label: "Wo", value: "Offenbach am Main" },
    ],
    /** Photo of Kimmo. Drop the file at public/me.jpg and it appears. */
    photo: { src: "/me.jpg", alt: "Kimmo Meissner" },
  },

  process: {
    title: "So läuft's",
    steps: [
      {
        title: "Wir reden",
        text: "Du erzählst mir, was nervt oder fehlt. Ich frage nach, bis ich deinen Ablauf verstanden habe.",
      },
      {
        title: "Ich baue",
        text: "Ich arbeite mit AI-Tools wie Claude Code. Dadurch bin ich schneller und günstiger. Jeden Schritt teste ich selbst.",
      },
      {
        title: "Es geht live",
        text: "Du bekommst eine App, die läuft, und mich als festen Ansprechpartner, wenn etwas dazukommen soll.",
      },
    ],
  },

  contact: {
    headline: "Lust auf ein Projekt?",
    text: "Schreib mir ein paar Zeilen, was du vorhast.",
    email: "hello@msnr.studio",
  },

  /** Details for Impressum (§ 5 DDG) and Datenschutzerklärung. */
  legal: {
    street: "Bettinastraße 19",
    city: "63067 Offenbach am Main",
    phone: "+49 157 39468746",
    vat: "Kleinunternehmer gemäß § 19 UStG, daher wird keine Umsatzsteuer ausgewiesen.",
  },

  socials: [{ label: "GitHub", href: "https://github.com/nichtdeinbirra" }],

  nav: [
    { label: "Arbeiten", href: "#work" },
    { label: "So läuft's", href: "#process" },
    { label: "Kontakt", href: "#contact" },
  ],
} as const;

export const isPlaceholder = (value: string) => /^\[.*\]$/.test(value.trim());
