---
title: Gemini's Interactions API Reaches General Availability as the Standard Interface for Agents
description: Google has taken the Interactions API for Gemini to general availability. Six months after its December 2025 beta, the schema is now stable and it becomes the primary home for frontier features like Managed Agents and an upgraded Deep Research.
pubDate: 2026-06-22
category: gemini
type: news
tags: [Gemini, API, Developers, Agents]
source: https://blog.google/innovation-and-ai/technology/developers-tools/interactions-api-general-availability/
draft: false
importance: medium
---

On June 22, 2026, Google announced that the Interactions API — its new API for Gemini models and agents — has reached general availability (GA). The move comes six months after the API's public beta launched in December 2025, with the schema now stabilized and the API positioned as the default entry point in Google AI Studio and official documentation.

## Details

- **A single unified endpoint**: Combines model inference and agent execution into one API, supporting server-side state management, background execution, multimodal generation, and tool combination
- **Managed Agents**: Automatically provisions remote Linux sandboxes, with the "Antigravity" agent as the default
- **Background execution**: Setting `background=True` lets developers process long-running tasks asynchronously
- **Improved tools**: Built-in tools such as Google Search and Google Maps can now be combined with custom functions in a single request, and tools can return both text and images
- **Deep Research upgrades**: New agent versions, collaborative planning, and generation of charts and infographics
- **Media generation**: Image generation, music generation (Lyria 3), and multi-speaker text-to-speech are now supported
- **Schema redesign**: A "From Roles to Steps" restructuring replaces the legacy roles-based schema
- **Cost optimization**: New "Flex" and "Priority" pricing tiers offer up to 50% cost reduction
- **Migration path**: The legacy `generateContent` API remains fully supported, but frontier capabilities are expected to increasingly launch exclusively on the Interactions API

## How to try it

- The Interactions API is now selectable as the default interface in Google AI Studio
- Available via Python and JavaScript SDKs, with integration partners including LiteLLM, Eigent, and Agno
- Existing `generateContent`-based implementations continue to work, but Google recommends using the Interactions API for all new projects
