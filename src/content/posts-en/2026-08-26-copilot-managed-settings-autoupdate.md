---
title: "GitHub Copilot Enterprise Settings Add Auto-Update for Plugin Marketplaces"
description: "GitHub added an autoUpdate flag to enterprise-managed settings, letting admins opt individual plugin marketplaces into automatic plugin updates across the Copilot app, Copilot CLI, and VS Code."
pubDate: 2026-08-26
category: copilot
type: news
tags: [GitHubCopilot, GitHub, EnterpriseSettings, Plugins, DeveloperTools]
source: https://github.blog/changelog/2026-08-26-enterprise-managed-settings-now-support-autoupdate-for-plugin-marketplaces
draft: false
importance: low
---

GitHub added a new `autoUpdate: true` option to enterprise-managed settings for GitHub Copilot, letting administrators opt individual plugin marketplaces into automatic plugin updates.

## Details

- **How it works**: admins set `autoUpdate: true` on an entry in `extraKnownMarketplaces` within their organization's managed settings configuration (stored in the `.github-private/copilot` repository)
- **Effect**: supported clients automatically check the marketplace and update installed plugins sourced from it, removing the need for manual update management
- **Still gated by the allowlist**: marketplaces must still comply with `strictKnownMarketplaces` restrictions — auto-update doesn't bypass which marketplaces are trusted in the first place
- **Where it applies**: the GitHub Copilot app, Copilot CLI, and Visual Studio Code, for organizations on Copilot Business or Copilot Enterprise
- **Status**: generally available as of August 26, 2026

## What happened next

This is a small but practical addition to GitHub's growing set of enterprise-managed settings controls for Copilot, aimed at reducing the manual overhead of keeping approved plugins current across an organization without loosening which marketplaces are trusted.
