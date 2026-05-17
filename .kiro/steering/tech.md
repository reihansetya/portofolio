# Tech Stack

## Core Framework

- **Next.js 14.1** (Pages Router)
- **React 18.2**

## Styling

- **Tailwind CSS 3.4** with PostCSS and Autoprefixer
- **DaisyUI 4.7** — component library plugin for Tailwind (theme: "dracula")
- Dark mode via Tailwind `class` strategy
- Custom glassmorphism utility class in `globals.css`
- Base typography sizes defined via `@layer base` in globals

## Animation & UI

- **Framer Motion 11** — page transitions, staggered animations
- **AOS (Animate On Scroll)** — scroll-triggered fade/slide effects
- **Font Awesome** (via `@fortawesome/react-fontawesome`) — icons

## Services & Integrations

- **EmailJS** (`@emailjs/browser`) — client-side email sending on contact form
- **Monaco Editor** — included as dependency (code display/mockup)

## Common Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (eslint-config-next)
```

## Linting

- ESLint 8.56 with `eslint-config-next`
- Config in `.eslintrc.json`
