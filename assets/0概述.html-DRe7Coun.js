import{_ as e,c as t,o,d as a}from"./app-CWKdC6ZT.js";const r="/yibu_zzn/assets/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%8A%80%E6%9C%AF%E9%B8%9F%E7%9E%B0%E5%9B%BE-DQlm_u72.svg",n={},i=a('<div class="hint-container important"><p class="hint-container-title">重要</p><p>微服务架构系列笔记仅起提纲掣领作用，不对具体细节实现赘述。</p></div><h1 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h1><figure><img src="'+r+'" alt="微服务技术鸟瞰图" tabindex="0" loading="lazy"><figcaption>微服务技术鸟瞰图</figcaption></figure><p>各组件笔记统一归档至《组件笔记》，其中<a href="https://start.aliyun.com/ecosystem.html" target="_blank" rel="noopener noreferrer">微服务全景图（⭐️）</a>对把清微服务架构脉络有很大帮助，可按图索骥进行学习和掌握。</p><p>以下是分布式架构常见的问题<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><ul><li>如何消除传统网站（单体架构）中的粘性有状态会话？</li><li>如何设计一个高并发/高可用/可扩展的会话缓存服务？ <ul><li>高并发，考虑 分段锁<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></li><li>高性能，考虑 LRU + 二级缓存机制</li></ul></li><li>如何设计一个轻量级的延迟任务队列？</li><li>如何设计一把轻量级的锁？</li><li>如何设计一个轻量级的限流系统？</li><li>如何实现精细化服务治理？ <code>Service Mesh（服务网格技术）</code></li></ul><h1 id="分布式事务解决方案" tabindex="-1"><a class="header-anchor" href="#分布式事务解决方案"><span>分布式事务解决方案</span></a></h1><h2 id="主流框架" tabindex="-1"><a class="header-anchor" href="#主流框架"><span>主流框架</span></a></h2><p><a href="https://seata.apache.org/zh-cn/" target="_blank" rel="noopener noreferrer">SEATA</a> ：一款开源的分布式事务解决方案，致力于在微服务架构下提供高性能和简单易用的分布式事务服务。可基于官网<a href="https://seata.apache.org/zh-cn/docs/user/quickstart/" target="_blank" rel="noopener noreferrer">快速入门</a>体验SEATA的基本用法，其项目地址：<a href="https://github.com/apache/incubator-seata-samples/tree/master/at-sample/dubbo-samples-seata" target="_blank" rel="noopener noreferrer">dubbo-samples-seata</a> 。</p><p>SEAT 提供了4种事务模式：</p><ul><li><strong>AT 模式</strong> 非侵入式的分布式事务解决方案</li><li><strong>TCC 模式</strong> 由业务方细粒度控制的侵入式分布式事务解决方案</li><li><strong>Saga 模式</strong> 长事务解决方案</li><li><strong>XA 模式</strong> XA 模式是从 1.2 版本支持的事务模式。XA 规范 是 X/Open 组织定义的分布式事务处理（DTP，Distributed Transaction Processing）标准。Seata XA 模式是利用事务资源（数据库、消息服务等）对 XA 协议的支持，以 <strong>XA 协议</strong>的机制来管理分支事务的一种事务模式。</li></ul><h1 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注"><span>脚注</span></a></h1><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>引用自：<a href="https://gitee.com/geektime-geekbang/geektime-distributed" target="_blank" rel="noopener noreferrer">https://gitee.com/geektime-geekbang/geektime-distributed</a> 。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>分段锁（Segment Lock）是一种在并发编程中用于提高性能和并发度的锁机制 <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li></ol></section>',14),s=[i];function l(c,p){return o(),t("div",null,s)}const m=e(n,[["render",l],["__file","0概述.html.vue"]]),f=JSON.parse('{"path":"/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84/0%E6%A6%82%E8%BF%B0.html","title":"概述","lang":"zh-CN","frontmatter":{"order":1,"icon":"file","category":["微服务","架构","框架"],"description":"重要 微服务架构系列笔记仅起提纲掣领作用，不对具体细节实现赘述。 概述 微服务技术鸟瞰图微服务技术鸟瞰图 各组件笔记统一归档至《组件笔记》，其中微服务全景图（⭐️）对把清微服务架构脉络有很大帮助，可按图索骥进行学习和掌握。 以下是分布式架构常见的问题[1] 如何消除传统网站（单体架构）中的粘性有状态会话？ 如何设计一个高并发/高可用/可扩展的会话缓存服...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/yibu_zzn/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84/0%E6%A6%82%E8%BF%B0.html"}],["meta",{"property":"og:site_name","content":"郑振宁的数字资产中心"}],["meta",{"property":"og:title","content":"概述"}],["meta",{"property":"og:description","content":"重要 微服务架构系列笔记仅起提纲掣领作用，不对具体细节实现赘述。 概述 微服务技术鸟瞰图微服务技术鸟瞰图 各组件笔记统一归档至《组件笔记》，其中微服务全景图（⭐️）对把清微服务架构脉络有很大帮助，可按图索骥进行学习和掌握。 以下是分布式架构常见的问题[1] 如何消除传统网站（单体架构）中的粘性有状态会话？ 如何设计一个高并发/高可用/可扩展的会话缓存服..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-28T08:31:42.000Z"}],["meta",{"property":"article:author","content":"郑振宁"}],["meta",{"property":"article:modified_time","content":"2024-09-28T08:31:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"概述\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-28T08:31:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"主流框架","slug":"主流框架","link":"#主流框架","children":[]}],"git":{"createdTime":1712910044000,"updatedTime":1727512302000,"contributors":[{"name":"zzn","email":"zzn_workmail@163.com","commits":2},{"name":"一步","email":"zzn_workmail@163.com","commits":2}]},"readingTime":{"minutes":1.79,"words":538},"filePathRelative":"微服务架构/0概述.md","localizedDate":"2024年4月12日","excerpt":"<div class=\\"hint-container important\\">\\n<p class=\\"hint-container-title\\">重要</p>\\n<p>微服务架构系列笔记仅起提纲掣领作用，不对具体细节实现赘述。</p>\\n</div>\\n<h1>概述</h1>\\n<figure><figcaption>微服务技术鸟瞰图</figcaption></figure>\\n<p>各组件笔记统一归档至《组件笔记》，其中<a href=\\"https://start.aliyun.com/ecosystem.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">微服务全景图（⭐️）</a>对把清微服务架构脉络有很大帮助，可按图索骥进行学习和掌握。</p>","autoDesc":true}');export{m as comp,f as data};
