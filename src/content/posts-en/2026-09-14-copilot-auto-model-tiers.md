---
title: "GitHub Copilot Lets Users Pick Efficiency, Balance, or Intelligence Tiers for Auto Model Selection"
description: "GitHub Copilot's auto model selection now offers three configurable tiers — efficiency, balance, and intelligence — that shape which models get picked per prompt, with a consistent 10% discount for paid subscribers regardless of tier."
pubDate: 2026-09-14
category: copilot
type: news
tags: [GitHubCopilot, GitHub, ModelSelection, DeveloperTools]
source: https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection
draft: false
importance: medium
---

GitHub Copilot's auto model selection feature now offers three configurable tiers, letting users tune how it balances cost and quality when picking a model for each prompt.

## Details

- **Efficiency**: prioritizes keeping costs low, suited to fast, straightforward tasks
- **Balance**: weighs cost, quality, and latency together, aimed at everyday work
- **Intelligence**: prioritizes quality, built for complex tasks
- **How selection works**: auto selection evaluates each prompt individually and picks an appropriate model from the same shared pool regardless of tier — even in intelligence mode, simpler requests may still route to smaller, more efficient models; charges are based on the model actually selected, not the tier chosen
- **Pricing**: paid subscribers get a consistent 10% discount on auto-selected model usage across all three tiers
- **Availability**: rolling out now in Visual Studio Code, Copilot CLI, and the GitHub Copilot app

## What happened next

Giving users direct control over the cost/quality tradeoff in auto-selection, rather than a single fixed behavior, lets teams tune Copilot for cheaper, faster iteration on routine work while reserving higher-quality routing for harder tasks — with the discount held constant regardless of which tier is chosen.
