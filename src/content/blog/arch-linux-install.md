---
title: "Arch Linux 安装记录"
description: "记录一次从启动盘、联网、分区到安装基础系统的 Arch Linux 安装流程。"
pubDate: 2026-06-26
updatedDate: 2026-06-26
tags:
  - Arch Linux
  - Installation
  - Pacman
category: "Arch Logs"
draft: false
heroImage: "/images/archive/arch-linux-install.jpg"
---

## 安装前准备

这篇笔记用来保存一次 Arch Linux 的基础安装过程。重点不是追求一步到位，而是把每个关键节点记录清楚，方便以后回看。

准备工作包括：

- 下载 Arch Linux ISO
- 制作启动盘
- 确认 BIOS / UEFI 启动方式
- 准备稳定网络
- 备份原有磁盘数据

## 联网与时间同步

进入 live 环境后，先确认网络连接和系统时间。

```bash
ping archlinux.org
timedatectl set-ntp true
timedatectl status
```

如果是无线网络，可以使用 `iwctl` 连接 Wi-Fi。现场安装时，网络稳定比速度更重要。

## 分区与挂载

分区方案会根据机器用途变化。个人学习机可以从简单结构开始：

```txt
/dev/nvme0n1p1  EFI System
/dev/nvme0n1p2  Linux filesystem
```

格式化并挂载：

```bash
mkfs.fat -F 32 /dev/nvme0n1p1
mkfs.ext4 /dev/nvme0n1p2

mount /dev/nvme0n1p2 /mnt
mkdir -p /mnt/boot
mount /dev/nvme0n1p1 /mnt/boot
```

## 安装基础系统

```bash
pacstrap -K /mnt base linux linux-firmware vim networkmanager
genfstab -U /mnt >> /mnt/etc/fstab
arch-chroot /mnt
```

进入新系统后继续设置时区、locale、主机名、用户和引导器。每次安装都应该保留命令记录，这样排障时不会只剩下模糊记忆。

## 小结

Arch 安装不是一次性的仪式，更像是在建立一台可以长期学习和实验的工作台。先把基础系统跑起来，再逐步补桌面环境、输入法、开发工具和日常软件。
