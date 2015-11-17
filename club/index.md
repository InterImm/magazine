---
layout: archive
title: 星际圆桌
---


[星际圆桌](https://github.com/InterImm/roundTable)是一个关于星际移民的小组讨论。讨论的记录都在 [InterImm/roundTable](https://github.com/InterImm/roundTable) 这个项目中。

这里是圆桌讨论一些成熟内容的记录。


{% if site.categories.club.size %}
共有 {{ site.categories.club.size }} 篇科学类文章
		{% else %}
暂无文章
		{% endif %}

<div class="tiles">
{% for post in site.categories.club %}
	{% include post-list-cn.html %}
{% endfor %}
</div><!-- /.tiles -->


-----

星际圆桌记录：

* [推进技术讨论幻灯片](archive/propulsion/slides/index.html)
* [火星计时和历法幻灯片](archive/marsTimeKeeping/slides/index.html)
* [火星基地建设讨论幻灯片](archive/marsBase/slides/index.html)
* [新职业和专业讨论幻灯片](archive/professions/slides/index.html)
