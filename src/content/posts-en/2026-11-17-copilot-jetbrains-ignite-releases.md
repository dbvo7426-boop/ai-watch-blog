---
title: "GitHub Copilot for JetBrains adds cloud sandbox, remote access and browser use in preview"
description: "The Microsoft Ignite release for JetBrains IDEs brings four public-preview features, split mode remote development, UX changes, and the end of support for IDE 2025.2."
pubDate: 2026-11-17
category: copilot
type: news
tags: [GitHub Copilot, JetBrains, cloud sandbox, browser use]
source: https://github.blog/changelog/2026-11-17-github-copilot-in-jetbrains-ignite-releases
draft: false
importance: low
---

GitHub released an update to GitHub Copilot for JetBrains IDEs on November 17, 2026.

**New features**
- **Cloud sandbox (public preview):** runs Copilot sessions in an isolated, GitHub-hosted environment where Copilot can edit code and run commands and tests, freeing local resources and allowing parallel sessions. Phased rollout.
- **Remote access (public preview):** opt-in sharing of Copilot chats with other clients such as VS Code and the Copilot app; find shared sessions on remotely accessible computers and resume them from history. Phased rollout.
- **Browser use (public preview):** with the GitHub Copilot Chrome extension, Copilot can open pages, read content and interact with links, buttons and forms. Enable it under GitHub Copilot > Chat > Enable Browser Use.
- **On-device voice dictation (public preview):** dictate chat messages on supported native plugin packages with Editor Preview enabled; you opt in and download a model, and transcripts stay editable drafts until sent.
- **Split mode remote development:** chat and editor UI run locally while Copilot operations run on the remote backend; the plugin must be installed on both.

**Other changes**
- Timestamps on agent prompts and responses; a Delete button in session history; Enter steers a running agent session and Ctrl+Enter (Command+Enter on macOS) queues a follow-up.
- Copilot Fusion is pinned at the top of agent model management and applies enterprise-managed tier defaults.
- Code review now uses the Copilot agent review engine, shown in the existing inline review interface.
- Enterprise-managed settings disable Claude and Codex unless an administrator policy allows an exception.
- Java modernization findings appear in the Problems View, and automatic Maven vulnerability checks are restored (dependency coordinates are sent to GitHub Advisories when a Maven project is opened or imported).
- The chat onboarding tour is generally available to eligible users.

**Deprecation:** support for JetBrains IDE 2025.2 has ended. Upgrade to 2025.3 or later; 2026.2 or later is recommended. Plan availability per feature is undisclosed.
