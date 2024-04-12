import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as l,c as p,f as i,a as n,b as a,d as t,e as r}from"./app-DdSNBsy6.js";const c={},u=n("h1",{id:"lombok-实践指南",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lombok-实践指南"},[n("span",null,"Lombok#实践指南")])],-1),d=n("blockquote",null,[n("p",null,"除官方文档，另外两篇的介绍已经非常全面了，就不重复造轮子。")],-1),m={href:"https://objectcomputing.com/resources/publications/sett/january-2010-reducing-boilerplate-code-with-project-lombok",target:"_blank",rel:"noopener noreferrer"},g={href:"https://time.geekbang.org/dailylesson/detail/100056910?source=app_share",target:"_blank",rel:"noopener noreferrer"},k={href:"https://xie.infoq.cn/article/882f0ae7cdb560842434d53c0?source=app_share",target:"_blank",rel:"noopener noreferrer"},b={href:"https://projectlombok.org/features/constructor",target:"_blank",rel:"noopener noreferrer"},v=r(`<h2 id="supperbuilder不和-data一起用" tabindex="-1"><a class="header-anchor" href="#supperbuilder不和-data一起用"><span>@SupperBuilder不和@Data一起用</span></a></h2><figure><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h02adi3pcoj21e20h2423.jpg" alt="PlatformLog" tabindex="0" loading="lazy"><figcaption>PlatformLog</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Setter</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原因：lombok生成的构造器语义不完整：</p><figure><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h02ak6v329j21bf0u0gx0.jpg" alt="image-20220308110108302" tabindex="0" loading="lazy"><figcaption>image-20220308110108302</figcaption></figure><figure><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h02anscpvrj22h20ouk3i.jpg" alt="image-20220308110435741" tabindex="0" loading="lazy"><figcaption>image-20220308110435741</figcaption></figure>`,10);function h(f,_){const e=o("ExternalLinkIcon");return l(),p("div",null,[u,i("始于21年11月24日"),d,n("p",null,[a("👉🏻 "),n("a",m,[a("官方文档"),t(e)])]),n("p",null,[a("👉🏻"),n("a",g,[a("【视频版】前阿里云大数据技术专家 陶克路"),t(e)])]),n("p",null,[a("👉🏻"),n("a",k,[a("【文字版】 InfoQ写作平台-签约作者 浩宇天尚"),t(e)])]),n("p",null,[a("👉🏻 "),n("a",b,[a("官方文档解释构造器相关注解"),t(e)])]),v])}const L=s(c,[["render",h],["__file","Lombok.html.vue"]]),B=JSON.parse('{"path":"/%E7%BB%84%E4%BB%B6%E7%AC%94%E8%AE%B0/Lombok.html","title":"Lombok#实践指南","lang":"zh-CN","frontmatter":{"description":"Lombok#实践指南 除官方文档，另外两篇的介绍已经非常全面了，就不重复造轮子。 👉🏻 官方文档 👉🏻【视频版】前阿里云大数据技术专家 陶克路 👉🏻【文字版】 InfoQ写作平台-签约作者 浩宇天尚 👉🏻 官方文档解释构造器相关注解 @SupperBuilder不和@Data一起用 PlatformLogPlatformLog Pla...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%BB%84%E4%BB%B6%E7%AC%94%E8%AE%B0/Lombok.html"}],["meta",{"property":"og:site_name","content":"郑振宁的数字资产中心"}],["meta",{"property":"og:title","content":"Lombok#实践指南"}],["meta",{"property":"og:description","content":"Lombok#实践指南 除官方文档，另外两篇的介绍已经非常全面了，就不重复造轮子。 👉🏻 官方文档 👉🏻【视频版】前阿里云大数据技术专家 陶克路 👉🏻【文字版】 InfoQ写作平台-签约作者 浩宇天尚 👉🏻 官方文档解释构造器相关注解 @SupperBuilder不和@Data一起用 PlatformLogPlatformLog Pla..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tva1.sinaimg.cn/large/e6c9d24ely1h02adi3pcoj21e20h2423.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"郑振宁"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lombok#实践指南\\",\\"image\\":[\\"https://tva1.sinaimg.cn/large/e6c9d24ely1h02adi3pcoj21e20h2423.jpg\\",\\"https://tva1.sinaimg.cn/large/e6c9d24ely1h02ak6v329j21bf0u0gx0.jpg\\",\\"https://tva1.sinaimg.cn/large/e6c9d24ely1h02anscpvrj22h20ouk3i.jpg\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"@SupperBuilder不和@Data一起用","slug":"supperbuilder不和-data一起用","link":"#supperbuilder不和-data一起用","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.62,"words":185},"filePathRelative":"组件笔记/Lombok.md","excerpt":"\\n<!--始于21年11月24日-->\\n<blockquote>\\n<p>除官方文档，另外两篇的介绍已经非常全面了，就不重复造轮子。</p>\\n</blockquote>\\n<p>👉🏻 <a href=\\"https://objectcomputing.com/resources/publications/sett/january-2010-reducing-boilerplate-code-with-project-lombok\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档</a></p>\\n<p>👉🏻<a href=\\"https://time.geekbang.org/dailylesson/detail/100056910?source=app_share\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">【视频版】前阿里云大数据技术专家 陶克路</a></p>","autoDesc":true}');export{L as comp,B as data};
