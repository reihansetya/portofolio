# Project Structure

```
├── pages/                  # Next.js Pages Router
│   ├── _app.js             # App wrapper (Font Awesome, AnimatePresence, context)
│   ├── index.jsx           # Home page
│   ├── project.jsx         # Projects showcase page
│   ├── contact.jsx         # Contact form page
│   ├── api/                # API routes
│   │   └── hello.js
│   ├── components/         # Shared React components (co-located in pages/)
│   │   ├── Layout.jsx      # Page shell (Head, Navbar, Footer)
│   │   ├── Navbar.jsx      # Fixed top navigation
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx        # Landing hero section
│   │   ├── Experience.jsx  # Work experience timeline
│   │   ├── Skills.jsx      # Skills with category tabs
│   │   ├── SkillBox.jsx
│   │   ├── SkillCategory.jsx
│   │   ├── BrowserMockup.jsx  # Project card display
│   │   ├── ImageModal.jsx
│   │   ├── ButtonClick.jsx
│   │   ├── BoxSosmed.jsx      # Social media link box
│   │   └── InitialTransition.jsx  # Page load animation
│   └── context/
│       └── ActiveNavContext.jsx   # Active nav item state
├── public/
│   └── images/             # Static images and SVG layers
├── styles/
│   └── globals.css         # Tailwind directives, base typography, glass-morph
├── package.json
├── tailwind.config.js      # Tailwind + DaisyUI config
├── postcss.config.js
├── next.config.js          # Webpack overrides, strict mode
└── .eslintrc.json
```

## Conventions

- **File extensions**: Pages use `.jsx`; app entry uses `.js`
- **Components live inside `pages/components/`** — not a top-level `components/` folder
- **Context providers** are in `pages/context/`
- **No TypeScript** — project uses plain JavaScript/JSX
- **Data is co-located** — project lists, skill data, and nav items are defined inline within their respective components (no separate data files)
- **Naming**: PascalCase for components, camelCase for variables and data objects
- **Styling approach**: Tailwind utility classes directly in JSX; DaisyUI component classes (e.g., `btn`, `mockup-code`, `input`); custom classes only for glassmorphism effect
- **Animations**: Framer Motion for page/component transitions; AOS for scroll-triggered effects (initialized in `useEffect`)
- **Images**: Served from `/public/images/` via Next.js `<Image>` component
