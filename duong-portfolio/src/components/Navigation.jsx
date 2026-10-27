export function Navigation({ scrolled, theme, onToggleTheme, menuOpen, onOpenMenu, onCloseMenu, dialogRef, onDrawerClick }) {
  const themeLabel = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`;
  return (<><header className={`site-header${scrolled ? " scrolled" : ""}`}>
    <nav className="navigation-bar" aria-label="Main navigation">
      <button onClick={onToggleTheme} className="icon-button theme-toggle" type="button" aria-label={themeLabel} title={themeLabel}>
        <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>
        <svg className="moon-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.8 13.1A8.9 8.9 0 0 1 10.9 3.2a9 9 0 1 0 9.9 9.9Z"/></svg>
      </button>
      <div className="nav-links"><a href="#expertise">Expertise</a><a href="#history">History</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
      <button onClick={onOpenMenu} className="icon-button menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label="Open navigation"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>
    </nav>
  </header>
  <dialog ref={dialogRef} onClose={onCloseMenu} onClick={onDrawerClick} className="nav-drawer" id="mobile-navigation" aria-labelledby="drawer-title">
    <div className="drawer-header"><h2 id="drawer-title">Menu</h2><button onClick={onCloseMenu} className="icon-button close-menu" type="button" aria-label="Close navigation">×</button></div>
    <nav aria-label="Mobile navigation" onClick={event => { if (event.target.closest("a")) onCloseMenu(); }}><a href="#home">Home</a><a href="#expertise">Expertise</a><a href="#history">History</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav>
  </dialog></>);
}
