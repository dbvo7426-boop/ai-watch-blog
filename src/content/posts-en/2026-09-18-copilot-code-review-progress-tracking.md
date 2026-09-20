---
title: "GitHub Copilot Code Review Now Tracks Open, Resolved, and Newly-Found Issues Across Pushes"
description: "GitHub Copilot's code review overview now sorts findings into Open, Resolved since last review, and Previously missed categories that persist across commits, while auto-resolution learns to respect replies meant to keep an issue open and labels dismissals as Won't Fix or Incorrect."
pubDate: 2026-09-18
category: copilot
type: news
tags: [GitHubCopilot, GitHub, CodeReview, DeveloperTools]
source: https://github.blog/changelog/2026-09-18-copilot-code-review-an-improved-review-experience
draft: false
importance: medium
---

GitHub Copilot's code review overview got a refresh that tracks how a review evolves across multiple pushes, on top of the auto-resolution feature it shipped earlier in September.

## Details

- **Progress tracking across pushes**: the overview comment now sorts findings into three groups — "Open" issues still needing attention, "Resolved since last review" items that have been fixed, and "Previously missed" issues newly surfaced — preserving progress and Copilot's findings as commits are pushed
- **Smarter auto-resolution**: the system now respects user replies intended to keep an issue open instead of auto-closing it, and automatically resolves comments with specific reasoning, labeling them "Won't Fix" or "Incorrect" based on subsequent code changes
- **Smart commit messages for batches**: accepting a batch of Copilot suggestions generates a contextual commit title and optional description automatically, even when the batch includes non-Copilot comments
- **Per-finding titles**: each review comment now includes a short title describing the finding, making it easier to prioritize which to look at first

## What happened next

The changes build directly on the auto-resolution and shell-tool validation features Copilot code review picked up earlier in September, pushing the tool further toward tracking a review's full lifecycle — not just flagging issues once, but following whether they get fixed, dismissed, or missed as a pull request evolves.
