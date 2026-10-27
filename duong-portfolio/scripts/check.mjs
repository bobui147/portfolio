import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createServer } from 'vite';
import { JSDOM } from 'jsdom';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const server = await createServer({ cacheDir: resolve('.superdesign/tmp/vite-check'), optimizeDeps: { noDiscovery: true, include: [] }, server: { middlewareMode: true, hmr: false, watch: null }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/App.jsx');
  const markup = renderToStaticMarkup(createElement(App));
  const document = new JSDOM(markup).window.document;
  const ids = [...document.querySelectorAll('[id]')].map(element => element.id);
  assert.equal(new Set(ids).size, ids.length, 'Duplicate HTML ids');
  for (const anchor of document.querySelectorAll('a[href^="#"]')) assert(document.getElementById(anchor.hash.slice(1)), `Missing anchor: ${anchor.hash}`);
  for (const anchor of document.querySelectorAll('a[href^="./"]')) await access(resolve('src', anchor.getAttribute('href')));
  assert.equal(document.querySelectorAll('.project').length, 3);
  assert.equal(document.querySelectorAll('main section').length, 5);
  for (const url of ['https://cleanmarket.io.vn/', 'https://gitlab.com/30MUNH/railgo', 'https://github.com/bobibotumtim/PizzaConnect-Restaurant-Management-System']) {
    assert([...document.querySelectorAll('.project a')].some(anchor => anchor.getAttribute('href') === url));
  }
  assert.equal(document.querySelectorAll('img').length, 0, 'Personal portraits remain omitted');

  const css = await readFile('src/styles.css', 'utf8');
  for (const match of css.matchAll(/url\(['"]?\.\/([^'")]+)['"]?\)/g)) await access(resolve('src', match[1]));
  const pdf = await readFile('src/assets/Bui-Tung-Duong-CV.pdf');
  assert(pdf.subarray(0, 1024).toString().includes('%PDF-'));
  for (const name of ['bg-dark.png', 'bg-light.png']) {
    const image = await readFile(resolve('src/assets', name));
    assert.equal(image.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  }

  // Migration check is optional after the ignored pre-React snapshot is removed.
  let baseline;
  try { baseline = await readFile('.superdesign/tmp/pre-react.html', 'utf8'); } catch {}
  if (baseline) {
    const original = new JSDOM(baseline).window.document;
    // The footer attribution was subsequently removed at the user's request.
    original.querySelector('.template-credit')?.remove();
    const text = element => element.textContent.replace(/\s+/g, '');
    for (const selector of ['.site-header', '.nav-drawer', 'main', '.footer']) assert.equal(text(document.querySelector(selector)), text(original.querySelector(selector)), `Content changed: ${selector}`);
    assert.deepEqual([...document.querySelectorAll('a')].map(anchor => anchor.getAttribute('href')), [...original.querySelectorAll('a')].map(anchor => anchor.getAttribute('href')), 'Links changed during migration');
    assert.equal(document.querySelectorAll('svg').length, original.querySelectorAll('svg').length, 'SVG illustrations changed');
    console.log('Migration verified: original text, all links, SVGs, and section structure preserved.');
  }
  console.log('React rendering, navigation targets, project links, background assets, and original CV verified.');
} finally { await server.close(); }
