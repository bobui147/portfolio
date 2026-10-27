import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { setTimeout } from 'node:timers/promises';

const hosting = JSON.parse(await readFile('firebase.json', 'utf8')).hosting;
const base = `https://${hosting.site}.web.app`;
const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'));
const files = [...new Set([
  'index.html',
  ...Object.values(manifest).flatMap(item => [item.file, ...(item.css || []), ...(item.assets || [])]),
  'assets/Bui-Tung-Duong-CV.pdf'
])];
const digest = bytes => createHash('sha256').update(bytes).digest('hex');

for (let attempt = 1; attempt <= 5; attempt++) {
  try {
    await Promise.all(files.map(async file => {
      const path = file === 'index.html' ? '/' : '/' + file;
      const response = await fetch(base + path, { cache: 'no-store', signal: AbortSignal.timeout(15000) });
      assert.equal(response.status, 200, `HTTP status: ${path}`);
      const actual = Buffer.from(await response.arrayBuffer());
      const expected = await readFile('dist/' + file);
      assert.equal(digest(actual), digest(expected), `Published file differs from build: ${path}`);
    }));
    console.log(`Verified ${files.length} published files at ${base}, including HTML, JS/CSS, images, and the CV.`);
    process.exit(0);
  } catch (error) {
    if (attempt === 5) throw error;
    console.log(`Published files are not ready yet; retrying (${attempt}/5).`);
    await setTimeout(2000);
  }
}
