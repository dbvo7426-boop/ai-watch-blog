---
title: "GitHub Copilot in VS Code adds cloud sessions, Agent Host, model comparison and computer use"
description: "Universe releases for VS Code include cloud agent sessions you can continue across clients, an Agent Host, parallel model comparison, experimental computer use, and a customization marketplace."
pubDate: 2026-10-28
category: copilot
type: news
tags: [GitHub Copilot, VS Code, GitHub Universe, Agents, MCP]
source: https://github.blog/changelog/2026-10-28-github-copilot-in-vs-code-universe-releases
draft: false
importance: medium
---

GitHub shipped a set of Universe releases for Copilot in Visual Studio Code, centered on running agent sessions in the cloud or on your own machines and continuing them from any Copilot client.

## Details

- **Cloud sessions:** Start a cloud agent session from the VS Code Agents window on GitHub infrastructure and continue it in VS Code, the GitHub Copilot app, GitHub Mobile, github.com or Copilot CLI. Sessions from Slack or Teams DMs can be continued too.
- **Agent Host:** Keeps sessions running after a window closes, and can run on another machine via Remote SSH or dev tunnels. From GitHub Mobile you can direct agents on your dev machine (`code agent host --github-environment`).
- **Harness:** The Copilot harness, built on the Microsoft Copilot SDK, is the default for new sessions.
- **Compare models (preview):** Run models and harnesses in parallel; a Judge model can recommend a result and Synthesize merges ideas. Plan requirements are not listed.
- **Computer use (experimental):** On macOS and Windows, Copilot can interact with desktop apps after per-app approval; enable `chat.agentHost.computerUse.enabled` and run `/computer on`. Organizations can disable it by policy.
- **Agent Host Protocol:** An open protocol with client libraries for TypeScript, Rust, Go, Kotlin and Swift.
- **Customization Marketplace (preview):** Skills, MCP servers and plugins, with admin policies to require, block or restrict sources.
- **Copilot connectors (preview):** Slack, Notion and Microsoft Learn without installing an MCP server; available on all Copilot plans.

## What happened next

This is the VS Code counterpart to the JetBrains and Copilot app Universe releases, covering session portability and governance. Many items are preview or experimental, and version numbers are undisclosed.
