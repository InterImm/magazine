---
layout: archive
title: Today I Learned
lede: "每日新知"
---

{% for post in site.categories.til limit:1 %}
<a class="mag-feature" href="{{ site.url }}{{ post.url }}">
  <span class="kicker">#TIL#</span>
  <strong class="mag-feature-title">{{ post.title }}</strong>
  <span class="mag-feature-summary">{{ post.summary }}</span>
</a>
{% endfor %}

{% if site.categories.til.size %}
## 共有 {{ site.categories.til.size }} 条 TIL
{% else %}
更多 TIL 生成中
{% endif %}

<ol class="mag-list">
{% for post in site.categories.til %}
	{% include post-list-cn.html %}
{% endfor %}
</ol>
