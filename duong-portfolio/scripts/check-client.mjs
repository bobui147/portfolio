import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html data-theme="dark"><head><meta name="theme-color" content="#0d1116"></head><body><div id="root"></div></body></html>', { url: 'http://localhost:3000', pretendToBeVisual: true });
for (const key of ['window', 'document', 'navigator', 'HTMLElement', 'Element', 'SVGElement', 'HTMLDialogElement', 'EventTarget', 'AbortController', 'AbortSignal', 'localStorage', 'getComputedStyle']) {
  Object.defineProperty(globalThis, key, { configurable: true, value: key === 'getComputedStyle' ? dom.window.getComputedStyle.bind(dom.window) : dom.window[key] });
}
globalThis.requestAnimationFrame = dom.window.requestAnimationFrame.bind(dom.window);
globalThis.cancelAnimationFrame = dom.window.cancelAnimationFrame.bind(dom.window);
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let reduced = false;
const mediaQueries = new Map();
window.matchMedia = query => {
  if (!mediaQueries.has(query)) {
    const listeners = new Set();
    const media = {
      media: query,
      get matches() { return query.includes('prefers-reduced-motion') ? reduced : query.includes('max-width') ? false : true; },
      addEventListener(_type, listener) { listeners.add(listener); },
      removeEventListener(_type, listener) { listeners.delete(listener); },
      addListener(listener) { listeners.add(listener); },
      removeListener(listener) { listeners.delete(listener); },
      notify() { listeners.forEach(listener => listener({ matches: media.matches, media: query })); }
    };
    mediaQueries.set(query, media);
  }
  return mediaQueries.get(query);
};
const observers = [];
class Observer {
  constructor(callback) { this.callback = callback; this.targets = new Set(); observers.push(this); }
  observe(target) { this.targets.add(target); }
  unobserve(target) { this.targets.delete(target); }
  disconnect() { this.targets.clear(); }
  enterAll(intersects = true) {
    this.callback([...this.targets].map(target => ({ target, isIntersecting: intersects, intersectionRatio: intersects ? 1 : 0, boundingClientRect: target.getBoundingClientRect(), time: performance.now() })));
  }
}
window.IntersectionObserver = globalThis.IntersectionObserver = Observer;
window.HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
window.HTMLDialogElement.prototype.close = function () { this.removeAttribute('open'); this.dispatchEvent(new window.Event('close')); };
let copied;
Object.defineProperty(navigator, 'clipboard', { value: { async writeText(value) { copied = value; } } });

const errors = [];
const originalError = console.error;
console.error = (...args) => { errors.push(args); originalError(...args); };
const { createServer } = await import('vite');
const { createElement, act } = await import('react');
const { createRoot } = await import('react-dom/client');
const { MotionConfig } = await import('motion/react');
const server = await createServer({ cacheDir: resolve('.superdesign/tmp/vite-check'), optimizeDeps: { noDiscovery: true, include: [] }, server: { middlewareMode: true, hmr: false, watch: null }, appType: 'custom' });
const root = createRoot(document.getElementById('root'));
const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
try {
  const { default: App } = await server.ssrLoadModule('/App.jsx');
  await act(async () => root.render(createElement(MotionConfig, { reducedMotion: 'user' }, createElement(App))));
  assert(document.querySelector('.hero-eyebrow').textContent.includes('Bùi Tùng Dương'));
  assert(document.querySelector('h1').textContent.includes('Turning ideas'));
  assert.equal(document.querySelectorAll('.project').length, 4);
  assert(document.querySelector('.project').style.opacity === '0', 'Cards should wait for viewport entry');
  await act(async () => {
    observers.forEach(observer => observer.enterAll());
    await wait(220);
  });
  const cards = [...document.querySelectorAll('.project')];
  assert(Number(cards[0].style.opacity) > Number(cards[2].style.opacity), 'Project cards should reveal in staggered order');
  await act(async () => { await wait(800); });
  for (const item of document.querySelectorAll('[data-motion-reveal]')) assert.equal(item.style.opacity, '1', 'Viewport animation should finish visible');
  await act(async () => { observers.forEach(observer => observer.enterAll(false)); await wait(60); });
  for (const item of document.querySelectorAll('[data-motion-reveal]')) assert.equal(item.style.opacity, '1', 'Once-only content must stay visible after leaving the viewport');

  function pointer(type, pointerType = 'mouse') {
    const event = new window.MouseEvent(type);
    Object.defineProperty(event, 'pointerType', { value: pointerType });
    return event;
  }
  await act(async () => { cards[0].dispatchEvent(pointer('pointerenter')); await wait(350); });
  assert(cards[0].style.transform.includes('-4px'), `Motion hover should lift the card: ${cards[0].style.transform}`);
  await act(async () => { cards[0].dispatchEvent(pointer('pointerleave')); await wait(800); });
  assert(['none', 'translateY(0px)'].includes(cards[0].style.transform));
  await act(async () => { cards[0].dispatchEvent(pointer('pointerenter', 'touch')); await wait(100); });
  assert(['none', 'translateY(0px)'].includes(cards[0].style.transform), 'Touch must not trigger a sticky hover');

  await act(async () => document.querySelector('.theme-toggle').click());
  assert.equal(document.documentElement.dataset.theme, 'light');
  assert.equal(localStorage.getItem('duong-theme'), 'light');
  await act(async () => document.querySelector('.theme-toggle').click());
  assert.equal(document.documentElement.dataset.theme, 'dark');

  await act(async () => document.querySelector('.menu-toggle').click());
  assert(document.querySelector('dialog').open);
  assert(document.body.classList.contains('menu-open'));
  await act(async () => document.querySelector('.close-menu').click());
  assert(!document.querySelector('dialog').open);
  assert(!document.body.classList.contains('menu-open'));

  await act(async () => document.querySelector('.copy-email').click());
  assert.equal(copied, 'duongbui147205@gmail.com');
  assert.equal(document.querySelector('.copy-status').textContent, 'Email address copied.');

  const field = document.querySelector('#contact-name');
  field.value = '   ';
  await act(async () => document.querySelector('form').dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true })));
  assert(!field.checkValidity(), 'Whitespace-only names must be rejected');

  await act(async () => { reduced = true; mediaQueries.forEach(media => media.notify()); await wait(50); });
  for (const item of document.querySelectorAll('[data-motion-reveal]')) {
    assert.equal(item.style.opacity, '1');
    assert(['none', 'translateY(0px)'].includes(item.style.transform), `Reduced motion must remove translation: ${item.style.transform}`);
  }
  const { Reveal } = await server.ssrLoadModule('/components/Reveal.jsx');
  await act(async () => root.render(createElement(MotionConfig, { reducedMotion: 'user' }, createElement(Reveal, { className: 'reduced-on-load' }, 'Reduced motion'))));
  assert.equal(document.querySelector('.reduced-on-load').style.opacity, '1', 'Initial reduced-motion content should never start hidden');
  assert.equal(errors.length, 0, 'React/Motion emitted runtime errors');
  console.log('React/Motion client checks passed: once-only reveals, project stagger, hover lift, touch behavior, initial/live reduced motion, dark/light persistence, modal menu, email copying, form validation, and no runtime errors.');
} finally {
  await act(async () => root.unmount());
  await server.close();
  dom.window.close();
  console.error = originalError;
}
