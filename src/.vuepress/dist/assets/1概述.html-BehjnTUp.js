import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a,o as i}from"./app-BSuGGOks.js";const n="/yibu_zzn/assets/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%8A%80%E6%9C%AF%E9%B8%9F%E7%9E%B0%E5%9B%BE-DQlm_u72.svg",o={};function s(l,e){return i(),r("div",null,e[0]||(e[0]=[a('<div class="hint-container important"><p class="hint-container-title">重要</p><p>微服务架构系列笔记仅起提纲掣领作用，不对具体细节实现赘述。</p></div><h1 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h1><p>微服务的关注点分两大类：公共关注点、业务关注点。二者侧重不同，对于公共关注点，<a href="https://jimmysong.io/blog/what-is-a-service-mesh/" target="_blank" rel="noopener noreferrer"><strong>Service Mesh（服务网格）</strong></a> 正在让其变得无感且易于治理，以便让开发更加专注于业务开发。</p><p>公共关注点一般需要关注：</p><ol><li>服务发现/负载均衡</li><li>边界代理/网关</li><li>配置中心</li><li>调度和发布</li><li>监控治理</li><li>限流容错</li><li>流量治理</li><li>安全治理</li></ol><p>业务关注点一般关注：</p><ol><li>数据一致性分发</li><li>数据聚合</li><li>分布式事务</li><li>单体系统解耦拆分（即如何向微服务架构演进）</li><li>…</li><li>分布式锁</li><li>延迟队列任务</li></ol><h1 id="微服务全景图" tabindex="-1"><a class="header-anchor" href="#微服务全景图"><span>微服务全景图</span></a></h1><figure><img src="'+n+'" alt="微服务技术鸟瞰图" tabindex="0" loading="lazy"><figcaption>微服务技术鸟瞰图</figcaption></figure><p>其中<a href="https://start.aliyun.com/ecosystem.html" target="_blank" rel="noopener noreferrer">阿里巴巴：微服务全景图（⭐️）</a>对把清微服务架构脉络有很大帮助，可按图索骥进行学习和掌握。</p><h1 id="分布式事务解决方案" tabindex="-1"><a class="header-anchor" href="#分布式事务解决方案"><span>分布式事务解决方案</span></a></h1><h2 id="主流框架" tabindex="-1"><a class="header-anchor" href="#主流框架"><span>主流框架</span></a></h2><p><a href="https://seata.apache.org/zh-cn/" target="_blank" rel="noopener noreferrer">SEATA</a> ：一款开源的分布式事务解决方案，致力于在微服务架构下提供高性能和简单易用的分布式事务服务。可基于官网<a href="https://seata.apache.org/zh-cn/docs/user/quickstart/" target="_blank" rel="noopener noreferrer">快速入门</a>体验SEATA的基本用法，其项目地址：<a href="https://github.com/apache/incubator-seata-samples/tree/master/at-sample/dubbo-samples-seata" target="_blank" rel="noopener noreferrer">dubbo-samples-seata</a> 。</p><p>SEAT 提供了4种事务模式：</p><ul><li><strong>AT 模式</strong> 非侵入式的分布式事务解决方案</li><li><strong>TCC 模式</strong> 由业务方细粒度控制的侵入式分布式事务解决方案</li><li><strong>Saga 模式</strong> 长事务解决方案</li><li><strong>XA 模式</strong> XA 模式是从 1.2 版本支持的事务模式。XA 规范 是 X/Open 组织定义的分布式事务处理（DTP，Distributed Transaction Processing）标准。Seata XA 模式是利用事务资源（数据库、消息服务等）对 XA 协议的支持，以 <strong>XA 协议</strong>的机制来管理分支事务的一种事务模式。</li></ul>',15)]))}const h=t(o,[["render",s],["__file","1概述.html.vue"]]),m=JSON.parse('{"path":"/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84/1%E6%A6%82%E8%BF%B0.html","title":"概述","lang":"zh-CN","frontmatter":{"order":2,"icon":"file","category":["微服务","架构","框架"],"description":"重要 微服务架构系列笔记仅起提纲掣领作用，不对具体细节实现赘述。 概述 微服务的关注点分两大类：公共关注点、业务关注点。二者侧重不同，对于公共关注点，Service Mesh（服务网格） 正在让其变得无感且易于治理，以便让开发更加专注于业务开发。 公共关注点一般需要关注： 服务发现/负载均衡 边界代理/网关 配置中心 调度和发布 监控治理 限流容错 流...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/yibu_zzn/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84/1%E6%A6%82%E8%BF%B0.html"}],["meta",{"property":"og:site_name","content":"郑振宁"}],["meta",{"property":"og:title","content":"概述"}],["meta",{"property":"og:description","content":"重要 微服务架构系列笔记仅起提纲掣领作用，不对具体细节实现赘述。 概述 微服务的关注点分两大类：公共关注点、业务关注点。二者侧重不同，对于公共关注点，Service Mesh（服务网格） 正在让其变得无感且易于治理，以便让开发更加专注于业务开发。 公共关注点一般需要关注： 服务发现/负载均衡 边界代理/网关 配置中心 调度和发布 监控治理 限流容错 流..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-30T09:42:17.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-30T09:42:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"概述\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-30T09:42:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"主流框架","slug":"主流框架","link":"#主流框架","children":[]}],"git":{"createdTime":1712910044000,"updatedTime":1727689337000,"contributors":[{"name":"一步","email":"zzn_workmail@163.com","commits":2}]},"readingTime":{"minutes":1.82,"words":545},"filePathRelative":"微服务架构/1概述.md","localizedDate":"2024年4月12日","excerpt":"<div class=\\"hint-container important\\">\\n<p class=\\"hint-container-title\\">重要</p>\\n<p>微服务架构系列笔记仅起提纲掣领作用，不对具体细节实现赘述。</p>\\n</div>\\n<h1>概述</h1>\\n<p>微服务的关注点分两大类：公共关注点、业务关注点。二者侧重不同，对于公共关注点，<a href=\\"https://jimmysong.io/blog/what-is-a-service-mesh/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><strong>Service Mesh（服务网格）</strong></a> 正在让其变得无感且易于治理，以便让开发更加专注于业务开发。</p>","autoDesc":true}');export{h as comp,m as data};
