# Notes for Claude

Static GitHub Pages site, no build step. Owner: Lucio (Data & BI Analyst). He talks in Spanish (rioplatense).

- Projects live in `projects.js`; every project needs both `en` and `es` (title, context, summary, body, highlights, captions; optional `tags` override per language).
- Screenshots: convert to webp, max 1600 px wide, into `assets/projects/<slug>/` numbered from 1 (1 = cover). Client data in screenshots must stay masked — flag anything readable (names, locations, logos) before publishing.
- Interface strings are in the `T` object in `index.html`; contact links in `CONTACT` (empty = hidden).
- Keep the Workana project descriptions as the source of truth; tighten wording, don't invent metrics.
- Contact form uses Web3Forms (`CONTACT.formKey` in `index.html`); with no key or on failure it shows a prefilled mailto link to `CONTACT.formEmail`.
