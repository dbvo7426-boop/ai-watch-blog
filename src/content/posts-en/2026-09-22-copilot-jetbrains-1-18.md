---
title: "GitHub Copilot for JetBrains 1.18.0 Adds AI-Assisted Tool Approvals and Editable Agent History"
description: "GitHub Copilot for JetBrains 1.18.0 auto-approves low-risk tool calls while flagging higher-risk ones, lets users re-edit earlier messages in agent sessions with rewound history, adds org-level custom instructions, a plan-review mode, and per-tool MCP controls."
pubDate: 2026-09-22
category: copilot
type: news
tags: [GitHubCopilot, GitHub, JetBrains, MCP, DeveloperTools]
source: https://github.blog/changelog/2026-09-22-new-features-and-improvements-in-copilot-for-jetbrains
draft: false
importance: medium
---

GitHub Copilot for JetBrains 1.18.0 shipped a batch of features focused on approval control, conversation editing, and organizational consistency.

## Details

- **AI-assisted tool approvals (preview)**: automatically approves low-risk tool calls while still requiring confirmation for higher-risk actions, cutting approval interruptions without giving up control over sensitive operations
- **Editable agent history**: users can re-edit previous messages in an agent session, rewinding both conversation history and file modifications to revise an earlier request without cluttering the chat
- **Org-level customization**: support for organization and enterprise-level skills and custom instructions across both local and agent sessions, for consistent team practices
- **Codex agent plan mode**: lets developers review and approve a suggested approach before the agent implements changes
- **MCP tool management**: granular, persistent per-tool settings for Model Context Protocol tools, plus a toggle for the built-in GitHub MCP Server
- **Interface changes**: a side-by-side chat panel switcher for browsing and conversing simultaneously, plus improved discoverability of commands, customizations, and settings, alongside reliability fixes for inline chat and Codex sessions

## What happened next

The release leans toward giving developers more control over agent behavior — approving what gets auto-run, editing history instead of restarting a session, previewing a plan before execution — rather than adding new raw capability, consistent with GitHub's recent focus on trust and governance features across Copilot surfaces.
