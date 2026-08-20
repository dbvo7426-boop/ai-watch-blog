---
title: "Enterprise Managed Settings Land in GitHub Copilot for JetBrains"
description: "GitHub Copilot for JetBrains now supports enterprise managed settings, letting admins govern plugin marketplaces, MCP server access, OpenTelemetry routing, and permission modes centrally across a team."
pubDate: 2026-08-18
category: copilot
type: news
tags: [GitHub Copilot, JetBrains, Enterprise, Governance, MCP, OpenTelemetry]
source: https://github.blog/changelog/2026-08-18-enterprise-managed-settings-in-github-copilot-for-jetbrains
draft: false
importance: medium
---

GitHub Copilot for JetBrains now supports enterprise managed settings, extending the centralized governance mechanism already available in other Copilot clients so admins can "apply consistent controls for everyone on your enterprise's Copilot plan" directly inside JetBrains IDEs.

## Details

- **Plugin marketplace governance**: `enabledPlugins` lets admins mandate which plugins are enabled or disabled; `extraKnownMarketplaces` approves additional plugin sources; `strictKnownMarketplaces` locks installs to only the approved sources
- **MCP server allowlisting**: `allowedMcpServers` and `deniedMcpServers` centrally govern which Model Context Protocol servers developers can connect to from JetBrains, preventing connections to servers outside the enterprise allowlist — the same control GitHub added for other Copilot clients earlier this month
- **OpenTelemetry routing**: Admins can set collector endpoints, protocols, service names, resource attributes, and content-capture policies for telemetry; managed values take precedence over developer-set ones, so telemetry is consistently routed to the approved collector regardless of individual configuration
- **Permission mode lockdown**: Setting `permissions.disableBypassPermissionsMode` to `disable` prevents developers from using Bypass Approvals or Autopilot-style features that skip normal confirmation steps
- **Delivery mechanism**: Settings apply through the same `managed-settings.json` mechanism GitHub already uses for other Copilot enterprise policies, now extended to the JetBrains plugin

## How to try it

- Update to the latest GitHub Copilot plugin for JetBrains IDEs to pick up support for managed settings
- Enterprise admins can add plugin, MCP, OpenTelemetry, and permission-mode keys to their existing `managed-settings.json` configuration
- See GitHub's enterprise managed settings reference documentation for the full key list and syntax
