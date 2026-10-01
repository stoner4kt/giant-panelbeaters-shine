import { createFileRoute } from "@tanstack/react-router";

// The homepage is served as a pure static HTML document (no React) so the
// live site is plain HTML + CSS + JS as requested.
export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () =>
        new Response(
          `<!DOCTYPE html><html lang="en"><head><title>Static Test</title></head><body><h1>STATIC-TEST-OK</h1></body></html>`,
          { headers: { "content-type": "text/html; charset=utf-8" } },
        ),
    },
  },
});
