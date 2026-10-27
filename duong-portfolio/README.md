# Bùi Tùng Dương — React portfolio

A portfolio adapted from [Yuji Sato's template](https://github.com/yujisatojr/react-portfolio-template), retaining the supplied CV content, Lato typography, original backgrounds, responsive layout, and dark/light themes. The personal portrait is omitted.

## Run

Use Node.js 22.12 or newer (validated with Node 24.21).

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. `npm run check` runs React rendering/content checks and client behavior tests in JSDOM. `npm run build` creates the production site in `dist/`. `npm run preview` serves that build at http://127.0.0.1:3001.

## Deploy to your Firebase / GCP account

- Google Cloud / Firebase project: `project-7180b607-0de7-493c-969` (My First Project).
- Dedicated Hosting site: `bui-tung-duong-portfolio`.
- Website: https://bui-tung-duong-portfolio.web.app

With Firebase CLI installed and signed into the account that owns this project, run:

```sh
npm run deploy:firebase
```

`firebase.json` targets the dedicated site and serves `dist/`. The predeploy hook builds the production app, including the original CV and license. `.firebaserc` selects the project for this checkout. The deployment command targets Hosting. This portfolio uses hash navigation, so no catch-all rewrite is needed.

HTML and the downloadable CV use `no-cache`; fingerprinted JS/CSS/image assets use long-lived immutable caching. Hosting cache files and Firebase debug logs are ignored by Git.

## React and Motion

The previous implementation had no React dependency. This version uses React / React DOM 19.3.1, Motion 14.7.0, and Vite 8.3.5 with pinned versions in `package-lock.json`.

- `src/main.jsx` mounts React with `MotionConfig reducedMotion="user"`.
- `src/App.jsx` owns theme persistence, modal navigation, email copying, and form behavior.
- `src/components/Navigation.jsx` renders the existing desktop menu and mobile drawer.
- `src/components/PortfolioContent.jsx` keeps all CV text, links, SVG illustrations, and section structure.
- `src/components/Reveal.jsx` provides reusable `Reveal` and `ProjectCard` components with `whileInView`, `viewport.once`, `whileHover`, and reduced-motion support.
- `src/navigation.js` retains section tracking and native hash navigation.
- `src/styles.css` retains the existing UI and CSS micro-interactions; the old reveal rules are removed to prevent transform conflicts.

Scroll reveals run once: a 22px rise over 650ms on desktop, or 16px over 550ms on mobile. Project cards stagger by 90ms and lift 4px on hover. Hover exits use a short transition without replaying the entry delay. Touch events do not trigger hover. Keyboard focus reveals pending content immediately.

Reduced motion disables translation, fades, hover movement, and smooth scrolling. In addition to `useReducedMotion`, media-query subscriptions handle preference changes while the site is open.

The contact form opens a prepared email draft after validation. The visitor sends it from their email application. Direct email, phone, GitHub, project links, and the original downloadable CV are preserved.

## Validation

The check scripts render the real React components and exercise the real Motion runtime in a simulated DOM. They cover one-time reveals, project stagger, hover, touch filtering, initial and live reduced-motion preferences, themes, the menu, email copying, and form validation. They also compare the migrated content with the ignored pre-React snapshot when available. JSDOM does not verify pixel layout or real browser rendering.

Original template backgrounds retain the MIT notice in `LICENSE.template`; production builds include it as `LICENSE.template.txt`. Project thumbnails are conceptual vector illustrations.
