---
title: "OpenAI Decisions API reaches general availability with GPT-6 Luna"
description: "The Decisions API returns fast probability, choice or score answers for bounded questions, up to 10x faster than GPT-6 Luna via the Responses API, priced at $0.10 per million input tokens."
pubDate: 2026-10-22
category: chatgpt
type: news
tags: [OpenAI, API, GPT-6 Luna, Decisions API, GPT-Live]
source: https://openai.com/index/decisions-api
draft: false
importance: medium
---

OpenAI made the Decisions API generally available. Built on GPT-6 Luna, it targets questions with bounded answers, such as classification, routing or choosing the next action, and returns results from text, images or structured inputs up to 10x faster than GPT-6 Luna through the Responses API.

## Details

- **How it works:** Developers define a question and its allowed answers, then supply text, images or native JSON context.
- **Answer types:** predicate (probability 0 to 1 that a condition is true), choice (one of supplied options, with probabilities and confidence) and score (probability-weighted average of rubric level indices).
- **New since public beta:** native GPT-Live integration for voice, prompt caching, inference residency in the US and EU, native JSON inputs, images in question instructions, and up to 400 questions per request (double the previous limit). Latency work includes more capacity in several Asian regions.
- **Pricing:** $0.10 per million input tokens, $0.01 per million cached input tokens, and no output-token charges. Cached writes for 30 minutes and 12 hours are priced separately in the pricing guide.
- **Data controls:** Regional processing in the US and EU; Zero Data Retention for eligible customers.
- **Early use:** OpenAI teams use it for transaction categorization and classifying press coverage; customers use it for attributing AI costs and interactive language learning.

## What happened next

OpenAI suggests starting with one recurring decision and testing it in the Decisions Playground. Because only input tokens are billed, cost depends on context size, so caching matters for repeated context. The 10x speed figure is OpenAI's own comparison and independent benchmarks were not provided.
