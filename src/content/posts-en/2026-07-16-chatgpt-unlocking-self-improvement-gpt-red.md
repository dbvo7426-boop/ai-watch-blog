---
title: "OpenAI Unveils Automated Red-Teaming AI 'GPT-Red,' Strengthening Resistance to Prompt Attacks Through Self-Play"
description: "OpenAI has unveiled 'GPT-Red,' an internal-only red-teaming AI that uses self-play to automatically discover vulnerabilities such as prompt injection. Built into the training of the latest model, GPT-5.6 Sol, it has significantly reduced attack success rates."
pubDate: 2026-07-15
category: chatgpt
type: news
tags: [ChatGPT, Safety, Red Teaming, GPT-Red]
source: https://openai.com/index/unlocking-self-improvement-gpt-red
draft: false
importance: medium
---

OpenAI has unveiled "GPT-Red," an internal-only red-teaming AI that uses self-play to automatically discover and fix model vulnerabilities. By repeating attacks that mimic the work of human red-teamers at scale and automatically, and feeding the results directly into the training process for production models, it has significantly improved resistance to prompt injection.

## Details

- **Training through self-play**: GPT-Red is trained alongside a diverse pool of defender LLMs simultaneously. GPT-Red is rewarded when an attack succeeds, and defenders are rewarded when they successfully block one, driving both sides to improve competitively
- **Automating human-like attack processes**: Like a human red-teamer, GPT-Red sends prompts, observes the GPT model's responses, and refines its next move accordingly — repeating this cycle at scale, automatically
- **Direct feedback into production models**: Attack patterns discovered by GPT-Red are fed directly into the training process for defensive models, continuously strengthening the robustness of models that are actually shipped
- **Concrete results**: The latest model, "GPT-5.6 Sol," saw failures drop to one-sixth of the previous model's rate on the hardest direct prompt injection benchmark, with an attack success rate as low as 0.05%
- **GPT-Red itself remains private**: GPT-Red is an internal-only tool, separate from any distributed model, and isn't available for direct use by end users or developers

## How to try it

GPT-Red itself is an internal, non-public tool with no plans for public release or external availability. However, its results are already reflected in models like GPT-5.6 Sol, currently available through ChatGPT and the API — you can experience the improved resistance to prompt injection in everyday use. Technical details are said to be forthcoming in a preprint paper.
