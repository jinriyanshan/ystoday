---
title: "燕山论坛"
type: "page"
layout: "single"
comments: true
---

欢迎来到燕山论坛！无论在哪里，我都爱燕山！
大家可以在这里自由发帖、交流、晒图。

---
## 💬 燕山论坛

<div id="artalk-embed" style="
  display: block !important;
  margin: 2rem auto;
  padding: 1.5rem;
  max-width: 800px;
  width: 90%;
  border: 2px solid #ff0000;
  background: #fff;
  color: #000;
"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/artalk@2/dist/Artalk.css">
<script src="https://cdn.jsdelivr.net/npm/artalk@2/dist/Artalk.js"></script>
<script>
  // 页面加载后立刻初始化
  window.onload = function() {
    new Artalk({
      el: document.getElementById('artalk-embed'),
      server: 'https://artalk.artalkjs.org',
      site: '燕山旧时光',
      locale: {
        nick: '昵称',
        submit: '提交评论',
        placeholder: '欢迎在燕山论坛留言～'
      }
    });
  };
</script>
