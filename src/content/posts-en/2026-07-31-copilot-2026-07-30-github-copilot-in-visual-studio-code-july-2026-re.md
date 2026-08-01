---
title: "GitHub Copilot for VS Code's July Releases (v1.127-v1.131) Overhaul the Agents Window and Add Multi-Chat Sessions"
description: "GitHub has published a changelog covering VS Code Copilot's v1.127 through v1.131 releases in July 2026, including a redesigned Agents window, multi-chat sessions within a single agent session, and general availability of Copilot Vision."
pubDate: 2026-07-31
category: copilot
type: news
tags: [Copilot, VS Code, GitHub, Updates]
source: https://github.blog/changelog/2026-07-30-github-copilot-in-visual-studio-code-july-2026-releases
draft: false
importance: medium
---

GitHub has published a changelog covering GitHub Copilot for VS Code's July 2026 releases, spanning v1.127 through v1.131. The batch includes a redesigned Agents window, the ability to run multiple chats within a single agent session, and general availability of Copilot Vision, among many other changes.

## Details

- **Redesigned Agents window**: A new layout opens files and diffs next to the conversation with unified tab management. Faster review workflows show file addition/deletion counts, a compact diff view, and switching between inline and side-by-side diffs
- **Git worktree support**: Launch isolated sessions using Copilot, Claude, or Codex in separate copies of the repository
- **Quick chat**: Ask questions without opening a workspace, kept separate from project sessions
- **Session management**: Group related conversations and reorder them by drag-and-drop. Subagent activity can be tracked for model, elapsed time, and active tool calls
- **Faster PR handling**: Act on failed CI checks and new review comments directly from banner notifications
- **Multi-chat sessions**: A single agent session now supports multiple related chats, each with independent history and titles. A new "peer chat forking" feature lets you explore an alternative approach from any point in a conversation while preserving the original context. Individual chats can be hidden, reopened, or permanently deleted, and keyboard navigation lets you move between chats without a mouse
- **Chat and model updates**: Copilot Vision is now generally available for pasting, dragging, or importing files via the context menu. Business/Enterprise users can view current billing-cycle usage from the status menu. BYOK (bring-your-own-key) model support extends to the Agents window (it's been available in the editor since March 2025). Prefixing a chat message with `!` runs it as a terminal command
- **Editor, terminal, and browser**: An experimental modernized UI is in preview on Stable (default on Insiders); terminal diff output lets you click a file path to open it directly, recognizing Git prefixes like `i/` and `w/`; integrated browser tab placement is now configurable; OS-level keyboard shortcuts can trigger VS Code commands even when it's in the background; existing prompt files can be migrated into reusable skills; you can switch editor types from the toolbar; and Markdown can be edited in-place within the Agents window with agent-actionable comments
- **Accessibility**: Enable `dictation.enabled` for speech input across chat, the editor, and the integrated terminal. The experimental `dictation.experimental.llmCleanup` setting lets Copilot clean up and format spoken text. The terminal's Accessible View now keeps cursor position stable as output arrives and can be read independently

## How to try it

- Update VS Code to v1.131 or later on the Stable channel and check out the new Agents window layout and multi-chat features
- Enable `dictation.enabled` in settings to try voice input
- Drag a file into Copilot Chat to try the now generally available Copilot Vision
- Prefix a chat message with `!` to run it directly as a terminal command
