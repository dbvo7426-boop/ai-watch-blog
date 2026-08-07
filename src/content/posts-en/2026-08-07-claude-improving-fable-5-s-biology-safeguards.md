---
title: "Anthropic Cuts Claude Fable 5's Biology False-Positive Refusals by 85%"
description: "Anthropic rewrote the safety classifier 'constitution' governing when Claude Fable 5 routes biology-related queries to the less capable Opus 5, cutting unnecessary fallbacks by roughly 85% while still blocking genuinely dangerous dual-use requests."
pubDate: 2026-08-07
category: claude
type: news
tags: [Claude, Anthropic, Fable 5, Safety, Biology, Classifiers]
source: https://www.anthropic.com/news/improving-fable-5-s-biology-safeguards
draft: false
importance: medium
---

Anthropic has updated the safety classifier system that governs how Claude Fable 5 handles biology-related queries, cutting unnecessary safety fallbacks by roughly 85% while keeping restrictions in place for genuinely dangerous dual-use requests.

## Details

- **How the safeguard works**: Fable 5 uses automated AI classifiers that detect potentially dangerous biology-related requests and route them to Opus 5, a less capable model, instead of answering with Fable 5 directly
- **What actually changed**: Anthropic rewrote the classifier's "constitution" — the set of rules the classifier uses to distinguish content that should be safeguarded from content that should be allowed — with input from both internal and external experts
- **Process behind the update**: The work involved explicitly carving out benign use cases in the classifier's rules, gathering expert feedback from diverse sources, generating new training data based on the revised constitution, and then retraining and re-verifying that genuinely harmful dual-use content still triggers the safeguard correctly
- **Measured impact**: Biology-related fallbacks dropped by approximately 85% overall across Anthropic's product surfaces. The reduction varied by surface: about 67% on Claude.ai, 55% on Cowork, 17% on Claude Code, and 7% on the Claude Platform (API)
- **What's still restricted**: Fable 5 continues to block and reroute queries touching virology, toxicology, and molecular design to Opus 5, reflecting continued caution around dual-use research risk in those specific areas
- **Timeline**: Anthropic says the classifier refinement took "several weeks" ahead of this announcement

## What happened next

The surface-by-surface breakdown suggests the false-positive problem was most acute on Claude.ai and Cowork — consumer- and productivity-facing surfaces where legitimate biology questions (students, researchers, educators) were most likely to get needlessly routed away from Fable 5. The much smaller improvement on Claude Code and the Claude Platform implies those surfaces were already seeing fewer unnecessary biology-related fallbacks, or that use cases there trigger the classifier less often in general. Anthropic did not indicate whether virology, toxicology, and molecular design restrictions will be revisited in future updates.
