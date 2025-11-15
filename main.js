export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const userAgent = request.headers.get('User-Agent') || '';
    
    // 处理预检请求 (OPTIONS)
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }
    
    if (url.pathname === '/api/hello') {
      return new Response(JSON.stringify({
        message: 'Hello from Worker!',
        timestamp: new Date().toISOString(),
        userAgent: userAgent
      }), {
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' 
        }
      });
    }
    
    return new Response('Worker is running!', {
      headers: { 
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*' 
      }
    });
  }
};
