import{_ as o,r as i,o as s,c as r,a as e,b as n,d as a,e as c}from"./app-BYDLKLp0.js";const l={},p=e("h1",{id:"nacos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nacos"},[e("span",null,"Nacos")])],-1),d={class:"hint-container important"},g=e("p",{class:"hint-container-title"},"重要",-1),h=e("p",null,"构建云原生应用的动态服务发现、配置管理和服务管理平台",-1),m={href:"https://nacos.io",target:"_blank",rel:"noopener noreferrer"},u={href:"https://nacos.io/zh-cn/docs/v2/quickstart/quick-start.html",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"Spring",-1),f=e("code",null,"Spring Boot",-1),b=e("code",null,"Spring Cloud",-1),N={href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/Nacos-config",target:"_blank",rel:"noopener noreferrer"},k=e("h1",{id:"解决方案",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#解决方案"},[e("span",null,"解决方案")])],-1),y=e("h2",{id:"共享配置方案设计",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#共享配置方案设计"},[e("span",null,"共享配置方案设计")])],-1),v={href:"https://github.com/alibaba/spring-cloud-alibaba/issues/141",target:"_blank",rel:"noopener noreferrer"},z=c(`<p>该方案基于 <code>spring.cloud.nacos.shared.dataids</code> 配置实现共享，示例：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>spring.cloud.nacos.shared.dataids=global.yaml<span class="token punctuation">,</span>app<span class="token punctuation">-</span>common.yaml<span class="token punctuation">,</span>app<span class="token punctuation">-</span>local<span class="token punctuation">-</span>common.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其配置文件读取优先级如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008i3skNgy1gsjym4xzuvj30pk0iwdid.jpg" alt="配置文件读取优先级" tabindex="0" loading="lazy"><figcaption>配置文件读取优先级</figcaption></figure><p>在《安全治理》的部署模式中，存在多环境依赖于多配置的问题，此类问题可通过 <strong>Nacos 共享配置方案</strong>解决。</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008i3skNgy1grm6ucrsgwj31lh0u0dpi-20240415170816869.jpg" alt="安全治理配置管理的痛点" tabindex="0" loading="lazy"><figcaption>安全治理配置管理的痛点</figcaption></figure><p>此处不赘述方案实现步骤，仅提供解决思路：按照Nacos的配置文件加载顺序，在 <code>spring.cloud.nacos.shared.dataids</code> 声明需要加载的配置文件集，一般需要提供通用公共配置文件以及微服务自身的配置文件。</p>`,7);function B(C,S){const t=i("ExternalLinkIcon");return s(),r("div",null,[p,e("div",d,[g,h,e("ul",null,[e("li",null,[e("a",m,[n("https://nacos.io"),a(t)])])])]),e("ul",null,[e("li",null,[e("a",u,[n("官方文档"),a(t)]),n("提供 "),_,n("、 "),f,n("、"),b,n(" 快速集成指南。")]),e("li",null,[e("a",N,[n("Spring Cloud Alibaba Nacos Config"),a(t)]),n(" 。")])]),k,y,e("p",null,[e("a",v,[n("SCA Nacos Config 共享配置方案设计"),a(t)]),n("，可以解决多地区、多环境问题。比如：项目独立部署北京、上海、成都等地区；项目部署测试环境、回装环境、正式环境等环境。")]),z])}const x=o(l,[["render",B],["__file","Nacos.html.vue"]]),E=JSON.parse('{"path":"/%E7%BB%84%E4%BB%B6%E7%AC%94%E8%AE%B0/Nacos.html","title":"Nacos","lang":"zh-CN","frontmatter":{"description":"Nacos 重要 构建云原生应用的动态服务发现、配置管理和服务管理平台 https://nacos.io 官方文档提供 Spring、 Spring Boot、Spring Cloud 快速集成指南。 Spring Cloud Alibaba Nacos Config 。 解决方案 共享配置方案设计 SCA Nacos Config 共享配置方案设计，...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/yibu_zzn/%E7%BB%84%E4%BB%B6%E7%AC%94%E8%AE%B0/Nacos.html"}],["meta",{"property":"og:site_name","content":"郑振宁的数字资产中心"}],["meta",{"property":"og:title","content":"Nacos"}],["meta",{"property":"og:description","content":"Nacos 重要 构建云原生应用的动态服务发现、配置管理和服务管理平台 https://nacos.io 官方文档提供 Spring、 Spring Boot、Spring Cloud 快速集成指南。 Spring Cloud Alibaba Nacos Config 。 解决方案 共享配置方案设计 SCA Nacos Config 共享配置方案设计，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008i3skNgy1gsjym4xzuvj30pk0iwdid.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-16T02:29:32.000Z"}],["meta",{"property":"article:author","content":"郑振宁"}],["meta",{"property":"article:modified_time","content":"2024-04-16T02:29:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nacos\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008i3skNgy1gsjym4xzuvj30pk0iwdid.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008i3skNgy1grm6ucrsgwj31lh0u0dpi-20240415170816869.jpg\\"],\\"dateModified\\":\\"2024-04-16T02:29:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"共享配置方案设计","slug":"共享配置方案设计","link":"#共享配置方案设计","children":[]}],"git":{"createdTime":1712910044000,"updatedTime":1713234572000,"contributors":[{"name":"一步","email":"zzn_workmail@163.com","commits":7}]},"readingTime":{"minutes":1.02,"words":307},"filePathRelative":"组件笔记/Nacos.md","localizedDate":"2024年4月12日","excerpt":"\\n<div class=\\"hint-container important\\">\\n<p class=\\"hint-container-title\\">重要</p>\\n<p>构建云原生应用的动态服务发现、配置管理和服务管理平台</p>\\n<ul>\\n<li><a href=\\"https://nacos.io\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://nacos.io</a></li>\\n</ul>\\n</div>\\n<ul>\\n<li><a href=\\"https://nacos.io/zh-cn/docs/v2/quickstart/quick-start.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档</a>提供 <code>Spring</code>、 <code>Spring Boot</code>、<code>Spring Cloud</code> 快速集成指南。</li>\\n<li><a href=\\"https://github.com/alibaba/spring-cloud-alibaba/wiki/Nacos-config\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Spring Cloud Alibaba Nacos Config</a> 。</li>\\n</ul>","autoDesc":true}');export{x as comp,E as data};
