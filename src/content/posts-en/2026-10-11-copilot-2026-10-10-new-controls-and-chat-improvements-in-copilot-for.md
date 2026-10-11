---
title: "GitHub Copilot for JetBrains Adds Admin Model Controls and Chat Improvements"
description: "GitHub Copilot for JetBrains added enterprise controls for setting a default agent model and disabling automatic MCP server startup, plus chat improvements including a diagnostic Fix action, turn-grouped messages, and clearer account switching."
pubDate: 2026-10-10
category: copilot
type: news
tags: [GitHubCopilot, JetBrains, DeveloperTools]
source: https://github.blog/changelog/2026-10-10-new-controls-and-chat-improvements-in-copilot-for-jetbrains
draft: false
importance: low
---

GitHub Copilot for JetBrains gained new administrative controls and several chat workflow improvements.

## Details

- **Default agent model control**: enterprise admins can set a default agent model for new conversations through managed settings, though users can still pick a different model from the picker
- **MCP auto-startup toggle**: a new setting can turn off automatic startup for Copilot and Claude MCP servers, letting users decide when those tools become active
- **Diagnostic Fix action**: diagnostic menus now include a Fix action that opens inline chat and asks Copilot to repair the issue, using agent mode when available
- **Account clarity**: signed-in accounts get clearer labels, a simpler status display, and a "Switch Account" action; new users get a one-time reminder about where to find Chat, and the sign-in page has a refreshed layout
- **Chat organization**: messages are now grouped by turn with controls to jump between turns, and user messages can be copied or edited; the agent placeholder gives guidance on questions, edits, context, and commands
- **Availability**: in the latest GitHub Copilot plugin for JetBrains IDEs; JetBrains IDE 2025.1 is no longer supported, requiring version 2025.2 or later

## What happened next

This rounds out a cluster of admin-control and workflow-polish releases GitHub shipped across its CLI, VS Code, and JetBrains surfaces this month, extending enterprise governance options and chat usability improvements to JetBrains users specifically.
