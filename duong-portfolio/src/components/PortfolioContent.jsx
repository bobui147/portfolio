import { Reveal, ProjectCard } from './Reveal.jsx';

export function Home() { return (<section className="about-section" id="home" aria-labelledby="hero-title">
      <Reveal as="div" className="about-content">
        <div className="social-icons">
          <a href="https://github.com/bobibotumtim" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1a11 11 0 0 0-3.48 21.44c.55.1.75-.24.75-.53v-2.05c-3.06.67-3.71-1.3-3.71-1.3-.5-1.27-1.22-1.6-1.22-1.6-1-.68.07-.67.07-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.39-1.2.7-1.47-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.18 1.13-2.95-.12-.28-.5-1.4.11-2.91 0 0 .92-.3 3.03 1.13a10.5 10.5 0 0 1 5.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.51.23 2.63.12 2.91.7.77 1.12 1.75 1.12 2.95 0 4.23-2.57 5.16-5.02 5.43.4.34.75 1.01.75 2.04v3.01c0 .3.2.64.76.53A11 11 0 0 0 12 1Z"/></svg></a>
          <a href="mailto:duongbui147205@gmail.com" aria-label="Email Duong"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 5 9 8 9-8"/></svg></a>
        </div>
        <h1 id="hero-title">Bùi Tùng Dương</h1>
        <p className="hero-role">Full Stack Developer</p>
        <p className="hero-description">Building full-stack applications. Exploring AI & agentic systems.</p>
        <a className="cv-link" href="./assets/Bui-Tung-Duong-CV.pdf" download>Download CV <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 3v12m-4-4 4 4 4-4M5 16v4h14v-4"/></svg></a>
      </Reveal>
    </section>); }

export function Expertise() { return (<Reveal as="section" className="section skills-container" id="expertise" aria-labelledby="expertise-title">
      <h2 className="section-title" id="expertise-title">Expertise</h2>
      <div className="skills-grid">
        <article className="skill">
          <svg className="skill-icon react-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><ellipse cx="32" cy="32" rx="29" ry="11"/><ellipse cx="32" cy="32" rx="29" ry="11" transform="rotate(60 32 32)"/><ellipse cx="32" cy="32" rx="29" ry="11" transform="rotate(120 32 32)"/><circle cx="32" cy="32" r="5" fill="currentColor" stroke="none"/></svg>
          <h3>Frontend Development</h3>
          <p>I build responsive web interfaces with React and TypeScript, using reusable components, Hooks, and REST API integration.</p>
          <div className="flex-chips"><span className="chip-title">Tech stack:</span><span className="chip">ReactJS</span><span className="chip">TypeScript</span><span className="chip">JavaScript</span><span className="chip">HTML5</span><span className="chip">CSS3</span><span className="chip">Tailwind CSS</span></div>
        </article>
        <article className="skill">
          <svg className="skill-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.7" aria-hidden="true"><ellipse cx="32" cy="13" rx="23" ry="9"/><path d="M9 13v19c0 5 10 9 23 9s23-4 23-9V13M9 32v19c0 5 10 9 23 9s23-4 23-9V32"/><path d="M9 23c0 5 10 9 23 9s23-4 23-9" opacity=".5"/></svg>
          <h3>Backend Development</h3>
          <p>I develop REST APIs, authentication, and database-backed applications with Java and NestJS, working across relational and document databases.</p>
          <div className="flex-chips"><span className="chip-title">Tech stack:</span><span className="chip">Java</span><span className="chip">Spring Boot</span><span className="chip">NestJS</span><span className="chip">JPA / Hibernate</span><span className="chip">FastAPI</span><span className="chip">WebSocket</span><span className="chip">MySQL</span><span className="chip">MongoDB</span></div>
        </article>
        <article className="skill">
          <svg className="skill-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.7" aria-hidden="true"><rect x="13" y="13" width="38" height="38" rx="10"/><path d="M24 2v11M40 2v11M24 51v11M40 51v11M2 24h11M2 40h11M51 24h11M51 40h11M24 40V24h8a6 6 0 0 1 0 12h-8m16-12v16"/></svg>
          <h3>AI & Agentic Systems</h3>
          <p>I’m exploring LLM-powered applications and agent workflows, with an interest in applying AI to useful, practical products.</p>
          <div className="flex-chips"><span className="chip-title">Tech stack:</span><span className="chip">LangChain</span><span className="chip">LangGraph</span><span className="chip">ReAct</span><span className="chip">Plan-and-Execute</span><span className="chip">Tool Calling</span><span className="chip">LLM APIs</span></div>
        </article>
      </div>
      <div className="additional-skills"><p><strong>Databases:</strong> MySQL, SQL Server, MongoDB, PostgreSQL</p><p><strong>Tools & workflow:</strong> Git / GitHub / GitLab, pytest, Playwright, Agile / Scrum, Code Review</p><p><strong>Deployment foundations:</strong> Docker (Basic), Google Cloud Platform (Basic), CI/CD Fundamentals</p></div>
    </Reveal>); }

