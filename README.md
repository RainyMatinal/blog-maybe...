# 生活与设计双语博客

一个使用 Astro 4、Content Collections、MDX、Tailwind CSS v4、Shiki、Motion 和 Astro i18n routing 搭建的个人博客。默认中文路径不加前缀，英文路径使用 `/en/`。

## 本地启动

```bash
npm install
npm run dev
```

常用命令：

```bash
npm run check
npm run build
npm run preview
```

## 新建文章

中文文章放在 `src/content/blog/zh/`，英文文章放在 `src/content/blog/en/`。两种语言的同一篇文章使用相同的 `translationSlug`，语言切换会优先跳转到对应译文。

```mdx
---
title: "标题"
description: "文章描述，用于 SEO 和卡片摘要"
pubDate: 2025-06-01
tags: ["生活", "设计"]
cover: "/images/hello-world.jpg"
lang: "zh"
translationSlug: "hello-world"
draft: false
---
```

文章正文支持 MDX，可导入 `src/components/` 下的 Astro 组件。

## 部署到 Cloudflare Pages

Cloudflare Pages 构建设置：

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `20` 或更新

项目为纯静态输出，`astro build` 会生成中英双语页面、sitemap，以及 `/rss.xml` 和 `/en/rss.xml` 两个 RSS Feed。
