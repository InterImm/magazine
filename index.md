---
layout: archive
permalink: /
title: 
---


<div class="front-cover" style="background:url(./images/{{ site.cover_image }}) no-repeat fixed center;background-size:cover;overflow:hidden;">
    
    <section>
        <div class="container" style="padding-top:1em;">
            <h1 style="text-align:center;color:#fff;font-weight:600;" id="site-title-front">{{ site.title }}</h1>
            {% if site.description %}<h3 style="text-align:center;color:#fff;font-weight:600;font-size:90%;">{{ site.description }}</h3>{% endif %}
        </div>
<div class="featured" style="border-top:1px solid grey;margin:0 10% 0 10%;">
<div style="background-image:linear-gradient(-130deg, rgba(14,21,58,0.3) 10%, rgba(74,76,123,0.5) 35%, rgba(161,140,171,0.2) 65%, rgba(243,201,215,0.2) 90%);">
{% for post in site.posts limit:1 %}
<h3 style="text-align:center;font-size:120%;">最新文章：<a href="{{ site.url }}{{ post.url }}" style="text-align:center;color:white;font-weight:600;">{{ post.title }}</a></h3>
<p style="text-align:left;color:#fff;font-size:90%;padding-bottom:0.5em;padding-left:2%;padding-right:2%;">{{ post.summary }}</p>
{% endfor %}
</div>
</div>
    </section>

</div>







## 近期科学

<div class="tiles">
{% for post in site.categories.science limit:5 %}
	{% include post-list-cn.html %}
{% endfor %}
</div><!-- /.tiles -->

<a href="./science/">查看所有科学（共 {{ site.categories.science.size }} 篇）</a>

## 近期故事

<div class="tiles">

{% for post in site.categories.stories limit:5 %}
	{% include post-list-cn.html %}
{% endfor %}

</div><!-- /.tiles -->



	{% if site.categories.stories.size %}
<a href="./stories/">查看所有故事（共 {{ site.categories.stories.size }} 篇）</a>
		{% else %}
暂无故事类文章
		{% endif %}


## 近期历史

<div class="tiles">
{% for post in site.categories.history limit:5 %}
	{% include post-list-cn.html %}
{% endfor %}
</div><!-- /.tiles -->



{% if site.categories.history.size %}
<a href="./history/">查看所有故事（共 {{ site.categories.history.size }} 篇）</a>
		{% else %}
暂无历史类文章
		{% endif %}

