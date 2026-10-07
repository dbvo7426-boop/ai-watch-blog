---
title: "Local Sandboxing for GitHub Copilot Reaches General Availability"
description: "GitHub Copilot's local sandboxing, which creates a secure execution boundary for agentic workflows using Microsoft eXecution Container (MXC) to control file, network, and credential access, moved from limited availability to GA across CLI, app, and VS Code at no extra cost."
pubDate: 2026-10-07
category: copilot
type: news
tags: [GitHubCopilot, Sandboxing, Security, MXC]
source: https://github.blog/changelog/2026-10-07-local-sandboxing-for-github-copilot-now-generally-available
draft: false
importance: medium
---

Local sandboxing for GitHub Copilot reached general availability, giving agentic Copilot workflows a secure execution boundary on developers' own machines.

## Details

- **What it does**: creates a secure execution boundary that restricts how AI-generated tools and commands can interact with system resources, governing file system read/write permissions, network and local network connectivity, credential access (Git and GitHub CLI), and other capabilities based on developer-defined policies
- **Technical implementation**: built on "Microsoft eXecution Container" (MXC), which translates sandbox rules into native OS controls consistently across Windows, macOS, and Linux
- **Enterprise controls**: organizations can enforce sandboxing requirements developers cannot override, extend restrictions to local tools including MCP and language servers, and set governance policies tailored to their needs
- **Model-independent**: sandbox policies control what tools can access regardless of the underlying AI model, rather than governing model behavior itself
- **Availability**: GA now in GitHub Copilot CLI, the Copilot app, and VS Code sessions using Agent Host, included at no extra cost beyond existing Copilot subscriptions

## What happened next

GA status for local sandboxing lands the same week as Copilot's purpose-built secret-detection model and local-model discovery in the CLI, together forming a cluster of security- and control-focused releases as GitHub expands how much autonomous, agentic action Copilot can take on developers' machines.
