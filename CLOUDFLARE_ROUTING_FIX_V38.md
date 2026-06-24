# Cloudflare Pages routing fix - V38

V38 keeps the working clean directory routes and fixes the UX issue where links first opened without `/` and then redirected.

All internal page links now point directly to trailing-slash canonical URLs:

- `/cases/fortnite-progressive-companion-app/`
- `/cases/streamlining-the-b2b-cycle/`
- `/articles/jogos-ficaram-burros-design-melhor/`
- `/about/`
- `/articles/`

The `_redirects` file remains only as a safety fallback for manually typed URLs without `/`.

After deploy, clicking cards/nav links should open the final slash URL directly, without the visible redirect hop.
