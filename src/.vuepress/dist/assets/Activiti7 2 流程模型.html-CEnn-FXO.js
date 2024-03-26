import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as t,b as s}from"./app-ZnH9WbfS.js";const e={},p=s(`<h1 id="流程模型" tabindex="-1"><a class="header-anchor" href="#流程模型"><span>流程模型</span></a></h1><p>使用流程设计器设计<strong>流程模型</strong>，可以使用<strong>Camunda Modeler</strong>。也可以使用 <strong>IDEA actiBPM插件（IDEA要使用2019版）</strong>。</p><p>设计完流程后可以导出 <code>.bpmn</code> 文件，这个文件一般在<strong>单测环节</strong>使用：</p><img src="https://tva1.sinaimg.cn/large/008vxvgGly1h74v8zbi7aj30io0cc74w.jpg" alt="image-20220630214012926" style="zoom:25%;"><p>使用 <b style="color:red;">Camunda Modeler工具</b> 开发工作流引擎时需要注意改两个地方</p><p>⚠️ ：仅针对**<mark>版本7</mark>**，版本8的格式又不一样了</p><table><thead><tr><th style="text-align:center;">选择版本7</th><th style="text-align:center;">输出bpmn格式文件</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="https://tva1.sinaimg.cn/large/008vxvgGly1h74x1mzylij30io0cc74w.jpg" alt="image-20220420172131237" loading="lazy"></td><td style="text-align:center;"><img src="https://tva1.sinaimg.cn/large/008vxvgGly1h74x1r45o0j30ck07wglw.jpg" alt="image-20220413134125324" loading="lazy"></td></tr></tbody></table><p><strong>改动1：</strong> <strong>camunda:assignee, 需要换成activiti:assignee</strong></p><p><strong>改动2：</strong> 把<strong>约束标签</strong>替换成这个</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bpmn:</span>definitions</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>bpmn</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.omg.org/spec/BPMN/20100524/MODEL<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>bpmndi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.omg.org/spec/BPMN/20100524/DI<span class="token punctuation">&quot;</span></span>
                  <span class="token attr-name"><span class="token namespace">xmlns:</span>dc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.omg.org/spec/DD/20100524/DC<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>di</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.omg.org/spec/DD/20100524/DI<span class="token punctuation">&quot;</span></span>
                  <span class="token attr-name"><span class="token namespace">xmlns:</span>camunda</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://camunda.org/schema/1.0/bpmn<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
                  <span class="token attr-name"><span class="token namespace">xmlns:</span>activiti</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://activiti.org/bpmn<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>modeler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://camunda.org/schema/modeler/1.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Definitions_03io3g1<span class="token punctuation">&quot;</span></span>
                  <span class="token attr-name">targetNamespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://bpmn.io/schema/bpmn<span class="token punctuation">&quot;</span></span> <span class="token attr-name">exporter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Camunda Modeler<span class="token punctuation">&quot;</span></span> <span class="token attr-name">exporterVersion</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4.9.0<span class="token punctuation">&quot;</span></span>
                  <span class="token attr-name"><span class="token namespace">modeler:</span>executionPlatform</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Camunda Platform<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">modeler:</span>executionPlatformVersion</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>7.15.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[p];function c(l,i){return n(),t("div",null,o)}const m=a(e,[["render",c],["__file","Activiti7 2 流程模型.html.vue"]]),g=JSON.parse('{"path":"/Activiti7%E7%AC%94%E8%AE%B0/Activiti7%202%20%E6%B5%81%E7%A8%8B%E6%A8%A1%E5%9E%8B.html","title":"流程模型","lang":"zh-CN","frontmatter":{"description":"流程模型 使用流程设计器设计流程模型，可以使用Camunda Modeler。也可以使用 IDEA actiBPM插件（IDEA要使用2019版）。 设计完流程后可以导出 .bpmn 文件，这个文件一般在单测环节使用： image-20220630214012926 使用 Camunda Modeler工具 开发工作流引擎时需要注意改两个地方 ⚠️ ：...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Activiti7%E7%AC%94%E8%AE%B0/Activiti7%202%20%E6%B5%81%E7%A8%8B%E6%A8%A1%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"郑振宁的数字资产中心"}],["meta",{"property":"og:title","content":"流程模型"}],["meta",{"property":"og:description","content":"流程模型 使用流程设计器设计流程模型，可以使用Camunda Modeler。也可以使用 IDEA actiBPM插件（IDEA要使用2019版）。 设计完流程后可以导出 .bpmn 文件，这个文件一般在单测环节使用： image-20220630214012926 使用 Camunda Modeler工具 开发工作流引擎时需要注意改两个地方 ⚠️ ：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tva1.sinaimg.cn/large/008vxvgGly1h74x1mzylij30io0cc74w.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"郑振宁"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"流程模型\\",\\"image\\":[\\"https://tva1.sinaimg.cn/large/008vxvgGly1h74x1mzylij30io0cc74w.jpg\\",\\"https://tva1.sinaimg.cn/large/008vxvgGly1h74x1r45o0j30ck07wglw.jpg\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑振宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.74,"words":223},"filePathRelative":"Activiti7笔记/Activiti7 2 流程模型.md","excerpt":"\\n<p>使用流程设计器设计<strong>流程模型</strong>，可以使用<strong>Camunda Modeler</strong>。也可以使用 <strong>IDEA actiBPM插件（IDEA要使用2019版）</strong>。</p>\\n<p>设计完流程后可以导出 <code>.bpmn</code> 文件，这个文件一般在<strong>单测环节</strong>使用：</p>\\n<img src=\\"https://tva1.sinaimg.cn/large/008vxvgGly1h74v8zbi7aj30io0cc74w.jpg\\" alt=\\"image-20220630214012926\\" style=\\"zoom:25%;\\">","autoDesc":true}');export{m as comp,g as data};
