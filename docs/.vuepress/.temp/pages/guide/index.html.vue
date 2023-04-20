<template><div><h1 id="build-gram" tabindex="-1"><a class="header-anchor" href="#build-gram" aria-hidden="true">#</a> Build Gram</h1>
<p>As a developer, you must be aware of that VuePress has two main parts: Node App and Client App, which is important when developing plugins and themes:
As a developer, you must be aware of that VuePress has two main parts: Node App and Client App, which is important when developing plugins and themes:</p>
<h2 id="header-js" tabindex="-1"><a class="header-anchor" href="#header-js" aria-hidden="true">#</a> Header JS</h2>
<CodeGroup>
<CodeGroupItem title="Js">
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> myElement <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">I am a paragraph.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">I am a paragraph too.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="Css">
<div class="language-css" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Swift">
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> proPackageOptions<span class="token punctuation">:</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> id <span class="token operator">=</span>  <span class="token function">UUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> onRemoteQualityScale<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">let</span> onDeviceQualityScale<span class="token punctuation">:</span> <span class="token class-name">Double</span>
    <span class="token keyword">let</span> waterMarkRemove<span class="token punctuation">:</span> <span class="token class-name">Bool</span>
    <span class="token keyword">let</span> proLogo<span class="token punctuation">:</span> <span class="token class-name">Bool</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<hr>
<Tabs  :events="[]">
<Tab label="JS">
<div class="language-javascript" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// line-numbers is enabled by default</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>
</code></pre></div></Tab>
<Tab label="CSS">
<div class="language-css" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></Tab>
</Tabs>
<hr>
 <!-- <iframe width="600" height="600" src="https://stackblitz.com/edit/js-pd7hfx?embed=1&file=index.js"></iframe> -->
<iframeComp ihtml="https://stackblitz.com/edit/js-pd7hfx?embed=1&file=index.js"></iframeComp><div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// line-numbers is enabled by default</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// line-numbers is disabled</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>
</code></pre></div><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> myElement <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">I am a paragraph.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">I am a paragraph too.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="posts-js" tabindex="-1"><a class="header-anchor" href="#posts-js" aria-hidden="true">#</a> Posts JS</h2>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> proPackageOptions<span class="token punctuation">:</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> id <span class="token operator">=</span>  <span class="token function">UUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> onRemoteQualityScale<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">let</span> onDeviceQualityScale<span class="token punctuation">:</span> <span class="token class-name">Double</span>
    <span class="token keyword">let</span> waterMarkRemove<span class="token punctuation">:</span> <span class="token class-name">Bool</span>
    <span class="token keyword">let</span> proLogo<span class="token punctuation">:</span> <span class="token class-name">Bool</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="footer-js" tabindex="-1"><a class="header-anchor" href="#footer-js" aria-hidden="true">#</a> Footer JS</h2>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> myElement <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">I am a paragraph.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">I am a paragraph too.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="build-gram-react" tabindex="-1"><a class="header-anchor" href="#build-gram-react" aria-hidden="true">#</a> Build Gram (React)</h1>
<p>As a developer, you must be aware of that VuePress has two main parts: Node App and Client App, which is important when developing plugins and themes:
As a developer, you must be aware of that VuePress has two main parts: Node App and Client App, which is important when developing plugins and themes:</p>
<h2 id="header-react" tabindex="-1"><a class="header-anchor" href="#header-react" aria-hidden="true">#</a> Header React</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// line-numbers is enabled by default</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// line-numbers is disabled</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>
</code></pre></div><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> myElement <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">I am a paragraph.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">I am a paragraph too.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="posts-react" tabindex="-1"><a class="header-anchor" href="#posts-react" aria-hidden="true">#</a> Posts React</h2>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> proPackageOptions<span class="token punctuation">:</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> id <span class="token operator">=</span>  <span class="token function">UUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> onRemoteQualityScale<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">let</span> onDeviceQualityScale<span class="token punctuation">:</span> <span class="token class-name">Double</span>
    <span class="token keyword">let</span> waterMarkRemove<span class="token punctuation">:</span> <span class="token class-name">Bool</span>
    <span class="token keyword">let</span> proLogo<span class="token punctuation">:</span> <span class="token class-name">Bool</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


