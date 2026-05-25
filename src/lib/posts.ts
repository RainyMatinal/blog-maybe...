import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '@/i18n/ui';

export type BlogPost = CollectionEntry<'blog'>;

export function getPostSlug(post: BlogPost): string {
  return post.slug.split('/').at(-1) || post.slug;
}

export async function getPosts(lang: Lang): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => data.lang === lang && !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPostBySlug(lang: Lang, slug: string): Promise<BlogPost | undefined> {
  const posts = await getPosts(lang);
  return posts.find((post) => getPostSlug(post) === slug);
}

export function getAllTags(posts: BlogPost[]): string[] {
  return [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) => a.localeCompare(b));
}

export function getReadingMinutes(text: string): number {
  const cjk = text.match(/[\u3400-\u9fff]/g)?.length ?? 0;
  const latin = text.replace(/[\u3400-\u9fff]/g, ' ').match(/[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)?/g)?.length ?? 0;
  return Math.max(1, Math.ceil((cjk + latin) / 300));
}

export function formatDate(date: Date, _lang: Lang): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}
