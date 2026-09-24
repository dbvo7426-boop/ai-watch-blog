---
title: "GitHub Copilot App Adds Local Sandboxing to Limit Unintended Command Impact"
description: "GitHub Copilot's local sandboxing, now in public preview, restricts an agent session's filesystem access, network connectivity, and Git/GitHub credentials to reduce the blast radius of unintended commands, configurable per project or via a /sandbox command."
pubDate: 2026-09-23
category: copilot
type: news
tags: [GitHubCopilot, GitHub, Sandboxing, Security, DeveloperTools]
source: https://github.blog/changelog/2026-09-23-local-sandboxing-in-the-github-copilot-app
draft: false
importance: medium
---

GitHub added local sandboxing to the Copilot app, limiting what an agent session can touch on a developer's machine to reduce the impact of unintended commands.

## Details

- **What it restricts**: filesystem access (read/write, read-only, or blocked folders), network connectivity (outbound internet and local network), and credentials (Git and GitHub CLI authentication)
- **How to enable it**: toggle "Sandbox new sessions" under the app's Sandbox settings to apply per project, or run `/sandbox on` for an active session; changes take effect on new sessions or after a restart
- **Availability**: public preview, disabled by default, and limited to local repository and working-tree sessions — it doesn't apply to cloud or remote sessions; enterprise-managed policies can layer additional restrictions on top of project settings

## What happened next

Local sandboxing extends the same kind of containment GitHub has been building into its cloud and remote agent sessions down to local, on-machine sessions, giving developers a way to limit an agent's reach on their own computer rather than only in hosted environments.
