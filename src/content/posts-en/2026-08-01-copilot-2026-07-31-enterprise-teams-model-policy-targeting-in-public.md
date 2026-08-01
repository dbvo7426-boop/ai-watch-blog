---
title: "GitHub Ships User-Based Model Policy Targeting for Enterprise Teams in Public Preview"
description: "GitHub has released user-based model policy targeting in public preview for GitHub Enterprise customers with Copilot Business or Enterprise, letting admins control model access at the enterprise-team level."
pubDate: 2026-08-01
category: copilot
type: news
tags: [Copilot, GitHub, Enterprise, Admin]
source: https://github.blog/changelog/2026-07-31-enterprise-teams-model-policy-targeting-in-public-preview
draft: false
importance: low
---

GitHub has released user-based model policy targeting in public preview for GitHub Enterprise customers on Copilot Business or Enterprise. The feature moves AI model access control from the organization level down to individual enterprise teams.

## Details

- **Overview**: Admins can set a baseline of models available across the entire enterprise, then grant additional models to specific enterprise teams on top of that baseline
- **Configuration**: Enterprise admins can set each model to "Enabled" (available to all members), "Disabled" (unavailable to anyone), or "Optional" (available for assignment to specific enterprise teams)
- **Activation**: Enabled by toggling "Enterprise teams mode" on the Copilot Models settings page. The system uses a least-restrictive strategy — if a user gets model access through any enterprise team, they have access to it everywhere
- **Preparation**: Teams can be created and Optional models assigned to them before enabling enterprise teams mode
- **Rollback**: Admins can revert to the previous configuration at any time during the preview
- **Multi-enterprise users**: For users with Copilot licenses from multiple enterprises, only the policies from the enterprise that issued their license apply
- **Rollout**: Most enterprise customers get preview access starting August 3
- **Positioning**: GitHub describes this as the first step toward broader team-level governance controls

## How to try it

- GitHub Enterprise admins should check the "Enterprise teams mode" toggle on the Copilot Models settings page
- Before enabling it, create the enterprise teams you need and assign Optional models to them
- Preview access rolls out starting August 3, so check your admin console for availability
- If something doesn't work as expected, you can roll back to the previous configuration at any time during the preview
