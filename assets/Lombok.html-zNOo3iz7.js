import{_ as s,r as o,o as i,c as l,a as n,b as a,d as t,e as r}from"./app-BYDLKLp0.js";const p="/yibu_zzn/assets/e6c9d24ely1h02adi3pcoj21e20h2423-D6jBqrBi.jpg",c={},u=n("h1",{id:"lombok",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lombok"},[n("span",null,"Lombok")])],-1),d=n("div",{class:"hint-container important"},[n("p",{class:"hint-container-title"},"重要"),n("p",null,[n("strong",null,"Project Lombok is a java library"),a(" that automatically plugs into your editor and build tools, spicing up your java. "),n("strong",null,"Never write another getter or equals method again, with one annotation"),a(" your class has a fully featured builder, Automate your logging variables, and much more.")]),n("p",null,[a("简言之，使用注解方式免于手写 "),n("code",null,"setter/getter"),a(" 等方法。")])],-1),m={href:"https://objectcomputing.com/resources/publications/sett/january-2010-reducing-boilerplate-code-with-project-lombok",target:"_blank",rel:"noopener noreferrer"},g={href:"https://time.geekbang.org/dailylesson/detail/100056910?source=app_share",target:"_blank",rel:"noopener noreferrer"},h={href:"https://xie.infoq.cn/article/882f0ae7cdb560842434d53c0?source=app_share",target:"_blank",rel:"noopener noreferrer"},v={href:"https://projectlombok.org/features/constructor",target:"_blank",rel:"noopener noreferrer"},k=r('<h1 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h1><h2 id="supperbuilder不和-data一起用" tabindex="-1"><a class="header-anchor" href="#supperbuilder不和-data一起用"><span>@SupperBuilder不和@Data一起用</span></a></h2><figure><img src="'+p+`" alt="PlatformLog" tabindex="0" loading="lazy"><figcaption>PlatformLog</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Setter</span>
<span class="token annotation punctuation">@Getter</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@SuperBuilder</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommonFields</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>PlatformLogDTO</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Setter</span>
<span class="token annotation punctuation">@Getter</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@SuperBuilder</span>
<span class="token annotation punctuation">@ToString</span><span class="token punctuation">(</span>callSuper <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EqualsAndHashCode</span><span class="token punctuation">(</span>callSuper <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PlatformLogDTO</span> <span class="token keyword">extends</span> <span class="token class-name">CommonFields</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>PlatformLogPO</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Setter</span>
<span class="token annotation punctuation">@Getter</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@ToString</span><span class="token punctuation">(</span>callSuper <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EqualsAndHashCode</span><span class="token punctuation">(</span>callSuper <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@SuperBuilder</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PlatformLogPO</span> <span class="token keyword">extends</span> <span class="token class-name">CommonFields</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原因：lombok生成的构造器语义不完整：</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24ely1h02ak6v329j21bf0u0gx0.jpg" alt="image-20220308110108302" tabindex="0" loading="lazy"><figcaption>image-20220308110108302</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24ely1h02anscpvrj22h20ouk3i.jpg" alt="image-20220308110435741" tabindex="0" loading="lazy"><figcaption>image-20220308110435741</figcaption></figure>`,11);function b(y,f){const e=o("ExternalLinkIcon");return i(),l("div",null,[u,d,n("ul",null,[n("li",null,[n("p",null,[n("a",m,[a("官方文档"),t(e)])])]),n("li",null,[n("p",null,[n("a",g,[a("【视频版】前阿里云大数据技术专家 陶克路"),t(e)])])]),n("li",null,[n("p",null,[n("a",h,[a("【文字版】 InfoQ写作平台-签约作者 浩宇天尚"),t(e)])])]),n("li",null,[n("p",null,[n("a",v,[a("官方文档解释构造器相关注解"),t(e)])])])]),k])}const _=s(c,[["render",b],["__file","Lombok.html.vue"]]),B=JSON.parse('{"path":"/%E7%BB%84%E4%BB%B6%E7%AC%94%E8%AE%B0/Lombok.html","title":"Lombok","lang":"zh-CN","frontmatter":{"description":"Lombok 重要 Project Lombok is a java library that automatically plugs into your editor and build tools, spicing up your java. Never write another getter or equals method again, wi...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/yibu_zzn/%E7%BB%84%E4%BB%B6%E7%AC%94%E8%AE%B0/Lombok.html"}],["meta",{"property":"og:site_name","content":"郑振宁的数字资产中心"}],["meta",{"property":"og:title","content":"Lombok"}],["meta",{"property":"og:description","content":"Lombok 重要 Project Lombok is a java library that automatically plugs into your editor and build tools, spicing up your java. Never write another getter or equals method again, wi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24ely1h02ak6v329j21bf0u0gx0.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T10:46:42.000Z"}],["meta",{"property":"article:author","content":"郑振宁"}],["meta",{"property":"article:modified_time","content":"2024-04-15T10:46:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lombok\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24ely1h02ak6v329j21bf0u0gx0.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24ely1h02anscpvrj22h20ouk3i.jpg\\"],\\"dateModified\\":\\"2024-04-15T10:46:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"@SupperBuilder不和@Data一起用","slug":"supperbuilder不和-data一起用","link":"#supperbuilder不和-data一起用","children":[]}],"git":{"createdTime":1712910044000,"updatedTime":1713178002000,"contributors":[{"name":"一步","email":"zzn_workmail@163.com","commits":5}]},"readingTime":{"minutes":0.71,"words":212},"filePathRelative":"组件笔记/Lombok.md","localizedDate":"2024年4月12日","excerpt":"\\n<div class=\\"hint-container important\\">\\n<p class=\\"hint-container-title\\">重要</p>\\n<p><strong>Project Lombok is a java library</strong> that automatically plugs into your editor and build tools, spicing up your java.\\n<strong>Never write another getter or equals method again, with one annotation</strong> your class has a fully featured builder, Automate your logging variables, and much more.</p>\\n<p>简言之，使用注解方式免于手写 <code>setter/getter</code> 等方法。</p>\\n</div>","autoDesc":true}');export{_ as comp,B as data};
