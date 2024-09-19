import{_ as t,c as e,o as i,d as a}from"./app-iuyQBkkg.js";const o={},n=a('<h1 id="流程定义" tabindex="-1"><a class="header-anchor" href="#流程定义"><span>流程定义</span></a></h1><p>流程定义是流程部署的产物。</p><p>在 <strong>ACT_RE_PROCDEF</strong>，每部署一次流程，都会新增一个版本序号（<strong>VERSION_</strong>），一般地，我们都是使用<strong>最新的流程定义</strong>来<strong>启动流程实例</strong>。</p><figure><img src="https://tva1.sinaimg.cn/large/008vxvgGly1h74vad51vzj321i0u04bk.jpg" alt="image-20220701134803586" tabindex="0" loading="lazy"><figcaption>image-20220701134803586</figcaption></figure><p><b style="color:red;">流程定义不好用了，删除后会有哪些影响？</b></p><p>流程定义的删除依赖于<strong>流程部署（ACT_RE_DEPLOYMENT）</strong>。</p><p>因此，只需要提供部署ID，即可把流程的部署信息和流程定义一并删除。</p><figure><img src="https://tva1.sinaimg.cn/large/008vxvgGly1h74vadzgt7j31ok0gyabo.jpg" alt="image-20220701140052831" tabindex="0" loading="lazy"><figcaption>image-20220701140052831</figcaption></figure><p>**<mark>这里有个坑。</mark>**值得注意的是，删除流程定义时，可以选择是否期望一并删除正在进行中的流程实例。若期望，那么与之关联的业务必然受到影响，导致其业务无法继续往下流转，处理方式有2种：</p><ol><li>监听流程定义删除情况，若被删，则回退业务流程到起点。</li><li>禁止一并删除，并限制删除仅可在特定时段内操作（如：凌晨1点，视甲方下班时间为准）</li></ol>',10),r=[n];function g(p,c){return i(),e("div",null,r)}const m=t(o,[["render",g],["__file","Activiti7 4 流程定义.html.vue"]]),l=JSON.parse('{"path":"/Activiti7%E7%AC%94%E8%AE%B0/Activiti7%204%20%E6%B5%81%E7%A8%8B%E5%AE%9A%E4%B9%89.html","title":"流程定义","lang":"zh-CN","frontmatter":{"description":"流程定义 流程定义是流程部署的产物。 在 ACT_RE_PROCDEF，每部署一次流程，都会新增一个版本序号（VERSION_），一般地，我们都是使用最新的流程定义来启动流程实例。 image-20220701134803586image-20220701134803586 流程定义不好用了，删除后会有哪些影响？ 流程定义的删除依赖于流程部署（ACT_...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/yibu_zzn/Activiti7%E7%AC%94%E8%AE%B0/Activiti7%204%20%E6%B5%81%E7%A8%8B%E5%AE%9A%E4%B9%89.html"}],["meta",{"property":"og:site_name","content":"郑振宁的数字资产中心"}],["meta",{"property":"og:title","content":"流程定义"}],["meta",{"property":"og:description","content":"流程定义 流程定义是流程部署的产物。 在 ACT_RE_PROCDEF，每部署一次流程，都会新增一个版本序号（VERSION_），一般地，我们都是使用最新的流程定义来启动流程实例。 image-20220701134803586image-20220701134803586 流程定义不好用了，删除后会有哪些影响？ 流程定义的删除依赖于流程部署（ACT_..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tva1.sinaimg.cn/large/008vxvgGly1h74vad51vzj321i0u04bk.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T09:32:58.000Z"}],["meta",{"property":"article:author","content":"郑振宁"}],["meta",{"property":"article:modified_time","content":"2024-03-26T09:32:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"流程定义\\",\\"image\\":[\\"https://tva1.sinaimg.cn/large/008vxvgGly1h74vad51vzj321i0u04bk.jpg\\",\\"https://tva1.sinaimg.cn/large/008vxvgGly1h74vadzgt7j31ok0gyabo.jpg\\"],\\"dateModified\\":\\"2024-03-26T09:32:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1711445578000,"updatedTime":1711445578000,"contributors":[{"name":"一步","email":"zzn_workmail@163.com","commits":1}]},"readingTime":{"minutes":0.9,"words":271},"filePathRelative":"Activiti7笔记/Activiti7 4 流程定义.md","localizedDate":"2024年3月26日","excerpt":"\\n<p>流程定义是流程部署的产物。</p>\\n<p>在 <strong>ACT_RE_PROCDEF</strong>，每部署一次流程，都会新增一个版本序号（<strong>VERSION_</strong>），一般地，我们都是使用<strong>最新的流程定义</strong>来<strong>启动流程实例</strong>。</p>\\n<figure><img src=\\"https://tva1.sinaimg.cn/large/008vxvgGly1h74vad51vzj321i0u04bk.jpg\\" alt=\\"image-20220701134803586\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220701134803586</figcaption></figure>","autoDesc":true}');export{m as comp,l as data};
