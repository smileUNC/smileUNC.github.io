# OmniWave Lab website

Source for **https://smileunc.github.io** — the website of the OmniWave Lab (formerly the SMILE Lab), School of Data and
Information Sciences, UNC Chapel Hill.

Built with React 19 and React Router 7, bundled with [Vite](https://vite.dev), and deployed to GitHub Pages.

## Requirements

[Node.js](https://nodejs.org) **24 LTS**. Check with `node --version`.
Node 22 also works (supported until April 2027) — use it on Macs older than macOS 13.5, which Node 24 doesn't support.

## Everyday commands

```bash
npm install        # first time only (and after dependencies change)
npm start          # local preview with live reload → http://localhost:3000 (opens in your browser)
npm run dev        # the same, without opening a browser tab
npm run build      # production build → dist/
npm run preview    # serve the production build locally → http://localhost:4173
npm run lint       # check the code for mistakes
npm run deploy     # build and publish dist/ to the gh-pages branch — this updates the live site
npm run build:offline  # the whole site as one HTML file to send to people → offline/
```

### Preview on your computer before publishing

1. `npm start` — the site opens at http://localhost:3000. Edit any file and the page reloads when you save. Stop it with `Ctrl+C`.
2. Before publishing, run `npm run build` and then `npm run preview` to see exactly what will go live.
3. Nothing is published until you run `npm run deploy`.

Opening `index.html` directly (double-clicking it) does not work — use one of the commands above.

### Preview online, without installing anything

All three options below work from a branch on GitHub. Push your changes to a branch such as `redesign`
(never to `gh-pages`); the live site does not change until someone runs `npm run deploy`.

**GitHub Codespaces — a cloud computer with VS Code in the browser (recommended)**

1. On the repository page, select your branch, then **Code → Codespaces → Create codespace on _branch_**.
2. The first start takes a few minutes while it runs `npm install`. The preview then opens in a new tab and
   reloads whenever you save a file. If the tab doesn't appear, open the **Ports** panel and click the globe icon next to port 3000.
3. Commit and push from the **Source Control** panel. `npm run deploy` also works in the codespace's terminal.
4. When you're done, stop it (**Code → Codespaces → ⋯ → Stop codespace**; idle codespaces also stop after 30 minutes),
   and delete codespaces you no longer need. Personal GitHub accounts get 120 core-hours (about 60 hours on the default
   2-core machine) and 15 GB of storage free each month.

The setup lives in `.devcontainer/devcontainer.json`.

**StackBlitz — runs inside your browser tab, free for public repositories**

Open `https://stackblitz.com/github/smileUNC/smileUNC.github.io/tree/<branch>` (for example `…/tree/redesign`).
It installs the packages and runs `npm run dev` by itself. Works best in Chrome or Edge (Firefox and Safari support is in beta).
Good for a quick look; publishing still happens from a computer or a codespace.

**A preview link to share — Netlify, Cloudflare Pages or Vercel**

For people who only need to click a link, connect the repository to one of these free hosting services
(build command `npm run build`, output directory `dist`, Node.js 24).
Each branch or pull request then gets its own preview address. This does not change how the real site is published.

### Share an offline copy (one HTML file)

To let someone look through the site without installing anything, or without internet, make a single file:

```bash
npm run build:offline    # → offline/OmniWave-Lab-website-YYYY-MM-DD.html (about 18 MB)
```

The recipient double-clicks the file and it opens in their browser. Every page, image and video works offline, and a
thin banner at the top marks it as an offline copy with its build date. Links to papers, code and datasets, and the
contact form, still need internet.

- Share it through Google Drive, OneDrive, Box, Teams or Slack, or by email (zip it first if an email system blocks
  `.html` attachments). Recipients should **download** it and then open it — a cloud drive's own preview won't run it.
- It is meant for computers; phones and tablets don't open local HTML files reliably.
- Page addresses inside the copy look like `…website.html#/team`. The builder is `scripts/build-offline.mjs`; images
  are included when their path (e.g. `"images/team/ylin.jpg"`) appears in the code, and videos as MP4 only.

## Publishing with GitHub Desktop (step by step)

The code lives on the `main` branch; the live site is the built copy on the `gh-pages` branch. Committing and pushing
`main` saves the code but does **not** change the live site — `npm run deploy` does that.

**One-time setup**

1. Install [Node.js](https://nodejs.org) 24 LTS (it includes `npm`).
2. In GitHub Desktop, sign in with an account that can push to `smileUNC/smileUNC.github.io` (the smileUNC account, or
   your own account added under the repository's **Settings → Collaborators**).
3. **File → Clone repository → smileUNC/smileUNC.github.io**. Already cloned? Select it and click **Fetch origin**, then **Pull origin**.
4. On github.com, check the repository's **Settings → Pages**: source **Deploy from a branch**, branch **gh-pages**, folder **/ (root)**.

**Replace the code with a new version (for example a zip you were sent)**

5. Make sure the current branch (top bar of GitHub Desktop) is **main**.
6. **Repository → Show in Finder** (Windows: **Show in Explorer**). Select everything in that folder and delete it.
   Hidden items such as the `.git` folder aren't shown, so they stay. If you can see a `.git` folder, leave it alone —
   it is what links the folder to GitHub.
7. Unzip the new version and open the `smileUNC.github.io-main` folder inside it. On a Mac, press **⌘ Shift .**
   (Command-Shift-period) so hidden files show: `.env`, `.gitignore`, `.nvmrc`, `.oxlintrc.json`, `.devcontainer`.
   Select everything, copy, paste into the repository folder, and choose **Replace** if asked. Press **⌘ Shift .** again
   to hide them. (Windows shows these files already.)
8. In GitHub Desktop, the **Changes** list shows what changed. Check that `.env` is listed (if not, the hidden files
   weren't copied — redo step 7) and that no `node_modules` folder is listed.
9. Type a summary (e.g. "New OmniWave Lab website"), click **Commit to main**, then **Push origin**.
   The code is now on GitHub; the live site hasn't changed yet.

**Publish**

10. **Repository → Open in Terminal** (Windows: **Open in Command Prompt**). A terminal opens in the repository folder.
11. Run `npm install` (takes a minute or two the first time; quick afterwards).
12. Optional: `npm start` opens a preview at http://localhost:3000. Press `Ctrl+C` in the terminal to stop it.
13. Run `npm run deploy`. It builds the site, uploads it to the `gh-pages` branch and ends with `Published`.
    - Mac, first time: if a window offers to install the "command line developer tools", click **Install**, then run
      `npm run deploy` again. Windows: if `git` is "not recognized", install Git from https://git-scm.com first.
    - If it asks for a username and password: enter the GitHub account name, and as the password a **personal access
      token** (GitHub doesn't accept account passwords here). Create one on github.com: profile picture →
      **Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token (classic)**,
      tick **repo**, generate, copy it and paste it at the password prompt (nothing appears while you paste — that's
      normal). The computer remembers it until it expires.
14. After 1–5 minutes, open https://smileunc.github.io and refresh (⌘ Shift R, or Ctrl+F5 on Windows) if you still see
    the old version.

**Next time:** edit files (or copy in a new version with steps 5–8), commit and push in GitHub Desktop, then run
`npm install` and `npm run deploy` again (steps 10, 11, 13). Nothing is lost: the old code and every earlier published
version stay in the repository's history.

---

## Updating content — you usually only need `src/data/`

Almost everything on the site is generated from plain data files. Edit the file, save, and the page updates.

| What you want to change | Edit this | Notes |
|---|---|---|
| Team members / alumni | `src/data/team.js` | Square photos (~800×800 px) in `public/images/team/`; no photo → initials. Optional `website` / `linkedin` / `scholar` show as icons; `link` is where the card itself goes; `period` = time in the group. |
| Publications | `src/data/publications.json` | One object per paper (see below). Lab members are bolded automatically. |
| Project cards | `src/data/projects.js` | Order in the file = order on the site. The first six appear on the home page. |
| News / updates | `src/data/news.js` | Add new items at the **top**. The home page shows the first four. |
| Open positions (Join us) | `src/data/openings.js` | Remove an entry when the position is filled. |
| Home-page highlights carousel | `src/data/highlights.js` | Media in `public/media/highlights/` (prefer MP4 over GIF). |
| OpenFWI datasets, benchmarks, resources | `src/data/openfwi.js` | Copy an existing benchmark object to add a new one. |
| $\mathbb{E}^{FWI}$ benchmark tables | `src/data/efwi.js` | Values are strings so trailing zeros show. |
| Software page (OmniWave Software) and demo downloads | `src/data/software.js` | Instructions for adding downloads are at the top of the file. |
| Navigation, footer links, social icons | `src/data/site.js` | |
| Colours, fonts, spacing | `src/styles/theme.css` | All design tokens are CSS variables at the top. |
| Logos and icons | `public/images/omniwave.png` (OmniWave wordmark, home page only), `public/images/omniwave-emblem.png` (emblem, top-left logo and footer); `public/favicon.ico`, `logo192.png`, `logo512.png`, `apple-touch-icon.png`, `og-image.png` (made from the emblem) | Replace the files, keep the names. |

### Publication entry format

```json
{
  "title": "Auto-Linear Phenomenon in Subsurface Imaging",
  "authors": "Yinan Feng, Yinpeng Chen, Peng Jin, Shihang Feng, and Youzuo Lin",
  "venue": "Proceedings of the 41st International Conference on Machine Learning (ICML), PMLR vol. 235, pp. 13153-13174, 2024.",
  "year": 2024,
  "type": "Conference",
  "topic": "Subsurface Imaging & Inversion",
  "selected": true,
  "url": "https://proceedings.mlr.press/v235/feng24a.html",
  "project": "/projects/auto-linear",
  "code": "https://github.com/..."
}
```

- `type`: `Journal`, `Conference`, `Preprint` or `Book Chapter`.
- `topic`: reuse one of the existing topics so the filters and the home-page research areas stay tidy.
- `selected`: shows the paper under **Selected** (with a star).
- `project` and `code` are optional.
- LaTeX works in titles and table cells when wrapped in `$...$` (e.g. `"$\\mathbb{E}^{FWI}$"` — double the backslashes in JSON/JS).

### Adding a new project page

1. Copy `src/components/pages/projects/auto_linear.jsx` (it uses the shared `ProjectLayout`, `Figure` and `CodeBlock` components) and edit the text.
2. Put figures in `public/images/projects/<project-name>/`.
3. Register the route in `src/components/pages/Projects.jsx`.
4. Add a card to `src/data/projects.js` (and set `"project"` on the matching publication).

### Adding a top-level page

Create the component in `src/components/pages/`, add a `<Route>` in `src/App.jsx`, and add it to `nav` in `src/data/site.js`.

---

## Project structure

```
index.html           page shell (title, meta tags, GitHub Pages redirect script)
vite.config.js       build settings (dev-server port, output folder, base path, allowed preview hosts)
.devcontainer/       GitHub Codespaces setup (online preview)
.nvmrc               Node.js version (24) used by nvm and hosting services
.env                 the site's public address (VITE_SITE_URL) — change it if the site moves
scripts/build-offline.mjs  makes the one-file offline copy (npm run build:offline → offline/, not committed)
public/              copied to the site as-is
  images/            photos, figures, logos
  media/highlights/  videos for the home-page carousel (MP4 + WebM)
  404.html           GitHub Pages single-page-app redirect (keep it)
  .nojekyll          tells GitHub Pages to serve files as-is (keep it)
src/
  main.jsx           entry point
  App.jsx            top-level routes
  data/              ← site content (see table above)
  styles/theme.css   design tokens + shared styles
  components/        layout and reusable components (Navbar, Footer, cards, tables, ...)
  components/pages/  one file per page; project pages in pages/projects/
  utils/             asset() helper for files in /public, useDocumentTitle(), offline-copy switches
```

## Notes

- Images and videos in `public/` are served as-is; keep them web-sized (photos ≤ 1600 px, JPEG quality ~85; videos as MP4).
  To convert a GIF: `ffmpeg -i in.gif -movflags +faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -crf 26 out.mp4`.
- Deep links such as `/projects/openfwi/benchmarks` work on GitHub Pages thanks to `public/404.html` and the small script in `index.html`.
- The live site is served from the `gh-pages` branch, which `npm run deploy` updates. In the repository's **Settings → Pages**, the source should be "Deploy from a branch: gh-pages".
- Custom domain (optional): put the domain in a file `public/CNAME` (e.g. `www.example.org`), point the domain's DNS at
  `smileunc.github.io` (CNAME record) and enter it under **Settings → Pages → Custom domain**. GitHub then forwards every
  smileunc.github.io link, page path included, to the same page on the new domain. Then change `VITE_SITE_URL` in `.env`.
  Keep the domain on auto-renew: if it lapses, the old links stop working too.
- New github.io name: rename the smileUNC GitHub account (Settings → Account → Change username), rename this repository to
  `<newname>.github.io`, set `VITE_SITE_URL=https://<newname>.github.io` in `.env` and run `npm run deploy`. GitHub does
  not redirect the old smileunc.github.io address, so right away create a free organization named smileUNC whose
  `smileUNC.github.io` repository forwards old links to the new address (this also keeps the old name from being taken).
