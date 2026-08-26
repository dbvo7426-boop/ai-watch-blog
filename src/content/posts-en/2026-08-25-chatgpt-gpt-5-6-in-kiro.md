---
title: "GPT-5.6 Comes to AWS's Kiro, Cutting Coding-Task Costs by ~82% in Testing"
description: "OpenAI and AWS have brought the GPT-5.6 model family to Kiro, AWS's spec-driven AI coding agent, with OpenAI citing an 82% cost reduction on Terminal-Bench 2.1 tasks."
pubDate: 2026-08-24
category: chatgpt
type: news
tags: [ChatGPT, OpenAI, GPT-5.6, Kiro, AWS, Coding]
source: https://openai.com/index/gpt-5-6-in-kiro
draft: false
importance: medium
---

OpenAI's GPT-5.6 model family — Sol, Terra, and Luna — is now available inside Kiro, AWS's AI coding agent, following a joint optimization effort between OpenAI and AWS. OpenAI says the integration delivers roughly an 82% cost reduction on Terminal-Bench 2.1 coding tasks compared to prior setups.

## Details

- **What Kiro is**: Kiro is AWS's software development agent, built around a spec-driven workflow that converts high-level product intent into structured requirements, technical designs, and executable implementation tasks rather than jumping straight to code
- **The partnership**: OpenAI and AWS worked together to optimize both the Kiro environment and the GPT-5.6 models running inside it, aiming to help developers get more usable output per dollar and per prompt across the software development lifecycle
- **What the integration adds**: With GPT-5.6 in Kiro, developers can turn product ideas into structured implementation plans, run multi-step coding tasks with more consistent results, follow a spec-driven development process end to end, pull in codebase context and team coding standards, review model output at defined checkpoints before it ships, and validate correctness using property-based testing
- **Performance claim**: On Terminal-Bench 2.1, OpenAI reports that GPT-5.6 Terra completed successful tasks in Kiro at roughly an 82% cost reduction compared to the comparison setup, attributing part of the gain to the spec-driven methodology reducing implementation errors and rework
- **Model options**: The full GPT-5.6 family — Sol, Terra, and Luna — is available inside Kiro, giving developers the same speed/cost/capability tradeoffs available elsewhere in OpenAI's lineup
- **Pricing and availability**: Neither OpenAI's post nor Kiro's own materials specify Kiro-specific pricing for the GPT-5.6 integration; the models are described as "now available" without a separate rollout date

## How to try it

- Developers already using Kiro can select GPT-5.6 (Sol, Terra, or Luna) as the underlying model for spec-driven development tasks
- Teams evaluating coding-agent costs may want to benchmark Terra specifically against their current setup, given OpenAI's cited Terminal-Bench 2.1 cost reduction
- Full details are available at https://openai.com/index/gpt-5-6-in-kiro
