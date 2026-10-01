import { createFileRoute } from "@tanstack/react-router";

import { SITE_HTML } from "@/lib/site-html";

// The homepage is served as a pure static HTML document (no React) so the
// live site is plain HTML + CSS + JS, as requested.
export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () =>
        new Response(SITE_HTML, {
          headers: {
            "content-type": "text/html; charset=utf-8",
            "cache-control": "public, max-age=0, must-revalidate",
          },
        }),
    },
  },
});
