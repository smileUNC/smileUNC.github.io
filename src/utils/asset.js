import { OFFLINE } from "./offline";

// Build the URL of a file that lives in /public.
// Use it for every image, video or download so the site keeps working if it
// is ever served from a sub-path (set `base` in vite.config.js).
//   asset("images/team/ylin.jpg")  ->  "/images/team/ylin.jpg"
export function asset(path) {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
  const clean = path.replace(/^\/+/, "");
  // Offline single-file copy: use the copy embedded in the page, or the live site's file.
  if (OFFLINE) return embeddedAsset(clean) ?? `${import.meta.env.VITE_SITE_URL}/${clean}`;
  return `${import.meta.env.BASE_URL}${clean}`;
}

// True for links that leave the site (open them in a new tab).
export function isExternal(href) {
  return /^(https?:)?\/\//.test(href || "") || (href || "").startsWith("mailto:");
}

// Files embedded by scripts/build-offline.mjs, as { "images/x.jpg": "data:image/jpeg;base64,..." }.
// Videos are turned into blob: URLs, which every browser can play.
let embedded;
const blobUrls = new Map();
function embeddedAsset(path) {
  if (!embedded) {
    const el = document.getElementById("embedded-assets");
    embedded = el ? JSON.parse(el.textContent) : {};
  }
  const dataUrl = embedded[path];
  if (!dataUrl?.startsWith("data:video/")) return dataUrl;
  if (!blobUrls.has(path)) {
    const comma = dataUrl.indexOf(",");
    const type = dataUrl.slice(5, dataUrl.indexOf(";"));
    const bytes = Uint8Array.from(atob(dataUrl.slice(comma + 1)), (c) => c.charCodeAt(0));
    blobUrls.set(path, URL.createObjectURL(new Blob([bytes], { type })));
  }
  return blobUrls.get(path);
}
