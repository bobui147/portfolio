const GitHubIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1a11 11 0 0 0-3.48 21.44c.55.1.75-.24.75-.53v-2.05c-3.06.67-3.71-1.3-3.71-1.3-.5-1.27-1.22-1.6-1.22-1.6-1-.68.07-.67.07-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.39-1.2.7-1.47-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.18 1.13-2.95-.12-.28-.5-1.4.11-2.91 0 0 .92-.3 3.03 1.13a10.5 10.5 0 0 1 5.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.51.23 2.63.12 2.91.7.77 1.12 1.75 1.12 2.95 0 4.23-2.57 5.16-5.02 5.43.4.34.75 1.01.75 2.04v3.01c0 .3.2.64.76.53A11 11 0 0 0 12 1Z"/></svg>;
const MailIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 5 9 8 9-8"/></svg>;

export function Navigation({ scrolled, theme, onToggleTheme, menuOpen, onOpenMenu, onCloseMenu, dialogRef, onDrawerClick }) {
  const themeLabel = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`;
  return (<>
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <nav className="navigation-bar" aria-label="Main navigation">
        <div className="nav-links nav-primary">
          <a href="#home">Home</a><a href="#expertise">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </div>
        <button onClick={onOpenMenu} className="icon-button menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label="Open navigation"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>
        <a className="brand-mark" href="#home" aria-label="Bùi Tùng Dương — Home">BTD</a>
        <div className="nav-socials">
          <a href="https://github.com/bobibotumtim" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><GitHubIcon /></a>
          <a href="mailto:duongbui147205@gmail.com" aria-label="Email Bùi Tùng Dương"><MailIcon /></a>
          <button onClick={onToggleTheme} className="icon-button theme-toggle" type="button" aria-label={themeLabel} title={themeLabel}>
            <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>
            <svg className="moon-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.8 13.1A8.9 8.9 0 0 1 10.9 3.2a9 9 0 1 0 9.9 9.9Z"/></svg>
          </button>
        </div>
      </nav>
    </header>
    <dialog ref={dialogRef} onClose={onCloseMenu} onClick={onDrawerClick} className="nav-drawer" id="mobile-navigation" aria-labelledby="drawer-title">
      <div className="drawer-header"><a className="drawer-brand" href="#home" onClick={onCloseMenu}>BTD</a><h2 id="drawer-title">Navigation</h2><button onClick={onCloseMenu} className="icon-button close-menu" type="button" aria-label="Close navigation">×</button></div>
      <nav aria-label="Mobile navigation" onClick={event => { if (event.target.closest('a')) onCloseMenu(); }}><a href="#home">Home</a><a href="#expertise">About</a><a href="#history">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav>
      <div className="drawer-socials"><a href="https://github.com/bobibotumtim" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="mailto:duongbui147205@gmail.com">Email ↗</a></div>
    </dialog>
  </>);
}
