import { readdir, rename, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { AstroIntegration } from 'astro';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/config/site';

// @astrojs/sitemap always emits sitemap-index.xml plus sitemap-0.xml.
// Publish that one urlset as sitemap.xml.
function singleSitemap(): AstroIntegration {
  return {
    name: 'single-sitemap',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        const files = await readdir(outDir);
        const extraChunks = files.filter((name) => /^sitemap-[1-9]\d*\.xml$/.test(name));
        if (extraChunks.length > 0) {
          throw new Error(
            `Expected one sitemap chunk, found ${extraChunks.join(', ')}. Leaving the index in place.`,
          );
        }
        await rename(path.join(outDir, 'sitemap-0.xml'), path.join(outDir, 'sitemap.xml'));
        await unlink(path.join(outDir, 'sitemap-index.xml'));
      },
    },
  };
}

export default defineConfig({
  site: site.url,
  trailingSlash: 'never',
  server: {
    allowedHosts: true,
  },
  // Keep spaces in prose. Minification was gluing words to inline links.
  compressHTML: false,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
    singleSitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
