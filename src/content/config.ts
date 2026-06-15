import { defineCollection, z } from 'astro:content';

const projectMeta = {
  location: z.string(),
  year: z.string(),
  stoneType: z.string(),
  scope: z.string(),
  projectType: z.string(),
  heroImage: z.string(),
  gallery: z.array(z.string()),
  featured: z.boolean().default(false),
  order: z.number().default(0),
};

const projectSchema = z.object({
  locale: z.enum(['fa', 'en']),
  title: z.string(),
  description: z.string(),
  ...projectMeta,
  overview: z.string(),
  cncProduction: z.string(),
  details: z.string(),
});

const specialWorkSchema = z.object({
  locale: z.enum(['fa', 'en']),
  title: z.string(),
  description: z.string(),
  ...projectMeta,
  overview: z.string(),
  manufacturing: z.string().optional(),
  details: z.string(),
});

const blogSchema = z.object({
  locale: z.enum(['fa', 'en']),
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  month: z.number(),
  heroImage: z.string(),
  draft: z.boolean().default(false),
});

export const collections = {
  projects: defineCollection({ type: 'content', schema: projectSchema }),
  'special-works': defineCollection({ type: 'content', schema: specialWorkSchema }),
  blog: defineCollection({ type: 'content', schema: blogSchema }),
};
