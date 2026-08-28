---
title: "GitHub Copilot's Global Model Policy Reaches General Availability"
description: "GitHub's default model policy for Copilot Business and Enterprise, announced in July, is now generally available, giving admins centralized control over which AI models are enabled by default across their organization."
pubDate: 2026-08-26
category: copilot
type: news
tags: [GitHubCopilot, GitHub, EnterpriseSettings, ModelPolicy, AdminControls]
source: https://github.blog/changelog/2026-08-26-global-model-policy-generally-available
draft: false
importance: medium
---

GitHub's global model policy for GitHub Copilot — a default configuration system announced in July that governs which AI models are available to users — is now generally available, rolling out gradually through September 1, 2026.

## Details

- **What it controls**: model availability for end users on Copilot Business and Copilot Enterprise plans, plus how newly released models are treated by default
- **Delegate-to-policy mechanism**: models an admin hasn't explicitly configured shift to a "Delegate to default policy" status, meaning they automatically follow whatever default the organization has chosen rather than needing per-model configuration
- **Exclusions**: open-weight models and models lacking GitHub's data retention agreement are excluded from default enablement, regardless of the organization's chosen policy
- **Admin override still available**: administrators can still explicitly enable or disable specific models to override the default policy for their organization

## What happened next

The GA rollout gives large organizations a centralized way to manage an increasingly crowded roster of Copilot-supported models without needing to individually vet and toggle every new release, while keeping data-retention and licensing exclusions as a hard floor beneath whatever policy an admin sets.
