# RainyMatinal的博客网站

一个使用 Astro 4、Content Collections、MDX、Tailwind CSS v4、Shiki 和 Motion 搭建的中文个人博客。站点使用单一中文路径与单一浅色手绘风格。

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

文章放在 `src/content/blog/zh/`。

```mdx
---
title: "标题"
description: "文章描述，用于 SEO 和卡片摘要"
pubDate: 2025-06-01
tags: ["生活", "设计"]
cover: "/images/hello-world.jpg"
lang: "zh"
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

项目为纯静态输出，`astro build` 会生成中文页面、sitemap，以及 `/rss.xml`。
