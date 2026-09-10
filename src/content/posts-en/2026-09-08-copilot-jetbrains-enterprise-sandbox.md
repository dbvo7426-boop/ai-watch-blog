---
title: "GitHub Copilot for JetBrains Adds Enterprise-Managed Sandbox Policies and Cross-File Edit Jumps"
description: "GitHub added centralized enterprise-managed sandbox controls to Copilot for JetBrains, letting admins override user sandbox settings, alongside cross-file next-edit suggestions, global project context in chat, and terminal-to-IDE integration via Copilot CLI's /ide command."
pubDate: 2026-09-08
category: copilot
type: news
tags: [GitHubCopilot, GitHub, JetBrains, EnterpriseSettings, DeveloperTools]
source: https://github.blog/changelog/2026-09-08-enterprise-managed-sandbox-in-copilot-for-jetbrains
draft: false
importance: medium
---

GitHub added enterprise-managed sandbox controls to Copilot for JetBrains, giving administrators centralized authority over sandbox behavior that overrides individual user preferences, alongside several other JetBrains improvements.

## Details

- **Enterprise-managed sandbox**: admins can set organization-wide policies governing sandbox activation, file system and network permissions, proxy configuration, tool access, and macOS Keychain usage; when a policy is enforced, the IDE locks the related setting and visually marks it as organization-controlled
- **Cross-file cursor jumps**: next-edit suggestions can now navigate across multiple files, letting developers apply coordinated changes throughout a project without manually searching for each location
- **Global project context in chat**: users can add project-wide files and folders to a chat conversation, cutting down on repetitive context-setting for multi-file changes
- **Enterprise policy diagnostics**: a new verification tool lets users confirm that organizational policies are being correctly detected and applied on their machine
- **Terminal-IDE integration**: the `/ide` command in Copilot CLI connects a terminal session to JetBrains, sharing IDE context like selections and diagnostics while supporting project-specific environment variables and virtual environments

## What happened next

The enterprise sandbox controls extend the same kind of centralized governance GitHub has been rolling out for other Copilot surfaces to JetBrains specifically, while the cross-file and terminal-integration features aim to reduce the manual context-switching that comes with multi-file agentic edits.
