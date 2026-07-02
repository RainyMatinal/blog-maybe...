<!--
中文: 项目说明文档，介绍 RainyMatinal 苦难摇篮 Astro 博客的使用、写作、图片、部署和动画排查方法。
EN: Project README that explains how to use, write, add images, deploy, and troubleshoot the RainyMatinal Astro blog.
-->

# RainyMatinal 苦难摇篮 Astro 博客使用说明

这是一个基于 Astro 的静态个人博客。它的定位不是普通模板站，而是一个偏旧互联网资料库气质的个人技术档案馆：记录 Linux、Git、C 语言、前端、网络工程和考研路线。

当前项目可以直接部署到 Cloudflare Pages。页面底部和文章底部的 RainyMatinal 签名动画已经改为带版本号的手写笔画内联运行时：每次进入页面会重新创建动画，每 8 秒循环一次，并尽量避免浏览器或 Cloudflare 缓存旧动画。

## 1. 技术栈

- Astro：静态站点生成与页面路由。
- Astro Content Collections：管理博客文章和 notes 的 frontmatter 字段。
- CSS：不使用 Tailwind，样式由 `src/styles` 下的 CSS 文件维护。
- Cloudflare Pages：推荐部署平台，`public/_headers` 已提供缓存策略。

## 2. 常用命令

```bash
npm install
npm run dev
npm run build
npm run preview
```

说明：

- `npm install`：首次拉取项目后安装依赖。
- `npm run dev`：本地开发预览，一般会启动在 `http://localhost:4321`。
- `npm run build`：生成静态产物到 `dist/`。
- `npm run preview`：本地预览构建后的静态站点。

每次修改页面、样式、文章或动画逻辑后，建议至少运行一次：

```bash
npm run build
```

## 3. 目录结构

```text
src/
  components/
    blog/           文章卡片等博客组件
    site/           Header、Footer 等全站组件
  content/
    blog/           正式博客文章 Markdown 文件
    notes/          笔记内容目录，当前可继续添加
  layouts/          基础布局和文章布局
  pages/            首页、文章页、归档页、标签页、关于页
  styles/           设计令牌、全局样式、排版样式、正文样式
public/
  images/blog/      博客图片建议放置位置
  _headers          Cloudflare Pages 缓存响应头配置
```

## 4. 写一篇博客文章

博客文章放在：

```text
src/content/blog/
```

新建一个 Markdown 文件，例如：

```text
src/content/blog/linux-daily-notes.md
```

推荐 frontmatter：

```md
---
title: "Linux 日常排错记录"
description: "记录一次系统配置和报错处理过程。"
pubDate: 2026-07-01
updatedDate: 2026-07-01
tags:
  - Linux
  - Arch
category: "learning Logs"
draft: false
heroImage: "/images/blog/linux-daily.jpg"
---

## 今天遇到的问题

这里开始写正文。
```

字段说明：

- `title`：文章标题。
- `description`：文章摘要，会显示在首页、列表页、标签页。
- `pubDate`：发布时间，决定文章排序。
- `updatedDate`：更新时间，可选。
- `tags`：标签数组，会生成标签索引。
- `category`：分类名称。
- `draft`：是否草稿，`true` 不会展示在公开列表里。
- `heroImage`：封面图路径，可选。

## 5. 图片应该放在哪里

博客图片建议放在：

```text
public/images/blog/
```

例如你有一张图片：

```text
public/images/blog/arch-install.png
```

在文章 frontmatter 里这样引用：

```md
heroImage: "/images/blog/arch-install.png"
```

在正文里这样插入：

```md
![Arch Linux 安装截图](/images/blog/arch-install.png)
```

注意：

- `public` 目录里的文件会原样出现在网站根路径。
- 不要在路径里写 `public`。
- 如果部署后图片没更新，尽量换一个新文件名，例如从 `cover.png` 改成 `cover-20260701.png`，这样可以绕开浏览器图片缓存。

## 6. 文章列表、归档和标签

当前站点已实现：

- `/blog/`：所有非草稿文章，按 `pubDate` 从新到旧排序。
- `/blog/你的文章-slug/`：文章详情页。
- `/archive/`：按年份归档。
- `/tags/`：所有标签索引。
- `/tags/某个标签/`：指定标签下的文章。
- `/about/`：个人网络空间说明页。

文章 slug 来自文件名。例如：

```text
src/content/blog/github-ssh.md
```

会生成：

```text
/blog/github-ssh/
```

## 7. 签名动画说明

签名动画位于：

```text
src/components/site/Footer.astro
```

