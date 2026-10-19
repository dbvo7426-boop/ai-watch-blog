---
title: "Ideogram 4.5 Launches as a 'Precise Edit' Model Built for Multi-Turn Image Editing"
description: "Ideogram released Ideogram 4.5, a closed model focused on localized editing that preserves untouched pixels across repeated edits, with native 2K output, four quality modes, and flat per-image API pricing from $0.008."
pubDate: 2026-09-30
category: ideogram
type: news
tags: [Ideogram, ImageGeneration, ImageEditing, API, MCP]
source: https://ideogram.ai/models/4.5/
draft: false
importance: high
---

Ideogram released Ideogram 4.5 on September 30, 2026, pitching it as "the most precise edit model." Rather than chasing first-shot image quality, the release targets image drift: the gradual pixel shifts, color changes and texture artifacts that pile up when an image is edited over and over. The model went live the same day in the Ideogram app, the developer API and Ideogram's MCP integration. Ideogram did not publish a separate launch blog post; the official model page and the company's announcement on X are the primary sources.

## Details

- **Precise Edit**: Changes a specific part of an existing image while leaving the rest untouched. Ideogram says this "eliminates artifact buildup, making multi-turn editing possible," so images can be revised step by step instead of regenerated after every instruction
- **Supported edit types**: Color and lighting, text modification, product photography, interior design, architecture, old-photo restoration, sketch-to-image, style reference, reframe, and depth-to-image
- **High-resolution "zoom" editing**: Edits large source images without downscaling (the demo uses a 4,016 × 6,016 / 24.2MP photo); edited crops keep their edges so they can be stitched back into the original
- **Output**: Native 2K resolution with four quality modes
- **API endpoints**: `POST /v2/image/generate/ideogram-4-5` (prompt plus up to 5 optional reference images) and `POST /v2/image/precise-edit/ideogram-4-5`
- **Pricing (flat, per image)**: Very low $0.008 (reference-based generation and edits only), Low $0.03, Medium $0.06, High $0.10 for prompt-only generation or $0.22 with references or for Precise Edit. Price does not vary by prompt length, reference count or output resolution, and no subscription is required
- **Comparisons**: Ideogram's page shows multi-turn edit sequences against GPT Image 2.5 Sunburst, Nano Banana Pro and Nano Banana 2, claiming the rivals' outputs degrade within a few edits. These are vendor-produced comparisons with no published metrics
- **Weights**: Unlike Ideogram 4.0, 4.5 is a hosted model; no open weights for 4.5 have been released

## What happened next

Early independent signals are modest: on Artificial Analysis's launch-week leaderboards, 4.5 placed around 23rd for image editing and 34th for text-to-image, so it is not a headline benchmark leader. Distribution, however, moved fast. Runway added Ideogram 4.5 to its MCP server on October 2, and Ideogram followed up in mid-October with product-photo editing guides built around the model. The strategic bet is clear: after making its name on text rendering and open-sourcing 4.0 in June, Ideogram is positioning 4.5 as a dependable editing tool for commercial design work, where preserving product details and layout across revisions matters more than a striking first draft.
