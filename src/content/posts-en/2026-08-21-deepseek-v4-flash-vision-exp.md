---
title: "DeepSeek Ships Its First Vision Model: V4-Flash-Vision-Exp"
description: "DeepSeek added an experimental multimodal variant of V4-Flash to its API, matching the text model's agent and reasoning scores while adding a major leap in visual understanding, closing in on Opus-4.8 on multimodal agent tasks."
pubDate: 2026-08-21
category: deepseek
type: news
tags: [DeepSeek, V4-Flash, vision, multimodal, API]
source: https://api-docs.deepseek.com/updates/
draft: false
importance: medium
---

DeepSeek quietly added its first vision-capable model to the API on August 21, 2026: an experimental release called DeepSeek-V4-Flash-Vision-Exp, accessible via `model='deepseek-v4-flash-vision-exp'`. It's a multimodal variant of the V4-Flash line that keeps the text model's agent and reasoning performance intact while adding real image-understanding ability.

## Details

- **Text performance holds steady**: on pure text tasks, V4-Flash-Vision-Exp scores on par with the standard DeepSeek-V4-Flash across agent, reasoning, and knowledge benchmarks — Terminal Bench 2.1 (83.9), NL2Repo (57.7), DeepSWE (59.3), and DSBench-Hard (63.6)
- **New visual benchmarks**: the model posts 25.7 on AutomationBench (Public), 36.5 on ApexBench (Pass@1), 27.3 on Agents' Last Exam, 64.3 on Chartography, and 35.0 on ZeroBench (Pass@5)
- **Big jump over the text-only model**: DeepSeek describes the visual-understanding gain as a "significant leap" over standard V4-Flash, bringing multimodal agent capabilities closer to Anthropic's Opus-4.8
- **Experimental status**: the model is explicitly labeled experimental, suggesting further iteration before a stable, non-"exp" release
- **API-only for now**: available through the DeepSeek API; no changes were announced yet for the consumer app or web interface

## What happened next

DeepSeek has not announced pricing specific to the vision variant separately from the existing V4-Flash tiers, nor a firm timeline for graduating it out of experimental status. Developers can start testing multimodal agent workflows — chart reading, screenshot-based automation, and visual QA — immediately via the API using DeepSeek's vision guide documentation.
