# Mukhammaddiyor Ibrokhimov — Portfolio

A TypeScript portfolio built with Vite. The existing design, content and motion effects are preserved.

Live website: https://mukhammaddiyor01.github.io/portfolio/

## Development

Use Node.js 22 and npm. Run `nvm use` to select the version in `.nvmrc`.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`npm run build` checks TypeScript and builds the production site into `dist/`.

## Source structure

- `src/main.ts`: application composition and direct section links
- `src/sections/`: independent page sections
- `src/skills.ts`: typed skill groups
- `src/profile.ts`: shared contact details
- `src/layout.ts`: navigation and footer
- `src/interactions.ts`: typed menu, scroll and canvas behavior
- `src/styles.css`: existing responsive design
- `public/portrait.png`: portrait asset
- `index.html`: minimal application entry, metadata and no-script contact

## Deployment

GitHub Pages uses **GitHub Actions** as its source. `.github/workflows/deploy.yml`
checks and builds every push to `main`, then publishes `dist/`. Vite's base path
is `/portfolio/`, matching the repository's public URL. Generated output and
installed dependencies are not committed.
