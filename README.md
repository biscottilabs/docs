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

## Contributing

Fixes and improvements are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).
Found a security issue? **Do not open a public issue**. See the
[security section](CONTRIBUTING.md#security--bug-bounty).
