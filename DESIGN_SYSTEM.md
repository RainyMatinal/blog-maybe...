# DESIGN_SYSTEM.md

# 个人博客视觉系统

## 主题：千禧年网络档案馆 + 技术工程笔记

本博客不是普通黑白极简程序员博客，也不是商业 SaaS 风格作品集。
它应该像一个从 2003 年互联网深处打捞出来的个人技术档案馆：有半透明玻璃、蓝绿色渐变、旧系统窗口、网络拓扑图、终端日志、学习笔记、旧互联网随笔，以及一点 Frutiger Aero 式的清澈空气感。

关键词：

* 千禧年互联网
* Frutiger Aero
* 个人技术档案馆
* Arch Linux 工作台
* 网络工程笔记
* Git / C / 前端学习日志
* 自考与考研记录
* 旧网页、旧系统、旧浏览器、旧论坛
* 清澈、潮湿、发光、半透明、可探索

---

# 1. 网站核心气质

## 核心定位

这是一个「正在成长中的技术学习者」的个人网络档案馆。

它不是炫技站，也不是简历站。
它更像：

* 一台正在运行 Arch Linux 的旧笔记本
* 一个 2000s 风格的个人主页
* 一个工程师的网络拓扑记录柜
* 一个自考 / 考研 / 技术转型者的长期日志
* 一个混合了旧互联网怀旧与现代前端技术的私人空间

## 情绪基调

整体气质应该是：

* 清澈的，而不是沉闷的
* 技术化的，而不是企业化的
* 怀旧的，而不是复古 cosplay
* 有工程感的，而不是纯视觉装饰
* 有个人痕迹的，而不是模板感
* 像一个会不断积累内容的“个人知识基地”

## 视觉隐喻

网站可以借用这些意象：

* 旧版浏览器窗口
* 半透明玻璃面板
* 蓝天、水泡、草地、网格
* 终端窗口
* 网络交换机状态灯
* 文件夹、档案卡片、日志条目
* 旧论坛帖子
* 早期博客 sidebar
* Windows XP / Vista / KDE / GNOME 早期界面气质
* 光纤、链路、拓扑图、数据包

---

# 2. 色彩系统

## 主色调

整体色彩不使用纯黑白极简，而使用「蓝绿玻璃感 + 旧互联网银灰 + 技术终端深色」的组合。

### 主色

```css
:root {
  --color-aero-blue: #5ec8ff;
  --color-aero-cyan: #6fffe9;
  --color-glass-green: #9fffd8;
  --color-system-blue: #2f80ed;
  --color-archive-navy: #10243e;
}
```

用途：

* `--color-aero-blue`：链接、按钮、高亮边框
* `--color-aero-cyan`：标签、hover 状态、装饰光晕
* `--color-glass-green`：成功状态、网络连接状态、学习进度
* `--color-system-blue`：主要 CTA、当前导航项
* `--color-archive-navy`：深色背景、页脚、代码区背景

---

## 辅助色

```css
:root {
  --color-xp-grass: #7ed957;
  --color-vista-silver: #d7e3ec;
  --color-old-link: #2454ff;
  --color-warning-amber: #ffcc66;
  --color-error-red: #ff6b6b;
}
```

用途：

* `--color-xp-grass`：Frutiger Aero 草地感点缀
* `--color-vista-silver`：卡片边框、窗口顶部栏
* `--color-old-link`：正文链接，可带旧网页风格
* `--color-warning-amber`：警告提示、学习坑点
* `--color-error-red`：错误日志、踩坑记录

---

## 背景色

```css
:root {
  --bg-page: #eaf8ff;
  --bg-page-deep: #d7f1ff;
  --bg-glass: rgba(255, 255, 255, 0.58);
  --bg-glass-strong: rgba(255, 255, 255, 0.78);
  --bg-terminal: #0b1726;
  --bg-code: #101d2e;
}
```

背景应该有层次，而不是单纯白色。

推荐背景组合：

```css
body {
  background:
    radial-gradient(circle at 20% 10%, rgba(111, 255, 233, 0.45), transparent 28%),
    radial-gradient(circle at 80% 0%, rgba(94, 200, 255, 0.35), transparent 32%),
    linear-gradient(180deg, #eaf8ff 0%, #d7f1ff 48%, #f8fcff 100%);
}
```

