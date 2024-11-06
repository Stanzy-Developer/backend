import { serve } from "bun";


serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      return new Response("Hello ice tea\n", { status: 200 });
    } else if (url.pathname === "/ice-tea") {
      return new Response("Thanks for the ice-tea!\n", { status: 200 });
    } else {
      return new Response("404 Not Found\n", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1"
})
