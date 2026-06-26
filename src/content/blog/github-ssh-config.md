---
title: "GitHub SSH 配置笔记"
description: "整理 GitHub SSH key 生成、添加、测试与 remote 切换的基础流程。"
pubDate: 2026-06-26
updatedDate: 2026-06-26
tags:
  - Git
  - GitHub
  - SSH
category: "Git Field Notes"
draft: false
heroImage: "/images/archive/github-ssh-config.jpg"
---

## 为什么使用 SSH

使用 SSH 连接 GitHub 后，日常 `git push` 和 `git pull` 不需要反复输入用户名与密码，也更适合长期维护个人仓库。

## 生成 SSH Key

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

一路确认后，会在用户目录下生成公钥和私钥。公钥通常是：

```txt
~/.ssh/id_ed25519.pub
```

私钥不要上传、不要发给别人、不要贴到网页里。

## 添加到 GitHub

打开 GitHub 的 SSH keys 设置页，新建 key，把 `.pub` 文件里的内容粘贴进去。

可以先查看公钥内容：

```bash
cat ~/.ssh/id_ed25519.pub
```

## 测试连接

```bash
ssh -T git@github.com
```

如果看到 GitHub 返回的认证成功提示，就说明 SSH key 已经生效。

## 修改仓库 remote

如果原来使用 HTTPS 地址，可以切换为 SSH：

```bash
git remote -v
git remote set-url origin git@github.com:username/repository.git
git remote -v
```

## 排障记录

常见问题包括：

- remote 仍然是 HTTPS
- SSH key 没有添加到 GitHub
- 本机 ssh-agent 没有加载 key
- 当前网络环境拦截了 SSH 连接

遇到问题时先看 `git remote -v`，再测试 `ssh -T git@github.com`，不要一上来就反复重装 Git。
