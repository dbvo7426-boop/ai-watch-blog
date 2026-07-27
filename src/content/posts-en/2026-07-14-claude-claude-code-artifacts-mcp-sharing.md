---
title: "Claude Code's Artifacts Gain Public Sharing Links and Live MCP Connector Data"
description: "Anthropic expands Claude Code's Artifacts feature with public links anyone can open, editor roles for Team and Enterprise plans, and the ability for a page to call MCP connectors each time it's viewed, pulling live data instead of a frozen snapshot."
pubDate: 2026-07-14
category: claude
type: news
tags: [Claude Code, Artifacts, MCP, Anthropic]
source: https://code.claude.com/docs/en/whats-new/2026-w29
draft: false
importance: medium
---

Anthropic has expanded Artifacts — the feature that turns a Claude Code session's output into a live page on claude.ai — with public sharing links anyone can open, editor roles for shared editing on Team and Enterprise plans, and support for a published page to call MCP connectors each time someone views it, so it shows live data instead of a snapshot from when it was built (v2.1.207–v2.1.212, the July 13–17, 2026 update week).

## Details

- **Live data through MCP connectors**: A published artifact can now call MCP connectors every time someone opens it, so the page shows current data rather than what was available when it was built. Each call runs through the viewing account's own connections, and viewers are asked to approve access before the page's first connector call
- **Public sharing links**: Artifacts can now be shared via a public link that anyone can open with no claude.ai sign-in required. On Pro and Max plans, a public link is the only way to share an artifact; on Team and Enterprise, sharing defaults to inside the organization and public links stay off until an Owner enables them
- **Editor roles**: On Team and Enterprise plans, a viewer can be promoted to editor for multiplayer editing — an editor gives Claude the artifact's URL in their own session and republishes changes, which everyone with the page open then sees live
- **Artifacts from Claude Tag sessions**: Artifacts can now also be published directly from Claude Tag sessions (e.g., in Slack)
- **Limitation**: An artifact that calls MCP connectors at view time cannot be shared to a public link on any plan — live data and no-login public access are mutually exclusive
- **Requirement**: Connector calls from artifacts require Claude Code v2.1.209 or later. The same update week also added screen reader mode, which replaces the visual terminal UI with plain linear text for tools like VoiceOver and NVDA, and a revamp of `/fork` that copies a conversation into its own background session

## How to try it

- On Pro, Max, Team, or Enterprise (Claude Code CLI v2.1.183+ or a supporting Desktop app build), publish an artifact from a session and use the **Share** control in the page header to set its audience (organization or public) and assign editors
- To pull live data through an MCP connector, name the connector and the data you want directly in your prompt (for example, "Build a dashboard artifact of open pull requests that pulls the live list through my GitHub connector when the page loads")
- On Team and Enterprise, an Owner must turn on **External sharing** under Settings > Claude Code > Capabilities before members can publish artifacts to public links
