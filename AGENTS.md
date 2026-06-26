# AGENTS.md

## Project Overview

This is a personal Astro blog website.

The site should not look like a generic developer portfolio or a plain black-and-white programmer blog.

The visual identity is defined in `DESIGN_SYSTEM.md`.

Before making visual, layout, or component changes, read `DESIGN_SYSTEM.md`.

## Core Style

The blog should feel like:

- 千禧年网络档案馆
- Frutiger Aero 风格
- 技术工程笔记
- Linux / Git / 网络工程 / 编程学习档案
- 个人成长记录空间

The site should feel personal, memorable, and carefully designed.

## Tech Stack

Use:

- Astro
- TypeScript when needed
- Markdown / MDX for posts
- Plain CSS
- Static-first architecture

Avoid:

- Unnecessary backend code
- Heavy JavaScript
- Unnecessary dependencies
- Generic UI libraries unless explicitly requested
- Tailwind CSS unless explicitly requested

## Project Structure

Use this structure:

```txt
src/
  content/
    blog/
    notes/
  components/
    site/
    blog/
    visual/
    home/
  layouts/
  pages/
  styles/
  lib/
  Pages

The site should eventually include:

/ 首页
/blog 博客列表
/blog/[slug] 文章详情页
/archive 归档页
/tags 标签页
/tags/[tag] 标签文章页
/about 关于页
/lab 实验室 / 折腾记录页
Content Topics

Main topics:

Arch Linux
Git / GitHub
C language
Frontend learning
Astro
Network engineering
H3C / VLAN / STP / DHCP
Self-study / exams
Millennium internet aesthetics
Personal essays
Design Rules

Follow DESIGN_SYSTEM.md.

Prefer:

Blue / cyan / aqua / mint / silver tones
Glass panels
Soft gradients
Rounded cards
Terminal-style blocks
Archive-style lists
Subtle network-grid background
Old internet / desktop UI details

Avoid:

Generic black-and-white minimalism
Corporate SaaS landing page style
Random neon cyberpunk
Overly complex animations
Bland template feeling
Typography Rules

Chinese content must be comfortable to read.

Use:

Larger line-height for Chinese paragraphs
Clear heading hierarchy
Good spacing between sections
Monospace font for code and terminal-style components

Do not make article pages too narrow or too crowded.

Coding Rules
Keep components small and reusable.
Use semantic HTML.
Keep CSS organized.
Put design tokens in src/styles/tokens.css.
Put global styles in src/styles/global.css.
Do not remove existing content unless explicitly asked.
Do not introduce unnecessary dependencies.
Make pages responsive.
Prefer simple, maintainable code.
Validation

After code changes, run:

npm run build

If the project has a check script, also run:

npm run check

If a command fails, explain the error and fix it when possible.

Final Response Rule

After finishing a task, summarize:

Changed files
What was changed
Whether npm run build passed
Any next recommended step