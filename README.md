# zolliway

Modernized rebuild of [zolliway.ch](https://zolliway.ch) — an ethical recruitment agency in Chiasso, Ticino.

**Status: frontend-only demo.** All content is static (Italian only); jobs and reviews are sample data in `lib/data.ts`. No CMS or database yet — this build exists to show the owner how the new site could look.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Fonts: Playfair Display (brand serif) + Plus Jakarta Sans

## Development

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production build
```

## Pages

Home · Chi Siamo · Servizi per le Aziende (`/aziende`) · Offerte di Lavoro (`/lavoro`, with per-job detail pages) · Recensioni · Contatto · Impressum · Protezione dei Dati
