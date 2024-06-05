import{_ as n,c as t,o as g,a as s}from"./app-BIwcx4mQ.js";const e={},r=s('<h1 id="概论" tabindex="-1"><a class="header-anchor" href="#概论"><span>概论</span></a></h1><h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h1><ul><li>🔗 <a href="https://www.icourse163.org/learn/HUST-1207109824?tid=1207462224#/learn/content?type=detail&amp;id=1213569006&amp;sm=1" target="_blank" rel="noopener noreferrer">华中科技大学-计算机系统结构</a> 📝 讲得很好，PPT设计得很棒</li></ul><h1 id="真题" tabindex="-1"><a class="header-anchor" href="#真题"><span>真题</span></a></h1><h2 id="简答题-15" tabindex="-1"><a class="header-anchor" href="#简答题-15"><span>简答题（15）</span></a></h2><blockquote><p>计算机系统“从中间向两边”设计到方法及软硬件人员各需要设计的内容 <strong>2204</strong></p><p>选择从层级结构的主要软硬件界面开始设计，即在传统机器语言机器级和操作系统机器语言级之间进行合理的软硬件功能分配。</p><p>软件人员依次设计操作系统级、汇编语言级、高级语言级、应用语言级。</p><p>硬件人员依次设计传统机器语言级、微程序机器级。</p></blockquote><blockquote><p>简述计算机系统由中间开始设计的基本思想 <strong>0504</strong></p><p>克服“由上而下”、“由下而上”设计的缺陷。选择从层次结构的<strong>软硬件界面</strong>开始设计，既要考虑硬件、器件的现状和发展，又要考虑可能使用的算法和数据结构，还要确定这个中间界面涉及的功能是由硬件实现还是软件实现，最后从这个中间界面开始分别向上、向下进行软硬件设计。</p></blockquote><blockquote><p>简述计算机系统由中间开始设计，其中间指的是什么地方，这样设计的优点是什么 <strong>0707</strong></p><p>层次结构的软硬件交界面，目前该中间处于是传统机器语言级和操作系统机器语言级之间。优点：合理地进行软硬件功能分配、优化软硬件的设计、同时设计利于缩短时间周期。</p></blockquote><p>简述软、硬件取舍的基本原则 <strong>1810</strong> <strong>0607</strong></p><p>简述<strong>计算机功能</strong>分别用<strong>硬件实现</strong>和<strong>软件实现</strong>的<strong>优点和缺点</strong>。<strong>1710</strong></p><p>简述<strong>软、硬件功能分配比例</strong>对计算机系统<strong>性能</strong>的<strong>影响</strong>。<strong>1510</strong></p><p>简述实现<strong>软件移植的技术途径</strong>及其适用环境 <strong>2008</strong> <strong>0804</strong></p><p>简述<strong>软件移植中采用系列机途径</strong>的办法及优点。<strong>1804</strong></p><p>简述<strong>实现软件移植的统一高级语言途径</strong>存在的问题。<strong>1004</strong></p><p>简述<strong>模拟</strong>和<strong>仿真</strong>的<strong>定义</strong>，并说明两者的主要<strong>区别</strong>。<strong>1710</strong> <strong>1107</strong></p><p>简述<strong>系列机思想</strong>对计算机发展的意义和系列机<strong>软件兼容</strong>的要求。<strong>1810</strong> <strong>1704</strong></p><p>简述软件兼容的定义及系列机对软件兼容的要求。<strong>1504</strong></p><p>简述并行性从计算机系统<strong>处理数据</strong>的角度划分的四个等级，并各举一例 <strong>1404</strong></p><p>简述提高计算机系统<strong>并行性技术的三个途径</strong> <strong>1910</strong> <strong>1204</strong> <strong>0907</strong> <strong>0704</strong> x1</p><p>简述计算机系统Flynn分类法的分类角度及类别，并说明各类别的特征。 <strong>0907</strong></p><h1 id="_1、定量设计原理" tabindex="-1"><a class="header-anchor" href="#_1、定量设计原理"><span>1、定量设计原理</span></a></h1><p>下面 3 个原理具有极强的普适性，不论是硬件开发、还是软件开发；不论是系统开发还是应用开发，这些原理都应作为<strong>基本原则</strong>加入到研发过程中，使之贯穿研发全生命周期。</p><ul><li>哈夫曼压缩原理（加快经常性事件原理），尽可能加快处理高概率事件，有易于性能提升。</li><li>Amdahl 定律，评估性能瓶颈改进程度。</li><li>程序局部性原理，90% 的时间只访问程序的 10% 部分。</li></ul><p>上述 3 个是计算机系统非常之重要的原理，可以多花时间进行实践体悟。</p><h1 id="_2、层次结构【-】" tabindex="-1"><a class="header-anchor" href="#_2、层次结构【-】"><span>2、层次结构【*^】</span></a></h1><p>从使用语言的角度，一台由<strong>软硬件</strong>组成的通用计算机系统可以被看成是按<strong>功能</strong>划分的多层<strong>机器级</strong>组成的层次结构。<u>简记：从高到低，应高汇操传微</u></p><p>其中，语言的实现技术有2种：翻译、解释。二者区别在于解释花费时间多些，但占用存储空间少。</p><p>下图中，<strong>0-2级</strong>采用解释技术来执行指令；3-5级采用翻译技术来执行指令，即采用<strong>02解释35翻译</strong>来执行指令。</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230206222144511.png" alt="image-20230206222144511" tabindex="0" loading="lazy"><figcaption>image-20230206222144511</figcaption></figure><ul><li>5 应用语言程序经<strong>应用程序包</strong>翻译成高级语言程序 简记：<strong>应应翻</strong></li><li>4 高级语言程序经<strong>编译程序</strong>翻译成汇编语言程序 简记：<strong>高编翻</strong></li><li>3 汇编语言程序经<strong>汇编程序</strong>翻译成机器语言程序 简记：<strong>汇汇翻</strong></li><li>2 机器语言解释作业控制语句</li><li>1 微指令程序解释机器指令</li><li>0 硬件执行微指令</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230206222209523.png" alt="image-20230206222209523" tabindex="0" loading="lazy"><figcaption>image-20230206222209523</figcaption></figure><p>“机器”被定义为能存储和执行相应语言程序的<strong>算法</strong>和<strong>数据结构</strong>的集合体。</p><h1 id="_3、透明性概念" tabindex="-1"><a class="header-anchor" href="#_3、透明性概念"><span>3、透明性概念 ** **</span></a></h1><p>⚠️ 透明性的概念看起来不难，但对应到不同工种能看到什么不能看到什么时，就显得难以辨别。因此记住一些常考的即可。</p><p><strong>透明性</strong> ：本来存在的事物或属性，从某种角度看似乎不存在。</p><p>按照计算机系统的<strong>多级层次结构</strong>，不同层级的程序员看到的计算机具有不同的属性；<strong>底层</strong>计算机的属性对<strong>高层</strong>计算机的程序员是<strong>透明</strong>的，即高层计算机的程序员看不见底层计算机的属性，也无需关注。</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/IMG_9832.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/IMG_9833.jpeg" alt="IMG_9833" tabindex="0" loading="lazy"><figcaption>IMG_9833</figcaption></figure><p>比如：<strong>以下几个真题直接记，考过</strong>：</p><p>对汇编程序员透明的有：浮点数表示、指令缓冲器、时标发生器、乘法器、主存地址寄存器、先行进位链；</p><p>对系统程序员<strong>透明的</strong>有：数据通路宽度、cache存储器、指令缓冲寄存器；<strong>不透明的</strong>有：虚拟存储器、程序状态字、启动io指令。</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230302191059197.png" alt="image-20230302191059197" tabindex="0" loading="lazy"><figcaption>image-20230302191059197</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230302192129316.png" alt="image-20230302192129316" tabindex="0" loading="lazy"><figcaption>image-20230302192129316</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230302192342239.png" alt="image-20230302192342239" tabindex="0" loading="lazy"><figcaption>image-20230302192342239</figcaption></figure><blockquote><p>【答案】1304B、1610C、1804D</p></blockquote><h1 id="_4、系统结构、组成与实现" tabindex="-1"><a class="header-anchor" href="#_4、系统结构、组成与实现"><span>4、系统结构、组成与实现 *</span></a></h1><h2 id="计算机系统结构" tabindex="-1"><a class="header-anchor" href="#计算机系统结构"><span>计算机系统结构 ^ *</span></a></h2><p>计算机系统结构是对计算机系统中<strong>各级界面</strong>的定义及其上下的<strong>功能分配</strong>。</p><p>计算机系统结构研究的是<strong>软、硬件</strong>之间的<strong>功能分配</strong>以及对<strong>传统机器级界面</strong>的确定。为机器语言、汇编语言程序设计者或编译程序生成系统提供使其设计或生成的程序能在机器上正确运行而应看到和遵循的计算机属性。</p><p>计算机系统结构的<strong>9大属性</strong>：</p><ul><li><strong>数据表示</strong>。硬件能够直接识别和处理的数据类型及格式。 <strong>^</strong></li><li><strong>寻址方式</strong>。最小可寻址单位、寻址种类、地址计算等。<strong>^</strong></li><li>寄存器组织。通用/专用寄存器的设置、数量、字长、使用约定等。</li><li><strong>指令系统</strong>。二进制或汇编指令的操作类型、格式、排序方式、控制机构等。 <strong>^</strong></li><li><strong>存储系统</strong>。主存的最小编址单位、编址方式、容量、最大可编址空间等。<strong>^</strong></li><li><strong>中断系统</strong>。中断的分类与分级、中断处理程序及入口地址等。<strong>^</strong></li><li>系统机器级的管态和用户态的定义与切换。</li><li><strong>IO系统</strong>。输入输出设备的连接、使用方式、流量、操作结束、出错指示等。</li><li><strong>信息保护</strong>。系统各部分的信息保护方式和保护机构等。</li></ul><h2 id="计算机组成" tabindex="-1"><a class="header-anchor" href="#计算机组成"><span>计算机组成</span></a></h2><p>计算机组成包含物理机器级内部的<strong>数据流</strong>和<strong>控制流</strong>的组成以及<strong>逻辑设计</strong>等，着眼于物理机器级内部各事件的<strong>排序方式</strong>与<strong>控制机构</strong>、各部件的<strong>功能</strong>以及各部件之间的<strong>联系</strong>。计算机组成是计算机系统结构的<strong>逻辑</strong>实现。</p><blockquote><p>主要研究内容详见：《计算机系统结构（2012版）》·李学干·p27</p></blockquote><h2 id="计算机实现" tabindex="-1"><a class="header-anchor" href="#计算机实现"><span>计算机实现 *</span></a></h2><p>计算机实现是计算机<strong>组成的物理实现</strong>。</p><p>计算机组成的设计需要关注的点：器件技术、微组装技术。</p><h2 id="系统结构、组成、实现之间的关系" tabindex="-1"><a class="header-anchor" href="#系统结构、组成、实现之间的关系"><span>系统结构、组成、实现之间的关系</span></a></h2><p><strong>组是系的逻；实是组的物</strong> ： 计算机组成是计算机系统结果的逻辑实现；计算机实现是计算机组成的物理实现。</p><h1 id="_5、软件、硬件" tabindex="-1"><a class="header-anchor" href="#_5、软件、硬件"><span>5、软件、硬件</span></a></h1><h2 id="取舍的基本原则" tabindex="-1"><a class="header-anchor" href="#取舍的基本原则"><span>取舍的基本原则 ^ *</span></a></h2><blockquote><p>【简】简述软、硬件取舍的基本原则 1810 0607</p></blockquote><ol><li>① 考虑在现有<strong>硬件</strong>、<strong>器件</strong>条件下，系统要有<strong>高的性能价格比</strong>；</li><li>② 考虑准备采用和可能采用的<strong>组成技术</strong>；</li><li>③ 不能仅从”硬“的角度考虑如何<strong>便于应用组成技术的成果</strong>和<strong>便于发挥器件技术的发展</strong>，还要从”软“的角度把如何为<strong>编译</strong>和<strong>操作系统</strong>的实现以及为<strong>高级语言</strong>的设计提供更多、更好的硬件支持。</li></ol><p>从实现费用上，考虑软硬件取舍：</p><ul><li><p>设计费</p><ul><li>软件设计费</li><li>硬件设计费</li></ul></li><li><p>生产费</p><ul><li>软件生产费</li><li>硬件生产费</li></ul><p>对于设计费，硬件设计费 ＞ 软件设计费</p><p>对于生产费，硬件生产费 ＞ 软件生产费</p><p>因此，无论是设计费还是生产费，硬件成本都要大于软件成本。</p></li></ul><h2 id="软硬实现的优缺点" tabindex="-1"><a class="header-anchor" href="#软硬实现的优缺点"><span>软硬实现的优缺点</span></a></h2><blockquote><p>【简】简述<strong>计算机功能</strong>分别用<strong>硬件实现</strong>和<strong>软件实现</strong>的<strong>优点和缺点</strong>。1710</p></blockquote><p>软件实现的优缺点：</p><ul><li>优点：易设计、易修改、灵活度高</li><li>缺点：速度慢、性能低</li></ul><p>硬件实现的优缺点：</p><ul><li>优点：速度快、性能高</li><li>缺点：不易修改、灵活度低</li></ul><h2 id="软硬件配比" tabindex="-1"><a class="header-anchor" href="#软硬件配比"><span>软硬件配比</span></a></h2><blockquote><p>【简】简述<strong>软、硬件功能分配比例</strong>对计算机系统<strong>性能</strong>的<strong>影响</strong>。1510</p></blockquote><p>因此，从<strong>成本</strong>、<strong>速度</strong>、<strong>灵活性</strong>和<strong>适应性</strong>谈软硬件配比对性能的影响</p><p>提高硬件功能的比例：</p><ol><li><p>提高硬件成本，降低软件成本；</p></li><li><p>提高系统解题速度；</p></li><li><p>降低系统灵活性和适应性。</p></li></ol><p>提高软件功能的比例：</p><ol><li>会降低硬件成本，提高软件成本；</li><li>降低系统解题速度；</li><li>提高系统灵活性和适应性。</li></ol><h1 id="_6、系统设计的任务与方法" tabindex="-1"><a class="header-anchor" href="#_6、系统设计的任务与方法"><span>6、系统设计的任务与方法</span></a></h1><h2 id="从中间向两边设计" tabindex="-1"><a class="header-anchor" href="#从中间向两边设计"><span>从中间向两边设计 ^ **</span></a></h2><h1 id="软、硬、器件的发展对系统结构的影响" tabindex="-1"><a class="header-anchor" href="#软、硬、器件的发展对系统结构的影响"><span>软、硬、器件的发展对系统结构的影响</span></a></h1><h1 id="软件发展对系统结构的影响" tabindex="-1"><a class="header-anchor" href="#软件发展对系统结构的影响"><span>软件发展对系统结构的影响 *</span></a></h1><h2 id="软件移植" tabindex="-1"><a class="header-anchor" href="#软件移植"><span>软件移植</span></a></h2><blockquote><p>【简】简述实现<strong>软件移植的技术途径</strong>及其适用环境 2008 0804</p></blockquote><p>软件可移植性：软件<strong>不修改</strong>或只经<strong>少量修改</strong>就可以由一台机器移到另一台机器上运行。</p><h3 id="移植途径-3个" tabindex="-1"><a class="header-anchor" href="#移植途径-3个"><span>移植途径（3个）*</span></a></h3><ul><li><strong>统一高级语言</strong>。适用于<strong>高级语言程序</strong>的移植。</li><li><strong>采用系列机</strong>。适用于<strong>结构相同或相似</strong>的机器间的<strong>汇编语言程序</strong>的移植。</li><li><strong>模拟和仿真</strong>。适用于<strong>结构不同</strong>的机器间的<strong>机器语言程序</strong>的移植。</li></ul><h4 id="_1-统一高级语言" tabindex="-1"><a class="header-anchor" href="#_1-统一高级语言"><span>（1）统一高级语言</span></a></h4><p>采用同一种不依赖于任何具体机器的高级语言编写系统软件和应用软件。<strong>适用于</strong>高级语言程序的软件移植。至今还没有出现这种语言，短期内很难实现。因此其存在以下问题：</p><ol><li>通用性和使用习惯不统一</li><li>语法、语义、语言结构不统一</li></ol><h4 id="_2-采用系列机" tabindex="-1"><a class="header-anchor" href="#_2-采用系列机"><span>（2）采用系列机 * *</span></a></h4><blockquote><p>【简】简述<strong>系列机思想</strong>对<strong>计算机发展的意义</strong>和系列机<strong>软件兼容</strong>的要求。<strong>1810</strong> <strong>1704</strong></p></blockquote><p><strong>系列机</strong>是指<strong>指令系统和体系结构相同</strong>的一系列不同型号的计算机。<strong>适用于</strong>结构相同或相似的机器间的<strong>汇编程序</strong>的软件移植。</p><p>主要掌握：</p><ol><li>系列机思想对计算机发展的影响</li><li>系列机软件兼容的基本要求</li><li>采用系列机的办法</li><li>采用系列机的优缺点</li></ol><blockquote><p>系列机思想对计算机发展的意义 * ^</p></blockquote><p>① 解决<strong>软件环境要求相对稳定</strong>和<strong>硬件</strong>、<strong>器件</strong>、<strong>组成</strong>技术迅速发展的矛盾；</p><p>② 软件不断丰富积累， 器件、硬件和组成不断更新，使之短期内能提供<strong>性价比高</strong>的机器，促进计算机的发展。</p><blockquote><p>系列机软件兼容的基本要求</p></blockquote><p>保证实现软件的<strong>向后兼容</strong>，力争做到<strong>向前兼容</strong>。 <u><strong>简记：向后向前</strong></u></p><blockquote><p>采用系列机的办法</p></blockquote><p><strong>软件移植中采用系列机途径的办法</strong>：在软、硬件界面上设定好一种系统结构，<strong>软件设计者</strong>按照此设计软件，<strong>硬件设计者</strong>根据机器的速度、性能、价格选择不同的器件、硬件和组成、实现技术并研制器件。</p><blockquote><p>采用系列机的优缺点</p></blockquote><p>优点：同<strong>意义</strong>。</p><p>缺点：<strong>限制了系统结构的发展</strong>。比如：PC系列机其系统结构非常落后，却使用最普及。</p><h4 id="_3-模拟和仿真" tabindex="-1"><a class="header-anchor" href="#_3-模拟和仿真"><span>（3）模拟和仿真 * ^</span></a></h4><blockquote><p>【简】简述<strong>模拟</strong>和<strong>仿真</strong>的<strong>定义</strong>，并说明两者的主要<strong>区别</strong>。1710 1107</p></blockquote><p>从指令系统来看，是指要在一种机器的系统结构上实现另一种机器的指令系统。</p><p>模拟：用<strong>机器语言程序</strong>解释另一种机器指令，解释程序存储在<strong>主存</strong>中。</p><p>仿真：用<strong>微程序</strong>解释另一种机器指令，解释程序存储在<strong>控制存储器</strong>中；应用仿真实现软件移植除了仿真目标机的<strong>指令系统</strong>外，还要仿真其<strong>存储体系</strong>、<strong>IO系统</strong>和<strong>控制台的操作</strong>。<strong>^</strong></p><p><strong><u>简记：模机主，仿微控制</u></strong></p><table><thead><tr><th style="text-align:center;">模拟</th><th>仿真</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230207212839331-5776642.png" alt="image-20230207212839331" loading="lazy"></td><td><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230207212927170.png" alt="image-20230207212927170" loading="lazy"></td></tr></tbody></table><p><strong>仿真与模拟的区别</strong> （* ^ ）：从解释语言、解释程序所在位置这两个点答。</p><p>模拟与仿真的比较（·）：</p><table><thead><tr><th style="text-align:center;">项目</th><th>模拟</th><th>仿真</th></tr></thead><tbody><tr><td style="text-align:center;">优点</td><td>可实现结构差异大的机器间的软件移植</td><td>速度快</td></tr><tr><td style="text-align:center;">缺点</td><td>速度慢、实时性差、模拟程序复杂</td><td>结构差异大的机器很难仿真</td></tr><tr><td style="text-align:center;">适用场合</td><td>运行时间短、使用次数少、无时间关系约束的软件</td><td>频繁使用且易于仿真的指令</td></tr></tbody></table><h3 id="软件兼容" tabindex="-1"><a class="header-anchor" href="#软件兼容"><span>软件兼容 ^</span></a></h3><blockquote><p>【简】简述软件兼容的定义及系列机对软件兼容的要求。<strong>1504</strong></p></blockquote><p>软件兼容：程序能不加修改地通用于系列内各档机器，则称各档机器是软件兼容的。</p><p><strong>系列机软件兼容的基本要求</strong>：保证实现软件的<strong>向后兼容</strong>，力争做到<strong>向前兼容</strong>。</p><h2 id="应用的发展对系统结构的影响" tabindex="-1"><a class="header-anchor" href="#应用的发展对系统结构的影响"><span>应用的发展对系统结构的影响 -</span></a></h2><p>无。</p><h2 id="器件的发展对系统结构的影响" tabindex="-1"><a class="header-anchor" href="#器件的发展对系统结构的影响"><span>器件的发展对系统结构的影响 -</span></a></h2><p>无。</p><h1 id="并行性开发" tabindex="-1"><a class="header-anchor" href="#并行性开发"><span>并行性开发</span></a></h1><p>作为程序员，并行、并发概念及应用无处不在，相当重要。</p><h2 id="并行性" tabindex="-1"><a class="header-anchor" href="#并行性"><span>并行性 ^ *</span></a></h2><p>并行性（Paramleism）：系统在同一时刻或同一时间间隔内进行多种运算或操作。并行性具有<strong>二重性</strong>，即<strong>同时性</strong>、<strong>并发性</strong>：</p><ul><li>同时性：两个或两个以上的事件在<strong>同一时刻</strong>发生。</li><li>并发性：两个或两个以上的事件在<strong>同一时间间隔内</strong>发送。</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230206220829889.png" alt="image-20230206220829889" tabindex="0" loading="lazy"><figcaption>image-20230206220829889</figcaption></figure><h2 id="并行性等级" tabindex="-1"><a class="header-anchor" href="#并行性等级"><span>并行性等级 ^ *</span></a></h2><blockquote><p>【简】简述并行性从计算机系统<strong>处理数据</strong>的角度划分的四个等级，并各举一例 <strong>1404</strong></p></blockquote><p>从3个维度看并行性等级：处理数据、执行程序、信息加工</p><p>从<strong>处理数据</strong>的角度，并行性等级从低到高：</p><ul><li><strong>位串字串</strong>。对一个字的一位进行处理。例如：位串行计算机</li><li><strong>位并字串</strong>。对<strong>一个字的全部位</strong>进行处理。例如：单处理机</li><li><strong>位片串字并</strong>。对<strong>多个字的同一位</strong>进行处理。例如：相联处理机</li><li><strong>全并行。<strong>对</strong>多个字的全部位或部分位</strong>进行处理。例如：全并行阵列处理机</li></ul><p>从<strong>执行程序</strong>的角度看，并行性等级从低到高：</p><ul><li><strong>指令内部 。</strong></li><li><strong>指令之间。</strong></li><li><strong>任务或过程之间。</strong> <u>简记：忍过</u></li><li><strong>作业或程序之间。</strong> <u>简记：作序</u></li></ul><p>从<strong>信息加工</strong>的角度看，并行性等级从低到高：******</p><ul><li>存储器操作 ＜ 处理器操作步骤 ＜ 处理器操作 ＜ 指令、任务、作业并行。</li></ul><h2 id="提高并行性的开发途径-3" tabindex="-1"><a class="header-anchor" href="#提高并行性的开发途径-3"><span>提高并行性的开发途径（3）</span></a></h2><blockquote><p>【简】简述提高计算机系统<strong>并行性技术的三个途径</strong> 0329 <strong>1910</strong> <strong>1204</strong> <strong>0907</strong> <strong>0704</strong></p></blockquote><ol><li><strong>时间重叠</strong>是在并行性概念中引入<strong>时间因素</strong>。让多个处理过程<strong>在时间上相互错开</strong>，轮流使用同一套硬件设备的各个部分。</li><li><strong>资源重复</strong>是在并行性概念中引入<strong>空间因素</strong>。重复设置硬件资源；</li><li><strong>资源共享</strong>是在并行性概念重要进入<strong>软件因素</strong>。利用软件让多个用户<strong>按时间顺序轮流使用</strong>同一套资源。</li></ol><h3 id="单机系统中的并行性" tabindex="-1"><a class="header-anchor" href="#单机系统中的并行性"><span>单机系统中的并行性 -</span></a></h3><h3 id="多级系统中的并行性" tabindex="-1"><a class="header-anchor" href="#多级系统中的并行性"><span>多级系统中的并行性</span></a></h3><ul><li>异构型、同构型、分布式</li><li>按耦合度分：紧耦合、松耦合</li></ul><h1 id="计算机系统的分类" tabindex="-1"><a class="header-anchor" href="#计算机系统的分类"><span>计算机系统的分类</span></a></h1><h2 id="弗林分类法" tabindex="-1"><a class="header-anchor" href="#弗林分类法"><span>弗林分类法*</span></a></h2><p><strong>1966年</strong>，Michael.J.Flynn 提出了，按照指令流和数据流的多倍性特性进行分类：</p><ul><li>SISD</li><li><strong>SIMD</strong>，代表：<strong>并行处理机、阵列处理机、向量处理机、相联处理机、超标量处理机、超流水线处理机</strong> <strong>^</strong></li><li>MISD</li><li><strong>MIMD</strong>，代表：紧耦合的 IBM3081、IBM3084、UNIVAC-1100/80；松耦合的 D-825、Cmmp、<strong>CRAY-2</strong>。</li></ul><blockquote><p>SISD</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230206214459186.png" alt="image-20230206214459186" tabindex="0" loading="lazy"><figcaption>image-20230206214459186</figcaption></figure><ul><li>CU：控制部件 PU：处理机 MM：主存模块 IS：指令流 DS：数据流</li></ul><blockquote><p>SIMD，代表：并行、阵列、向量、相联、超标量、超流水线处理机</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230206214611545.png" alt="image-20230206214611545" tabindex="0" loading="lazy"><figcaption>image-20230206214611545</figcaption></figure><ul><li>CU：控制部件 PU：处理机 MM：主存模块 IS：指令流 DS：数据流</li></ul><blockquote><p>MISD</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230206214928976.png" alt="image-20230206214928976" tabindex="0" loading="lazy"><figcaption>image-20230206214928976</figcaption></figure><ul><li>CU：控制部件 PU：处理机 MM：主存模块 IS：指令流 DS：数据流</li></ul><blockquote><p>MIMD</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230206214946933.png" alt="image-20230206214946933" tabindex="0" loading="lazy"><figcaption>image-20230206214946933</figcaption></figure><ul><li>CU：控制部件 PU：处理机 MM：主存模块 IS：指令流 DS：数据流</li></ul>',160),o=[r];function i(a,l){return g(),t("div",null,o)}const h=n(e,[["render",i],["__file"," 1 概论.html.vue"]]),d=JSON.parse('{"path":"/%E7%B3%BB%E7%BB%9F%E7%BB%93%E6%9E%84/%201%20%E6%A6%82%E8%AE%BA.html","title":"概论","lang":"zh-CN","frontmatter":{"title":"概论","order":1,"icon":"file","category":["系统结构","理论基础"],"description":"概论 参考 🔗 华中科技大学-计算机系统结构 📝 讲得很好，PPT设计得很棒 真题 简答题（15） 计算机系统“从中间向两边”设计到方法及软硬件人员各需要设计的内容 2204 选择从层级结构的主要软硬件界面开始设计，即在传统机器语言机器级和操作系统机器语言级之间进行合理的软硬件功能分配。 软件人员依次设计操作系统级、汇编语言级、高级语言级、应用语言...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/yibu_zzn/%E7%B3%BB%E7%BB%9F%E7%BB%93%E6%9E%84/%201%20%E6%A6%82%E8%AE%BA.html"}],["meta",{"property":"og:site_name","content":"郑振宁的数字资产中心"}],["meta",{"property":"og:title","content":"概论"}],["meta",{"property":"og:description","content":"概论 参考 🔗 华中科技大学-计算机系统结构 📝 讲得很好，PPT设计得很棒 真题 简答题（15） 计算机系统“从中间向两边”设计到方法及软硬件人员各需要设计的内容 2204 选择从层级结构的主要软硬件界面开始设计，即在传统机器语言机器级和操作系统机器语言级之间进行合理的软硬件功能分配。 软件人员依次设计操作系统级、汇编语言级、高级语言级、应用语言..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230206222144511.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T02:36:39.000Z"}],["meta",{"property":"article:author","content":"郑振宁"}],["meta",{"property":"article:modified_time","content":"2024-04-12T02:36:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"概论\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230206222144511.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230206222209523.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/IMG_9832.jpeg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/IMG_9833.jpeg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230302191059197.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230302192129316.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230302192342239.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230207212839331-5776642.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230207212927170.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230206220829889.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230206214459186.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230206214611545.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230206214928976.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20230206214946933.png\\"],\\"dateModified\\":\\"2024-04-12T02:36:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"简答题（15）","slug":"简答题-15","link":"#简答题-15","children":[]},{"level":2,"title":"计算机系统结构  ^ *","slug":"计算机系统结构","link":"#计算机系统结构","children":[]},{"level":2,"title":"计算机组成","slug":"计算机组成","link":"#计算机组成","children":[]},{"level":2,"title":"计算机实现 *","slug":"计算机实现","link":"#计算机实现","children":[]},{"level":2,"title":"系统结构、组成、实现之间的关系","slug":"系统结构、组成、实现之间的关系","link":"#系统结构、组成、实现之间的关系","children":[]},{"level":2,"title":"取舍的基本原则 ^ *","slug":"取舍的基本原则","link":"#取舍的基本原则","children":[]},{"level":2,"title":"软硬实现的优缺点","slug":"软硬实现的优缺点","link":"#软硬实现的优缺点","children":[]},{"level":2,"title":"软硬件配比","slug":"软硬件配比","link":"#软硬件配比","children":[]},{"level":2,"title":"从中间向两边设计 ^ **","slug":"从中间向两边设计","link":"#从中间向两边设计","children":[]},{"level":2,"title":"软件移植","slug":"软件移植","link":"#软件移植","children":[{"level":3,"title":"移植途径（3个）*","slug":"移植途径-3个","link":"#移植途径-3个","children":[]},{"level":3,"title":"软件兼容 ^","slug":"软件兼容","link":"#软件兼容","children":[]}]},{"level":2,"title":"应用的发展对系统结构的影响 -","slug":"应用的发展对系统结构的影响","link":"#应用的发展对系统结构的影响","children":[]},{"level":2,"title":"器件的发展对系统结构的影响 -","slug":"器件的发展对系统结构的影响","link":"#器件的发展对系统结构的影响","children":[]},{"level":2,"title":"并行性 ^ *","slug":"并行性","link":"#并行性","children":[]},{"level":2,"title":"并行性等级  ^ *","slug":"并行性等级","link":"#并行性等级","children":[]},{"level":2,"title":"提高并行性的开发途径（3）","slug":"提高并行性的开发途径-3","link":"#提高并行性的开发途径-3","children":[{"level":3,"title":"单机系统中的并行性 -","slug":"单机系统中的并行性","link":"#单机系统中的并行性","children":[]},{"level":3,"title":"多级系统中的并行性","slug":"多级系统中的并行性","link":"#多级系统中的并行性","children":[]}]},{"level":2,"title":"弗林分类法*","slug":"弗林分类法","link":"#弗林分类法","children":[]}],"git":{"createdTime":1712889399000,"updatedTime":1712889399000,"contributors":[{"name":"一步","email":"zzn_workmail@163.com","commits":1}]},"readingTime":{"minutes":14.89,"words":4468},"filePathRelative":"系统结构/ 1 概论.md","localizedDate":"2024年4月12日","excerpt":"\\n<h1>参考</h1>\\n<ul>\\n<li>🔗 <a href=\\"https://www.icourse163.org/learn/HUST-1207109824?tid=1207462224#/learn/content?type=detail&amp;id=1213569006&amp;sm=1\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">华中科技大学-计算机系统结构</a> 📝 讲得很好，PPT设计得很棒</li>\\n</ul>\\n<h1>真题</h1>\\n<h2>简答题（15）</h2>\\n<blockquote>\\n<p>计算机系统“从中间向两边”设计到方法及软硬件人员各需要设计的内容 <strong>2204</strong></p>\\n<p>选择从层级结构的主要软硬件界面开始设计，即在传统机器语言机器级和操作系统机器语言级之间进行合理的软硬件功能分配。</p>\\n<p>软件人员依次设计操作系统级、汇编语言级、高级语言级、应用语言级。</p>\\n<p>硬件人员依次设计传统机器语言级、微程序机器级。</p>\\n</blockquote>","autoDesc":true}');export{h as comp,d as data};
