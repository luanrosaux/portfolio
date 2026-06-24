# Cloudflare Pages deploy instructions

Use this ZIP for Cloudflare Pages direct upload.

Important:
- Upload the CONTENTS of this package as the site root.
- The deployed root must contain `index.html`, `css/`, `js/`, `assets/`, `articles/`, and `cases/` directly.
- Do not upload a parent folder only.
- If using GitHub, set the build command to empty and the output directory to `/` or the repository root.
- If using drag-and-drop, upload this ZIP directly.

Verification after deploy:
- `/` should load the homepage.
- `/css/style.css` should return CSS, not 404.
- `/cases/streamlining-the-b2b-cycle.html` should load.
- `/articles/jogos-ficaram-burros-design-melhor.html` should load.
- `/articles/` should load the articles index.
