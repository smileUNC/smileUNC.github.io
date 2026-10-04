// Support for the offline single-file copy of the site (`npm run build:offline`,
// see scripts/build-offline.mjs). None of this is included in the normal build.

// True only in the offline copy. Vite replaces the check at build time, so the
// offline-only code below is dropped from the website itself.
export const OFFLINE = import.meta.env.MODE === "offline";

// In the offline copy, page addresses live after "#" (…html#/team), so a plain
// same-page link such as href="#main" would be read as a page change.
// Scroll to the target instead.
export function scrollSamePageLinks() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest?.('a[href^="#"]');
    const id = link?.getAttribute("href").slice(1);
    if (!id || id.startsWith("/")) return;
    const target = document.getElementById(decodeURIComponent(id));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ block: "start" });
    if (link.classList.contains("skip-link")) {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }
  });
}
