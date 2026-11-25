import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Articles live in src/content/insights/en/ and src/content/insights/az/.
// Use the same file name in both folders for the two language versions.
const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Tural Bayramli'),
    draft: z.boolean().default(false),
    /** One of the topics in src/i18n/topics.ts. */
    topic: z.enum(['strategy', 'logistics', 'inventory', 'data']),
    /** Photo set in public/images: 'road' uses road-wide-1600.webp and road-wide-800.webp. */
    image: z.string().default('sea-river'),
    /** Short sentences for the "Key takeaways" box at the top. */
    takeaways: z.array(z.string()).default([]),
    /**
     * Figure shown in the article. Animated: cts, safety, audit, otif, forecast,
     * pipeline. Still: abc, network, carbon, dash (the diagrams from the services page).
     */
    figure: z
      .enum(['cts', 'safety', 'audit', 'otif', 'forecast', 'pipeline', 'abc', 'network', 'carbon', 'dash'])
      .optional(),
    /** The figure goes just before this section heading (1 = the first "##" heading). */
    figureBefore: z.number().int().positive().default(1),
    /** Short video in public/videos, with a poster image and its length, e.g. "1:27". */
    video: z.object({ src: z.string(), poster: z.string(), length: z.string() }).optional(),
    /** A short summary shown in a box at the end. */
    bottomLine: z.string().optional(),
    /** Questions and answers at the end (also given to search engines). */
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    /** Ids from src/data/terms.ts, shown as related terms. */
    terms: z.array(z.string()).default([]),
    /** Official sources, linked at the end. */
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { insights };
