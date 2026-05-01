import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const movementsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/movements' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    country: z.string().optional(),
    founded: z.string().optional(),
  }),
});

const partsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/parts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  movements: movementsCollection,
  parts: partsCollection,
};
