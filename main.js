// 处理HTTP请求
export default {
  async fetch(request, env, ctx) {
    // 获取请求信息
    const url = new URL(request.url);
    const userAgent = request.headers.get('User-Agent') || '';
    
    // 自定义逻辑
    if (url.pathname === '/api/hello') {
      return new Response(JSON.stringify({
        message: 'Hello from Worker!',
        timestamp: new Date().toISOString(),
        userAgent: userAgent
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // 默认响应
    return new Response('Worker is running!', {
      headers: { 'Content-Type': 'text/plain' }
    });
  }
};
