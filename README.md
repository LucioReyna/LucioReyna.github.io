# Lucio — Data & BI Portfolio

Live at **https://lucioreyna.github.io** (Spanish/English, toggle at the top).

Direct links: add `?lang=es` or `?lang=en`, and `#<slug>` to open a project, e.g.
`https://lucioreyna.github.io/?lang=es#inventory-control`.

## Structure

- `index.html` — the page (layout, styles, interface text in both languages, contact links in `CONTACT`)
- `projects.js` — the projects, one block each, in display order
- `assets/projects/<slug>/1.webp, 2.webp…` — screenshots; `1.webp` is the cover

## Adding a project

1. Put the screenshots in `assets/projects/<new-slug>/` as `1.webp`, `2.webp`… (max ~1600 px wide).
2. Copy a block in `projects.js`, set `slug` and `images` (how many screenshots), and fill `en` and `es`.
3. Commit and push to `main`; GitHub Pages publishes in about a minute.
