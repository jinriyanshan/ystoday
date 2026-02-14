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

<!-- 先加载 Artalk 核心文件，确保脚本可用 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/artalk@2/dist/Artalk.css">
<script src="https://cdn.jsdelivr.net/npm/artalk@2/dist/Artalk.js"></script>

<!-- 评论区容器（红框保留，确保可见） -->
<div id="artalk-final" style="
  display: block !important;
  margin: 2rem auto;
  padding: 1.5rem;
  max-width: 800px;
  width: 90%;
  border: 2px solid #ff0000;
  background: #fff;
  color: #000;
"></div>

<!-- 修复版初始化：等脚本加载完成后再执行 -->
<script>
  // 轮询检查 Artalk 是否加载完成，避免执行过早
  const checkArtalk = setInterval(() => {
    if (typeof Artalk !== 'undefined') {
      clearInterval(checkArtalk);
      // 现在 Artalk 已加载，安全初始化
      new Artalk({
        el: document.getElementById('artalk-final'),
        server: 'https://artalk.artalkjs.org',
        site: '燕山旧时光',
        pageKey: window.location.href,
        locale: {
          nick: '昵称',
          email: '邮箱（选填）',
          submit: '提交评论',
          placeholder: '欢迎在燕山论坛留言～',
          empty: '暂无评论，快来抢沙发！'
        }
      });
    }
  }, 100);
</script>
