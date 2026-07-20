---
title: "Stable Diffusion 2.0 Released: Better Performance, but a Mixed Reaction from the Community"
description: Stability AI released Stable Diffusion 2.0. While a new text encoder and stronger safety filters improved quality, the changes sparked debate over prompt incompatibility and content restrictions.
pubDate: 2022-11-24
category: stablediffusion
type: news
tags: [StableDiffusion, StabilityAI, "AI History"]
source: https://stability.ai/news-updates/stable-diffusion-v2-release
draft: false
importance: medium
---

Stability AI released "2.0," a major update to Stable Diffusion. While it brought technical advances such as switching the text encoder to OpenCLIP, community voices complained that stronger NSFW filtering had degraded the quality of human depictions, leading to a mixed reaction right after release.

## Details

- **New text encoder**: Switched from the original CLIP to OpenCLIP, an open-source version trained by LAION, breaking compatibility with many v1.x prompts and LoRAs
- **Stronger safety filtering**: Applied LAION's strict NSFW classifier to filter the training data
- **Community backlash**: Widespread criticism arose over degraded quality in depicting people and a narrower range of expressive output, leading many users to stick with the v1 series
- **Quick course correction**: Just two weeks after release, a 2.1 update addressing the feedback was shipped

## What happened next

The controversy around SD2.0 highlighted just how sensitive the balance between "safety" and "creative freedom" is for open-source models. This experience influenced Stability AI's subsequent model design decisions, leading to design choices in the following year's SDXL that were more mindful of a broader user base.
