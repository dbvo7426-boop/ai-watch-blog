---
title: "Stability AI Releases Stable Audio 3.0, Open-Weight Music Generation up to 6 Minutes Long"
description: Stability AI, the developer of Stable Diffusion, has unveiled "Stable Audio 3.0," a music and sound effects generation model. Three of the four models in the family are released as free, open weights.
pubDate: 2026-05-20
category: stablediffusion
type: news
tags: [Stability AI, Audio Generation, Open Weights]
source: https://stability.ai/news-updates/meet-stable-audio-3-the-model-family-built-for-artistic-experimentation-with-open-weight-models
draft: false
importance: medium
---

Stability AI, the developer of Stable Diffusion, has announced "Stable Audio 3.0," a new model for music and sound effects generation. It's a family of four models, three of which are released as free, open weights.

## Details

- **Much longer generation times**: Supports variable-length generation of up to 6 minutes, up from 11-47 seconds in previous models
- **On-device composition**: The smallest model, "3.0 Small," is the only one capable of creating complete tracks entirely on-device
- **Editing features**: Supports inpainting, multi-segment editing, and track extension
- **Customization**: LoRA fine-tuning lets users tailor the model to their own sound library

### Model lineup

| Model | Use case | Max length |
| --- | --- | --- |
| 3.0 Small SFX | Sound effects (mobile/laptop) | On-device |
| 3.0 Small | Track creation | 2 minutes |
| 3.0 Medium | Enhanced musicality | 6+ minutes |
| 3.0 Large | Professional platforms | 6+ minutes |

- **Licensing**: Trained entirely on fully licensed data. Under the Community License, users retain ownership and commercial rights to what they generate. An Enterprise License (with legal indemnification) is also available for companies with annual revenue over 100 million yen

## How to try it

- The open-weight models (Small SFX / Small / Medium) are available on Hugging Face
- The top-tier "Large" model is available via the Stability AI Platform API
- You can try it out at stableaudio.com, and it's also available through integrated platforms such as ComfyUI
