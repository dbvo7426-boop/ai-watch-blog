---
title: "MiniMax Open-Sources H3, a 33B Omni-Modal Video Model With Native Audio"
description: "MiniMax released the base weights of its H3 video model on Hugging Face and ModelScope under a community license. The 2K regeneration stage and the instruction-parsing module stay API-only for now."
pubDate: 2026-08-03
category: minimax
type: news
tags: [MiniMax, H3, Video Generation, Open Weights]
source: https://www.minimax.io/news/minimax-h3-open-source
draft: false
importance: high
---

On August 3, 2026, MiniMax announced that it had open-sourced H3, which it describes as a general-purpose, omni-modal generative system. H3 takes text, images, video and audio as input and produces video with native stereo audio. This article is based on MiniMax's own announcement page. The release is partial: the base generator is open, while two other modules are not.

## Details

- **Output:** Videos of 4 to 15 seconds at 24 FPS with 32 kHz stereo audio, in aspect ratios including 21:9, 16:9, 4:3, 1:1, 3:4 and 9:16. The shorter side defaults to 768 px, and 2K output needs the separate H3-Regenerate-2K stage.
- **Dialogue languages:** MiniMax lists stable support for Arabic, Chinese, English, French, German, Italian, Japanese, Korean, Portuguese, Russian and Spanish. Other languages vary.
- **Released checkpoints:** MiniMax-H3 Base FL2VA covers text-to-audio-video and first/last-frame input. MiniMax-H3 Base Ref2VA covers reference input: up to 9 images, 3 videos and 3 audio clips, with at most 12 files in total. Both are BF16 and CFG-distilled.
- **Architecture:** The text/visual encoder uses the full pretrained Qwen3-VL-32B weights. The core is H3-Omni-Transformer, a 33B-parameter dense single-stream Transformer. About 13B of those parameters sit in AdaLN branches that can be cached at inference. Separate visual and audio VAEs handle the latents. Sparse attention was used in training, but the open release supports only full-attention inference. MiniMax says sparse attention will come in a later update.
- **Not open-sourced:** H3-Context-IR, a hosted module that parses multimodal instructions, stays closed and is available by API. H3-Regenerate-2K, which re-runs H3 on the 768p output to reach 2K, is not yet open. MiniMax says it will release it when ready, and an API exists for validation.
- **Where and how:** The weights are on Hugging Face and ModelScope as MiniMaxAI/MiniMax-H3. Supported frameworks are SGLang, vLLM, Diffusers and ComfyUI. The release includes 768p reproduction scripts and a Full 2K Workflow that combines local SGLang with the official APIs.
- **License:** The MiniMax H3 Community License Agreement. The announcement page links to the license and a Q&A but does not spell out the terms, so check them before commercial use.
- **Safety:** Inputs and enhanced prompts pass through automated moderation, which MiniMax says can produce false positives and negatives.
- **Benchmarks:** The announcement page contains no benchmark numbers. Third-party reports of leaderboard results exist but were not checked against a primary source.

## What happened next

The release is best read as open weights for the core model, not a fully open pipeline. Anyone running only the open parts gets 768p output. Reaching 2K or using the full instruction parser still depends on MiniMax's API, which keeps a commercial path while the weights spread through Hugging Face, ModelScope and ComfyUI.

A dense 33B video model that builds on a 32B vision-language encoder is large, so local use will need multi-GPU setups. The SGLang example uses four GPUs. Later in October, MiniMax published a follow-up news item about an H3 IP Edition aimed at licensed Japanese content. Watch for the promised H3-Regenerate-2K and sparse-attention releases, which would show how open the stack becomes.
