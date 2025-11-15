export default {
  async fetch(request) {
    try {
      return new Response("Hello World!", {
        headers: { "Content-Type": "text/plain" }
      });
    } catch (err) {
      return new Response("Error: " + err.message, { status: 500 });
    }
  }
};
