---
title: Grok Build Gets a "Plugin Marketplace" — Six Partners Including MongoDB and Vercel on Board
description: xAI launched a plugin marketplace for Grok Build, letting users install integrations with services like MongoDB, Vercel, and Sentry without ever leaving the terminal.
pubDate: 2026-06-11
category: grok
type: news
tags: [Grok Build, xAI, plugins, coding, AI History]
source: https://x.ai/news/grok-plugin-marketplace
draft: false
importance: low
---

xAI added a plugin marketplace to its coding agent "Grok Build." It lets users browse and install "plugins" — bundles of skills, slash commands, hooks, and MCP servers — without ever leaving the terminal. Six plugins, including MongoDB and Vercel, were available at launch.

## Details

- **What a plugin is**: A single package bundling skills, slash commands, agents, hooks, MCP servers, and LSP support
- **Launch partners**: MongoDB (data exploration and query optimization), Vercel (deployment management and domain configuration), Sentry (stack trace analysis), Chrome DevTools (browser control and performance measurement), Cloudflare (Workers and Durable Objects integration), and Superpowers (agent-driven workflows)
- **How to use it**: Type `/marketplace` inside Grok Build and press `i` to install. Installation from the command line is also supported
- **Security**: Remote plugins are pinned to a specific commit SHA, and Grok Build verifies that pin at install time
- **Open catalog**: Developers can submit their own plugins for listing via a pull request to `xai-org/plugin-marketplace`

## What happened next

- On June 15, an "Agent Dashboard" for managing multiple sessions at once was added (available from Grok Build v0.2.20 onward)
- On July 15, in response to a recently uncovered issue involving unauthorized repository uploads, the entire Grok Build source code was released under the Apache 2.0 license