---

## 文本色

```css
:root {
  --text-main: #102033;
  --text-muted: #5d7188;
  --text-soft: #7d90a3;
  --text-invert: #f5fbff;
}
```

正文不使用纯黑 `#000`，应使用带蓝调的深色。
这样可以让网站更像系统界面，而不是普通文档页。

---

## 边框与阴影

```css
:root {
  --border-glass: rgba(255, 255, 255, 0.75);
  --border-blue: rgba(94, 200, 255, 0.65);
  --shadow-glass: 0 12px 32px rgba(31, 102, 148, 0.18);
  --shadow-window: 0 18px 40px rgba(16, 36, 62, 0.22);
}
```

卡片和窗口应有轻微立体感，像早期系统窗口，而不是完全扁平化。

---

# 3. 字体建议

## 字体原则

字体系统应体现两种气质：

1. 正文要清晰、适合长期阅读
2. 技术区域要有终端感、工程感、日志感

## 推荐字体栈

### 中文正文

```css
--font-sans: "Noto Sans SC", "Source Han Sans SC", "Microsoft YaHei", sans-serif;
```

特点：

* 清晰
* 稳定
* 适合技术文章和长文

### 中文标题

```css
--font-title: "LXGW WenKai", "Noto Serif SC", "Source Han Serif SC", serif;
```

标题可以略带文学感，适合旧互联网随笔、千禧年审美文章。

如果觉得文艺感过强，也可以让标题继续使用无衬线字体，但增加字距和重量。

### 英文 / 代码 / 终端

```css
--font-mono: "JetBrains Mono", "IBM Plex Mono", "Cascadia Code", monospace;
```

用途：

* 代码块
* Git 命令
* Linux 终端
* 网络设备配置
* 文章元信息
* 标签
* 归档页时间轴

---

## 字体使用规则

```css
body {
  font-family: var(--font-sans);
}

h1, h2, h3 {
  font-family: var(--font-title);
}

code, pre, kbd, .terminal, .log-line {
  font-family: var(--font-mono);
}
```

标题可以带一点旧网页味道：

```css
h1 {
  letter-spacing: -0.02em;
  text-shadow: 0 1px 0 rgba(255,255,255,0.8);
}
```

---

# 4. 首页布局

## 首页目标

首页不是简单文章列表，而应该像一个「个人网络档案馆入口」。

用户进入首页后，应立刻感受到：

* 这是一个有世界观的个人博客
* 站主正在学习 Linux、Git、C、前端、网络工程
* 这里也记录个人考试、自我训练、旧互联网审美
* 网站不是模板，而是一个长期运行中的个人系统

---

## 首页结构

推荐首页从上到下分为：

1. Hero 档案馆入口
2. 当前状态面板
3. 文章分类导航
4. 最新笔记
5. 技术地图
6. 千禧年随笔入口
7. 页脚档案信息

---

## Hero 区域

Hero 不要使用普通大标题 + 按钮。
应该像一个旧系统欢迎窗口。

示例结构：

```txt
┌──────────────────────────────────────┐
│  RainyMatinal Network Archive         │
│  Personal Technical Log / Since 2026  │
├──────────────────────────────────────┤
│  Arch Linux / Git / C / Frontend      │
│  Network Engineering / Exam Notes     │
│  Frutiger Aero / Old Internet Essays  │
└──────────────────────────────────────┘
```

Hero 文案建议：

```txt
欢迎来到我的个人网络档案馆。
这里记录 Arch Linux、Git、C语言、前端、网络工程、自考考研，以及那些来自千禧年互联网的清澈回声。
```

Hero 视觉：

* 半透明玻璃窗口
* 顶部有类似旧系统窗口的 title bar
* 左上角有三个小圆点或状态灯
* 背景可以有蓝绿色渐变、水泡、网格线
* 可加入轻微扫描线或光晕

---

## 当前状态面板

首页应有一个「当前系统状态」区域，像 dashboard。

示例：

```txt
SYSTEM STATUS

OS: Arch Linux
Editor: VS Code
Learning: C / Astro / Git
Network: VLAN / STP / DHCP / H3C
Exam: 自考本科 / 考研准备
Mood: Frutiger Aero, 2000s Web
```

