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
  link?: { label: string; href: string };
  shots: Shot[];
};

export const featured: Project = {
  slug: "offstg",
  name: "OFFSTG.",
  tagline: "Event planning for club nights",
  summary:
    "Club teams plan their nights across spreadsheets, group chats and paper. OFFSTG. puts it in one app: plan the event, sell tickets, check guests in at the door and see the numbers afterwards.",
  highlights: ["QR check-in at the door, even offline", "Ticket presale with Stripe", "Profit and margin after every night"],
  link: { label: "Open OFFSTG.", href: "https://sidestage-app.vercel.app" },
  shots: [
    {
      src: "/work/offstg/dashboard.png",
      alt: "OFFSTG. dashboard with ticket numbers, upcoming events and budget",
      caption: "Dashboard · example data",
      device: "wide",
    },
    {
      src: "/work/offstg/overview.png",
      alt: "OFFSTG. compact overview with KPIs and upcoming events",
      caption: "Overview · example data",
      device: "panel",
    },
    {
      src: "/work/offstg/eventday.png",
      alt: "OFFSTG. event-day mode with guest count, timetable and ticket scanner",
      caption: "Event-day mode at the door · example data",
      device: "panel",
    },
  ],
};

export const more: { slug: string; name: string; summary: string }[] = [
  {
    slug: "ponyhof-portal",
    name: "Ponyhof Club Portal",
    summary: "Events, tickets and gift vouchers for Ponyhof Club Frankfurt.",
  },
  {
    slug: "ponyhof-tracker",
    name: "Ponyhof Marketing Tracker",
    summary: "Campaigns, content calendar and Instagram posts for the club's marketing team.",
  },
];
