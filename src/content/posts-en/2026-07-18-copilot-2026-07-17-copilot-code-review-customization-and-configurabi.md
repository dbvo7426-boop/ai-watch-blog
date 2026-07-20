---
title: "Copilot Code Review Adds Customization and Configuration Options, Firewall Now Enabled by Default"
description: "GitHub Copilot Code Review has gained four configuration improvements: reading custom instructions from the PR branch, custom setup steps, and a network firewall enabled by default."
pubDate: 2026-07-17
category: copilot
type: news
tags: [Copilot, Code Review, GitHub]
source: https://github.blog/changelog/2026-07-17-copilot-code-review-customization-and-configurability-improvements
draft: false
importance: low
---

GitHub has added four configuration improvements to its AI code review feature, "Copilot Code Review." Custom instructions are now read from the pre-merge branch, repositories can define their own setup steps, and a firewall restricting network access is now enabled by default — giving teams finer-grained control.

## Details

- **Easier to validate custom instructions**: Custom instruction files such as `copilot-instructions.md`, `*.instructions.md`, `REVIEW.md`, `GEMINI.md`, and `CLAUDE.md` are now read from the pull request's head branch, so you can test the effect of your instructions before merging
- **Custom setup steps**: Adding a `.github/workflows/copilot-code-review.yml` file lets you define dependency installation and tool configuration on a per-repository basis
- **Firewall enabled by default**: A firewall restricting network access during review runs is now enabled by default across all repositories (not supported on self-hosted runners)
- **Separated runner settings**: Runner settings for Copilot Code Review and Copilot Cloud Agent have been separated, so each can now be controlled independently in organization settings

## How to try it

- Existing Copilot Code Review users can start using the new configuration options right away. To use custom setup steps, add a `.github/workflows/copilot-code-review.yml` file
- See GitHub's official documentation for detailed configuration instructions
