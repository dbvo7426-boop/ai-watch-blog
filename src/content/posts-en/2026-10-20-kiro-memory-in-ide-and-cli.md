---
title: "Kiro introduces memory in the IDE and CLI, off by default"
description: "Kiro can now remember preferences, repository conventions and corrections across sessions, stored locally and shared between the IDE and CLI."
pubDate: 2026-10-20
category: kiro
type: news
tags: [Kiro, Memory, KiroIDE, KiroCLI]
source: https://kiro.dev/blog/memory-in-ide-cli/
draft: false
importance: medium
---

Kiro announced memory for Kiro IDE and CLI. It lets Kiro keep how you prefer to work, repository-specific commands and conventions, corrections, debugging insights and approaches you have ruled out, so you re-explain less.

## Details

- **Versus rules:** Steering rules and project documents suit context you state up front. Memory is for context that emerges as you work. Kiro keeps specific context rather than replaying past conversations, and can refine memories over time.
- **Storage and scope:** Memories stay local to your machine and are shared between the IDE and CLI on it. Each memory can be global or tied to one repository.
- **Visibility:** In the IDE, chat shows when a memory is accessed, created, updated or deleted, and a Memories view in the activity bar lets you browse, search, inspect and delete entries. In the CLI, recalled memories appear as Memory entries and `/memories` searches, previews and opens them.
- **Off by default:** You control separately whether Kiro can use existing memories and whether it can create or update them. In the IDE choose Use and learn in the Memories view settings; in the CLI use `/memories` with read and write access, and changes apply to a new session. Recalled memories add to context usage.
- **Availability:** Kiro IDE 1.4.0 and later, and Kiro CLI 2.29.0 and later for local V3 sessions.

## What happened next

Memory arrives shortly after CLI V3 became the default path, and its control model (local, inspectable, opt-in) addresses the obvious privacy and context-bloat questions. The announcement does not mention cloud sessions, so memory is for local work for now.
