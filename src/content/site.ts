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
  positioning: "Kimmo Meissner builds apps with AI",
  owner: "Kimmo Meissner",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://msnr.studio",

  hero: {
    greeting: "Hi, I'm Kimmo.",
    intro:
      "I build apps for problems I actually run into. I'm not a trained developer. I vibecode: I bring the idea and the taste, AI writes the code.",
    /** Photo of Kimmo. Drop the file at public/me.jpg. */
    photo: { src: "/me.jpg", alt: "Kimmo Meissner" },
  },

  about: {
    title: "How I work",
    steps: [
      { title: "Idea", text: "I start with a problem I know first-hand, not a feature list." },
      { title: "Build with AI", text: "I describe what I want in Claude Code, then review and test every step." },
      { title: "Ship", text: "It goes live, real people use it, and I keep improving it." },
    ],
    facts: [
      { label: "Based in", value: "Offenbach am Main" },
      { label: "Tools", value: "Claude Code, Next.js, Supabase, Vercel" },
    ],
  },

  contact: {
    headline: "Got an idea? Let's talk.",
    text: "Write me a few lines about what you'd like to build.",
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
