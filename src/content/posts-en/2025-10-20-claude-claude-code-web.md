---
title: "\"Claude Code on the web\" arrives, managing multiple tasks in parallel from a browser"
description: Anthropic released "Claude Code on the web" as a research preview, letting users delegate coding tasks to Claude Code via a browser. It can run tasks across multiple repositories in parallel within a cloud sandbox environment.
pubDate: 2025-10-20
category: claude
type: news
tags: [Claude Code, Anthropic, Cloud, "AI History"]
source: https://claude.com/blog/claude-code-on-the-web
draft: false
importance: medium
---

On October 20, 2025, Anthropic released "Claude Code on the web" as a research preview, letting users delegate coding tasks to Claude Code straight from a browser. Without opening a local terminal, users can run multiple coding tasks in parallel on Anthropic's cloud infrastructure and manage them while checking progress.

## Details

- **Parallel task execution**: Multiple coding sessions spanning different repositories can be launched and managed simultaneously from a single screen
- **Real-time progress tracking**: Users can check on Claude's work at any time and give course-correcting instructions as needed
- **Automatic pull request creation**: Automatically generates PRs with a summary of the changes, connecting directly into the review process
- **Mobile support**: An early preview on the iOS app was also offered at the same time
- **Intended use cases**: Bug fixes, routine maintenance, and backend changes involving test-driven development, among others
- **Sandbox environment**: Provides an isolated sandbox for each task, restricting network and filesystem access. Interaction with Git goes through a secure proxy that can only access authorized repositories
- **Availability**: Initially available to Pro and Max plan users. Users can get started by connecting a GitHub repository at claude.com/code, with usage sharing rate limits with other Claude Code usage

## What happened next

On November 12, 2025, availability expanded to premium-seat users on Team and Enterprise plans as well. This direction toward agentic coding untethered from a local machine went on to become the foundation for the background agent features that followed.