设计方式：

* 使用小型信息卡片
* 每项前面可有状态灯
* 绿色表示 active
* 蓝色表示 learning
* 黄色表示 pending
* 红色表示 bug / issue

---

## 分类导航

分类导航不要只是文字链接。
应设计成「档案柜卡片」。

每个分类是一张玻璃卡片：

```txt
[ ARCH LOGS ]
Linux 安装、桌面环境、输入法、开发环境、排障记录

[ GIT FIELD NOTES ]
GitHub、SSH、远程仓库、提交记录、错误排查

[ C & FRONTEND LAB ]
C语言、Astro、HTML、CSS、JavaScript、组件实验

[ NETWORK ENGINEERING ]
VLAN、STP、DHCP、H3C、交换机、防火墙、现场排障

[ EXAM ROADMAP ]
自考、考研、政治、数学、专业课、长期学习计划

[ AERO ESSAYS ]
千禧年审美、Frutiger Aero、旧互联网、随笔
```

---

## 最新文章区

最新文章不要做成普通列表，建议做成「日志流」。

每篇文章显示：

* 日期
* 分类
* 标题
* 摘要
* 标签
* 阅读时间
* 状态：draft / published / updated

示例：

```txt
2026-06-26  [ARCH LOG]
Niri 桌面下配置中文输入法
Tags: Arch, Niri, Fcitx5
Status: updated
```

---

## 技术地图区

可以在首页加入「学习地图」：

```txt
Arch Linux
  ├── 安装
  ├── 桌面环境
  ├── 输入法
  ├── 网络连接
  └── 开发环境

Network Engineering
  ├── VLAN
  ├── Trunk / Access
  ├── STP / MSTP
  ├── DHCP
  └── H3C CLI
```

视觉上可以像目录树、网络拓扑图或 old-school 文件树。

---

# 5. 博客文章页布局

## 文章页目标

文章页应该像一份技术档案，而不是普通 Markdown 页面。

它需要同时适合：

* Linux 命令记录
* Git 报错排查
* C语言学习笔记
* 网络工程配置
* 自考考研学习总结
* 千禧年审美随笔

---

## 页面结构

推荐结构：

```txt
┌──────────────────────────────┐
│  Article Header               │
│  标题 / 分类 / 日期 / 标签      │
├──────────────────────────────┤
│  Main Content                 │
│  正文内容                      │
├──────────────────────────────┤
│  Side Panel                   │
│  目录 / 状态 / 相关链接         │
└──────────────────────────────┘
```

桌面端：

* 左侧主内容
* 右侧固定目录 TOC
* 文章宽度控制在 720px - 820px
* 外层可以有玻璃面板

移动端：

* TOC 收起到文章顶部
* 卡片阴影减弱
* 动效减少
* 内容优先

---

## 文章头部

文章头部应像档案记录卡。

包含：

```txt
Title: Niri 桌面下配置中文输入法
Category: Arch Linux
Date: 2026-06-26
Status: Updated
Tags: Arch / Niri / Fcitx5 / Input Method
```

视觉建议：

* 使用等宽字体显示元信息
* 分类标签使用蓝绿色胶囊按钮
* 日期使用旧系统时间戳风格
* 状态使用小圆灯

---

## 正文排版

正文要求：

```css
.article-content {
  line-height: 1.85;
  font-size: 1rem;
  color: var(--text-main);
}
```

段落不要太密。
每个大段之间保持呼吸感。

标题层级：

```txt
# 文章标题
## 主要章节
### 操作步骤 / 原理解释
#### 补充说明
```

标题可以带编号或小图标，但不要过度 emoji 化。

---

## 代码块

代码块是网站的重要视觉资产。

代码块应设计成终端窗口，而不是普通灰底块。

```txt
┌─ terminal ─────────────────────
│ $ git status
│ $ git add .
│ $ git commit -m "update blog"
└────────────────────────────────
```

CSS 建议：

```css
pre {
  background: linear-gradient(180deg, #101d2e 0%, #0b1726 100%);
  color: #eaf8ff;
  border: 1px solid rgba(94, 200, 255, 0.35);
  border-radius: 16px;
  box-shadow: var(--shadow-window);
}
```

