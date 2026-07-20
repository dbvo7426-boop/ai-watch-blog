---
title: "\"Gemini CLI\" gains deep VS Code integration with workspace awareness and native diffing"
description: Google announced an update to Gemini CLI that strengthens its integration with the VS Code integrated terminal. It now recognizes open files and cursor position, and can show proposed changes as diffs directly inside the editor.
pubDate: 2025-08-13
category: gemini
type: news
tags: [Gemini CLI, Google, VS Code, "AI History"]
source: https://developers.googleblog.com/gemini-cli-vs-code-native-diffing-context-aware-workflows/
draft: false
importance: medium
---

On August 13, 2025, Google announced an update to "Gemini CLI" that greatly strengthens its integration with VS Code. Despite being a terminal-based agent, its headline feature is now recognizing editor context — open files, cursor position, and selected text — and letting proposed changes be shown and edited as diffs directly within the editor.

## Details

- **Workspace and selection context**: Once VS Code integration is enabled, Gemini CLI can access open files and selected text, allowing suggestions tailored to the work currently in progress
- **Native diff display**: Proposed code changes appear as a full-screen diff view within VS Code, letting users tweak them on the spot before accepting
- **Requirements**: Requires Gemini CLI version 0.1.20 or later, run from VS Code's integrated terminal
- **Setup**: The first run installs the companion extension via `/ide install`; afterward, integration can be toggled on and off with `/ide enable` and `/ide disable`
- **Supported environments**: Works with VS Code itself as well as VS Code-compatible editors; launching Gemini CLI in a supported environment automatically prompts a connection dialog

## What happened next

VS Code integration marked a turning point that elevated Gemini CLI from a mere terminal tool into a development experience fused with the editor. This integrated architecture would go on to share its technical foundation with Google's agent-focused IDE, "Antigravity," which arrived in November 2025.
