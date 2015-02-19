---
layout: article
title: "探测系外行星大气"
modified: 2014-10-17 #2014-08-27T11:57:41-04:00
author: InterImm
toc: true
comments: true
categories: science
summary: 通过分析凌星过程中的光谱的变化，可以得知系外行星是否有大气层，也可以得到大气层的成分，甚至可以分析潜在的类似地球的工业文明。
---






## 行星探测方法

探测系外行星的方法中，凌日/星法是现在用的最多的。[^1]


<figure markdown="1">
<figcaption>
当行星经过恒星和我们之间的时候，恒星的亮度会变化。图片来自 <a href="http://www.novacelestia.com/images/extrasolar_photometric_transit_method.html" target="_blank">Photometric transit method | Detecting Extrasolar Planets @ Nova Celestia</a>.
</figcaption>
![]({{site.url}}/images/exoplanets/extrasolar_photometric_transit_method_medium.jpg)
</figure>


当行星运行到恒星与你们地球之间的时候，远处就会看到恒星亮度的减弱。而且减弱的曲线和时间也跟系外行星自身的大小和轨道的参数有关。


## 探测大气是否存在

如果仅仅需要知道行星是否存在大气，只需要看光谱的变化。

在详细解释之前，补充两点背景知识：

1. 化学分子对不同波长的吸收

	<figure markdown="1">
	<figcaption>
	Burrows 2014
	</figcaption>
	![]({{site.url}}/images/exoplanets/atmosphereAtomMolecular.png)
	</figure>


	对于不同的波长，不同的化学分子有不同的散射界面。散射界面越小，就显得越透明。

	> 图中有一个有趣的例子是二氧化碳。二氧化碳的散射界面在波长比较长的时候变得很大，可以将这些波长“囚禁”起来，而这些波长正好是产生热效应的波长，所以二氧化碳是一种温室气体。

2. 大气层的密度随着高度变化

	<figure markdown="1">
	<figcaption>
	<a href="http://space-art.co.uk" target="_blank">Mark A. Garlick</a>
	</figcaption>
	![]({{site.url}}/images/exoplanets/hd209458b-puffed-atmosphere.jpg)
	</figure>


	大气层的密度越往高处就越小，这是一个渐变的过程。大气密度越大，就越不透明。



结合这两点，一种可以分辨有没有大气层的方法是，观测不同波长下的行星的大小（或者直接跟观测挂钩的话，看不同波长下上面提到的 transit 曲线，也就是行星挡住的恒星的光的多少）。

例如有颗系外行星上面只有二氧化碳，当利用凌日/星法测量行星的大小的时候，会发现不同波长的测量给出不同的结果。如果地球人用 15 微米和10 微米的波长分别测一次行星的大小，会发现 15 微米波长下测量的行星的半径要大些，因为这次测量中，大气对 15 微米来说更加不透明，而大气越往底部密度越大，也就是更加不透明，所以 15 微米测量中，上层的大气也能挡住恒星的光芒。而 10 微米测量中，需要更加“厚重”的大气才能挡住恒星的光芒，也就是光可以透过更深层的大气，对应于地球人的观测，就是会看到更小的行星。

所以通过看不同波长的行星的大小，就可以知道行星有没有大气了。



## 大气层的成分

现在用的方法是分析光谱。光谱有多种，例如透射光谱（有个背景光源，光线透过被观测的物体形成的光谱），发射光谱（被观测物体本身的热辐射或者其他能级跃迁造成的辐射）等等。



<figure markdown="1">
<figcaption>
<a href="http://seagerexoplanets.mit.edu/research.htm" target="_blank">S. Seager</a>
</figcaption>
![]({{site.url}}/images/exoplanets/transit-seager.png)
</figure>


当行星运行到地球和恒星之间的时候，地球人可以看到行星大气的透射光谱+恒星的光谱，而当行星运行到快要进入恒星背面的时候，地球人可以看到行星大气的发射光谱+恒星的光谱，当行星再继续，完全被恒星挡住，只能看到恒星的光谱。这样前面两组光谱减去第三组，如此就可以分辨行星的透射光谱和发射光谱。

有了光谱，就可以通过已知的不同分子对光谱的吸收来分析行星大气的成分。

还是用前面那张图：

<figure markdown="1">
<figcaption>
Burrows 2014
</figcaption>
![]({{site.url}}/images/exoplanets/atmosphereAtomMolecular.png)
</figure>

因为光在大气中运行的时候，会遇到很多事情，

1. 分子原子的电子跃迁会产生不同的谱线；
2. 分子的转动-振动谱线；
3. 散射，包括瑞利散射（散射粒子远小于光波长）和米散射（散射粒子大于光波长）。

这样总有些特征性的谱线，例如能级跃迁的谱线，这些是特征性的。然后拿观测到的谱线跟已知的上面这张图对照，就可以发现什么。

> 当然，真正的数据处理是很复杂的，需要考虑具体的 radiation transfer，然后考虑污染问题等等。而且获取的光谱数据本来就不干净，数据处理就更难了。

> 另外需要提到的是，光谱的方法不仅仅限于凌日/星法，其他的方法也行，只要拿到光谱就行。


## 水及其他

一个比较有趣的话题是，系外行星上有没有水（或水蒸气）。


<figure markdown="1">
<figcaption>
绿线是水蒸气的吸收谱。<a href="http://en.wikipedia.org/wiki/Electromagnetic_absorption_by_water" target="_blank">wikipedia</a>
</figcaption>
![]({{site.url}}/images/exoplanets/water_vapor_spectrum.gif)
</figure>


在 2007 年的一篇 Nature 文章中 [^3]，他们用了 0.9~1 微米的吸收谱。

总之，可以通过看谱线来分析是否含有水分子。甚至可以分析云层、雾气、冰霜等等。


另外，通过看一些特定的分子的丰度，例如四氟化碳，CCl3F，CFC 类等等，可以外星分析类似地球上工业文明的可能性。[^2]






[^1]: 更多的更详细的介绍请参考星际移民中心的<a href="http://exoplanets.readthedocs.org/" target="_blank">《系外行星文档》</a>。
[^2]: Detecting industrial pollution in the atmospheres of earth\-like exoplanets: <a href="http://arxiv.org/abs/1406.3025" target="_blank">arXiv:1406.3025 [astro-ph.EP]</a>.
[^3]: 论文的 arXiv 链接：<a href="http://arxiv.org/abs/0707.3064" target="_blank">arXiv:0707.3064 [astro-ph]</a>


