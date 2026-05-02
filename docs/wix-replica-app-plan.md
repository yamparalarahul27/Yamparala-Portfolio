# Wix Replica Package (Selected URLs)

## Captured source URLs

1. `https://rahulwebwork2020.wixsite.com/rahul`
2. `https://rahulwebwork2020.wixsite.com/rahul/my-story`
3. `https://rahulwebwork2020.wixsite.com/rahul/2-years-at-synclo`
4. `https://rahulwebwork2020.wixsite.com/rahul/password-ux`
5. `https://rahulwebwork2020.wixsite.com/rahul/customer-journey-mapping`

## Generated outputs

1. Raw replicas:
- `/public/wix-replica-raw/`

2. Localized replicas:
- `/public/wix-replica-local/`

3. Home shortcuts:
- `/public/wix-home-replica.html`
- `/public/wix-home-replica-local.html`

## Route map (Wix -> localhost)

1. `.../rahul` -> `/wix-replica-local/`
2. `.../rahul/my-story` -> `/wix-replica-local/my-story`
3. `.../rahul/2-years-at-synclo` -> `/wix-replica-local/2-years-at-synclo`
4. `.../rahul/password-ux` -> `/wix-replica-local/password-ux`
5. `.../rahul/customer-journey-mapping` -> `/wix-replica-local/customer-journey-mapping`

## Local route serving

Added route handlers:
- `/src/app/wix-replica-raw/[[...slug]]/route.ts`
- `/src/app/wix-replica-local/[[...slug]]/route.ts`

Shared reader:
- `/src/lib/framer-replica.ts` (`loadReplicaHtml`)

## Asset localization

Route-asset map:
- `/tmp/portfolio-audit/wix-route-assets.tsv`

Local asset root:
- `/public/portfolio/wix/<route_key>/...`

Current capture status:
- Media URLs mapped: `252`
- New asset downloads in latest pass: `21`
- Failed downloads: `0`
- Remaining remote media links in local replica HTML: `0`

## Regeneration

1. Refresh capture file:
- `/tmp/portfolio-audit/wix-pages-selected.txt`

2. Refresh source HTML snapshots:
- `/tmp/portfolio-audit/wix-pages/*.html`

3. Run generator:
- `/scripts/generate-wix-replicas.sh`
