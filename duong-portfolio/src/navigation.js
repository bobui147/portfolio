/** Track the section at the reading line below the fixed header. */
export function initSectionNavigation() {
  const links = [...document.querySelectorAll('.nav-links a, .nav-drawer nav a')];
  const sections = [...document.querySelectorAll('main section[id]')];
  const header = document.querySelector('.site-header');
  const footer = document.querySelector('.footer');
  const intersecting = new Set();
  let sectionObserver;
  let footerObserver;
  let footerVisible = false;
  let frame;
  let activeId;

  function setActive(section) {
    if (!section || section.id === activeId) return;
    activeId = section.id;
    links.forEach(link => {
      if (link.hash === `#${activeId}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  function updateFromIntersections() {
    // Document order avoids stale callback order when two boundaries meet.
    const current = sections.filter(section => intersecting.has(section)).at(-1);
    setActive(footerVisible ? sections.at(-1) : current);
  }

  function readingLine() {
    return Math.min(header.offsetHeight + 24, Math.max(0, window.innerHeight - 2));
  }

  function updateFromPosition() {
    const line = readingLine();
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
    setActive(atBottom ? sections.at(-1) : sections.filter(section => section.getBoundingClientRect().top <= line).at(-1));
  }

  function observeSections() {
    sectionObserver?.disconnect();
    intersecting.clear();
    const line = readingLine();
    const bottomMargin = Math.max(0, window.innerHeight - line - 2);
    sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) intersecting.add(entry.target);
        else intersecting.delete(entry.target);
      });
      updateFromIntersections();
    }, { rootMargin: `-${line}px 0px -${bottomMargin}px 0px`, threshold: 0 });
    sections.forEach(section => sectionObserver.observe(section));
  }

  // Initialize from actual geometry, including restored scroll and direct hashes.
  updateFromPosition();
  const supportsObserver = 'IntersectionObserver' in window;
  if (supportsObserver) {
    observeSections();
    if (footer) {
      footerObserver = new IntersectionObserver(entries => {
        footerVisible = entries[0].isIntersecting && entries[0].intersectionRatio >= .95;
        updateFromIntersections();
      }, { threshold: [0, .95] });
      footerObserver.observe(footer);
    }
  }

  function scheduleUpdate() {
    if (frame !== undefined) return;
    frame = requestAnimationFrame(() => {
      frame = undefined;
      updateFromPosition();
      if (supportsObserver) observeSections();
    });
  }
  function scheduleFallback() {
    if (frame !== undefined) return;
    frame = requestAnimationFrame(() => { frame = undefined; updateFromPosition(); });
  }
  window.addEventListener('resize', scheduleUpdate, { passive: true });
  if (!supportsObserver) window.addEventListener('scroll', scheduleFallback, { passive: true });

  return () => {
    sectionObserver?.disconnect();
    footerObserver?.disconnect();
    if (frame !== undefined) cancelAnimationFrame(frame);
    window.removeEventListener('resize', scheduleUpdate);
    window.removeEventListener('scroll', scheduleFallback);
  };
}