export function History() { return (<Reveal as="section" className="section history-container" id="history" aria-labelledby="history-title">
      <span className="anchor-alias" id="experience" aria-hidden="true"></span>
      <h2 className="section-title" id="history-title">Career History</h2>
      <div className="vertical-timeline">
        <article className="timeline-element">
          <span className="timeline-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 12a25 25 0 0 0 18 0M12 12v4"/></svg></span>
          <div className="timeline-card"><h3>Full-stack Development</h3><h4>FPT Software</h4><p>Built ReactJS interfaces with Hooks and Session Storage, developed NestJS / TypeScript REST APIs, and worked with MongoDB.</p><p>Practiced Git workflows, code review, linting, and full-stack collaboration.</p><time className="timeline-date">January 2026 – May 2026</time></div>
        </article>
        <article className="timeline-element">
          <span className="timeline-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m2 8 10-5 10 5-10 5L2 8Zm4 2v7c4 3 8 3 12 0v-7M22 8v9"/></svg></span>
          <div className="timeline-card"><h3>Software Engineering</h3><h4>FPT University, Hanoi</h4><p>Studying software engineering while developing full-stack projects and expanding my knowledge of Java, Python, and AI technologies.</p><time className="timeline-date">2023 – Present</time></div>
        </article>
      </div>
    </Reveal>); }

