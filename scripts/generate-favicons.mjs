import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const sharp = require(path.resolve(__dirname, "../../backend/node_modules/sharp"));
const docsRoot = path.resolve(__dirname, "..");
const svgPath = path.join(docsRoot, "images", "favicon.svg");
const favDir = path.join(docsRoot, "favicons");

const svg = fs.readFileSync(svgPath);

fs.mkdirSync(favDir, { recursive: true });

await sharp(svg).resize(512, 512).png().toFile(path.join(docsRoot, "images", "favicon.png"));
await sharp(svg).resize(32, 32).png().toFile(path.join(favDir, "favicon-32x32.png"));
await sharp(svg).resize(16, 16).png().toFile(path.join(favDir, "favicon-16x16.png"));
await sharp(svg).resize(180, 180).png().toFile(path.join(favDir, "apple-touch-icon.png"));

const toIcoDir = path.join(os.tmpdir(), "gateways-docs-to-ico");
const toIcoMod = path.join(toIcoDir, "node_modules", "to-ico");
if (!fs.existsSync(toIcoMod)) {
  fs.mkdirSync(toIcoDir, { recursive: true });
  execFileSync("npm", ["init", "-y"], { cwd: toIcoDir, stdio: "ignore" });
  execFileSync("npm", ["i", "to-ico@1.1.5"], { cwd: toIcoDir, stdio: "inherit" });
}

const runnerPath = path.join(toIcoDir, "_write-favicon-ico.mjs");
fs.writeFileSync(
  runnerPath,
  `import toIco from 'to-ico';
import fs from 'fs';
import path from 'path';
const d = process.argv[2];
const buf = await toIco([
  fs.readFileSync(path.join(d, 'favicon-16x16.png')),
  fs.readFileSync(path.join(d, 'favicon-32x32.png')),
]);
fs.writeFileSync(path.join(d, 'favicon.ico'), buf);
`,
  "utf8"
);
execFileSync(process.execPath, [runnerPath, favDir], { cwd: toIcoDir, stdio: "inherit" });
