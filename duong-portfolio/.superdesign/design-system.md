# Duong portfolio — source template adaptation

Reference: https://github.com/yujisatojr/react-portfolio-template

Follow the original source layout: 64px fixed navigation, theme control left and section links right, full-width hero using the original dark/light backgrounds, prominent personal name and role, three unboxed expertise columns, white monospace skill chips, alternating white timeline cards with violet icons, two equal project columns, and a full-width contact form. Omit the personal portrait. Keep the supplied CV content and existing download, GitHub, project, email and phone links.

Use Lato for all main typography and Courier Prime for chips and timeline dates. Dark background #0d1116, light background #f8f9fa, timeline accent #5000ca. Sections use 80% width on desktop and 90% on mobile. Expertise collapses at 768px, projects at 700px, navigation becomes a keyboard-accessible modal side drawer below 600px, and the timeline becomes one-sided at 1170px. The form opens an email draft; it must never claim that a message was sent.

Source adaptations and backgrounds retain the upstream MIT notice in LICENSE.template. Project illustrations are conceptual vector artwork. No personal source or CV is uploaded to a design or hosting service by this local update.

Runtime: React 19.3.1, React DOM 19.3.1, Motion 14.7.0, Vite 8.3.5. Preserve the existing HTML structure and all CV text through the React components.

Motion: use motion/react Reveal and ProjectCard components. Subtle one-time fade-up reveals via whileInView and viewport.once; 650ms / 22px desktop and 550ms / 16px mobile. Project cards stagger by 90ms, then use whileHover for a 4px lift and short hover transitions. CSS supplies the original theme-aware shadow and 220ms color transitions, without competing reveal or card transforms. Native smooth anchor scrolling and observer-based active section tracking remain. Use MotionConfig reducedMotion="user", useReducedMotion and live media-query subscriptions to disable motion when requested. Keyboard focus reveals pending content immediately.
