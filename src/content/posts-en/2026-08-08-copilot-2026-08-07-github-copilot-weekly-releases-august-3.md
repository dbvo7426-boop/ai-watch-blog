---
title: "GitHub Copilot Weekly Releases (Aug 3): CLI Worktrees, Multilingual Dictation, and More"
description: "GitHub's August 3 weekly Copilot roundup covers new CLI session tools like /worktree and /rewind, VS Code 1.132's multilingual dictation and hybrid Markdown diff editor, and Auto mode model visibility in the Copilot app."
pubDate: 2026-08-07
category: copilot
type: news
tags: [GitHub Copilot, Copilot CLI, VS Code, Weekly Update]
source: https://github.blog/changelog/2026-08-07-github-copilot-weekly-releases-august-3
draft: false
importance: low
---

GitHub published its weekly Copilot roundup for the week of August 3, spanning small updates across the Copilot app, Copilot CLI, and VS Code 1.132. None of the individual items amount to a major release on their own, but a few are worth flagging.

## Details

- **Copilot CLI gets `/worktree` and `/rewind`**: An experimental `/worktree` command spins up an isolated Git worktree for a separate conversation, while `/rewind` restores prior conversation state and files without relying on Git — useful for backing out of an agent's changes without losing edits made outside the session. The CLI also added a Sessions sidebar for managing multiple concurrent sessions (keyboard shortcuts `n` for new, `x` to close) and now shows live tool-call duration in the timeline
- **VS Code 1.132**: Adds a hybrid Markdown editor that shows diffs with gutter indicators for added/changed/deleted content, element-level feedback in the integrated browser (annotate specific webpage elements), multilingual dictation using an on-device model with automatic language detection, and a `/btw` command for side questions that preserves the primary conversation's context and cache
- **Copilot app**: Auto mode now shows which model handled each completed request along with AI credit and cache details; a `/side` command gives direct access to shared sessions for parallel questions; the Impeccable skill for mobile interfaces gained design review capabilities; session start and switching is faster

## What happened next

- These are incremental, single-week updates rather than a major version bump — most are still labeled experimental or preview
- Update to VS Code 1.132 or later and the latest Copilot CLI build to try `/worktree`, `/rewind`, and the new dictation and diff-editing features
