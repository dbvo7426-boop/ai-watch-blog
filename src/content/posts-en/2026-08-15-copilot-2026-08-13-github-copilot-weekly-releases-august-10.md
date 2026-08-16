---
title: "GitHub Copilot Weekly Releases — August 10: CLI Task Management, App Plugin Controls, and VS Code 1.133"
description: "GitHub's weekly Copilot roundup for the week of August 10 adds a /tasks command and prompt queueing to Copilot CLI, a plugin management view and side-chat mode to the Copilot app, and model switching plus live HTML preview to VS Code 1.133."
pubDate: 2026-08-13
category: copilot
type: news
tags: [GitHub Copilot, Copilot CLI, VS Code, Weekly Releases]
source: https://github.blog/changelog/2026-08-13-github-copilot-weekly-releases-august-10
draft: false
importance: low
---

GitHub has published its Copilot weekly releases roundup for the week of August 10, 2026. The bulk of that week's headline items — Kimi K3's return, the MAI-Code-1.1-Flash launch, Copilot Memory and Ollama support for JetBrains, and Agent Plugins 1.0 — already shipped as their own changelog entries and are covered in their own articles. This post rounds up the smaller items bundled into the same weekly update that aren't covered elsewhere.

## Details

- **Copilot CLI gets task management**: A new `/tasks` command lets users manage subagents and their tasks directly from the CLI. Prompts, shell commands, and slash commands can now be queued while an agent turn is already in progress instead of waiting for it to finish. Headless mode can now combine `--plan` and `--mode autopilot` to plan and implement in one pass, and `/rewind` can restore previous changes without relying on git. The `/app` command also now preserves session and folder context between uses
- **Copilot app adds plugin management and a side chat**: The app's plugin management view now lets users see installed plugin versions and update them individually or all at once. A new side-chat mode lets users talk through an agent's question in a separate chat before answering it, without derailing the main conversation
- **VS Code 1.133**: Users can now switch between Claude BYOK (bring-your-own-key) models and Copilot's built-in models within the same session. A chat navigation improvement lets users pin relevant prompts while scrolling through long conversations, and an HTML live-refresh feature shows markup changes immediately without a manual browser reload

## What happened next

None of these are major standalone releases — they're incremental quality-of-life additions to the CLI, app, and VS Code extension that GitHub chose to bundle into a single weekly summary rather than announce individually. Anyone who wants the /tasks command, queueing, plugin management, or the VS Code 1.133 features needs to be on the latest Copilot CLI build and VS Code 1.133 or later.
