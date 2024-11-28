import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as i,a as d}from"./app-DkPjE498.js";const t={},n=d('<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>Redis</span></a></h1><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/79da7093ed998a99d9abe91e610b74e7.jpg.webp" alt="79da7093ed998a99d9abe91e610b74e7.jpg" tabindex="0" loading="lazy"><figcaption>79da7093ed998a99d9abe91e610b74e7.jpg</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/70a5bc1ddc9e3579a2fcb8a5d44118b4.jpeg.webp" alt="70a5bc1ddc9e3579a2fcb8a5d44118b4.jpeg" tabindex="0" loading="lazy"><figcaption>70a5bc1ddc9e3579a2fcb8a5d44118b4.jpeg</figcaption></figure><h1 id="redis-性能优化" tabindex="-1"><a class="header-anchor" href="#redis-性能优化"><span>Redis 性能优化</span></a></h1><p>引起Redis性能问题的原因有多种，以下是常见的几种：</p><ul><li>大量key集中过期</li><li>大Key引起内存和网络带宽过载</li><li>热Key引起CPU和网络带宽过载</li><li>慢查询指令引起性能问题，如 KEYS * 、HGETALL 、LRANGE、SMEMBERS等</li><li>内存碎片引起性能问题，内存碎片率超1.5</li></ul><h2 id="大量key集中过期的解决办法" tabindex="-1"><a class="header-anchor" href="#大量key集中过期的解决办法"><span>大量KEY集中过期的解决办法</span></a></h2><ol><li>给KEY设置随机时间</li><li>开启 lazy-free，Redis会通过单独的子线程来释放清理过期的KEY</li></ol><h2 id="大key引起内存和网络带宽过载的解决办法" tabindex="-1"><a class="header-anchor" href="#大key引起内存和网络带宽过载的解决办法"><span>大KEY引起内存和网络带宽过载的解决办法</span></a></h2><ul><li>分隔大KEY：</li></ul>',10),c=[n];function s(p,g){return i(),a("div",null,c)}const l=e(t,[["render",s],["__file","Redis.html.vue"]]),b=JSON.parse('{"path":"/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AC%94%E8%AE%B0/Redis.html","title":"Redis","lang":"zh-CN","frontmatter":{"description":"Redis 79da7093ed998a99d9abe91e610b74e7.jpg79da7093ed998a99d9abe91e610b74e7.jpg 70a5bc1ddc9e3579a2fcb8a5d44118b4.jpeg70a5bc1ddc9e3579a2fcb8a5d44118b4.jpeg Redis 性能优化 引起Redis性能问题的...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/yibu_zzn/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AC%94%E8%AE%B0/Redis.html"}],["meta",{"property":"og:site_name","content":"郑振宁"}],["meta",{"property":"og:title","content":"Redis"}],["meta",{"property":"og:description","content":"Redis 79da7093ed998a99d9abe91e610b74e7.jpg79da7093ed998a99d9abe91e610b74e7.jpg 70a5bc1ddc9e3579a2fcb8a5d44118b4.jpeg70a5bc1ddc9e3579a2fcb8a5d44118b4.jpeg Redis 性能优化 引起Redis性能问题的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/79da7093ed998a99d9abe91e610b74e7.jpg.webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-27T10:44:32.000Z"}],["meta",{"property":"article:author","content":"郑振宁"}],["meta",{"property":"article:modified_time","content":"2024-08-27T10:44:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/79da7093ed998a99d9abe91e610b74e7.jpg.webp\\",\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/70a5bc1ddc9e3579a2fcb8a5d44118b4.jpeg.webp\\"],\\"dateModified\\":\\"2024-08-27T10:44:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"大量KEY集中过期的解决办法","slug":"大量key集中过期的解决办法","link":"#大量key集中过期的解决办法","children":[]},{"level":2,"title":"大KEY引起内存和网络带宽过载的解决办法","slug":"大key引起内存和网络带宽过载的解决办法","link":"#大key引起内存和网络带宽过载的解决办法","children":[]}],"git":{"createdTime":1724755472000,"updatedTime":1724755472000,"contributors":[{"name":"一步","email":"zzn_workmail@163.com","commits":1}]},"readingTime":{"minutes":0.55,"words":166},"filePathRelative":"数据库笔记/Redis.md","localizedDate":"2024年8月27日","excerpt":"\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/79da7093ed998a99d9abe91e610b74e7.jpg.webp\\" alt=\\"79da7093ed998a99d9abe91e610b74e7.jpg\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>79da7093ed998a99d9abe91e610b74e7.jpg</figcaption></figure>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/zhengzhenning/imageBeds@main/images/70a5bc1ddc9e3579a2fcb8a5d44118b4.jpeg.webp\\" alt=\\"70a5bc1ddc9e3579a2fcb8a5d44118b4.jpeg\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>70a5bc1ddc9e3579a2fcb8a5d44118b4.jpeg</figcaption></figure>","autoDesc":true}');export{l as comp,b as data};
