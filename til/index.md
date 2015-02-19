---
layout: archive
title: Today I Learned
---






<div class="front-cover" style="background:url(../images/{{ site.cover_image }}) no-repeat fixed center;background-size:cover;overflow:hidden;">
    
    <section>
        <div class="container" style="padding-top:0.5em;">
            <h1 style="text-align:center;color:#fff;font-weight:600;" id="site-title-front">#TIL#</h1>
        </div>
<div class="featured" style="border-top:1px solid grey;margin:0 10% 0 10%;">
<div style="background-image:linear-gradient(-130deg, rgba(76, 102, 128, 0.61) 10%, rgba(48, 25, 23, 0.5) 35%, rgba(155, 155, 155, 0.2) 65%, rgba(255, 163, 163, 0.2) 90%);">
{% for post in site.categories.til limit:1 %}
<h3 style="text-align:center;font-size:120%;"><a href="{{ site.url }}{{ post.url }}" style="text-align:center;color:white;font-weight:600;">{{ post.title }}</a></h3>
<p style="text-align:left;color:#fff;font-size:90%;padding-bottom:0.5em;padding-left:2%;padding-right:2%;">{{ post.summary }}</p>
{% endfor %}
</div>
</div>
    </section>

</div>


{% if site.categories.til.size %}
## 共有 {{ site.categories.til.size }} 条 TIL
		{% else %}
更多 TIL 生成中
		{% endif %}

<div class="tiles">
{% for post in site.categories.til %}
	{% include post-list-cn.html %}
{% endfor %}
</div><!-- /.tiles -->