/**
 * Capabilities, grouped. Only list what shipped in real projects.
 */

export const capabilities: { title: string; items: string[] }[] = [
  {
    title: "Product & interface",
    items: [
      "Product design for my own apps",
      "Mobile-first, responsive interfaces",
      "Design systems in Tailwind CSS",
      "Accessible, reduced-motion aware UI",
    ],
  },
  {
    title: "Frontend",
    items: [
      "Next.js App Router",
      "React 19 & TypeScript",
      "Progressive Web Apps with offline support",
      "Camera-based QR scanning",
    ],
  },
  {
    title: "Backend & data",
    items: [
      "Supabase: Postgres, Auth, Storage",
      "Row-level security & role models",
      "Prisma",
      "Server actions & API routes",
    ],
  },
  {
    title: "Integrations & shipping",
    items: [
      "Stripe Connect payments",
      "Transactional email with Resend",
      "CSV imports, Meta & Instagram data",
      "Continuous deploys on Vercel",
    ],
  },
];
