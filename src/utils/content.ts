/**
 * Shared utilities for content detail pages (movements, parts, etc.)
 */

/**
 * Get the canonical site URL, stripping a trailing slash.
 */
export function getSiteUrl(site: URL | undefined): string {
  return site?.toString().replace(/\/$/, '') ?? 'https://chigasaki.repairwatch.workers.dev';
}

/**
 * Auto-detect Japanese content and add lang="ja" to block-level elements.
 */
export function addLangJaToHtml(html: string): string {
  const jpPattern = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/;
  return html.replace(
    /<(p|li|h3|h4)([^>]*)>([\s\S]*?)<\/\1>/g,
    (match, tag, attrs, inner) => {
      if (jpPattern.test(inner) && !attrs.includes('lang=')) {
        return `<${tag}${attrs} lang="ja">${inner}</${tag}>`;
      }
      return match;
    }
  );
}

/**
 * Build a Schema.org BreadcrumbList object.
 */
export function buildBreadcrumbList(
  siteUrl: string,
  items: Array<{ name: string; url?: string }>
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${siteUrl}${item.url}` : undefined,
    })),
  };
}

/**
 * Build a Schema.org Article object.
 */
export function buildArticleSchema(options: {
  headline: string;
  description: string;
  url: string;
  authorName?: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.headline,
    description: options.description,
    url: options.url,
    author: {
      '@type': 'Organization',
      name: options.authorName ?? "Kawabata's Vintage Quartz Watch Repair",
    },
  };
}

/**
 * Build the full structured data array for a content detail page.
 */
export function buildContentStructuredData(
  siteUrl: string,
  breadcrumbItems: Array<{ name: string; url?: string }>,
  articleOptions: {
    headline: string;
    description: string;
    url: string;
    authorName?: string;
  }
): object[] {
  return [
    buildBreadcrumbList(siteUrl, breadcrumbItems),
    buildArticleSchema(articleOptions),
  ];
}

/**
 * Minimal interface for a content collection entry used by detail pages.
 */
export interface ContentEntryLike {
  id: string;
  data: {
    title: string;
    description: string;
    [key: string]: unknown;
  };
  rendered?: {
    html?: string;
  };
}

/**
 * Context object produced for a detail page.
 */
export interface DetailPageContext {
  title: string;
  description: string;
  enhancedHtml: string;
  breadcrumb: Array<{ label: string; href?: string }>;
  structuredData: object[];
  headingId: string;
}

/**
 * Create all common context values (title, breadcrumb, structuredData, etc.)
 * for a content detail page from an entry and collection name.
 */
export function createDetailPageContext(
  entry: ContentEntryLike,
  collection: 'movements' | 'parts',
  siteUrl: string
): DetailPageContext {
  const basePath = `/${collection}/`;
  const detailPath = `${basePath}${entry.id}/`;
  const collectionLabel = collection === 'movements' ? 'Movements' : 'Parts';

  const title =
    collection === 'movements'
      ? `${entry.data.title} Movement | Kawabata's Vintage Quartz Watch Repair`
      : `${entry.data.title} | Quartz Watch Parts | Kawabata's Vintage Quartz Watch Repair`;

  const enhancedHtml = addLangJaToHtml(entry.rendered?.html ?? '');

  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: collectionLabel, href: basePath },
    { label: entry.data.title },
  ];

  const structuredData = buildContentStructuredData(
    siteUrl,
    [
      { name: 'Home', url: '/' },
      { name: collectionLabel, url: basePath },
      { name: entry.data.title },
    ],
    {
      headline: entry.data.title,
      description: entry.data.description,
      url: `${siteUrl}${detailPath}`,
    }
  );

  const headingId = collection === 'movements' ? 'movement-heading' : 'part-heading';

  return {
    title,
    description: entry.data.description,
    enhancedHtml,
    breadcrumb,
    structuredData,
    headingId,
  };
}
