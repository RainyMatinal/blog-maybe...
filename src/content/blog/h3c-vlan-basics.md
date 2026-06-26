---
title: "H3C VLAN 基础笔记"
description: "记录 H3C 交换机中 VLAN、Access、Trunk 和端口放行的入门概念。"
pubDate: 2026-06-26
updatedDate: 2026-06-26
tags:
  - H3C
  - VLAN
  - Network Engineering
category: "Network Engineering"
draft: false
heroImage: "/images/archive/h3c-vlan-basics.jpg"
---

## VLAN 是什么

VLAN 可以把同一台交换机上的端口划分到不同的二层广播域中。它常用于隔离办公网、监控网、访客网和业务网。

简单理解：

- 同一个 VLAN 内的设备可以直接二层通信
- 不同 VLAN 之间默认不能二层互通
- 跨 VLAN 通信通常需要三层网关

## Access 端口

Access 端口通常连接终端设备，例如电脑、打印机、摄像头。

```txt
interface GigabitEthernet1/0/1
 port link-type access
 port access vlan 1020
```

这表示端口 `GigabitEthernet1/0/1` 接入 VLAN 1020。

## Trunk 端口

Trunk 端口通常连接交换机、防火墙、路由器或虚拟化宿主机，需要承载多个 VLAN。

```txt
interface GigabitEthernet1/0/24
 port link-type trunk
 port trunk permit vlan 1020 1030
```

这里允许 VLAN 1020 和 VLAN 1030 通过该端口。

## 查看 VLAN

排障时先确认 VLAN 是否存在，再确认端口是否加入正确 VLAN。

```txt
display vlan
display current-configuration interface GigabitEthernet1/0/1
display current-configuration interface GigabitEthernet1/0/24
```

## 排障思路

VLAN 问题不要只盯着单个端口，要沿链路检查：

- 终端接入端口是否是正确 VLAN
- 上联 Trunk 是否放行对应 VLAN
- 网关接口是否存在
- DHCP 是否覆盖该网段
- 交换机之间的链路是否正常

现场排障时，最容易漏掉的是 Trunk 没有放行 VLAN。先画链路，再看配置，会比直接猜命令稳很多。
