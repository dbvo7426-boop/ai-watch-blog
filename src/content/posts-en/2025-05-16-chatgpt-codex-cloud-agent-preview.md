---
title: OpenAI previews "Codex," a cloud-based software engineering agent, as a research preview
description: OpenAI announced "Codex," a cloud-based coding agent running inside ChatGPT, as a research preview. Powered by the code-optimized model "codex-1," it can handle multiple tasks in parallel within cloud sandboxes.
pubDate: 2025-05-16
category: chatgpt
type: news
tags: [Codex, OpenAI, codex-1, ChatGPT, "AI History"]
source: https://openai.com/index/introducing-codex/
draft: false
importance: high
---

On May 16, 2025, OpenAI announced "Codex," a cloud-based software engineering agent running inside ChatGPT, as a research preview. Following on from the local-focused "Codex CLI" released the previous month, it is powered by a new model optimized for code generation, "codex-1," and its defining feature is the ability to handle multiple coding tasks simultaneously in parallel cloud sandboxes. With this, "Codex" transformed from being simply a model name into a full-fledged agent product capable of adding features and proposing pull requests.

## Details

- **Overview**: An agent that loads a repository into an isolated cloud sandbox and works in parallel on tasks such as adding features, answering questions about the code, fixing bugs, and proposing pull requests
- **The "codex-1" model powering it**: A dedicated model built by optimizing OpenAI's reasoning model "o3" for software engineering. Trained via reinforcement learning on real-world coding tasks so its output more closely matches human coding style and PR preferences
- **Transparency of work**: Carries out tasks while presenting supporting evidence such as terminal logs and test results (taking roughly 1 to 30 minutes depending on task complexity)
- **Availability**: Rolled out on the day of announcement to ChatGPT Pro, Business, and Enterprise users. Plus and Edu access was listed as "coming soon," with Plus access actually beginning on June 3, 2025
- **Pricing**: The lightweight API version, "codex-mini-latest," costs $1.50 per million input tokens and $6 per million output tokens (75% discount with prompt caching). Within ChatGPT plans, a generous free allowance was initially offered, later shifting to rate-limited usage and additional paid options

## What happened next

This cloud-based Codex expanded rapidly over the following months. In August 2025, an IDE extension and the dedicated model "GPT-5-Codex" were added, creating "a unified experience spanning local and cloud," and at DevDay that October it moved to general availability (GA), complete with Slack integration and an SDK. What started as an experimental research preview grew rapidly into a core product of OpenAI's developer-facing strategy.
