import{_ as i,c as s,o as e,d as t}from"./app-DEB3TMNT.js";const a={},h=t('<h1 id="常用镜像" tabindex="-1"><a class="header-anchor" href="#常用镜像"><span>常用镜像</span></a></h1><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>Mysql</span></a></h2><p>启动 MySQL</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mysql-server</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> MYSQL_ROOT_PASSWORD=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">123456</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> MYSQL_DATABASE=seata</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --publish</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 3306:3306</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mysql:latest</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --character-set-server=utf8mb4</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --collation-server=utf8mb4_unicode_ci</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',4),l=[h];function n(r,p){return e(),s("div",null,l)}const d=i(a,[["render",n],["__file","Docker.html.vue"]]),o=JSON.parse('{"path":"/%E5%B7%A5%E5%85%B7%E6%8C%87%E5%BC%95/Docker.html","title":"常用镜像","lang":"zh-CN","frontmatter":{"description":"常用镜像 Mysql 启动 MySQL","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/yibu_zzn/%E5%B7%A5%E5%85%B7%E6%8C%87%E5%BC%95/Docker.html"}],["meta",{"property":"og:site_name","content":"郑振宁的数字资产中心"}],["meta",{"property":"og:title","content":"常用镜像"}],["meta",{"property":"og:description","content":"常用镜像 Mysql 启动 MySQL"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-19T09:50:24.000Z"}],["meta",{"property":"article:author","content":"郑振宁"}],["meta",{"property":"article:modified_time","content":"2024-09-19T09:50:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用镜像\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-19T09:50:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Mysql","slug":"mysql","link":"#mysql","children":[]}],"git":{"createdTime":1726739424000,"updatedTime":1726739424000,"contributors":[{"name":"zzn","email":"zzn_workmail@163.com","commits":1}]},"readingTime":{"minutes":0.11,"words":33},"filePathRelative":"工具指引/Docker.md","localizedDate":"2024年9月19日","excerpt":"\\n<h2>Mysql</h2>\\n<p>启动 MySQL</p>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">docker</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> run</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --name</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> mysql-server</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> -e</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> MYSQL_ROOT_PASSWORD=</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">123456</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> -e</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> MYSQL_DATABASE=seata</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --publish</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 3306:3306</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> -d</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> mysql:latest</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --character-set-server=utf8mb4</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --collation-server=utf8mb4_unicode_ci</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{d as comp,o as data};
