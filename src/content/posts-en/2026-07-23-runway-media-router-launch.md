---
title: "Runway Launches \"Runway Media Router,\" the First Model Router for Generative Media"
description: "Runway has introduced Runway Media Router on its Runway Dev platform, automatically selecting the best video, image, or audio model for each request. It routes across Runway's own models and third-party models based on cost, quality, and speed preferences."
pubDate: 2026-07-23
category: runway
type: news
tags: [Runway, Runway Dev, model routing, API]
source: https://runway.com/news/company-news/introducing-runway-media-router
draft: false
importance: medium
---

Runway has announced Runway Media Router, a new capability on its developer platform Runway Dev. It is billed as the first model router built specifically for generative media (video, image, and audio), automatically picking the optimal model for each request.

## Details

- **Overview**: The router automatically directs each request to the best-suited model based on preferences for cost, quality, and latency — bringing a routing approach common in LLMs to generative media for the first time
- **How it works**: Developers set a price cap (per-second for video, per-image for images), allow/deny lists for providers and models, and cost/quality/speed preferences once in the Runway Dev portal, then send requests to a single Model Router endpoint going forward
- **Supported models**: Routes across Runway's own Gen-4.5, Aleph 2.0, and Act-Two, as well as third-party models including Seedance, GPT Image 2, and ElevenLabs
- **Regional preferences**: Also supports preferences based on a model's provider/region, such as favoring US-based providers
- **CPO Anthony Maggio's comment**: "Most developers are not spending the time to really understand the capabilities of each of these models," explaining the router's goal of cutting the evaluation burden as generative media models proliferate
- **Adopters**: Companies including Adobe, Cloudflare, ElevenLabs, Expedia, Shutterstock, and Quora are cited as users

## How to try it

- Available now via Runway Dev at dev.runwayml.com, covering video, image, and audio models
- Specific pricing was not disclosed at announcement; check the official site for details
- Built on top of the Runway Dev developer platform introduced on July 8, 2026, so it requires using Runway Dev itself
