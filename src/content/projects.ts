/**
 * Projects shown in "Selected Work".
 *
 * To add a product: append an entry to `featured` (large bento) or `more`
 * (compact list). Put images in /public/work/<slug>/ and reference them in
 * `visual`. Use `{ kind: "placeholder" }` until real screenshots exist —
 * never mock up screens that the product does not have.
 */

export type ProjectVisual =
  | {
      kind: "image";
      src: string;
      alt: string;
      /** Background behind the image, visible while it loads. */
      background: string;
      /** Short note shown on the visual, e.g. what the image is. */
      note?: string;
    }
  | {
      /** Built from a product's real brand assets (logo, colours). */
      kind: "brand";
      icon: string;
      wordmark: string;
      tagline: string;
      background: string;
      accent: string;
      note?: string;
    }
  | { kind: "placeholder"; label: string };

export type Project = {
  slug: string;
  name: string;
  /** One-line category shown above the name. */
  category: string;
  year: string;
  status: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  link?: { label: string; href: string };
  visual: ProjectVisual;
};

export const featured: Project[] = [
  {
    slug: "offstg",
    name: "OFFSTG.",
    category: "Event operations platform",
    year: "2026",
    status: "Live · in active development",
    role: "Idea & product design, built with AI",
    summary:
      "Plans events, counts guests at the door and settles the numbers after the night. Built for club teams who would otherwise juggle spreadsheets, chats and paper, on phone and desktop.",
    highlights: [
      "Event-day mode with QR check-in and an offline queue",
      "Timetable editor, shifts and ticket presale against capacity",
      "Post-event P&L with margin and break-even",
      "Five roles enforced in the database with row-level security",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind CSS", "PWA", "Vercel"],
    link: { label: "Open app", href: "https://sidestage-app.vercel.app" },
    visual: {
      kind: "brand",
      icon: "/work/offstg/icon.svg",
      wordmark: "OFFSTG.",
      tagline: "event operations",
      background: "#0A0A0A",
      accent: "#A3F70F",
      note: "Brand visual · product screenshots to be added",
    },
  },
];

export const more: Pick<Project, "slug" | "name" | "category" | "summary" | "stack">[] = [
  {
    slug: "ponyhof-portal",
    name: "Ponyhof Club Portal",
    category: "Web app · client",
    summary: "Events, tickets and gift vouchers for Ponyhof Club Frankfurt, installable as an app.",
    stack: ["Next.js", "Prisma", "Vercel"],
  },
  {
    slug: "ponyhof-tracker",
    name: "Ponyhof Marketing Tracker",
    category: "Internal tool · client",
    summary: "Campaigns, content calendar, Instagram posts and newsletters for the club's marketing team.",
    stack: ["Next.js", "Supabase", "Recharts"],
  },
];
