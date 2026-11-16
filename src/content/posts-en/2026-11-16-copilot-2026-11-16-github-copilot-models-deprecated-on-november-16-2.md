---
title: "GitHub Copilot deprecates Claude Opus 4.8, Claude Opus 5 and GPT-5.6 Terra"
description: "Three models were deprecated across most Copilot experiences on November 16, 2026, with suggested replacements."
pubDate: 2026-11-16
category: copilot
type: news
tags: [GitHub Copilot, deprecation, models]
source: https://github.blog/changelog/2026-11-16-github-copilot-models-deprecated-on-november-16-2026
draft: false
importance: medium
---

GitHub deprecated three models across most GitHub Copilot experiences as of November 16, 2026, including Copilot Chat, inline edits, ask and agent modes, and code completions. The deprecations were announced on October 15, 2026.

| Model | Suggested replacement | Notes |
|---|---|---|
| Claude Opus 4.8 | Claude Opus 5.5 | Still available to individual subscribers on annual plans |
| Claude Opus 5 | Claude Opus 5.5 | Removed from the model picker but still available for runtime refusal fallback through existing authorized access |
| GPT-5.6 Terra | GPT-6.1 Sol or GPT-6 Luna | None listed |

- Existing enterprise model policies continue to apply.
- Copilot Enterprise and Business customers get the suggested alternatives automatically under default model enablement, unless an administrator turned off the global default or disabled the model. If the global default is off, admins can enable the alternatives through model policies in Copilot settings; once enabled they appear in the Copilot Chat model selector.
- GitHub says no action is required to remove the deprecated models, and users should update workflows and integrations to supported models.
