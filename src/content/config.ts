import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    cover: z.string().optional(),
    lang: z.literal('zh'),
    translationSlug: z.string(),
    draft: z.boolean().default(false)
  })
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.literal('zh')
  })
});

export const collections = { blog, about };
