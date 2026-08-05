---
title: "Mistral Launches Shieldstral, a 3B Open-Weights Safety Classifier for Text and Images"
description: "Mistral AI introduced Shieldstral, a 3-billion-parameter multimodal content moderation model that evaluates safety as plain-language Q&A instead of fixed categories, matching guard models up to 7x its size."
pubDate: 2026-08-04
category: mistral
type: news
tags: [Mistral, Shieldstral, safety, content moderation, open weights, Apache 2.0]
source: https://mistral.ai/news/shieldstral/
draft: false
importance: medium
---

Mistral AI has released Shieldstral, a 3-billion-parameter open-weights safety classifier that moderates both text and images. Rather than scoring content against a fixed set of harm categories, Shieldstral treats moderation as a question-answering task: developers write their policy as a plain-language question at inference time, and the model returns a calibrated safety score in a single forward pass.

## Details

- **Question-answering framework**: Shieldstral takes three inputs — an instruction with evaluation context, a yes/no policy question, and the content to judge (a prompt, a response, or an image) — and returns a probability by reading the logits for "yes" and "no"
- **No retraining needed**: Because policies are expressed as natural-language questions rather than baked-in categories, teams can adapt moderation rules on the fly without fine-tuning a new model
- **Unified text and image support**: A single model interface handles text-only, image-only, and combined text-image moderation
- **Performance**: Mistral says Shieldstral matches or exceeds guard models up to 7x its size across text safety, refusal detection, policy adaptability, and multimodal safety benchmarks, all evaluated on held-out data
- **Efficient footprint**: Runs on a single 16GB NVIDIA GPU
- **Built on Forge**: Trained using contrastive policy pairs and LoRA checkpoints merged via SLERP, built entirely on Mistral's Forge training platform
- **Open Secure AI Alliance**: Shieldstral ships as a founding release under the newly announced Open Secure AI Alliance, alongside NVIDIA and other partners

## How to try it

- Shieldstral-1.0-3B is released under the Apache 2.0 license and available for download on Hugging Face at `mistralai/Shieldstral-1.0-3B`
- Because it runs on a single 16GB GPU, it can be self-hosted for on-premises or air-gapped content moderation pipelines