代码块顶部可以有：

* 文件名
* 语言
* 复制按钮
* 终端状态灯

---

## 网络工程配置块

网络设备配置可以使用专门样式：

```txt
[H3C CONFIG]
interface GigabitEthernet1/0/1
 port link-type trunk
 port trunk permit vlan 1020
 dhcp snooping trust
```

推荐加特殊 class：

```html
<pre class="config-block h3c-config">
```

视觉上比普通代码块更像设备 CLI：

* 深蓝背景
* 青色命令
* 灰色注释
* 绿色成功提示
* 黄色警告提示

---

## 提示块

文章页需要多种提示块。

### Note

用于普通补充。

```txt
NOTE
这里记录一个容易忽略的小点。
```

### Warning

用于风险提醒。

```txt
WARNING
不要直接删除系统配置文件，先备份。
```

### Bug

用于错误记录。

```txt
BUG LOG
git push 仍然要求用户名密码，通常说明 remote 仍然是 HTTPS。
```

### Fix

用于解决方案。

```txt
FIX
将远程仓库地址改为 SSH：
git remote set-url origin git@github.com:username/repo.git
```

### Memory

用于个人反思。

```txt
MEMORY
这次排障让我意识到，网络问题不能只看配置，还要确认链路、VLAN、网关和 DHCP。
```

---

# 6. 组件风格

## 整体组件原则

组件应该像「旧系统窗口 + 现代可读性」的结合。

不要做成纯 Tailwind 默认卡片。
每个组件都应该有轻微的系统感、档案感、工程感。

---

## Window Card

主要卡片组件。

用途：

* 首页 Hero
* 分类卡片
* 文章卡片
* 个人状态面板
* 项目介绍

结构：

```txt
┌──────────────────────────────┐
│ ● ● ●  Archive Window         │
├──────────────────────────────┤
│ 内容区域                       │
└──────────────────────────────┘
```

视觉：

```css
.window-card {
  background: var(--bg-glass);
  backdrop-filter: blur(18px);
  border: 1px solid var(--border-glass);
  border-radius: 22px;
  box-shadow: var(--shadow-glass);
}
```

---

## Status Light

状态灯组件。

用途：

* 学习状态
* 文章状态
* 项目状态
* 网络状态

状态：

```txt
green  = active / online / done
blue   = learning / writing
yellow = pending / unstable / todo
red    = bug / failed / warning
gray   = archived
```

---

## Tag

标签组件。

标签不要纯灰色，应使用半透明蓝绿色。

```css
.tag {
  background: rgba(111, 255, 233, 0.22);
  border: 1px solid rgba(94, 200, 255, 0.45);
  color: #14506b;
  border-radius: 999px;
  font-family: var(--font-mono);
}
```

---

## Article Card

文章卡片应包含：

* 分类
* 标题
* 日期
* 摘要
* 标签
* 状态

风格像档案索引卡，而不是新闻卡片。

示例：

```txt
[ARCH LOG] 2026-06-26
Niri 桌面下配置中文输入法
记录 Arch + Niri 环境中 Fcitx5 的安装、环境变量与启动方式。
#Arch #Niri #Fcitx5
```

---

## Terminal Block

终端块用于命令记录。

顶部栏：

```txt
terminal — bash — arch
```

内容：

```bash
sudo pacman -Syu
sudo pacman -S fcitx5 fcitx5-rime
```

视觉关键词：

* 深蓝
* 青色光
* 圆角
* 轻微内阴影
* 复制按钮

---

## File Tree

文件树组件用于 Astro 项目结构。

示例：

```txt
src/
├── components/
│   ├── WindowCard.astro
│   ├── ArticleCard.astro
│   └── TerminalBlock.astro
├── layouts/
│   └── BlogLayout.astro
└── pages/
    └── index.astro
```

风格：

* 等宽字体
* 轻微背景
* 左侧细线
* 当前文件高亮

---

## Network Topology Card

网络工程文章可使用拓扑卡片。

示例：

```txt
PC
 │
Access Switch
 │ trunk vlan 1020
Core Switch
 │
Gateway / DHCP
```

风格：

* 蓝绿色线条
* 节点像设备标签
* 可用 ASCII 图，也可后期做 SVG 组件

