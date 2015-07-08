---
published: false
layout: article
title: 行星际通信相关问题
date: 2015-07-08
modified: 2015-07-08
author: OctoMiao
toc: true
tags: 
  - Mars
  - Communication
comments: true
categories: science
summary: 地球和火星相距遥远，电磁波信号的传输存在很多问题。
---


地球和火星之间相距遥远，最近几年来看，基本上平均最近的时候在 0.5AU，电磁波信号大约延时 250s，最远平均在 2.5AU，电磁波信号大约延时 20 分钟多一点。当然这不是火星和地球相距最近最远。由于火星的轨道的偏心率比较大，最近可以达到 0.37AU，最远可以达到 2.68AU. [^1]


<figure markdown="1">
<figcaption>
地球和火星之间的距离变化。来自 WolframAlpha。
</figcaption>
![]({{site.url}}/images/posts/intercom/mars-earth.jpg)
</figure>

所以这样遥远的距离，网站等互联网应用就会出现新的问题：

1. 中继卫星设计：中继卫星除了要满足足够好的中继效果，例如提供完全无终端的中继，还要设计成尽量小的延时。
2. 网络协议：现在使用的网络协议并不在适用，新的协议例如 DTN 协议更加合适。
3. 网站设计：由于延时的存在，如何才能最大程度提高地球火星的用户体验。





## 参考


[^1]: 1AU = 499 光秒，1AU = 1.5*10^8 km
