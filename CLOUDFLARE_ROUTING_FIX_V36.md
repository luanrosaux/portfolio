# Cloudflare Pages routing fix - V36

This version uses ONLY clean directory routes.

Examples:
- `/about/` -> `about/index.html`
- `/articles/` -> `articles/index.html`
- `/cases/designing-360-performance-review/` -> `cases/designing-360-performance-review/index.html`

It intentionally removes:
- `_redirects`
- `/about.html`
- `/articles.html`
- `/cases/*.html`
- `/articles/*.html`

Why:
Your browser was opening `/cases/designing-360-performance-review` without `.html`.
Cloudflare Pages works best when that path has a real directory target instead of competing `.html` and directory versions.

Deploy settings:
- Framework preset: None
- Build command: empty
- Build output directory: `.`
- Root directory: empty or `/`

IMPORTANT when updating GitHub:
Delete the old repo files before copying this version, otherwise old `.html` files may remain and the loop can persist.

Safe local update command from inside your repo:
```
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
# then copy the CONTENTS of this package into the repo
git add -A
git commit -m "Fix Cloudflare clean routing"
git push
```

Test:
- `/`
- `/about/`
- `/articles/`
- `/cases/designing-360-performance-review/`
- `/articles/jogos-ficaram-burros-design-melhor/`
