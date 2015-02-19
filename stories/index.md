---
layout: archive
title: 
---




## 星际移民的故事

{% if site.categories.stories.size %}
共有 {{ site.categories.stories.size }} 篇故事类文章
		{% else %}
暂无故事类文章
		{% endif %}

<div class="tiles">
{% for post in site.categories.stories %}
	{% include post-list-cn.html %}
{% endfor %}
</div><!-- /.tiles -->