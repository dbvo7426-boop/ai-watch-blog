---
title: DALL-E 2 and DALL-E 3 API Access Officially Shut Down, Completing Move to GPT Image Models
description: OpenAI officially shut down API access to DALL-E 2 and DALL-E 3 on May 12, 2026, as previously announced in November 2025, directing developers to migrate to GPT Image 2, GPT Image 1, or GPT Image 1 mini.
pubDate: 2026-05-12
category: dalle
type: news
tags: [DALL-E, Image Generation, API, Deprecation]
source: https://developers.openai.com/api/docs/deprecations
draft: false
importance: medium
---

On May 12, 2026, OpenAI officially shut down API access to its DALL-E 2 and DALL-E 3 image generation models. The shutdown followed a deprecation notice issued on November 14, 2025, and developers still relying on the DALL-E models are now required to migrate to a GPT Image model.

## Details

- **Models retired**: Both `dall-e-2` and `dall-e-3` stopped responding to API calls as of May 12, 2026
- **Timeline**: The deprecation was announced on November 14, 2025, giving developers roughly six months to migrate before the shutdown
- **Migration path**: OpenAI recommends migrating to `gpt-image-2`, `gpt-image-1`, or `gpt-image-1-mini`
- **Background**: Image generation within ChatGPT itself had already moved on from DALL-E 3, first to "GPT Image 1.5" in December 2025, then to "ChatGPT Images 2.0" (GPT Image 2) on April 21, 2026 — the API-side shutdown brings the two in line
- **What's next**: Among the recommended replacement models, `gpt-image-1` is itself scheduled for deprecation on October 23, 2026, and `gpt-image-1-mini`, `gpt-image-1.5`, and `chatgpt-image-latest` on December 1, 2026, as OpenAI consolidates around `gpt-image-2`

## How to try it

- Existing integrations built on DALL-E 2 or DALL-E 3 will no longer function unless the model ID is updated to a GPT Image model such as `gpt-image-2`
- OpenAI says it will field migration questions through its Developer Forum
- Further consolidation toward GPT Image 2 is expected to continue through the rest of 2026
