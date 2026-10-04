---
title: "GitHub Copilot Gains 'Computer Use' to Control Desktop Apps on macOS and Windows"
description: "GitHub launched a public preview of computer use in Copilot CLI and the GitHub Copilot app, letting Copilot read, click, type, scroll, and navigate desktop applications directly — extending assistance to legacy software and GUI-only tools with no API."
pubDate: 2026-10-01
category: copilot
type: news
tags: [GitHubCopilot, ComputerUse, DeveloperTools, Agents]
source: https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps
draft: false
importance: high
---

GitHub launched a public preview of computer use for GitHub Copilot, letting it interact directly with desktop applications on macOS and Windows.

## Details

- **What it does**: Copilot can autonomously read content, click controls, type text, scroll, and navigate across desktop applications, extending assistance to legacy software and GUI-only programs that lack APIs or command-line interfaces
- **Approval model**: Copilot requests user approval before controlling any application; users can review or reset permissions for apps marked always-allowed, and organizations can disable the feature entirely through managed settings
- **macOS setup**: the system walks users through required Accessibility and Screen Recording permissions
- **Availability**: public preview in GitHub Copilot CLI and the GitHub Copilot app on both macOS and Windows
- **Getting started**: enable via `/computer on` in CLI (check status with `/computer show`, disable with `/computer off`), or through Settings → Computer Use in the app
- **Example use cases**: summarizing notifications in a browser, updating content in a presentation, or moving information through a workflow in a desktop application

## What happened next

This gives GitHub Copilot the same kind of autonomous desktop/computer-control capability OpenAI built into GPT-6 Astra and extended to its "dots" agents — a sign that computer-use agents are becoming a standard capability tier across major AI platforms rather than a single vendor's differentiator, and it arrived the same day as Copilot's new dynamic workflows feature.
