---
title: "GitHub Copilot Introduces Default Model Enablement Policy for Business and Enterprise Admins"
description: "GitHub is introducing a global default enablement policy for Copilot Business and Enterprise, automatically making newly GA models available without requiring admins to enable each one manually. Admins can opt out with a single toggle."
pubDate: 2026-07-29
category: copilot
type: news
tags: [Copilot, GitHub, Administration, Governance]
source: https://github.blog/changelog/2026-07-29-default-model-enablement-for-copilot-business-and-enterprise
draft: false
importance: low
---

GitHub is rolling out a global default enablement policy for Copilot Business and Enterprise: newly generally-available Copilot models will automatically become available to users, rather than requiring administrators to manually enable each one. Admins get a single toggle to opt out of this behavior in their organization's Copilot settings.

## Details

- **Policy overview**: For Copilot Business and Enterprise, newly GA Copilot models will automatically become available without administrators needing to enable each one individually
- **Impact on admins**: A single opt-out toggle is added to enterprise and organization model settings. Admins who prefer to manually approve each new model can simply disable the policy
- **Existing settings preserved**: "Explicit choices are always preserved" — if an admin has deliberately enabled or disabled a specific model, that setting is never touched by this change
- **Timeline**: On July 29, 2026, the policy becomes configurable but has no effect yet (a 28-day review period). It takes effect on August 26, 2026, at which point unconfigured models transition to an "inherits default" status
- **How settings apply**: Unconfigured models are relabeled from "unconfigured" to "inherits default" and dynamically follow the organization's policy setting. The policy can be toggled at any time, with changes applying immediately to models in the "inherits default" state
- **Exceptions**: Open-weight models (such as DeepSeek and Kimi K2.7) and models without a GitHub data-retention agreement are excluded from automatic enablement

## How to try it

- Business/Enterprise admins can choose automatic or manual model enablement via a toggle in the organization or enterprise Copilot model settings
- To keep manually approving each new model, disable the policy before it takes effect on August 26
- Models already explicitly enabled or disabled require no action, since those settings are untouched
