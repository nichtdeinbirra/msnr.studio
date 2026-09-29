# MEISSEL.

Portfolio and studio site of Kimmo Meissner. Next.js 16 (App Router), TypeScript, Tailwind CSS 4, Framer Motion.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Editing content

All text lives in `src/content/`, not in the components.

| File | What |
|---|---|
| `site.ts` | Hero, About, Contact, socials, navigation, site URL |
| `projects.ts` | Selected Work (`featured`) and the compact "Also built" list (`more`) |
| `capabilities.ts` | Capability groups |

Values in `[brackets]` are placeholders. They render with a dashed outline until replaced.

### Adding a product

1. Put screenshots in `public/work/<slug>/`.
2. Add an entry to `featured` in `src/content/projects.ts` with `visual: { kind: "image", src: "/work/<slug>/cover.png", alt: "…", background: "#…" }`.
3. Until real screenshots exist, use `{ kind: "placeholder", label: "…" }`. Do not mock up screens.

Projects alternate sides in the bento grid automatically.

## Before launch

- `site.contact.email` is a placeholder (`hello@meissel.studio`).
- Fill in the imprint on `/imprint` (address, VAT status) and the privacy text.
- Set `NEXT_PUBLIC_SITE_URL` to the real domain for canonical URLs, sitemap and Open Graph.
- Replace the OFFSTG. brand visual with product screenshots and add Brainer visuals.

Fonts (Bricolage Grotesque, Geist, Geist Mono) are loaded with `next/font` and served from the site's own domain, so no request goes to Google.
