import rss from '@astrojs/rss';
import { localePath, type Lang } from './ui';
import { x } from './extra';
import { getArticles } from './insights';

/** RSS feed of the articles in one language. */
export async function feed(lang: Lang, site?: URL) {
  const X = x(lang);
  const articles = await getArticles(lang);
  return rss({
    title: X.rss.title,
    description: X.rss.description,
    site: site ?? 'https://merideladvisory.com',
    customData: `<language>${lang}</language>`,
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.date,
      link: localePath(lang, `/insights/${a.slug}`) + '/',
      author: a.data.author,
    })),
  });
}
