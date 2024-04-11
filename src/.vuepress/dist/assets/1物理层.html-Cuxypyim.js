import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as l,c as g,a as e,b as t,d as n,e as a}from"./app-DgDpkzQp.js";const o={},p=a('<h1 id="物理层" tabindex="-1"><a class="header-anchor" href="#物理层"><span>物理层</span></a></h1><h2 id="编码与调制" tabindex="-1"><a class="header-anchor" href="#编码与调制"><span>编码与调制</span></a></h2><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1gthudala2rj61ln0u07cy02.jpg" alt="编码与调制" tabindex="0" loading="lazy"><figcaption>编码与调制</figcaption></figure>',3),h={id:"基带传输-100°",tabindex:"-1"},c={class:"header-anchor",href:"#基带传输-100°"},d={href:"https://www.bilibili.com/video/BV1c4411d7jb?p=17",target:"_blank",rel:"noopener noreferrer"},m=e("mark",null,"100°",-1),u=a('<figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1gvi69r44lfj60wb0u0wiv02-20240411175526959.jpg" alt="基带传输" tabindex="0" loading="lazy"><figcaption>基带传输</figcaption></figure><p>在信道中直接传输<strong>数字基带信号</strong>，则称为数字基带传输，相应的系统称为数字基带传输系统。</p><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1gthuaibbdwj60ya0iijuz02.jpg" alt="常用编码" tabindex="0" loading="lazy"><figcaption>常用编码</figcaption></figure><p>前提：规定0为低电平，1为高电平。</p><h3 id="单级不归零码" tabindex="-1"><a class="header-anchor" href="#单级不归零码"><span>单级不归零码</span></a></h3><h3 id="双极不归零码" tabindex="-1"><a class="header-anchor" href="#双极不归零码"><span>双极不归零码</span></a></h3><h3 id="单级归零码" tabindex="-1"><a class="header-anchor" href="#单级归零码"><span>单级归零码</span></a></h3><h3 id="双极归零码" tabindex="-1"><a class="header-anchor" href="#双极归零码"><span>双极归零码</span></a></h3><h3 id="差分码" tabindex="-1"><a class="header-anchor" href="#差分码"><span>差分码</span></a></h3><h3 id="ami码" tabindex="-1"><a class="header-anchor" href="#ami码"><span>AMI码</span></a></h3><h3 id="双相码-曼切斯特码-与-差分双相码-差分曼切斯特码-100°" tabindex="-1"><a class="header-anchor" href="#双相码-曼切斯特码-与-差分双相码-差分曼切斯特码-100°"><span>双相码（曼切斯特码） 与 差分双相码（差分曼切斯特码） <mark>100°</mark> *</span></a></h3><p>双相码电平跳变规则：每位持续时间的**<u>中间时刻</u>**进行电平跳变。正电平跳到负电平表示比特1，负电平跳到正电平表示比特0。</p><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1gtr0u65df9j61kl0tkwla02-20240411175741737.jpg" alt="示例" tabindex="0" loading="lazy"><figcaption>示例</figcaption></figure><p>差分双相码（差分曼切斯特码）电平跳变规则：跳变仅表示<strong>时钟</strong>，利用码元开始处电平是否发生变化来表示数据，开始处有跳变表示<strong>比特1</strong>，无跳变表示<strong>比特0</strong>。</p><p>米勒码 <mark>*</mark></p><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1guwm9gr2xrj61s20u0dq202.jpg" alt="真题" tabindex="0" loading="lazy"><figcaption>真题</figcaption></figure><h2 id="信道容量-100°" tabindex="-1"><a class="header-anchor" href="#信道容量-100°"><span>信道容量 <mark>100°</mark> *</span></a></h2><p>信道容量：无差错传输信息的最大平均信息速率，衡量信道的传输能力。</p><h3 id="奈奎斯特公式" tabindex="-1"><a class="header-anchor" href="#奈奎斯特公式"><span>奈奎斯特公式</span></a></h3><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1guo7qkpd6mj62ho0p6th202.jpg" alt="奈奎斯特公式" tabindex="0" loading="lazy"><figcaption>奈奎斯特公式</figcaption></figure><h3 id="香农公式-100°" tabindex="-1"><a class="header-anchor" href="#香农公式-100°"><span>香农公式 <mark>100°</mark> *</span></a></h3><p>换算关系要记到！</p><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1guo80sngldj61ai0u0gsf02.jpg" alt="香农公式" tabindex="0" loading="lazy"><figcaption>香农公式</figcaption></figure><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1guwm28agqhj62e00kqafs02.jpg" alt="换算关系" tabindex="0" loading="lazy"><figcaption>换算关系</figcaption></figure><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1guwm3ikdvkj61xu0u0gto02.jpg" alt="image-20210928202514193" tabindex="0" loading="lazy"><figcaption>image-20210928202514193</figcaption></figure><h2 id="接口规程" tabindex="-1"><a class="header-anchor" href="#接口规程"><span>接口规程</span></a></h2><p>接口规程特性：</p><ul><li>机械特性。实体间硬件连接接口的机械特点。</li><li>电气特性。导线的电气连接及电路相关的特性。</li><li>功能特性。物理接口各条信号的用途。</li><li>规程特性。指明利用接口传输比特流的全过程，以及各项用于传输的事件发生的合法顺序。</li></ul><h1 id="网络安全" tabindex="-1"><a class="header-anchor" href="#网络安全"><span>网络安全</span></a></h1><p>简述什么是网络安全：</p><p>网络安全是指网络系统的硬件、软件、数据受到保护，不因偶然或恶意事件而导致破坏、泄露、更改，系统可运行，网络不中断。</p>',31),b={id:"数字签名",tabindex:"-1"},f={class:"header-anchor",href:"#数字签名"},k={href:"https://blog.csdn.net/qq_26566331/article/details/88185652?ops_request_misc=&request_id=&biz_id=102&utm_term=%E6%95%B0%E5%AD%97%E7%AD%BE%E5%90%8D&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-2-.nonecase&spm=1018.2226.3001.4187",target:"_blank",rel:"noopener noreferrer"},y=a('<p>简述数字签名应满足的要求：</p><ol><li>**机密性。**只有收方双方能理解报文内容</li><li>**消息完整性。**可检测消息是否被篡改。</li><li><strong>可访问性和可用性。</strong></li><li>**身份认证。**对数据来源进行确认。</li></ol><h2 id="目前网络面临的安全威胁" tabindex="-1"><a class="header-anchor" href="#目前网络面临的安全威胁"><span>目前网络面临的安全威胁</span></a></h2><p>简述目前网络面临的安全威胁：</p><ol><li>报文的窃听、假冒、劫持</li><li>拒绝服务、分布式拒绝服务</li><li>扫描端口，找出漏洞（漏扫）</li><li>分组嗅探</li></ol><h2 id="凯撒密码" tabindex="-1"><a class="header-anchor" href="#凯撒密码"><span>凯撒密码 <mark>*</mark></span></a></h2><p><em>很简单，往后移k位就能得到密文</em></p><h2 id="消息完整性" tabindex="-1"><a class="header-anchor" href="#消息完整性"><span>消息完整性 <mark>*</mark></span></a></h2><p>消息完整性检测方法，需要用到**<mark>密码散列函数</mark><strong>，该函数应具备以下</strong><mark>特性</mark>**：</p><ol><li><strong>算法公开</strong></li><li><strong>快速计算</strong></li><li>报文的多对一映射均能产生<strong>定长输出</strong></li><li><strong>无法预知报文的散列值</strong></li><li>不同报文<strong>不能产生相同散列值</strong></li></ol><p>简述消息完整性的检测方法：</p><p><strong>报文认证码MAC</strong>和<strong>数字签名</strong>。两种都需要用散列函数，并且能验证报文的源及完整性。一般用MD5或SHA-1检验消息的完整性。</p><h2 id="防火墙" tabindex="-1"><a class="header-anchor" href="#防火墙"><span>防火墙</span></a></h2><p>简述防火墙的分类：</p><p>分3类：</p><ul><li>无状态分组过滤器</li><li>有状态分组过滤器</li><li>应用网关</li></ul><p>其中，<strong>无状态分组过滤器</strong>是典型的部署在<strong>内部网络</strong>和<strong>网络边缘路由器</strong>上的防火墙。 <mark>*</mark></p><h2 id="网络安全协议" tabindex="-1"><a class="header-anchor" href="#网络安全协议"><span>网络安全协议</span></a></h2><p><strong>简述网络层的安全协议IPSec：</strong></p><p>IPSec有两种典型的传输模式：传输模式、隧道模式；</p><p>IPSec的核心协议有：AH协议、ESP协议；</p><p>两种模式两种协议有4种组合模式：</p><ol><li>传输模型AH</li><li>传输模式ESP</li><li>隧道模式AH</li><li>隧道模式ESP</li></ol><h2 id="vpn" tabindex="-1"><a class="header-anchor" href="#vpn"><span>VPN</span></a></h2><p>VPN的核心安全技术是：隧道</p><h1 id="无线与移动网络" tabindex="-1"><a class="header-anchor" href="#无线与移动网络"><span>无线与移动网络</span></a></h1><h2 id="ieee802-11" tabindex="-1"><a class="header-anchor" href="#ieee802-11"><span>IEEE802.11</span></a></h2><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gtqzrzbw8yj61xo0hktbu02.jpg" alt="image-20210823202449512" tabindex="0" loading="lazy"><figcaption>image-20210823202449512</figcaption></figure><blockquote><p><strong>标准一览 <mark>*</mark></strong></p></blockquote><table><thead><tr><th style="text-align:center;">标准</th><th style="text-align:center;">频率范围/GHz</th><th style="text-align:center;">速率</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>IEEE 802.11b</strong></td><td style="text-align:center;"><strong>2.4</strong></td><td style="text-align:center;"><strong>max=11Mbit/s</strong></td></tr><tr><td style="text-align:center;">IEEE 802.11a</td><td style="text-align:center;">5</td><td style="text-align:center;">max=54Mbit/s</td></tr><tr><td style="text-align:center;">IEEE 802.11g</td><td style="text-align:center;">2.4</td><td style="text-align:center;">max=54Mbit/s</td></tr><tr><td style="text-align:center;">IEEE 802.11n</td><td style="text-align:center;">2.4/5</td><td style="text-align:center;">max=600Mbit/s</td></tr></tbody></table><p><strong><mark>IEEE 802.11b</mark></strong> 无线局域网具有11Mbit/s的速率，工作在无需许可的2.4GHz的无线频谱上。</p><h2 id="蓝牙网络" tabindex="-1"><a class="header-anchor" href="#蓝牙网络"><span>蓝牙网络</span></a></h2><p>IEEE 802.15.1 是蓝牙网络，知道这个就行了。</p>',33);function _(x,z){const i=s("ExternalLinkIcon");return l(),g("div",null,[p,e("h2",h,[e("a",c,[e("span",null,[e("a",d,[t("基带传输"),n(i)]),t(),m,t(" * **")])])]),u,e("h2",b,[e("a",f,[e("span",null,[e("a",k,[t("数字签名"),n(i)])])])]),y])}const w=r(o,[["render",_],["__file","1物理层.html.vue"]]),v=JSON.parse('{"path":"/%E7%BD%91%E7%BB%9C%E5%8E%9F%E7%90%86/1%E7%89%A9%E7%90%86%E5%B1%82.html","title":"物理层","lang":"zh-CN","frontmatter":{"title":"物理层","order":2,"icon":"file","category":["网络原理","理论基础"],"description":"物理层 编码与调制 编码与调制编码与调制 基带传输 100° * ** 基带传输基带传输 在信道中直接传输数字基带信号，则称为数字基带传输，相应的系统称为数字基带传输系统。 常用编码常用编码 前提：规定0为低电平，1为高电平。 单级不归零码 双极不归零码 单级归零码 双极归零码 差分码 AMI码 双相码（曼切斯特码） 与 差分双相码（差分曼切斯特码） ...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%BD%91%E7%BB%9C%E5%8E%9F%E7%90%86/1%E7%89%A9%E7%90%86%E5%B1%82.html"}],["meta",{"property":"og:site_name","content":"郑振宁的数字资产中心"}],["meta",{"property":"og:title","content":"物理层"}],["meta",{"property":"og:description","content":"物理层 编码与调制 编码与调制编码与调制 基带传输 100° * ** 基带传输基带传输 在信道中直接传输数字基带信号，则称为数字基带传输，相应的系统称为数字基带传输系统。 常用编码常用编码 前提：规定0为低电平，1为高电平。 单级不归零码 双极不归零码 单级归零码 双极归零码 差分码 AMI码 双相码（曼切斯特码） 与 差分双相码（差分曼切斯特码） ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1gthudala2rj61ln0u07cy02.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-11T06:55:35.000Z"}],["meta",{"property":"article:author","content":"郑振宁"}],["meta",{"property":"article:modified_time","content":"2024-04-11T06:55:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"物理层\\",\\"image\\":[\\"https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1gthudala2rj61ln0u07cy02.jpg\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1gvi69r44lfj60wb0u0wiv02-20240411175526959.jpg\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1gthuaibbdwj60ya0iijuz02.jpg\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1gtr0u65df9j61kl0tkwla02-20240411175741737.jpg\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1guwm9gr2xrj61s20u0dq202.jpg\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1guo7qkpd6mj62ho0p6th202.jpg\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1guo80sngldj61ai0u0gsf02.jpg\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1guwm28agqhj62e00kqafs02.jpg\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1guwm3ikdvkj61xu0u0gto02.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1gtqzrzbw8yj61xo0hktbu02.jpg\\"],\\"dateModified\\":\\"2024-04-11T06:55:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"编码与调制","slug":"编码与调制","link":"#编码与调制","children":[]},{"level":2,"title":"基带传输 100° * **","slug":"基带传输-100°","link":"#基带传输-100°","children":[{"level":3,"title":"单级不归零码","slug":"单级不归零码","link":"#单级不归零码","children":[]},{"level":3,"title":"双极不归零码","slug":"双极不归零码","link":"#双极不归零码","children":[]},{"level":3,"title":"单级归零码","slug":"单级归零码","link":"#单级归零码","children":[]},{"level":3,"title":"双极归零码","slug":"双极归零码","link":"#双极归零码","children":[]},{"level":3,"title":"差分码","slug":"差分码","link":"#差分码","children":[]},{"level":3,"title":"AMI码","slug":"ami码","link":"#ami码","children":[]},{"level":3,"title":"双相码（曼切斯特码） 与 差分双相码（差分曼切斯特码） 100° *","slug":"双相码-曼切斯特码-与-差分双相码-差分曼切斯特码-100°","link":"#双相码-曼切斯特码-与-差分双相码-差分曼切斯特码-100°","children":[]}]},{"level":2,"title":"信道容量 100°  *","slug":"信道容量-100°","link":"#信道容量-100°","children":[{"level":3,"title":"奈奎斯特公式","slug":"奈奎斯特公式","link":"#奈奎斯特公式","children":[]},{"level":3,"title":"香农公式 100° *","slug":"香农公式-100°","link":"#香农公式-100°","children":[]}]},{"level":2,"title":"接口规程","slug":"接口规程","link":"#接口规程","children":[]},{"level":2,"title":"数字签名","slug":"数字签名","link":"#数字签名","children":[]},{"level":2,"title":"目前网络面临的安全威胁","slug":"目前网络面临的安全威胁","link":"#目前网络面临的安全威胁","children":[]},{"level":2,"title":"凯撒密码 *","slug":"凯撒密码","link":"#凯撒密码","children":[]},{"level":2,"title":"消息完整性 *","slug":"消息完整性","link":"#消息完整性","children":[]},{"level":2,"title":"防火墙","slug":"防火墙","link":"#防火墙","children":[]},{"level":2,"title":"网络安全协议","slug":"网络安全协议","link":"#网络安全协议","children":[]},{"level":2,"title":"VPN","slug":"vpn","link":"#vpn","children":[]},{"level":2,"title":"IEEE802.11","slug":"ieee802-11","link":"#ieee802-11","children":[]},{"level":2,"title":"蓝牙网络","slug":"蓝牙网络","link":"#蓝牙网络","children":[]}],"git":{"createdTime":1712818432000,"updatedTime":1712818535000,"contributors":[{"name":"一步","email":"zzn_workmail@163.com","commits":2}]},"readingTime":{"minutes":3.68,"words":1103},"filePathRelative":"网络原理/1物理层.md","localizedDate":"2024年4月11日","excerpt":"\\n<h2>编码与调制</h2>\\n<figure><img src=\\"https://gitee.com/yibu_zzn/images/raw/master/img/008i3skNgy1gthudala2rj61ln0u07cy02.jpg\\" alt=\\"编码与调制\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>编码与调制</figcaption></figure>\\n<h2><a class=\\"header-anchor\\" href=\\"#基带传输-100°\\"><span></span></a><a href=\\"https://www.bilibili.com/video/BV1c4411d7jb?p=17\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">基带传输</a> <mark>100°</mark> * **</h2>","autoDesc":true}');export{w as comp,v as data};
