import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // The site is served from the root of https://smileunc.github.io/.
  // If it ever moves to a sub-path (e.g. https://example.org/smile/), set base: "/smile/".
  base: "/",
  server: {
    port: 3000, // `npm start` → http://localhost:3000
    // Allow the preview address GitHub Codespaces gives the dev server
    // (https://<codespace-name>-3000.app.github.dev). `npm run preview` uses this list too.
    allowedHosts: [".app.github.dev"],
  },
  preview: {
    port: 4173, // `npm run preview` → http://localhost:4173
  },
  build: {
    outDir: "dist",
    // One bundle (~210 kB gzipped, most of it React + KaTeX) is fine for this site.
    chunkSizeWarningLimit: 900,
  },
});
