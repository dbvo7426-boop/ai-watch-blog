---
title: "Grok Build Adds Persistent Memory Across Coding Sessions"
description: "xAI gave Grok Build a memory system that automatically captures project conventions and decisions between sessions, browsable via a new /memory command and organized with /dream."
pubDate: 2026-09-16
category: grok
type: news
tags: [Grok, xAI, GrokBuild, AI coding agent, Memory]
source: https://x.ai/news/grok-build-memory
draft: false
importance: medium
---

xAI added a memory system to Grok Build, its AI coding agent, on September 16, 2026, so the agent can retain project conventions, decisions, and durable facts across sessions instead of starting from scratch every time.

## Details

- **What gets remembered**: coding conventions, the reasoning behind past decisions, and durable project facts — explicitly excluding task states, tentative conclusions, secrets, and anything already captured in the repository or its documentation
- **Automatic capture**: memory notes are written in the background after each completed turn, without interrupting the active session
- **Two new commands**: `/memory` gives read-only browsing of all stored memory files grouped by scope, while `/dream` organizes recent notes into structured topic files (for example, `topics/testing.md`)
- **Two scopes**: memory works at the project level as well as globally, so cross-project preferences can carry over between repositories
- **Session behavior**: relevant memory files are retrieved automatically when returning to a project; instructions given in the current conversation always take priority over stored notes
- **Activation**: the feature turns on for new sessions started with `/new` or a fresh `grok` invocation, with capture beginning after the first completed turn

## What happened next

The memory system builds directly on Grok Build's existing agent-dashboard and workflow features, aiming to cut down on repeated context-setting for engineers who return to the same codebase over multiple sessions. xAI positioned it as a background capability rather than an opt-in setting, so existing Grok Build users should see memory files accumulate automatically as they keep working. It arrives alongside continued speculation about a next-generation Grok model, though as of this writing xAI has not confirmed any Grok 4.7 release on its official channels.
