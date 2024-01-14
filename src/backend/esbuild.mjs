import { build } from 'esbuild';
import pkg from './package.json' assert { type: 'json' };

/** @type {import('esbuild').BuildOptions} */
const opts = {
  entryPoints: ['./src/index.ts'],
  target: 'es2022',
  platform: 'node',
  color: true,
  bundle: true,
};

const dependencies = Object.keys(pkg.dependencies ?? {});
const devDependencies = Object.keys(pkg.devDependencies ?? {});

const mode = process.argv[2];
if (mode === 'dev') {
  opts.outfile = './.esbuild/dev.js';
  opts.minify = false;
  opts.sourcemap = true;
  opts.external = [...dependencies, ...devDependencies];
} else if (mode === 'prd') {
  opts.outfile = './.esbuild/prd.js';
  opts.minify = true;
  opts.sourcemap = false;
} else {
  throw new Error(`Invalid mode: ${mode}`);
}

try {
  const start = Date.now();
  console.log(`Building... (mode: ${mode})`);
  await build(opts);
  console.log(`Done! (${Date.now() - start}ms)`);
  process.exit(0);
} catch (err) {
  console.log('Build failed!');
  console.error(err);
  process.exit(1);
}
