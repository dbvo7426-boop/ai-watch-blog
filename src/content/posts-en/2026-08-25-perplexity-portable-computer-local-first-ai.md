---
title: "Perplexity Introduces Portable Computer, a Local-First Version of Its AI Agent"
description: "Perplexity launched Portable Computer, a version of its Computer agent that runs entirely on-device on NVIDIA DGX Spark hardware, keeping sensitive files and data local while escalating to the cloud only when needed."
pubDate: 2026-08-25
category: perplexity
type: news
tags: [Perplexity, Computer, NVIDIA, On-device AI, Privacy, AI Agents]
source: https://perplexity.ai/hub/blog/introducing-portable-computer-for-local-first-ai
draft: false
importance: high
---

Perplexity has introduced Portable Computer, a locally-run version of its Perplexity Computer agent that performs AI-powered analysis, file synthesis, and complex workflows entirely on a user's own machine, escalating to the cloud only when a task requires it.

## Details

- **What it is**: A local-first variant of Perplexity Computer, built to keep sensitive data — confidential documents, private codebases — on-device by default
- **Hardware partnership**: Built together with NVIDIA specifically for the **NVIDIA DGX Spark**, a desktop-sized AI computer built on the Grace Blackwell GB10 platform (20-core Arm CPU, NVIDIA GPU, 128GB unified memory); future support planned for NVIDIA RTX GPU PCs
- **On-device models and stack**: Runs Qwen 3.8 27B or PPLX 27B (a post-trained Qwen variant) locally, with a local search index, orchestrator, and scheduler; local processing carries no per-credit charges
- **Local dictation**: Voice input uses NVIDIA's Nemotron 3.5 ASR model running on-device
- **Cloud escalation, on request**: Users can selectively authorize escalation to the cloud for live web access or heavier reasoning; the system asks permission before any content leaves the device
- **Architecture (per Perplexity's companion technical post)**: Described as a harness and model co-designed for local knowledge work — running on-device by default and reaching out to remote capabilities only on demand
- **Availability**: Rolling out to Perplexity Pro and Max subscribers, launching first on Linux via one-click setup inside the Perplexity app, with Windows support "coming soon"

## What happened next

Portable Computer positions Perplexity to compete for privacy-conscious professional users — those handling confidential material who have been reluctant to send data to cloud-based AI agents. The NVIDIA DGX Spark partnership also signals a broader industry push toward capable on-device AI hardware; expect Perplexity to expand platform support (Windows, RTX GPU PCs) and possibly extend the local-first approach to other parts of its product line following this launch.
