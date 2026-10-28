import { useEffect, useRef, useState } from 'react';
import { Navigation } from './components/Navigation.jsx';
import { Home, Expertise, History, Projects, Contact, Footer } from './components/PortfolioContent.jsx';
import { initSectionNavigation } from './navigation.js';

export default function App() {
  const [theme, setTheme] = useState(() => typeof document === 'undefined' ? 'light' : document.documentElement.dataset.theme || 'light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const [formStatus, setFormStatus] = useState('');
  const dialogRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#1b1b1b' : '#f5f5f5';
    try { localStorage.setItem('duong-theme', theme); } catch {}
  }, [theme]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (menuOpen && !dialog.open) dialog.showModal();
    if (!menuOpen && dialog.open) dialog.close();
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 600px)');
    const closeOnDesktop = event => { if (event.matches) setMenuOpen(false); };
    const updateHeader = () => setScrolled(window.scrollY > 64);
    desktop.addEventListener('change', closeOnDesktop);
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
    const stopNavigation = initSectionNavigation();
    return () => {
      desktop.removeEventListener('change', closeOnDesktop);
      window.removeEventListener('scroll', updateHeader);
      stopNavigation();
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('duongbui147205@gmail.com');
      setCopyStatus('Email address copied.');
    } catch { setCopyStatus('Please copy this address: duongbui147205@gmail.com'); }
  }

  function submitContact(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    for (const field of [form.elements.name, form.elements.message]) {
      field.setCustomValidity(field.value.trim() ? '' : 'Please fill in this field.');
    }
    if (!form.reportValidity()) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:duongbui147205@gmail.com?subject=${subject}&body=${body}`;
    setFormStatus('Your draft is ready to open in your email app. You can also email me directly at duongbui147205@gmail.com.');
  }

  function handleDrawerClick(event) {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation scrolled={scrolled} theme={theme} onToggleTheme={() => setTheme(value => value === 'dark' ? 'light' : 'dark')}
        menuOpen={menuOpen} onOpenMenu={() => setMenuOpen(true)} onCloseMenu={() => setMenuOpen(false)} dialogRef={dialogRef} onDrawerClick={handleDrawerClick} />
      <main id="main">
        <Home /><Expertise /><History /><Projects />
        <Contact onCopyEmail={copyEmail} copyStatus={copyStatus} onSubmit={submitContact}
          onFormInput={event => event.target.setCustomValidity?.('')} formStatus={formStatus} />
      </main>
      <Footer />
    </>
  );
}
