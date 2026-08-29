---
title: "GitHub Copilot's Weekly Roundup Brings Slack/Teams Agent Sessions, Customize Tab GA, and Visual Studio Model Controls"
description: "GitHub's week-of-August-24 Copilot release notes cover shared agent sessions in Slack and Microsoft Teams, general availability of the Copilot app's Customize tab, a Rust-based CLI performance boost, and new model-pinning and reasoning-effort controls in Visual Studio."
pubDate: 2026-08-24
category: copilot
type: news
tags: [GitHubCopilot, GitHub, Slack, MicrosoftTeams, VisualStudio, DeveloperTools]
source: https://github.blog/changelog/2026-08-28-github-copilot-weekly-releases-august-24
draft: false
importance: medium
---

GitHub published its week-of-August-24 Copilot release roundup, covering updates across nearly every surface — Slack, Microsoft Teams, the Copilot app, CLI, JetBrains, VS Code, and Visual Studio.

## Details

- **Slack and Microsoft Teams**: teams can now turn a group conversation into a shared agent session by mentioning @GitHub, letting multiple people collaborate on the same agent-driven code change from inside chat
- **Copilot app**: the Customize tab reached general availability, consolidating MCP servers, plugins, skills, and canvases into one place; the app also gained Azure DevOps integration for turning issues and PRs into Copilot sessions, plus experimental WSL support and improved tab management
- **CLI**: new `defaultMode` and `defaultPermissionMode` settings let users set session preferences up front, plugin/MCP/skills management commands were streamlined, sessions can now recover after interruption, and a native Rust runtime brought a performance boost
- **JetBrains**: added enterprise controls covering plugins, MCP servers, telemetry, and agent permissions
- **VS Code 1.135**: added cross-application session continuity, side-by-side model comparison, a simplified single-pane agent layout, and detailed per-model chat usage tracking
- **Visual Studio**: added model pinning and comparison, adjustable reasoning-effort levels (Low/Medium/High), organization-wide custom agent sharing, Copilot plan consumption visibility, and a Git agent that reviews uncommitted changes and commits before a PR is even opened

## What happened next

The breadth of this single week's changelog — spanning chat platforms, IDEs, and the CLI — reflects how much of GitHub's Copilot development cycle now ships on a near-continuous weekly cadence rather than in occasional large releases, with most features landing across the full Free-to-Enterprise plan lineup simultaneously.
