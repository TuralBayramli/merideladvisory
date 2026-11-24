import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './ui';

export type Article = CollectionEntry<'insights'> & { slug: string; lang: Lang; minutes: number };

/** Reading time in minutes, at about 200 words a minute. */
function readingMinutes(body: string | undefined): number {
  const words = (body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Published articles in one language, newest first. */
export async function getArticles(lang: Lang): Promise<Article[]> {
  const all = await getCollection('insights', (e) => !e.data.draft && e.id.startsWith(`${lang}/`));
  return all
    .map((e) => ({ ...e, slug: e.id.slice(lang.length + 1), lang, minutes: readingMinutes(e.body) }))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.data.title.localeCompare(b.data.title));
}

/** Slugs of articles that exist in a language, to check for a translation. */
export async function getSlugs(lang: Lang): Promise<Set<string>> {
  return new Set((await getArticles(lang)).map((a) => a.slug));
}
