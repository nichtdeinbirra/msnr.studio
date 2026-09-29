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
      "I'm a vibecoder: I bring the idea, the design and the decisions, AI writes most of the code. Together we ship real products.",
    cta: { label: "Explore My Work", href: "#work" },
  },

  about: {
    statement:
      "I'm not a trained developer. I build software with AI, and I take it all the way to live.",
    paragraphs: [
      "I'm Kimmo Meissner. msnr.studio is my independent studio. I don't write code by hand. I work with AI tools like Claude Code: I describe what the product should do and how it should feel, review what comes back, test it and decide what ships.",
      "That's called vibecoding. It lets me take an idea from a first sketch to a live app with login, database and payments, without a dev team.",
      "Most of what I build starts with a real problem, mine or that of people I work with. OFFSTG. is built for club teams who would otherwise plan events across spreadsheets, chats and paper.",
    ],
    facts: [
      { label: "Studio", value: "Independent" },
      { label: "Focus", value: "Product design & vibecoding" },
      { label: "Based in", value: "Offenbach am Main, Germany" },
      { label: "Built with", value: "Claude Code & AI tools" },
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
    street: "Bettinastraße 19",
    city: "63067 Offenbach am Main",
    phone: "+49 157 39468746",
    vat: "Kleinunternehmer gemäß § 19 UStG, daher wird keine Umsatzsteuer ausgewiesen.",
  },

  socials: [{ label: "GitHub", href: "https://github.com/nichtdeinbirra" }],

  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const isPlaceholder = (value: string) => /^\[.*\]$/.test(value.trim());
