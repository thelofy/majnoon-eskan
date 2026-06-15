import type { Locale } from '@/i18n/types';

export interface SeoProps {
  title: string;
  description: string;
  locale: Locale;
  pathname: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export function buildBreadcrumbJsonLd(
  items: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildProjectJsonLd(data: {
  name: string;
  description: string;
  image: string;
  url: string;
  location?: string;
  year?: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: data.name,
    description: data.description,
    image: data.image,
    url: data.url,
    ...(data.location && {
      locationCreated: { '@type': 'Place', name: data.location },
    }),
    ...(data.year && { dateCreated: data.year }),
    creator: {
      '@type': 'Organization',
      name: 'Eskan Stone',
    },
  };
}

export function buildArticleJsonLd(data: {
  title: string;
  description: string;
  image: string;
  url: string;
  publishedTime: string;
  locale: Locale;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    image: data.image,
    url: data.url,
    datePublished: data.publishedTime,
    inLanguage: data.locale === 'fa' ? 'fa-IR' : 'en-US',
    author: {
      '@type': 'Organization',
      name: 'Eskan Stone',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Eskan Stone',
    },
  };
}
