---
title: "OpenAI introduces BioBasicsBench to test AI agents on everyday wet-lab analysis"
description: "A 100-task benchmark built with Ligo finds GPT-6 Astra earns 66.7% of available credit at xhigh effort versus 43.8% for GPT-5.6 Sol, with clear gaps remaining."
pubDate: 2026-11-06
category: chatgpt
type: news
tags: [OpenAI, Benchmark, Biology, GPT-6 Astra, BioBasicsBench]
source: https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science
draft: false
importance: medium
---

OpenAI introduced BioBasicsBench, a benchmark developed with Ligo, a biotech company focused on enzyme design, that measures how well AI agents handle routine wet-lab analysis. Its 100 tasks test whether agents can interpret raw experimental data, spot errors and recognize when the evidence cannot support a conclusion.

## The benchmark

- **Scope:** 100 tasks across five areas: protein methods, imaging and cytometry, quantification and assays, nucleic acid methods, and molecular cloning.
- **Inputs:** Raw evidence such as gel and blot images (31 tasks), protocols and notes (27), instrument exports (20), bench photos (18), microscopy (14), instrument screens (13), sequencing files (12), protocol videos (7) and agar plates (7). Categories overlap.
- **Construction:** Scientists wrote tasks from their own experiments with expert grading rubrics. Each passed an internal review by a Ligo scientist who did not write it, an external review by a PhD-level wet-lab scientist, and a final internal review.
- **Scoring:** Mean reward, the average share of rubric credit earned. OpenAI ran seven models across 37 model and effort settings, five attempts per task, for 18,500 results.

## Results at xhigh reasoning effort

| Model | Mean reward | Output tokens per task |
| --- | --- | --- |
| GPT-6 Astra | 66.7% | 4,704 |
| GPT-6.1 Sol | 62.0% | 5,238 |
| GPT-5.6 Sol | 43.8% | 9,099 |
| GPT-6 Luna | 38.3% | 13,120 |
| GPT-5.5 | 35.4% | 11,135 |
| GPT-5.4 | 33.2% | 13,717 |
| GPT-5.2 | 31.2% | 27,620 |

OpenAI says Astra beats GPT-5.6 Sol even at low effort and suggests stronger native multimodal ability is key.

## Where Astra improved and where it still fails

- **Improved:** It noticed a plate labeled with kanamycin rather than the ampicillin used, so rejected the negative control. It recognized a z-stack where GPT-5.6 Sol sought a biological explanation for vanishing cells. It flagged that a dead-cell dye reading could be confounded by overlapping detection windows.
- **Still fails:** A familiar assumption overrode the controls in a colony PCR gel (it picked lanes 4, 6, 7 and 8; the reference selects 5, 9 and 10). It discounted contradicting observations about vacuole contrast. It overcounted colonies on a plate by about 12%.

OpenAI says higher scores do not yet mean models can make reliable judgments in the lab, and that tracking these capabilities also informs its biosafety and biosecurity work.
