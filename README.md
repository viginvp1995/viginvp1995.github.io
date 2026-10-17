# Vigin V P — Portfolio

Static portfolio site built with [Astro](https://astro.build), deployed free on GitHub Pages.

## Edit your content

Everything you'd want to change lives in **`src/data/portfolio.ts`**: profile, about,
skills, approaches, projects, and experience. Search for `TODO` to find the placeholders.

- **Resume:** add your PDF as `public/resume.pdf`.
- **Project screenshots:** put images in `public/projects/` and set
  `image: 'projects/gsb.png'` on the project. Without one, a tinted preview is drawn.
- **Skill icons:** use any export name from [simple-icons](https://simpleicons.org)
  (e.g. `siRedis`). Leave `icon` out to show the name only.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy to GitHub Pages

1. Create a repo. Name it `<your-username>.github.io` to serve at the root URL.
2. In `astro.config.mjs`, set `site` to `https://<your-username>.github.io`.
   If the repo has any other name (e.g. `portfolio`), also set `base: '/portfolio'`.
3. Push to the `main` branch.
4. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.

Every push to `main` now rebuilds and deploys the site via `.github/workflows/deploy.yml`.

### Custom domain (optional)

Add a `public/CNAME` file containing your domain (e.g. `viginvp.dev`), point the domain's
DNS at GitHub Pages, update `site` in `astro.config.mjs`, and enable **Enforce HTTPS** in
Settings → Pages.
