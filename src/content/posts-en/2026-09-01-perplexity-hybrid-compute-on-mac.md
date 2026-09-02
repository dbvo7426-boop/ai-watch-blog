---
title: "Perplexity Launches Hybrid Compute on Mac, Splitting AI Tasks Between Cloud and Device"
description: "Perplexity introduced Hybrid Compute for Mac, which routes sensitive data to local models running on Apple silicon while the cloud handles the rest, with a privacy gate controlling what can leave the device."
pubDate: 2026-09-01
category: perplexity
type: news
tags: [Perplexity, Hybrid Compute, Apple Silicon, Privacy, On-device AI, Mac]
source: https://www.perplexity.ai/hub/blog/introducing-hybrid-compute-on-mac
draft: false
importance: high
---

Perplexity introduced Hybrid Compute on Mac on September 1, 2026, a feature that automatically divides AI tasks between cloud processing and local, on-device models so that sensitive files and information never have to leave a user's machine.

## Details

- **What it is**: Hybrid Compute splits each task between the cloud and a local model running on-device, letting users work with AI on data that should never leave their machine
- **Privacy gate**: A built-in classifier identifies sensitive information — names, addresses, account numbers, secrets — and a privacy gate controls what may leave the Mac, either masking sensitive details or refusing to send them at all
- **Local models included**: Three local models ship with the launch — Gemma 4 E4B, Qwen3.6 35B-A3B, and a proprietary Perplexity model — with a one-click model download and selector interface
- **Local engine**: A companion technical post details "Lily," Perplexity's custom inference engine built for Qwen3.6-35B-A3B on Apple silicon, which the company says delivers 1.23x MLX-LM's prefill throughput and 1.35x its decode throughput on an M5 Max
- **Hardware requirements**: Any Apple silicon Mac running macOS 15 or later with at least 24GB of unified memory
- **Remote access**: Supports controlling a dedicated Mac mini remotely from an iPhone
- **Enterprise controls**: Admins can set organization-wide data-handling rules and audit information transfers
- **Availability**: Rolling out now to Perplexity Pro, Max, and Enterprise subscribers

## What happened next

Hybrid Compute extends the local-first direction Perplexity set with Portable Computer on NVIDIA DGX Spark hardware in late August, this time bringing on-device processing to everyday Mac hardware rather than dedicated AI workstations. The accompanying release of the Lily inference engine suggests Perplexity intends to keep optimizing its own local runtime rather than relying solely on off-the-shelf frameworks like MLX-LM, positioning on-device privacy as a recurring differentiator across its product line.
