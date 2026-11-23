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
  }),
});

export const collections = { insights };
