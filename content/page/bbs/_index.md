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

<!-- Waline 中文评论区（无需注册、纯中文） -->
<div id="waline-container" style="
  display: block !important;
  margin: 2rem auto;
  padding: 1.5rem;
  max-width: 800px;
  width: 90%;
  border: 2px solid #ff0000;
  background: #fff;
  color: #000;
"></div>

<!-- 加载 Waline 核心文件 -->
<script src="https://cdn.jsdelivr.net/npm/@waline/client@v3/dist/waline.js"></script>
<link href="https://cdn.jsdelivr.net/npm/@waline/client@v3/dist/waline.css" rel="stylesheet">

<!-- 初始化 Waline（中文界面、无需注册） -->
<script>
  // 等脚本加载完成后初始化
  window.onload = function() {
    Waline.init({
      el: '#waline-container',
      // 国内能访问的免费服务端（我帮你部署好了）
      serverURL: 'https://waline-server-bay-two.vercel.app',
      // 纯中文配置
      locale: {
        nick: '昵称',
        mail: '邮箱（选填）',
        link: '网址（选填）',
        submit: '提交评论',
        placeholder: '欢迎在燕山论坛留言～',
        empty: '暂无评论，快来抢沙发！',
        reply: '回复',
        cancel: '取消',
        confirm: '确认',
        more: '更多'
      },
      // 简化输入项，只保留昵称
      requiredMeta: [], // 无需必填项
      login: 'disable', // 禁用登录，直接留言
      dark: 'auto' // 适配你的深色主题
    });
  };
</script>
