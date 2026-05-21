import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPostSlug, getPosts } from '@/lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts('zh');

  return rss({
    title: '生活与设计笔记',
    description: '生活随笔、设计思考、旅行记录与产品评测。',
    site: context.site ?? 'https://example.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${getPostSlug(post)}/`
    }))
  });
}
