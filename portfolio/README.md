# Portfolio — Project Scaffold

A premium personal portfolio built with React 19, TypeScript, Vite, and Tailwind CSS 4.

## Status

This is a **working scaffold**: every route renders, navigation and animations work, and all content is realistic **placeholder copy** — swap it out with your real details before publishing (see below).

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Framer Motion — page transitions, scroll reveals, hover micro-interactions
- React Router 7 — routing between pages
- React Hook Form + Zod — contact form validation
- React Hot Toast — form feedback
- Zustand — dark mode state (persisted to `localStorage`)
- Lucide React + React Icons — iconography (brand logos come from `react-icons/fa` since Lucide dropped brand glyphs)

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check + production build
npm run preview   # preview the production build
```

## Where to put your real content

Everything content-related lives in `src/data/`, separate from the UI components:

| File | What to change |
| --- | --- |
| `src/data/site.ts` | Your name, role, headline, socials, resume link, nav |
| `src/data/skills.ts` | Skill categories, individual skills, proficiency levels |
| `src/data/experience.ts` | Work history timeline entries |
| `src/data/projects.ts` | Project list + full case-study content per project |
| `src/data/services.ts` | Services offered, lifecycle steps, testimonials |

To add real project images, drop them in `src/assets/` and reference them from `src/data/projects.ts`; the current cards render a placeholder panel with the project category label instead of an image.

To wire up a real resume PDF, set `resumeUrl` in `src/data/site.ts` to the file path (e.g. `/resume.pdf` placed in `public/`).

## Design system

Design tokens (colors, fonts, easing) are defined once in `src/index.css` under `@theme`, and reused everywhere via Tailwind classes (`bg-ink`, `text-emerald-deep`, `font-display`, `font-mono`, etc.) — change them there to re-theme the whole site.

Dark mode toggles a `.dark` class on `<html>`; see `src/store/theme.ts`.

## Routes

```
/                       Home
/about                  About
/skills                 Skills
/experience             Experience
/projects               Projects (filterable list)
/projects/:slug         Project case study
/services               Services + process + testimonials
/contact                Contact form
/resume                 Resume view/download
```

## Contact form

`src/components/contact/ContactForm.tsx` currently simulates a network request and shows a success toast. Replace the `onSubmit` body with a real API call (e.g. `axios.post('/api/contact', data)`) when you have a backend or a form service (Formspree, Resend, etc.) to send to.
