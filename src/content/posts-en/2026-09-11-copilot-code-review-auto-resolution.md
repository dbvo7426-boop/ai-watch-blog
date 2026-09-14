---
title: "GitHub Copilot Code Review Now Auto-Resolves Addressed Comments and Writes Smarter Commit Messages"
description: "GitHub Copilot's code review now closes its own comments automatically once addressed, uses shell tools to validate fixes via builds and tests, runs an ensemble of agents at the Lite effort level for 47% more addressed high-severity findings, and generates contextual commit messages for applied fixes."
pubDate: 2026-09-11
category: copilot
type: news
tags: [GitHubCopilot, GitHub, CodeReview, DeveloperTools]
source: https://github.blog/changelog/2026-09-11-auto-resolution-and-analysis-updates-in-copilot-code-review
draft: false
importance: medium
---

GitHub Copilot's code review feature gained automatic comment resolution and several analysis improvements aimed at surfacing higher-quality findings.

## Details

- **Auto-resolution**: Copilot now closes its own review comments automatically once a subsequent commit addresses them, so only genuinely outstanding feedback stays visible instead of requiring manual thread management
- **Shell tools integration**: Copilot now has access to the full suite of shell tools from the Copilot SDK, letting it validate code through build commands, test runs, and scripts — resulting in more high-severity findings and fewer minor, low-value ones
- **Ensemble review at Lite effort**: the Lite effort level now runs multiple agents collaborating on a single review; GitHub says this increased the average number of addressed comments per review by 47% for high-severity findings while cutting cost by 8%
- **Smart commit messages**: applying one of Copilot's suggested fixes now generates a commit message reflecting the actual change made, replacing generic auto-filled templates

## What happened next

The changes push Copilot's code review toward behaving more like an attentive human reviewer — tracking what's actually still open, validating claims by running real build and test commands rather than just reading code, and writing commit messages that describe what changed — while the ensemble approach at the cheaper Lite tier suggests GitHub is finding ways to improve review quality without proportionally raising cost.
