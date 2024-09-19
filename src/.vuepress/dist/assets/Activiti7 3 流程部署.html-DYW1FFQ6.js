import{_ as i,c as s,o as t,d as a}from"./app-iuyQBkkg.js";const e={},n=a(`<h1 id="流程部署" tabindex="-1"><a class="header-anchor" href="#流程部署"><span>流程部署</span></a></h1><p>进行流程部署时，需要<strong>关注3张表，忽略1张表：</strong></p><ol><li><strong>ACT_RE_DEPLOYMENT</strong> 部署一次新增一条记录，是流程定义部署记录表。</li><li>**ACT_RE_PROCDEF ** 此表的KEY_字段用来区分不同的流程定义（如：工单流程、白名单流程、请假流程、辞职流程等）。</li><li><strong>ACT_GE_BYTEARRAY</strong> ：<code>.bpmn</code> 、 <code>.png</code>等二进制文件都放在这里。</li><li>ACT_GE_PROPERTY ： 操作属性表，每次操作数据库，这张表都会变动。</li></ol><p>基于模型部署的时候需要解决一个问题：<strong><mark>流程图数据结构的解析与反解析</mark></strong>。</p><h2 id="流程图数据结构解析与反解析" tabindex="-1"><a class="header-anchor" href="#流程图数据结构解析与反解析"><span>流程图数据结构解析与反解析</span></a></h2><p>开发工作流引擎，需要前后端定义好流程图的数据结构，一般有两种：<strong>JSON</strong> 或 <strong>XML</strong>，这一步决定了流程能否成功部署。</p><blockquote><p><strong><mark>JSON 2 BpmlModel 2 XML</mark></strong></p></blockquote><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// modelEditorSource 为JSON结构时</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ObjectNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> objectNode </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> (ObjectNode) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> ObjectMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">readTree</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(modelEditorSource);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">BpmnModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> bpmnModel </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> BpmnJsonConverter</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">convertToBpmnModel</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(objectNode);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">[] bytes </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> BpmnXMLConverter</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">convertToXML</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(bpmnModel);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(bytes</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> StandardCharsets</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">UTF_8</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSON格式的流程图：</p><figure><img src="https://tva1.sinaimg.cn/large/008vxvgGly1h74v9mp03ij30x20u0wj4.jpg" alt="image-20220523113023420" tabindex="0" loading="lazy"><figcaption>image-20220523113023420</figcaption></figure><p>转换成XML后：</p><figure><img src="https://tva1.sinaimg.cn/large/008vxvgGly1h74v9lznm5j30xe0u07bd.jpg" alt="image-20220523113357725" tabindex="0" loading="lazy"><figcaption>image-20220523113357725</figcaption></figure><blockquote><p><strong><mark>XML 2 BpmnModel 2 XML</mark></strong></p></blockquote><p>略。</p>`,14),l=[n];function p(r,h){return t(),s("div",null,l)}const k=i(e,[["render",p],["__file","Activiti7 3 流程部署.html.vue"]]),d=JSON.parse('{"path":"/Activiti7%E7%AC%94%E8%AE%B0/Activiti7%203%20%E6%B5%81%E7%A8%8B%E9%83%A8%E7%BD%B2.html","title":"流程部署","lang":"zh-CN","frontmatter":{"description":"流程部署 进行流程部署时，需要关注3张表，忽略1张表： ACT_RE_DEPLOYMENT 部署一次新增一条记录，是流程定义部署记录表。 **ACT_RE_PROCDEF ** 此表的KEY_字段用来区分不同的流程定义（如：工单流程、白名单流程、请假流程、辞职流程等）。 ACT_GE_BYTEARRAY ：.bpmn 、 .png等二进制文件都放在这里...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/yibu_zzn/Activiti7%E7%AC%94%E8%AE%B0/Activiti7%203%20%E6%B5%81%E7%A8%8B%E9%83%A8%E7%BD%B2.html"}],["meta",{"property":"og:site_name","content":"郑振宁的数字资产中心"}],["meta",{"property":"og:title","content":"流程部署"}],["meta",{"property":"og:description","content":"流程部署 进行流程部署时，需要关注3张表，忽略1张表： ACT_RE_DEPLOYMENT 部署一次新增一条记录，是流程定义部署记录表。 **ACT_RE_PROCDEF ** 此表的KEY_字段用来区分不同的流程定义（如：工单流程、白名单流程、请假流程、辞职流程等）。 ACT_GE_BYTEARRAY ：.bpmn 、 .png等二进制文件都放在这里..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tva1.sinaimg.cn/large/008vxvgGly1h74v9mp03ij30x20u0wj4.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T09:32:58.000Z"}],["meta",{"property":"article:author","content":"郑振宁"}],["meta",{"property":"article:modified_time","content":"2024-03-26T09:32:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"流程部署\\",\\"image\\":[\\"https://tva1.sinaimg.cn/large/008vxvgGly1h74v9mp03ij30x20u0wj4.jpg\\",\\"https://tva1.sinaimg.cn/large/008vxvgGly1h74v9lznm5j30xe0u07bd.jpg\\"],\\"dateModified\\":\\"2024-03-26T09:32:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"流程图数据结构解析与反解析","slug":"流程图数据结构解析与反解析","link":"#流程图数据结构解析与反解析","children":[]}],"git":{"createdTime":1711445578000,"updatedTime":1711445578000,"contributors":[{"name":"一步","email":"zzn_workmail@163.com","commits":1}]},"readingTime":{"minutes":0.9,"words":270},"filePathRelative":"Activiti7笔记/Activiti7 3 流程部署.md","localizedDate":"2024年3月26日","excerpt":"\\n<p>进行流程部署时，需要<strong>关注3张表，忽略1张表：</strong></p>\\n<ol>\\n<li><strong>ACT_RE_DEPLOYMENT</strong> 部署一次新增一条记录，是流程定义部署记录表。</li>\\n<li>**ACT_RE_PROCDEF ** 此表的KEY_字段用来区分不同的流程定义（如：工单流程、白名单流程、请假流程、辞职流程等）。</li>\\n<li><strong>ACT_GE_BYTEARRAY</strong> ：<code>.bpmn</code> 、 <code>.png</code>等二进制文件都放在这里。</li>\\n<li>ACT_GE_PROPERTY ： 操作属性表，每次操作数据库，这张表都会变动。</li>\\n</ol>","autoDesc":true}');export{k as comp,d as data};
