---
title: "OpenAI Models Optimize Jalapeno Chip Circuits and RISC-V Core Designs"
description: "Model-proposed changes cut standard-cell area by about 10-13% in Jalapeno, and AMD reports up to 14% PPA gains; OpenAI plans GPT-Synopsys with Synopsys."
pubDate: 2026-11-18
category: chatgpt
type: news
tags: [OpenAI, chip design, Jalapeno, AMD, RISC-V, Synopsys]
source: https://openai.com/index/advancing-chip-design-with-our-models
draft: false
importance: medium
---

OpenAI reported progress in AI-assisted chip design.

**Jalapeno (OpenAI's first custom inference chip)**
- Model-proposed changes reduced standard-cell area by about 13% in the vector unit and about 10% in the matrix unit (team estimate).
- A matrix-unit multiplier redesign used about 15% less cell area and cut latency from two clock cycles to one; an adder redesign cut area by about 15% at the same two-cycle latency. These were silicon proven during bring-up.

**AMD**
- Up to 14% power, performance and area (PPA) improvement over heavily optimized baselines on AMD's flagship GPU IP, which AMD described as roughly a year of progress in under 5 months. Some changes went into a recent design sent for manufacturing; AMD also verified single-digit percentage gains on blocks of its upcoming flagship CPU. Synopsys tools verified that each rewrite preserved behavior.

**RISC-V core evaluations**
- Tested on PicoRV32 and Ibex with a budget of about 112,000 tokens per run. GPT-6.2 Astra had the highest average score on both; GPT-6.1 Sol beat GPT-5.6 Sol. On PicoRV32, Astra's score was about twice GPT-6 Astra's.
- Designing a core from a written specification scored higher than improving existing RTL: near 112,000 tokens, GPT-6.2 Astra averaged about 0.7 on PicoRV32 and about 0.75 on Ibex (9,881 scored runs in total).

**Next**: OpenAI is partnering with Synopsys to train GPT-Synopsys, a model meant to use Synopsys EDA tools as expert chip designers do.
