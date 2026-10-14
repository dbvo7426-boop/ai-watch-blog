---
title: "GitHub Updates HydraFusion and Adds a New HydraFusion Max Tier"
description: "GitHub refreshed its multi-model orchestration feature HydraFusion with a new model pool, stage-specific reasoning effort, and smarter cascade/critique workflows, and introduced HydraFusion Max for the most demanding agentic tasks."
pubDate: 2026-10-14
category: copilot
type: news
tags: [GitHubCopilot, HydraFusion, Orchestration, AIModels]
source: https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option
draft: false
importance: medium
---

GitHub updated HydraFusion, its multi-model orchestration feature in GitHub Copilot, and introduced a new higher-capability tier called HydraFusion Max, aimed at the most demanding agentic coding tasks. Both remain research-preview features across VS Code, the Copilot app, and Copilot CLI.

## Details

- **What HydraFusion does**: orchestrates several models together to produce one response, so users don't have to manually pick a model for each task
- **Updated model pool**: HydraFusion and HydraFusion Max now draw from Claude Opus 5.5, GPT-6 Astra, GPT-6.1 Sol, and GPT-6 Luna, with the orchestration workflow deciding which model handles each stage
- **Stage-specific reasoning effort**: previously every model ran at its default reasoning effort; now HydraFusion uses medium effort for initial drafts and high effort for review
- **Cascade workflow changes**: Cascade starts with an initial model and escalates to a stronger one when needed; it now adds a judging step that checks the initial work and requests a repair only when necessary
- **Critique workflow changes**: Critique previously relied mainly on text summaries; it now uses tools to inspect the actual workspace directly and runs parallel critic models
- **New HydraFusion Max tier**: uses the same architecture as HydraFusion but is tuned for frontier capability, applying higher reasoning effort where depth and thoroughness matter most while still managing token efficiency through orchestration — HydraFusion is positioned for balanced speed/cost/performance agentic tasks, Max for the tasks requiring the deepest reasoning
- **Availability**: both options are available on Copilot Pro, Pro+, Business, and Enterprise plans when experimental/preview features are enabled, subject to organizational model policies

## What happened next

The update deepens GitHub's bet on model orchestration over single-model selection as the default way developers interact with Copilot's growing model roster, arriving the same week GitHub also shipped Gemini 4 Argon support and enterprise managed-settings enforcement updates, underscoring how quickly Copilot's underlying model lineup and orchestration logic are both evolving in parallel.
