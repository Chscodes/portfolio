# Chester Clenn Minoza — Portfolio

A one-page developer portfolio built with **Vite + React + TypeScript + Tailwind CSS v4**.

Design direction: a "career ledger" concept — dark ink background, muted ledger-green accent,
a serif display face (Newsreader) paired with a monospace utility face (JetBrains Mono) for labels
and data, echoing the accounting/inventory systems this portfolio showcases.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  assets/
    images.ts            # central import map for project screenshots
    screenshots/         # the 4 provided product screenshots
  components/
    Nav.tsx
    Hero.tsx             # hero + "career ledger" stat card
    Projects.tsx         # Accounting System & Stock Management System
    Experience.tsx
    Skills.tsx           # tech stack rendered as a ledger table
    EducationAwards.tsx
    Footer.tsx
  data.ts                # all resume content lives here — edit this file to update copy
  index.css              # Tailwind v4 theme tokens (colors, fonts)
  App.tsx
```

## Editing content

Everything text-based (summary, experience, project bullets, skills, education, awards,
contact info) lives in `src/data.ts` — no need to touch components to update wording.

To swap or add screenshots, drop a new image into `src/assets/screenshots/`, import it in
`src/assets/images.ts`, and reference its key from `data.ts`.

## Deploying

`npm run build` outputs a static site to `dist/` — drag-and-drop that folder onto Netlify/Vercel,
or serve it from any static host / GitHub Pages.
