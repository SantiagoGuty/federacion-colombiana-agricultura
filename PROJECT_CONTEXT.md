# Federación Colombiana de Agricultura — Project Context

## Project Overview
Official website for the Federación Colombiana de Agricultura, a national rural 
development organization formed by 9 founding associations working together to 
promote sustainable rural development in Colombia.

---

## Tech Stack
- **Framework**: React + TypeScript
- **Bundler**: Vite v8
- **Styling**: CSS Modules (per component) + Tailwind CSS v3 (utility fallback)
- **Icons**: lucide-react
- **Animations**: framer-motion (installed, not yet used)
- **Routing**: react-router-dom (installed, not yet used)
- **Deployment**: AWS Amplify (auto-deploy on push to main)
- **Repo**: GitHub

---

## Folder Structure
```
src/
├── components/        ← all .tsx component files
├── styles/            ← all .module.css files (one per component)
├── App.tsx            ← imports and renders all components in order
├── main.tsx           ← React entry point
└── index.css          ← global styles + Tailwind directives

Root:
├── index.html         ← Google Fonts loaded here
├── tailwind.config.js ← custom colors and fonts defined here
├── vite.config.ts
└── PROJECT_CONTEXT.md ← this file
```

---

## Brand Colors
| Name         | Hex       | Usage                          |
|--------------|-----------|--------------------------------|
| verde-dark   | #005932   | Navbar, headings, backgrounds  |
| verde-mid    | #0CA81B   | Accents, tags, CTAs, hover     |
| verde-light  | #E8F5E9   | Tag backgrounds, light accents |
| tierra       | #8B5E3C   | Turismo rural sector           |
| cielo        | #1A6B9A   | Ambiente sector                |
| crema        | #FAFAF7   | Section backgrounds            |

Defined in `tailwind.config.js` under `theme.extend.colors`.

---

## Typography
| Role         | Font              | Source       |
|--------------|-------------------|--------------|
| Display/H1-3 | Playfair Display  | Google Fonts |
| Body text    | DM Sans           | Google Fonts |

Loaded in `index.html`. Defined in `tailwind.config.js` under `theme.extend.fontFamily`.
- `font-display` → Playfair Display
- `font-body` → DM Sans

---

## Components
All components are in `src/components/` and each has a matching CSS module in `src/styles/`.

| Component       | CSS Module                    | Section ID     |
|-----------------|-------------------------------|----------------|
| Navbar          | Navbar.module.css             | fixed top      |
| Hero            | Hero.module.css               | #hero          |
| QuienesSomos    | QuienesSomos.module.css       | #quienes       |
| Sectores        | Sectores.module.css           | #sectores      |
| Innovacion      | Innovacion.module.css         | #innovacion    |
| Inclusion       | Inclusion.module.css          | #inclusion     |
| Asociaciones    | Asociaciones.module.css       | #asociaciones  |
| Proyectos       | Proyectos.module.css          | #proyectos     |
| Alianzas        | Alianzas.module.css           | #alianzas      |
| Noticias        | Noticias.module.css           | #noticias      |
| Contacto        | Contacto.module.css           | #contacto      |
| Footer          | Footer.module.css             | —              |

---

## Styling Approach
- Primary styling via **CSS Modules** — each component imports its own `.module.css`
- Import pattern: `import styles from '../styles/ComponentName.module.css'`
- Tailwind utility classes still used occasionally for quick one-off styles
- No special characters (é, ó, ú, ñ) in JSX text — causes TypeScript parser errors
- No inline arrow functions inside JSX anchor tags — causes TypeScript errors
- Keep `<a>` tags on a single line to avoid JSX parser issues

---

## Known Patterns & Rules
- `<a>` tags must be single line: `<a href="..." className="...">text</a>`
- Mobile nav uses a named prop `onClose: () => void` passed to `MobileNav` component
- Gradient values in data arrays must use CSS strings not Tailwind classes
  - ✅ `'linear-gradient(to bottom right, #005932, #0CA81B)'`
  - ❌ `'from-verde-dark to-verde-mid'`
- Color values in data arrays must use hex not Tailwind classes
  - ✅ `color: '#005932'`
  - ❌ `color: 'bg-verde-dark'`

---

## Organization Info
- **Full name**: Federación Colombiana de Agricultura
- **Slogan**: Progreso y desarrollo integral
- **Type**: National organization, legally registered (Cámara de Comercio)
- **Founded by**: 9 cofounding associations
- **3 work sectors**: Agricultura, Ambiente, Turismo Rural
- **Focus populations**: mujeres rurales, jóvenes, víctimas del conflicto, 
  firmantes de paz, comunidades vulnerables
- **Email**: info@federacioncolombianadeagricultura.co
- **Country**: Colombia

---

## Pending / TODO
- [ ] Connect contact form to real email service (EmailJS or AWS SES)
- [ ] Add real names and territories for the 9 founding associations
- [ ] Add real project data to Proyectos section
- [ ] Add real news to Noticias section
- [ ] Connect custom domain in AWS Amplify
- [ ] Add framer-motion animations to Hero and section entrances
- [ ] Add react-router-dom if multi-page routing is needed