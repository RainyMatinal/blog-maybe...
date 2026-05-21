import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPostSlug, getPosts } from '@/lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts('en');

  return rss({
    title: 'Life & Design Notes',
    description: 'Essays on life, design, travel, and thoughtful products.',
    site: context.site ?? 'https://example.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/en/blog/${getPostSlug(post)}/`
    }))
  });
}
