---
title: "GitHub Copilot for JetBrains Adds OpenTelemetry Configuration, Model Management, and MCP Server Support"
description: "GitHub Copilot for JetBrains now lets teams configure OpenTelemetry export for agent workflows, set token limits and enable/disable models for BYOK setups, and use MCP servers and custom agents directly in agent flows."
pubDate: 2026-07-28
category: copilot
type: news
tags: [Copilot, JetBrains, OpenTelemetry, MCP]
source: https://github.blog/changelog/2026-07-27-github-copilot-for-jetbrains-adds-improvved-opentelemetry-configuration-and-model-management
draft: false
importance: low
---

On July 27, 2026, GitHub announced new configuration features for GitHub Copilot for JetBrains, centered on OpenTelemetry export settings for agent workflows and expanded model management — making it easier to meet organizational observability requirements and manage costs.

## Details

- **OpenTelemetry export configuration**: Available under "Settings > Tools > GitHub Copilot > Chat," letting teams configure OpenTelemetry export for agent workflows to match organizational observability requirements
- **Token limit controls**: Default `maxInputToken` and `maxOutputToken` limits can now be set for BYOK and custom endpoints, supporting cost control and governance
- **Model enable/disable management**: A new model-management control lets teams enable or disable all built-in Copilot models at once, adding flexibility
- **MCP server and custom agent support**: MCP servers and custom agents can now be used directly within agent flows, letting teams bring specialized tools, instructions, and workflows into the IDE consistently
- **Other improvements**: The release also includes Copilot CLI fork support, a new `/rubber-duck` command, improved chat and model-selection UX, and better MCP diagnostics for faster troubleshooting

## How to try it

- Update the GitHub Copilot plugin to the latest version in your JetBrains IDE (e.g., IntelliJ IDEA)
- Configure OpenTelemetry export under "Settings > Tools > GitHub Copilot > Chat"
- BYOK token limits and model enable/disable settings can be configured individually by admins or developers according to organizational governance policy
