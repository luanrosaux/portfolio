# Cloudflare Pages routing fix - V37

The live site confirmed that trailing-slash URLs work:
- `/cases/streamlining-the-b2b-cycle/`

But no-trailing-slash URLs can loop:
- `/cases/streamlining-the-b2b-cycle`

V37 keeps clean directory routes and adds explicit redirects:
- `/cases/foo` -> `/cases/foo/`
- `/articles/bar` -> `/articles/bar/`
- `/about` -> `/about/`
- `/articles` -> `/articles/`

It does NOT redirect to `.html`.

Important:
When updating the GitHub repo, delete old files first so old `.html` files do not remain.

Recommended update from inside the repo:
```
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
# copy the CONTENTS of this package into the repo
git add -A
git commit -m "Fix Cloudflare trailing slash routing"
git push
```
