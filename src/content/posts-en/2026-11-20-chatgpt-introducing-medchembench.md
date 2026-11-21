---
title: "OpenAI introduces MedChemBench to test AI on medicinal chemistry reasoning"
description: "A 99-problem benchmark drawn from 117 papers and patents; GPT-6.2 Astra scores 84.5%."
pubDate: 2026-11-20
category: chatgpt
type: news
tags: [OpenAI, benchmark, science, chemistry, GPT-6.2]
source: https://openai.com/index/introducing-medchembench
draft: false
importance: medium
---

OpenAI introduced MedChemBench, a benchmark testing whether models can connect molecular structures with experimental evidence, explain results, compare compounds and predict properties.

- **Size:** 99 problems from 117 papers and patents, covering 761 distinct molecular structures. Models usually get the context at a chosen point in a research program.
- **Graded parts:** molecular structures, scientific reasoning, ranking and selection, and property predictions.
- **Results (xhigh reasoning, percent of available credit):** GPT-6.2 Astra 84.5%, GPT-6 Astra 83.3%, GPT-6.1 Sol 82.0%, GPT-6.1 Terra 75.1%, GPT-5.6 Sol 58.2%.
- **Strengths and weaknesses:** Astra earned 95.4% of structure credit but only about half the credit for selecting compounds and predicting numerical properties.
- **Limits stated by OpenAI:** results do not show whether models can discover new drugs; prior exposure to the published sources cannot be ruled out; each response was a single attempt without tools or feedback.
