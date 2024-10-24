import{_ as s,c as i,o as a,d as e}from"./app-BaasAsNR.js";const n={},l=e(`<h1 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h1><ol><li>拉取镜像慢时，需自行更换镜像源，并重载配置、重启Docker</li></ol><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;registry-mirrors&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;http://hub-mirror.c.163.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;https://docker.mirrors.ustc.edu.cn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;https://pee6w651.mirror.aliyuncs.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="常用镜像" tabindex="-1"><a class="header-anchor" href="#常用镜像"><span>常用镜像</span></a></h1><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h2><blockquote><p>下载镜像</p></blockquote><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mysql:5.6</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>启动镜像</p></blockquote><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --restart=always</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/datas/mysql/data:/var/lib/mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/datas/mysql/conf:/etc/mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/datas/mysql/log:/var/log/mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">-p </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">3306:3306</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">-e </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">TZ=Asia/Shanghai</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">-e </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">MYSQL_ROOT_PASSWORD=root</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">mysql:5.6 </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">--character-set-server=utf8mb4 </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">--collation-server=utf8mb4_general_ci</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>-v /datas/mysql/data:/var/lib/mysql：将数据文件夹挂载到主机</span></span>
<span class="line"><span>-v /datas/mysql/conf:/etc/mysql：将配置文件夹挂在到主机，可以在宿主机放一份自定义 my.cnf文件，那么容器就会按自定义配置启动</span></span>
<span class="line"><span>-v /datas/mysql/log:/var/log/mysql：将日志文件夹挂载到主机</span></span>
<span class="line"><span>-p 3306:3306：将容器的3306端口映射到主机的3306端口</span></span>
<span class="line"><span>-e MYSQL_ROOT_PASSWORD=root：初始化root用户的密码</span></span>
<span class="line"><span>--character-set-server=utf8mb4：设置字符集</span></span>
<span class="line"><span>--collation-server=utf8mb4_general_ci：排序方式</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),t=[l];function h(r,p){return a(),i("div",null,t)}const k=s(n,[["render",h],["__file","Docker.html.vue"]]),c=JSON.parse('{"path":"/%E5%B7%A5%E5%85%B7%E6%8C%87%E5%BC%95/Docker.html","title":"注意事项","lang":"zh-CN","frontmatter":{"description":"注意事项 拉取镜像慢时，需自行更换镜像源，并重载配置、重启Docker 常用镜像 MySQL 下载镜像 启动镜像","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/yibu_zzn/%E5%B7%A5%E5%85%B7%E6%8C%87%E5%BC%95/Docker.html"}],["meta",{"property":"og:site_name","content":"郑振宁的数字资产中心"}],["meta",{"property":"og:title","content":"注意事项"}],["meta",{"property":"og:description","content":"注意事项 拉取镜像慢时，需自行更换镜像源，并重载配置、重启Docker 常用镜像 MySQL 下载镜像 启动镜像"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-16T07:02:19.000Z"}],["meta",{"property":"article:author","content":"郑振宁"}],["meta",{"property":"article:modified_time","content":"2024-10-16T07:02:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"注意事项\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-16T07:02:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"MySQL","slug":"mysql","link":"#mysql","children":[]}],"git":{"createdTime":1726739424000,"updatedTime":1729062139000,"contributors":[{"name":"zzn","email":"zzn_workmail@163.com","commits":1},{"name":"一步","email":"zzn_workmail@163.com","commits":1}]},"readingTime":{"minutes":0.7,"words":209},"filePathRelative":"工具指引/Docker.md","localizedDate":"2024年9月19日","excerpt":"\\n<ol>\\n<li>拉取镜像慢时，需自行更换镜像源，并重载配置、重启Docker</li>\\n</ol>\\n<div class=\\"language-json line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"json\\" data-title=\\"json\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E06C75\\">  \\"registry-mirrors\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">: [</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">    \\"http://hub-mirror.c.163.com\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">    \\"https://docker.mirrors.ustc.edu.cn\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">    \\"https://pee6w651.mirror.aliyuncs.com\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">  ]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{k as comp,c as data};
