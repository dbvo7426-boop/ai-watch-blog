---
title: "Agent Plugins 1.0 in VS Code, Copilot CLI, and the Copilot App"
description: "GitHub has released Agent Plugins 1.0, an open standard co-maintained with AWS, Anysphere, Microsoft, OpenAI, Vercel, and Google that lets developers build a plugin once and run it across VS Code, Copilot CLI, the Copilot app, and other compatible agent clients."
pubDate: 2026-08-12
category: copilot
type: news
tags: [GitHub Copilot, Agent Plugins, MCP, VS Code, Copilot CLI, Open Standard]
source: https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app
draft: false
importance: medium
---

GitHub has published Agent Plugins 1.0, an open, vendor-independent standard for packaging agent skills and MCP (Model Context Protocol) servers into a single plugin that runs across every compatible agent client. It's now generally available on all Copilot plans.

## Details

- **The core problem it solves**: Publishing an agent plugin across multiple platforms previously meant maintaining separate manifests and directory layouts for each one. Agent Plugins 1.0 packages skills and MCP servers into one unified format so a plugin can be built once and used everywhere it's supported
- **Supported clients**: VS Code, Copilot CLI, the GitHub Copilot app, the GitHub Copilot SDK, and the Copilot cloud agent
- **Co-maintained as an open standard**: AWS, Anysphere, Microsoft, OpenAI, and Vercel are core maintainers, and Google has now joined as a core maintainer as well — it isn't controlled by GitHub or Microsoft alone
- **Migrating an existing plugin**: Add a `$schema` reference to `plugin.json`, organize skills under a `skills/` directory and MCP configuration in `mcp.json`, and place any Copilot-specific components (custom agents, commands, rules, hooks, extensions) inside a `com.github.copilot/` directory that other clients simply ignore
- **Discovery and installation**: Plugins can be installed from the Awesome Copilot marketplace, which is available by default in VS Code, Copilot CLI, and the Copilot app
- **Enterprise governance**: Copilot Business and Enterprise admins manage plugins through `managed-settings.json`, using `enabledPlugins` to auto-install or block specific plugins and `extraKnownMarketplaces`/`strictKnownMarketplaces` to control which marketplaces are available. Existing managed-settings configurations apply automatically, with no separate Agent Plugins policy to set up
- **Backward compatible**: Existing GitHub Copilot plugins keep working without any required migration

## How to try it

Plugins can be installed today from the Awesome Copilot marketplace inside VS Code, Copilot CLI, or the Copilot app. Developers building or migrating a plugin can follow GitHub's "Build an Agent Plugin" guide and the Agent Plugins 1.0 specification, both linked from the changelog entry, along with an example plugin and migration guide.
