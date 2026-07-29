# Abhishek Goud — Portfolio

A dark, cinematic developer portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, GSAP, Framer Motion, and Lenis.

## Design system

- **Background:** `#050505` near-black with a faint 64px grid and three soft blurred gradient blobs (electric blue → violet → magenta).
- **Surfaces:** glassmorphism panels — `bg-white/[0.03]`, blurred, hairline borders, a radial highlight that follows the cursor per-card.
- **Type:** Bricolage Grotesque for display headings, Inter for body copy, JetBrains Mono for eyebrows/labels/tech badges.
- **Signature motion:** floating "code panel" satellites in the hero that tilt in 3D toward the cursor, paired with a global trailing cursor glow.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
 ├── app/            # App Router entry (layout, page, global styles)
 ├── components/     # Hero, About, Skills, Projects, Experience, Contact, Nav, etc.
 ├── data/            # Skills, projects, and timeline content
 └── hooks/           # useLenis, useMagnetic, useMousePosition
```

## Notes

- Replace the placeholder links in `src/data/projects.ts` and `src/components/Contact.tsx` (email, LinkedIn, GitHub URLs) with your real ones.
- The project cards use a generated grid pattern instead of screenshots — drop real project images into `src/assets` and swap them in `Projects.tsx` when ready.
- Every animation respects `prefers-reduced-motion`.