---

# 7. 文章分类

文章分类应稳定，不要太碎。
建议使用 6 个一级分类。

---

## 01. Arch Logs

用于记录 Arch Linux 相关内容。

包含：

* Arch 安装
* Niri / Hyprland
* 中文输入法
* Wi-Fi / NetworkManager
* pacman / yay
* VS Code / GCC
* Clash Verge
* Linux 日常排障

Slug:

```txt
arch-logs
```

视觉标签：

```txt
ARCH LOG
```

代表色：

```css
--cat-arch: #5ec8ff;
```

---

## 02. Git Field Notes

用于记录 Git / GitHub。

包含：

* git clone
* git push
* SSH key
* remote 配置
* GitHub 连接问题
* 代理配置
* 分支、提交、回滚
* README 与远程仓库冲突

Slug:

```txt
git-field-notes
```

视觉标签：

```txt
GIT FIELD NOTES
```

代表色：

```css
--cat-git: #6fffe9;
```

---

## 03. C & Frontend Lab

用于记录 C语言和前端学习。

包含：

* C语言基础
* gcc 编译
* VS Code 配置
* HTML / CSS / JavaScript
* Astro
* 组件开发
* 博客搭建
* Cloudflare Pages 部署记录

Slug:

```txt
c-frontend-lab
```

视觉标签：

```txt
C / FRONTEND LAB
```

代表色：

```css
--cat-code: #9fffd8;
```

---

## 04. Network Engineering

用于网络工程与现场排障。

包含：

* VLAN
* Access / Trunk
* DHCP
* STP / MSTP
* VRRP
* H3C 配置
* 交换机排障
* 防火墙 / WAF / 审计设备
* 网络拓扑
* 真实现场问题复盘

Slug:

```txt
network-engineering
```

视觉标签：

```txt
NETWORK ENGINEERING
```

代表色：

```css
--cat-network: #2f80ed;
```

---

## 05. Exam Roadmap

用于自考、考研、长期学习记录。

包含：

* 自考本科
* 考研政治
* 考研数学
* 计算机专业课
* 学习计划
* 复盘
* 院校信息
* 阶段目标

Slug:

```txt
exam-roadmap
```

视觉标签：

```txt
EXAM ROADMAP
```

代表色：

```css
--cat-exam: #ffcc66;
```

---

## 06. Aero Archive

用于千禧年审美、Frutiger Aero、旧互联网随笔。

包含：

* Frutiger Aero
* 千禧年互联网
* Windows XP / Vista 记忆
* 旧网页设计
* 互联网怀旧
* 文学随笔
* 个人审美系统
* 技术之外的观察

Slug:

```txt
aero-archive
```

视觉标签：

```txt
AERO ARCHIVE
```

代表色：

```css
--cat-aero: #7ed957;
```

---

# 8. 动效原则

## 总原则

动效应该像旧系统界面和水面反光，而不是现代商业网站的强动效。

关键词：

* 轻
* 慢
* 清澈
* 有反馈
* 不打扰阅读
* 不影响性能
* 适合部署在 Cloudflare Pages 的静态博客

---

## 可以使用的动效

### 玻璃卡片 Hover

卡片 hover 时：

* 轻微上浮
* 边框变亮
* 背景透明度增加
* 阴影增强

```css
.card:hover {
  transform: translateY(-3px);
  border-color: rgba(94, 200, 255, 0.8);
  box-shadow: 0 18px 42px rgba(31, 102, 148, 0.24);
}
```

---

### 状态灯闪烁

状态灯可以有非常轻微的呼吸动画。

```css
.status-light.active {
  animation: pulse 2.6s ease-in-out infinite;
}
```

不要快速闪烁，避免廉价感。

---

### 链接 Hover

链接 hover 时可以像旧网页一样出现下划线，但颜色更清澈。

```css
a:hover {
  color: var(--color-aero-blue);
  text-shadow: 0 0 8px rgba(94, 200, 255, 0.45);
}
```

---

### 页面进入

页面进入时只做轻微淡入和上移。

```css
.page {
  animation: pageIn 420ms ease-out;
}
```

不要做大幅度飞入、旋转、弹跳。

---

### 背景水泡 / 光点

可以有极慢的背景漂浮动效，但必须：

