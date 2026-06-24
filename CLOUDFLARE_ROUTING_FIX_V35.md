# Cloudflare Pages routing fix - V35

This version uses explicit `.html` URLs only and removes clean URL duplicate directory copies.

Why this fixes ERR_TOO_MANY_REDIRECTS:
- Previous packages included both `/cases/example.html` and `/cases/example/index.html`.
- Cloudflare Pages can normalize/canonicalize clean URLs and create a redirect loop when both route styles exist.
- V35 keeps only the real `.html` files and removes `_redirects`.

Deploy settings:
- Framework preset: None
- Build command: empty
- Build output directory: `.`
- Root directory: empty or `/`

Test URLs:
- `/`
- `/about.html`
- `/articles.html`
- `/cases/streamlining-the-b2b-cycle.html`
- `/articles/jogos-ficaram-burros-design-melhor.html`

After redeploy, test in incognito or hard refresh with Ctrl + Shift + R.
