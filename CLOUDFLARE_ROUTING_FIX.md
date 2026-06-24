# Cloudflare Pages routing note

V30 removes `_redirects` because the previous version could create a redirect loop on Cloudflare Pages:

- Cloudflare may serve/normalize pretty URLs such as `/about`.
- The old `_redirects` file redirected `/about` back to `/about.html`.
- That could create `ERR_TOO_MANY_REDIRECTS`.

This package includes clean URL copies:
- `/about/index.html`
- `/articles/<slug>/index.html`
- `/cases/<slug>/index.html`

Deploy settings:
- Framework preset: None
- Build command: empty
- Build output directory: `.`
- Root directory: empty or `/`

After deploy, test:
- `/`
- `/about/`
- `/articles/`
- `/articles/jogos-ficaram-burros-design-melhor/`
- `/cases/streamlining-the-b2b-cycle/`
