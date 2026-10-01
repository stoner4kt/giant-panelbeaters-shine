<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture rules

- The homepage ("/") must stay pure static HTML: it is served by the GET
  server handler in `src/routes/index.tsx` from the `SITE_HTML` template in
  `src/lib/site-html.ts`. Do not convert it back to a React component — the
  user explicitly requested an HTML/CSS/JS-only website. Styles live in
  `public/site.css`, behaviour in `public/site.js` (both plain files).
