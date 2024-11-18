import{_ as e,c as t,o as a,a as n}from"./app-DuyJNj0i.js";const o={},r=n('<h2 id="类与对象" tabindex="-1"><a class="header-anchor" href="#类与对象"><span>类与对象</span></a></h2><h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器"><span>构造器</span></a></h2><h2 id="拷贝" tabindex="-1"><a class="header-anchor" href="#拷贝"><span>拷贝</span></a></h2><p>拷贝有深浅拷贝两种，就<strong>引用类型</strong>而言，其区别：</p><ul><li>深拷贝：副本与原对象的<strong>引用地址不同</strong>；</li><li>浅拷贝：副本与原对象的<strong>引用地址相同</strong>。</li></ul><h2 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式"><span>实现方式</span></a></h2><p>实现 <code>Cloneable</code> 接口，并重写 <code>clone()</code> 方法。</p><h1 id="序列化与反序列化" tabindex="-1"><a class="header-anchor" href="#序列化与反序列化"><span>序列化与反序列化</span></a></h1><p>序列化：对象 → 二进制字节流</p><p>反序列化：二进制字节流 → 对象</p><h2 id="实践原则" tabindex="-1"><a class="header-anchor" href="#实践原则"><span>实践原则</span></a></h2><p>原则1：使用 <code>transient</code> 关键字修饰，以禁用序列化。</p><p>原则2：实现 <code>java.io.Serializable</code> 接口，以启用序列化。</p><p>原则3：生成 <code>serialVersionUID</code>，以进行版本控制。</p><p>原则4：使用第三方序列化工具（如：<code>Kryo</code>），以规避 <code>JDK</code> 自带的安全性问题以及移植性问题。</p>',15),i=[r];function l(c,s){return a(),t("div",null,i)}const d=e(o,[["render",l],["__file","2类与对象.html.vue"]]),h=JSON.parse('{"path":"/Java%E7%AC%94%E8%AE%B0/2%E7%B1%BB%E4%B8%8E%E5%AF%B9%E8%B1%A1.html","title":"类与对象","lang":"zh-CN","frontmatter":{"author":"振振","title":"类与对象","order":2,"icon":"file","date":"2022-11-10T00:00:00.000Z","category":["Java"],"description":"类与对象 构造器 拷贝 拷贝有深浅拷贝两种，就引用类型而言，其区别： 深拷贝：副本与原对象的引用地址不同； 浅拷贝：副本与原对象的引用地址相同。 实现方式 实现 Cloneable 接口，并重写 clone() 方法。 序列化与反序列化 序列化：对象 → 二进制字节流 反序列化：二进制字节流 → 对象 实践原则 原则1：使用 transient 关键字...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/yibu_zzn/Java%E7%AC%94%E8%AE%B0/2%E7%B1%BB%E4%B8%8E%E5%AF%B9%E8%B1%A1.html"}],["meta",{"property":"og:site_name","content":"郑振宁"}],["meta",{"property":"og:title","content":"类与对象"}],["meta",{"property":"og:description","content":"类与对象 构造器 拷贝 拷贝有深浅拷贝两种，就引用类型而言，其区别： 深拷贝：副本与原对象的引用地址不同； 浅拷贝：副本与原对象的引用地址相同。 实现方式 实现 Cloneable 接口，并重写 clone() 方法。 序列化与反序列化 序列化：对象 → 二进制字节流 反序列化：二进制字节流 → 对象 实践原则 原则1：使用 transient 关键字..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T09:32:58.000Z"}],["meta",{"property":"article:author","content":"振振"}],["meta",{"property":"article:published_time","content":"2022-11-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-26T09:32:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类与对象\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-26T09:32:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"振振\\"}]}"]]},"headers":[{"level":2,"title":"类与对象","slug":"类与对象","link":"#类与对象","children":[]},{"level":2,"title":"构造器","slug":"构造器","link":"#构造器","children":[]},{"level":2,"title":"拷贝","slug":"拷贝","link":"#拷贝","children":[]},{"level":2,"title":"实现方式","slug":"实现方式","link":"#实现方式","children":[]},{"level":2,"title":"实践原则","slug":"实践原则","link":"#实践原则","children":[]}],"git":{"createdTime":1710839855000,"updatedTime":1711445578000,"contributors":[{"name":"一步","email":"zzn_workmail@163.com","commits":1}]},"readingTime":{"minutes":0.69,"words":206},"filePathRelative":"Java笔记/2类与对象.md","localizedDate":"2022年11月10日","excerpt":"<h2>类与对象</h2>\\n<h2>构造器</h2>\\n<h2>拷贝</h2>\\n<p>拷贝有深浅拷贝两种，就<strong>引用类型</strong>而言，其区别：</p>\\n<ul>\\n<li>深拷贝：副本与原对象的<strong>引用地址不同</strong>；</li>\\n<li>浅拷贝：副本与原对象的<strong>引用地址相同</strong>。</li>\\n</ul>\\n<h2>实现方式</h2>\\n<p>实现 <code>Cloneable</code> 接口，并重写 <code>clone()</code> 方法。</p>\\n<h1>序列化与反序列化</h1>\\n<p>序列化：对象 → 二进制字节流</p>","autoDesc":true}');export{d as comp,h as data};
