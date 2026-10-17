// @ts-check
import { defineConfig } from 'astro/config';

// If your repo is named <username>.github.io, keep base as '/'.
// If it's any other name (e.g. "portfolio"), set base to '/portfolio'.
export default defineConfig({
  site: 'https://YOUR-GITHUB-USERNAME.github.io',
  base: '/',
});
