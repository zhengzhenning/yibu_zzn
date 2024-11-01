import{_ as g,c as s,o as t,a as i,b as n,d as e}from"./app-4_yHeutO.js";const a={},r=i('<h1 id="中断、总线、io系统" tabindex="-1"><a class="header-anchor" href="#中断、总线、io系统"><span>中断、总线、IO系统</span></a></h1><h2 id="本章涉及的公式或表达式" tabindex="-1"><a class="header-anchor" href="#本章涉及的公式或表达式"><span>本章涉及的公式或表达式</span></a></h2><ol><li>集中式控制方式的控制线的根数</li><li>通道流量计算公式及单位换算</li></ol><h1 id="真题" tabindex="-1"><a class="header-anchor" href="#真题"><span>真题</span></a></h1><h2 id="简答题" tabindex="-1"><a class="header-anchor" href="#简答题"><span>简答题</span></a></h2><p>【中断系统篇】</p><p>简述中断的<strong>概念</strong>、<strong>分类依据</strong>及<strong>分类目的</strong>。 <strong>1510</strong> <strong>2008</strong></p><p>简述中断<strong>分成优先级的原因</strong>及<strong>分级的方法</strong>。<strong>1810</strong> <strong>1104</strong> x</p><p>简述<strong>中断处理次序</strong>和<strong>中断响应次序</strong>的不同点。<strong>1304</strong></p><p>简述中断的<strong>概念</strong>和中断系统采用<strong>软硬件结合的好处</strong> <strong>2110</strong></p><p>简述<strong>中断系统</strong>和<strong>作用</strong> <strong>2210</strong></p><p>简述中断系统的<strong>主要功能</strong>和<strong>要求</strong>。<strong>1710</strong></p><p>【总线系统篇】</p><p>简述<strong>总线控制</strong>的三种方式及各需要增加用于总线控制的控制线根数 <strong>2010</strong></p><p>简述集中式<strong>串行链接</strong>方式的<strong>优点</strong>、<strong>总线的分配过程</strong> <strong>1704</strong> <strong>1804</strong> x</p><p>简述集中式<strong>独立请求</strong>的优缺点和缺点、以及总线分配过程 <strong>1904</strong> <strong>1610</strong> <strong>1504</strong></p><p>简述<strong>专用总线</strong>的概念并说明专用总线的优点和缺点 <strong>1410</strong></p><p>【IO系统篇】</p><p>简述<strong>字节多路通道</strong>、<strong>选择通道</strong>、<strong>数组多路通道</strong>的<strong>适用连接的设备</strong>、特点、<strong>各种类型通道在满负荷时的实际流量与所连接设备的关系</strong>数据传输方式 <strong>2104</strong>、<strong>1404</strong> 、<strong>1904</strong>、<strong>1604</strong>、<strong>1107</strong> x2</p><h2 id="应用题" tabindex="-1"><a class="header-anchor" href="#应用题"><span>应用题</span></a></h2><h3 id="中断处理过程示意图" tabindex="-1"><a class="header-anchor" href="#中断处理过程示意图"><span>中断处理过程示意图</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230319164150489.png" alt="image-20230319164150489" tabindex="0" loading="lazy"><figcaption>image-20230319164150489</figcaption></figure><h3 id="通道流量计算" tabindex="-1"><a class="header-anchor" href="#通道流量计算"><span>通道流量计算 **</span></a></h3><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306214111465.png" alt="image-20230306214111465" tabindex="0" loading="lazy"><figcaption>image-20230306214111465</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306213936342.png" alt="image-20230306213936342" tabindex="0" loading="lazy"><figcaption>image-20230306213936342</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306213546511.png" alt="image-20230306213546511" tabindex="0" loading="lazy"><figcaption>image-20230306213546511</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306213159841.png" alt="image-20230306213159841" tabindex="0" loading="lazy"><figcaption>image-20230306213159841</figcaption></figure><h1 id="中断系统" tabindex="-1"><a class="header-anchor" href="#中断系统"><span>中断系统 * * ^</span></a></h1><blockquote><p>简述<strong>中断系统</strong>和<strong>作用</strong> <strong>2210</strong> ^</p></blockquote><p>中断系统是整个计算机系统不可缺少的重要组成部分。它对程序的监视和跟踪、人机联系、故障管理、多道程序和分时处理、实时处理、目态程序和操作系统的联系、输入输出处理以及多处理机系统中各机的联系等都起着重要的作用。</p><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h2><p><b style="color:red;">什么是中断？</b> CPU终止正在执行的程序，转去处理随机提出的请求，待请求处理完后，再回到原先被打断的程序继续恢复执行的过程，叫中断。<strong>注意：中断是一个过程！</strong></p><h2 id="分类【-】" tabindex="-1"><a class="header-anchor" href="#分类【-】"><span>分类【*^】</span></a></h2><p>分类依据：将<strong>中断源性质相近</strong>、<strong>中断处理过程类似</strong>的归为一类。</p><ul><li>内部中断，由 CPU 异常引起。</li><li>外部中断，由中断信号引起。<strong>常见的有定时器中断、外部信号中断、中断键中断。</strong></li><li>软件中断，由自陷指令引起。</li></ul><p>分类目的： 减少<strong>中断处理程序入口</strong>；减少<strong>中断硬件数量</strong>。</p><p><strong>中断分类</strong> ：从高到低</p><ol><li><strong>访管中断</strong>，当用户程序需<strong>操作系统介入</strong>时触发。</li><li><strong>程序性中断</strong>，包括指令和数据格式错误、程序执行中出现的异常（溢出、<strong>除数为0</strong>）等。</li><li><strong>外部中断</strong>，来自计算机外部，如定时器中断、外部信号中断、中断键中断。</li><li><strong>I/O中断</strong>，CPU与IO设备（或IO通路）交互过程中引起的中断。</li><li><strong>重启中断</strong>，CPU重启程序时引起的中断。</li></ol><blockquote><p>【例】IBM370 将中断分成<strong>6类</strong>：</p><p>机器校验、程序性、管理程序调用、外部、输入/输出、重新启动。 <u><strong>简记：机程管外输重</strong></u></p></blockquote><p>⚠️ <strong>相关真题做得不好</strong>，如：1204#6A、1410#4C、1510#5D、1910#4A、2008#3B、2110#6</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306212949823.png" alt="image-20230306212949823" tabindex="0" loading="lazy"><figcaption>image-20230306212949823</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306213228096.png" alt="image-20230306213228096" tabindex="0" loading="lazy"><figcaption>image-20230306213228096</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306213422944.png" alt="image-20230306213422944" tabindex="0" loading="lazy"><figcaption>image-20230306213422944</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230402155110805.png" alt="image-20230402155110805" tabindex="0" loading="lazy"><figcaption>image-20230402155110805</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306213915396.png" alt="image-20230306213915396" tabindex="0" loading="lazy"><figcaption>image-20230306213915396</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306214002335.png" alt="image-20230306214002335" tabindex="0" loading="lazy"><figcaption>image-20230306214002335</figcaption></figure><h2 id="分级" tabindex="-1"><a class="header-anchor" href="#分级"><span>分级</span></a></h2><p>中断分成优先级的<strong>原因</strong>：<strong>中断源</strong>是相互<strong>独立</strong>且<strong>随机</strong>发出请求的。当多个中断源同时发出请求时，CPU只能响应和处理优先级相对高的请求，因此需要对多个中断源的响应和处理安排一个优先顺序。</p><p>分级的<strong>方法</strong>：中断分类后，<strong>同一类</strong>内部各中断请求的<strong>优先次序由软件或通道进行管理</strong>；<strong>不同类</strong>的中断需根据中断的性质、紧迫性、重要性及软件处理的方便性分成若干优先级，以便CPU有序响应并处理中断请求。</p><p>一般地，优先级<strong>从高到低</strong>，分级如下：</p><p>第1级，<strong>机器校验</strong>。因掉电、地址错、数据错、通路错等必须及时处理，否则系统无法正常工作。</p><p>第2级，<strong>程序性</strong>中断</p><p>第3级，<strong>管理程序调用</strong></p><p>第4级，<strong>外部</strong>中断</p><p>第5级，<strong>输入输出</strong>中断</p><p>第6级，<strong>重启</strong>中断</p><p><u><strong>简记：从高到低，机程外输重。</strong></u></p><blockquote><p>【例】IBM370 中断响应优先次序：</p><p>紧急的机器校验 &gt; 程序性和管程调用 &gt; 可抑制的机器校验 ＞ 外部 ＞ I/O ＞ 重启</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306214033442.png" alt="image-20230306214033442" tabindex="0" loading="lazy"><figcaption>image-20230306214033442</figcaption></figure><p><strong>3B</strong></p><h2 id="响应次序与处理次序" tabindex="-1"><a class="header-anchor" href="#响应次序与处理次序"><span>响应次序与处理次序 *</span></a></h2><blockquote><p>简述<strong>中断处理次序</strong>和<strong>中断响应次序</strong>的不同点。<strong>1304</strong></p></blockquote><p>中断处理次序是由排队器实现的，次序是固定好的；</p><p>中断响应次序是由软件实现的，通过设置<strong>中断级屏蔽位</strong>来控制优先级。</p><blockquote><p>简述中断的<strong>概念</strong>和中断系统采用<strong>软硬件结合的好处</strong> <strong>2110</strong></p></blockquote><p><strong>中断响应次序</strong>是在同时发生多个中断请求时，由<strong>排队器</strong>决定中断响应次序，以此<strong>加快响应</strong>和<strong>断点现场的保存</strong>； <strong>中断处理次序</strong>是在进行中断处理时，对中断进行<strong>分级</strong>处理。中断处理次序用<strong>软件技术</strong>实现，可以<strong>提高系统灵活性</strong>。</p><p><b style="color:red;">如何设计各级中断处理程序的设置中断级屏蔽位？</b></p><ol><li>看”中断处理次序“的顺序</li><li>根据”屏蔽规则则“设置”屏蔽“或开放。 （<strong>屏蔽规则：<strong>在设置中断级屏蔽位时，需使现行PSW</strong>屏蔽同级和低级</strong>的中断请求。）</li></ol><blockquote><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230211133817239.png" alt="image-20230211133817239" tabindex="0" loading="lazy"><figcaption>image-20230211133817239</figcaption></figure><p>例中有“什么时候回到用户程序（主程序）”的场景，如在【2、3级】中断都响应完之后，会回到用户程序。再如【4级】亦是如此。</p><p>因为这两组都是在执行中断时被其他中断请求打断了，如【2、3】被【4】打断了；【4】被【1】打断了。</p></blockquote><h2 id="软、硬件功能分配" tabindex="-1"><a class="header-anchor" href="#软、硬件功能分配"><span>软、硬件功能分配 ^</span></a></h2><p>中断系统<strong>功能</strong>包括：</p><ul><li><strong>中断请求的保存与清理、分析与处理</strong>；</li><li><strong>中断优先级的确认</strong>；</li><li><strong>中断断点及现场保护</strong>。 ^</li></ul><p>中断系统的软、硬件功能分配实质上是<strong>中断处理程序软件</strong>和<strong>中断响应硬件</strong>的功能分配。其<strong>要求</strong>有2个：</p><ol><li><strong>中断响应速度要快</strong></li><li><strong>中断处理要灵活性</strong></li></ol><blockquote><p>【图】中断响应硬件部分原理简图</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230211134426568.png" alt="image-20230211134426568" tabindex="0" loading="lazy"><figcaption>image-20230211134426568</figcaption></figure></blockquote><h1 id="总线系统" tabindex="-1"><a class="header-anchor" href="#总线系统"><span>总线系统</span></a></h1><p>总线是用于互连计算机、CPU、存储器、I/O端口及外部设备、远程通信设备间信息传送通路的集合。简言之，<strong>总线是设备间信息传输通路的集合</strong>。总线与其相配合的附属<strong>控制电路</strong>统称为<strong>总线系统</strong>。按照信息传送功能、性能的不同，总线系统包括数据线、地址线、时序和中断信号等控制／状态线、电源线、地线以及备用线等，其中：</p><ul><li>数据线的根数决定同时传送的数据位数，即数据通路宽度</li><li>地址线的根数决定直接寻址的范围</li><li>控制／状态线决定总线的功能和使用能力</li><li>备用线用于系统功能的扩充</li></ul><h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类"><span>分类 *</span></a></h2><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24ely1h4sot41z4lj210u0pcq4h.jpg" alt="总线的分类" tabindex="0" loading="lazy"><figcaption>总线的分类</figcaption></figure><p>专用总线：只连接一对物理部件的总线。</p><p>非专用总线：可以被多个部件分时共享的总线。</p><h2 id="控制方式" tabindex="-1"><a class="header-anchor" href="#控制方式"><span>控制方式 *</span></a></h2><ul><li><strong>集中式控制</strong>：<strong><u>简记：串3定2独1</u></strong></li><li>分布式控制（超纲）</li></ul><p><strong>集中式控制</strong>：总线控制机构基本集中在一起，不论是在连接到总线的一个部件中，还是在单独的硬件中</p>',85),l=n("h3",{id:"串行链接-根",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#串行链接-根"},[n("span",null,[e("串行链接（"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"3")]),n("annotation",{encoding:"application/x-tex"},"3")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"3")])])]),e(" 根）")])])],-1),o=i('<p>关键词：3条线，发送请求，响应请求，串行，信号建立，信号移除。</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/IMG_39E7860D556C-1.jpeg" alt="IMG_39E7860D556C-1" tabindex="0" loading="lazy"><figcaption>IMG_39E7860D556C-1</figcaption></figure><p><strong>串行链接的工作方式： ^</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/串行链接的控制方式-6100136.png" alt="串行链接的控制方式" tabindex="0" loading="lazy"><figcaption>串行链接的控制方式</figcaption></figure><p>优先次序确定的问题：是由【”总线可用“】线所接部件的物理位置决定。</p><p><strong>优点</strong>：</p><ul><li>选择算法简单，控制总线数少；</li><li>部件增减容易，可扩充性好；</li><li>逻辑简单，容易通过重复设置提高可靠性。</li></ul><p><strong>缺点</strong>：</p><ul><li>对<strong>线路失效</strong>敏感；</li><li>总线分配速度受限；</li><li>设备增减或移动受限。</li></ul>',9),h=n("h3",{id:"定时查询-根",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#定时查询-根"},[n("span",null,[e("定时查询（"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"2"),n("mo",null,"+"),n("mi",null,"l"),n("mi",null,"o"),n("msub",null,[n("mi",null,"g"),n("mn",null,"2")]),n("mi",null,"N")]),n("annotation",{encoding:"application/x-tex"},"2 + log_2 N")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),n("span",{class:"mord"},"2"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),n("span",{class:"mord mathnormal"},"o"),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.3011em"}},[n("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"2")])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.15em"}},[n("span")])])])])]),n("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N")])])]),e(" 根）")])])],-1),p=i('<figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24ely1h4son24imhj214a0o477j.jpg" alt="image-20220316124018599" tabindex="0" loading="lazy"><figcaption>image-20220316124018599</figcaption></figure><p><strong>优点</strong>：<strong>部件优先次序由程序控制</strong>，灵活度高，可靠性强 。</p><p><strong>缺点</strong>：控制线数多且控制复杂，扩展性差；速度取决于<strong>计数信号的频率</strong>和<strong>部件数</strong>。</p>',3),d=n("h3",{id:"独立请求-根",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#独立请求-根"},[n("span",null,[e("独立请求（"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"2"),n("mi",null,"N"),n("mo",null,"+"),n("mn",null,"1")]),n("annotation",{encoding:"application/x-tex"},"2N+1")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.7667em","vertical-align":"-0.0833em"}}),n("span",{class:"mord"},"2"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"+"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"1")])])]),e(" 根）")])])],-1),c=i('<figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24egy1h66ifhzzmpj21d60qcn18.jpg" alt="image-20220914223739233" tabindex="0" loading="lazy"><figcaption>image-20220914223739233</figcaption></figure><p><strong>优点：</strong></p><ol><li>总线分配速度快；</li><li>无需查询；</li><li>控制器使用程序可控方式灵活确定下一个使用总线的部件；</li><li>能方便地隔离失效部件的请求 ;</li></ol><p><strong>缺点：</strong></p><ol><li>控制线数量多且控制器复杂；</li></ol><h2 id="总线的通信技术" tabindex="-1"><a class="header-anchor" href="#总线的通信技术"><span>总线的通信技术</span></a></h2><p>信息在总线上的传送方法有两种：<strong>同步</strong>和<strong>异步</strong>。 <strong>^</strong></p><h2 id="数据宽度与总线线数" tabindex="-1"><a class="header-anchor" href="#数据宽度与总线线数"><span>数据宽度与总线线数</span></a></h2><p>总线控制线根数：<strong><u>简记：串3定2独1</u></strong></p><p><strong>数据宽度</strong>：I/O 设备取得 <strong>I/O 总线</strong>后传送的数据总量。其不同于数据通路宽度</p><p><strong>数据通路宽度</strong>：<strong>数据总线</strong>的物理宽度，即一个时钟周期传送的数据量。</p><p>一个数据宽度可能需要多个时钟周期才能完成。</p><h3 id="数据宽度的类型" tabindex="-1"><a class="header-anchor" href="#数据宽度的类型"><span>数据宽度的类型</span></a></h3><ul><li>单字，适用于输入机、打字机等低速设备。</li><li>定长块，适用于磁盘等高速设备。</li><li>可变长块，适用于高优先级的中高速磁带、磁盘等设备。</li></ul><h3 id="总线线数-·" tabindex="-1"><a class="header-anchor" href="#总线线数-·"><span>总线线数 ·</span></a></h3><p>对于总线线数，需要知道 4 点：</p><ol><li>线数多，则成本高，干扰强，可靠性低；线越长，则成本高，干扰强，波形畸变严重。</li><li>在满足性能的前提下应尽量减少线数。总线的线数可通过<strong>线的组合</strong>、<strong>编码</strong>及<strong>并/串-串/并转换</strong>来减少，但一般会降低总线的流量 <strong>^</strong></li><li>总线的类型、控制方式、通信技术、数据宽度和总线的线数确定后，总线的申请、使用方式及相应的规范也就确定了</li><li>总线的流量取决于该总线所接的外设的数量，种类以及传输信息的方式和效率要求</li></ol><h1 id="i-o系统" tabindex="-1"><a class="header-anchor" href="#i-o系统"><span>I/O系统</span></a></h1><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24egy1h4y5bl4nrcj21180u0418.jpg" alt="O系统" tabindex="0" loading="lazy"><figcaption>O系统</figcaption></figure><h2 id="输入输出原理-io原理" tabindex="-1"><a class="header-anchor" href="#输入输出原理-io原理"><span>输入输出原理（IO原理）</span></a></h2><h3 id="输入输出系统-·" tabindex="-1"><a class="header-anchor" href="#输入输出系统-·"><span>输入输出系统 ·</span></a></h3><p><strong>输入输出系统的概念</strong>：处理机与主存储器之外的部分系统，包括了输入输出的设备、接口、软件等。</p><blockquote><p>运算器、控制器、主存储器、总线一般也是通过输入输出系统进行管理。</p></blockquote><p><strong>输入输出系统的特点</strong>： ·</p><ul><li>~是处理机与外界进行数据交换的通道</li><li>~是系统中最具多样性和复杂性的部分</li><li>~涉及机、光、电、磁、自动控制等多种学科</li><li>~最典型地反应着软硬件的相互结合</li><li>~复杂性隐藏在系统软件中，用户无需了解其细节</li></ul><p>输入输出系统的特点集中反应在<strong>异步性</strong>、<strong>实时性</strong>、<strong>与设备无关性</strong>三个基本要求上，并对输入输出系统的组织产生决定性影响。</p><p><strong>输入输出系统的组织方式</strong></p><p>针对异步性，采用自治控制的办法；</p><p>针对实时性，采用层次结构的办法；</p><p>针对与设备无关性，采用分类处理的办法</p><blockquote><p>【图】</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230211154056828.png" alt="image-20230211154056828" tabindex="0" loading="lazy"><figcaption>image-20230211154056828</figcaption></figure></blockquote><h3 id="输入输出的基本方式" tabindex="-1"><a class="header-anchor" href="#输入输出的基本方式"><span>输入输出的基本方式 *</span></a></h3><ul><li>程序控制 I/O</li><li>直接存储器访问（DMA）</li><li>I/O 处理机</li></ul><h2 id="通道处理机" tabindex="-1"><a class="header-anchor" href="#通道处理机"><span>通道处理机 * **</span></a></h2><p>👉🏻 <a href="http://kjwy.5any.com/jsjxtjg/content/03/jsjxtjg-kcjj-030402.htm" target="_blank" rel="noopener noreferrer">http://kjwy.5any.com/jsjxtjg/content/03/jsjxtjg-kcjj-030402.htm</a></p><p>通道处理机输入输出过程的时间关系图：</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24egy1h4q6c504cej212a0ligo3.jpg" alt="image-20220714125551493" tabindex="0" loading="lazy"><figcaption>image-20220714125551493</figcaption></figure><p>结论：应用程序（目态）每完成一次输入输出操作时，CPU仅两次进入管态，降低了对目态程序的干扰，提升了CPU与多种、多台外设并行工作的效率。</p><h3 id="通道类型" tabindex="-1"><a class="header-anchor" href="#通道类型"><span>通道类型 **</span></a></h3><p><strong><u>简记：选字数</u></strong></p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24egy1h4q6c0wavtj20nu0b03z0.jpg" alt="通道类型" tabindex="0" loading="lazy"><figcaption>通道类型</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24egy1h4q6c2t961j215m0cmtbq.jpg" alt="image-20220714125936837" tabindex="0" loading="lazy"><figcaption>image-20220714125936837</figcaption></figure><h4 id="字节多路通道" tabindex="-1"><a class="header-anchor" href="#字节多路通道"><span>字节多路通道</span></a></h4><p>字节多路通道的工作方式、数据宽度、适用范围：</p><ol><li>工作方式：分时共享，字节交叉</li><li>传输原理：选择好设备后，一次只传输一个字节的数据，设备轮流获取通道使用权。</li><li>数据宽度：单字节</li><li>适用范围：<strong>大量低速设备</strong>，如光电机。</li><li>特点：字符的传输时间短，但等待时间长。</li></ol><h4 id="选择通道" tabindex="-1"><a class="header-anchor" href="#选择通道"><span>选择通道</span></a></h4><p>选择通道的工作方式、数据宽度、适用范围：</p><ol><li>工作方式：独占通道；</li><li>传输原理：选择好设备后，待所有数据传输完毕后才释放通道通道使用权；</li><li>数据宽度：<strong>可变长块</strong>；</li><li>适用范围：适合连接<strong>优先级高的高速设备</strong>，如磁盘。</li><li>特点：独占通道，一次只能执行一个通道程序。</li></ol><h4 id="数组多路通道" tabindex="-1"><a class="header-anchor" href="#数组多路通道"><span>数组多路通道</span></a></h4><p>数组多路通道的工作方式、数据宽度、适用范围：</p><ol><li>工作方式：成组交叉；</li><li>传输原理：选择好设备后，按固定字节数传送数据，传送完毕后释放通道使用权；</li><li>数据宽度：<strong>定长块</strong>；</li><li>适用范围：适合连接<strong>高速设备</strong>，如磁盘。</li><li>特点：传输速率高，但<strong>传输前的寻址辅助操作时间长</strong>。</li></ol><h3 id="流量分析-应" tabindex="-1"><a class="header-anchor" href="#流量分析-应"><span>流量分析 （应）</span></a></h3><p><strong>通道流量</strong>：单位时间内能够传送的最大数据量，又称通道吞吐率，通道数据传输率等。</p><p><strong>通道最大流量</strong>：通道在满负荷工作状态下的流量。</p><h4 id="极限流量" tabindex="-1"><a class="header-anchor" href="#极限流量"><span>极限流量</span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24egy1h4q6c1tg07j216w0o6415.jpg" alt="image-20220714130752090" tabindex="0" loading="lazy"><figcaption>image-20220714130752090</figcaption></figure><h4 id="实际流量" tabindex="-1"><a class="header-anchor" href="#实际流量"><span>实际流量</span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24egy1h4q6c42qzzj20uc0eudh6.jpg" alt="image-20220714130914216" tabindex="0" loading="lazy"><figcaption>image-20220714130914216</figcaption></figure><h4 id="极限与实际流量的关系" tabindex="-1"><a class="header-anchor" href="#极限与实际流量的关系"><span><strong>极限与实际流量的关系</strong></span></a></h4><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24egy1h4q6c4lkeuj219w0cu75s-20230211165927496.jpg" alt="image-20220714130953241" tabindex="0" loading="lazy"><figcaption>image-20220714130953241</figcaption></figure><h4 id="计算题【-】" tabindex="-1"><a class="header-anchor" href="#计算题【-】"><span>计算题【***】</span></a></h4><p>通道流量的计算套路掌握得不是很好，如：1304、1604#28、1910#27、2110#28</p><blockquote><p>本例经常考，同时注意单位换算</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/IMG_9422.jpeg" alt="IMG_9422" tabindex="0" loading="lazy"><figcaption>IMG_9422</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/IMG_9423.jpeg" alt="IMG_9423" tabindex="0" loading="lazy"><figcaption>IMG_9423</figcaption></figure></blockquote><h3 id="流量设计" tabindex="-1"><a class="header-anchor" href="#流量设计"><span>流量设计 * **</span></a></h3><p>通道流量的设计，需要考虑<strong>信息丢失问题</strong>。当实际流量非常接近极限流量时，有可能出现信息丢失问题。因为高速设备在频繁发出传输数据请求时，总是优先得到响应和处理，这时低速设备的信息可能因为得不到及时处理而被丢弃。为此，解决这一问题的办法：给设备配置<strong>缓冲器</strong>，来<strong>暂存</strong>无法及时处理的信息或动态改变设备响应的<strong>优先级</strong>来弥补。</p>',65),m=[r,l,o,h,p,d,c];function u(f,z){return t(),s("div",null,m)}const b=g(a,[["render",u],["__file"," 3 中断、总线、IO系统.html.vue"]]),B=JSON.parse('{"path":"/%E7%B3%BB%E7%BB%9F%E7%BB%93%E6%9E%84/%203%20%E4%B8%AD%E6%96%AD%E3%80%81%E6%80%BB%E7%BA%BF%E3%80%81IO%E7%B3%BB%E7%BB%9F.html","title":"中断、总线、IO系统","lang":"zh-CN","frontmatter":{"title":"中断、总线、IO系统","order":3,"icon":"file","category":["系统结构","理论基础"],"description":"中断、总线、IO系统 本章涉及的公式或表达式 集中式控制方式的控制线的根数 通道流量计算公式及单位换算 真题 简答题 【中断系统篇】 简述中断的概念、分类依据及分类目的。 1510 2008 简述中断分成优先级的原因及分级的方法。1810 1104 x 简述中断处理次序和中断响应次序的不同点。1304 简述中断的概念和中断系统采用软硬件结合的好处 21...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/yibu_zzn/%E7%B3%BB%E7%BB%9F%E7%BB%93%E6%9E%84/%203%20%E4%B8%AD%E6%96%AD%E3%80%81%E6%80%BB%E7%BA%BF%E3%80%81IO%E7%B3%BB%E7%BB%9F.html"}],["meta",{"property":"og:site_name","content":"郑振宁的数字资产园区"}],["meta",{"property":"og:title","content":"中断、总线、IO系统"}],["meta",{"property":"og:description","content":"中断、总线、IO系统 本章涉及的公式或表达式 集中式控制方式的控制线的根数 通道流量计算公式及单位换算 真题 简答题 【中断系统篇】 简述中断的概念、分类依据及分类目的。 1510 2008 简述中断分成优先级的原因及分级的方法。1810 1104 x 简述中断处理次序和中断响应次序的不同点。1304 简述中断的概念和中断系统采用软硬件结合的好处 21..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230319164150489.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T02:36:39.000Z"}],["meta",{"property":"article:author","content":"郑振宁"}],["meta",{"property":"article:modified_time","content":"2024-04-12T02:36:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"中断、总线、IO系统\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230319164150489.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306214111465.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306213936342.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306213546511.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306213159841.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306212949823.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306213228096.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306213422944.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230402155110805.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306213915396.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306214002335.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230306214033442.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230211133817239.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230211134426568.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24ely1h4sot41z4lj210u0pcq4h.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/IMG_39E7860D556C-1.jpeg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/%E4%B8%B2%E8%A1%8C%E9%93%BE%E6%8E%A5%E7%9A%84%E6%8E%A7%E5%88%B6%E6%96%B9%E5%BC%8F-6100136.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24ely1h4son24imhj214a0o477j.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24egy1h66ifhzzmpj21d60qcn18.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24egy1h4y5bl4nrcj21180u0418.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230211154056828.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24egy1h4q6c504cej212a0ligo3.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24egy1h4q6c0wavtj20nu0b03z0.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24egy1h4q6c2t961j215m0cmtbq.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24egy1h4q6c1tg07j216w0o6415.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24egy1h4q6c42qzzj20uc0eudh6.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/e6c9d24egy1h4q6c4lkeuj219w0cu75s-20230211165927496.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/IMG_9422.jpeg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/IMG_9423.jpeg\\"],\\"dateModified\\":\\"2024-04-12T02:36:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"本章涉及的公式或表达式","slug":"本章涉及的公式或表达式","link":"#本章涉及的公式或表达式","children":[]},{"level":2,"title":"简答题","slug":"简答题","link":"#简答题","children":[]},{"level":2,"title":"应用题","slug":"应用题","link":"#应用题","children":[{"level":3,"title":"中断处理过程示意图","slug":"中断处理过程示意图","link":"#中断处理过程示意图","children":[]},{"level":3,"title":"通道流量计算 **","slug":"通道流量计算","link":"#通道流量计算","children":[]}]},{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":2,"title":"分类【*^】","slug":"分类【-】","link":"#分类【-】","children":[]},{"level":2,"title":"分级","slug":"分级","link":"#分级","children":[]},{"level":2,"title":"响应次序与处理次序  *","slug":"响应次序与处理次序","link":"#响应次序与处理次序","children":[]},{"level":2,"title":"软、硬件功能分配 ^","slug":"软、硬件功能分配","link":"#软、硬件功能分配","children":[]},{"level":2,"title":"分类 *","slug":"分类","link":"#分类","children":[]},{"level":2,"title":"控制方式 *","slug":"控制方式","link":"#控制方式","children":[{"level":3,"title":"串行链接（ 根）","slug":"串行链接-根","link":"#串行链接-根","children":[]},{"level":3,"title":"定时查询（ 根）","slug":"定时查询-根","link":"#定时查询-根","children":[]},{"level":3,"title":"独立请求（ 根）","slug":"独立请求-根","link":"#独立请求-根","children":[]}]},{"level":2,"title":"总线的通信技术","slug":"总线的通信技术","link":"#总线的通信技术","children":[]},{"level":2,"title":"数据宽度与总线线数","slug":"数据宽度与总线线数","link":"#数据宽度与总线线数","children":[{"level":3,"title":"数据宽度的类型","slug":"数据宽度的类型","link":"#数据宽度的类型","children":[]},{"level":3,"title":"总线线数 ·","slug":"总线线数-·","link":"#总线线数-·","children":[]}]},{"level":2,"title":"输入输出原理（IO原理）","slug":"输入输出原理-io原理","link":"#输入输出原理-io原理","children":[{"level":3,"title":"输入输出系统 ·","slug":"输入输出系统-·","link":"#输入输出系统-·","children":[]},{"level":3,"title":"输入输出的基本方式 *","slug":"输入输出的基本方式","link":"#输入输出的基本方式","children":[]}]},{"level":2,"title":"通道处理机 * **","slug":"通道处理机","link":"#通道处理机","children":[{"level":3,"title":"通道类型 **","slug":"通道类型","link":"#通道类型","children":[]},{"level":3,"title":"流量分析 （应）","slug":"流量分析-应","link":"#流量分析-应","children":[]},{"level":3,"title":"流量设计 * **","slug":"流量设计","link":"#流量设计","children":[]}]}],"git":{"createdTime":1712889399000,"updatedTime":1712889399000,"contributors":[{"name":"一步","email":"zzn_workmail@163.com","commits":1}]},"readingTime":{"minutes":12.58,"words":3773},"filePathRelative":"系统结构/ 3 中断、总线、IO系统.md","localizedDate":"2024年4月12日","excerpt":"\\n<h2>本章涉及的公式或表达式</h2>\\n<ol>\\n<li>集中式控制方式的控制线的根数</li>\\n<li>通道流量计算公式及单位换算</li>\\n</ol>\\n<h1>真题</h1>\\n<h2>简答题</h2>\\n<p>【中断系统篇】</p>\\n<p>简述中断的<strong>概念</strong>、<strong>分类依据</strong>及<strong>分类目的</strong>。 <strong>1510</strong> <strong>2008</strong></p>\\n<p>简述中断<strong>分成优先级的原因</strong>及<strong>分级的方法</strong>。<strong>1810</strong>  <strong>1104</strong>  x</p>","autoDesc":true}');export{b as comp,B as data};