export function Projects() { return (<section className="section projects-container" id="projects" aria-labelledby="projects-title">
      <Reveal as="h2" className="section-title" id="projects-title">Personal Projects</Reveal>
      <div className="projects-grid">
        <ProjectCard index={0} className="project">
          <a className="project-image-link" href="https://c4-app-045.id.vn/" target="_blank" rel="noopener noreferrer" aria-label="Visit Atomesus AI Data Pipeline Studio"><div className="project-art atomesus-art" aria-hidden="true"><div className="art-grid"></div><span className="art-caption">AI DATA PIPELINE STUDIO</span><svg className="pipeline-symbol" viewBox="0 0 180 120" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M45 34h35m26 0h29M80 34v50h55" strokeDasharray="5 5"/><rect x="15" y="19" width="30" height="30" rx="8"/><rect x="135" y="19" width="30" height="30" rx="8"/><rect x="135" y="69" width="30" height="30" rx="8"/><path d="m28 27-5 7 5 7m4-14 5 7-5 7m113 0 5 5 9-11m-16 49 5 5 9-11"/><circle cx="93" cy="34" r="13"/><path d="m93 27 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" fill="currentColor" stroke="none"/></svg><span className="art-name">Atomesus</span><span className="art-stack">LangGraph · dlt · dbt · Dagster</span></div></a>
          <h3><a href="https://c4-app-045.id.vn/" target="_blank" rel="noopener noreferrer">Atomesus – AI Data Pipeline Studio</a></h3>
          <p className="project-meta">Security · Production Reliability · UI Development</p>
          <p>An AI platform that turns natural-language data requests into production-ready ELT pipelines. LangGraph and OpenAI generate structured Data Specs; templates deterministically generate dlt–dbt–Dagster pipelines. Validation, reconciliation against real source data, and reviewer approval of the exact code version precede deployment, with checksum checks and rollback support.</p>
          <p><strong>My contributions:</strong> Hardened production login and rate limiting, configured SQLite WAL and query optimizations, added HMAC callback replay protection and data-source controls, wrote regression tests, and redesigned responsive Next.js workspaces for Engineers, Reviewers, and Admins.</p>
          <p><strong>Project results:</strong> 1,600+ backend tests, 104 web tests, 4 E2E tests, and a 19/20 agent benchmark. The optimizer reduced processing time by about 34% on a 3-million-row dataset.</p>
          <p className="project-stack">Python · FastAPI · LangGraph · OpenAI API · Pydantic · PostgreSQL · SQLite · DuckDB · dlt · dbt · Dagster · Next.js 16 · React 19 · TypeScript · Docker Compose · Caddy · Azure VM · pytest · Playwright</p>
        </ProjectCard>
        <ProjectCard index={1} className="project">
          <a className="project-image-link" href="https://cleanmarket.io.vn/" target="_blank" rel="noopener noreferrer" aria-label="Visit CleanMarket website"><div className="project-art market-art" aria-hidden="true"><div className="art-grid"></div><span className="art-caption">FULL STACK AGRICULTURAL MARKETPLACE</span><svg className="market-symbol" viewBox="0 0 180 180" fill="none"><path d="M90 136V74" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/><path d="M89 105C46 110 34 82 36 55c34-2 57 16 53 50Z" stroke="currentColor" strokeWidth="4"/><path d="M91 83c-2-32 17-52 50-52 2 31-16 56-50 52Z" stroke="currentColor" strokeWidth="4"/><path d="m88 102-30-28m34 6 27-27" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg><span className="art-name">CleanMarket</span><span className="art-stack">React · Spring Boot · MySQL</span></div></a>
          <h3><a href="https://cleanmarket.io.vn/" target="_blank" rel="noopener noreferrer">CleanMarket</a></h3>
          <p className="project-meta">Developer & DevOps Engineer · September 2026 – Present</p>
          <p>A marketplace connecting consumers with verified agricultural suppliers. Developed authentication, role-based access, product and order APIs, VNPAY / payOS payments, product traceability, inventory tracking, and supplier dashboards.</p>
          <p className="project-stack">ReactJS · Java · Spring Boot · MySQL · REST API</p>
        </ProjectCard>
        <ProjectCard index={2} className="project">
          <a className="project-image-link" href="https://gitlab.com/30MUNH/railgo" target="_blank" rel="noopener noreferrer" aria-label="View RailGo source on GitLab"><div className="project-art rail-art" aria-hidden="true"><div className="art-grid"></div><span className="art-caption">FULL STACK TRAIN BOOKING SYSTEM</span><div className="rail-route"><i></i><span></span><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="15" y="8" width="34" height="42" rx="9"/><path d="M15 30h34M32 9v21M21 57l7-7m15 7-7-7"/><circle cx="24" cy="40" r="2"/><circle cx="40" cy="40" r="2"/></svg><span></span><i></i></div><span className="art-name">RailGo</span><span className="art-stack">React · NestJS · MongoDB</span></div></a>
          <h3><a href="https://gitlab.com/30MUNH/railgo" target="_blank" rel="noopener noreferrer">RailGo</a></h3>
          <p className="project-meta">Developer · January 2026 – April 2026</p>
          <p>Built a React booking UI with Hooks and Session Storage. Developed NestJS REST APIs for trains, carriages, routes, and trips, built an admin dashboard, and optimized MongoDB queries.</p>
          <p className="project-stack">ReactJS · TypeScript · NestJS · MongoDB · REST API</p>
        </ProjectCard>
        <ProjectCard index={3} className="project">
          <a className="project-image-link" href="https://github.com/bobibotumtim/PizzaConnect-Restaurant-Management-System" target="_blank" rel="noopener noreferrer" aria-label="View PizzaConnect source on GitHub"><div className="project-art pizza-art" aria-hidden="true"><div className="art-grid"></div><span className="art-caption">JAVA WEB ORDERING & MANAGEMENT</span><svg className="pizza-symbol" viewBox="0 0 160 160" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="80" cy="80" r="55"/><circle cx="80" cy="80" r="46" strokeDasharray="3 5"/><path d="m80 80 27-48M80 80l55 1M80 80l27 47M80 80l-28 47M80 80l-55 1M80 80 52 33"/><circle cx="78" cy="52" r="6"/><circle cx="104" cy="68" r="6"/><circle cx="106" cy="96" r="6"/><circle cx="80" cy="107" r="6"/><circle cx="55" cy="94" r="6"/><circle cx="54" cy="66" r="6"/></svg><span className="art-name">PizzaConnect</span><span className="art-stack">Java · Servlet / JSP · JPA · MySQL</span></div></a>
          <h3><a href="https://github.com/bobibotumtim/PizzaConnect-Restaurant-Management-System" target="_blank" rel="noopener noreferrer">Pizza Ordering Management System</a></h3>
          <p className="project-meta">Developer · August 2025 – November 2025</p>
          <p>Built a Java web application using MVC architecture, with menu browsing, size and topping selection, a session-based cart, ordering, and authentication. Implemented admin management and a relational database with JPA.</p>
          <p className="project-stack">Java · Servlet · JSP · JPA · MySQL · MVC</p>
        </ProjectCard>
      </div>
    </section>); }

