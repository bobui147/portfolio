# Bùi Tùng Dương — React portfolio

A responsive developer portfolio inspired by the visual language of [CodeBucks' Next.js portfolio](https://github.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code). It recreates the bold Montserrat typography, centered circular monogram, two-column hero, rotating contact badge, offset project cards, and light/dark themes in the existing React/Vite application. The personal portrait is replaced by original abstract developer artwork.

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

## Automatic deployment with GitHub Actions

Push changes to `main` to run checks/builds and automatically update Firebase Hosting after they pass. Pull requests run checks without deployment. View runs or start a manual run in [GitHub Actions](https://github.com/bobui147/portfolio/actions/workflows/firebase-hosting.yml).

The workflow uses Google Cloud OIDC with a dedicated deployment service account. See [CI_CD.md](CI_CD.md) for its authentication scope, repository variables, and deployment checks.

## React and Motion

The previous implementation had no React dependency. This version uses React / React DOM 19.3.1, Motion 14.7.0, and Vite 8.3.5 with pinned versions in `package-lock.json`.

- `src/main.jsx` mounts React with `MotionConfig reducedMotion="user"`.
- `src/App.jsx` owns theme persistence, modal navigation, email copying, and form behavior.
- `src/components/Navigation.jsx` renders the three-part CodeBucks-inspired header and accessible mobile drawer.
- `src/components/PortfolioContent.jsx` renders the hero artwork, biography, expertise, chronology, featured projects, contact form, and footer from the supplied CV content.
- `src/components/Reveal.jsx` provides reusable `Reveal` and `ProjectCard` components with `whileInView`, `viewport.once`, `whileHover`, and reduced-motion support.
- `src/navigation.js` retains section tracking and native hash navigation.
- `src/styles.css` keeps the responsive light/dark design and adds subtle navigation, hero-art, icon, project-image, and constellation micro-interactions without conflicting with Motion reveals.

Scroll reveals run once with a soft fade, blur, scale, and rise: 28px over 680ms on desktop, or 18px over 580ms on mobile. Project cards stagger by 90ms and lift 4px on hover. The header and hero enter in sequence, decorative artwork moves slowly while idle, and project artwork responds gently to hover. Hover exits use a short transition without replaying the entry delay. Touch events do not trigger hover. Keyboard focus reveals pending content immediately.

Reduced motion disables translation, fades, hover movement, and smooth scrolling. In addition to `useReducedMotion`, media-query subscriptions handle preference changes while the site is open.

The contact form opens a prepared email draft after validation. The visitor sends it from their email application. Direct email, phone, GitHub, project links, and the original downloadable CV are preserved.

## Validation

The check scripts render the real React components and exercise the real Motion runtime in a simulated DOM. They cover one-time reveals, project stagger, hover, touch filtering, initial and live reduced-motion preferences, themes, the menu, email copying, and form validation. They also compare the migrated content with the ignored pre-React snapshot when available. JSDOM does not verify pixel layout or real browser rendering.

Legacy template assets retain the MIT notice in `LICENSE.template`; production builds include it as `LICENSE.template.txt`. The hero and project artwork are original code-native SVG/CSS illustrations.
