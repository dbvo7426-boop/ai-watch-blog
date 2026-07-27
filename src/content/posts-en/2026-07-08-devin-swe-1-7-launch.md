---
title: Cognition Ships "SWE-1.7," a Near-Frontier Coding Model at a Fraction of the Cost, Into Devin
description: Cognition launched "SWE-1.7," a new coding model for Devin. Built by further reinforcement-learning Kimi K2.7 inside Devin's own agent harness, it reaches near-frontier performance at a much lower cost.
pubDate: 2026-07-08
category: devin
type: news
tags: [Devin, Cognition, SWE-1.7, coding model]
source: https://cognition.com/blog/swe-1-7
draft: false
importance: medium
---

Cognition, maker of Devin, has launched a new coding model called "SWE-1.7." Starting from Moonshot AI's already RL-post-trained "Kimi K2.7 Code," Cognition ran a further, large-scale reinforcement-learning pass inside Devin's real agent harness, reaching near-frontier performance at a fraction of the cost.

## Details

- **Base technique**: Takes the already RL-trained Kimi K2.7 Code and applies an additional large-scale RL pass inside Devin's production agent environment
- **Improvements**: Upgrades across the RL pipeline — better training infrastructure, more stable training, higher-quality data, and new techniques for extended-horizon tasks
- **Benchmarks**: 42.3% on FrontierCode 1.1 Main (vs. 43.0% for GPT-5.5 and 46.5% for Opus 4.8), 81.5% on Terminal-Bench 2.1 (vs. 84.2% and 86.9%), and 77.8% on SWE-Bench Multilingual — beating GPT-5.5's 76.8% while trailing Opus 4.8's 84.4%
- **Availability**: Live in Devin Web, Desktop, and CLI, running on Cerebras at 1000 tokens/sec — delivering near-frontier intelligence at a much lower cost than frontier models

## How to try it

- Available the day of announcement across Devin Web, Desktop, and CLI
- SWE-1.7 is not offered as a standalone API — it's accessible only through Devin's agent environment
