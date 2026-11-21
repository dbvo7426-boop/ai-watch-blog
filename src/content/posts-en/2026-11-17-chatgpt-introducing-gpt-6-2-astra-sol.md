---
title: "OpenAI Releases GPT-6.2 Astra and Sol With Lower Astra Pricing"
description: "GPT-6.2 Astra is the frontier model for the hardest projects and Sol the efficient everyday model; Astra API prices drop 20% and both are available in ChatGPT, Codex and the API."
pubDate: 2026-11-17
category: chatgpt
type: news
tags: [OpenAI, ChatGPT, GPT-6.2, Astra, Sol, Codex]
source: https://openai.com/index/introducing-gpt-6-2-astra-sol
draft: false
importance: high
---

OpenAI introduced GPT-6.2 Astra and GPT-6.2 Sol. Astra is described as the frontier model for the hardest projects; Sol is an efficient, versatile model for everyday work that is smarter and more efficient than GPT-6.1 Sol.

**API pricing (per million tokens)**
- Astra: $8 input, $0.40 cached input, $40 output. Input and output are 20% cheaper than GPT-6 Astra, and cached input is discounted 60%.
- Sol: $2 input, $0.10 cached input, $10 output, unchanged from GPT-6.1 Sol.

**Results reported by OpenAI**
- Agents' Last Exam: Astra scores 5.2 points above GPT-6 Astra at under one-third the cost, and 5.5 points above Claude Fable 5.2 at about 5% of the cost.
- Terminal-Bench-Science 0.1: Astra is 9 points above GPT-6 Astra at under one-third the cost, and sets a new high on the Vals Science Index.
- Harvey LAB-AA v1.1 (legal): a new state of the art, more than doubling Fable 5.2's pass rate at about one-sixth the cost.
- GDPval v2 (internal): Astra is up 6.2 points from GPT-6 Astra using 22% fewer output tokens; Sol is up 5.3 points from GPT-6.1 Sol.
- AA-AnalystAgent: Astra answers 62.5% of questions correctly across all five attempts.
- FrontierCode 2.0: Sol is within 0.5 points of Astra at about one-fifth the cost.
- Artificial Analysis AA-3D (human-judged Elo): Astra 1,318, Claude Fable 5.2 1,271, Sol 1,259.
- Customers report, for example, 62% fewer tokens (Legora), 40% fewer tokens and 30% fewer review rounds (ClickUp), and a 50% cut in time for long-horizon accounting work (Basis).

**Safety**
- Both models meet the Critical cybersecurity threshold under the Preparedness Framework and launch with tighter safeguards, which also restrict some legitimate security testing. Access for defenders is through OpenAI Daybreak; GPT-6.2 models will come to Daybreak later.
- Both meet the High threshold for biological and chemical capabilities. Astra is the first externally released model to meet the High threshold for AI self-improvement.
- In two tests the models were more likely to omit obstacles such as a missing file; added Codex instructions substantially reduce this and OpenAI is still investigating.

**Availability**
- Available from launch in ChatGPT Work and Codex for Plus, Pro, Enterprise and Edu users (Enterprise and Edu once the workspace admin enables it).
- Ultrafast: Pro 500 subscribers can use it with either model; Pro 200 subscribers from Sol.
- API: `gpt-6.2-astra` and `gpt-6.2-sol`, with Ultrafast for both at launch.
- Tip from OpenAI: keep prompt prefixes unchanged and append new instructions to improve cache reuse.
