import { defineConfig } from 'vocs/config'

export default defineConfig({
  title: 'Biscotti Finance',
  // Brand in every title: "Token Launchpad on Arc – Biscotti Finance".
  titleTemplate: '%s – Biscotti Finance',
  description:
    'Documentation for Biscotti Finance, the DEX and token launchpad on Arc Mainnet: launch tokens with locked liquidity, concentrated liquidity, stable pools, yield farms and trading battles.',
  baseUrl: 'https://docs.biscotti.finance',
  accentColor: 'light-dark(#8a4b26, #e0a370)',
  logoUrl: { light: '/logo-light.svg', dark: '/logo-dark.svg' },
  iconUrl: '/logo-mark.svg',
  checkDeadlinks: true,
  editLink: {
    link: 'https://github.com/biscottilabs/biscottie/edit/main/docs/src/pages/:path',
    text: 'Suggest changes to this page',
  },
  socials: [
    { icon: 'github', link: 'https://github.com/biscottilabs' },
    { icon: 'x', link: 'https://x.com/biscottidex' },
    { icon: 'telegram', link: 'https://t.me/+3gVQE9ZzFecwYzY0' },
  ],
  topNav: [
    { text: 'Docs', link: '/introduction' },
    { text: 'Launchpad', link: '/launchpad' },
    { text: 'ConnectKit', link: '/connectkit' },
    { text: 'Contracts', link: '/developers/addresses' },
    { text: 'App', link: 'https://biscotti.finance' },
  ],
  sidebar: [
    {
      text: 'Overview',
      items: [
        { text: 'What is Biscotti?', link: '/introduction' },
        { text: 'Protocol Architecture', link: '/architecture' },
        { text: 'Quick Start', link: '/quick-start' },
        { text: 'BSCT Token', link: '/token' },
        { text: 'Roadmap', link: '/roadmap', badge: { text: 'soon', variant: 'info' } },
        { text: 'Team', link: '/team' },
      ],
    },
    {
      text: 'Trading',
      items: [
        { text: 'Swaps', link: '/swap' },
        { text: 'Smart Router', link: '/smart-router' },
      ],
    },
    {
      text: 'Launchpad',
      items: [
        { text: 'Launch a Token', link: '/launchpad', badge: { text: 'mainnet', variant: 'info' } },
        { text: 'Launch Curves', link: '/launchpad/curves' },
        { text: 'Fees & Fee Modes', link: '/launchpad/fees' },
        { text: 'Safety & Trust', link: '/launchpad/safety' },
        { text: 'Contract Reference', link: '/launchpad/contracts' },
      ],
    },
    {
      text: 'Concentrated Liquidity',
      items: [
        { text: 'Overview', link: '/concentrated-liquidity' },
        { text: 'Ticks & Price Ranges', link: '/concentrated-liquidity/ticks-and-ranges' },
        { text: 'Fee Tiers', link: '/concentrated-liquidity/fee-tiers' },
        { text: 'Managing Positions', link: '/concentrated-liquidity/managing-positions' },
        { text: 'Contract Reference', link: '/concentrated-liquidity/contracts' },
      ],
    },
    {
      text: 'Stable Pools',
      items: [
        { text: 'Overview', link: '/stable-pools' },
        { text: 'Providing Liquidity', link: '/stable-pools/providing-liquidity' },
        { text: 'Creating a Pool', link: '/stable-pools/creating-a-pool' },
        { text: 'Contract Reference', link: '/stable-pools/contracts' },
      ],
    },
    {
      text: 'Earn',
      items: [
        { text: 'Farms Overview', link: '/farms' },
        { text: 'V3 Farms (Concentrated)', link: '/farms/v3-farms' },
        { text: 'Classic Farms (ERC-20 LP)', link: '/farms/classic-farms' },
        { text: 'SmartChef Pools', link: '/farms/smartchef' },
        { text: 'Coffee Pools', link: '/coffee-pools' },
        { text: 'Coffee Pools Reference', link: '/coffee-pools/contracts' },
      ],
    },
    {
      text: 'Trading Battles',
      items: [
        { text: 'Overview', link: '/trading-battles' },
        { text: 'Rewards & Claims', link: '/trading-battles/rewards' },
      ],
    },
    {
      text: 'Analytics',
      items: [{ text: 'Info & Subgraphs', link: '/analytics' }],
    },
    {
      text: 'ConnectKit',
      items: [
        { text: 'Overview', link: '/connectkit' },
        { text: 'Getting Started', link: '/connectkit/getting-started' },
        {
          text: 'Sign in with Circle',
          link: '/connectkit/sign-in-with-circle',
          badge: { text: 'new', variant: 'info' },
        },
        {
          text: 'Sign-In with Ethereum',
          link: '/connectkit/siwe',
        },
        { text: 'Chains & Environments', link: '/connectkit/chains' },
        { text: 'Customization', link: '/connectkit/customization' },
        { text: 'Troubleshooting', link: '/connectkit/troubleshooting' },
      ],
    },
    {
      text: 'Developers',
      items: [
        { text: 'Contract Addresses', link: '/developers/addresses' },
        { text: 'Integration Guide', link: '/developers/integrate' },
        { text: 'Subgraphs', link: '/developers/subgraphs' },
        { text: 'ABIs', link: '/developers/abis' },
        { text: 'Deployment Guide', link: '/developers/deployments' },
        { text: 'Security Notes', link: '/developers/security' },
        { text: 'AI & llms.txt', link: '/developers/ai' },
      ],
    },
  ],
  search: {
    boost: { title: 5, text: 2 },
  },
})
