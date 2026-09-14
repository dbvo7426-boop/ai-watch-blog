---
title: "Genspark Launches Gen-1 Slides, Its First Custom-Trained Model for Presentations"
description: "Genspark introduced Gen-1 Slides on September 10, 2026, a post-trained model built specifically for presentation generation that it says matches Claude Opus 5 quality at roughly 1/17th the input-token price."
pubDate: 2026-09-10
category: genspark
type: news
tags: [Genspark, Gen-1 Slides, AI Slides, MiniMax M3, Presentations]
source: https://www.genspark.ai/blog/gen-1-slides
draft: false
importance: medium
---

Genspark introduced Gen-1 Slides on September 10, 2026, describing it as "the first in a family of post-trained models built for the knowledge worker" — a model trained specifically to turn a single request into a finished presentation, rather than relying on a general-purpose frontier model.

## Details

- **Training**: built by post-training the open-weight MiniMax M3 model jointly with Fireworks AI, using reinforcement learning on roughly 2,000 internally constructed tasks, completed in one week on 96 NVIDIA B300 GPUs
- **RL techniques**: online grader evolution to counter reward hacking, on-policy self-distillation from grader comments, an adversarial discriminator trained to reduce "AI slop" appearance, curriculum learning that prioritizes visual design before layout fixes, and GSPO (sequence-level importance ratios) in place of token-level optimization
- **Benchmark results**: evaluated against Claude Opus 5 across three grading systems (an internal Claude Fable 5-based grader, the public PPTEval benchmark, and UniPPTEval) and ranked first in 8 of 9 evaluation combinations, averaging rank 1.11 versus Opus 5's 2.56
- **Cost**: $0.30 per million input tokens versus Opus 5's $5, or $0.44 per finished deck versus $4.16 — Genspark says a team producing 1,000 decks a month would see costs drop from roughly $4,200 to $440
- **Real-world usage**: across 1.57 million production tasks, Gen-1 Slides scored 4.25 stars versus Opus 5's 4.23, with a lower fabrication rate (13.3% versus 17.7%)
- **Acknowledged limitations**: produces denser pages with smaller type than competitors, trails Opus 5 on raw content and task completion, and is narrowly optimized for slides rather than general-purpose work like spreadsheets or research
- **Availability**: live now as the default model in Genspark AI Slides' Standard mode and via the Genspark CLI, with early API access and an OpenRouter listing in progress; enterprise workspace support includes data privacy protections

## What happened next

Genspark positioned Gen-1 Slides as the start of a broader family of task-specific post-trained models for knowledge work, rather than a one-off release, and emphasized transparency about its MiniMax M3 base and training methodology. The launch follows Genspark's push earlier in 2026 to bundle its various tools — Super Agent, Design, AgentBase, GenMail, and GenTeam — into one AI workspace, and signals the company betting that small, purpose-built models can undercut general frontier models on cost for specific high-volume tasks like slide generation.
