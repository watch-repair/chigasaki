---
name: astro-dev
description: Astro v6 + Cloudflare Pages development best practices for this project
---

## Astro v6 Development Guide

### Content Layer API (v6)

Astro v6 uses the new Content Layer API. Key differences from legacy collections:

1. **Config file location**: `src/content.config.ts` (NOT `src/content/config.ts`)
2. **Loader required**: Every collection must specify a `loader`
3. **Entry ID**: Use `entry.id` for paths, NOT `entry.slug`
4. **Rendering**: Use `entry.rendered?.html` instead of `entry.render()`

### Example: Adding a Collection

```ts
// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const myCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/my-collection' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  'my-collection': myCollection,
};
```

### Example: Dynamic Route Page

```astro
---
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const entries = await getCollection('my-collection');
  return entries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry },
  }));
}

const { entry } = Astro.props;
---

<div set:html={entry.rendered?.html} />
```

### Cloudflare Pages Deployment

- Build output: `dist/`
- Static SSG only (no SSR adapter needed for pure static sites)
- Use `public/_headers` for security headers
- Use `public/_redirects` for redirects (Cloudflare Pages format)

### Common Pitfalls

| Mistake | Correction |
|---------|-----------|
| `src/content/config.ts` | Use `src/content.config.ts` |
| `entry.slug` | Use `entry.id` |
| `await entry.render()` | Use `entry.rendered?.html` |
| `type: 'content'` in schema | Use `loader: glob(...)` |
