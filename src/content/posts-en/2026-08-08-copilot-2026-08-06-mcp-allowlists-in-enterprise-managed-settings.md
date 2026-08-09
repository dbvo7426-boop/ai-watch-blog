---
title: "GitHub Adds MCP Server Allowlists to Enterprise Managed Settings"
description: "Enterprise owners can now centrally allow or deny specific Model Context Protocol (MCP) servers across GitHub Copilot clients, using new allowedMcpServers and deniedMcpServers keys in managed-settings.json."
pubDate: 2026-08-06
category: copilot
type: news
tags: [GitHub Copilot, MCP, Enterprise, Governance, Security]
source: https://github.blog/changelog/2026-08-06-mcp-allowlists-in-enterprise-managed-settings
draft: false
importance: medium
---

GitHub has given enterprise owners a way to centrally control which Model Context Protocol (MCP) servers GitHub Copilot clients are allowed to connect to. The feature adds two new keys, `allowedMcpServers` and `deniedMcpServers`, to the existing enterprise managed settings mechanism, and is now generally available.

## Details

- **Three ways to match a server**: `serverUrl` matches remote servers over HTTP/SSE and supports wildcard patterns; `serverCommand` matches local stdio servers by exact command and arguments; `serverName` matches a user-assigned label, but is convenience-only and not a security control on its own
- **Fails closed**: A malformed or unverifiable policy configuration is blocked rather than silently allowed, so misconfiguration errs toward restriction rather than exposure
- **Overridable policies**: In server-managed deployments, both `allowedMcpServers` and `deniedMcpServers` can be marked `overridable`, letting individual teams layer their own allow/deny lists on top of an enterprise baseline
- **Supported clients**: The GitHub Copilot app, Copilot CLI, and VS Code all respect the new allowlist/denylist settings
- **Setup**: Administrators add the keys to `copilot/managed-settings.json` inside the enterprise's `.github-private` repository and commit to the default branch, the same mechanism already used for other Copilot enterprise policies

## How to try it

- Enterprise owners can add `allowedMcpServers` and `deniedMcpServers` entries to `copilot/managed-settings.json` in their `.github-private` repository
- Use `serverUrl` or `serverCommand` matching for actual access control; treat `serverName` as a label rather than a security boundary
- Mark policies `overridable` if individual organizations need to extend the enterprise baseline
