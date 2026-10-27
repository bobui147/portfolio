import assert from 'node:assert/strict';
import { cp } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { build } from 'vite';

const outputDirectory = resolve('dist');
assert.equal(dirname(outputDirectory), resolve('.'), 'Build output must stay inside this project.');
console.log(`Build output: ${outputDirectory}`);
await build();
await cp('src/assets/Bui-Tung-Duong-CV.pdf', 'dist/assets/Bui-Tung-Duong-CV.pdf');
await cp('LICENSE.template', 'dist/LICENSE.template.txt');
