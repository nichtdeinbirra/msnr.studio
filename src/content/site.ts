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
  positioning: "Apps und Websites, die im Alltag funktionieren",
  owner: "Kimmo Meissner",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://msnr.studio",

  hero: {
    greeting: "Hey, ich bin Kimmo 👋",
    /** Headline; `highlight` is shown in lime. */
    headline: { start: "Ich baue Apps und Websites, die", highlight: "im Alltag funktionieren." },
    intro: "Von der ersten Idee bis live. Ohne Agentur, du sprichst die ganze Zeit direkt mit mir.",
    facts: [
      { label: "Aktuell", value: "OFFSTG." },
      { label: "Was", value: "Web-Apps & Websites" },
      { label: "Aus", value: "Offenbach am Main" },
    ],
    /** Photo of Kimmo. Drop the file at public/me.jpg and it appears next to the greeting. */
    photo: { src: "/me.jpg", alt: "Kimmo Meissner" },
  },

  process: {
    title: "So arbeite ich",
    steps: [
      {
        title: "Zuhören",
        text: "Du erzählst mir, was nervt oder fehlt. Ich frage nach, bis ich deinen Ablauf verstanden habe.",
      },
      {
        title: "Bauen",
        text: "Ich arbeite mit AI-Tools wie Claude Code. Dadurch bin ich schneller und günstiger. Jeden Schritt teste ich selbst.",
      },
      {
        title: "Live gehen",
        text: "Du bekommst etwas, das läuft, und mich als festen Ansprechpartner, wenn etwas dazukommen soll.",
      },
    ],
  },

  contact: {
    headline: "Hast du eine Idee?",
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
    { label: "So arbeite ich", href: "#process" },
    { label: "Kontakt", href: "#contact" },
  ],
} as const;

export const isPlaceholder = (value: string) => /^\[.*\]$/.test(value.trim());
