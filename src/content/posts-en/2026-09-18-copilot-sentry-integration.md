---
title: "GitHub Copilot Adds a Sentry Canvas, Taking Errors From Crash Report to Fix Inside the App"
description: "GitHub's week-of-September-14 Copilot roundup is headlined by a new Sentry canvas in the Copilot app that lets developers review crashes and stack traces, investigate causes with Copilot, and prepare a pull request without leaving the app, alongside local Dev Container support and automatic session cleanup after merge."
pubDate: 2026-09-18
category: copilot
type: news
tags: [GitHubCopilot, GitHub, Sentry, DevContainers, DeveloperTools]
source: https://github.blog/changelog/2026-09-18-github-copilot-weekly-releases-september-14
draft: false
importance: medium
---

GitHub's week-of-September-14 Copilot release roundup is headlined by a new Sentry integration that brings crash reports directly into the Copilot app for investigation and fixing.

## Details

- **Sentry canvas**: a new canvas in the Copilot app lets developers go "from crash report to code fix" — reviewing errors and stack traces, investigating root causes with Copilot, validating a fix, and preparing a pull request without leaving the app
- **Local Dev Container support**: agents can now run inside local Dev Containers, rolling out gradually
- **Automatic session cleanup**: sessions can now clean up automatically once their pull request merges, available as an opt-in preview
- **PR creation from Agent Host**: pull requests can now be created directly from Agent Host sessions
- **Also in this roundup**: the three-tier auto model selection (efficiency/balance/intelligence), code review's auto-resolution and shell-tool validation, VS Code Agents window usage metrics, custom property value suggestions, and generally available budget increase requests — all separately detailed in GitHub's own changelog entries this month

## What happened next

The Sentry canvas extends Copilot's reach from writing and reviewing code into production error triage, letting a debugging workflow that previously spanned a monitoring dashboard and an IDE happen in one place — continuing GitHub's pattern of pulling adjacent developer tools directly into the Copilot app rather than just linking out to them.
