# Biscotti Finance Documentation

<p>
  <img src="public/logo-mark.svg" alt="Biscotti" height="56" />
</p>

The official documentation for [Biscotti Finance](https://biscotti.finance), a
community-driven DEX on the ARC network with concentrated liquidity, stable
pools, a smart router, BSCT farms, coffee pools and on-chain trading battles.

**Live site:** [docs.biscotti.finance](https://docs.biscotti.finance)

Built with [Vocs](https://vocs.dev) (Vite + React + MDX).

## Features

- 📖 MDX pages with tabs, callouts, steps and Shiki code blocks
- 🔍 Full-text search (⌘K) with a prebuilt MiniSearch index
- 🤖 AI-friendly: [`/llms.txt`](https://docs.biscotti.finance/llms.txt),
  `llms-full.txt`, and every page served as Markdown (append `.md`)
- 🖼️ Per-page social cards generated at `/api/og`
- 🌗 Light/dark theming with the exact Biscotti brand assets

## Development

```bash
bun install      # install dependencies
bun run dev      # start the dev server
bun run build    # production build (dist/)
bun run preview  # preview the production build
```

## Project structure

```
docs/
├── vocs.config.ts          # site config: sidebar, theme, SEO, socials
├── public/                 # static assets (logos, favicons, icons)
├── src/pages/              # documentation pages (MDX)
│   ├── index.mdx           # landing page
│   ├── concentrated-liquidity/
│   ├── stable-pools/
│   ├── farms/
│   ├── coffee-pools/
│   ├── trading-battles/
│   ├── developers/         # addresses, ABIs, integration, security
│   └── _api/api/og.tsx     # social-card image endpoint
└── dist/                   # build output
```

## Content ground truth

Docs are written against the actual protocol sources. Keep them in sync:

| Source | Used for |
| --- | --- |
| `../contract/src/` | Contract APIs and behavior |
| `../contract/deployments/arc-testnet.json` | Addresses on ARC Testnet |
| `../contract/FARMS_CONTRACTS.md` | Farm architecture & formulas |
| `../subgraphs/` | Analytics & trading-battles indexing |

## Deployment

The site deploys to Vercel on push to `main`. Vocs auto-detects Vercel, so no
extra configuration is needed (build command `bun run build`, output `dist`).

## Search indexing

Vocs generates canonical URLs, page titles, descriptions, social cards,
`robots.txt`, and `sitemap.xml` from `vocs.config.ts` and page frontmatter.
The Arc guides are linked from the homepage and navigation so crawlers can
discover them through normal links.

After deploying content changes:

1. Check [robots.txt](https://docs.biscotti.finance/robots.txt) and
   [the sitemap](https://docs.biscotti.finance/sitemap.xml) on the live domain.
2. In [Google Search Console](https://search.google.com/search-console), use
   the verified domain or URL-prefix property for `https://docs.biscotti.finance/`
   and submit `sitemap.xml`.
3. Inspect `/`, `/arc-mainnet`, `/arc-tokens`, `/arc-airdrop`, and `/launchpad`
   with URL Inspection, then request indexing for the updated pages.
4. Track impressions, clicks, and queries in the Performance report. Treat
   indexing and rankings as measured outcomes, not build-time guarantees.

Keep airdrop and reward content tied to published program rules. Mainnet and
testnet availability should match the deployment reference. See Google's
[SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
for indexing and content guidance.

## Contributing

Fixes and improvements are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).
Found a security issue? **Do not open a public issue**. See the
[security section](CONTRIBUTING.md#security--bug-bounty).
