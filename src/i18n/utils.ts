import type { Locale } from './types';
import { defaultLocale, locales } from './types';
import fa from './dictionaries/fa';
import en from './dictionaries/en';
import type { Dictionary } from './types';

const dictionaries: Record<Locale, Dictionary> = { fa, en };

export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  if (maybeLocale === 'en') return 'en';
  return 'fa';
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const clean = path.replace(/^\/(fa|en)/, '') || '/';
  return `/${locale}${clean === '/' ? '/' : clean}`;
}

export function getAlternateUrls(pathname: string, site: string): { fa: string; en: string } {
  const clean = pathname.replace(/^\/(fa|en)/, '') || '/';
  const suffix = clean === '/' ? '/' : clean;
  return {
    fa: `${site}/fa${suffix}`,
    en: `${site}/en${suffix}`,
  };
}

export function getLocaleConfig(locale: Locale) {
  return locales[locale];
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const clean = pathname.replace(/^\/(fa|en)/, '') || '/';
  return `/${targetLocale}${clean === '/' ? '/' : clean}`;
}

export { defaultLocale, locales };
