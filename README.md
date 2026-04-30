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

Production documentation is hosted at **[https://docs.gateways.app](https://docs.gateways.app)**.

This repository is a **monorepo**: the Mintlify project must use the **`docs` subdirectory** as the documentation root (dashboard **Git settings** → enable monorepo / set documentation path to `docs` with no trailing slash, per [Mintlify monorepo setup](https://mintlify.com/docs/deploy/monorepo)). If that path is wrong or missing, deploys can ship an almost empty site: only the homepage and a couple of routes work while `/gateways/*`, `/platform/*`, and most API guides return **404** (you can confirm by checking [https://docs.gateways.app/sitemap.xml](https://docs.gateways.app/sitemap.xml)—it should list all published pages).

After fixing the path, save settings and trigger a new deploy.

Navigation **groups** in `docs.json` use Mintlify’s optional [`root`](https://mintlify.com/docs/organize/navigation#root-page) field so each section has a clear landing page (for example **Compare** → `platform/index`) without duplicating that page in the `pages` list. That matches Mintlify’s documented structure and avoids odd deploy behavior. After changing `docs.json`, trigger a **full production deploy** and recheck the sitemap.

## Troubleshooting

- **Many live URLs 404 but `mint dev` works:** fix the hosted **documentation path** to `docs` as above, then redeploy. If the sitemap still lists only a handful of URLs while `mint validate` passes locally, use the Mintlify dashboard to **redeploy** or contact support with build logs.
- **CLI / preview issues:** run `mint update`. If the tool suggests `mintlify install`, run that.
- **Docs tooling reference:** https://mintlify.com/docs
