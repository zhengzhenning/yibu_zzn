import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,e}from"./app-DdSNBsy6.js";const a={},d=e(`<h1 id="rancher" tabindex="-1"><a class="header-anchor" href="#rancher"><span>Rancher</span></a></h1><h2 id="网络问题" tabindex="-1"><a class="header-anchor" href="#网络问题"><span>网络问题</span></a></h2><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gse42tutiuj320c0ey75t.jpg" alt="image-20210507101744194" tabindex="0" loading="lazy"><figcaption>image-20210507101744194</figcaption></figure><h2 id="应用商店" tabindex="-1"><a class="header-anchor" href="#应用商店"><span>应用商店</span></a></h2><h3 id="questions-yml" tabindex="-1"><a class="header-anchor" href="#questions-yml"><span>questions.yml</span></a></h3><table><thead><tr><th>变量</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>variable</td><td>string</td><td>是</td><td>定义<code>values.yml</code>文件中指定的变量名。如果是嵌套对象，可以使用<code>foo.bar</code>这种形式。</td></tr><tr><td><strong>label</strong></td><td>string</td><td>是</td><td>指定变量的标题显示内容。</td></tr><tr><td><strong>description</strong></td><td>string</td><td>否</td><td>指定变量的描述显示内容。</td></tr><tr><td><strong>type</strong></td><td>string</td><td>否</td><td>变量类型，如果未指定，则默认为<code>string</code>(当前支持的类型为 string，multiline，boolean，int，enum，password，storageclass，hostname，pvc 和 secret。</td></tr><tr><td><strong>required</strong></td><td>bool</td><td>否</td><td>定义变量是否为必填(true | false)</td></tr><tr><td><strong>default</strong></td><td>string</td><td>否</td><td>指定默认值。</td></tr><tr><td>group</td><td>string</td><td>否</td><td>根据输入值对变量进行分组。</td></tr><tr><td>min_length</td><td>int</td><td>否</td><td>最小字符长度。</td></tr><tr><td>max_length</td><td>int</td><td>否</td><td>最大字符长度。</td></tr><tr><td>min</td><td>int</td><td>否</td><td>最小整数值。</td></tr><tr><td>max</td><td>int</td><td>否</td><td>最大整数值。</td></tr><tr><td>options</td><td>[]string</td><td>否</td><td>当变量类型为<code>enum</code>时指定选项，例如：options: - &quot;ClusterIP&quot; - &quot;NodePort&quot; - &quot;LoadBalancer&quot;</td></tr><tr><td>valid_chars</td><td>string</td><td>否</td><td>用于对输入字符进行验证的正则表达式。</td></tr><tr><td>invalid_chars</td><td>string</td><td>否</td><td>用于对无效输入字符验证的正则表达式。</td></tr><tr><td>subquestions</td><td>[]subquestion</td><td>否</td><td>添加一个子问题数组。</td></tr><tr><td>show_if</td><td>string</td><td>否</td><td>如果条件变量为 true，则显示当前变量。例如<code>show_if: &quot;serviceType=Nodeport&quot;</code></td></tr><tr><td>show_subquestion_if</td><td>string</td><td>否</td><td>如果条件变量为 true，或等于某个选项，则显示它的子问题。例如<code>show_subquestion_if: &quot;true&quot;</code></td></tr></tbody></table><blockquote><p><strong>示例</strong></p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">categories</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> Blog
  <span class="token punctuation">-</span> CMS
<span class="token key atrule">questions</span><span class="token punctuation">:</span>
	<span class="token comment"># 变量</span>
  <span class="token punctuation">-</span> <span class="token key atrule">variable</span><span class="token punctuation">:</span> persistence.enabled
  	<span class="token comment"># 默认值</span>
    <span class="token key atrule">default</span><span class="token punctuation">:</span> <span class="token string">&quot;false&quot;</span>
    <span class="token comment"># 描述</span>
    <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;Enable persistent volume for WordPress&quot;</span> <span class="token comment"># 传递给values.yml的值</span>
    <span class="token comment"># 类型</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> boolean
    <span class="token comment"># 是否必填</span>
    <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment"># 标题</span>
    <span class="token key atrule">label</span><span class="token punctuation">:</span> WordPress Persistent Volume Enabled
    <span class="token comment"># 是否显示子问题</span>
    <span class="token key atrule">show_subquestion_if</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment"># 分组</span>
    <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">&quot;WordPress Settings&quot;</span>
    <span class="token comment"># 子问题</span>
    <span class="token key atrule">subquestions</span><span class="token punctuation">:</span>
    	<span class="token comment"># 子问题1</span>
      <span class="token punctuation">-</span> <span class="token key atrule">variable</span><span class="token punctuation">:</span> persistence.size <span class="token comment"># 传递给values.yml的值</span>
        <span class="token key atrule">default</span><span class="token punctuation">:</span> <span class="token string">&quot;10Gi&quot;</span>
        <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;WordPress Persistent Volume Size&quot;</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> string
        <span class="token key atrule">label</span><span class="token punctuation">:</span> WordPress Volume Size
      <span class="token comment"># 子问题2</span>
      <span class="token punctuation">-</span> <span class="token key atrule">variable</span><span class="token punctuation">:</span> persistence.storageClass <span class="token comment"># 传递给values.yml的值</span>
        <span class="token key atrule">default</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;If undefined or null, uses the default StorageClass. Default to null&quot;</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> storageclass
        <span class="token key atrule">label</span><span class="token punctuation">:</span> Default StorageClass for WordPress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务发现问题" tabindex="-1"><a class="header-anchor" href="#服务发现问题"><span>服务发现问题</span></a></h2><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gse44s0fpzj31p00u0tc5.jpg" alt="image-20210508162253825" tabindex="0" loading="lazy"><figcaption>image-20210508162253825</figcaption></figure><h2 id="base64-加解密" tabindex="-1"><a class="header-anchor" href="#base64-加解密"><span>Base64 加解密</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 加密：echo -n &quot;value&quot; | base64
# 解密： echo 密文 | base64 -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gse44sg9suj322a0dadha.jpg" alt="25441619167151_.pic_hd" tabindex="0" loading="lazy"><figcaption>25441619167151_.pic_hd</figcaption></figure><p>解决方案：</p><figure><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gse44r6sdrj31570u0td5.jpg" alt="image-20210425214242878" tabindex="0" loading="lazy"><figcaption>image-20210425214242878</figcaption></figure>`,15),i=[d];function r(o,l){return n(),s("div",null,i)}const u=t(a,[["render",r],["__file","Rancher.html.vue"]]),g=JSON.parse('{"path":"/%E7%BB%84%E4%BB%B6%E7%AC%94%E8%AE%B0/Rancher.html","title":"Rancher","lang":"zh-CN","frontmatter":{"description":"Rancher 网络问题 image-20210507101744194image-20210507101744194 应用商店 questions.yml 示例 服务发现问题 image-20210508162253825image-20210508162253825 Base64 加解密 25441619167151_.pic_hd25441619...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E7%BB%84%E4%BB%B6%E7%AC%94%E8%AE%B0/Rancher.html"}],["meta",{"property":"og:site_name","content":"郑振宁的数字资产中心"}],["meta",{"property":"og:title","content":"Rancher"}],["meta",{"property":"og:description","content":"Rancher 网络问题 image-20210507101744194image-20210507101744194 应用商店 questions.yml 示例 服务发现问题 image-20210508162253825image-20210508162253825 Base64 加解密 25441619167151_.pic_hd25441619..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tva1.sinaimg.cn/large/008i3skNgy1gse42tutiuj320c0ey75t.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"郑振宁"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Rancher\\",\\"image\\":[\\"https://tva1.sinaimg.cn/large/008i3skNgy1gse42tutiuj320c0ey75t.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1gse44s0fpzj31p00u0tc5.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1gse44sg9suj322a0dadha.jpg\\",\\"https://tva1.sinaimg.cn/large/008i3skNgy1gse44r6sdrj31570u0td5.jpg\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"网络问题","slug":"网络问题","link":"#网络问题","children":[]},{"level":2,"title":"应用商店","slug":"应用商店","link":"#应用商店","children":[{"level":3,"title":"questions.yml","slug":"questions-yml","link":"#questions-yml","children":[]}]},{"level":2,"title":"服务发现问题","slug":"服务发现问题","link":"#服务发现问题","children":[]},{"level":2,"title":"Base64 加解密","slug":"base64-加解密","link":"#base64-加解密","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.58,"words":474},"filePathRelative":"组件笔记/Rancher.md","excerpt":"\\n<h2>网络问题</h2>\\n<figure><img src=\\"https://tva1.sinaimg.cn/large/008i3skNgy1gse42tutiuj320c0ey75t.jpg\\" alt=\\"image-20210507101744194\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20210507101744194</figcaption></figure>\\n<h2>应用商店</h2>\\n<h3>questions.yml</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>变量</th>\\n<th>类型</th>\\n<th>必填</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>variable</td>\\n<td>string</td>\\n<td>是</td>\\n<td>定义<code>values.yml</code>文件中指定的变量名。如果是嵌套对象，可以使用<code>foo.bar</code>这种形式。</td>\\n</tr>\\n<tr>\\n<td><strong>label</strong></td>\\n<td>string</td>\\n<td>是</td>\\n<td>指定变量的标题显示内容。</td>\\n</tr>\\n<tr>\\n<td><strong>description</strong></td>\\n<td>string</td>\\n<td>否</td>\\n<td>指定变量的描述显示内容。</td>\\n</tr>\\n<tr>\\n<td><strong>type</strong></td>\\n<td>string</td>\\n<td>否</td>\\n<td>变量类型，如果未指定，则默认为<code>string</code>(当前支持的类型为 string，multiline，boolean，int，enum，password，storageclass，hostname，pvc 和 secret。</td>\\n</tr>\\n<tr>\\n<td><strong>required</strong></td>\\n<td>bool</td>\\n<td>否</td>\\n<td>定义变量是否为必填(true | false)</td>\\n</tr>\\n<tr>\\n<td><strong>default</strong></td>\\n<td>string</td>\\n<td>否</td>\\n<td>指定默认值。</td>\\n</tr>\\n<tr>\\n<td>group</td>\\n<td>string</td>\\n<td>否</td>\\n<td>根据输入值对变量进行分组。</td>\\n</tr>\\n<tr>\\n<td>min_length</td>\\n<td>int</td>\\n<td>否</td>\\n<td>最小字符长度。</td>\\n</tr>\\n<tr>\\n<td>max_length</td>\\n<td>int</td>\\n<td>否</td>\\n<td>最大字符长度。</td>\\n</tr>\\n<tr>\\n<td>min</td>\\n<td>int</td>\\n<td>否</td>\\n<td>最小整数值。</td>\\n</tr>\\n<tr>\\n<td>max</td>\\n<td>int</td>\\n<td>否</td>\\n<td>最大整数值。</td>\\n</tr>\\n<tr>\\n<td>options</td>\\n<td>[]string</td>\\n<td>否</td>\\n<td>当变量类型为<code>enum</code>时指定选项，例如：options: - \\"ClusterIP\\"  - \\"NodePort\\"  - \\"LoadBalancer\\"</td>\\n</tr>\\n<tr>\\n<td>valid_chars</td>\\n<td>string</td>\\n<td>否</td>\\n<td>用于对输入字符进行验证的正则表达式。</td>\\n</tr>\\n<tr>\\n<td>invalid_chars</td>\\n<td>string</td>\\n<td>否</td>\\n<td>用于对无效输入字符验证的正则表达式。</td>\\n</tr>\\n<tr>\\n<td>subquestions</td>\\n<td>[]subquestion</td>\\n<td>否</td>\\n<td>添加一个子问题数组。</td>\\n</tr>\\n<tr>\\n<td>show_if</td>\\n<td>string</td>\\n<td>否</td>\\n<td>如果条件变量为 true，则显示当前变量。例如<code>show_if: \\"serviceType=Nodeport\\"</code></td>\\n</tr>\\n<tr>\\n<td>show_subquestion_if</td>\\n<td>string</td>\\n<td>否</td>\\n<td>如果条件变量为 true，或等于某个选项，则显示它的子问题。例如<code>show_subquestion_if: \\"true\\"</code></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{u as comp,g as data};
