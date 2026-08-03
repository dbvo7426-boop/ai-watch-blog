---
title: Cognition Introduces "Stacked PRs" in Devin, Splitting Large Changes into Reviewable Layers
description: Cognition has launched Stacked PRs in Devin, automatically breaking large AI-generated changes into a stack of small, independently reviewable pull requests that rebase themselves as feedback comes in.
pubDate: 2026-07-30
category: devin
type: news
tags: [Devin, Cognition, GitHub]
source: https://devin.ai/blog/introducing-pr-stacks
draft: false
importance: medium
---

Cognition, maker of Devin, has introduced "Stacked PRs," a feature that automatically breaks large AI-generated changes into a stack of smaller, independently reviewable pull requests instead of one massive PR.

## Details

- **The problem it addresses**: Research cited by Cognition (Faros AI, 2025) found that teams with high AI coding adoption merged 98% more PRs, but review time per PR rose 91% and average PR size grew 154%, with no measurable gain in DORA delivery metrics — AI agents were generating work faster than humans could review it
- **How it works**: Rather than submitting one monolithic PR, Devin decomposes the change into a "stack" of small, self-contained PRs, each reviewable on its own
- **Architectural awareness**: The decomposition relies on DeepWiki, Devin's continuously indexed map of a repository's modules and the dependencies between them, letting Devin split changes along natural architectural seams rather than arbitrarily
- **Automatic rebasing**: When a reviewer requests changes on an earlier layer of the stack, Devin automatically rebases the downstream PRs and resolves the resulting conflicts
- **Retroactive stacking**: Devin can also take an existing large PR and restructure it into an organized stack after the fact
- **Stack management**: Devin manages CI status, review state, and mergeability across every layer of the stack, not just the individual PR
- **Partner**: Built together with GitHub

## How to try it

- Stacked PRs is available now to Devin users; large tasks submitted to Devin will automatically be organized into a stack when appropriate
- Full details are in Cognition's blog post at devin.ai/blog/introducing-pr-stacks
