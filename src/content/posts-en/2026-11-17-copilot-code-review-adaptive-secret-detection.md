---
title: "Copilot code review adds adaptive effort, secret detection and review outcome insights"
description: "Three public-preview features, a Repository insights page for review outcomes, and Azure DevOps code review now generally available."
pubDate: 2026-11-17
category: copilot
type: news
tags: [GitHub Copilot, code review, secret detection, Azure DevOps]
source: https://github.blog/changelog/2026-11-17-copilot-code-review-adaptive-effort-secret-detection-and-more
draft: false
importance: medium
---

GitHub announced several Copilot code review updates on November 17, 2026. Adaptive effort, cross-repository context and secret detection are in public preview on Copilot Pro, Pro+, Max, Business and Enterprise, and are subject to change.

- **Adaptive review effort:** Copilot judges each pull request complexity and risk, then reviews at Lite, Balanced or Max and shows which level it chose. Choose Adaptive for one PR from the Reviewers bar, or make it the default in personal, repository, organization or enterprise settings. Balanced remains the default, and Adaptive never exceeds the maximum effort level set for the enterprise, organization or repository.
- **Cross-repository context:** during a review, Copilot reads related repositories to find code that depends on your change, plus documentation, custom instructions and skills there. Public repositories only.
- **Secret detection:** flags exposed secrets in review comments before merging. Known formats (500+ secret types from 150+ secret scanning partners) are found deterministically, for example with regex; unformatted secrets are detected with LLMs and a purpose-built GitHub secret model. Enable it under repository or organization settings > Copilot > Code review.
- **Review outcomes in Repository insights:** a new page, first in a repository Insights tab, shows Copilot review results: comments addressed, high-severity comments addressed, PRs with no later human change request, and merged PRs without Copilot review. It also offers an addressed rate with trends and breakdowns, and comment categories. The same metrics appear in the enterprise and organization repos-1-day reports of the Copilot usage metrics API. Anyone with read access can view the page; the API reports need the View Copilot Metrics permission, and the Copilot usage metrics policy must be enabled.
- **Azure DevOps (Azure Repos): now generally available**, up from public preview. Admins enable it at organization, project or repository level; a branch policy can request reviews automatically, or users can request one from the Reviewers list. Supports a default Lite or Balanced effort, custom instructions, agent skills, applying and committing suggestions, and audit log events. Usage is billed in GitHub AI credits to the Azure subscription linked to the Azure DevOps organization.
