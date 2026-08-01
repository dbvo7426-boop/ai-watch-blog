---
title: DeepSeek Releases Updated "DeepSeek-V4-Flash-0731," Beating V4-Pro Preview on Agentic Benchmarks
description: DeepSeek released "DeepSeek-V4-Flash-0731," a re-trained update to DeepSeek-V4-Flash. The architecture is unchanged, but agentic benchmark scores improved, and pricing stays the same.
pubDate: 2026-07-31
category: deepseek
type: news
tags: [DeepSeek, agents, coding]
source: https://api-docs.deepseek.com/updates/
draft: false
importance: medium
---

DeepSeek released "DeepSeek-V4-Flash-0731," an updated version of its coding/agent-focused model DeepSeek-V4-Flash. The model's architecture and size are unchanged from the preview release — it was only re-post-trained — yet agentic benchmark scores improved.

## Details

- **Model specs**: 284 billion total parameters / 13 billion active parameters, unchanged from "DeepSeek-V4-Flash-Preview." This update is a re-post-trained revision only
- **Benchmarks**: Scored 82.7 on Terminal-Bench 2.1, 54.2 on NL2Repo, 76.7 on CyberGym, and 54.4 on DeepSWE — all ahead of the V4-Pro preview
- **API support**: Natively supports the Responses API format and works with Codex
- **Context length**: Roughly 1,048,576 tokens (1M), with a maximum output of 384,000 tokens
- **Pricing**: $0.14 per million input tokens and $0.28 per million output tokens, unchanged from before

## How to try it

- The API model name remains `deepseek-v4-flash` — no changes needed on the caller's side, as the 0731 version is now served automatically
- The legacy deepseek-chat and deepseek-reasoner models were retired on July 24, 2026, so anyone still on them needs to migrate to the V4 line
- There has been no official GA announcement for V4-Pro itself yet — this update covers V4-Flash only
