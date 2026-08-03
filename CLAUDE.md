# CLAUDE.md

Guidance for AI assistants working in this repository.

## What this is

A **Jekyll static site** for **OD Videos** — the videography business of Ondřej
Demuth (realitní / letecká / firemní / svatební video). The site is in
**Czech** (`lang: cs-CZ`); all user-facing copy, section names, and form fields
should stay in Czech. It is deployed to **GitHub Pages** at the custom domain
**odvideos.cz** (`CNAME`).

There is **no build tool / no npm** — styling is **Tailwind CSS via the CDN**
(`<script src="https://cdn.tailwindcss.com">` in `_includes/head.html`), so
utility classes work directly in markup with no compile step.

## Running locally

```bash
bundle install                # first time only
bundle exec jekyll serve --livereload --host 0.0.0.0 --baseurl "" --force_polling
```

Serves on `http://localhost:4000` with livereload on `35729` (both forwarded by
`.devcontainer/devcontainer.json`, image `mcr.microsoft.com/devcontainers/jekyll:2`).

**`_config.yml` is not hot-reloaded** — restart Jekyll after editing it.

## Repository layout

```
_config.yml            Site config, SEO defaults, plugins, google_script_url
_layouts/
  default.html         Full layout: nav + content + footer + main.js
  minimal.html         Stripped layout: logo + "back home" + theme toggle (subpages)
_includes/
  head.html            <head>: theme pre-paint, fonts, Tailwind config, SEO, analytics
  nav.html             Fixed top nav (used by default layout)
  footer.html          Footer with contact + legal (OSVČ) details
  social-meta.html     og:description / twitter:description (before {% seo %})
  structured-data.html JSON-LD ProfessionalService schema
pages/                 Actual site pages (each sets its own `permalink`)
  index.html           Home (/)  — hero, about, services, contact form, gallery
  cenik.html           Price calculator (/cenik)
  gallery.html         Gallery (/galerie)  ⚠ still placeholder content
  recenze.html         Review form (/recenze) → Google Apps Script
  dekujeme.html        Thank-you page (/dekujeme) — contact-form success target
  privacy-policy.html  Privacy policy (/ochrana-soukromi)
  404.html             Not-found page (/404)
assets/
  css/main.css         The stylesheet in use (theme tokens + animations)
  js/main.js           The script in use (menu, theme, analytics, forms)
  images/              Logos, client logos (assets/images/clinets/), og-image, portrait
  videos/              Hero background videos
google-apps-script/    Code.gs + README for the /recenze → Google Sheets backend
_drafts/               Jekyll drafts (not published)
```

## Key conventions

### Layouts & pages
- Content pages live in `pages/` and each declares an explicit `permalink`
  (e.g. `/cenik`, `/galerie`). `permalink: pretty` is the site default.
- Use `layout: default` for the home page (full nav + footer); use
  `layout: minimal` for standalone subpages (ceník, galerie, recenze, etc.).
- Utility pages that shouldn't be indexed set `noindex: true` and
  `sitemap: false` in front matter (recenze, dekujeme, privacy, 404).

### Theming (light/dark)
- Light is the default; dark is toggled by adding the `.dark` class to `<html>`.
- Colors are **semantic CSS variables** in `assets/css/main.css`
  (`--bg`, `--surface`, `--fg`, `--muted`, `--line`, `--brand`), exposed to
  Tailwind as tokens (`bg-base`, `text-fg`, `text-muted`, `bg-surface`,
  `text-brand`, …) via the `tailwind.config` block in `_includes/head.html`.
  **Prefer these tokens over hard-coded colors** so both themes stay correct.
- The active theme is resolved **before first paint** by the inline script in
  `head.html` (stored choice → OS preference → dark fallback); the toggle in
  `assets/js/main.js` persists the choice to `localStorage`.
- Logos are swapped per theme with `block dark:hidden` / `hidden dark:block`
  (color logo for light, white logo for dark).

### SEO & metadata
- Plugins: `jekyll-seo-tag` and `jekyll-sitemap`.
- `head.html` owns `<title>`, `og:title`, `twitter:title` (home → `OD Videos`;
  others → `OD Videos | <page title>`) and calls `{% seo title=false %}` to
  avoid duplicate tags. Don't add a competing `<title>`.
- Page description precedence: search snippet uses `description`; social-share
  blurb uses `og_description` (falls back to `description` → `site.description`).
- Update `_includes/structured-data.html` (JSON-LD) if business details,
  services, or contact info change.

### Fonts
- **Host Grotesk** (body/UI) + **Story Script** (accent), loaded from Google
  Fonts in `head.html`. Don't add an `@import` in CSS (render-blocking).

### JavaScript (`assets/js/main.js`)
- Vanilla JS, no framework. Handles: mobile menu, smooth scroll, scroll-to-top,
  theme toggle, `IntersectionObserver` fade-ins (`.opacity-fade` → `.visible`).
- **Analytics:** GoatCounter (cookieless, `odvideos.goatcounter.com`). Custom
  events are fired via the `track()` helper (phone/email/Instagram/contact
  clicks, section-depth, form submit). It no-ops when GoatCounter is absent
  (local dev), so never let analytics throw into the page.

### Forms
- **Contact form** (home `#contact`): posts to **formsubmit.co** via AJAX;
  on success redirects to `/dekujeme`.
- **Review form** (`/recenze`): posts to a **Google Apps Script Web App**. The
  endpoint is `site.google_script_url` in `_config.yml`; the backend lives in
  `google-apps-script/` (see its `README.md`, in Czech). It uses
  `mode: "no-cors"`, so the browser can't read the response — server-side errors
  can't be distinguished from success, so verify real submissions land in the
  sheet after any `Code.gs` change (and redeploy a new version).

## Known stale / placeholder content (be careful)

These are leftovers from the original template the site was forked from — do
not treat them as the source of truth for how the site works:

- **`README.md`** describes a "Photography Academy" template and is largely
  obsolete (only the last line — the `jekyll serve` command — is current).
- **`css/styles.css`** and **`js/main.js`** (repo root) are **unused
  duplicates**. The live assets are `assets/css/main.css` and
  `assets/js/main.js`; nothing references the root versions.
- **`pages/gallery.html`** and **`_drafts/gallery-detail.html`** still contain
  English placeholder gallery items and images that don't exist
  (`/assets/images/gallery-*.jpg`). `TODO.md` reads "Gallery" — this section is
  unfinished.
- Both `404.html` (root) and `pages/404.html` declare `permalink: /404`; prefer
  editing `pages/404.html` and avoid introducing conflicting permalinks.
- `assets/images/clinets/` is a misspelled directory name ("clients") — keep it
  as-is unless deliberately renaming, since markup references that path.

## Git workflow

- Deployment is automatic via GitHub Pages on push to the default branch (`main`).
- Commit messages in history are terse; keep them clear and descriptive.
- Do not create pull requests unless explicitly asked.
