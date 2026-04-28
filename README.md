# Gateways documentation

This directory is the **Gateways** product documentation (guides, console help, and API reference). Site settings and navigation live in **`docs.json`** at the root of this folder.

**Live site:** [https://docs.gateways.app](https://docs.gateways.app)

## Prerequisites

- Node.js 18+
- Docs CLI: `npm i -g mint` ([`mint` on npm](https://www.npmjs.com/package/mint))

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

Production documentation is hosted at **[https://docs.gateways.app](https://docs.gateways.app)**. If the hosted site is wired to this repository, pushes to the default branch usually deploy automatically. GitHub integration and domain settings are configured in your team’s docs hosting dashboard.

## Troubleshooting

- **CLI / preview issues:** run `mint update`. If the tool suggests `mintlify install`, run that.
- **Docs tooling reference:** https://mintlify.com/docs
