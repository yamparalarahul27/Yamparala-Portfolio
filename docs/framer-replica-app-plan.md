# Framer Replica Package (Updated to User URL Set)

## What is now replicated

Two HTML replica trees are generated from the exact URLs you shared:

1. Raw replicas:
- `/public/framer-replica-raw/`

2. Local-asset replicas:
- `/public/framer-replica-local/`

Home shortcuts:
- `/public/framer-home-replica.html`
- `/public/framer-home-replica-local.html`

## Exact URL mapping (Framer -> local)

Base paths:
- Raw: `/framer-replica-raw/...`
- Local: `/framer-replica-local/...`

Routes replicated (`13` total):
1. `https://yamparala.framer.ai` -> `/framer-replica-raw/` and `/framer-replica-local/`
2. `https://yamparala.framer.ai/articles` -> `/framer-replica-raw/articles` and `/framer-replica-local/articles`
3. `https://yamparala.framer.ai/videos` -> `/framer-replica-raw/videos` and `/framer-replica-local/videos`
4. `https://yamparala.framer.ai/about` -> `/framer-replica-raw/about` and `/framer-replica-local/about`
5. `https://yamparala.framer.ai/about/experience` -> `/framer-replica-raw/about/experience` and `/framer-replica-local/about/experience`
6. `https://yamparala.framer.ai/about/certifications` -> `/framer-replica-raw/about/certifications` and `/framer-replica-local/about/certifications`
7. `https://yamparala.framer.ai/about/skills` -> `/framer-replica-raw/about/skills` and `/framer-replica-local/about/skills`
8. `https://yamparala.framer.ai/about/techstack` -> `/framer-replica-raw/about/techstack` and `/framer-replica-local/about/techstack`
9. `https://yamparala.framer.ai/about/others/anime` -> `/framer-replica-raw/about/others/anime` and `/framer-replica-local/about/others/anime`
10. `https://yamparala.framer.ai/about/others/fontpairs` -> `/framer-replica-raw/about/others/fontpairs` and `/framer-replica-local/about/others/fontpairs`
11. `https://yamparala.framer.ai/procees` -> `/framer-replica-raw/procees` and `/framer-replica-local/procees`
12. `https://yamparala.framer.ai/timeline` -> `/framer-replica-raw/timeline` and `/framer-replica-local/timeline`
13. `https://yamparala.framer.ai/services` -> `/framer-replica-raw/services` and `/framer-replica-local/services`

Note:
- The Framer route is spelled `procees` in source; replica keeps this exact path.

## Runtime route serving

Dynamic route handlers now serve nested HTML files correctly:
- `/src/app/framer-replica-raw/[[...slug]]/route.ts`
- `/src/app/framer-replica-local/[[...slug]]/route.ts`
- shared reader: `/src/lib/framer-replica.ts`

## Framer badge removal

Each replicated page includes:
- `#remove-framer-badge` (CSS)
- `#remove-framer-badge-script` (JS)

Purpose:
- Remove/hide Framer badge style elements from fixed bottom-right overlays.

## Assets sync status

Asset mapping file:
- `/tmp/portfolio-audit/framer-route-assets.tsv`

Local asset root:
- `/public/portfolio/framer/<route_key>/...`

Current pass:
1. Fresh HTML fetched for all 13 URLs.
2. Asset map regenerated from those pages.
3. Download attempt made for mapped media URLs.
4. Local replica pages rewritten to local paths where files exist.

Observed result:
- Some Framer transformed/signed media URLs return `400`, so they stay on CDN URL fallback in local replicas.

## Verification

Checked local route responses:
1. `/framer-replica-local/articles` -> `200`
2. `/framer-replica-local/videos` -> `200`
3. `/framer-replica-local/about` -> `200`
4. `/framer-replica-local/about/experience` -> `200`
5. `/framer-replica-local/about/certifications` -> `200`
6. `/framer-replica-local/about/skills` -> `200`
7. `/framer-replica-local/about/techstack` -> `200`
8. `/framer-replica-local/about/others/anime` -> `200`
9. `/framer-replica-local/about/others/fontpairs` -> `200`
10. `/framer-replica-local/procees` -> `200`
11. `/framer-replica-local/timeline` -> `200`
12. `/framer-replica-local/services` -> `200`
13. Home paths resolve with redirect then `200` in browser.

## How to regenerate

Generator:
- `/scripts/generate-framer-replicas.sh`

Inputs:
1. `/tmp/portfolio-audit/framer-pages.txt` (URL list)
2. `/tmp/portfolio-audit/framer-pages/*.html` (fetched source HTML)
3. `/tmp/portfolio-audit/framer-route-assets.tsv` (optional local rewrite map)
