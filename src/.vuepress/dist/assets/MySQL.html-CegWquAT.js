import{_ as i,c as s,o as e,d as a}from"./app-CxjCT1yc.js";const l={},n=a(`<h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h1><ul><li><p>🔗 <a href="https://time.geekbang.org/dailylesson/topic/143" target="_blank" rel="noopener noreferrer">MySQL 难点解析</a></p></li><li><p><a href="https://dev.mysql.com/doc/index-other.html" target="_blank" rel="noopener noreferrer">MySQL官方：Example Databases</a> （<a href="https://blog.csdn.net/horses/article/details/106795844" target="_blank" rel="noopener noreferrer">介绍</a>）</p><ul><li><a href="https://github.com/datacharmer/test_db" target="_blank" rel="noopener noreferrer">employee data (large dataset, includes data and test/verification suite)</a> <a href="https://downloads.mysql.com/docs/employee-en.a4.pdf" target="_blank" rel="noopener noreferrer">PDF</a></li></ul></li><li><p>🔗 <a href="http://mysql.taobao.org/monthly/2015/10/03/" target="_blank" rel="noopener noreferrer">MySQL · 答疑解惑 · 索引过滤性太差引起CPU飙高分析</a></p></li><li><p>🔗 <a href="http://mysql.taobao.org/monthly/" target="_blank" rel="noopener noreferrer">数据库内核月报</a> 📝 阿里巴巴</p></li><li><p>📚 《Alibaba Java 开发手册》 📝 ch5 MySQL 数据库</p></li></ul><h1 id="存储引擎" tabindex="-1"><a class="header-anchor" href="#存储引擎"><span>存储引擎</span></a></h1><ul><li>InnoDB，支持事务、并发控制。</li><li>MyISAM，适合插入和查询。</li><li>Memory，数据存放在内存。</li></ul><h1 id="高性能、高可用-mysql-架构设计" tabindex="-1"><a class="header-anchor" href="#高性能、高可用-mysql-架构设计"><span>高性能、高可用 MySQL 架构设计</span></a></h1><ul><li>🔗 <a href="https://time.geekbang.org/dailylesson/detail/100044011?tid=143" target="_blank" rel="noopener noreferrer">如何搭建一款高性能、高可用的 MySQL 架构？</a></li></ul><h1 id="慢-sql" tabindex="-1"><a class="header-anchor" href="#慢-sql"><span>慢 SQL</span></a></h1><h2 id="定位技术" tabindex="-1"><a class="header-anchor" href="#定位技术"><span>定位技术</span></a></h2><ol><li>慢查询日志</li><li>服务监控</li></ol><h3 id="慢查询日志定位慢sql" tabindex="-1"><a class="header-anchor" href="#慢查询日志定位慢sql"><span>慢查询日志定位慢SQL</span></a></h3><ol><li>开启慢查询日志： mysql&gt; set global slow_query_log = on;</li><li>设置慢查询阈值：mysql&gt; set global long_query_time = 0.001; （时间单位：秒）</li><li>确定慢查询日志路径：mysql&gt; show global variables like &quot;datadir&quot;;</li><li>确定慢查询日志文件名：show global variables like &quot;slow_query_log_file&quot;;</li><li>退出MySQL，在服务器中执行：tail -n5 /var/lib/mysql/c1978ad7fe24-slow.log</li></ol><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20240827104504130.png" alt="image-20240827104504130" tabindex="0" loading="lazy"><figcaption>image-20240827104504130</figcaption></figure><h2 id="分析技术" tabindex="-1"><a class="header-anchor" href="#分析技术"><span>分析技术</span></a></h2><p>使用 explain(执行计划) 分析慢 SQL。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">explain </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">+</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> SQL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 查询语句;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="优化手段" tabindex="-1"><a class="header-anchor" href="#优化手段"><span>优化手段</span></a></h2><ul><li>分页优化</li><li>索引优化</li><li>连接优化</li><li>排序优化</li><li>Union 优化</li></ul><h3 id="分页优化" tabindex="-1"><a class="header-anchor" href="#分页优化"><span>分页优化</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> table</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> where</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> type</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> and</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> level</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 9</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> order by</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">asc</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> limit</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 190289</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>优化1：延迟关联</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> a.</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> a, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> table</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> where</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> type</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> and</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> level</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 9</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> order by</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">asc</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> limit</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 190289</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ) b</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> where</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">id</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化2：书签模式</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  select</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> table</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> where</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> table</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> where</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> type</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> and</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> level</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 9</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> order by</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">asc</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> limit</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 190</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引优化" tabindex="-1"><a class="header-anchor" href="#索引优化"><span>索引优化 *</span></a></h3><p>视情而定。</p><p><strong><u><mark>优化1：使用覆盖索引</mark></u></strong></p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> test </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> city</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;上海&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>被查询字段与查询条件建立联合索引：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">alter</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> test </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">add</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> index</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> idx_city_name (city, </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong><u><mark>优化2：禁用 <code>!=</code> 和 <code>&lt;&gt;</code></mark></u></strong></p><p>使用 <code>!=</code> 和 <code>&lt;&gt;</code> 会导致索引失效。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">column </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 改： column </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;a&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> or</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> column </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;a&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong><u><mark>优化3：使用前缀索引</mark></u></strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>alter table test add index index2(email(6));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="sql-join" tabindex="-1"><a class="header-anchor" href="#sql-join"><span>SQL JOIN</span></a></h1><p>一图看懂 SQL 的所有连接，从韦恩图视角理解左连接、右连接、内连接等。</p><h1 id="索引详解-重点" tabindex="-1"><a class="header-anchor" href="#索引详解-重点"><span>索引详解（重点）</span></a></h1><ul><li>优点：在数据达到一定量时，索引可加快数据检索速度，减少IO次数</li><li>缺点：需要额外的存储空间维护索引，同时，进行数据更新操作时，索引结构也会发生相应变化，继而影响SQL执行效率，此外，在表数据量不大时，索引未必优于全表扫描。</li></ul><p>主要以<a href="https://github.com/Snailclimb/JavaGuide/blob/main/docs/database/mysql/mysql-index.md" target="_blank" rel="noopener noreferrer">这篇</a>文章为主，重点了解以下内容：</p><ol><li>了解索引的优缺点</li><li>熟悉索引的底层数据结构</li><li>熟练掌握索引的分类及其应用场景</li><li>索引的最佳实践原则</li></ol><p>其中，索引底层数据结构的选型，需要搞清楚为什么是选择 B树 和 B+树 结构而非其他数据结构：</p><ul><li><p>HASH结构。不支持顺序和范围查询，因为数据是离散分布的。</p></li><li><h6 id="二叉查找树-binary-search-tree-。容易从平衡树退化成斜树-线性链表-进而导致查询效率急剧下降" tabindex="-1"><a class="header-anchor" href="#二叉查找树-binary-search-tree-。容易从平衡树退化成斜树-线性链表-进而导致查询效率急剧下降"><span>二叉查找树（<strong>B</strong>inary <strong>S</strong>earch <strong>T</strong>ree）。容易从平衡树退化成斜树（线性链表）进而导致查询效率急剧下降</span></a></h6></li><li><p>自平衡二叉查找树（<strong>AVL</strong>）。频繁进行旋转操作以保持平衡，增加额外开销；查询数据散列在多个节点时，会进行多次磁盘IO操作。</p></li><li><p>红黑树。<strong>与AVL树的区别</strong>在于不追求严格的平衡，而是大致平衡。</p></li><li><p><strong>B树</strong> &amp; <strong>B+树</strong> （<strong>多路平衡查找树</strong>）。B树的所有节点既存放<strong>键（KEY）<strong>也存放</strong>数据（DATA）</strong>。B+树只有叶子节点存放键（KEY）和数据（DATA），其余节点只放<strong>键（KEY）</strong>。</p></li></ul><blockquote><p>B树与B+树</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/1*eTJjGhhJSBPUMSnF0pXdzw-20240827143118258.png" alt="典型的B树" tabindex="0" loading="lazy"><figcaption>典型的B树</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/1*e3HHF3bVteXVtsWodTe4pA-20240827143146398.png" alt="B+树：A simple B+ tree example linking the keys 1–7 to data values d1-d7. The linked list (red) allows rapid in-order traversal. This particular tree’s branching factor is b" tabindex="0" loading="lazy"><figcaption>B+树：A simple B+ tree example linking the keys 1–7 to data values d1-d7. The linked list (red) allows rapid in-order traversal. This particular tree’s branching factor is b</figcaption></figure><h1 id="使用原则" tabindex="-1"><a class="header-anchor" href="#使用原则"><span>使用原则</span></a></h1><h2 id="索引原则" tabindex="-1"><a class="header-anchor" href="#索引原则"><span>索引原则 *</span></a></h2><ul><li>原则1：业务上具有唯一特性的字段，即使是组合字段，也必须建成唯一索引。</li><li>原则2：超过三章表禁止使用 join ，外键的数据类型保持绝对一致，且有索引。</li><li>原则3：页面搜索禁止使用左模糊或全模糊，如需要走搜索引擎解决。</li><li>原则4：使用 <code>order by</code> 时，注意索引的有序性。</li></ul><h2 id="sql-原则" tabindex="-1"><a class="header-anchor" href="#sql-原则"><span>SQL 原则 *</span></a></h2><ul><li>原则1：不要用 <code>count(列名)</code> 和 <code>count(常量)</code> 代替 <code>count(*)</code> ， 在统计行数上，<code>count(*)</code> 会统计值为 NULL 的行。</li><li>原则2：多表查询或变更时，需使用别名限定表名，如 <code>table_first as t1</code></li><li>原则3：禁止使用存储过程，原因有三：难调试、难扩展、不可移植。</li><li>原则4：在分布式、高并发集群场景下，禁止使用外键和级联。</li><li>原则5：代码分页逻辑，先 count 后 page ，若 count=0 ， 则直接返回。</li></ul><h1 id="索引分类" tabindex="-1"><a class="header-anchor" href="#索引分类"><span>索引分类</span></a></h1><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h87wx8lsulj30gh0fewf7.jpg" alt="008vxvgGgy1h87wx8lsulj30gh0fewf7" tabindex="0" loading="lazy"><figcaption>008vxvgGgy1h87wx8lsulj30gh0fewf7</figcaption></figure><h1 id="索引建立" tabindex="-1"><a class="header-anchor" href="#索引建立"><span>索引建立</span></a></h1><h1 id="索引失效" tabindex="-1"><a class="header-anchor" href="#索引失效"><span>索引失效</span></a></h1><p>索引失效的 5 种情况 :</p><ol><li>隐式类型转换</li><li>表达式计算</li><li>操作符判断，如 <code>!=</code> 、<code>&gt;</code> 、<code>&lt;</code> 、<code>&lt;=</code> 、<code>or</code> 、 <code>in</code>、<code>is null</code>、<code>is not null</code></li><li>函数</li><li><code>like %XXX </code>或 <code>like %XXX%</code></li><li>联合索引不满足最左匹配原则</li></ol><p>索引失效的**<mark>原因</mark>**：</p><ol><li>索引列与索引树结构匹配失败，导致触发**<mark>回表查询</mark>**。</li></ol><p>事务，为解决<strong>数据一致性</strong>而生。</p><h1 id="事务" tabindex="-1"><a class="header-anchor" href="#事务"><span>事务</span></a></h1><ul><li>🔗 <a href="https://blog.51cto.com/u_15177525/4161377" target="_blank" rel="noopener noreferrer">三分钟图解事务隔离级别，看一遍就懂</a></li></ul><h1 id="事务作用" tabindex="-1"><a class="header-anchor" href="#事务作用"><span>事务作用</span></a></h1><p>对数据持久化时，事务保障了持久化操作满足：“要么全部执行成功，要么全部不执行”的原则。</p><h1 id="事务特性" tabindex="-1"><a class="header-anchor" href="#事务特性"><span>事务特性</span></a></h1><p><strong><mark><u>简记：各持一元</u></mark></strong></p><ul><li>原子性（A）：事务不可再分</li><li>一致性（C）：执行事务后，数据一致</li><li>隔离性（I） ：事务之间互不干扰</li><li>持久性（D）：事务提交后，数据即持久化成功</li></ul><p>AID是手段，C是目的，即只有保证了事务的AID后，D才能得到保障：</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h7r7c3ca63j309r0ab0sw.jpg" alt="AID-&gt;C" tabindex="0" loading="lazy"><figcaption>AID-&gt;C</figcaption></figure><h1 id="并发事务" tabindex="-1"><a class="header-anchor" href="#并发事务"><span>并发事务</span></a></h1><p>在事务并发中（超过2个事务操作数据），可能导致4类问题的出现：</p><ul><li>脏读</li><li>幻读</li><li>不可重复读</li><li>丢失修改</li></ul><blockquote><p>脏读场景</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h8jhudskk7j30wq0iojtb.jpg" alt="脏读场景" tabindex="0" loading="lazy"><figcaption>脏读场景</figcaption></figure><blockquote><p>幻读场景</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h8jhv8mnyyj30tu0ioac0.jpg" alt="幻读场景" tabindex="0" loading="lazy"><figcaption>幻读场景</figcaption></figure><blockquote><p>不可重复读场景：两次读到的数据不一致。</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h8jhuqhrgoj30to0i8gn4.jpg" alt="闫春林" tabindex="0" loading="lazy"><figcaption>闫春林</figcaption></figure><blockquote><p>丢失修改</p></blockquote><h1 id="事务隔离" tabindex="-1"><a class="header-anchor" href="#事务隔离"><span>事务隔离</span></a></h1><p>事务隔离用于解决事务并发中产生的 4 类问题，事务隔离级别有 4 种，从低到高：</p><ol><li>读未提交</li><li>读已提交</li><li>可重复读 <mark>*</mark> （常用）</li><li>可串行化</li></ol><p>不同隔离级别对性能影响不同：</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h8ji4ny6d7j30zc0jc0ux.jpg" alt="不同隔离级别对性能影响" tabindex="0" loading="lazy"><figcaption>不同隔离级别对性能影响</figcaption></figure><h1 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化"><span>性能优化 *</span></a></h1><p>在并发场景下，事务会影响数据库的并发性能，因此在实际开发中，要注意排查事务使用的合理性。</p><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h8jiaycvgzj30tc0gmwg4-20240827095748496.jpg" alt="闫春林" tabindex="0" loading="lazy"><figcaption>闫春林</figcaption></figure>`,86),t=[n];function h(r,d){return e(),s("div",null,t)}const g=i(l,[["render",h],["__file","MySQL.html.vue"]]),k=JSON.parse('{"path":"/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AC%94%E8%AE%B0/MySQL.html","title":"MySQL","lang":"zh-CN","frontmatter":{"author":"振振","title":"MySQL","order":1,"icon":"file","date":"2024-03-19T00:00:00.000Z","category":["DB","MySQL"],"description":"参考 🔗 MySQL 难点解析 MySQL官方：Example Databases （介绍） employee data (large dataset, includes data and test/verification suite) PDF 🔗 MySQL · 答疑解惑 · 索引过滤性太差引起CPU飙高分析 🔗 数据库内核月报 📝 阿里巴...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/yibu_zzn/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AC%94%E8%AE%B0/MySQL.html"}],["meta",{"property":"og:site_name","content":"郑振宁的数字资产中心"}],["meta",{"property":"og:title","content":"MySQL"}],["meta",{"property":"og:description","content":"参考 🔗 MySQL 难点解析 MySQL官方：Example Databases （介绍） employee data (large dataset, includes data and test/verification suite) PDF 🔗 MySQL · 答疑解惑 · 索引过滤性太差引起CPU飙高分析 🔗 数据库内核月报 📝 阿里巴..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20240827104504130.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-27T10:44:32.000Z"}],["meta",{"property":"article:author","content":"振振"}],["meta",{"property":"article:published_time","content":"2024-03-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-27T10:44:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/image-20240827104504130.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/1*eTJjGhhJSBPUMSnF0pXdzw-20240827143118258.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/1*e3HHF3bVteXVtsWodTe4pA-20240827143146398.png\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h87wx8lsulj30gh0fewf7.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h7r7c3ca63j309r0ab0sw.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h8jhudskk7j30wq0iojtb.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h8jhv8mnyyj30tu0ioac0.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h8jhuqhrgoj30to0i8gn4.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h8ji4ny6d7j30zc0jc0ux.jpg\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/008vxvgGgy1h8jiaycvgzj30tc0gmwg4-20240827095748496.jpg\\"],\\"datePublished\\":\\"2024-03-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-27T10:44:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"振振\\"}]}"]]},"headers":[{"level":2,"title":"定位技术","slug":"定位技术","link":"#定位技术","children":[{"level":3,"title":"慢查询日志定位慢SQL","slug":"慢查询日志定位慢sql","link":"#慢查询日志定位慢sql","children":[]}]},{"level":2,"title":"分析技术","slug":"分析技术","link":"#分析技术","children":[]},{"level":2,"title":"优化手段","slug":"优化手段","link":"#优化手段","children":[{"level":3,"title":"分页优化","slug":"分页优化","link":"#分页优化","children":[]},{"level":3,"title":"索引优化 *","slug":"索引优化","link":"#索引优化","children":[]}]},{"level":2,"title":"索引原则 *","slug":"索引原则","link":"#索引原则","children":[]},{"level":2,"title":"SQL 原则 *","slug":"sql-原则","link":"#sql-原则","children":[]}],"git":{"createdTime":1711351664000,"updatedTime":1724755472000,"contributors":[{"name":"一步","email":"zzn_workmail@163.com","commits":2}]},"readingTime":{"minutes":5.69,"words":1706},"filePathRelative":"数据库笔记/MySQL.md","localizedDate":"2024年3月19日","excerpt":"\\n<ul>\\n<li>\\n<p>🔗 <a href=\\"https://time.geekbang.org/dailylesson/topic/143\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL 难点解析</a></p>\\n</li>\\n<li>\\n<p><a href=\\"https://dev.mysql.com/doc/index-other.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL官方：Example Databases</a> （<a href=\\"https://blog.csdn.net/horses/article/details/106795844\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">介绍</a>）</p>\\n<ul>\\n<li><a href=\\"https://github.com/datacharmer/test_db\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">employee data (large dataset, includes data and test/verification suite)</a> <a href=\\"https://downloads.mysql.com/docs/employee-en.a4.pdf\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">PDF</a></li>\\n</ul>\\n</li>\\n<li>\\n<p>🔗 <a href=\\"http://mysql.taobao.org/monthly/2015/10/03/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL · 答疑解惑 · 索引过滤性太差引起CPU飙高分析</a></p>\\n</li>\\n<li>\\n<p>🔗 <a href=\\"http://mysql.taobao.org/monthly/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">数据库内核月报</a> 📝 阿里巴巴</p>\\n</li>\\n<li>\\n<p>📚 《Alibaba Java 开发手册》 📝 ch5 MySQL 数据库</p>\\n</li>\\n</ul>","autoDesc":true}');export{g as comp,k as data};