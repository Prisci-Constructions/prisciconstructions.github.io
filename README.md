# Prisci Constructions — React Website

**Stack:** React 18 · React Router v6 · Vite · CSS Modules

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
```

## Project Structure

```
prisci-constructions/
├── index.html
├── vite.config.js
├── package.json
├── .env
└── src/
    ├── main.jsx              # entry point
    ├── App.jsx               # route definitions
    │
    ├── data/
    │   └── index.js          # all content (company info, services, projects, etc.)
    │
    ├── context/
    │   └── FormContext.jsx   # global inspection form open/close state
    │
    ├── hooks/
    │   ├── useScrollTop.js   # scroll to top on route change
    │   └── useIntersect.js   # IntersectionObserver for animations
    │
    ├── utils/
    │   ├── cn.js             # classname helper
    │   └── validators.js     # form validation helpers
    │
    ├── styles/
    │   ├── global.css        # reset + base styles
    │   └── variables.css     # CSS custom properties (colors, fonts, spacing)
    │
    ├── assets/
    │   └── icons/            # SVG icon files if needed
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Layout.jsx        # wraps every page (TopBar + Navbar + Footer)
    │   │   ├── TopBar.jsx        # phone, email, location, social icons
    │   │   ├── Navbar.jsx        # sticky nav with mobile hamburger
    │   │   └── Footer.jsx        # 4-column footer
    │   │
    │   ├── ui/               # reusable primitives
    │   │   ├── Button.jsx        # primary / ghost / outline variants
    │   │   ├── SectionHeader.jsx # tag + title + underline
    │   │   └── StatCard.jsx      # number + label stat tile
    │   │
    │   ├── sections/         # full-width page sections
    │   │   ├── HeroSplit.jsx     # split dark-left / light-right hero
    │   │   ├── ProjectsGrid.jsx  # 3-col project cards
    │   │   ├── CaseStudy.jsx     # before/after + problem/solution/outcome
    │   │   ├── Clients.jsx       # client logo pills
    │   │   ├── Testimonials.jsx  # 2-col testimonial cards
    │   │   └── CTABanner.jsx     # blue CTA strip
    │   │
    │   └── forms/
    │       └── InspectionForm.jsx  # validated inspection request form
    │
    └── pages/
        ├── HomePage.jsx
        ├── AboutPage.jsx
        ├── ServicesPage.jsx
        ├── ProjectsPage.jsx
        ├── CaseStudiesPage.jsx
        ├── ContactPage.jsx
        └── NotFoundPage.jsx
```

## Customisation

All content lives in **`src/data/index.js`** — update `COMPANY`, `SERVICES`, `PROJECTS`, `CLIENTS`, `TESTIMONIALS` to change any text, icons or colours without touching component files.

All colours and fonts are CSS variables in **`src/styles/variables.css`**.
