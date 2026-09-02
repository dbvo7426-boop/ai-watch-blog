---
title: "Gemini Adds Agentic Video Understanding, Cutting Token Use by Up to 88%"
description: "Google launched agentic video understanding across Gemini 3.7 Flash, 3.6 Flash, and 3.5 Flash-Lite, letting the model actively choose what to watch, at what speed, and through which modality — cutting token consumption up to 88% and cost up to 66% while improving quality up to 7%."
pubDate: 2026-09-01
category: gemini
type: news
tags: [Gemini, Google, VideoUnderstanding, GoogleAIStudio, AgenticAI]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/
draft: false
importance: high
---

Google introduced agentic video understanding in Gemini, a new approach that lets the model actively direct its own video analysis — choosing what to watch, at what speed, and through which modality (frames, audio, or transcript) — instead of processing video at a fixed frame rate the way earlier models did.

## Details

- **Four core use cases**: sub-second moment retrieval that catches split-second changes and precise cut boundaries fixed-rate sampling would miss; long-form search that answers complex queries across multi-hour videos without massive token consumption; anomaly detection that resamples interesting segments at higher frame rates to catch subtle visual artifacts; and counting that accurately tracks repeated actions or distinct objects across a video's full length
- **How it works**: the model runs an agentic loop using Gemini's native video tools, making targeted, goal-driven decisions about which segments to examine rather than uniformly ingesting every frame
- **Performance gains**: Google reports up to 88% lower token consumption, up to 66% lower analysis cost, and up to 7% higher quality versus fixed-rate processing, with Gemini 3.7 Flash offering the best overall quality and quality-to-cost balance
- **Availability**: live now across Gemini 3.7 Flash, 3.6 Flash, and 3.5 Flash-Lite via Google AI Studio, the Gemini Enterprise Agent Platform, and a rolling-out release in the Gemini app; YouTube's "Ask YouTube" feature will support it soon
- **Pricing**: uses standard API token pricing, with no additional fees for the feature itself

## What happened next

By making video analysis cost and token-proportional to what's actually informative in a clip rather than its raw duration, Google is positioning Gemini's video models to compete more directly on long-form and high-volume video workloads — search, moderation, and analytics use cases — where fixed-rate processing had made per-video cost scale poorly with length.
