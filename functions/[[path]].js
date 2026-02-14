import { Waline } from '@waline/server';
import Database from 'better-sqlite3';
import path from 'path';

// 初始化 SQLite 数据库
const db = new Database(path.join(__dirname, 'waline.db'));

// 初始化 Waline
const waline = new Waline({
  db,
  admins: ['tiandawei@gmail.com'], // 替换成你的邮箱
});

// 导出 Cloudflare Pages 函数
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  // 处理 Waline API 请求
  if (url.pathname.startsWith('/api/')) {
    return waline.handleRequest(request);
  }

  // 其他请求返回网站内容
  return context.next();
}