文章页底部签名 SVG 位于：

```text
src/layouts/BlogPostLayout.astro
```

当前动画策略：

- 动画版本号：`rainy-signature-v20260702-8`。
- 循环时长：`8000ms`，也就是每 8 秒重复一遍。
- 页面进入时会在 `DOMContentLoaded` 后播放。
- 浏览器从返回缓存恢复页面时，会在 `pageshow` 重新播放。
- 页面切回可见时，会在 `visibilitychange` 重新播放。
- Astro 页面切换完成时，会在 `astro:page-load` 重新播放。
- 优先使用 Web Animations API 创建运行时动画；如果设备不支持，会退回到内联 CSS keyframes。`Signature.astro` 内的12 条真实手写路径会按字母顺序写出 RainyMatinal，每个字母独立一段。

如果以后再次修改动画，建议同时修改这两个地方：

1. `src/components/site/Footer.astro` 里的 `VERSION` 常量。
2. 同文件里的 keyframes 名称，例如 `rainy-signature-letter-write-v20260702-8`。

这样可以强制浏览器把它视为新动画，减少旧动画被缓存继续使用的概率。

## 8. Cloudflare Pages 部署

推荐设置：

- Framework preset：Astro。
- Build command：`npm run build`。
- Build output directory：`dist`。
- Node.js version：使用 Cloudflare 默认较新的 LTS 即可。

项目已添加：

```text
public/_headers
```

构建后会输出到：

```text
dist/_headers
```

其中缓存策略是：

- 所有 HTML 页面：`max-age=0, must-revalidate`，让设备每次访问都重新校验页面。
- `/_astro/*`：长期缓存，因为 Astro 构建产物带哈希文件名，内容变了文件名会变。
- `/images/*`：短缓存并重新校验，避免图片长期不更新。

如果 Cloudflare 上仍然显示旧动画，请按顺序检查：

1. 确认最新提交已经部署成功。
2. 打开 Cloudflare Pages 的最新 deployment，看构建日志是否执行了 `npm run build`。
3. 在浏览器里使用无痕窗口访问网站。
4. 如果仍旧不变，在 Cloudflare 控制台执行一次 Purge cache。
5. 如果图片或动画相关文件沿用了旧文件名，给文件名或动画版本号加日期后缀。

## 9. 本地检查动画是否更新

构建后可以检查生成的 HTML 是否包含新动画版本号：

```bash
npm run build
rg "rainy-signature-v20260702-8|8000" dist
```

如果能在 `dist` 里搜到：

- `rainy-signature-v20260702-8`
- `LOOP_MS = 8000`
- `rainy-signature-letter-write-v20260702-8`

就说明新动画运行时已经进入构建产物。

## 10. 常见问题

### 近期投递不显示

检查文章是否满足这些条件：

- 文件在 `src/content/blog/` 下。
- frontmatter 格式正确。
- `draft: false`。
- `pubDate` 是合法日期。
- `description`、`category`、`tags` 都符合 `src/content.config.ts` 的 schema。

### 图片不显示

优先检查：

- 图片是否真的在 `public/images/blog/`。
- 引用路径是否以 `/images/blog/` 开头。
- 文件扩展名是否一致，例如 `.jpg` 不要写成 `.png`。
- Cloudflare 是否还缓存旧图片。

### 手机端动画不播放

当前代码已经专门处理了手机和其他设备：

- 不依赖外部 CSS 才能播放签名动画。
- 即使系统设置了减少动态效果，签名动画仍会以 8 秒循环运行。
- 页面恢复、重新进入、切回前台都会重新创建动画。

如果某台设备仍然不播放，通常是因为它看到的是旧 HTML。请先清除 Cloudflare 缓存并确认 `dist` 中包含最新版本号。

## 11. 文件顶部注释约定

源码文件顶部都添加了中英双语说明，说明这个文件的作用和使用方法。

例外：

- `package.json` 和 `package-lock.json` 是严格 JSON，添加注释会导致文件无效。
- 图片文件、日志文件、空占位文件不适合写文本注释。
- Markdown 文章必须让 frontmatter 保持在文件最前面，所以说明注释放在 frontmatter 后面。

## 12. 日常维护建议

- 写文章前先复制一篇已有 Markdown 的 frontmatter。
- 图片统一放到 `public/images/blog/`，文件名尽量用英文、数字和短横线。
- 修改动画后同步提升版本号。
- 部署后用手机和无痕窗口各看一次。
- 发现 Cloudflare 上旧内容残留时，先确认构建产物，再清缓存。