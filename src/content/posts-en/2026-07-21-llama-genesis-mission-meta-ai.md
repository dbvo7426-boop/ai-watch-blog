---
title: Meta's SAM 3 and DINOv3 Models Power Science on the Genesis Mission
description: Meta detailed how its SAM 3 and DINOv3 vision models are being used in the first wave of Genesis Mission projects, cutting scientific image-analysis time at national labs from weeks to about 15 minutes.
pubDate: 2026-07-21
category: llama
type: news
tags: [Meta AI, Genesis Mission, SAM 3, DINOv3, national labs]
source: https://ai.meta.com/blog/genesis-mission-lawrence-berkeley-national-laboratory-segment-anything-dino/
draft: false
importance: medium
---

Meta has published details on how its vision models "Segment Anything Model 3" (SAM 3) and "DINOv3" are supporting the first wave of projects under the Genesis Mission, the U.S. national AI initiative. It's a real-world example of Meta AI's broader model family — alongside Llama — being put to work analyzing national-laboratory data.

## Details

- **What the Genesis Mission is**: A White House-led national initiative launched in late 2025 to accelerate scientific discovery using AI, with DOE's national laboratories at its core
- **Flagship project "SYNAPS-I"**: Led by Lawrence Berkeley National Laboratory, with 60 researchers across five national labs working toward user facilities that function as intelligent discovery platforms
- **Models deployed**: SAM 3 draws pixel-precise object boundaries, while DINOv3 identifies structures within images through self-supervised learning; the pair ran across 300 A100 GPUs to automate image segmentation at scientific beamlines
- **Results**: Analysis that used to take weeks of expert manual work now takes roughly 15 minutes
- **Concrete example**: Researchers used the pipeline to study drought resilience in grapevines, automatically identifying water-transport vessels in micro-CT scans of plant tissue — work that previously required a month of manual annotation per dataset
- **Quote**: "This compresses discovery time from days to moments and establishes a continuous, self-improving model of science" — DOE Under Secretary Dario Gil

## How to try it

- SAM 3 and DINOv3 are publicly released Meta foundation models that research institutions can integrate into their own data-analysis pipelines
- Full details are available on Meta AI's official blog in its Genesis Mission coverage
