---
title: Grok Build Adds an "Agent Dashboard" — Manage Multiple Sessions Side by Side in One View
description: xAI added an "Agent Dashboard" to Grok Build, letting users manage multiple coding sessions in parallel from a single screen.
pubDate: 2026-06-15
category: grok
type: news
tags: [Grok Build, xAI, dashboard, coding, AI History]
source: https://x.ai/news/agent-dashboard
draft: false
importance: low
---

xAI added an "Agent Dashboard" to its coding agent "Grok Build," enabling users to manage multiple running sessions at once. The feature is designed for an approach where users can see at a glance what each session is doing, let them run in parallel, and step in only when human judgment is needed.

## Details

- **Session organization**: Sessions are automatically sorted by status — "awaiting input," "working," or "idle" — so the ones that need attention stand out immediately. Ctrl+S also groups sessions by working directory
- **Subagent grouping**: Child agents are shown nested under their parent session, keeping things easy to follow
- **Preview and instant response**: Selecting a session lets you view its output and respond right away without leaving the dashboard
- **Inline choices**: When a session needs an approval or is asking a question, the available choices appear inline on the dashboard
- **Launching new sessions**: New sessions can be started from the dashboard's input field. Enter queues it (staying on the dashboard), while Shift+Enter opens it immediately
- **Taking over a session**: Any session can be opened and switched to full manual control. Users can freely move between sessions and back to the dashboard
- **Persistence**: All sessions keep running even after the dashboard is closed

## How to use it

- Launch from the shell with `grok dashboard`
- Call it up from within a session using the `/dashboard` command or Ctrl+\\
- Available from Grok Build v0.2.20 onward

## What happened next

- On July 12, security researchers flagged an issue involving unauthorized repository uploads by the Grok Build CLI
- On July 15, in response, the entire Grok Build source code was made fully public under the Apache 2.0 license
