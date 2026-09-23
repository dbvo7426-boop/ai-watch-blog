---
title: "GitHub Copilot App Adds OpenTelemetry Support for Agent Monitoring"
description: "The GitHub Copilot app now supports OpenTelemetry through enterprise-managed settings, letting admins export agent session flows, model/tool usage, and step-by-step execution traces to their own monitoring tools, centrally configured rather than per-developer."
pubDate: 2026-09-22
category: copilot
type: news
tags: [GitHubCopilot, GitHub, OpenTelemetry, Observability, AdminControls]
source: https://github.blog/changelog/2026-09-22-opentelemetry-in-the-github-copilot-app
draft: false
importance: low
---

The GitHub Copilot app now supports OpenTelemetry (OTel), letting organizations export agent activity data to compatible monitoring tools.

## Details

- **What can be monitored**: agent session flows including AI model requests and tool usage, step-by-step execution traces to identify unexpected behavior, and centralized telemetry applied consistently across teams rather than configured per developer
- **How to configure**: administrators set the `telemetry` property in their enterprise's `managed-settings.json` to enable data export and specify the receiving endpoint
- **Privacy default**: prompt and response content is excluded by default, though organizations should review their content-capture settings before turning it on

## What happened next

The addition gives enterprises a standard, vendor-neutral way to plug Copilot agent activity into existing observability stacks, treating agent behavior as something to monitor the same way teams already monitor application performance.
