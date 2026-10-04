# 星海航纪 · InterImm magazine

Source of https://magazine.interimm.org/, a Jekyll site that GitHub Pages builds from the `gh-pages` branch.

It uses the shared InterImm kit (https://interimm.org/kit/) for colours, fonts, the header with its light/dark
switch and toolkit button, and the footer. `css/magazine.css` holds only what the magazine adds.

- Articles: `_posts/<section>/YYYY-MM-DD-slug.md`, with `categories` set to the section (`science`, `stories`,
  `history`, `club`, `til`). Sections are listed in `_data/navigation.yml`; authors in `_data/authors.yml`.
- `toc: true` adds a contents list in the side column.
- Build locally: `bundle install && bundle exec jekyll serve`.
