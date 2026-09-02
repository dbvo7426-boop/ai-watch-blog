---
title: "xAI Publishes Independent Biosecurity Evaluation Showing Grok 4.6 Leads on Refusal Balance"
description: "xAI published an independent LatchBio evaluation of Grok 4.6 on biosecurity benchmarks, finding it was the only tested model to score above 50% on both refusing disguised hazardous requests and completing routine biological work."
pubDate: 2026-09-01
category: grok
type: news
tags: [Grok, xAI, Biosecurity, AI Safety, Grok 4.6]
source: https://x.ai/news/biosafety-at-the-frontier
draft: false
importance: medium
---

xAI published the results of an independent biosecurity evaluation of Grok 4.6 on September 1, 2026, conducted by LatchBio using two new benchmarks that test whether models can refuse disguised hazardous requests while still completing legitimate biological research work.

## Details

- **BioSecBench-Refusal**: Pairs 46 red-team tasks — where biosecurity hazards are concealed in scientific data, mislabeled files, or obfuscated content — against routine biological work; Grok 4.6 scored a trial-weighted harmonic mean of 62.1%, refusing 59.2% of the disguised hazardous tasks while still completing 64.8% of routine work
- **Best balance among models tested**: LatchBio's writeup states Grok 4.6 "was the only model tested that scored above 50% on both measures," meaning it avoided both over-refusing legitimate research and under-refusing disguised hazards
- **BioSecBench-Surveillance**: A separate benchmark assessing pathogen genomic surveillance workflows requiring file inspection, tool use, and scientific judgment; Grok 4.6 averaged 53.5% success, trailing Opus 5 but ahead of GPT-5.6 Sol
- **Safeguard architecture**: xAI describes layered defenses combining refusal training, inference-time filtering, behavioral controls, and post-deployment monitoring for adversarial usage patterns
- **Trajectory**: xAI reports material gains in biological-capability safety performance over the prior Grok 4.5 and 4.3 versions
- **Transparency**: Full methodology and per-model scores were published externally at benchmarks.bio, alongside the Grok 4.6 model card and xAI's Frontier Artificial Intelligence Framework

## What happened next

The evaluation gives xAI an independently verified data point to cite as it continues expanding Grok 4.6's distribution across products like Grok Bot, Vertex AI, and GitHub Copilot. By publishing a third-party assessment rather than only self-reported safety claims, xAI is aiming to bolster confidence that Grok's growing biological-domain capability is paired with commensurate safeguards as scrutiny of frontier-model biosecurity risk continues to intensify industry-wide.
