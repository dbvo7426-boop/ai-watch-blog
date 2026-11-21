---
title: "VS Code retires the Local harness in February 2027"
description: "The Local harness is deprecated in VS Code 1.146 and will be removed in February 2027; the Copilot harness is its replacement."
pubDate: 2026-11-16
category: copilot
type: news
tags: [GitHub Copilot, VS Code, deprecation, harness]
source: https://github.blog/changelog/2026-11-16-vs-code-retires-the-local-harness-in-february-2027
draft: false
importance: medium
---

The Local harness in Visual Studio Code, the older software that coordinates the model, context and tools for Copilot agent sessions in the editor, is deprecated in VS Code 1.146 and will be removed in February 2027. A three-month transition runs until removal; the Local harness stays available only where organization policy allows, and new features will target the Copilot harness.

**Replacement:** the Microsoft Copilot harness built into VS Code, the default for new sessions since VS Code 1.143. It is built on the Copilot SDK and shares its runtime with Copilot CLI and the GitHub Copilot app. Agent commands still run on your machine; it does not move files to the cloud.

**Differences:**
- Copilot Fusion can choose models and, on supported tiers, coordinate drafting and review.
- Assisted permissions reduce approval prompts; calls the risk assessment does not approve still ask you.
- Copilot connectors (preview) bring in team service context without manual MCP server setup.
- Canvases (preview) provide task boards and interactive diagrams.
- Sessions can continue between the editor and the Agents window, though editor-provided tools need a connected editor.
- Admins can enforce managed runtime permissions and sandbox restrictions, which the Local harness cannot; these must be configured separately.

**Users:** start a new session, select Copilot under Session Target, and review customizations for compatibility since switching does not convert everything automatically. See the transition guide.

**Admins:** review any vscode.temporaryDefaultToLocalHarness exception and verify workflows, permission controls and sandbox configuration before February 2027. That temporary enterprise setting is removed with the Local harness. Copilot Free users can keep their plan, but individual features and Fusion tiers depend on plan, settings and organization policy.
