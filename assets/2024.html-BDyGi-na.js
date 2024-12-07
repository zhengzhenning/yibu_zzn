import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as n,o as e}from"./app-DOae6opx.js";const l={};function t(h,i){return e(),a("div",null,i[0]||(i[0]=[n(`<h1 id="_2024-年日志" tabindex="-1"><a class="header-anchor" href="#_2024-年日志"><span>2024 年日志</span></a></h1><h2 id="_12月日志" tabindex="-1"><a class="header-anchor" href="#_12月日志"><span>12月日志</span></a></h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>SpringBoot</code> <code>RabbitMQ</code></p><p><a href="https://blog.csdn.net/wo18237095579/article/details/118695366" target="_blank" rel="noopener noreferrer">SpringBoot 完全整合 RabbitMQ + 100% 发送消息 + 高可靠消费消息 + 源码解析</a></p><p>采用自动ACK+有限次重试+推送到死信队列的方式存储消费异常的消息。</p></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>理论基础</code> <code>数据库</code> <code>事务</code></p><p>事务：对数据持久化时，事务保障了持久化操作满足：“要么全部执行成功，要么全部不执行”的原则。</p><p>四大特性：A C I D</p><ul><li>原子性（A）：事务不可再分</li><li>一致性（C）：执行事务后，数据一致</li><li>隔离性（I） ：事务之间互不干扰</li><li>持久性（D）：事务提交后，数据即持久化成功</li></ul><p>AID是手段，C是目的，即只有保证了事务的AID后，D才能得到保障：</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h7r7c3ca63j309r0ab0sw.jpg" alt="AID-&gt;C" tabindex="0" loading="lazy"><figcaption>AID-&gt;C</figcaption></figure></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>Docker</code> <code>k6</code> <code>Grafana</code> <code>InfluxDB</code></p><p>基于 K6 压测接口挺好用。</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20241204140226072.png" alt="Grafana界面" tabindex="0" loading="lazy"><figcaption>Grafana界面</figcaption></figure></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>性能测试</code></p><p>性能测试行业常用的性能指标表示法：</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/533fa609f8607dbd65878fb52ef87183-20241204111554907.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><a href="https://time.geekbang.com/column/article/182772?utm_campaign=geektime_search&amp;utm_content=geektime_search&amp;utm_medium=geektime_search&amp;utm_source=geektime_search&amp;utm_term=geektime_search" target="_blank" rel="noopener noreferrer">怎么理解TPS、QPS、RT、吞吐量这些性能指标？</a></p></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>Mac</code> <code>SpringBoot</code> <code>通用</code></p><p>遇到 Web server failed to start. Port 9703 was already in use.</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20241204105414737.png" alt="image-20241204105414737" tabindex="0" loading="lazy"><figcaption>image-20241204105414737</figcaption></figure><p>可执行以下命令杀死进程：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lsof</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :9703</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">kill</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -9</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">PI</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">D&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如：</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20241204105340595.png" alt="image-20241204105340595" tabindex="0" loading="lazy"><figcaption>image-20241204105340595</figcaption></figure><p>执行完后，重启 SpringBoot 工程。</p><p>其他场景下的端口占用，同样适用。</p></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>数据库理论基础</code> <code>并发事务</code> <code>事务传播级别</code></p><p>并发事务（超过2个事务操作数据）引起脏读、幻读、不可重复读、丢失更新4类问题，这4类问题可以通过设置事务传播级别解决，共有4类级别，从低到高依次为：读未提交、读已提交、可重复读、可串行化，他们对数据库性能的影响如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h8ji4ny6d7j30zc0jc0ux.jpg" alt="不同隔离级别对性能影响" tabindex="0" loading="lazy"><figcaption>不同隔离级别对性能影响</figcaption></figure><p>当遇到事务并发问题时，可以尝试从以下几方面着手排查：</p><ol><li>无数据一致性要求</li><li>只有查询的事务</li><li>事务中有统计汇总</li><li>内容繁杂的大失误</li></ol><p><a href="https://blog.51cto.com/u_15177525/4161377" target="_blank" rel="noopener noreferrer">三分钟图解事务隔离级别，看一遍就懂</a></p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>高并发</code> <code>数据一致性</code> <code>事务传播</code> <code>锁粒度设计</code></p><p>并发场景下，发现数据库写入数据不一致时，可以考虑是否是事务传播级别引起的，此外其他可能引起数据不一致的：</p><ol><li>未加锁或锁设计不合理导致多线程并发修改导致数据不一致</li></ol></div><h2 id="_11月日志" tabindex="-1"><a class="header-anchor" href="#_11月日志"><span>11月日志</span></a></h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>Java</code> <code>SpringBoot</code></p><p>通过以下代码块模拟程序异常场景：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // X0% 的概率进入 1/0</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Random</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nextInt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 9</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">      log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">error</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(LOG </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;命中异常分支...&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> /</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Random</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nextInt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                throw</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> InterruptedException</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;命中异常分支。。。InterruptedException&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            }</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Random</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nextInt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                throw</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> RuntimeException</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;命中异常分支。。。InterruptedException&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>异常场景主要用于验证代码的健壮性，如：异常回滚等。</p></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>IntelliJ IDEA</code> <code>SpringBoot</code></p><p>MyBatis配置输出SQL:</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">mybatis-plus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  configuration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    log-impl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">org.apache.ibatis.logging.stdout.StdOutImpl</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配合 IDEA <code>MyBatis Log Free</code> 插件查看SQL输出</p><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20241202140815514.png" alt="image-20241202140815514" style="zoom:50%;"></div><div class="hint-container caution"><p class="hint-container-title">警告</p><p><code>spring-boot-starter-amqp:2.3.4.RELEASE</code></p><p><code>RabbitMQ 3.12.14</code></p><p><code>Erlang 25.3.2.13</code></p><p>rabbitmq 消费端消费失败后，需考虑重试机制。</p><p>引入重试机制后需考虑消息重复消费问题，确保数据幂等。</p><p>此外，重试策略要选好，避免短时间内产生大量重试请求，造成系统压力和消息堆积，重试到一定次数后仍未成功的，需把消息推送到死信队列做进一步处理。</p><p>注意，对于数据一致性要求高的场景，如：与钱袋子💰相关的，建议使用<strong>手动ACK模式</strong>，确保消息处理的准确性。</p><ul><li><p>参考</p><ul><li><p><a href="https://blog.csdn.net/belongtocode/article/details/104310152" target="_blank" rel="noopener noreferrer">RabbitMQ解决消费者补偿幂等问题(重复消费问题)</a></p></li><li><p><a href="https://blog.csdn.net/qq_60638478/article/details/141220718" target="_blank" rel="noopener noreferrer">RabbitMQ的消息确认机制Ack Mode</a></p></li><li><p><a href="https://blog.csdn.net/AkiraNicky/article/details/89640512" target="_blank" rel="noopener noreferrer">SpringBoot整合RabbitMQ（小兔子成神之路）</a></p></li><li><p><a href="https://docs.spring.io/spring-boot/reference/messaging/amqp.html" target="_blank" rel="noopener noreferrer">Spring AMQP</a></p></li></ul></li></ul></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>Docker 拉取镜像慢时，需配置<mark>可访问</mark>的第三方镜像，如：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;registry-mirrors&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;http://hub-mirror.c.163.com&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;https://docker.mirrors.ustc.edu.cn&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;https://pee6w651.mirror.aliyuncs.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置后，需要重载文件、重启Docker服务</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Docker 常用镜像的启动参数得懂，比如启动 MySQL:</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --restart=always</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-v </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/datas/mysql/data:/var/lib/mysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-v </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/datas/mysql/conf:/etc/mysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-v </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/datas/mysql/log:/var/log/mysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-p </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">3306:3306</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-e </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">TZ=Asia/Shanghai</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-e </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">MYSQL_ROOT_PASSWORD=root</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">mysql:5.6 </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--character-set-server=utf8mb4 </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">--collation-server=utf8mb4_general_ci</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-v /datas/mysql/data:/var/lib/mysql：将数据文件夹挂载到主机</span></span>
<span class="line"><span>-v /datas/mysql/conf:/etc/mysql：将配置文件夹挂在到主机，可以在宿主机放一份自定义 my.cnf文件，那么容器就会按自定义配置启动</span></span>
<span class="line"><span>-v /datas/mysql/log:/var/log/mysql：将日志文件夹挂载到主机</span></span>
<span class="line"><span>-p 3306:3306：将容器的3306端口映射到主机的3306端口</span></span>
<span class="line"><span>-e MYSQL_ROOT_PASSWORD=root：初始化root用户的密码</span></span>
<span class="line"><span>--character-set-server=utf8mb4：设置字符集</span></span>
<span class="line"><span>--collation-server=utf8mb4_general_ci：排序方式</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>可以在 Win/Mac 下同时配置 Github、Gitee，也可以一个项目管理同时关联Gitee、Github库</p></div><h2 id="_10月日志" tabindex="-1"><a class="header-anchor" href="#_10月日志"><span>10月日志</span></a></h2><div class="hint-container caution"><p class="hint-container-title">警告</p><p><code>监控告警平台</code> <code>不好用</code></p><p><a href="https://github.com/dianping/cat/" target="_blank" rel="noopener noreferrer">CAT</a> 是基于 Java 开发的实时应用监控平台，为美团点评提供了全面的实时监控告警服务。</p><p>CAT 成功部署并访问，环境如下：</p><ul><li>虚拟机 Linux Centos8</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@localhost cat]# uname -a</span></span>
<span class="line"><span>Linux localhost.localdomain 4.18.0-348.7.1.el8_5.x86_64 #1 SMP Wed Dec 22 13:25:12 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>JAVA8</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@localhost cat]# java -version</span></span>
<span class="line"><span>java version &quot;1.8.0_431&quot;</span></span>
<span class="line"><span>Java(TM) SE Runtime Environment (build 1.8.0_431-b10)</span></span>
<span class="line"><span>Java HotSpot(TM) Server VM (build 25.431-b10, mixed mode)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Tomcat7</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@localhost tomcat]# ls</span></span>
<span class="line"><span>apache-tomcat-7.0.99.tar.gz   tomcat7</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Maven3</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@localhost tomcat]# mvn -v</span></span>
<span class="line"><span>Apache Maven 3.6.3 (cecedd343002696d0abb50b32b541b8a6ba2883f)</span></span>
<span class="line"><span>Maven home: /opt/maven/apache-maven-3.6.3</span></span>
<span class="line"><span>Java version: 1.8.0_431, vendor: Oracle Corporation, runtime: /usr/java/jdk1.8.0_431/jre</span></span>
<span class="line"><span>Default locale: zh_CN, platform encoding: UTF-8</span></span>
<span class="line"><span>OS name: &quot;linux&quot;, version: &quot;4.18.0-348.7.1.el8_5.x86_64&quot;, arch: &quot;i386&quot;, family: &quot;unix&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>环境准备完毕后，将 <code>cat.war</code> 放置在这个路径下： <a href="https://github.com/dianping/cat/releases/tag/v3.0.0" target="_blank" rel="noopener noreferrer">war包下载地址</a></li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost webapps]# pwd</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/opt/tomcat/tomcat7/webapps</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost webapps]# ls</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  cat.war</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  docs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  examples</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  host-manager</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  manager</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  ROOT</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost webapps]#</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动 CAT 服务：</li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 进入</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Tomcat7</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 目录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost bin]# pwd</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/opt/tomcat/tomcat7/bin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">--</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 执行</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> catalina.sh</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost bin]# sh catalina.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20241204153043961.png" alt="监控界面" tabindex="0" loading="lazy"><figcaption>监控界面</figcaption></figure><p>访问配置管理界面：</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20241204153127435.png" alt="配置管理登录页" tabindex="0" loading="lazy"><figcaption>配置管理登录页</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20241204153146238.png" alt="客户端路由配置界面" tabindex="0" loading="lazy"><figcaption>客户端路由配置界面</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20241204153218576.png" alt="服务端配置界面" tabindex="0" loading="lazy"><figcaption>服务端配置界面</figcaption></figure></div>`,18)]))}const d=s(l,[["render",t],["__file","2024.html.vue"]]),k=JSON.parse('{"path":"/%E6%BC%AB%E6%B8%B8%E6%97%A5%E5%BF%97/2024.html","title":"2024 年日志","lang":"zh-CN","frontmatter":{"head":[["meta",{"name":"日志","content":"开发日志"}],["meta",{"property":"og:url","content":"https://mister-hope.github.io/yibu_zzn/%E6%BC%AB%E6%B8%B8%E6%97%A5%E5%BF%97/2024.html"}],["meta",{"property":"og:site_name","content":"郑振宁"}],["meta",{"property":"og:title","content":"2024 年日志"}],["meta",{"property":"og:description","content":"2024 年日志 12月日志 相关信息 SpringBoot RabbitMQ SpringBoot 完全整合 RabbitMQ + 100% 发送消息 + 高可靠消费消息 + 源码解析 采用自动ACK+有限次重试+推送到死信队列的方式存储消费异常的消息。 相关信息 理论基础 数据库 事务 事务：对数据持久化时，事务保障了持久化操作满足：“要么全部执行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h7r7c3ca63j309r0ab0sw.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-06T09:32:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-06T09:32:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2024 年日志\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h7r7c3ca63j309r0ab0sw.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20241204140226072.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/533fa609f8607dbd65878fb52ef87183-20241204111554907.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20241204105414737.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20241204105340595.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h8ji4ny6d7j30zc0jc0ux.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20241204153043961.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20241204153127435.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20241204153146238.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20241204153218576.png\\"],\\"dateModified\\":\\"2024-12-06T09:32:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]],"description":"2024 年日志 12月日志 相关信息 SpringBoot RabbitMQ SpringBoot 完全整合 RabbitMQ + 100% 发送消息 + 高可靠消费消息 + 源码解析 采用自动ACK+有限次重试+推送到死信队列的方式存储消费异常的消息。 相关信息 理论基础 数据库 事务 事务：对数据持久化时，事务保障了持久化操作满足：“要么全部执行..."},"headers":[{"level":2,"title":"12月日志","slug":"_12月日志","link":"#_12月日志","children":[]},{"level":2,"title":"11月日志","slug":"_11月日志","link":"#_11月日志","children":[]},{"level":2,"title":"10月日志","slug":"_10月日志","link":"#_10月日志","children":[]}],"git":{"createdTime":1732787493000,"updatedTime":1733477532000,"contributors":[{"name":"一步","email":"zzn_workmail@163.com","commits":4}]},"readingTime":{"minutes":5.1,"words":1530},"filePathRelative":"漫游日志/2024.md","localizedDate":"2024年11月28日","excerpt":"\\n<h2>12月日志</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p><code>SpringBoot</code> <code>RabbitMQ</code></p>\\n<p><a href=\\"https://blog.csdn.net/wo18237095579/article/details/118695366\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">SpringBoot 完全整合 RabbitMQ + 100% 发送消息 + 高可靠消费消息 + 源码解析</a></p>\\n<p>采用自动ACK+有限次重试+推送到死信队列的方式存储消费异常的消息。</p>\\n</div>","autoDesc":true}');export{d as comp,k as data};
