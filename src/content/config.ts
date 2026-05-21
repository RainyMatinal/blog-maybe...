import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    cover: z.string().optional(),
    lang: z.enum(['zh', 'en']),
    translationSlug: z.string(),
    draft: z.boolean().default(false)
  })
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['zh', 'en'])
  })
});

export const collections = { blog, about };