* 不抢正文注意力
* 不影响滚动性能
* 移动端可以关闭
* 尊重 `prefers-reduced-motion`

---

## 动效限制

必须支持：

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

移动端减少：

* 背景动画
* 模糊强度
* 大面积阴影
* 固定定位装饰

---

# 9. 禁止出现的设计

## 禁止普通黑白极简

不要做成：

* 白底黑字
* 纯 Markdown 文档站
* 默认技术博客模板
* 没有情绪的程序员博客
* 只有文章列表和标签

本博客必须有视觉世界观。

---

## 禁止过度商业 SaaS 风

不要出现：

* 大面积紫蓝渐变
* 夸张毛玻璃 landing page
* “Build faster / Ship better” 式宣传语言
* 过度圆润的创业公司按钮
* 无意义的 3D 插画
* AI 产品官网风格

---

## 禁止纯赛博朋克

虽然是技术博客，但不要变成：

* 霓虹紫
* 黑红高对比
* 黑客帝国绿字雨
* 过度故障风
* 赛博朋克街头风

本博客不是黑客组织官网，而是清澈的个人网络档案馆。

---

## 禁止复古过头

不要把网站做成完全不可读的 90 年代网页。

避免：

* 彩虹分割线滥用
* 大量 GIF 闪图
* 鼠标尾迹
* 自动播放音乐
* 过小字号
* 低对比度正文
* 过度像素字体

怀旧是气质，不是牺牲可用性。

---

## 禁止模板感

不要使用一眼能看出是默认模板的设计：

* 默认 Astro blog 样式
* 默认 Tailwind 卡片
* 默认 shadcn 风格
* 默认 Notion 风格
* 默认 GitHub README 风格

每个核心组件都应经过个人化处理。

---

# 10. 实现方向

## 技术原则

由于网站部署在 Cloudflare Pages，整体应保持：

* 静态优先
* 图片压缩
* CSS 变量驱动主题
* 少用大型 JS 动效库
* 优先使用 Astro 组件
* 内容使用 Markdown / MDX 管理
* 代码高亮和目录生成为主
* 动效使用 CSS 完成

---

## 推荐 Astro 组件

```txt
src/components/
├── WindowCard.astro
├── ArticleCard.astro
├── TerminalBlock.astro
├── StatusLight.astro
├── TagList.astro
├── FileTree.astro
├── NetworkTopology.astro
├── Callout.astro
├── ArchiveHeader.astro
└── CategoryGrid.astro
```

---

## 推荐布局文件

```txt
src/layouts/
├── BaseLayout.astro
├── HomeLayout.astro
├── BlogLayout.astro
└── ArchiveLayout.astro
```

---

## 推荐内容结构

```txt
src/content/blog/
├── arch-logs/
├── git-field-notes/
├── c-frontend-lab/
├── network-engineering/
├── exam-roadmap/
└── aero-archive/
```

---

## 推荐首页语句

```txt
RainyMatinal Network Archive

一座运行在 Cloudflare Pages 上的个人网络档案馆。
记录 Arch Linux、Git、C语言、前端、网络工程、自考考研，以及千禧年互联网残留下来的蓝绿色回声。
```

---

## 推荐 Slogan

```txt
Learning in public, archived like the old web.
```

中文版本：

```txt
公开学习，像旧互联网一样归档。
```

或者：

```txt
在蓝绿色的旧互联网回声里，记录我的技术成长。
```

---

## 最终设计判断标准

当别人打开这个网站时，应该产生这样的感觉：

```txt
这不是一个普通程序员博客。
这是一个正在学习 Linux、网络工程和前端的人，
把自己的技术成长、考试路线、旧互联网审美，
全部封存在一个千禧年风格的网络档案馆里。
```

如果一个页面看起来像：

* Notion
* GitHub README
* 默认 Astro 模板
* 黑白极简博客
* SaaS 官网
* AI 工具落地页

那就说明设计方向偏了。

真正的方向应该是：

```txt
旧浏览器窗口
+ 半透明玻璃
+ 蓝绿色网络光
+ 终端日志
+ 工程档案
+ Frutiger Aero
+ 个人长期学习记录
```

这个网站应该像一个属于你自己的、长期在线的技术房间。