export function Contact({ onCopyEmail, copyStatus, onSubmit, onFormInput, formStatus }) { return (<Reveal as="section" className="section contact-container" id="contact" aria-labelledby="contact-title">
      <h2 className="section-title" id="contact-title">Contact Me</h2>
      <p className="contact-intro">Interested in working together? Let’s connect and build something useful.</p>
      <div className="contact-details"><a href="mailto:duongbui147205@gmail.com">duongbui147205@gmail.com</a><a href="tel:+84375604408">+84 375 604 408</a><button onClick={onCopyEmail} className="copy-email" type="button">Copy email <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M12 7V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3"/></svg></button></div>
      <p className="copy-status" role="status" aria-live="polite">{copyStatus}</p>
      <form className="contact-form" onSubmit={onSubmit} onInput={onFormInput}>
        <div className="form-flex">
          <label className="form-field"><span>Your Name <span aria-hidden="true">*</span></span><input id="contact-name" name="name" type="text" placeholder="What’s your name?" autoComplete="name" required maxLength="100" /></label>
          <label className="form-field"><span>Your Email <span aria-hidden="true">*</span></span><input id="contact-email" name="email" type="email" placeholder="How can I reach you?" autoComplete="email" required maxLength="254" /></label>
        </div>
        <label className="form-field message-field"><span>Message <span aria-hidden="true">*</span></span><textarea id="contact-message" name="message" placeholder="Send me any inquiries or questions" rows="8" required maxLength="3000"></textarea></label>
        <div className="form-footer"><p>Opens your email app with a prepared draft.</p><button className="send-button" type="submit">Open email draft <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m2 3 20 9-20 9v-7l14-2L2 10V3Z"/></svg></button></div>
        <p className="form-status" role="status" aria-live="polite">{formStatus}</p>
      </form>
    </Reveal>); }

export function Footer() { return (<Reveal as="footer" className="footer">
    <div className="footer-links"><a href="https://github.com/bobibotumtim" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="mailto:duongbui147205@gmail.com">Email ↗</a><a href="#home">Back to top ↑</a></div>
    <p>© <span id="year">{new Date().getFullYear()}</span> Bùi Tùng Dương · Hanoi, Vietnam</p>
  </Reveal>); }
