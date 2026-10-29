---
title: "GitHub Agentic Workflows is now generally available"
description: "The open source GitHub Next project that runs coding agents inside GitHub Actions from Markdown definitions reaches general availability, with ARC support, model routing, and stronger agent isolation."
pubDate: 2026-10-28
category: copilot
type: news
tags: [GitHub Agentic Workflows, GitHub Actions, Copilot, GitHub Universe]
source: https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available
draft: false
importance: high
---

GitHub Agentic Workflows, an open source project from GitHub Next, is generally available. It lets you automate reasoning-based tasks such as issue triage, CI failure analysis, documentation updates, and test writing by running coding agents inside GitHub Actions.

## Details

- **How it works:** You write automations in natural-language Markdown files, which compile to standard Actions YAML. They reuse your existing runner groups and policy constraints. Each workflow can be powered by GitHub Copilot or a coding agent you bring.
- **Safeguards:** Agents respect integrity-filter rules when reading GitHub content, run with read-only permissions by default, and execute in a sandboxed container behind the Agent Workflow Firewall. Outputs are validated through safe outputs, and a threat detection job scans proposed changes before they are applied.
- **New since preview:** Self-hosted ARC runners with Docker-in-Docker; `gh aw forecast` is no longer experimental and includes threat-detection credits and monthly ranges; refreshed model inventory, per-workflow model provider choice, and new templates via `gh aw add-wizard`; a model router optimized for task type and difficulty; Cloud Hypervisor or NVX micro-VM isolation and enclaves to prevent cross-repository data leaks.
- **Customer claim:** Accenture's Ben Alton says one lead saved an estimated 29 hours a week, velocity more than doubled, AI authors 91% of the team's commits, and production errors fell from about 11,000 a day to under 1,000. This is a vendor-published testimonial, not independent measurement.
- **Availability:** github.com on GitHub Free, Team, and Enterprise. Using the default Copilot CLI engine requires a Copilot license.

## What happened next

GA signals that GitHub sees Actions as the execution layer for background agents, with Markdown as the authoring format and compile-to-YAML keeping governance on familiar ground. The emphasis on read-only defaults, firewalling, and threat detection reflects the main risk of agents acting on untrusted repository content. Cost control is still a concern; the forecast command suggests AI credit spend is meant to be planned. Pricing beyond the Copilot license requirement is undisclosed in the announcement.
