---
title: "Copilot CLI adds Microsoft Entra sign-in; Copilot activity streams to Agent 365"
description: "Two enterprise items from Microsoft Ignite week: Entra sign-in for Copilot CLI (public preview) and audit streaming of Copilot agent activity into Microsoft Agent 365."
pubDate: 2026-11-17
category: copilot
type: news
tags: [GitHub Copilot, Microsoft Entra, Agent 365, enterprise]
source: https://github.blog/changelog/2026-11-17-github-copilot-cli-adds-microsoft-entra-sign-in-as-a-preview
draft: false
importance: medium
---

GitHub announced two enterprise integrations with Microsoft on November 17, 2026.

## Copilot CLI: Microsoft Entra sign-in (public preview)

Users can sign in to Copilot CLI with an Entra account to silently authenticate to a linked GitHub Enterprise Managed User (EMU) account, use a Microsoft 365 Copilot license, or both, depending on organization entitlements. It is available on Windows and macOS; Linux support is planned.

- **EMU users (GitHub inference):** enterprises using EMUs via OIDC get silent SSO with no separate GitHub sign-in. A Copilot Business or Enterprise license is required and the organization must enable the Copilot CLI policy. This SSO works only in Copilot CLI and VS Code. Enterprise Managed Authorization must be enabled on GitHub Enterprise Cloud.
- **Microsoft 365 Copilot (Microsoft inference):** organizations in Frontier with a Microsoft 365 Copilot license on usage-based billing can access models through Microsoft Copilot from the terminal, with no GitHub account. Model access and limits are managed in Microsoft 365 Copilot settings, and the Work IQ MCP server can supply Microsoft 365 work data as context.

Requires Copilot CLI 1.0.113 or later (`copilot update`).

## Copilot activity in Microsoft Agent 365

Enterprises on GitHub Enterprise Cloud with Enterprise Managed Users can stream Copilot agent activity into Microsoft Agent 365. Admins can view activity across cloud agents on GitHub.com, Copilot CLI, VS Code, Visual Studio and partner IDEs such as JetBrains and Eclipse; review user sessions including prompts, responses and tool calls; see usage trends; and get further risk information in Microsoft Purview and Defender. Setup follows the Streaming the audit log for your enterprise guide. Pricing and rollout timeline are undisclosed.
