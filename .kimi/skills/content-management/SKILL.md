---
name: content-management
description: How to add and manage content (movements, parts) using Astro Content Collections
---

## Content Collections Operations

### Adding a New Movement Maker

1. Create a new Markdown file:
   ```bash
   touch src/content/movements/<maker-name>.md
   ```

2. Write frontmatter (follow the schema):
   ```yaml
   ---
   title: "Brand Name"
   description: "Brief description in Japanese and English"
   category: "movement-maker"
   country: "Japan"
   founded: "1959"
   ---
   ```

3. Write body content in Markdown. Use `##` for section headings.
   Include both English and Japanese text for bilingual support.

4. Build to verify:
   ```bash
   npm run build
   ```

5. The page will be auto-generated at `/movements/<maker-name>/`

### Adding a New Watch Part

1. Create a new Markdown file:
   ```bash
   touch src/content/parts/<part-name>.md
   ```

2. Write frontmatter:
   ```yaml
   ---
   title: "Part Name"
   description: "Brief description"
   category: "part"
   ---
   ```

3. Write body content with both languages.

4. The page will be auto-generated at `/parts/<part-name>/`

### Content Guidelines

- **Title**: Use the brand/part name in English
- **Description**: 100-200 characters, bilingual preferred
- **Body structure**:
  - `## About X / Xについて` — Overview
  - `## Key Features / 主な特徴` — Bullet points
  - `## Repair Notes / 修理時の注意点` — Practical info for repair shop context

### Modifying Existing Content

Simply edit the Markdown file and rebuild. No other files need modification.

### Removing Content

Delete the Markdown file. The page will be removed on next build.
