// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages } from 'waku/router'

// prettier-ignore
type Page =
  | { path: '/_api/api/og'; render: 'static' }
  | { path: '/analytics'; render: 'static' }
  | { path: '/architecture'; render: 'static' }
  | { path: '/coffee-pools/contracts'; render: 'static' }
  | { path: '/coffee-pools'; render: 'static' }
  | { path: '/concentrated-liquidity/contracts'; render: 'static' }
  | { path: '/concentrated-liquidity/fee-tiers'; render: 'static' }
  | { path: '/concentrated-liquidity'; render: 'static' }
  | { path: '/concentrated-liquidity/managing-positions'; render: 'static' }
  | { path: '/concentrated-liquidity/ticks-and-ranges'; render: 'static' }
  | { path: '/connectkit/chains'; render: 'static' }
  | { path: '/connectkit/customization'; render: 'static' }
  | { path: '/connectkit/getting-started'; render: 'static' }
  | { path: '/connectkit'; render: 'static' }
  | { path: '/connectkit/sign-in-with-circle'; render: 'static' }
  | { path: '/connectkit/siwe'; render: 'static' }
  | { path: '/connectkit/troubleshooting'; render: 'static' }
  | { path: '/developers/abis'; render: 'static' }
  | { path: '/developers/addresses'; render: 'static' }
  | { path: '/developers/ai'; render: 'static' }
  | { path: '/developers/deployments'; render: 'static' }
  | { path: '/developers/integrate'; render: 'static' }
  | { path: '/developers/security'; render: 'static' }
  | { path: '/developers/subgraphs'; render: 'static' }
  | { path: '/farms/classic-farms'; render: 'static' }
  | { path: '/farms'; render: 'static' }
  | { path: '/farms/smartchef'; render: 'static' }
  | { path: '/farms/v3-farms'; render: 'static' }
  | { path: '/'; render: 'static' }
  | { path: '/introduction'; render: 'static' }
  | { path: '/launchpad/contracts'; render: 'static' }
  | { path: '/launchpad/curves'; render: 'static' }
  | { path: '/launchpad/fees'; render: 'static' }
  | { path: '/launchpad'; render: 'static' }
  | { path: '/launchpad/safety'; render: 'static' }
  | { path: '/quick-start'; render: 'static' }
  | { path: '/roadmap'; render: 'static' }
  | { path: '/smart-router'; render: 'static' }
  | { path: '/stable-pools/contracts'; render: 'static' }
  | { path: '/stable-pools/creating-a-pool'; render: 'static' }
  | { path: '/stable-pools'; render: 'static' }
  | { path: '/stable-pools/providing-liquidity'; render: 'static' }
  | { path: '/swap'; render: 'static' }
  | { path: '/team'; render: 'static' }
  | { path: '/token'; render: 'static' }
  | { path: '/trading-battles'; render: 'static' }
  | { path: '/trading-battles/rewards'; render: 'static' }

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>
  }
  interface CreatePagesConfig {
    pages: Page
  }
}
