# Contributing to the Biscotti Docs

Thanks for helping make Biscotti's documentation better! Contributions of all
sizes are welcome — from typo fixes to whole new guides.

## Quick start

1. Fork and clone the repository, then:

   ```bash
   cd docs
   bun install
   bun run dev
   ```

2. Edit or add pages under `src/pages/` (MDX). The sidebar lives in
   `vocs.config.ts`.
3. Check your changes locally, then run a production build to catch dead
   links (the build fails on broken internal links):

   ```bash
   bun run build
   ```

4. Open a pull request with a clear description of what changed and why.

## Writing guidelines

- **Accuracy first.** Docs must match the deployed contracts. Verify function
  signatures against `../contract/src/` and addresses against
  `../contract/deployments/arc-testnet.json` before writing them down.
- **Every page needs frontmatter** — `title` and `description` are used for
  SEO, social cards and `llms.txt`:

  ```mdx
  ---
  title: Page Title
  description: One-sentence summary of the page.
  ---
  ```

- **Be honest about limitations.** Known issues and trust assumptions are
  documented deliberately (see `/developers/security`) — don't remove them to
  make things look better.
- **Use the house style:** callouts (`:::tip`, `:::warning`), steps
  (`::::steps`) for procedures, code groups (`:::code-group`) for
  alternatives, tables for enumerable facts.
- Keep code samples runnable — prefer [viem](https://viem.sh) for TypeScript
  and `cast` for CLI examples.

## What we're especially happy to receive

- Corrections where docs drifted from contract behavior
- Better integration examples and end-to-end guides
- Translations (open an issue first to coordinate)
- New-user feedback: places where you got stuck reading the docs

## Reporting problems

- **Docs bugs** (typos, broken links, wrong info): open a GitHub issue or PR.
- **App bugs** (something broken at biscotti.finance): open an issue in the
  relevant repository, or ping us on
  [Telegram](https://t.me/+3gVQE9ZzFecwYzY0).
- **Security issues:** see below — never open a public issue.

## Security & bug bounty

Biscotti takes security reports seriously, including during the testnet
phase.

**Found a vulnerability in the contracts, app, or infrastructure?**

1. **Do not open a public issue** and do not disclose the finding publicly
   until it has been triaged and fixed.
2. **DM Ibrahim (Tech Lead) on X: [@ibrahimijai](https://x.com/ibrahimijai)**
   with:
   - a description of the issue and its impact,
   - steps to reproduce (or a proof of concept),
   - the affected contract/address or URL, and
   - how you'd like to be credited.
3. You'll get an acknowledgement, a triage assessment, and updates through to
   the fix.

**Rewards.** A formal, tiered bug-bounty program launches together with ARC
Mainnet (see the [roadmap](https://docs.biscotti.finance/roadmap)). Until
then, impactful findings reported responsibly are rewarded case-by-case in
BSCT/USDC at the team's discretion — critical contract findings are taken
especially seriously. Responsible reporters are credited (with consent) in
the security notes.

In scope (current testnet phase):

| Area | Examples |
| --- | --- |
| Smart contracts (`contract/src/`) | Loss of funds, reward inflation, access-control bypass, broken invariants |
| Smart Router | Mis-execution, slippage-guard bypass, stuck approvals |
| Trading Battles | Merkle double-claims, leaderboard manipulation via indexing |
| Web app & docs | XSS, wallet-draining vectors, dependency compromise |

Out of scope: gas optimizations, testnet-only rate limits, issues already
listed in [Security Notes](https://docs.biscotti.finance/developers/security),
and social engineering.

## Community

- X: [@biscottidex](https://x.com/biscottidex)
- Telegram: [Biscotti community](https://t.me/+3gVQE9ZzFecwYzY0)
- GitHub: [biscottilabs](https://github.com/biscottilabs)
