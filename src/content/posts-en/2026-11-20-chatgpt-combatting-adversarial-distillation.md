---
title: "OpenAI details its layered defenses against adversarial distillation"
description: "OpenAI reports sharply lower reasoning-extraction success on GPT-6.2 Astra and describes campaign-level enforcement."
pubDate: 2026-11-20
category: chatgpt
type: news
tags: [OpenAI, safety, distillation, API, security]
source: https://openai.com/index/combatting-adversarial-distillation
draft: false
importance: high
---

OpenAI described how it detects and disrupts adversarial distillation, where an actor uses a frontier model's outputs without authorization to train a model lacking its safeguards, with emphasis on protecting the model's chain-of-thought (protected reasoning).

- **Safeguard results:** in an internal adaptive red-teaming evaluation, average attack success for recovering protected reasoning from an earlier prompt fell from 54.0% (GPT-6 Astra, original safeguards) to 0.2% (GPT-6.2 Astra, updated safeguards). In a black-box evaluation across six attacker models, recovery from the current request fell from 22.9% to 0.9%. Some improvements are also being applied to GPT-6 Astra.
- **Cyber distillation study:** students trained on exact reasoning traces generally outperformed those trained on summaries after supervised fine-tuning; after a light RL round the exact-trace student still scored higher at the largest inference budget on ExploitBench and SEC-bench Pro.
- **Request-level defenses:** adversarial training to refuse disclosing protected reasoning, plus input and output classifiers covering assistant messages and tool-call arguments.
- **API protections:** GPT-6.2 Astra and Sol tie protected reasoning to the conversation history that produced it; if an earlier message is rewritten, later reasoning is dropped. Older model families cannot read it. A pathway that could expose another user's encrypted reasoning was closed.
- **Campaign enforcement:** multiple unauthorized campaigns seen in 2026, with weekly enforcement from thousands to tens of thousands of accounts. OpenAI attributed a core part of a September campaign to individuals associated with Moonshot AI, and shares indicators with other providers.
- It recommends other developers protect reasoning across the whole interaction, keep successful attacks as regression tests, combine request- and campaign-level measures, and coordinate with partners.
