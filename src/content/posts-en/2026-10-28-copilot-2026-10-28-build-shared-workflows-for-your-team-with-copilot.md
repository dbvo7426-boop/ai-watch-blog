---
title: "GitHub Copilot Automations can now be shared across a team"
description: "Shared Copilot Automations are rolling out so teams can build and maintain AI-powered workflows together. They belong to the repository, are billed to its owner, and act as Copilot rather than as an individual."
pubDate: 2026-10-28
category: copilot
type: news
tags: [GitHub Copilot, Automations, Copilot cloud agent, GitHub Universe]
source: https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations
draft: false
importance: medium
---

GitHub is rolling out shared Copilot Automations, which let teams build and maintain AI-powered workflows together. Until now, automations were personal: only the creator could see and edit them, and they ran with that person's identity and AI credits.

## Details

- **What automations are:** Combinations of prompts, triggers, and tools. Copilot runs autonomously in the cloud, using only the tools you have allowed. Examples from GitHub: reproduce bugs when an issue is opened, capture screenshots when a pull request is marked ready, investigate production incidents detected by a monitoring tool.
- **Visibility:** Anyone with read access to the repository can see a shared automation; anyone with write access can edit it.
- **Billing:** AI credits are billed to the organization or user that owns the repository, not to the creator.
- **Attribution:** Actions on GitHub are attributed to Copilot, not to any one user.
- **Durability:** Shared automations belong to the repository and keep running if their creator leaves. Change history shows how tools, triggers, and prompt evolved.
- **Admin requirement:** For organization-owned repositories, an administrator must enable the policy Allow use of Copilot cloud agent billed to the organization.
- **How to create:** On github.com, in the GitHub Copilot app, or in Visual Studio Code, choose Shared under Type. The type cannot be changed after creation.
- **Availability:** Rolling out to Copilot Pro, Pro+, Max, Business, and Enterprise; availability may vary during rollout. You can create automations in any repository where you have write access.

## What happened next

The change moves automations from a personal convenience to team infrastructure. Decoupling identity and billing from the creator removes two common blockers for team use: workflows that break when someone leaves, and credits silently drawn from one person. The cost is that spending now lands on the repository owner, so administrators will want to watch the billing policy. GitHub has not disclosed per-automation pricing or usage limits in this announcement.
