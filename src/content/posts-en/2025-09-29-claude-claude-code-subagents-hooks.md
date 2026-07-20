---
title: Claude Code strengthens autonomy with "subagents," "hooks," and "checkpoints"
description: Timed with the announcement of Claude Sonnet 4.5, Anthropic added subagents, hooks, and checkpoint (rewind) features to Claude Code. The VS Code extension also reached general release, and the SDK was renamed "Claude Agent SDK."
pubDate: 2025-09-29
category: claude
type: news
tags: [Claude Code, Anthropic, Subagents, Hooks, Claude Agent SDK, "AI History"]
source: https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously
draft: false
importance: high
---

On September 29, 2025, Anthropic announced a major update aimed at letting Claude Code "work more autonomously." It newly adds "subagents" that can be delegated dedicated tasks, "hooks" that reliably trigger a set process at a given moment, and "checkpoints" that let work be rewound. The VS Code extension has also reached general release, and the SDK has been renamed the "Claude Agent SDK."

## Details

- **Subagents**: Enables parallel work such as "have the main agent build the frontend while a separate subagent handles the backend API." Specialized tasks can be broken out and delegated
- **Hooks**: A mechanism that reliably triggers a process at a specific moment, such as running tests after a code change or linting before a commit. The key feature is that it always executes, independent of the model's behavior
- **Checkpoints (rewind)**: Automatically saves the code state before a change, allowing an instant return to the previous state via two presses of Esc or the `/rewind` command. Users can choose to restore code, conversation, or both
- **VS Code extension reaches general release**: Now out of beta, featuring real-time change display and inline diffs. The terminal UI was also refreshed, adding status displays and searchable prompt history
- **Claude Agent SDK (formerly Claude Code SDK)**: Renamed and expanded into a developer-facing SDK that reuses Claude Code's core tools and permission-management mechanisms to build custom agent experiences
- **New default model, Claude Sonnet 4.5**: Scored 77.2% on SWE-bench Verified, and in internal testing was reportedly able to stay focused on complex coding tasks for more than 30 hours straight

## What happened next

Just three weeks after this major update (commonly called Claude Code 2.0), "Claude Code on the web" arrived on October 20, 2025, letting users manage multiple coding tasks in parallel from a browser. The push toward greater autonomy continued right along this trajectory, extending the places work can happen beyond the terminal.
