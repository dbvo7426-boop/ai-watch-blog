---
title: "GitHub Copilot for JetBrains Adds Memory and Ollama Support"
description: "GitHub Copilot for JetBrains now retains context across agent chat sessions with Copilot Memory, supports Ollama as a bring-your-own-key model provider, and gains new enterprise server-based admin controls."
pubDate: 2026-08-11
category: copilot
type: news
tags: [GitHub Copilot, JetBrains, Copilot Memory, Ollama, Enterprise]
source: https://github.blog/changelog/2026-08-11-copilot-memory-and-ollama-in-github-copilot-for-jetbrains
draft: false
importance: medium
---

GitHub shipped a substantial update to GitHub Copilot for JetBrains, headlined by a new Copilot Memory feature and bring-your-own-key support for Ollama as a model provider, alongside expanded enterprise controls.

## Details

- **Copilot Memory**: The plugin can now retain and recall useful information across agent chat sessions, so users don't need to repeat project context in every new conversation; the feature can be toggled from the Copilot settings portal
- **Ollama as a BYOK provider**: Developers can now configure Ollama as a bring-your-own-key model provider, with provider configuration and model selection available throughout the JetBrains experience
- **Enterprise server-based controls**: Administrators get new server-based controls for managing Copilot across their organization, covering plugin availability, MCP server access, and related settings
- **Automatic CLI installation**: The plugin can now automatically install the Copilot CLI from integrated terminals on macOS, Linux, and Windows
- **Codex workflow visibility**: Codex sessions are now visible in debug logs and support updated permissions and customization options
- **Usability fixes**: The update also improves account switching/removal, the model picker and settings panel, restores file/folder references in chat inputs, repositions customization and debug log buttons, and fixes issues with MCP execution reliability, terminal output handling, cloud agent stability, and diff-based editing

## How to try it

The update is available now to all GitHub Copilot for JetBrains users; Copilot Memory can be enabled or disabled from the Copilot settings portal, and Ollama can be added as a model provider from the same provider configuration screen.
