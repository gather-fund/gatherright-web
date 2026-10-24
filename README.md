# GatherRight Technologies Limited website

The public website of GatherRight Technologies Limited, built with Next.js 16 from the "GatherRight Technologies Limited website" board on the Gatherfund prototypes canvas. It shares its structure with the Gatherfund LLC website (`gather-fund/gatherfund-llc`); a fix in one usually applies to the other.

Use Node 22 (`export PATH=~/.local/opt/node-22/bin:$PATH` in this workspace).

```sh
npm ci
npm run dev        # http://127.0.0.1:4200
npm run typecheck
npm run build && npm start
```

## Pages

Home, About (`/about`), News (`/news` and `/news/[slug]`), Privacy notice (`/legal/privacy`) and Terms of use (`/legal/terms`). Facts the company has not supplied yet are bracketed placeholders:

- `src/lib/site.ts`: name, title, description, the company facts (`company`) and the enquiry topics
- `src/lib/news.ts`: news articles; the placeholder entries keep the list, the articles and the legal templates `noindex`
- `src/app/legal/*/page.tsx`: the legal templates, which must be written and approved by a lawyer before launch

## Enquiries

The contact dialog posts to `/api/enquiry`, which validates the enquiry (`src/lib/enquiry.ts`, shared with the form) and forwards it as JSON to `ENQUIRY_WEBHOOK_URL`. Until that variable is set, every send shows "Not sent" with an option to copy the enquiry instead. The endpoint accepts same-site JSON only, caps the body at 16 KB, ignores a hidden spam-trap field and allows 5 enquiries per address in 10 minutes (in memory; use a platform rate limit once hosted).

## Address, search engines and share previews

`SITE_URL` sets the public address used for canonical links, Open Graph and X tags, `sitemap.xml`, `robots.txt` and the JSON-LD. The domain has not been decided; set `SITE_URL` (for example in Vercel's environment variables) once it is.

On Vercel, a build without `SITE_URL` uses Vercel's own variables: the production domain for production builds (indexable) and the deployment's address for previews (`noindex`). Anywhere else, a build without `SITE_URL` is treated as local: absolute URLs point at the dev server and every page is `noindex`.

- `public/og-image.png`: the share image (1200×630), rendered from `scripts/og/og.html` with `scripts/og/render.sh` (macOS); `src/lib/metadata.ts` puts it on every page
- `src/app/icon.svg`, `src/app/apple-icon.tsx`: favicon and Apple touch icon

## Fonts

Inter (`public/fonts/inter-*.woff2`) for all text, and Nunito 800 (`public/fonts/nunito-latin-800.woff2`) for the "GatherRight" wordmark only. Both are under the SIL Open Font License (`public/fonts/OFL.txt`, `public/fonts/OFL-Nunito.txt`).
