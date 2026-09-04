---
title: "GitHub Copilot's Enterprise-Managed Settings Can Now Set Any Model as Default"
description: "GitHub added a default-model setting to enterprise-managed configuration, letting admins choose which AI model launches by default for new Copilot conversations, with an option to let individual teams override it."
pubDate: 2026-09-02
category: copilot
type: news
tags: [GitHubCopilot, GitHub, EnterpriseSettings, AdminControls]
source: https://github.blog/changelog/2026-09-02-enterprise-managed-settings-support-any-default-model
draft: false
importance: low
---

GitHub Copilot's enterprise-managed settings now support choosing any model as the default for new conversations, rather than being limited to a fixed set of options.

## Details

- **How to configure it**: administrators set the `model` key in their organization's enterprise-managed settings files
- **Team-level flexibility**: marking the key as `overridable` and updating `team-mappings.json` lets specific enterprise teams choose their own default model instead of inheriting the organization-wide setting
- **Where it applies**: the GitHub Copilot app, Copilot CLI, and Visual Studio Code, for organizations on Copilot Business or Copilot Enterprise

## What happened next

The change gives large organizations finer control over which model employees see by default, without forcing every team under a single enterprise-wide choice.
