import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router";
import "@fontsource-variable/inter";
import "katex/dist/katex.min.css";
import "./styles/theme.css";
import App from "./App";
import { OFFLINE, scrollSamePageLinks } from "./utils/offline";

// The offline single-file copy is opened straight from disk, so its page
// addresses go after "#" (HashRouter). The website uses normal addresses.
if (OFFLINE) scrollSamePageLinks();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {OFFLINE ? (
      <HashRouter>
        <App />
      </HashRouter>
    ) : (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    )}
  </StrictMode>
);
