# Luan Rosa Homepage Redesign

Static homepage concept inspired by the editorial structure and portfolio rhythm of Meghan Logan's site.

## Files

- `index.html`
- `css/style.css`
- `js/script.js`

## Next edits

1. Replace gradient placeholders with real case thumbnails.
2. Update links to match final case study URLs.
3. Replace LinkedIn URL if needed.
4. Add your resume PDF link.
5. Review metrics before publishing.

## Update

This version uses a wider desktop layout and a more compact `currently` panel with tighter line-height and spacing.

## Case Study Pages

Added six primary case study pages and connected all featured work links from the homepage.

## Image Update

Replaced gradient placeholders with original remote case images from luanrosa.com / i0.wp.com. Images are referenced by URL instead of downloaded locally.

## Visual Update v5

Homepage case cards now use cover/fill images. Case study pages now use open editorial product visuals with rounded image corners and multiple screenshots per case.

## Image Quality Update v6

Removed WordPress/CDN resize parameters from image URLs, added clickable high-quality lightbox, and constrained portrait/mobile screenshots to avoid visual upscaling.

## Interaction Update v7

Fixed mobile menu visibility while scrolled, added scroll reveal and hover motion, and made homepage case cards fully clickable.

## About Page v8

Added an About page with career trajectory, resume/CV section, print support, and updated About links across homepage and case pages.

## V9 Refinements

Fixed homepage case-card image zoom so only the image layer scales, highlighted the first case, added a company logo wall, added big-number sections to Home and About, and ensured the print resume button uses pointer cursor.

## V10

Made header/footer full-width with inner alignment, replaced available company wordmarks with SVG assets, added the Learning Management System case, updated Fortnite next-case navigation, and added an Articles page with all original article entries.

## V11

Centered desktop navigation relative to the page, added supplied company logo URLs with hover tooltips and white logo treatment, rebuilt Articles as internal editorial pages, and redesigned article cards with more visual hierarchy.

## V12

Added stronger CSS overrides for real center header navigation, left/right content alignment, and normalized company logos to black by default and white on hover with consistent sizing.

## V13

Rebuilt all article detail pages as full internal pages and removed dependency on the old article URLs. Article cards remain internal links only.

## V14

Adjusted the featured article card spacing on the Articles page. It remains visually differentiated, but content no longer spreads too far apart vertically.

## V15

Removed duplicated homepage View all articles CTA, changed the Articles featured layout so the first card is full-width with three cards below, and added O Meio Noob as a Game UX content channel on Home and About.

## V16

Added a test video-to-article page for O Meio Noob video MZOK_gDRHmI, including YouTube embed, thumbnail, visual callouts and an internal Articles/Home card. The article is marked as a draft adaptation because the transcript was not accessible automatically.

## V17

Translated the O Meio Noob video article into English, removed the duplicated thumbnail from the article top, kept the embedded video, added a final language note, reorganized the homepage articles into a responsive 4-card magazine grid, and added a desktop resume PDF download for mobile print behavior.

## V18

Moved the O Meio Noob YouTube embed to the end of the article, added visual references to support the article sections, and added stronger header/footer alignment overrides for desktop and mobile.

## V19

Normalized article numbering globally, updated the Articles featured section to use a 1 hero + 4-card magazine layout, fixed the About O Meio Noob CTA contrast, and added title highlight treatments across Home, About, Cases and Articles.

## V20

Downloaded and localized article imagery into assets/images/articles, added local cover images to all article pages, added local media thumbnails to article cards, and replaced the external Meio Noob article images with local assets.

## V21

Removed article thumbnail images from Home/Articles cards and moved top article cover images into the article body. Images now appear only within article content.

## V24

Replaced small article visuals with larger local assets where available from the published original pages, normalized remaining article images to at least 1000px wide, and added a click-to-view-full-size lightbox for article body images. Added `assets/images/article-image-audit.txt` with image dimensions.

## V25

Accessibility, SEO and security hardening pass:
- Added canonical, Open Graph and Twitter metadata across HTML pages.
- Added homepage Person JSON-LD with CSP hash.
- Added `robots.txt` and `sitemap.xml`.
- Added static-host security configs: `_headers`, `netlify.toml`, `vercel.json`, `.htaccess`.
- Added CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy and frame protections.
- Added stronger focus styles, reduced-motion support, forced-colors fallback, button target sizing and print cleanup.
- Added image dimensions for local images where available.
- Added `security-seo-accessibility-audit.json` with audit output and known limits.

## V26

Localized all remaining external image references for article/case images, case card backgrounds and logo wall assets. Added stronger long-cache headers for static assets, tightened CSP image sources to `self`, and added a performance/responsiveness pass for smoother navigation. The only intentional external media left is the embedded YouTube iframe in the video article.

Audit file: `asset-localization-performance-audit.json`.

## V27

Restored the company logo wall to the previous brand logo sources/appearance while keeping case and article images local. Updated CSP headers to allow only the logo domains needed for that section.

V27 correction: applied restoration to the current logo wall markup.

## V29

Replaced the site logo and favicon with the user-provided brand files. Added local favicon assets (16, 32, 48, 180, 192, 512, ICO), replaced header/footer brand marks with the new logo image, and updated social preview image references.

## V30

Removed `_redirects` to prevent Cloudflare Pages clean URL redirect loops and converted internal links to clean URLs that use the generated folder `index.html` copies.

## V31

Increased the header logo height to 46px on desktop, with responsive reductions on tablet/mobile to keep the header layout stable.

## V32

Fixed CSP for restored company logos by adding `https://upload.wikimedia.org` to `img-src`. This prevents Wikimedia-hosted logos from being blocked after redirecting from `commons.wikimedia.org` or `uk.wikipedia.org`.

## V33

Cleaned the logo CSS by removing the V31 `!important` override block and consolidating logo height/max-width values directly into the original `.brand-logo` rules.
