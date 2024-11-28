import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as e,a}from"./app-DkPjE498.js";const n={},r=a('<h1 id="网关" tabindex="-1"><a class="header-anchor" href="#网关"><span>网关</span></a></h1><p>通俗讲，网关用来控制流程，不同网关的流程控制方式不一样。在Activiti7有4种网关：排他、并行、包含、事件。</p><h2 id="排他网关" tabindex="-1"><a class="header-anchor" href="#排他网关"><span>排他网关</span></a></h2><p>排他网关，选择符合条件（true）的一个分支进行流程推进。</p><p>为此，我们关系的情况有可能有3种：</p><ol><li>符合一个条件</li><li>符合多个条件</li><li>不符合条件</li></ol><p>假如符合的条件不止一个，Activit7默认选择第一个命中的，同理如果过一个符合条件的都没有，则抛异常。</p><p>官网给出依据：</p><figure><img src="https://tva1.sinaimg.cn/large/008vxvgGly1h74vd1yv1fj30wk0cwwgt.jpg" alt="image-20220708140852305" tabindex="0" loading="lazy"><figcaption>image-20220708140852305</figcaption></figure><p>示例图：</p><figure><img src="https://tva1.sinaimg.cn/large/008vxvgGly1h74vd2ono3j30x00noaa1.jpg" alt="image-20220708141241734" tabindex="0" loading="lazy"><figcaption>image-20220708141241734</figcaption></figure><h2 id="并行网关" tabindex="-1"><a class="header-anchor" href="#并行网关"><span>并行网关</span></a></h2><p>并行网关的基本思想来自：分治思想，即<a href="https://en.wikipedia.org/wiki/Fork%E2%80%93join_model" target="_blank" rel="noopener noreferrer">FORK/JOIN</a>。</p><figure><img src="https://tva1.sinaimg.cn/large/008vxvgGly1h74vd287adj30x40cyq3l.jpg" alt="image-20220708144837985" tabindex="0" loading="lazy"><figcaption>image-20220708144837985</figcaption></figure><p>在流程审批中，会签的实现方式有两种：</p><ol><li>使用多实例会签。</li><li>并行网关实现会签。</li></ol><p>不论使用哪种方式实现，一般地需关注2个问题：</p><ol><li>如何推送&quot;待审批人&quot;给业务方</li><li>如何在不影响&quot;非会签&quot;模式下，实现多种模式并存。比如：或签下，无具体的assignee值；会签下，多个assignee值共存等问题。</li></ol><h2 id="包含网关" tabindex="-1"><a class="header-anchor" href="#包含网关"><span>包含网关</span></a></h2><p>包含网关：排他网关与并行网关的组合。</p><p>与<strong>排他网关</strong>的区别：当条件<strong>满足多个分支时，多个分支流程都会被触</strong>发；排他网关则默认只生效第一条分支。</p><p>与<strong>并行网关</strong>的区别：包含网关<strong>可以设置条件</strong>并且可以生效，并行网关即使设置了条件也无法生效。</p><h2 id="事件网关" tabindex="-1"><a class="header-anchor" href="#事件网关"><span>事件网关</span></a></h2><p>不在讨论范围，感兴趣可以看： 🔗 <a href="https://www.activiti.org/userguide/#bpmnEventbasedGateway" target="_blank" rel="noopener noreferrer">https://www.activiti.org/userguide/#bpmnEventbasedGateway</a></p><h1 id="任务" tabindex="-1"><a class="header-anchor" href="#任务"><span>任务</span></a></h1><p>任务类型有很多，这里只讲一种：用户任务（User Task）</p><h2 id="用户任务" tabindex="-1"><a class="header-anchor" href="#用户任务"><span>用户任务</span></a></h2><figure><img src="https://tva1.sinaimg.cn/large/008vxvgGly1h74vd3csknj302t028jr6.jpg" alt="bpmn.user.task" tabindex="0" loading="lazy"><figcaption>bpmn.user.task</figcaption></figure><p>在工作流中，需要人参与的，都使用这一任务类型。对于用户任务（User Task）的使用，可以指定特定一个人、候选人、候选组。对于用户任务（User Task）的使用要点是<strong>给用户任务设置一些属性</strong>：</p><ul><li>截止日期</li><li>办理人（assignee） ⚠️ 或签模式下assignee是空的，需要去 <code>act_ru_identitylink</code> 找</li><li>候选人、候选组等等</li></ul>',30),l=[r];function p(o,s){return e(),i("div",null,l)}const h=t(n,[["render",p],["__file","Activiti7 9 网关.html.vue"]]),d=JSON.parse('{"path":"/Activiti7%E7%AC%94%E8%AE%B0/Activiti7%209%20%E7%BD%91%E5%85%B3.html","title":"网关","lang":"zh-CN","frontmatter":{"description":"网关 通俗讲，网关用来控制流程，不同网关的流程控制方式不一样。在Activiti7有4种网关：排他、并行、包含、事件。 排他网关 排他网关，选择符合条件（true）的一个分支进行流程推进。 为此，我们关系的情况有可能有3种： 符合一个条件 符合多个条件 不符合条件 假如符合的条件不止一个，Activit7默认选择第一个命中的，同理如果过一个符合条件的都...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/yibu_zzn/Activiti7%E7%AC%94%E8%AE%B0/Activiti7%209%20%E7%BD%91%E5%85%B3.html"}],["meta",{"property":"og:site_name","content":"郑振宁"}],["meta",{"property":"og:title","content":"网关"}],["meta",{"property":"og:description","content":"网关 通俗讲，网关用来控制流程，不同网关的流程控制方式不一样。在Activiti7有4种网关：排他、并行、包含、事件。 排他网关 排他网关，选择符合条件（true）的一个分支进行流程推进。 为此，我们关系的情况有可能有3种： 符合一个条件 符合多个条件 不符合条件 假如符合的条件不止一个，Activit7默认选择第一个命中的，同理如果过一个符合条件的都..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tva1.sinaimg.cn/large/008vxvgGly1h74vd1yv1fj30wk0cwwgt.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-18T05:51:40.000Z"}],["meta",{"property":"article:author","content":"郑振宁"}],["meta",{"property":"article:modified_time","content":"2024-09-18T05:51:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网关\\",\\"image\\":[\\"https://tva1.sinaimg.cn/large/008vxvgGly1h74vd1yv1fj30wk0cwwgt.jpg\\",\\"https://tva1.sinaimg.cn/large/008vxvgGly1h74vd2ono3j30x00noaa1.jpg\\",\\"https://tva1.sinaimg.cn/large/008vxvgGly1h74vd287adj30x40cyq3l.jpg\\",\\"https://tva1.sinaimg.cn/large/008vxvgGly1h74vd3csknj302t028jr6.jpg\\"],\\"dateModified\\":\\"2024-09-18T05:51:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"排他网关","slug":"排他网关","link":"#排他网关","children":[]},{"level":2,"title":"并行网关","slug":"并行网关","link":"#并行网关","children":[]},{"level":2,"title":"包含网关","slug":"包含网关","link":"#包含网关","children":[]},{"level":2,"title":"事件网关","slug":"事件网关","link":"#事件网关","children":[]},{"level":2,"title":"用户任务","slug":"用户任务","link":"#用户任务","children":[]}],"git":{"createdTime":1711445578000,"updatedTime":1726638700000,"contributors":[{"name":"郑振宁","email":"zzn_workmail@163.com","commits":1}]},"readingTime":{"minutes":1.85,"words":554},"filePathRelative":"Activiti7笔记/Activiti7 9 网关.md","localizedDate":"2024年3月26日","excerpt":"\\n<p>通俗讲，网关用来控制流程，不同网关的流程控制方式不一样。在Activiti7有4种网关：排他、并行、包含、事件。</p>\\n<h2>排他网关</h2>\\n<p>排他网关，选择符合条件（true）的一个分支进行流程推进。</p>\\n<p>为此，我们关系的情况有可能有3种：</p>\\n<ol>\\n<li>符合一个条件</li>\\n<li>符合多个条件</li>\\n<li>不符合条件</li>\\n</ol>\\n<p>假如符合的条件不止一个，Activit7默认选择第一个命中的，同理如果过一个符合条件的都没有，则抛异常。</p>\\n<p>官网给出依据：</p>\\n<figure><img src=\\"https://tva1.sinaimg.cn/large/008vxvgGly1h74vd1yv1fj30wk0cwwgt.jpg\\" alt=\\"image-20220708140852305\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220708140852305</figcaption></figure>","autoDesc":true}');export{h as comp,d as data};
