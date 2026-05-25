export const languages = {
  zh: '中文'
} as const;

export const defaultLang = 'zh';
export type Lang = keyof typeof languages;

export const ui = {
  zh: {
    'nav.home': '首页',
    'nav.blog': '博客',
    'nav.notes': '笔记',
    'nav.about': '关于',
    'post.readTime': '阅读',
    'post.publishedAt': '发布于',
    'post.tags': '标签',
    'post.prevPost': '上一篇',
    'post.nextPost': '下一篇',
    'home.latestPosts': '近期写作',
    'home.viewAll': '查看全部',
    'about.title': '关于',
    'about.description': '一个关于生活美学、视觉设计与温柔日常的个人空间。'
  }
} as const;
