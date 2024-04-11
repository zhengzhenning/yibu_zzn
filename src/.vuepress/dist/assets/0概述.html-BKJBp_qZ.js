import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as g,o as r,c as l,a as t,b as a,d as s,e}from"./app-BDChAbXv.js";const p={},o=t("h1",{id:"概述",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#概述"},[t("span",null,"概述")])],-1),m=t("h1",{id:"体系结构",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#体系结构"},[t("span",null,"体系结构")])],-1),c={href:"https://www.bilibili.com/video/BV1c4411d7jb?p=7",target:"_blank",rel:"noopener noreferrer"},h=e('<figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411143227787.png" alt="原理体系结构" tabindex="0" loading="lazy"><figcaption>原理体系结构</figcaption></figure><h2 id="osi参考模型" tabindex="-1"><a class="header-anchor" href="#osi参考模型"><span>OSI参考模型</span></a></h2><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411143325771.png" alt="image-20240411143325771" tabindex="0" loading="lazy"><figcaption>image-20240411143325771</figcaption></figure><p>OSI参考模型（<strong>自下而上：物数网传会表应</strong>）每一层提供什么样的服务，以及解决什么问题要<mark>烂熟于心</mark>：</p><table><thead><tr><th style="text-align:center;">通信功能</th><th style="text-align:center;">功能/服务</th><th style="text-align:center;">协议数据单元</th><th style="text-align:center;">图</th><th style="text-align:center;"></th></tr></thead><tbody><tr><td style="text-align:center;">物理层</td><td style="text-align:center;">在传输介质上<br>实现无结构比特流传输</td><td style="text-align:center;">比特流</td><td style="text-align:center;"><img src="https://gitee.com/yibu_zzn/images/raw/master/img/008vxvgGgy1h7r50uimorj31p50u0n2f.jpg" alt="008vxvgGgy1h7r50uimorj31p50u0n2f" loading="lazy"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">数据链路层</td><td style="text-align:center;">实现相邻结点间数据的可靠传输。<br>组帧。链路接入。<br>可靠交付。差错控制。</td><td style="text-align:center;">数据<strong>帧</strong></td><td style="text-align:center;"><img src="https://gitee.com/yibu_zzn/images/raw/master/img/008vxvgGgy1h7r50sjpwzj31re0u07ac.jpg" alt="008vxvgGgy1h7r50sjpwzj31re0u07ac" loading="lazy"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">网络层</td><td style="text-align:center;">路由和转发</td><td style="text-align:center;">分组</td><td style="text-align:center;"><img src="https://gitee.com/yibu_zzn/images/raw/master/img/008vxvgGgy1h7r50qsiw1j31s20u0wjc.jpg" alt="008vxvgGgy1h7r50qsiw1j31s20u0wjc" loading="lazy"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">传输层</td><td style="text-align:center;">寻址、<br>报文的分组、重组、差错检测；<br>端到端的可靠数据传输、<br>流量控制、拥塞控制；<br>复用与分解</td><td style="text-align:center;">数据<strong>段</strong>/报文<strong>段</strong></td><td style="text-align:center;"><img src="https://gitee.com/yibu_zzn/images/raw/master/img/008vxvgGgy1h7r50romuqj31po0u0tdb.jpg" alt="008vxvgGgy1h7r50romuqj31po0u0tdb" loading="lazy"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">会话层</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">表示层</td><td style="text-align:center;">-</td><td style="text-align:center;"></td><td style="text-align:center;">-</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">应用层</td><td style="text-align:center;">-</td><td style="text-align:center;">报文</td><td style="text-align:center;">-</td><td style="text-align:center;"></td></tr></tbody></table><h2 id="tcp-ip-参考模型" tabindex="-1"><a class="header-anchor" href="#tcp-ip-参考模型"><span>TCP/IP 参考模型</span></a></h2><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/008vxvgGgy1h7r50w4mdij322u0s6tf5.jpg" alt="TCP/IP参考模型" tabindex="0" loading="lazy"><figcaption>TCP/IP参考模型</figcaption></figure><table><thead><tr><th>通信功能</th><th>主要协议</th><th>说明</th></tr></thead><tbody><tr><td>网络接口层</td><td>不管。</td><td></td></tr><tr><td>网络互连层*</td><td>BGP、OSPF、RIP、IGMP</td><td>是TCP/IP的核心</td></tr><tr><td>传输层</td><td>TCP/UDP</td><td></td></tr><tr><td>应用层</td><td>HTTP、FTP、SMTP、POP3</td><td></td></tr></tbody></table><h1 id="网络概述" tabindex="-1"><a class="header-anchor" href="#网络概述"><span>网络概述</span></a></h1><h2 id="网络结构-100°" tabindex="-1"><a class="header-anchor" href="#网络结构-100°"><span>网络结构 <mark>100°</mark></span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20240410170752503.png" alt="网络结构" tabindex="0" loading="lazy"><figcaption>网络结构</figcaption></figure><p>三个关键概念：网络边缘、接入网络、网络核心。</p><p><strong>网络边缘：为用户提供网络应用服务。</strong></p><p><strong>接入网络：实现网络边缘与网络核心的连接与接入。</strong></p><p><strong>核心网络：实现网络边缘中主机间的数据中继与转发。</strong></p><h2 id="网络分类" tabindex="-1"><a class="header-anchor" href="#网络分类"><span>网络分类 <mark>*</mark></span></a></h2><p>按覆盖范围：个域、局域、城域、广域</p><p>按拓扑结构：星、总、环、网、树、混。 [应试]悉知拓扑结构的优缺点，以及应用场景和应用情况，比如：网状结构多应用于广域网、核心网络。</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20240410170922569.png" alt="拓扑结构图例" tabindex="0" loading="lazy"><figcaption>拓扑结构图例</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20240410170933864.png" alt="拓扑结构优缺点" tabindex="0" loading="lazy"><figcaption>拓扑结构优缺点</figcaption></figure><p>一张图说清网络拓扑</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/拓扑结构导图.jpeg" alt="拓扑结构导图" tabindex="0" loading="lazy"><figcaption>拓扑结构导图</figcaption></figure><h2 id="数据交换技术-100°" tabindex="-1"><a class="header-anchor" href="#数据交换技术-100°"><span>数据交换技术 <mark>100°</mark> *</span></a></h2><p><strong>数据交换网络</strong>是一个数据中继和转发的“中间网络”，这个网络不关心所传输的数据内容，<strong>只提供数据中继与交换的功能</strong>。网络的目的就是实现主机间数据传输、信息交换。</p><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/数据交换技术.jpeg" alt="数据交换技术" tabindex="0" loading="lazy"><figcaption>数据交换技术</figcaption></figure><p>数据交换技术有3种：</p><ol><li>电路交换</li><li>报文交换</li><li>分组交换</li></ol><p>衍生出3种网络：</p><ol><li>电路交换网络（最早用）</li><li>报文交换网络（最没有）</li><li>分组交换网络（最有用）（*，报文交换网络的升级版）</li></ol><h3 id="电路交换" tabindex="-1"><a class="header-anchor" href="#电路交换"><span>电路交换</span></a></h3><blockquote><p>原理及特点</p></blockquote><h3 id="报文交换" tabindex="-1"><a class="header-anchor" href="#报文交换"><span>报文交换</span></a></h3><blockquote><p>原理及特点</p></blockquote><h3 id="分组交换" tabindex="-1"><a class="header-anchor" href="#分组交换"><span>分组交换</span></a></h3><blockquote><p>原理及特点</p></blockquote><h2 id="网络性能-100°" tabindex="-1"><a class="header-anchor" href="#网络性能-100°"><span>网络性能 <mark>100°</mark> *</span></a></h2><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/网络性能指标.jpeg" alt="网络性能指标" tabindex="0" loading="lazy"><figcaption>网络性能指标</figcaption></figure><h2 id="单位换算-100°" tabindex="-1"><a class="header-anchor" href="#单位换算-100°"><span>单位换算 <mark>100°</mark> *</span></a></h2><h3 id="时间单位换算" tabindex="-1"><a class="header-anchor" href="#时间单位换算"><span>时间单位换算</span></a></h3><p>秒单位换算：ms(毫秒),μs(微秒),ns(纳秒),ps(皮秒)</p><p>1,000,000 微秒 = 1秒</p><h3 id="数据量单位换算" tabindex="-1"><a class="header-anchor" href="#数据量单位换算"><span>数据量单位换算</span></a></h3><h3 id="数据率单位换算" tabindex="-1"><a class="header-anchor" href="#数据率单位换算"><span>数据率单位换算</span></a></h3><h2 id="速率-带宽" tabindex="-1"><a class="header-anchor" href="#速率-带宽"><span>速率（带宽）</span></a></h2><p><strong>比特</strong>：计算机中<mark>数据量的单位</mark>。即信息论中信息量的单位。一个比特即为二进制数字中的0或者1。</p><p><strong>常用的数据量单位</strong>：</p><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411114216367.png" alt="常用的数据量单位" tabindex="0" loading="lazy"><figcaption>常用的数据量单位</figcaption></figure><p><strong>速率</strong>：<strong>单位时间内传输的数据量</strong>，描述网络传输数据的快慢单位：bit/s（位每秒），也叫<mark>比特率</mark>。</p><p>其他单位有bit/s 、 Mbit/s 、 Gbit/s 、 Tbit/s，</p><p>1 Tbit/s=10<sup>3</sup> Gbit/s = 10<sup>6</sup> Mbit/s = 10<sup>9</sup> kbit/s =10<sup>12</sup> bit/s，</p><p>T = 10<sup>12</sup> (bit)； G = 10<sup>9</sup>(bit)； M = 10<sup>6</sup>(bit)； k = 10<sup>3</sup>(bit)。</p><p><strong>常用的数据率单位</strong>：</p><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411114725015.png" alt="常用的数据率单位" tabindex="0" loading="lazy"><figcaption>常用的数据率单位</figcaption></figure><p>数据率与数据量的计算示例：</p><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411114755731.png" alt="计算示例" tabindex="0" loading="lazy"><figcaption>计算示例</figcaption></figure><h2 id="时延" tabindex="-1"><a class="header-anchor" href="#时延"><span>时延</span></a></h2><p>计算机中的时延：指数据从网络的一个结点到达另一个结点所需的时间，是评价<strong>网络性能</strong>的<strong>重要指标</strong>。</p><ol><li><strong>跳步</strong>：两结点间的直接链路，称“跳步”。</li><li>分组的每跳传输过程产生4类时延：结点处理时延、排队时延、传输时延、传播时延。</li></ol><h3 id="传输时延" tabindex="-1"><a class="header-anchor" href="#传输时延"><span>传输时延</span></a></h3><p>概念：从传输该分组第一位开始，到传输完该分组最后一位为止。</p><p>公式：传输时延d<sub>t</sub> = 分组长度 L / 链路带宽 R</p><p>设：分组长度L bit ，链路带宽 R bit/s ，则：传输时延d<sub>t</sub> = L/R 。例如：L=3600bit R=600bit/s，d<sub>t</sub>=3600/600=6s</p><h3 id="传播时延" tabindex="-1"><a class="header-anchor" href="#传播时延"><span>传播时延</span></a></h3><p>概念：信号，经过一定距离的物理链路到接收端所需的时间。</p><p>公式：传播时延d<sub>P</sub> = 链路长度D m / 信号传播速度V m/s</p><p>==应试技巧：==注意单位换算，记住：<strong>时间=路程/速度</strong>，在计算机世界里，也遵照这这个准则。</p><p>设：两结点间的物理链路长度为D m ，链路带宽 V m/s ，则：传播时延 = D/V 。</p><p>例如：D=3000m，V=150m/s，d<sub>p</sub>=3000/150=20s</p><h2 id="传播-时延带宽积" tabindex="-1"><a class="header-anchor" href="#传播-时延带宽积"><span>（传播）时延带宽积</span></a></h2><p>概念：时延带宽积，表示<strong>一段传输链路可容纳的数据位数</strong>。</p><p>公式：时延带宽积G = 传播时延 d<sub>P</sub> ✖️ 带宽 R</p><p>==应试技巧：==传播时延✖️带宽。时延带宽积可以用来表示一段链路可容纳的数据位数。</p><p>G=d<sub>p</sub>✖️R​</p><h2 id="丢包率-η" tabindex="-1"><a class="header-anchor" href="#丢包率-η"><span>丢包率(𝜼)</span></a></h2><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411115245645.png" alt="丢包率计算公式" tabindex="0" loading="lazy"><figcaption>丢包率计算公式</figcaption></figure><h2 id="最大吞吐量-100°" tabindex="-1"><a class="header-anchor" href="#最大吞吐量-100°"><span>最大吞吐量 <mark>100°</mark> *</span></a></h2><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411140649950.png" alt="最大吞吐量公式" tabindex="0" loading="lazy"><figcaption>最大吞吐量公式</figcaption></figure><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1guwo4xllsaj61ay0jujx702.jpg" alt="image-20210928213547772" tabindex="0" loading="lazy"><figcaption>image-20210928213547772</figcaption></figure>',78),d=t("p",{class:"katex-block"},[t("span",{class:"katex-display"},[t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("semantics",null,[t("mrow",null,[t("mi",null,"T"),t("mi",null,"h"),t("mi",null,"r"),t("mo",null,"="),t("mi",null,"m"),t("mi",null,"i"),t("mi",null,"n"),t("mo",{stretchy:"false"},"("),t("mi",null,"R"),t("mn",null,"1"),t("mo",{separator:"true"},","),t("mi",null,"R"),t("mn",null,"2"),t("mo",{separator:"true"},","),t("mi",{mathvariant:"normal"},"."),t("mi",{mathvariant:"normal"},"."),t("mi",{mathvariant:"normal"},"."),t("mo",{separator:"true"},","),t("mi",null,"R"),t("mi",null,"n"),t("mo",{stretchy:"false"},")"),t("mtext",null,"；其中，"),t("mi",null,"R"),t("mn",null,"1"),t("mo",{separator:"true"},","),t("mi",null,"R"),t("mn",null,"2"),t("mo",{separator:"true"},","),t("mi",{mathvariant:"normal"},"."),t("mi",{mathvariant:"normal"},"."),t("mi",{mathvariant:"normal"},"."),t("mo",{separator:"true"},","),t("mi",null,"R"),t("mi",null,"n"),t("mtext",null,"是各链路的数据传输速率")]),t("annotation",{encoding:"application/x-tex"}," Thr=min(R1,R2,...,Rn) ； 其中，R1,R2,...,Rn是各链路的数据传输速率 ")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6944em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),t("span",{class:"mord mathnormal"},"h"),t("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),t("span",{class:"mord mathnormal"},"min"),t("span",{class:"mopen"},"("),t("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),t("span",{class:"mord"},"1"),t("span",{class:"mpunct"},","),t("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),t("span",{class:"mord"},"2"),t("span",{class:"mpunct"},","),t("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),t("span",{class:"mord"},"..."),t("span",{class:"mpunct"},","),t("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),t("span",{class:"mord mathnormal"},"n"),t("span",{class:"mclose"},")"),t("span",{class:"mord cjk_fallback"},"；其中，"),t("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),t("span",{class:"mord"},"1"),t("span",{class:"mpunct"},","),t("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),t("span",{class:"mord"},"2"),t("span",{class:"mpunct"},","),t("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),t("span",{class:"mord"},"..."),t("span",{class:"mpunct"},","),t("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),t("span",{class:"mord mathnormal"},"n"),t("span",{class:"mord cjk_fallback"},"是各链路的数据传输速率")])])])])],-1),u=e('<figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411141843200.png" alt="例题" tabindex="0" loading="lazy"><figcaption>例题</figcaption></figure><h2 id="可靠数据传输-100°" tabindex="-1"><a class="header-anchor" href="#可靠数据传输-100°"><span>可靠数据传输 <mark>100°</mark> *</span></a></h2><p><em>不仅限于传输层，<mark>可靠数据传输原理在整个网络体系都适用</mark>。</em></p><blockquote><p><strong>原理</strong></p></blockquote><p>不可靠传输的主要表现：<strong>比特差错</strong>、<strong>乱序</strong>、<strong>数据丢失</strong>。</p><p>而<strong>差错检测</strong>、<strong>确认</strong>、<strong>重传</strong>、<strong>序号</strong>、<strong>计时器</strong>是实现可靠数据传输的主要措施</p><ul><li><p><strong>差错检测</strong>：用 <mark>差错编码</mark> 检测数据比特。</p></li><li><p><strong>确认</strong>：收方 向 发方 <mark>反馈数据接收情况。</mark></p></li><li><p><strong>重传</strong>： 发方 向 收方 <mark>重传未正确接收</mark>的数据。</p></li><li><p><strong>序号</strong>：保证数据<mark>按序</mark>提交。</p></li><li><p><strong>计时器</strong>：解决<mark>数据丢失</mark>问题。</p></li></ul><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gudymwiu1lj60wk050aag02.jpg" alt="IMG_06C20CAE7BE3-1" tabindex="0" loading="lazy"><figcaption>IMG_06C20CAE7BE3-1</figcaption></figure><h3 id="停-等协议" tabindex="-1"><a class="header-anchor" href="#停-等协议"><span>停-等协议</span></a></h3>',9),b={href:"https://www.bilibili.com/video/BV1c4411d7jb/?p=25",target:"_blank",rel:"noopener noreferrer"},f=t("strong",null,"最简单的ARQ自动重传协议",-1),y=e('<p>信道利用率</p><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411141945075.png" alt="image-20240411141945075" tabindex="0" loading="lazy"><figcaption>image-20240411141945075</figcaption></figure><p>说明：</p><ul><li>T<sub>D</sub>：发送数据的时延；</li><li>T<sub>A</sub> ：发送ACK的时延；</li><li>RTT：收发往返时间；</li></ul><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411142037258.png" alt="image-20240411142037258" tabindex="0" loading="lazy"><figcaption>image-20240411142037258</figcaption></figure><ul><li>滑动窗口协议 <ul><li>GBN协议</li><li>SR协议</li></ul></li></ul><p><em>收发双方都要维护一个窗口，其中W<sub>T</sub>为发方窗口，W<sub>R</sub>为收方窗口。</em></p>',7),k={id:"gbn协议-接收窗口-1",tabindex:"-1"},x={class:"header-anchor",href:"#gbn协议-接收窗口-1"},z={href:"https://www.bilibili.com/video/BV1c4411d7jb/?p=26",target:"_blank",rel:"noopener noreferrer"},_=t("strong",null,"GBN协议（接收窗口=1）",-1),v=e('<figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411142131542.png" alt="image-20240411142131542" tabindex="0" loading="lazy"><figcaption>image-20240411142131542</figcaption></figure><p>无差错情况：</p><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411142236425.png" alt="image-20240411142236425" tabindex="0" loading="lazy"><figcaption>image-20240411142236425</figcaption></figure><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411142307741.png" alt="image-20240411142307741" tabindex="0" loading="lazy"><figcaption>image-20240411142307741</figcaption></figure><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411142717124.png" alt="image-20240411142717124" tabindex="0" loading="lazy"><figcaption>image-20240411142717124</figcaption></figure><p>即，GBN协议模型：</p><figure><img src="https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411143027156.png" alt="image-20240411143027156" tabindex="0" loading="lazy"><figcaption>image-20240411143027156</figcaption></figure><p>发方窗口取值：1 ＜ W<sub>T</sub> ≤ 2<sup>n</sup>-1, n是分组序号的比特数量</p><p>收方窗口取值： W<sub>R</sub> = 1 <mark>GBN协议，的收方窗口取值仅可为1</mark></p><p>GBN采用的是<strong>累计确认</strong>方式，判断收方正确接收多少个数据分组。ACK<sub>n</sub>代表收方正确接收序号n及之前数据分组。比如：<img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gpf3cpje6kj31mi0kogqk.jpg" alt="累计确认" loading="lazy"></p><p>发方接收到ACK<sub>4</sub> <img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gpf3cqh1zrj301q018dfq.jpg" alt="ACK4" style="zoom:25%;">,代表收方正确接收序号4及之前的数据分组。</p>',11),j={id:"sr协议-接收窗口-1",tabindex:"-1"},w={class:"header-anchor",href:"#sr协议-接收窗口-1"},P={href:"https://www.bilibili.com/video/BV1c4411d7jb/?p=27",target:"_blank",rel:"noopener noreferrer"},T=t("strong",null,"SR协议（接收窗口＞1）",-1),C=e('<blockquote><p>发方窗口取值：1 ＜ W<sub>T</sub> ≤ 2<sup>n</sup>-1, n是分组序号的比特数量</p><p>收方窗口取值：1＜W<sub>R</sub>≤W<sub>T</sub></p></blockquote><h2 id="信道利用率-100°" tabindex="-1"><a class="header-anchor" href="#信道利用率-100°"><span>信道利用率 <mark>100°</mark> **</span></a></h2><p>信道利用率：<strong>发方利用信道发送数据的时间</strong> / <strong>总时间</strong>。</p><p>设：<strong>发方窗口：W<sub>s</sub></strong> ； 发方发送报文的时间（传输时延）: t<sub>Seg</sub>；收方发送ACK的时间：t<sub>ACK</sub></p><p>则：信道利用率公式：U<sub>Sender</sub> =W<sub>s</sub> + t<sub>Seg</sub> / t<sub>Seg</sub> + t<sub>ACK</sub> +RTT</p><p>结论：<strong><mark>信道利用率与发送窗口大小有关</mark></strong>。即W<sub>s</sub> 足够大，可使 W<sub>s</sub> + t<sub>Seg</sub> ≥ t<sub>Seg</sub> + t<sub>ACK</sub> +RTT ，此时信道利用率100%。</p><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsl6ce36s2j30o204i752.jpg" alt="IMG_4E83BC58AEAD-1" tabindex="0" loading="lazy"><figcaption>IMG_4E83BC58AEAD-1</figcaption></figure><p><strong>题</strong></p><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsl7mpkxrtj30q104yaah.jpg" alt="IMG_882ED6C0C646-1" tabindex="0" loading="lazy"><figcaption>IMG_882ED6C0C646-1</figcaption></figure><p>解题思路：信道利用率公式；滑动窗口协议的窗口大小与序列号空间存在约束关系：W<sub>S</sub> +W<sub>R</sub> ≤ 2<sup>k</sup>。</p><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsl80rxy3ij312i0qfad9.jpg" alt="IMG_B76B945C4593-1" tabindex="0" loading="lazy"><figcaption>IMG_B76B945C4593-1</figcaption></figure><p><strong>题</strong></p><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsl82w3ndaj30pb058mxp.jpg" alt="IMG_47D5F23B3DAD-1" tabindex="0" loading="lazy"><figcaption>IMG_47D5F23B3DAD-1</figcaption></figure><h2 id="网络应用" tabindex="-1"><a class="header-anchor" href="#网络应用"><span>网络应用</span></a></h2>',14),B={id:"dns域名系统-100°",tabindex:"-1"},E={class:"header-anchor",href:"#dns域名系统-100°"},N={href:"https://www.icourse163.org/learn/HIT-154005?tid=1465409451#/learn/content?type=detail&id=1244251694",target:"_blank",rel:"noopener noreferrer"},I=t("mark",null,"100°",-1),G=e(`<figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvhdp56ixlj60u013qn1802.jpg" alt="域名系统（DNS）" tabindex="0" loading="lazy"><figcaption>域名系统（DNS）</figcaption></figure><p>将域名解析为IP地址，因为用户总是记不住IP地址，所以需要域名系统来完成这个任务。我能记住www.baidu.com，但记不住112.34.113.2。</p><p>使用host解析域名：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>host www.baidu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1grgrbjmff6j315u09qtfn.jpg" alt="image-20210613171555156" tabindex="0" loading="lazy"><figcaption>image-20210613171555156</figcaption></figure><h4 id="域名分类" tabindex="-1"><a class="header-anchor" href="#域名分类"><span>域名分类</span></a></h4><p>根域名服务器、顶级域名服务器、权威域名服务器、中间域名服务器</p><h4 id="域名服务器" tabindex="-1"><a class="header-anchor" href="#域名服务器"><span><strong>域名服务器</strong></span></a></h4><p>一个服务器所负责管辖的范围称为<mark>区（zone）</mark>。每个区会设置相应的<mark>权威域名服务器</mark>，用以<strong>保存域名与ip的映射关系</strong>。</p><p>任何一台主机在进行网络地址配置时，都会配置<mark>默认域名服务器</mark>。</p><p>**根域名服务器（a<sub>m）：**最重要、数量极其有限，每个根域名服务器知道所有顶级域名服务器的域名和IP地址，在因特网是有13个不同IP地址的根域名服务器，从a</sub>m，比如a.rootservers.net b.rootservers.net ··· m.rootservers.net。</p><p>**顶级域名服务器：**管理在该顶级域名服务器注册的所有二级域名。</p><p>**权威域名服务器：**负责一个<mark>区</mark>的域名服务器，保存该区中的所有主机的<mark>域名到IP地址的映射</mark>。任何一个拥有域名的主机，其域名与IP的映射关系都存储在网络的权威域名服务器上。</p><p><strong>中间域名服务器：</strong></p><h4 id="域名解析" tabindex="-1"><a class="header-anchor" href="#域名解析"><span>域名解析</span></a></h4><ul><li>迭代解析</li><li>递归解析</li></ul><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gufb44qvncj61i10u0dst02.jpg" alt="image-20210913211036526" tabindex="0" loading="lazy"><figcaption>image-20210913211036526</figcaption></figure><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gufb4rdmykj61gz0u0gx602.jpg" alt="image-20210913211112835" tabindex="0" loading="lazy"><figcaption>image-20210913211112835</figcaption></figure><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1guwos7n45rj61ks0q2gqy02.jpg" alt="image-20210928215810098" tabindex="0" loading="lazy"><figcaption>image-20210928215810098</figcaption></figure><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gv17t60rhlj616m0luagk02.jpg" alt="image-20211002195844242" tabindex="0" loading="lazy"><figcaption>image-20211002195844242</figcaption></figure><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span>Cookie *</span></a></h3>`,21),q=t("strong",null,"Cookie",-1),R={href:"https://blog.csdn.net/u010084228/article/details/78269345",target:"_blank",rel:"noopener noreferrer"},A=e('<p><strong>Cookie用途</strong>（1904卷简答：Cookie的用途）</p><ol><li>使用Cookie ID 统计网站的实际访问人数</li><li>使用Cookie限制某些特定用户访问</li><li>使用Cookie存储用户的行为及偏好</li><li>使用Cookie记录登录账户的信息</li><li>使用Cookie实现购物车功能</li></ol><h3 id="http-100°" tabindex="-1"><a class="header-anchor" href="#http-100°"><span>HTTP <mark>100°</mark> *</span></a></h3><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gufase42mkj60pk0gymy502.jpg" alt="HTTP" tabindex="0" loading="lazy"><figcaption>HTTP</figcaption></figure><ul><li><strong>非持久连接</strong>：每一次请求都要重新建立连接。</li><li><strong>持久连接</strong>： <ol><li>非流水式：接到请求响应后，才能发出下一个请求。</li><li>流水式：无需等待请求响应即可连续依次发送请求。</li></ol></li></ul><p>​</p><h3 id="电子邮件-100°" tabindex="-1"><a class="header-anchor" href="#电子邮件-100°"><span>电子邮件 <mark>100°</mark> *</span></a></h3><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvhdw8c0wfj60ux0u0goy02.jpg" alt="Email" tabindex="0" loading="lazy"><figcaption>Email</figcaption></figure><p>电子邮件系统结构：主要包括邮件服务器、简单邮件传输协议（SMTP）、用户代理、邮件读取协议。</p><ul><li>邮件服务器：发送和接收邮件，是电子邮件体系结构的核心。</li><li><strong>邮件传输协议（SMTP25）</strong>：实现邮件服务器间发送邮件的应用层协议。</li><li>用户代理：为用户提供使用电子邮件的接口，典型的有：Outlook、Apple Mail、Fox Mail</li><li><strong>邮件读取协议</strong>：POP3、IMAP、HTTP</li></ul><p><strong>MIME</strong></p><p>MIME定义了将非7位ASCII码内容转换为7位ASCII码的编码规则。</p><h3 id="ftp-100°" tabindex="-1"><a class="header-anchor" href="#ftp-100°"><span>FTP <mark>100°</mark> *</span></a></h3><p>文件传输协议（FTP）可实现两主机间<strong>文件互传</strong>。</p><p><strong>带外控制</strong>：控制命令与数据分离，即使用两条TCP连接分别传输<strong>控制命令</strong>与<strong>数据</strong>。</p><p>FTP与端口21建立<strong>持久连接</strong>，用于传输控制命令。</p><p>FTP与端口20建立<strong>非持久连接</strong>，用于传输数据。</p><h3 id="p2p" tabindex="-1"><a class="header-anchor" href="#p2p"><span>P2P</span></a></h3><h3 id="socket" tabindex="-1"><a class="header-anchor" href="#socket"><span>Socket</span></a></h3><p><strong>api</strong></p>',20),S={href:"https://blog.csdn.net/yam_sunshine/article/details/95502205",target:"_blank",rel:"noopener noreferrer"},D=e('<p><strong>基于TPC(2010)</strong></p><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1guo8pshdgnj61cm0u0wna02.jpg" alt="image-20210921143718562" tabindex="0" loading="lazy"><figcaption>image-20210921143718562</figcaption></figure><p><strong>基于UDP(2104)</strong></p><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1guo8qalsywj618y0u0jzf02.jpg" alt="image-20210921143747705" tabindex="0" loading="lazy"><figcaption>image-20210921143747705</figcaption></figure><blockquote><p>套接字类型</p></blockquote><ul><li>流式套接字 —— TCP</li><li>数据报式套接字 —— UDP</li><li>原始套接字</li></ul>',6);function M(F,W){const i=g("ExternalLinkIcon");return r(),l("div",null,[o,m,t("ul",null,[t("li",null,[t("a",c,[a("网络体系结构介绍"),s(i)])])]),h,d,u,t("p",null,[t("em",null,[t("a",b,[a("停-等协议"),s(i)]),a("是"),f,a("。")])]),y,t("h3",k,[t("a",x,[t("span",null,[t("a",z,[_,s(i)])])])]),v,t("h3",j,[t("a",w,[t("span",null,[t("a",P,[T,s(i)])])])]),C,t("h3",B,[t("a",E,[t("span",null,[t("a",N,[a("DNS"),s(i)]),a("域名系统 "),I,a(" **")])])]),G,t("p",null,[q,a("：小型文本文件。由Web服务器生成，发给浏览器。并存储在用户本地的数据。Web应用引入Cookie机制，是为了跟踪用户行为。关于Cookie技术参看"),t("a",R,[a("这篇"),s(i)]),a("。")]),A,t("p",null,[a("参考"),t("a",S,[a("这篇"),s(i)]),a("。")]),D])}const K=n(p,[["render",M],["__file","0概述.html.vue"]]),H=JSON.parse('{"path":"/%E7%BD%91%E7%BB%9C%E5%8E%9F%E7%90%86/0%E6%A6%82%E8%BF%B0.html","title":"概述","lang":"zh-CN","frontmatter":{"title":"概述","order":0,"icon":"file","category":["网络原理","理论基础"],"description":"概述 体系结构 网络体系结构介绍 原理体系结构原理体系结构 OSI参考模型 image-20240411143325771image-20240411143325771 OSI参考模型（自下而上：物数网传会表应）每一层提供什么样的服务，以及解决什么问题要烂熟于心： TCP/IP 参考模型 TCP/IP参考模型TCP/IP参考模型 网络概述 网络结构 1...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%BD%91%E7%BB%9C%E5%8E%9F%E7%90%86/0%E6%A6%82%E8%BF%B0.html"}],["meta",{"property":"og:site_name","content":"郑振宁的数字资产中心"}],["meta",{"property":"og:title","content":"概述"}],["meta",{"property":"og:description","content":"概述 体系结构 网络体系结构介绍 原理体系结构原理体系结构 OSI参考模型 image-20240411143325771image-20240411143325771 OSI参考模型（自下而上：物数网传会表应）每一层提供什么样的服务，以及解决什么问题要烂熟于心： TCP/IP 参考模型 TCP/IP参考模型TCP/IP参考模型 网络概述 网络结构 1..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411143227787.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"郑振宁"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"概述\\",\\"image\\":[\\"https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411143227787.png\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411143325771.png\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/008vxvgGgy1h7r50uimorj31p50u0n2f.jpg\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/008vxvgGgy1h7r50sjpwzj31re0u07ac.jpg\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/008vxvgGgy1h7r50qsiw1j31s20u0wjc.jpg\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/008vxvgGgy1h7r50romuqj31po0u0tdb.jpg\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/008vxvgGgy1h7r50w4mdij322u0s6tf5.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20240410170752503.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20240410170922569.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20240410170933864.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/%E6%8B%93%E6%89%91%E7%BB%93%E6%9E%84%E5%AF%BC%E5%9B%BE.jpeg\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/%E6%95%B0%E6%8D%AE%E4%BA%A4%E6%8D%A2%E6%8A%80%E6%9C%AF.jpeg\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/%E7%BD%91%E7%BB%9C%E6%80%A7%E8%83%BD%E6%8C%87%E6%A0%87.jpeg\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411114216367.png\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411114725015.png\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411114755731.png\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411115245645.png\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411140649950.png\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1guwo4xllsaj61ay0jujx702.jpg\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411141843200.png\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1gudymwiu1lj60wk050aag02.jpg\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411141945075.png\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411142037258.png\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411142131542.png\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411142236425.png\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411142307741.png\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411142717124.png\\",\\"https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411143027156.png\\",\\"https://tva1.sinaimg.cn/large/008eGmZEgy1gpf3cpje6kj31mi0kogqk.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1gsl6ce36s2j30o204i752.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1gsl7mpkxrtj30q104yaah.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1gsl80rxy3ij312i0qfad9.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1gsl82w3ndaj30pb058mxp.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1gvhdp56ixlj60u013qn1802.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1grgrbjmff6j315u09qtfn.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1gufb44qvncj61i10u0dst02.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1gufb4rdmykj61gz0u0gx602.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1guwos7n45rj61ks0q2gqy02.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1gv17t60rhlj616m0luagk02.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1gufase42mkj60pk0gymy502.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1gvhdw8c0wfj60ux0u0goy02.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1guo8pshdgnj61cm0u0wna02.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1guo8qalsywj618y0u0jzf02.jpg\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"OSI参考模型","slug":"osi参考模型","link":"#osi参考模型","children":[]},{"level":2,"title":"TCP/IP 参考模型","slug":"tcp-ip-参考模型","link":"#tcp-ip-参考模型","children":[]},{"level":2,"title":"网络结构 100°","slug":"网络结构-100°","link":"#网络结构-100°","children":[]},{"level":2,"title":"网络分类   *","slug":"网络分类","link":"#网络分类","children":[]},{"level":2,"title":"数据交换技术 100° *","slug":"数据交换技术-100°","link":"#数据交换技术-100°","children":[{"level":3,"title":"电路交换","slug":"电路交换","link":"#电路交换","children":[]},{"level":3,"title":"报文交换","slug":"报文交换","link":"#报文交换","children":[]},{"level":3,"title":"分组交换","slug":"分组交换","link":"#分组交换","children":[]}]},{"level":2,"title":"网络性能 100°  *","slug":"网络性能-100°","link":"#网络性能-100°","children":[]},{"level":2,"title":"单位换算 100° *","slug":"单位换算-100°","link":"#单位换算-100°","children":[{"level":3,"title":"时间单位换算","slug":"时间单位换算","link":"#时间单位换算","children":[]},{"level":3,"title":"数据量单位换算","slug":"数据量单位换算","link":"#数据量单位换算","children":[]},{"level":3,"title":"数据率单位换算","slug":"数据率单位换算","link":"#数据率单位换算","children":[]}]},{"level":2,"title":"速率（带宽）","slug":"速率-带宽","link":"#速率-带宽","children":[]},{"level":2,"title":"时延","slug":"时延","link":"#时延","children":[{"level":3,"title":"传输时延","slug":"传输时延","link":"#传输时延","children":[]},{"level":3,"title":"传播时延","slug":"传播时延","link":"#传播时延","children":[]}]},{"level":2,"title":"（传播）时延带宽积","slug":"传播-时延带宽积","link":"#传播-时延带宽积","children":[]},{"level":2,"title":"丢包率(𝜼)","slug":"丢包率-η","link":"#丢包率-η","children":[]},{"level":2,"title":"最大吞吐量    100° *","slug":"最大吞吐量-100°","link":"#最大吞吐量-100°","children":[]},{"level":2,"title":"可靠数据传输 100° *","slug":"可靠数据传输-100°","link":"#可靠数据传输-100°","children":[{"level":3,"title":"停-等协议","slug":"停-等协议","link":"#停-等协议","children":[]},{"level":3,"title":"GBN协议（接收窗口=1）","slug":"gbn协议-接收窗口-1","link":"#gbn协议-接收窗口-1","children":[]},{"level":3,"title":"SR协议（接收窗口＞1）","slug":"sr协议-接收窗口-1","link":"#sr协议-接收窗口-1","children":[]}]},{"level":2,"title":"信道利用率  100° **","slug":"信道利用率-100°","link":"#信道利用率-100°","children":[]},{"level":2,"title":"网络应用","slug":"网络应用","link":"#网络应用","children":[{"level":3,"title":"DNS域名系统 100°  **","slug":"dns域名系统-100°","link":"#dns域名系统-100°","children":[]},{"level":3,"title":"Cookie  *","slug":"cookie","link":"#cookie","children":[]},{"level":3,"title":"HTTP   100° *","slug":"http-100°","link":"#http-100°","children":[]},{"level":3,"title":"电子邮件   100° *","slug":"电子邮件-100°","link":"#电子邮件-100°","children":[]},{"level":3,"title":"FTP 100° *","slug":"ftp-100°","link":"#ftp-100°","children":[]},{"level":3,"title":"P2P","slug":"p2p","link":"#p2p","children":[]},{"level":3,"title":"Socket","slug":"socket","link":"#socket","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":9.98,"words":2993},"filePathRelative":"网络原理/0概述.md","excerpt":"\\n<h1>体系结构</h1>\\n<ul>\\n<li><a href=\\"https://www.bilibili.com/video/BV1c4411d7jb?p=7\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">网络体系结构介绍</a></li>\\n</ul>\\n<figure><img src=\\"https://gitee.com/yibu_zzn/images/raw/master/img/image-20240411143227787.png\\" alt=\\"原理体系结构\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>原理体系结构</figcaption></figure>","autoDesc":true}');export{K as comp,H as data};
