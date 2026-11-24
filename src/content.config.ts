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
    /** Photo set in public/images: 'road' uses road-wide-1600.webp and road-wide-800.webp. */
    image: z.string().default('sea-river'),
    /** Short sentences for the "Key takeaways" box at the top. */
    takeaways: z.array(z.string()).default([]),
    /** Animated figure shown in the article: cost to serve, safety stock or freight audit. */
    figure: z.enum(['cts', 'safety', 'audit']).optional(),
    /** The figure goes just before this section heading (1 = the first "##" heading). */
    figureBefore: z.number().int().positive().default(1),
    /** Short video in public/videos, with a poster image and its length, e.g. "1:27". */
    video: z.object({ src: z.string(), poster: z.string(), length: z.string() }).optional(),
  }),
});

export const collections = { insights };
