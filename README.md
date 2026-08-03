# OD Videos

Marketing website for **OD Videos** — real‑estate, aerial (drone), corporate,
social‑media and wedding videography by Ondřej Demuth. Built as a static
[Jekyll](https://jekyllrb.com/) site and served in Czech at
**[odvideos.cz](https://odvideos.cz)**.

> The site is deployed via GitHub Pages (see `CNAME`). All visitor‑facing
> content is in Czech.

## Tech stack

- **[Jekyll](https://jekyllrb.com/)** (through the `github-pages` gem) — static
  site generator
- **[Tailwind CSS](https://tailwindcss.com/)** via CDN, with semantic,
  theme‑aware color tokens configured inline in `_includes/head.html`
- **Vanilla JavaScript** (`assets/js/main.js`) — no framework, no build step
- **Google Fonts** — Host Grotesk (body/UI) and Story Script (accent)
- **[jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag)** +
  **[jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap)** for metadata
  and `sitemap.xml`
- **[GoatCounter](https://www.goatcounter.com/)** — cookieless, privacy‑friendly
  analytics (no consent banner needed)
- **Google Apps Script** — serverless backend for the review form (see below)

## Project structure

```
.
├── _config.yml               # Site config: title, SEO, Apps Script URL, plugins
├── _layouts/
│   ├── default.html          # Full layout: nav + content + footer
│   └── minimal.html          # Slim layout for standalone pages
├── _includes/
│   ├── head.html             # <head>: theme boot, SEO, Tailwind config, fonts, analytics
│   ├── nav.html              # Fixed header, mobile menu, theme toggle
│   ├── footer.html
│   ├── social-meta.html      # Open Graph / Twitter card tags
│   └── structured-data.html  # JSON-LD schema.org markup
├── pages/
│   ├── index.html            # Homepage (Hero, O Mně, Služby, Galerie, Kontakt) → /
│   ├── cenik.html            # Pricing
│   ├── gallery.html          # Gallery → /galerie
│   ├── recenze.html          # Review form → /recenze (noindex)
│   ├── dekujeme.html         # Thank-you page
│   ├── privacy-policy.html
│   └── 404.html
├── _drafts/                  # Unpublished drafts (e.g. gallery-detail.html)
├── assets/
│   ├── css/main.css          # Custom styles + CSS variables driving theme tokens
│   ├── js/main.js            # Menu, smooth scroll, theme toggle, scroll animations
│   ├── images/               # Logos, portrait, client logos, OG image
│   └── videos/               # Hero background video (H.265 + H.264 fallback)
├── google-apps-script/       # Serverless backend for the /recenze form
│   ├── Code.gs
│   └── README.md             # Setup guide (in Czech)
├── CNAME                     # Custom domain for GitHub Pages
└── Gemfile                   # Ruby dependencies
```

> Note: the top‑level `css/styles.css` and `js/main.js` are leftovers from an
> earlier template and are **not** used — the site loads `assets/css/main.css`
> and `assets/js/main.js`.

## Getting started

**Prerequisites:** Ruby and [Bundler](https://bundler.io/).

```bash
# 1. Install dependencies
bundle install

# 2. Run the dev server with live reload
bundle exec jekyll serve --livereload --host 0.0.0.0 --baseurl "" --force_polling
```

Then open <http://localhost:4000>.

> After changing `_config.yml`, restart Jekyll — config changes aren't picked up
> by live reload.

## Theming

The site supports light and dark modes:

- The active theme is resolved **before first paint** by an inline script in
  `_includes/head.html` (stored choice → OS preference → dark by default), which
  avoids a flash of the wrong theme.
- Tailwind runs in `darkMode: 'class'`; colors are semantic tokens (`base`,
  `surface`, `fg`, `muted`, `line`, `brand`) whose HSL values live as CSS
  variables in `assets/css/main.css` and flip on the `.dark` class.
- The header toggle (`assets/js/main.js`) flips the class and persists the
  choice to `localStorage`; the site also follows OS changes live until the
  visitor picks a theme manually.

## Review form (`/recenze`)

The review page posts submissions to a **Google Apps Script Web App**, which
appends them to a Google Sheet — no server required. The endpoint URL is set in
`_config.yml`:

```yaml
google_script_url: "https://script.google.com/macros/s/.../exec"
```

Leaving it empty runs the form in **demo mode** (responses are logged to the
browser console only, not saved). Full setup instructions — creating the sheet,
deploying the script, optional e‑mail notifications, and known limitations — are
in [`google-apps-script/README.md`](google-apps-script/README.md).

## Deployment

The site is built and served by **GitHub Pages** on the custom domain in
`CNAME` (`odvideos.cz`). Pushing to the default branch publishes the site.
Development files (`Gemfile`, `README.md`, `TODO.md`, `google-apps-script/`,
etc.) are excluded from the build via the `exclude:` list in `_config.yml`.
