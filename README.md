# Gateways documentation

This directory is the [Mintlify](https://mintlify.com) documentation site for Gateways (guides, console help, and API reference). Configuration lives in **`docs.json`** at the root of this folder.

## Prerequisites

- Node.js 18+
- [Mint CLI](https://www.npmjs.com/package/mint) (`npm i -g mint`)

## Local preview

From this directory (`docs/`):

```bash
mint dev
```

Open **http://localhost:3000**.

If pages 404, confirm you started the dev server from the folder that contains `docs.json`.

## Content and branding

- **Pages** are MDX/MD files referenced by the `navigation` section in `docs.json`.
- **Static assets** (logos, favicons) live alongside the MDX files; paths in `docs.json` are site-root paths (e.g. `/logo/light.svg`, `/images/favicon.png`).
- To regenerate **favicon** PNGs and `/favicons/*` from `images/favicon.svg` (requires `backend` dependencies for `sharp`):

  ```bash
  node scripts/generate-favicons.mjs
  ```

## Deploy

If this repo is connected to Mintlify, pushes to the default branch deploy automatically. Organization settings (GitHub app, custom domain) are managed in the [Mintlify dashboard](https://dashboard.mintlify.com).

## Troubleshooting

- **CLI / preview issues:** run `mint update`, or `mintlify install` if the CLI suggests it.
- **Mintlify docs:** https://mintlify.com/docs
