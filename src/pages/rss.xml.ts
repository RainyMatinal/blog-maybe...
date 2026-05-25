import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPostSlug, getPosts } from '@/lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts('zh');

  return rss({
    title: 'RainyMatinal的博客网站',
    description: '工作记录，经验分享，日常思考。',
    site: context.site ?? 'https://example.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${getPostSlug(post)}/`
    }))
  });
}
