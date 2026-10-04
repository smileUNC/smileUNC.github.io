// Builds the whole website as ONE self-contained HTML file that works offline.
// Anyone can open it by double-clicking it — no internet, server or installation
// needed — so it is handy for sending a preview to people who don't work with code.
//
//   npm run build:offline   →   offline/OmniWave-Lab-website-YYYY-MM-DD.html
//
// Inside the file: every page, the styles and fonts, and every image and video the
// pages use (videos as MP4). Links to papers, code, datasets and the contact form
// still need internet. Images are found by their path appearing in the code,
// e.g. "images/team/ylin.jpg" in src/data/team.js, so keep writing paths that way.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const workDir = path.join(root, "node_modules", ".offline-build");
const outDir = path.join(root, "offline");

// Files from public/ that are embedded when a page uses them. The WebM copies of
// the videos are left out: every desktop browser plays the MP4 versions.
const EMBED_TYPES = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
};
const FONT_TYPES = { ".woff2": "font/woff2", ".woff": "font/woff", ".ttf": "font/ttf" };

const now = new Date();
const stamp = [now.getFullYear(), now.getMonth() + 1, now.getDate()].map((n) => String(n).padStart(2, "0")).join("-");
const builtOn = now.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
process.env.VITE_BUILD_DATE = builtOn; // shown in the banner at the top of the offline copy

// 1. Build the site in "offline" mode (see src/utils/offline.js).
await build({
  root,
  mode: "offline",
  base: "./",
  logLevel: "warn",
  build: {
    outDir: workDir,
    emptyOutDir: true,
    copyPublicDir: false,
    cssCodeSplit: false,
    modulePreload: false,
    rolldownOptions: { output: { codeSplitting: false } }, // everything in one script
  },
});

const read = (file) => fs.readFileSync(file, "utf8");
const toDataUrl = (file, type) => `data:${type};base64,${fs.readFileSync(file).toString("base64")}`;
const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}
function replaceOnce(text, pattern, replacement, what) {
  if (!pattern.test(text)) throw new Error(`Offline build: could not find ${what} in index.html`);
  return text.replace(pattern, replacement);
}

const assetsDir = path.join(workDir, "assets");
const built = fs.readdirSync(assetsDir);
const jsFiles = built.filter((f) => f.endsWith(".js"));
const cssFiles = built.filter((f) => f.endsWith(".css"));
if (jsFiles.length !== 1 || cssFiles.length !== 1) {
  throw new Error(`Offline build: expected one .js and one .css file, got ${[...jsFiles, ...cssFiles].join(", ")}`);
}
const js = read(path.join(assetsDir, jsFiles[0]));
let css = read(path.join(assetsDir, cssFiles[0]));

// 2. Fonts: keep only the WOFF2 version of each font (all current browsers use it) and embed it.
css = css.replace(/,\s*url\([^)]*\.(?:woff|ttf)\)\s*format\(["']?(?:woff|truetype)["']?\)/g, "");
css = css.replace(/url\((["']?)([^)"']+)\1\)/g, (match, _quote, url) => {
  if (url.startsWith("data:")) return match;
  const file = path.join(assetsDir, path.basename(url.split(/[?#]/)[0]));
  const type = FONT_TYPES[path.extname(file)] || EMBED_TYPES[path.extname(file)];
  return type && fs.existsSync(file) ? `url(${toDataUrl(file, type)})` : match;
});

// 3. Images and videos from public/ that the pages refer to.
const embedded = {};
let embeddedBytes = 0;
for (const file of walk(publicDir)) {
  const type = EMBED_TYPES[path.extname(file).toLowerCase()];
  if (!type) continue;
  const rel = path.relative(publicDir, file).split(path.sep).join("/");
  if (!new RegExp(`["'\`](?:\\.?/)?${escapeRegExp(rel)}["'\`]`).test(js)) continue;
  embedded[rel] = toDataUrl(file, type);
  embeddedBytes += fs.statSync(file).size;
}

// 4. Put everything into index.html.
const scriptSafe = (code) => code.replace(/<\/(script)/gi, "\\x3C/$1").replace(/<!--/g, "\\x3C!--");
const favicon = path.join(publicDir, "favicon.ico");
let html = read(path.join(workDir, "index.html"));
html = html.replace(/\s*<!-- Start Single Page Apps for GitHub Pages -->[\s\S]*?<!-- End Single Page Apps for GitHub Pages -->/, "");
html = html.replace(/\s*<link rel="(?:apple-touch-icon|manifest)"[^>]*>/g, "");
if (fs.existsSync(favicon)) {
  html = html.replace(/<link rel="icon"[^>]*>/, () => `<link rel="icon" href="${toDataUrl(favicon, "image/x-icon")}" />`);
}
html = replaceOnce(html, /<link rel="stylesheet"[^>]*>/, () => `<style>\n${css.replace(/<\/(style)/gi, "\\3C/$1")}\n</style>`, "the stylesheet");
html = replaceOnce(
  html,
  /<script type="module"[^>]*><\/script>/,
  () =>
    `<script type="application/json" id="embedded-assets">${JSON.stringify(embedded).replace(/</g, "\\u003c")}</script>\n` +
    `<script type="module">\n${scriptSafe(js)}\n</script>`,
  "the main script"
);
html = html.replace(/^<!doctype html>/i, (doctype) =>
  `${doctype}\n<!-- Offline copy of the OmniWave Lab website, built ${builtOn} with "npm run build:offline". Open it in any web browser. -->`
);

const leftovers = html.match(/(?:src|href)="\.\/[^"]*"|url\(\.\/[^)]*\)/g);
if (leftovers) console.warn(`Warning: these files are not embedded and won't load offline:\n  ${leftovers.join("\n  ")}`);

fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, `OmniWave-Lab-website-${stamp}.html`);
fs.writeFileSync(outFile, html);
fs.rmSync(workDir, { recursive: true, force: true });

const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;
console.log(
  `\n✓ ${path.relative(root, outFile)}  (${mb(Buffer.byteLength(html))}, ` +
    `${Object.keys(embedded).length} images and videos embedded, ${mb(embeddedBytes)} before encoding)\n` +
    `  Open it by double-clicking. To share it, send the file (zip it first if an email system blocks .html attachments).`
);
