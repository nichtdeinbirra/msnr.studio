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
  positioning: "Independent Digital Studio",
  owner: "Kimmo Meissner",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://msnr.studio",

  hero: {
    headline: "Ideas shaped into digital experiences.",
    intro:
      "Independent design & development. Building digital products with a distinct identity.",
    cta: { label: "Explore My Work", href: "#work" },
  },

  about: {
    statement:
      "I design and build software on my own, from the first screen to the database behind it.",
    paragraphs: [
      "I'm Kimmo Meissner. msnr.studio is my independent studio. I work on both sides of a product: how it looks and feels, and the code, data model and deployment that make it run.",
      "Most of what I build starts as a tool I need myself or one I build for people I work with. OFFSTG. is built for club teams who would otherwise plan events across spreadsheets, chats and paper. Brainer keeps my own projects organised.",
      "[Add a line about your background, e.g. how you got into development.]",
    ],
    facts: [
      { label: "Studio", value: "Independent" },
      { label: "Focus", value: "Product design & full-stack development" },
      { label: "Based in", value: "[City, Country]" },
      { label: "Languages", value: "[e.g. German, English]" },
    ],
  },

  contact: {
    headline: "Have an idea worth shaping?",
    text: "Tell me what you want to build, and what it should feel like.",
    /** Needs a mailbox (or forwarding) on the domain before launch. */
    email: "hello@msnr.studio",
  },

  /** Details for Impressum (§ 5 DDG) and Datenschutzerklärung. */
  legal: {
    street: "[Straße und Hausnummer]",
    city: "[PLZ Ort]",
    phone: "[Telefon, optional]",
    vat: "[Kleinunternehmer nach § 19 UStG, oder USt-IdNr.]",
  },

  socials: [{ label: "GitHub", href: "https://github.com/nichtdeinbirra" }],

  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const isPlaceholder = (value: string) => /^\[.*\]$/.test(value.trim());
