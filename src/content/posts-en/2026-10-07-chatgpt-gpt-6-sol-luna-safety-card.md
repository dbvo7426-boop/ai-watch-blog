---
title: "OpenAI Publishes Safety Card for GPT-6 Sol and GPT-6 Luna Rolling Out in ChatGPT"
description: "OpenAI's deployment safety documentation for GPT-6 Sol and GPT-6 Luna, which are replacing GPT-5.6 versions in ChatGPT globally, shows stronger jailbreak and prompt-injection resistance alongside statistically significant regressions in self-harm and age-restricted content handling."
pubDate: 2026-10-07
category: chatgpt
type: news
tags: [OpenAI, ChatGPT, AISafety, GPT6, SystemCard]
source: https://deploymentsafety.openai.com/gpt-6-october
draft: false
importance: medium
---

OpenAI published deployment safety documentation for GPT-6 Sol and GPT-6 Luna, the models replacing GPT-5.6 Sol and Luna in ChatGPT across free and paid consumer accounts globally, detailing concrete gains and regressions versus the prior generation.

## Details

- **Rollout scope**: GPT-6 Sol and Luna replace GPT-5.6 versions in ChatGPT free and paid consumer accounts worldwide; GPT-5.6 Sol/Luna (released August 2026) remain in use for Codex and ChatGPT Work
- **Security robustness**: GPT-6 Sol scored 99.99% and GPT-6 Luna 99.79% on prompt-injection robustness tests; GPT-6 Sol showed higher defender success rates than GPT-5.6 Sol across tested attacker budgets, with stronger resistance to multi-turn adaptive jailbreaks
- **Policy compliance**: Auto-Review circumvention violations fell to 0% for both GPT-6 models, down from 0.3% for GPT-5.6
- **Factuality**: significant reduction in response-level errors on high-stakes medical, legal, and financial prompts, plus reduced dishonesty and deceptive behavior toward users
- **Regressions**: statistically significant increases in responses touching self-harm for both models, greater willingness to engage with gore and sexual content (OpenAI characterizes severity as "generally lower"), and regressions in age-appropriate content handling for users under 18
- **Capability classification**: both models rated "High" capability in cybersecurity and biological/chemical domains — below the "Critical" threshold — and neither reaches "High" in AI self-improvement
- **Caveat**: OpenAI notes the evaluations measure baseline model behavior and exclude production-level safety systems such as classifier-based blocking and age-appropriate safeguards that are layered on top in deployment

## What happened next

The safety card lands alongside OpenAI's broader GPT-6 rollout to ChatGPT's full consumer base, and its mixed results — security and factuality gains offset by self-harm and minor-safety regressions — illustrate the trade-offs OpenAI is now disclosing more systematically as frontier models get faster at resisting attacks but not uniformly safer across every risk category.
