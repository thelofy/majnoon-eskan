export type Locale = 'fa' | 'en';

export interface LocaleConfig {
  code: Locale;
  lang: string;
  dir: 'rtl' | 'ltr';
  label: string;
}

export const locales: Record<Locale, LocaleConfig> = {
  fa: { code: 'fa', lang: 'fa-IR', dir: 'rtl', label: 'فارسی' },
  en: { code: 'en', lang: 'en-US', dir: 'ltr', label: 'English' },
};

export const defaultLocale: Locale = 'fa';

export interface Dictionary {
  siteName: string;
  siteTagline: string;
  nav: {
    home: string;
    about: string;
    projects: string;
    capabilities: string;
    specialWorks: string;
    blog: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaProjects: string;
    ctaVideo: string;
  };
  stats: {
    projects: string;
    cnc: string;
    custom: string;
    export: string;
    projectsDesc: string;
    cncDesc: string;
    customDesc: string;
    exportDesc: string;
  };
  sections: {
    featuredProjects: string;
    capabilities: string;
    whyChooseUs: string;
    specialWorks: string;
    latestBlog: string;
    viewAll: string;
  };
  whyChooseUs: {
    craftsmanship: string;
    technology: string;
    export: string;
    custom: string;
  };
  project: {
    location: string;
    year: string;
    stoneType: string;
    scope: string;
    projectType: string;
    overview: string;
    cncProduction: string;
    details: string;
    contactSimilar: string;
    viewProject: string;
    backToProjects: string;
  };
  capabilities: {
    title: string;
    subtitle: string;
    cnc: string;
    facade: string;
    interior: string;
    restoration: string;
    export: string;
    custom: string;
    cncDesc: string;
    facadeDesc: string;
    interiorDesc: string;
    restorationDesc: string;
    exportDesc: string;
    customDesc: string;
  };
  blog: {
    title: string;
    readMore: string;
    publishedOn: string;
    backToBlog: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    address: string;
    factory: string;
  };
  about: {
    title: string;
    subtitle: string;
    heritage: string;
    mission: string;
    factory: string;
  };
  footer: {
    rights: string;
    followUs: string;
    quickLinks: string;
  };
  common: {
    loading: string;
    learnMore: string;
    close: string;
    menu: string;
  };
}
