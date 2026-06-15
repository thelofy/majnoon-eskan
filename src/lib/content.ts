import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@/i18n/types';

/** Extract URL slug from content entry id (e.g. villa-mollasadra.fa → villa-mollasadra) */
export function entrySlug(id: string): string {
  return id.replace(/\.(fa|en)(\.md)?$/, '');
}

export async function getProjectsByLocale(locale: Locale) {
  const all = await getCollection('projects');
  return all
    .filter((p) => p.data.locale === locale)
    .sort((a, b) => a.data.order - b.data.order);
}

export async function getSpecialWorksByLocale(locale: Locale) {
  const all = await getCollection('special-works');
  return all
    .filter((p) => p.data.locale === locale)
    .sort((a, b) => a.data.order - b.data.order);
}

export async function getBlogByLocale(locale: Locale) {
  const all = await getCollection('blog', ({ data }) => !data.draft);
  return all
    .filter((p) => p.data.locale === locale)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getProject(locale: Locale, slug: string) {
  const all = await getProjectsByLocale(locale);
  return all.find((p) => entrySlug(p.id) === slug);
}

export async function getSpecialWork(locale: Locale, slug: string) {
  const all = await getSpecialWorksByLocale(locale);
  return all.find((p) => entrySlug(p.id) === slug);
}

export async function getBlogPost(locale: Locale, slug: string) {
  const all = await getBlogByLocale(locale);
  return all.find((p) => entrySlug(p.id) === slug);
}

export type ProjectEntry = CollectionEntry<'projects'>;
export type SpecialWorkEntry = CollectionEntry<'special-works'>;
export type BlogEntry = CollectionEntry<'blog'>;
