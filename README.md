# Meridel Advisory website

Source of [merideladvisory.com](https://merideladvisory.com). English is at `/`, Azerbaijani at `/az/`.

Every change pushed to the `main` branch is built and published automatically by GitHub Actions (see the **Actions** tab).

## Where things are

| What | File |
|---|---|
| All page text, in both languages | `src/i18n/ui.ts` (`en` and `az` sections) |
| Articles | `src/content/insights/en/` and `src/content/insights/az/` |
| Colors and fonts | `src/styles/global.css` |
| Header and footer | `src/layouts/Base.astro` |
| Page layouts | `src/views/` |

## Adding an article

1. Create `src/content/insights/en/my-article.md` and, for the Azerbaijani version, `src/content/insights/az/my-article.md` (same file name).
2. Start each file with:

   ```
   ---
   title: 'Article title'
   description: 'One or two sentences shown in lists and search results.'
   date: 2026-12-01
   ---
   ```

3. Write the article below in Markdown (`## Heading`, `- list item`, `**bold**`).
4. Commit. The site updates in about a minute.

Set `draft: true` in the header to keep an article unpublished.

## Running it on your computer (optional)

Needs Node.js 22.

```
npm install
npm run dev
```
