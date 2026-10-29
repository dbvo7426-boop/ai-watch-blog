---
title: "GitHub Copilot Fusion is generally available, with local model routing in preview"
description: "Copilot Fusion routes and orchestrates models per task at three effort levels, and an experimental preview adds routing between on-device and cloud models."
pubDate: 2026-10-28
category: copilot
type: news
tags: [GitHub Copilot, Copilot Fusion, Model routing, Local models, GitHub Universe]
source: https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion
draft: false
importance: high
---

GitHub Copilot Fusion is generally available. Instead of picking a model per task, you select Copilot Fusion and it routes and orchestrates models for you. A companion experimental preview lets Fusion also choose between on-device and cloud models.

## Details

- **What it is:** A combination of Project HydraFusion's multi-model orchestration and Copilot auto model selection's fine-tuned selection, aiming to balance performance and cost.
- **Benchmark claim (GitHub):** On the Artificial Analysis Coding Agent Index, Copilot Fusion Max scored 60, within two points of Claude Code with Opus 5.5 Max, at about half the average API cost per task, about half the tokens, and about 40% less time per task.
- **Effort levels:** Standard (versatile models for everyday coding), High (capable models for hard tasks), Max (most capable models for the most demanding work).
- **Workflows:** Single (one model), Cascade (efficient model drafts, quality check accepts or escalates), Critique (one drafts, another reviews, the first revises).
- **Admin control:** Fusion uses only models enabled in enterprise and organization model policies; admins can disable models for Fusion alone and set Fusion at any level as the default via enterprise managed settings.
- **Billing:** Each model used is billed at its standard rate. For a limited time, paid-plan users get a 30% discount on model costs when using Fusion (end date undisclosed).
- **Availability:** All Copilot plans in VS Code, the GitHub Copilot app, Copilot CLI, and JetBrains IDEs; more clients coming. Research-preview selections of auto, HydraFusion, or HydraFusion Max migrate automatically.
- **Customer quote:** AT&T's Hari Pokhrel says Fusion Standard improved token efficiency by picking the right model automatically.
- **Local model routing (experimental, opt-in):** Fusion can choose between supported on-device and cloud models in Copilot CLI, the Copilot app, and VS Code. On supported Windows devices, MAI Code 1.1 Flash can be downloaded and configured through the Windows ML provider (CLI: experimental mode and /model; app: Settings > Model providers and Settings > Experiments > Local model auto routing; VS Code: `chat.copilot.localModel.enabled`). Select Standard in Fusion to let Copilot choose.
- **Bring your own local model:** Copilot CLI routing also works on Windows, macOS, and Linux with MAI Code 1.1 Flash or Qwen3.8 Flash Next served via a local OpenAI-compatible server; you manage download and inference. Adding a BYOK model does not make it Fusion-eligible automatically. The app's intelligent routing supports only managed Windows ML models for now.
- **Caveats:** Routing decisions are still made in the cloud, so local inference is not offline, and local models may have different safety protections than Copilot cloud models.

## What happened next

Fusion replaces Auto as the default-style entry point, shifting model choice from developers to the platform, with admin policy as the guardrail. The cost story depends on GitHub's own benchmark numbers, which are unverified here. The local routing preview points to a hybrid future, but the cloud-side routing step and the Windows-centric managed setup limit it for now.
