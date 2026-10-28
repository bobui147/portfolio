import { Reveal, ProjectCard } from './Reveal.jsx';

function ExternalIcon() { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 5h5v5M10 14 19 5M19 13v6H5V5h6"/></svg>; }

function DeveloperArtwork() { return <div className="developer-art" aria-hidden="true">
  <span className="paint paint-one"></span><span className="paint paint-two"></span><span className="paint paint-three"></span><span className="paint paint-four"></span>
  <svg viewBox="0 0 620 640" fill="none">
    <path className="art-wash" d="M152 126c80-73 243-80 320 4 63 69 38 144 62 218 20 62 80 109 55 162-31 66-150 62-237 61-99-2-224 26-274-46-43-61 24-128 39-201 14-71-21-147 35-198Z"/>
    <path className="art-line" d="M262 171c-52 25-77 87-66 145 6 31 24 60 22 92-2 34-25 64-33 97m77-334c69-34 156-3 182 62 13 32 10 70-3 102-13 31-35 59-39 93-4 31 8 64 32 84M169 502c70-35 143-44 213-22 31 10 61 27 94 25"/>
    <rect className="art-screen" x="155" y="294" width="310" height="205" rx="16"/>
    <path className="art-line" d="M190 338h82m-82 31h157m-157 31h118m-118 31h206M278 499l-24 62m112-62 24 62m-172 0h208"/>
    <path className="art-code" d="m334 346-27 25 27 25m52-50 27 25-27 25m-29-67-18 84"/>
    <circle className="art-node node-a" cx="143" cy="236" r="15"/><circle className="art-node node-b" cx="480" cy="169" r="20"/><circle className="art-node node-c" cx="507" cy="427" r="13"/>
    <path className="art-dash" d="M158 231c62-54 142-75 237-63m101 20c-15 86-5 157 18 217M128 456c-35-51-31-116 8-166"/>
  </svg>
</div>; }

function HireBadge() { return <a className="hire-badge" href="#contact" aria-label="Go to contact section">
  <svg viewBox="0 0 140 140" aria-hidden="true"><defs><path id="hire-circle" d="M70,70 m-51,0 a51,51 0 1,1 102,0 a51,51 0 1,1 -102,0"/></defs><text><textPath href="#hire-circle">FULL STACK · AI SYSTEMS · WEB DEVELOPER · </textPath></text></svg><span>Hire Me</span>
</a>; }

export function Home() { return <section className="hero-section" id="home" aria-labelledby="hero-title">
  <Reveal as="div" className="hero-visual"><DeveloperArtwork /></Reveal>
  <Reveal as="div" className="hero-copy" delay={.08}>
    <p className="hero-eyebrow">Bùi Tùng Dương · Full Stack Developer</p>
    <h1 id="hero-title">Turning ideas into useful digital systems.</h1>
    <p className="hero-description">I build full-stack applications and explore AI-powered systems, combining thoughtful interfaces with reliable backend engineering.</p>
    <div className="hero-actions"><a className="resume-button cv-link" href="./assets/Bui-Tung-Duong-CV.pdf" download>Resume <ExternalIcon /></a><a className="contact-link" href="#contact">Contact</a></div>
  </Reveal>
  <HireBadge />
  <svg className="idea-bulb" viewBox="0 0 90 130" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M45 5C22 5 8 23 8 44c0 16 8 26 18 36 7 7 8 15 8 24h22c0-9 1-17 8-24 10-10 18-20 18-36C82 23 68 5 45 5Z"/><path d="M32 110h26m-23 9h20m-16 8h12M29 43c4-9 11-14 21-15"/><circle cx="67" cy="24" r="6" fill="#F5C84C" stroke="none"/></svg>
</section>; }

const skills = [
  { title: 'Frontend Development', text: 'Responsive React and TypeScript interfaces built with reusable components, Hooks, accessible interaction, and REST API integration.', stack: ['ReactJS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend Development', text: 'REST APIs, authentication, business workflows, and database-backed applications across Java, NestJS, relational, and document data.', stack: ['Java', 'Spring Boot', 'NestJS', 'FastAPI', 'WebSocket', 'MySQL', 'MongoDB'] },
  { title: 'AI & Agentic Systems', text: 'LLM-powered products and agent workflows designed around structured outputs, tool use, evaluation, and practical user value.', stack: ['LangGraph', 'LangChain', 'ReAct', 'Tool Calling', 'LLM APIs', 'Pydantic'] }
];

export function Expertise() { return <Reveal as="section" className="section about-container" id="expertise" aria-labelledby="expertise-title">
  <h2 className="display-title" id="expertise-title">Passion Fuels Purpose!</h2>
  <div className="about-grid">
    <div className="biography"><p className="section-kicker">Biography</p><p>I’m <strong>Bùi Tùng Dương</strong>, a Full Stack Developer and Software Engineering student in Hanoi. I enjoy turning broad product ideas into clear interfaces, dependable services, and useful software.</p><p>My work spans React, TypeScript, Java, Python, databases, cloud deployment, and AI agent workflows. I care about security, production stability, testing, and experiences that remain easy to understand.</p></div>
    <div className="about-visual" aria-label="Technology constellation illustration"><div className="constellation-core">BTD</div><span>React</span><span>Java</span><span>Python</span><span>AI</span><span>Data</span><span>Cloud</span></div>
    <dl className="about-stats"><div><dt>04</dt><dd>Selected Projects</dd></div><div><dt>02</dt><dd>Career Chapters</dd></div><div><dt>2023</dt><dd>Software Journey</dd></div></dl>
  </div>
  <div className="skills-heading"><p className="section-kicker">Expertise</p><h3>From interface to infrastructure.</h3></div>
  <div className="skills-grid">{skills.map((skill, index) => <article className="skill" key={skill.title}><span className="skill-number">0{index + 1}</span><h3>{skill.title}</h3><p>{skill.text}</p><div className="flex-chips">{skill.stack.map(item => <span className="chip" key={item}>{item}</span>)}</div></article>)}</div>
</Reveal>; }

export function History() { return <Reveal as="section" className="section history-container" id="history" aria-labelledby="history-title">
  <span className="anchor-alias" id="experience" aria-hidden="true"></span>
  <div className="section-heading"><p className="section-kicker">Experience & Education</p><h2 className="display-title" id="history-title">Building Through Practice.</h2></div>
  <div className="history-list">
    <article className="history-item"><time>January 2026 — May 2026</time><div><h3>Full-stack Development</h3><h4>FPT Software</h4></div><div><p>Built ReactJS interfaces with Hooks and Session Storage, developed NestJS / TypeScript REST APIs, and worked with MongoDB.</p><p>Practiced Git workflows, code review, linting, and full-stack collaboration.</p></div></article>
    <article className="history-item"><time>2023 — Present</time><div><h3>Software Engineering</h3><h4>FPT University, Hanoi</h4></div><div><p>Studying software engineering while developing full-stack projects and expanding my knowledge of Java, Python, and AI technologies.</p></div></article>
  </div>
</Reveal>; }

function AtomesusArt() { return <div className="project-art atomesus-art" aria-hidden="true"><div className="art-grid"></div><span className="art-caption">AI DATA PIPELINE STUDIO</span><svg className="pipeline-symbol" viewBox="0 0 180 120" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M45 34h35m26 0h29M80 34v50h55" strokeDasharray="5 5"/><rect x="15" y="19" width="30" height="30" rx="8"/><rect x="135" y="19" width="30" height="30" rx="8"/><rect x="135" y="69" width="30" height="30" rx="8"/><path d="m28 27-5 7 5 7m4-14 5 7-5 7m113 0 5 5 9-11m-16 49 5 5 9-11"/><circle cx="93" cy="34" r="13"/><path d="m93 27 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" fill="currentColor" stroke="none"/></svg><span className="art-name">Atomesus</span><span className="art-stack">LangGraph · dlt · dbt · Dagster</span></div>; }
function CleanMarketArt() { return <div className="project-art market-art" aria-hidden="true"><div className="art-grid"></div><span className="art-caption">AGRICULTURAL MARKETPLACE</span><svg className="market-symbol" viewBox="0 0 180 180" fill="none"><path d="M90 136V74" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/><path d="M89 105C46 110 34 82 36 55c34-2 57 16 53 50Z" stroke="currentColor" strokeWidth="4"/><path d="M91 83c-2-32 17-52 50-52 2 31-16 56-50 52Z" stroke="currentColor" strokeWidth="4"/><path d="m88 102-30-28m34 6 27-27" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg><span className="art-name">CleanMarket</span><span className="art-stack">React · Spring Boot · MySQL</span></div>; }
function RailArt() { return <div className="project-art rail-art" aria-hidden="true"><div className="art-grid"></div><span className="art-caption">TRAIN BOOKING SYSTEM</span><div className="rail-route"><i></i><span></span><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="15" y="8" width="34" height="42" rx="9"/><path d="M15 30h34M32 9v21M21 57l7-7m15 7-7-7"/><circle cx="24" cy="40" r="2"/><circle cx="40" cy="40" r="2"/></svg><span></span><i></i></div><span className="art-name">RailGo</span><span className="art-stack">React · NestJS · MongoDB</span></div>; }
function PizzaArt() { return <div className="project-art pizza-art" aria-hidden="true"><div className="art-grid"></div><span className="art-caption">ORDERING & MANAGEMENT</span><svg className="pizza-symbol" viewBox="0 0 160 160" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="80" cy="80" r="55"/><circle cx="80" cy="80" r="46" strokeDasharray="3 5"/><path d="m80 80 27-48M80 80l55 1M80 80l27 47M80 80l-28 47M80 80l-55 1M80 80 52 33"/><circle cx="78" cy="52" r="6"/><circle cx="104" cy="68" r="6"/><circle cx="106" cy="96" r="6"/><circle cx="80" cy="107" r="6"/><circle cx="55" cy="94" r="6"/><circle cx="54" cy="66" r="6"/></svg><span className="art-name">PizzaConnect</span><span className="art-stack">Java · JSP · JPA · MySQL</span></div>; }

export function Projects() { return <section className="section projects-container" id="projects" aria-labelledby="projects-title">
  <Reveal as="div" className="section-heading projects-heading"><p className="section-kicker">Selected Work</p><h2 className="display-title" id="projects-title">Imagination Trumps Knowledge!</h2></Reveal>
  <div className="projects-grid">
    <ProjectCard index={0} className="project project-featured"><a className="project-image-link" href="https://c4-app-045.id.vn/" target="_blank" rel="noopener noreferrer" aria-label="Visit Atomesus AI Data Pipeline Studio"><AtomesusArt /></a><div className="project-copy"><p className="project-label">Featured Project · AI Data Platform</p><h3><a href="https://c4-app-045.id.vn/" target="_blank" rel="noopener noreferrer">Atomesus – AI Data Pipeline Studio</a></h3><p>An AI platform that turns natural-language data requests into production-ready ELT pipelines. LangGraph and OpenAI generate structured Data Specs; templates deterministically generate dlt–dbt–Dagster pipelines with validation, reconciliation, reviewer approval, checksum verification, and rollback support.</p><p><strong>My contributions:</strong> Production authentication, rate limiting, SQLite WAL, query optimization, HMAC replay protection, regression testing, and responsive Next.js workspaces for Engineers, Reviewers, and Admins.</p><p className="project-results">1,600+ backend tests · 104 web tests · 4 E2E tests · 19/20 agent benchmark · ~34% optimizer improvement on 3M rows</p><a className="visit-project" href="https://c4-app-045.id.vn/" target="_blank" rel="noopener noreferrer">Visit project <ExternalIcon /></a></div></ProjectCard>
    <ProjectCard index={1} className="project"><a className="project-image-link" href="https://cleanmarket.io.vn/" target="_blank" rel="noopener noreferrer" aria-label="Visit CleanMarket website"><CleanMarketArt /></a><p className="project-label">Marketplace · Developer & DevOps</p><h3><a href="https://cleanmarket.io.vn/" target="_blank" rel="noopener noreferrer">CleanMarket</a></h3><p>A marketplace connecting consumers with verified agricultural suppliers, with authentication, role-based access, product and order APIs, VNPAY / payOS payments, traceability, inventory, and supplier dashboards.</p><p className="project-stack">ReactJS · Java · Spring Boot · MySQL · REST API</p></ProjectCard>
    <ProjectCard index={2} className="project"><a className="project-image-link" href="https://gitlab.com/30MUNH/railgo" target="_blank" rel="noopener noreferrer" aria-label="View RailGo source on GitLab"><RailArt /></a><p className="project-label">Booking Platform · Developer</p><h3><a href="https://gitlab.com/30MUNH/railgo" target="_blank" rel="noopener noreferrer">RailGo</a></h3><p>Built a React booking UI and NestJS REST APIs for trains, carriages, routes, and trips, including an admin dashboard and optimized MongoDB queries.</p><p className="project-stack">ReactJS · TypeScript · NestJS · MongoDB · REST API</p></ProjectCard>
    <ProjectCard index={3} className="project"><a className="project-image-link" href="https://github.com/bobibotumtim/PizzaConnect-Restaurant-Management-System" target="_blank" rel="noopener noreferrer" aria-label="View PizzaConnect source on GitHub"><PizzaArt /></a><p className="project-label">Java Web Application · Developer</p><h3><a href="https://github.com/bobibotumtim/PizzaConnect-Restaurant-Management-System" target="_blank" rel="noopener noreferrer">Pizza Ordering Management System</a></h3><p>Built an MVC ordering application with menu browsing, size and topping selection, a session-based cart, authentication, admin management, and relational persistence with JPA.</p><p className="project-stack">Java · Servlet · JSP · JPA · MySQL · MVC</p></ProjectCard>
  </div>
</section>; }

export function Contact({ onCopyEmail, copyStatus, onSubmit, onFormInput, formStatus }) { return <Reveal as="section" className="section contact-container" id="contact" aria-labelledby="contact-title">
  <div className="contact-heading"><p className="section-kicker">Contact</p><h2 className="display-title" id="contact-title">Let’s Build Something Useful.</h2><p>Have a project, role, or collaboration in mind? Start a conversation and I’ll get back to you.</p></div>
  <div className="contact-details"><a href="mailto:duongbui147205@gmail.com">duongbui147205@gmail.com</a><a href="tel:+84375604408">+84 375 604 408</a><button onClick={onCopyEmail} className="copy-email" type="button">Copy email</button></div>
  <p className="copy-status" role="status" aria-live="polite">{copyStatus}</p>
  <form className="contact-form" onSubmit={onSubmit} onInput={onFormInput}>
    <div className="form-flex"><label className="form-field"><span>Your Name *</span><input id="contact-name" name="name" type="text" placeholder="What’s your name?" autoComplete="name" required maxLength="100" /></label><label className="form-field"><span>Your Email *</span><input id="contact-email" name="email" type="email" placeholder="How can I reach you?" autoComplete="email" required maxLength="254" /></label></div>
    <label className="form-field message-field"><span>Message *</span><textarea id="contact-message" name="message" placeholder="Tell me about the opportunity" rows="5" required maxLength="3000"></textarea></label>
    <div className="form-footer"><p>Opens your email app with a prepared draft.</p><button className="send-button" type="submit">Open email draft <ExternalIcon /></button></div><p className="form-status" role="status" aria-live="polite">{formStatus}</p>
  </form>
</Reveal>; }

export function Footer() { return <Reveal as="footer" className="footer"><p>© {new Date().getFullYear()} Bùi Tùng Dương</p><p>Full Stack Developer <span aria-hidden="true">♥</span> Hanoi, Vietnam</p><div className="footer-links"><a href="mailto:duongbui147205@gmail.com">Say Hello</a><a href="#home">Back to top ↑</a></div></Reveal>; }
